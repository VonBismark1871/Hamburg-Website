#!/usr/bin/env python3
"""Optional PSI snapshot collector.

- Uses PSI API only when PSI_API_KEY is present.
- Without key: exits successfully in dry-run mode with instructions.
- Stores outputs under tmp/P-02/reports/.
"""

from __future__ import annotations

import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request

URLS = [
    "https://hamburgwebsites.de/",
    "https://hamburgwebsites.de/preise",
    "https://hamburgwebsites.de/kontakt",
]
STRATEGIES = ["mobile", "desktop"]
OUT_DIR = pathlib.Path("tmp/P-02/reports")


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
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def filename_for(url: str, strategy: str) -> pathlib.Path:
    slug = urllib.parse.urlparse(url).path.strip("/") or "home"
    return OUT_DIR / f"{slug.replace('/', '_')}-{strategy}.json"


def dry_run() -> int:
    print("[dry-run] PSI_API_KEY not set. No API requests executed.")
    print("Set PSI_API_KEY to enable snapshots.")
    print("Planned requests:")
    for url in URLS:
        for strategy in STRATEGIES:
            print(f"- {strategy:7} {url}")
    return 0


def main() -> int:
    api_key = os.getenv("PSI_API_KEY", "").strip()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not api_key:
        return dry_run()

    failures = 0
    for url in URLS:
        for strategy in STRATEGIES:
            endpoint = build_endpoint(url, strategy, api_key)
            target = filename_for(url, strategy)
            try:
                data = fetch_json(endpoint)
                target.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
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
