# Release Checklist — Performance Monitoring (PSI + CWV)

## Scope
This checklist defines a repeatable pre-release performance workflow. It is safe to run without storing secrets in the repository.

## 1) PSI Snapshot before release
- [ ] Verify target URLs (default): `/`, `/preise`, `/kontakt`
- [ ] Run PSI snapshots for **mobile** and **desktop**
- [ ] Save generated JSON snapshots under `tmp/psi-reports/`

Command (safe dry-run without key):

```bash
python3 scripts/psi_snapshot.py
```

Command (real snapshots, local env var only):

```bash
PSI_API_KEY=your_local_key python3 scripts/psi_snapshot.py
```

## 2) Core Web Vitals thresholds (gate)
- **LCP** target: `<= 2.5s` (warning if `> 2.5s`)
- **CLS** target: `<= 0.10` (warning if `> 0.10`)
- **INP** target: `<= 200ms` (warning if `> 200ms`)

## 3) Regression gate (release decision)
- [ ] Raise **warning** for any CWV threshold violation (LCP/CLS/INP) on mobile or desktop
- [ ] Treat as **blocker recommendation** if 2+ pages show the same CWV violation
- [ ] Create a ticket with affected URL + metric + observed value

## 4) Documentation
- [ ] Add a short release-note entry with PSI command and findings
- [ ] Keep this checklist and script usage in sync with project workflow

## Notes on secrets and CI
- Do **not** commit PSI keys to the repository.
- Use environment variables in local shell or CI secret storage.
- Dry-run behavior (no `PSI_API_KEY`) intentionally exits successfully to keep onboarding and CI smoke checks safe.
