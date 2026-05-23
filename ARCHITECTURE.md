# Architecture Guide

## Current Shape

This is a Next.js pages-router project. Production pages live under `pages/`, shared UI under `components/`, reusable reference-demo pieces under `components/references/`, structured content under `data/`, shared helpers under `lib/`, global styling under `styles/`, and public assets under `public/`.

## Boundaries

- Page files should compose route-level content and metadata. Avoid turning page files into large utility modules.
- Shared components should own reusable UI behavior and styling patterns.
- Reference-demo components should stay under `components/references/` when they are specific to demo systems.
- Data that is reused by multiple components or pages should live in `data/` or a feature-specific data module.
- SEO logic should flow through `lib/seo.js` and `components/SEOHead.jsx` rather than ad hoc tags in every page.

## Component Design

- Prefer focused components with clear props over large copied page sections.
- Extract only when there is real reuse or a clear responsibility boundary.
- Keep layout, content, and state ownership obvious.
- Avoid hidden global coupling. If a component depends on a route path, pass the path explicitly.
- Keep interactive state local unless multiple distant components need the same state.

## Styling Strategy

- Use Tailwind CSS as the primary styling tool.
- Reuse existing spacing, color, typography, border, and shadow conventions.
- Avoid arbitrary Tailwind values when a standard scale value works.
- Keep responsive behavior explicit with stable layout constraints.
- Do not introduce a new styling system without a written architecture reason.

## Assets

- Brand assets belong under `public/brand/`.
- Demo images and reference assets belong under clear subdirectories in `public/`.
- Prefer optimized, appropriately sized assets.
- Keep local fonts and privacy-sensitive asset choices aligned with existing privacy/legal expectations.
- Do not hotlink third-party assets from production pages unless the task explicitly requires it and privacy impact is understood.

## SEO and Metadata

- Use `SEOHead` for route metadata, canonical URLs, and noindex behavior.
- Keep canonical paths page-specific.
- Demo pages that should not be indexed must opt into noindex or rely on preview detection where appropriate.
- Update SEO docs when changing canonical, robots, sitemap, or preview-indexing behavior.

## Performance Budget

- Keep pages fast on mobile networks.
- Avoid adding large dependencies for small UI effects.
- Prefer static data and server-rendered output where practical.
- Watch for layout shift from images, carousels, late-loading fonts, or unbounded containers.
- Use the PSI workflow in `docs/performance/release-checklist.md` for release-level performance checks.

## Dependency Policy

- Do not add production dependencies without checking whether the current stack already solves the need.
- If a dependency is necessary, document why it is worth the bundle, maintenance, and security cost.
- Keep lockfile changes intentional and tied to package changes.

## Architecture Decisions

For meaningful architecture changes, add a short note under `docs/` or in the PR description:

- Context: what problem forced the decision.
- Decision: what changed.
- Consequences: tradeoffs, migration needs, or follow-up checks.

