# AGENTS.md

This file is the durable project guidance for Codex and other agentic coding tools working in this repository. Read it before changing files, and treat more specific instructions in nested `AGENTS.md` files as overrides if they are added later.

## Project Context

- Product: Hamburg Websites, a Next.js marketing website and reference-demo portfolio for local Hamburg businesses.
- Stack: Next.js 14, React 18, Tailwind CSS, Netlify deployment, local Inter font assets, SEO helpers in `lib/seo.js` and `components/SEOHead.jsx`.
- Important directories: `pages/`, `components/`, `components/references/`, `data/`, `lib/`, `styles/`, `public/`, `scripts/`, `docs/`.
- Existing process docs: `docs/process/codex-pr-rules.md`, `docs/seo/canonical-and-preview-noindex.md`, `docs/performance/release-checklist.md`.

## Operating Principles

- Inspect the existing code and docs before editing. Prefer `rg` and targeted file reads over broad assumptions.
- Preserve user work. Never revert unrelated changes, generated artifacts, or edits you did not make unless the user explicitly asks.
- Keep changes scoped to the request. Avoid drive-by refactors, dependency churn, and formatting-only sweeps.
- Follow the current architecture before inventing new patterns. Reuse existing components, SEO helpers, layout conventions, Tailwind tokens, and reference-demo structures.
- For complex or ambiguous work, plan first. Make the goal, context, constraints, and definition of done explicit before implementation.
- Write code that can be checked. Favor small components, pure helpers, explicit data flow, and testable behavior over clever one-off markup.
- Use subagents only for independent read-heavy work such as exploration, audits, log review, or comparison. Avoid parallel write-heavy work unless the user explicitly asks for it.

## Implementation Standards

- Start from the relevant page/component/data file and trace how it is used before modifying it.
- Keep public behavior stable unless the task explicitly changes it.
- Do not duplicate large component blocks. Extract focused components only when it reduces real repetition or clarifies ownership.
- Keep UI copy specific to Hamburg Websites and its local-business audience. Do not add vague SaaS filler, fake claims, or unverifiable metrics.
- Protect SEO behavior. Pages should use the existing canonical/noindex flow where applicable.
- Keep accessibility visible in implementation: semantic headings, labels, keyboard-friendly controls, sufficient contrast, meaningful alt text, and no hidden interaction traps.
- Treat performance as a product requirement. Avoid unnecessary client-side work, layout shift, unbounded images, and oversized dependencies.
- Ask before adding production dependencies unless the task clearly requires them and the existing stack has no suitable option.

## Frontend Quality Bar

- Build the actual usable page or component first, not a marketing wrapper around future work.
- Match the existing brand system unless the user asks for a redesign.
- Use Tailwind deliberately; avoid arbitrary values unless they solve a concrete layout requirement.
- Verify responsive behavior on desktop and mobile-sized viewports for user-facing UI changes.
- Use the Codex Browser plugin or another browser verification path for visual or interaction changes. Local pages that do not require authentication are suitable for the in-app browser.
- Do not ship clipped text, overlapping UI, inert controls, broken navigation, or placeholder imagery as finished work.

## Verification

Before claiming completion, run the checks that match the change:

- Documentation-only changes: review headings, links, code fences, file references, and spelling.
- JavaScript/React changes: run `npm run build` when feasible.
- UI changes: run the app with `npm run dev` and verify the relevant route in a browser.
- SEO changes: verify canonical and noindex behavior against `docs/seo/canonical-and-preview-noindex.md`.
- Performance workflow changes: keep `scripts/psi_snapshot.py` and `docs/performance/release-checklist.md` in sync.
- Screenshot proof changes: run `npm run screenshot:proof` when that workflow is relevant.

If a check cannot be run, state why and describe the residual risk.

## Git and Review Guidelines

- Default branch: `main11`.
- Preferred branch names: `codex/<short-scope>`.
- Keep commits small and intentional. Use documentation commits such as `docs: add project agent and workflow guides`.
- Follow `.github/pull_request_template.md`.
- A PR that changes only `tmp/**` must be explicitly labeled `artifacts-only`; see `docs/process/codex-pr-rules.md`.
- Do not force-push, rewrite shared history, or delete remote branches unless explicitly requested.

## Codex Review Guidelines

When reviewing this repository, focus on high-impact issues:

- P0/P1 regressions in navigation, contact flow, SEO indexability, legal pages, or reference demos.
- Security and privacy risks, especially leaked secrets, tracking changes, form handling, and personal data.
- Accessibility regressions that block keyboard, screen reader, or mobile users.
- Data loss, broken deploy/build behavior, or changes that make preview pages indexable.
- Performance regressions that add avoidable layout shift, excessive JavaScript, or unoptimized assets.

Do not spend review attention on harmless style preferences unless they hide a serious bug.

