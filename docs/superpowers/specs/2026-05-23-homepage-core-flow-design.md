# Homepage Core Flow Redesign Design Spec

## Goal

Redesign the homepage and immediate conversion flow so Hamburg Websites clearly presents itself as a Hamburg-born digital partner for websites that can grow into useful systems. The first implementation pass should improve the homepage, header/navigation, homepage CTAs, offer ladder, trust blocks, reference preview, pricing preview, and final contact direction without rebuilding the full public site.

## Approved Concept

- Concept image: `docs/superpowers/specs/2026-05-23-homepage-core-flow-concept.png`
- Direction: Calm Systems Studio.
- Strategic source: `SITE_STRATEGY.md`.

The accepted visual direction is accessible premium: calm technical confidence, high readability, polished spacing, and enough warmth for small SME owners. Hamburg stays visible as the trust anchor, while the offer expands from websites into visibility, automation, and tools.

## Scope

In scope for the first implementation pass:

- Homepage structure and copy in `pages/index.js`.
- Header labels and primary CTA behavior in `components/Header.jsx`.
- Hero composition and hero preview in `components/Hero.jsx`.
- Homepage service/offer ladder in `components/Features.jsx` or a focused replacement component.
- Homepage reference preview in `components/Portfolio.jsx`.
- Homepage pricing preview, trust proof, FAQ preview, final CTA, and "what comes next" guidance.
- Shared CSS/tokens in `styles/globals.css` only where needed for the homepage redesign.
- SEO title/description for the homepage, while preserving `organizationSchema`, `localBusinessSchema`, and `serviceSchema`.

Out of scope for this pass:

- New service pages.
- Full redesign of pricing, process, references, about, FAQ, contact, or demo pages.
- New claims, fake ratings, fake client logos, or invented business metrics.
- Figma/Canva deliverables.

## Content And Information Architecture

Header navigation:

- Leistungen
- Referenzen
- Ablauf
- Preise
- Ueber uns
- Kontakt

Hero:

- H1: `Websites fuer Hamburg, die zu digitalen Systemen wachsen.`
- Body: `Vom klaren Webauftritt bis zu Automatisierungen, die im Alltag Zeit sparen: ein direkter Partner fuer Website, Sichtbarkeit und praktische IT-Loesungen.`
- Primary CTA: `Kostenlose Demo anfragen`
- Secondary CTA: `Digital-Audit ansehen`
- Proof snippets:
  - `Direkter Ansprechpartner`
  - `Klare Preisrange`
  - `Hamburg als Vertrauensanker`

Homepage section order:

1. Header and hero.
2. Offer ladder: Website, Sichtbarkeit, Automatisierung, Tools.
3. Trust system: process transparency, ownership, SEO/performance/privacy.
4. Reference preview: three industry examples with goal-oriented framing.
5. Accessible premium pricing preview.
6. Next steps strip: Service Hub, Local SEO, Automation, Plugins, Case Studies.
7. Final CTA/contact direction.

## Visual Design

Use the accepted concept as the visual reference, not as a static asset.

Design tokens:

- Backgrounds: true white and very light cool-neutral surfaces.
- Text: deep ink / graphite.
- Primary accent: Hamburg water/sky blue.
- Secondary accent: restrained lime only for primary actions or small progress cues.
- Dark surfaces: graphite/deep green-black for final CTA or process emphasis.
- Typography: strong editorial headings, readable sans body and UI text.
- Corners: restrained 8-16px radius for most UI; pill buttons are allowed for primary CTAs.
- Shadows: calm and shallow; no heavy floating-card look.

Visual rules:

- No hero eyebrow, pretitle, badge, or pill above the H1.
- No decorative orbs, bokeh, AI-brain imagery, or neon tech cliches.
- No generic fake analytics dashboard.
- Use a refined product/workflow visual in the hero: a website preview connected to simple process cards.
- Keep UI text code-native.
- Keep the page responsive and mobile-first.

## Component Approach

Preferred implementation shape:

- Keep the existing Next.js pages-router structure.
- Keep `Header`, `Hero`, `Features`, `Portfolio`, and existing shared components where useful.
- Add small local arrays for homepage content rather than hardcoding repeated blocks inline.
- Create focused subcomponents inside the relevant component file when they keep the file understandable.
- Use existing SEO helpers and preserve structured data.

The hero preview should communicate "website grows into system" through code-native UI:

- Website preview frame.
- Three connected cards for Website, Sichtbarkeit, Automatisierung/Tools.
- Simple line/rail treatment to suggest flow.
- No fake numeric claims.

## Future Hints To Leave In The Homepage

The first pass should visibly point to the next roadmap without pretending those pages already exist.

Use wording like:

- `Naechster Ausbau: Service Hub`
- `Local SEO und Sichtbarkeit`
- `Workflow-Automatisierung`
- `Plugins und kleine Tools`
- `Echte Case Studies`

These should be framed as the next expansion path, not active full service pages if the routes are not built yet. Links should go to existing routes (`/kontakt`, `/preise`, `/referenzen`, or anchors) until dedicated pages exist.

## Conversion Model

Primary path:

1. Visitor understands the website-first offer.
2. Visitor sees that the site can grow into visibility, automation, and tools.
3. Visitor clicks `Kostenlose Demo anfragen` and reaches `/kontakt`.

Secondary path:

1. Visitor already has a website or process pain.
2. Visitor clicks `Digital-Audit ansehen`.
3. For this pass, route to `/kontakt` or a homepage anchor that explains the audit.

Contact and pricing previews should answer:

- What happens after I submit?
- How much might this cost?
- Who is responsible?
- Can this grow beyond a website later?

## Testing And Acceptance

Required checks after implementation:

- `npm run build`
- Browser verification with the in-app Browser for `/` on desktop and mobile-sized viewport.
- Click primary hero CTA and verify it reaches `/kontakt`.
- Click secondary hero CTA and verify it reaches the intended audit/contact destination.
- Verify header navigation remains usable on desktop and mobile.
- Compare implementation screenshot against the accepted concept image with `view_image`.
- Confirm no new user-facing claims invent ratings, client logos, guaranteed rankings, or revenue results.
- Confirm homepage SEO uses the existing SEO helper flow.

Acceptance criteria:

- The first viewport clearly communicates the new strategic thesis.
- Hamburg remains visible without making the offer Hamburg-only.
- The offer ladder is clear in under one scroll.
- The homepage contains explicit next-step hints for service hub, local SEO, automation, plugins/tools, and case studies.
- No unrelated public pages are redesigned in this pass.

