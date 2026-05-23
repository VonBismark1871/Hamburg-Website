# Project Brief

## Mission

Hamburg Website helps local Hamburg businesses evaluate and request modern websites. The site should feel trustworthy, practical, fast, and tailored to real local service providers rather than generic startup software.

## Primary Audience

- Local business owners in Hamburg who need a website, redesign, lead-generation page, or reference demo.
- Service categories already represented in the repository include dental, restaurant, physiotherapy, real estate, barbershop, hair salon, and auto service examples.
- Visitors may be non-technical. Copy should explain outcomes, process, trust, and next steps clearly.

## Product Goals

- Communicate the offer quickly on the homepage and pricing/process pages.
- Make reference demos easy to scan and navigate.
- Convert qualified visitors through the contact flow.
- Keep legal, privacy, SEO, and preview-indexing behavior reliable.
- Maintain high perceived quality on mobile, where many local-business users will first inspect the site.

## Content Principles

- Use specific, plain language. Avoid vague claims such as "world-class" unless the page proves the claim.
- Keep German user-facing copy consistent with the rest of the site unless the task explicitly asks for another language.
- Treat local relevance as a feature: Hamburg, neighborhood context, service-business needs, trust, and practical conversion paths matter.
- Do not invent customer logos, testimonials, metrics, certifications, or legal claims.
- Keep demo content realistic and clearly framed as a reference/demo where appropriate.

## UX Principles

- The first viewport should make the offer, brand, and next action obvious.
- Navigation should remain predictable across production pages and reference demos.
- Contact and pricing paths should reduce friction, not create extra choices.
- Reference pages should showcase real page structure, not just decorative mockups.
- Mobile layouts must be designed, not merely collapsed.

## Accessibility Baseline

- Use semantic headings in a logical order.
- Provide visible focus states and keyboard-accessible controls.
- Label form fields and interactive controls.
- Use meaningful alt text for informative images; use empty alt text only for decorative images.
- Maintain readable contrast and avoid text overlap or clipped content at common viewport widths.

## SEO and Indexing Baseline

- Use canonical URLs through the existing SEO helpers.
- Keep preview deployments noindexed according to `docs/seo/canonical-and-preview-noindex.md`.
- Keep `public/robots.txt` and `public/sitemap.xml` aligned with production routes.
- Avoid duplicate canonical URLs on reusable demo layouts.
- Use page-specific titles and descriptions for important routes.

## Definition of Done

A change is done only when:

- The implementation matches the requested scope and does not rewrite unrelated areas.
- Relevant build, lint, test, browser, SEO, or documentation checks have been run or explicitly marked unavailable.
- Mobile and desktop behavior have been considered for user-facing UI.
- PR notes explain production impact and validation.
- Any known risk or skipped check is documented.

