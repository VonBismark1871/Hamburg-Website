# Codex PR Rules

## Purpose

This repository treats implementation PRs and artifact-only PRs differently.
A PR that changes only `tmp/**` content is typically artifact output and should not be merged as implementation by accident.

## Guardrail policy

Rule: `fail_if_changed_files_only_in_tmp_unless_explicitly_labeled_artifacts_only`

- If a PR changes only `tmp/**`, CI fails by default.
- Override path (intentional artifact-only PR): add label `artifacts-only`.
- If a PR includes any file outside `tmp/**`, this guardrail passes and does not block normal implementation workflows.

## Why this exists

Past tmp-only merges created confusion by looking like feature delivery while not changing production behavior.
This guardrail makes intent explicit and improves review quality.

## Reviewer checklist

1. Check whether changed files are only under `tmp/**`.
2. If yes, require label `artifacts-only` and verify PR states no production behavior change.
3. If no, review as a regular implementation PR.

## Author checklist

- Use the PR template and classify the PR type.
- For tmp-only PRs, always add `artifacts-only` label.
- Clearly state production impact (`No production behavior change` when applicable).
