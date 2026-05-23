# Hamburg Website

Hamburg Website is a Next.js site for Hamburg-focused web design and local-business website demos. It combines the main marketing pages, reference/demo pages, SEO utilities, and release checklists needed to keep the site reliable.

## Tech Stack

Detect the active commands from repository manifests before changing tooling. At the time of writing:

- Next.js 14 and React 18
- Tailwind CSS and PostCSS
- Netlify deployment config in `netlify.toml`
- Local brand and font assets under `public/`
- SEO helpers in `lib/seo.js` and `components/SEOHead.jsx`

## Common Commands

Run these from the repository root after installing dependencies with the package manager implied by the lockfile.

```bash
npm run dev
npm run build
npm run screenshot:proof
npm run perf:psi
```

If a package manager or script changes, trust `package.json` and the lockfile over this README.

## Documentation Map

- `AGENTS.md` - durable project instructions for Codex and agentic coding tools.
- `PROJECT_BRIEF.md` - product goals, audience, content principles, and definition of done.
- `ARCHITECTURE.md` - architecture and dependency guidance.
- `DEVELOPMENT.md` - local development and implementation workflow.
- `QA.md` - verification checklist for docs, code, UI, SEO, accessibility, and release readiness.
- `GIT_WORKFLOW.md` - branch, commit, PR, and recovery rules.
- `docs/process/codex-pr-rules.md` - existing guardrail for tmp-only PRs.
- `docs/seo/canonical-and-preview-noindex.md` - canonical and preview noindex behavior.
- `docs/performance/release-checklist.md` - PSI and Core Web Vitals release workflow.

## Contribution Flow

1. Start from `main11` and create a scoped branch such as `codex/<short-scope>`.
2. Read `AGENTS.md` and the docs relevant to the change.
3. Inspect the existing implementation before editing.
4. Make the smallest coherent change.
5. Run the checks listed in `QA.md` that match the change.
6. Open a PR using `.github/pull_request_template.md` and include validation evidence.

## Production Impact

This repository contains production pages, reference demos, generated proof artifacts, and process documentation. Be explicit in PRs about whether a change affects production behavior. Changes limited to `tmp/**` are treated as artifact-only unless the PR includes the required label.

