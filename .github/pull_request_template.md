## PR Type

Select one:
- [ ] Implementation PR (changes production behavior)
- [ ] Artifact-only PR (no production behavior change)

## Guardrail: tmp-only changes

If this PR changes only `tmp/**` files, it is **not** treated as implementation work by default.

To intentionally submit an artifact-only PR with only `tmp/**` changes:
1. Apply label: `artifacts-only`
2. Confirm this PR does not change production behavior

Without the `artifacts-only` label, tmp-only PRs will fail CI guardrails.

## Production impact

Describe user-facing or system-facing behavior changes.
If none, explicitly write: `No production behavior change`.

## Validation

List checks you ran (tests/lint/manual verification).
