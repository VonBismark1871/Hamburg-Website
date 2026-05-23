# Site Strategy

This document is the durable product, SEO, UX, design, trust, and growth strategy for Hamburg Website. Future user-facing updates should preserve this strategic direction unless a later strategy document explicitly replaces it.

## Strategic Thesis

Hamburg Website should become a Hamburg-born digital partner for websites that grow into systems.

The site should not present the business as a cheap one-off web design freelancer, and it should not jump straight into generic AI agency language. The strongest position is a practical ladder:

1. Start with a clear, beautiful, conversion-ready website.
2. Strengthen local visibility, trust, and measurable lead paths.
3. Add useful systems: admin areas, automations, plugins, integrations, dashboards, and AI-assisted workflows.

Hamburg stays the local trust anchor. Germany and the broader DACH market become the growth zone for higher-value digital services.

## Research Signals

- The current repository already has the right base: Next.js pages, pricing, reference demos, contact flow, canonical/noindex helpers, sitemap, process docs, and performance checklist.
- The live site is still more narrowly positioned around "Websites Hamburg." The local checkout already hints at broader value through goals, budgets, functions, and extensibility. Future work should reconcile those two layers.
- EU SME digitalization still has room to grow: [Eurostat Digitalisation in Europe 2025](https://ec.europa.eu/eurostat/web/interactive-publications/digitalisation-2025) notes that SMEs remain below the EU 2030 target for basic digital intensity.
- German companies are struggling with transformation: [Bitkom Digitalisation of the Economy 2025](https://www.bitkom.org/Studienberichte/2025/Digitalisierung-Wirtschaft) reports that 53% of German companies have problems handling digitalization.
- AI is moving from hype to practical adoption: [ifo Business Survey 2025](https://www.ifo.de/en/facts/2025-06-16/companies-germany-increasingly-relying-artificial-intelligence) reports that 40.9% of German companies use AI, with another 18.9% planning to start.
- German Mittelstand digitalization has slowed, but strategic need remains high: [KfW Digitalisierungsbericht Mittelstand 2025](https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-Digitalisierungsbericht-Mittelstand/KfW-Digitalisierungsbericht-2025.pdf).
- Google guidance supports the site's core direction: clear crawlable content, canonical hygiene, internal links, useful page structure, LocalBusiness structured data, and accurate Google Business Profile information. See [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business), and [Google Business Profile Help](https://support.google.com/business/answer/7039811?hl=en-en).

## Target Customer

Primary target: small SMEs with roughly 5-50 employees.

Best-fit segments:

- Local services: health, dental, physio, salons, restaurants, auto service, real estate, trades, professional services.
- Owner-led companies that need more qualified inquiries, better trust, and less manual work.
- Teams with some budget and operational pain, but without a large internal IT department.
- Businesses that need a better website first, then practical digital systems later.

Buying triggers:

- Existing website looks outdated or does not generate enough qualified leads.
- Google visibility, reviews, or local trust trail competitors.
- Manual inquiry handling, follow-ups, documents, bookings, or status updates waste time.
- The owner wants direct accountability instead of an agency handoff chain.
- The company wants AI or automation, but needs a safe, concrete first step.

Avoid chasing:

- Ultra-low-budget buyers who only compare homepage prices.
- Clients asking for vague "AI magic" without a process or measurable problem.
- Enterprise buyers needing heavy procurement, certifications, and multi-team delivery before the site has proof for that market.

## Positioning

Core message:

> Websites for local businesses that can grow into digital systems.

German-facing phrasing can vary by page:

- "Websites fuer Hamburg, die Vertrauen schaffen und Anfragen erleichtern."
- "Vom modernen Webauftritt bis zu Automatisierungen, die im Alltag Zeit sparen."
- "Ein klarer Einstieg: Website, Sichtbarkeit, Prozesse."

Positioning rules:

- Keep Hamburg visible in brand, proof, LocalBusiness schema, and local landing pages.
- Do not make every page Hamburg-only. Service pages for automation, plugins, and custom systems can target Germany/DACH intent.
- Lead with business outcomes: inquiries, trust, clarity, saved time, fewer manual steps.
- Avoid hype language such as "AI revolution," "10x growth guaranteed," or fear-based urgency.
- Make the offer feel accessible premium: clear entry points, real technical depth, calm confidence.

## Site Architecture

Target information architecture:

- Home: strategic overview, primary website offer, trust proof, reference demos, offer ladder, CTA.
- Services hub: one page that explains the full ladder from website to systems.
- Website services: website packages, redesign, admin/CMS, landing pages, maintenance.
- Local SEO and growth: Google Business Profile alignment, local pages, reviews, structured data, content improvements.
- Automation: workflow automation, forms, lead routing, follow-ups, reporting, internal operations.
- Plugins and tools: custom website plugins, small internal tools, admin panels, dashboards, integrations.
- AI and process consulting: practical AI audits, safe prototypes, process selection, data/privacy boundaries.
- References: demo and case-study system organized by business goal and industry, not just visual category.
- Process: short transparent path from audit/demo to launch and growth.
- Pricing: accessible entry packages plus higher-value growth/system tiers.
- About: founder/direct contact, Hamburg base, calm technical credibility.
- FAQ: sales objections, SEO expectations, timelines, ownership, hosting, automation scope, AI risk.
- Contact: primary project/demo request plus secondary digital/automation audit.
- Legal: Impressum, Datenschutz, AGB.

Navigation should stay simple. Recommended top-level nav after expansion:

- Leistungen
- Referenzen
- Ablauf
- Preise
- Ueber uns
- Kontakt

"Leistungen" should become a hub/dropdown or page section that routes to websites, SEO/growth, automation, and plugins/tools.

## SEO Architecture

SEO should grow in two layers.

Layer 1: Hamburg local authority

- Keep homepage and core pages clearly connected to Hamburg.
- Maintain LocalBusiness schema in `lib/seo.js`.
- Keep NAP consistency: name, email, phone, Hamburg address/service area.
- Align the website with Google Business Profile: services, categories, photos, reviews, contact details, and URLs should tell the same story.
- Build local service intent pages only when they can be useful and specific, not thin keyword pages.

Layer 2: Germany/DACH service intent

- Create service pages around buyer intent, not tool names alone:
  - Website erstellen lassen
  - Website Relaunch
  - Website mit Adminbereich
  - Local SEO fuer kleine Unternehmen
  - Workflow Automatisierung fuer KMU
  - Individuelle Webtools und Plugins
  - KI Beratung fuer konkrete Prozesse
- These pages can target Germany/DACH while using Hamburg as proof of origin.
- Avoid duplicate pages that only swap city names.

Technical SEO rules:

- Use canonical URLs through `components/SEOHead.jsx` and `lib/seo.js`.
- Keep `public/sitemap.xml` updated whenever indexable routes change.
- Keep preview deployments noindexed according to `docs/seo/canonical-and-preview-noindex.md`.
- Use descriptive internal link text.
- Keep headings structured by user intent, not visual styling.
- Use LocalBusiness, Organization, Service, and FAQ structured data where accurate.

Content clusters to build later:

- Local website strategy for service businesses.
- Website redesign decision guides.
- Local SEO and Google Business Profile basics.
- Automation examples for SMEs.
- Industry-specific playbooks for dental, physio, restaurant, salon, auto service, real estate, and trades.

## Offer Ladder

The offer should make it easy to start small and grow responsibly.

1. Free diagnostic or demo
   - Goal: reduce risk and show direction.
   - CTA: "Kostenlose Demo anfragen" or "Digital-Audit anfragen."
   - Output: quick direction, scope recommendation, and realistic price range.

2. Website packages
   - Website business card, onepager, multipage website, admin/CMS website.
   - Keep clear entry pricing, but avoid training buyers to see only the lowest price.
   - Explain what each package is for and when it is not enough.

3. Care, hosting, and improvements
   - Website care, hosting, content updates, technical checks, performance hygiene.
   - Position as continuity and reliability, not just maintenance.

4. Local SEO and visibility
   - Google Business Profile alignment, metadata, local structured data, service pages, review strategy, local content.
   - Sell as visibility infrastructure, not ranking guarantees.

5. Workflow automation
   - Lead routing, booking reminders, follow-up emails, CRM handoff, quote intake, status dashboards, recurring reports.
   - Prioritize measurable saved time and fewer dropped leads.

6. Plugins, admin tools, and integrations
   - Custom forms, calculators, dashboards, simple portals, CMS workflows, integrations with existing tools.
   - Position as "small software where the website alone is not enough."

7. AI and process consulting
   - AI audit, prototype, assistant workflows, document handling, customer support drafts, knowledge-base search.
   - Keep scope practical, GDPR-aware, and tied to existing processes.

## Trust System

Trust should be engineered across the site, not left to one "About" section.

Required trust signals:

- Direct founder/contact responsibility.
- Clear Hamburg base and service area.
- Transparent price ranges and what changes the price.
- Realistic timelines and correction loops.
- Clear ownership/hand-off expectations.
- Demo/reference examples that show industry logic, not just visual mockups.
- Technical proof: performance, responsive design, SEO structure, canonical/noindex hygiene, accessible forms.
- Privacy/GDPR posture: no unnecessary third-party assets, no hidden data collection, careful AI automation claims.

Claims policy:

- Do not invent ratings, client logos, certifications, or revenue metrics.
- Use examples and demos clearly as concept references unless they become real case studies.
- Prefer "can help improve" and "designed to" over guaranteed ranking or conversion claims.

Future proof types:

- Before/after redesign examples.
- Short case studies with problem, solution, result.
- Screenshots of admin/tools where safe.
- Process diagrams for automation.
- Client quotes only when real and approved.

## Design Direction

Design should feel accessible premium:

- Calm technical confidence.
- High readability and strong hierarchy.
- Polished but not overdecorated.
- Local trust without tourist cliches.
- Modern enough for IT services, warm enough for small business owners.

Visual rules:

- Keep the brand clean and recognizable.
- Use real or highly believable business imagery.
- Avoid generic "AI brain," abstract tech tunnel, or dashboard noise imagery.
- Use section rhythm: clear hero, proof, service ladder, examples, process, pricing, FAQ, CTA.
- Make reference demos feel like different business systems, not repeated card skins.
- Keep mobile layouts crisp, because many local buyers will inspect on phone.

Design anti-goals:

- Cheap freelancer template.
- Overly corporate consulting deck.
- AI-hype neon interface.
- Repetitive bento grids without business substance.
- Decorative claims that do not help a buyer decide.

## Conversion Model

Primary conversion:

- Project/demo request for a website, redesign, or website-with-functionality.

Secondary conversion:

- Digital/automation audit for companies that already have a website or process pain.

Contact flow requirements:

- Keep the form short enough to complete quickly.
- Ask for current website, business, goal, budget range, start timing, and message.
- Add optional service interest when service pages expand:
  - Website or redesign
  - Local SEO and visibility
  - Automation or workflow
  - Plugin/tool/admin area
  - AI/process audit
- Reinforce response time, direct contact, Hamburg base, and no-obligation first step near the form.

Conversion copy should answer:

- What happens after I submit?
- How much might this cost?
- How quickly can I see a direction?
- Who is responsible?
- Can this grow beyond a website later?

## Roadmap

Phase 1: Strategy alignment

- Add this strategy document.
- Make `AGENTS.md` and `README.md` point future work here.
- Keep current production UI unchanged until a dedicated implementation plan exists.

Phase 2: Positioning update

- Adjust homepage messaging from pure "websites in Hamburg" to website-first digital partner.
- Keep Hamburg in the H1 or immediate supporting copy.
- Add the offer ladder visibly: Website, Visibility, Automation, Tools.

Phase 3: Services architecture

- Add a services hub.
- Add focused service pages for websites/redesign, local SEO/growth, automation, and plugins/tools.
- Keep AI as practical process support, not a standalone hype page at first.

Phase 4: Trust and proof

- Expand references into business-goal examples.
- Add proof modules: process transparency, technical quality, ownership, maintenance, privacy.
- Prepare real case-study format for future clients.

Phase 5: SEO expansion

- Update sitemap for new indexable service pages.
- Add structured data per service page.
- Build internal links from homepage, pricing, references, FAQ, and contact.
- Align Google Business Profile services with the website offer ladder.

Phase 6: Growth systems

- Add automation audit CTA.
- Add examples of workflows and tools.
- Add admin/tool/plugin screenshots or diagrams when real deliverables exist.
- Create content clusters around SME digitalization, local SEO, and automation.

## Future Update Rules

Before changing user-facing copy, navigation, service pages, pricing, references, contact flow, or SEO structure:

1. Check whether the change supports the strategic thesis.
2. Preserve Hamburg as a trust anchor unless the change intentionally targets Germany/DACH service intent.
3. Keep websites as the primary entry offer.
4. Ensure expanded IT/automation/AI services are practical, measurable, and trust-building.
5. Avoid claims that cannot be proven.
6. Update sitemap, structured data, and docs when route strategy changes.

