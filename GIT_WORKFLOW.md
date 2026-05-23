# Git Workflow

## Repository

- GitHub: `VonBismark1871/Hamburg-Website`
- Default branch: `main11`
- Deployment target: Netlify, configured by `netlify.toml`

## Branches

- Start new work from `main11`.
- Preferred branch format: `codex/<short-scope>`.
- Keep one branch focused on one coherent change.
- Avoid committing unrelated generated artifacts, logs, or local experiment files.

Example:

```bash
git switch main11
git pull --ff-only origin main11
git switch -c codex/project-docs
```

## Commits

Use small, reviewable commits. Suggested prefixes:

- `docs:` documentation-only changes.
- `fix:` bug fixes.
- `feat:` user-facing features.
- `refactor:` behavior-preserving code structure changes.
- `test:` test-only changes.
- `chore:` tooling or maintenance changes.

Example:

```bash
git add AGENTS.md README.md PROJECT_BRIEF.md ARCHITECTURE.md DEVELOPMENT.md QA.md GIT_WORKFLOW.md
git commit -m "docs: add project agent and workflow guides"
```

## Pull Requests

- Use `.github/pull_request_template.md`.
- State whether the PR changes production behavior.
- List validation commands and browser checks.
- Link docs that explain affected workflows when relevant.
- Keep Codex review guidance in `AGENTS.md` current so automated review focuses on serious risks.

## Tmp-Only Guardrail

This repository has a CI guardrail for PRs that change only `tmp/**`.

- If a PR changes only `tmp/**`, add the `artifacts-only` label.
- If the PR includes production or documentation changes outside `tmp/**`, review it as normal implementation work.
- See `docs/process/codex-pr-rules.md` for details.

## Force Push and Recovery

- Do not force-push without explicit approval.
- Prefer `git revert` for changes already shared with others.
- If a branch is messy, create a new clean branch from `main11` and cherry-pick only the intended commits.
- Before destructive cleanup, verify the current branch, remote status, and uncommitted changes.

## Before Pushing

1. Run `git status --short --branch`.
2. Review `git diff --stat` and `git diff`.
3. Run the checks from `QA.md` that match the change.
4. Commit with a clear message.
5. Push the branch and include validation evidence in the PR.

