# Homepage Core Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the homepage and immediate conversion flow so Hamburg Websites presents a Hamburg-born website partner that can grow into visibility, automation, plugins, and practical IT systems.

**Architecture:** Keep the existing Next.js pages-router and current component boundaries. Update the homepage composition through `Header`, `Hero`, `Features`, `Portfolio`, homepage-only sections in `pages/index.js`, and shared CSS tokens in `styles/globals.css`.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, Framer Motion, existing SEO helpers in `lib/seo.js`.

---

## File Structure

- Modify `pages/index.js`: homepage content arrays, SEO metadata, section order, trust/pricing/FAQ/next-step/final CTA blocks.
- Modify `components/Header.jsx`: navigation labels and primary CTA aligned to the approved strategy.
- Modify `components/Hero.jsx`: first viewport copy, CTA routing, proof snippets, and code-native "website grows into system" preview.
- Modify `components/Features.jsx`: offer ladder for Website, Sichtbarkeit, Automatisierung, Tools.
- Modify `components/Portfolio.jsx`: reference preview copy reframed around goals and trust.
- Modify `styles/globals.css`: design tokens, hero/product-preview classes, offer/trust/roadmap/pricing/final CTA styling, responsive polish.
- Do not modify unrelated public pages in this pass.

## Task 1: Homepage SEO And Section Skeleton

**Files:**
- Modify: `pages/index.js`
- Verify: `npm run build`

- [ ] **Step 1: Update homepage SEO copy**

Use this title and description through the existing `SEOHead` component:

```jsx
title="Websites und digitale Systeme aus Hamburg"
description="Hamburg Websites entwickelt klare Websites, lokale Sichtbarkeit und praktische digitale Systeme fuer kleine Unternehmen in Hamburg und Deutschland."
```

- [ ] **Step 2: Update service schema inputs**

Use website-first services that match the strategy:

```jsx
const serviceItems = [
  { name: 'Website und Relaunch', priceFromEur: 650 },
  { name: 'Local SEO und Sichtbarkeit', priceFromEur: 350 },
  { name: 'Automatisierung und Tools', priceFromEur: 900 }
];
```

- [ ] **Step 3: Replace homepage-only copy arrays**

Keep the arrays local to `pages/index.js` and define:

```jsx
const trustItems = [
  { title: 'Direkter Ansprechpartner', text: 'Sie sprechen nicht mit einem anonymen Ticket-System, sondern mit der Person, die Struktur, Umsetzung und naechste Schritte verantwortet.' },
  { title: 'Technisch belastbar', text: 'Saubere SEO-Grundlagen, responsive Oberflaechen, performante Seiten und ein Aufbau, der spaeter Erweiterungen vertraegt.' },
  { title: 'Realistische Versprechen', text: 'Keine garantierten Rankings oder Fantasie-Metriken. Stattdessen klare Entscheidungen, nachvollziehbare Preise und sichtbare Zwischenergebnisse.' }
];

const pricingPreview = [
  { title: 'Website Start', price: 'ab 650 EUR', text: 'Kompakter Onepager oder Relaunch-Einstieg mit klarer Struktur, sauberer Technik und Anfragefuehrung.' },
  { title: 'Business Website', price: 'ab 1.000 EUR', text: 'Mehrseitiger Auftritt mit Leistungen, Referenzen, FAQ, SEO-Basis und Vertrauen fuer kleine Unternehmen.' },
  { title: 'System Ausbau', price: 'nach Scope', text: 'Automatisierungen, Plugins, kleine Admin-Tools oder Prozesshilfen, wenn die Website mehr leisten soll.' }
];

const nextSteps = [
  'Naechster Ausbau: Service Hub',
  'Local SEO und Sichtbarkeit',
  'Workflow-Automatisierung',
  'Plugins und kleine Tools',
  'Echte Case Studies'
];
```

- [ ] **Step 4: Keep the final page order**

Render in this order: header, hero, offer ladder, trust system, portfolio preview, pricing preview, FAQ/contact direction, next-step strip, final CTA, footer.

## Task 2: Header Navigation

**Files:**
- Modify: `components/Header.jsx`

- [ ] **Step 1: Update nav labels**

Use these visible labels:

```jsx
const navItems = [
  { href: '/#features', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/ueber-uns', label: 'Ueber uns' },
  { href: '/kontakt', label: 'Kontakt' }
];
```

- [ ] **Step 2: Make `Kontakt` the primary header action**

Keep it as a rounded dark button on desktop and a readable item in the mobile wrap nav.

## Task 3: Hero Redesign

**Files:**
- Modify: `components/Hero.jsx`
- Modify: `styles/globals.css`

- [ ] **Step 1: Replace hero copy**

Use exact approved copy:

```jsx
<h1>Websites fuer Hamburg, die zu digitalen Systemen wachsen.</h1>
<p>Vom klaren Webauftritt bis zu Automatisierungen, die im Alltag Zeit sparen: ein direkter Partner fuer Website, Sichtbarkeit und praktische IT-Loesungen.</p>
```

- [ ] **Step 2: Replace hero CTAs**

Use:

```jsx
<Link href="/kontakt">Kostenlose Demo anfragen</Link>
<Link href="/kontakt#audit">Digital-Audit ansehen</Link>
```

- [ ] **Step 3: Replace proof snippets**

Use:

```jsx
['Direkter Ansprechpartner', 'Klare Preisrange', 'Hamburg als Vertrauensanker']
```

- [ ] **Step 4: Build the code-native preview**

The preview should contain one website frame and three connected system cards:

```jsx
const systemSteps = [
  { title: 'Website', text: 'Klares Angebot und Anfrageweg' },
  { title: 'Sichtbarkeit', text: 'Lokale Struktur und Inhalte' },
  { title: 'Automatisierung', text: 'Formulare, Tools und Prozesse' }
];
```

Use CSS classes for the frame, rail, cards, and small status marks. Do not add fake metrics.

## Task 4: Offer Ladder And Trust System

**Files:**
- Modify: `components/Features.jsx`
- Modify: `pages/index.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Reframe `Features` as the offer ladder**

Use four items:

```jsx
const services = [
  { title: 'Website', text: 'Start mit einem klaren Auftritt, der Angebot, Vertrauen und Anfrageweg auf den Punkt bringt.' },
  { title: 'Sichtbarkeit', text: 'Lokale SEO-Struktur, Content-Cluster und Signale, die Hamburg als Vertrauensanker nutzen.' },
  { title: 'Automatisierung', text: 'Formulare, Benachrichtigungen, einfache Workflows und interne Prozesse, die Zeit sparen.' },
  { title: 'Plugins und Tools', text: 'Kleine Systeme, Admin-Hilfen oder Integrationen, wenn eine normale Website nicht mehr reicht.' }
];
```

- [ ] **Step 2: Add a trust section after `Features`**

Render `trustItems` as three rows or panels with process/ownership/technical reliability emphasis. Avoid fake ratings and client logos.

## Task 5: References, Pricing, Future Hints, Final CTA

**Files:**
- Modify: `components/Portfolio.jsx`
- Modify: `pages/index.js`
- Modify: `styles/globals.css`

- [ ] **Step 1: Reframe portfolio copy**

Make it clear the examples are industry demos showing goals, style, and technical approach, not invented client proof.

- [ ] **Step 2: Update pricing preview**

Show website-first pricing, then system expansion. Link primary pricing CTA to `/preise` and secondary audit/project CTA to `/kontakt`.

- [ ] **Step 3: Add future hints**

Render `nextSteps` as a roadmap strip and make clear these are next expansion areas until dedicated service pages exist.

- [ ] **Step 4: Final CTA**

Use copy that invites a demo request and an audit-style conversation:

```jsx
Bereit fuer einen Webauftritt, der heute Vertrauen schafft und morgen mitwaechst?
```

## Task 6: Verification

**Files:**
- Verify: `pages/index.js`, `components/Header.jsx`, `components/Hero.jsx`, `components/Features.jsx`, `components/Portfolio.jsx`, `styles/globals.css`

- [ ] **Step 1: Build**

Run:

```powershell
npm run build
```

Expected: Next.js production build finishes successfully.

- [ ] **Step 2: Browser desktop check**

Run the dev server and open `/` in the in-app Browser. Confirm first viewport, scroll order, header links, and both hero CTAs.

- [ ] **Step 3: Browser mobile check**

Resize to a mobile viewport. Confirm no text overflow, nav remains usable, CTA buttons wrap cleanly, and the hero preview is readable.

- [ ] **Step 4: Fidelity comparison**

Use `view_image` for:

```text
docs/superpowers/specs/2026-05-23-homepage-core-flow-concept.png
latest browser screenshot
```

Compare copy, layout, palette, typography, section order, and container model.

- [ ] **Step 5: Git hygiene**

Confirm only intended files changed:

```powershell
git diff --stat
git status --short --branch
```

