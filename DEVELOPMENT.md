# Development Guide

## Start Here

1. Read `AGENTS.md`.
2. Inspect `package.json`, lockfiles, and relevant source files before changing commands or dependencies.
3. Start from the default branch `main11`.
4. Create a scoped branch such as `codex/<short-scope>`.

## Local Setup

Use the package manager implied by the repository lockfile. This repository currently includes `pnpm-lock.yaml`, while `package.json` defines npm-compatible scripts.

Typical commands:

```bash
npm run dev
npm run build
```

If dependency installation is needed, prefer the existing package manager and avoid switching lockfile formats.

## Implementation Workflow

1. Define the goal, relevant files, constraints, and done criteria.
2. Read the closest existing implementation before editing.
3. Make the smallest coherent change.
4. Keep production behavior stable unless the task asks for a behavior change.
5. Run the checks that match the modified surface.
6. Summarize what changed, how it was verified, and what remains risky.

## Frontend Workflow

- For existing pages, preserve the established brand and layout system unless the task is a redesign.
- For new or redesigned UI, define the structure, copy, responsive behavior, assets, and verification approach before coding.
- Use real browser verification for visual or interactive changes.
- The Codex in-app Browser is appropriate for local unauthenticated routes and file-backed previews.
- Check at least one desktop viewport and one mobile-sized viewport for user-facing UI changes.

## Browser Verification

When working on a page:

1. Start the app with `npm run dev`.
2. Open the affected route in the Browser plugin or another browser.
3. Verify layout, navigation, copy, forms, and interactive states.
4. Check the console for obvious errors.
5. Record the route and viewport(s) checked in the final note or PR.

## Code Style

- Keep React components readable and focused.
- Prefer explicit names over abbreviations.
- Avoid broad formatting churn.
- Do not leave debug logs, temporary labels, or prototype-only copy in production code.
- Keep comments rare and useful; use them to explain non-obvious constraints.

## Documentation Changes

- Root docs describe project-wide rules.
- `docs/` contains process, SEO, performance, and deeper operational guidance.
- Update docs in the same PR when behavior, commands, or workflows change.
- Documentation-only PRs should still include validation notes.

## Secrets and Environment

- Do not commit API keys, PSI keys, form secrets, analytics secrets, or service credentials.
- Use local environment variables or CI secret storage.
- The PSI workflow intentionally supports a safe dry run without `PSI_API_KEY`.

