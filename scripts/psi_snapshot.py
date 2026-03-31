#!/usr/bin/env python3
"""Repeatable PSI snapshot collector for release monitoring.

Behavior:
- Uses Google PageSpeed Insights API only when PSI_API_KEY is set.
- Without PSI_API_KEY it runs in safe dry-run mode and exits with status 0.
- Stores JSON outputs in tmp/psi-reports/ (runtime output, not committed artifacts).
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request

DEFAULT_URLS = [
    "https://hamburgwebsites.de/",
    "https://hamburgwebsites.de/preise",
    "https://hamburgwebsites.de/kontakt",
]
DEFAULT_STRATEGIES = ["mobile", "desktop"]
DEFAULT_OUT_DIR = pathlib.Path("tmp/psi-reports")



def build_endpoint(url: str, strategy: str, api_key: str) -> str:
    params = {
        "url": url,
        "strategy": strategy,
        "key": api_key,
        "category": ["performance"],
    }
    query = urllib.parse.urlencode(params, doseq=True)
    return f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?{query}"



def fetch_json(endpoint: str) -> dict:
    req = urllib.request.Request(endpoint, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))



def filename_for(url: str, strategy: str, output_dir: pathlib.Path) -> pathlib.Path:
    parsed = urllib.parse.urlparse(url)
    slug = parsed.path.strip("/") or "home"
    return output_dir / f"{slug.replace('/', '_')}-{strategy}.json"



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
        help=f"Output directory for PSI JSON files (default: {DEFAULT_OUT_DIR})",
    )
    return parser.parse_args()



def dry_run(urls: list[str], strategies: list[str], output_dir: pathlib.Path) -> int:
    print("[dry-run] PSI_API_KEY is not set. No external API requests were made.")
    print("Set PSI_API_KEY to collect real snapshots.")
    print(f"Snapshot output directory: {output_dir}")
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
    output_dir.mkdir(parents=True, exist_ok=True)

    api_key = os.getenv("PSI_API_KEY", "").strip()
    if not api_key:
        return dry_run(urls, strategies, output_dir)

    failures = 0
    for url in urls:
        for strategy in strategies:
            endpoint = build_endpoint(url, strategy, api_key)
            target = filename_for(url, strategy, output_dir)
            try:
                data = fetch_json(endpoint)
                target.write_text(
                    json.dumps(data, ensure_ascii=False, indent=2),
                    encoding="utf-8",
                )
                print(f"[ok] {strategy:7} {url} -> {target}")
            except Exception as exc:  # noqa: BLE001
                failures += 1
                print(f"[error] {strategy:7} {url}: {exc}", file=sys.stderr)

    if failures:
        print(f"Completed with {failures} failed request(s).", file=sys.stderr)
        return 1

    print("PSI snapshot completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
