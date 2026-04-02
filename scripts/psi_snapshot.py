#!/usr/bin/env python3
"""Repeatable PSI snapshot collector for release monitoring.

Behavior:
- Uses Google PageSpeed Insights API only when PSI_API_KEY is set.
- Without PSI_API_KEY it runs in safe dry-run mode and exits with status 0.
- Stores JSON outputs in run-scoped directories under tmp/psi-reports/.
- Produces summary.json to make baseline comparison easier.
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from typing import Any

DEFAULT_URLS = [
    "https://hamburgwebsites.de/",
    "https://hamburgwebsites.de/preise",
    "https://hamburgwebsites.de/kontakt",
]
DEFAULT_STRATEGIES = ["mobile", "desktop"]
DEFAULT_OUT_DIR = pathlib.Path("tmp/psi-reports")


def utc_timestamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def build_endpoint(url: str, strategy: str, api_key: str) -> str:
    params = {
        "url": url,
        "strategy": strategy,
        "key": api_key,
        "category": ["performance"],
    }
    query = urllib.parse.urlencode(params, doseq=True)
    return f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?{query}"


def fetch_json(endpoint: str) -> dict[str, Any]:
    req = urllib.request.Request(endpoint, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))


def filename_for(url: str, strategy: str, raw_dir: pathlib.Path) -> pathlib.Path:
    parsed = urllib.parse.urlparse(url)
    slug = parsed.path.strip("/") or "home"
    return raw_dir / f"{slug.replace('/', '_')}-{strategy}.json"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Collect PSI performance snapshots")
    parser.add_argument(
        "--url",
        action="append",
        dest="urls",
        help="URL to snapshot (repeat for multiple). Defaults to release URLs.",
    )
    parser.add_argument(
        "--strategy",
        action="append",
        choices=DEFAULT_STRATEGIES,
        dest="strategies",
        help="PSI strategy. Repeat for multiple. Defaults to mobile+desktop.",
    )
    parser.add_argument(
        "--out-dir",
        default=str(DEFAULT_OUT_DIR),
        help=f"Output directory for PSI run folders (default: {DEFAULT_OUT_DIR})",
    )
    parser.add_argument(
        "--run-id",
        default=utc_timestamp(),
        help="Run folder name (default: UTC timestamp like 20260402T120000Z)",
    )
    parser.add_argument(
        "--compare-to",
        help="Optional previous run folder (path to a run dir or summary.json).",
    )
    return parser.parse_args()


def get_nested(data: dict[str, Any], path: list[str], default: Any = None) -> Any:
    current: Any = data
    for key in path:
        if not isinstance(current, dict) or key not in current:
            return default
        current = current[key]
    return current


def normalize_lighthouse_score(raw_score: Any) -> float | None:
    if not isinstance(raw_score, (int, float)):
        return None
    return round(float(raw_score) * 100, 1)


def extract_entry(url: str, strategy: str, data: dict[str, Any], raw_file: pathlib.Path) -> dict[str, Any]:
    lh_score = normalize_lighthouse_score(
        get_nested(data, ["lighthouseResult", "categories", "performance", "score"])
    )

    audits = get_nested(data, ["lighthouseResult", "audits"], {})
    lcp_lab_ms = get_nested(audits, ["largest-contentful-paint", "numericValue"])
    cls_lab = get_nested(audits, ["cumulative-layout-shift", "numericValue"])
    inp_lab_ms = get_nested(audits, ["interaction-to-next-paint", "numericValue"])
    if inp_lab_ms is None:
        inp_lab_ms = get_nested(audits, ["experimental-interaction-to-next-paint", "numericValue"])

    field_metrics = get_nested(data, ["loadingExperience", "metrics"], {})
    lcp_field_ms = get_nested(field_metrics, ["LARGEST_CONTENTFUL_PAINT_MS", "percentile"])
    cls_field = get_nested(field_metrics, ["CUMULATIVE_LAYOUT_SHIFT_SCORE", "percentile"])
    inp_field_ms = get_nested(field_metrics, ["INTERACTION_TO_NEXT_PAINT", "percentile"])

    return {
        "url": url,
        "strategy": strategy,
        "raw_file": str(raw_file),
        "lighthouse_performance_score": lh_score,
        "lab": {
            "lcp_ms": lcp_lab_ms,
            "cls": cls_lab,
            "inp_ms": inp_lab_ms,
        },
        "field": {
            "lcp_ms_p75": lcp_field_ms,
            "cls_p75": cls_field,
            "inp_ms_p75": inp_field_ms,
        },
    }


def read_summary(compare_to: str) -> dict[str, Any]:
    target = pathlib.Path(compare_to)
    if target.is_dir():
        target = target / "summary.json"
    if not target.exists():
        raise FileNotFoundError(f"Comparison summary not found: {target}")
    return json.loads(target.read_text(encoding="utf-8"))


def diff_metric(current: Any, previous: Any) -> float | None:
    if not isinstance(current, (int, float)) or not isinstance(previous, (int, float)):
        return None
    return round(float(current) - float(previous), 2)


def create_comparison(current: dict[str, Any], previous: dict[str, Any]) -> dict[str, Any]:
    prev_map = {
        (entry.get("url"), entry.get("strategy")): entry
        for entry in previous.get("entries", [])
    }
    comparisons: list[dict[str, Any]] = []
    for entry in current.get("entries", []):
        key = (entry.get("url"), entry.get("strategy"))
        prev_entry = prev_map.get(key)
        if not prev_entry:
            continue

        row = {
            "url": key[0],
            "strategy": key[1],
            "delta": {
                "lighthouse_performance_score": diff_metric(
                    entry.get("lighthouse_performance_score"),
                    prev_entry.get("lighthouse_performance_score"),
                ),
                "lab_lcp_ms": diff_metric(entry.get("lab", {}).get("lcp_ms"), prev_entry.get("lab", {}).get("lcp_ms")),
                "lab_cls": diff_metric(entry.get("lab", {}).get("cls"), prev_entry.get("lab", {}).get("cls")),
                "lab_inp_ms": diff_metric(entry.get("lab", {}).get("inp_ms"), prev_entry.get("lab", {}).get("inp_ms")),
            },
        }
        comparisons.append(row)
    return {
        "current_run": current.get("run_id"),
        "previous_run": previous.get("run_id"),
        "generated_at_utc": utc_timestamp(),
        "comparisons": comparisons,
    }


def dry_run(
    urls: list[str],
    strategies: list[str],
    output_dir: pathlib.Path,
    run_id: str,
    compare_to: str | None,
) -> int:
    run_dir = output_dir / run_id
    print("[dry-run] PSI_API_KEY is not set. No external API requests were made.")
    print("Set PSI_API_KEY to collect real snapshots.")
    print(f"Snapshot run directory: {run_dir}")
    print(f"Raw reports directory: {run_dir / 'raw'}")
    print(f"Summary file: {run_dir / 'summary.json'}")
    if compare_to:
        print(f"Comparison input: {compare_to}")
        print(f"Comparison output: {run_dir / 'comparison.json'}")
    print("Planned requests:")
    for url in urls:
        for strategy in strategies:
            print(f"- {strategy:7} {url}")
    return 0


def main() -> int:
    args = parse_args()
    urls = args.urls or DEFAULT_URLS
    strategies = args.strategies or DEFAULT_STRATEGIES
    output_dir = pathlib.Path(args.out_dir)
    run_id = args.run_id

    run_dir = output_dir / run_id
    raw_dir = run_dir / "raw"
    raw_dir.mkdir(parents=True, exist_ok=True)

    api_key = os.getenv("PSI_API_KEY", "").strip()
    if not api_key:
        return dry_run(urls, strategies, output_dir, run_id, args.compare_to)

    failures = 0
    entries: list[dict[str, Any]] = []

    for url in urls:
        for strategy in strategies:
            endpoint = build_endpoint(url, strategy, api_key)
            target = filename_for(url, strategy, raw_dir)
            try:
                data = fetch_json(endpoint)
                target.write_text(
                    json.dumps(data, ensure_ascii=False, indent=2),
                    encoding="utf-8",
                )
                entries.append(extract_entry(url, strategy, data, target))
                print(f"[ok] {strategy:7} {url} -> {target}")
            except Exception as exc:  # noqa: BLE001
                failures += 1
                print(f"[error] {strategy:7} {url}: {exc}", file=sys.stderr)

    summary = {
        "run_id": run_id,
        "generated_at_utc": utc_timestamp(),
        "out_dir": str(output_dir),
        "run_dir": str(run_dir),
        "urls": urls,
        "strategies": strategies,
        "entries": entries,
    }
    summary_path = run_dir / "summary.json"
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[ok] summary -> {summary_path}")

    if args.compare_to:
        try:
            previous = read_summary(args.compare_to)
            comparison = create_comparison(summary, previous)
            comparison_path = run_dir / "comparison.json"
            comparison_path.write_text(
                json.dumps(comparison, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"[ok] comparison -> {comparison_path}")
        except Exception as exc:  # noqa: BLE001
            failures += 1
            print(f"[error] comparison: {exc}", file=sys.stderr)

    if failures:
        print(f"Completed with {failures} failed request(s).", file=sys.stderr)
        return 1

    print("PSI snapshot completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
