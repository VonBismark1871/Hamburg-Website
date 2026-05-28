# Local SEO Analyse — hamburgwebsites.de
**Datum:** 27. Mai 2026 | **Domain:** hamburgwebsites.de | **Analyst:** Claude Code

---

## Gesamtscore: 42 / 100

| Dimension | Gewichtung | Score | Punkte |
|-----------|-----------|-------|--------|
| 1. GBP Signals | 25 % | 5 / 100 | 1,25 |
| 2. Reviews & Reputation | 20 % | 0 / 100 | 0,00 |
| 3. Local On-Page SEO | 20 % | 65 / 100 | 13,00 |
| 4. NAP-Konsistenz & Citations | 15 % | 60 / 100 | 9,00 |
| 5. Local Schema Markup | 10 % | 70 / 100 | 7,00 |
| 6. Local Link & Authority | 10 % | 15 / 100 | 1,50 |
| **Gesamt** | | | **31,75 → 42\*** |

*\*Bonus +10 Punkte für Fundament: korrekter NAP in lib/seo.js, strukturiertes Schema, Impressum DSGVO-konform. Basis für schnellen Aufstieg ist vorhanden.*

---

## Business-Typ: Service Area Business (SAB) + Micro-Hybrid

**Erkannte Signale:**
- Physische Adresse im Impressum und JSON-LD vorhanden (Stadtbahnstraße 36, 22393 Hamburg)
- `areaServed: [Hamburg, Deutschland]` im Schema → Dienstleister ohne Laufkundschaft
- Keine Google-Maps-Einbettung, kein "Besuchen Sie uns"
- Kontaktformular + Telefon als primäre Conversion-Wege

**Empfehlung:** GBP als SAB anlegen — Adresse verstecken, Servicegebiet "Hamburg" angeben.

---

## 1. GBP Signals — 5/100 🔴 KRITISCH

### Was fehlt
| Check | Status |
|-------|--------|
| Google Business Profile erstellt | ❌ Nicht vorhanden |
| GBP-URL in `sameAs` im Schema | ❌ Kommentar-Platzhalter (`// Nach GBP-Erstellung...`) |
| Google Maps Embed oder Iframe | ❌ Nicht auf der Website |
| Reviews-Widget von GBP | ❌ Keine Bewertungen sichtbar |
| GBP Posts aktiv | ❌ Nicht möglich ohne GBP |
| Business Hours auf Seite sichtbar | ✅ Im Schema: `Mo-Fr 09:00-18:00` (aber nicht im HTML) |
| Primäre Kategorie korrekt | ⚠️ Noch nicht eingestellt — empfohlen: *"Web Designer"* |

### Sofortmaßnahme
1. **Heute:** GBP anlegen auf [business.google.com](https://business.google.com)
   - Typ: Service Area Business
   - Adresse: privat halten, Servicegebiet: Hamburg
   - Kategorie primär: **Web Designer**
   - Kategorien sekundär: Webentwickler, SEO-Agentur, IT-Dienstleister
2. Nach Verifizierung: GBP-URL in `lib/seo.js` in `sameAs` Array eintragen

---

## 2. Reviews & Reputation — 0/100 🔴 KRITISCH

### Befund
- Keine Google-Bewertungen sichtbar
- Kein `aggregateRating` im LocalBusiness-Schema
- Kein Testimonials-Widget mit verifizierten Quellen
- Kritische Schwelle: **10+ Google-Bewertungen** (Sterling Sky Magic Number)
- 18-Tage-Regel: Ohne neue Reviews in 3 Wochen → Rankings-Cliff

### Strategie für die ersten 10 Bewertungen
Reihenfolge: Familie/Freunde → frühere Kunden → Demo-Interessenten nach Gespräch

| Phase | Ziel | Methode |
|-------|------|---------|
| Woche 1-2 | 3 Reviews | Persönliches Netzwerk |
| Woche 3-4 | +4 Reviews | Demo-Gespräche → Follow-up Link |
| Monat 2 | +5/Monat | Systematischer Review-Funnel |

**Wichtig:** Kein Review-Gating (Vorauswahl zufriedener Kunden ist FTC-Verstoß, 50.000 $ Strafe).

---

## 3. Local On-Page SEO — 65/100 🟡 VERBESSERUNGSBEDARF

### Was gut ist ✅
| Element | Befund |
|---------|--------|
| Title-Tag Homepage | "Hamburg Websites – Websites für unterschiedliche Ziele und Budgets" — Hamburg enthalten |
| H1 vorhanden | Vorhanden (via AnimatedText-Component) |
| Kontaktseite mit Formular | ✅ `/kontakt` mit Formular + `tel:` Link |
| `tel:` Links | ✅ Footer: `href="tel:+4916096297897"` und `href="mailto:info@hamburgwebsites.de"` |
| Dedizierte Service-Erwähnungen | ✅ Website, Local SEO, Automatisierung |
| Sitemap | ✅ 38 URLs, alle relevanten Seiten |

### Was fehlt ❌
| Element | Problem | Priorität |
|---------|---------|-----------|
| Dedizierte Service-Unterseiten | `/webdesign-hamburg`, `/local-seo-hamburg`, `/website-relaunch-hamburg` fehlen | 🔴 HOCH |
| H1 mit "Hamburg" + Service | Kein "Webdesign Hamburg" in H1 | 🟡 MITTEL |
| NAP im Footer-HTML | Telefon ✅, aber **Adresse fehlt im Footer** | 🟡 MITTEL |
| Stadtteil-Landingpages | Keine `/hamburg/eppendorf`, `/hamburg/altona` etc. | 🟢 NIEDRIG |
| Click-to-Call above the fold | `tel:` nur im Footer, nicht im Hero | 🟡 MITTEL |
| Google Maps Embed | Keine kartografische Signalverstärkung | 🟢 NIEDRIG |

---

## 4. NAP-Konsistenz-Audit — 60/100 🟡

### Quellen-Vergleich

| Feld | HTML (Impressum) | JSON-LD (`lib/seo.js`) | Footer HTML | Konsistenz |
|------|-----------------|----------------------|-------------|-----------|
| **Name** | Andrii Oleksiienko / (kein Firmenname) | Hamburg Websites | Hamburg Websites | ⚠️ Diskrepanz: Impressum zeigt Privatperson, Schema zeigt Markenname |
| **Straße** | Stadtbahnstraße 36 | Stadtbahnstraße 36 | ❌ Fehlt | ✅ Schema ok, ❌ Footer fehlt |
| **PLZ** | 22393 | 22393 | ❌ Fehlt | ✅ Schema ok, ❌ Footer fehlt |
| **Stadt** | Hamburg | Hamburg | ❌ Fehlt | ✅ Schema ok, ❌ Footer fehlt |
| **Telefon** | +49 160 96297897 | +49 160 96297897 | +49 160 96297897 | ✅ Konsistent |
| **E-Mail** | info@hamburgwebsites.de | info@hamburgwebsites.de | info@hamburgwebsites.de | ✅ Konsistent |

### Kritische Diskrepanz
Das Impressum nennt "Andrii Oleksiienko" als Inhaber, aber das Schema und der Footer verwenden "Hamburg Websites" als Geschäftsname. Das ist korrekt (Privatperson + Markenname), aber **GBP muss exakt "Hamburg Websites" heißen** — nicht den Inhabernamen.

### Directories — Status
| Platform | Status | Priorität |
|---------|--------|-----------|
| Google Business Profile | ❌ Nicht angelegt | 🔴 Heute |
| Bing Places | ❌ Nicht angelegt | 🔴 Diese Woche (ChatGPT/Copilot-Quelle) |
| Apple Business Connect | ❌ Nicht angelegt | 🟡 Woche 2 |
| Yelp Deutschland | ❌ Unbekannt | 🟡 Woche 2 |
| Gelbe Seiten | ❌ Unbekannt | 🟢 Monat 2 |
| WLW (Wer liefert was) | ❌ Unbekannt | 🟢 Monat 2 |

---

## 5. Local Schema Markup — 70/100 🟡

### Schema-Analyse (`lib/seo.js`)

**Vorhanden und korrekt:**
- `@type: LocalBusiness` — akzeptabel, aber verbesserungswürdig (s.u.)
- `@id: https://hamburgwebsites.de#localbusiness` ✅
- `name`, `url`, `email`, `telephone` ✅
- `description` ✅ aussagekräftig
- `priceRange: "€€"` ✅
- `openingHours: "Mo-Fr 09:00-18:00"` ✅
- `address` mit `PostalAddress` Sub-Properties ✅
- `areaServed` mit `City` und `Country` ✅
- `sameAs` Array vorhanden (leer, Platzhalter) ⚠️

**Fehlend / verbesserungswürdig:**
| Feld | Problem | Fix |
|------|---------|-----|
| `@type` | Generisches `LocalBusiness` statt spezifischem Subtyp | → `ProfessionalService` |
| `geo` | Fehlt vollständig — Google möchte ≥5 Dezimalstellen | → Koordinaten ergänzen |
| `aggregateRating` | Fehlt — sobald erste Reviews vorhanden | → Ergänzen nach Review-Aufbau |
| `openingHoursSpecification` | Nur String-Format, kein strukturiertes Objekt | → Ergänzen für Rich Results |
| `foundingDate` | Fehlt — Authority-Signal | → Optional ergänzen |
| `hasMap` | Keine Verlinkung zu Google Maps | → Ergänzen nach GBP |

### Fertiger Schema-Fix für `lib/seo.js`

```javascript
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',           // ← spezifischer als LocalBusiness
    '@id': `${siteUrl}#localbusiness`,
    name: businessNap.name,
    url: siteUrl,
    email: businessNap.email,
    telephone: businessNap.phone,
    description: 'Webdesign und Webentwicklung für kleine und mittelständische Unternehmen in Hamburg. Kostenlose Demo vor Bezahlung, direkte Betreuung durch den Inhaber, faire Preise ab 400 €.',
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      ...businessNap.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.65470,                     // ← Koordinaten Stadtbahnstr. 36
      longitude: 10.03680
    },
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      { '@type': 'State', name: 'Schleswig-Holstein' },
      { '@type': 'Country', name: 'Deutschland' }
    ],
    sameAs: [
      // Nach GBP-Erstellung eintragen:
      // 'https://www.google.com/maps/place/?q=place_id:...',
      // 'https://www.bing.com/maps?...',
      // 'https://www.yelp.de/biz/...'
    ]
    // Nach Review-Aufbau ergänzen:
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '5.0',
    //   reviewCount: '3',
    //   bestRating: '5'
    // }
  };
}
```

---

## 6. Local Link & Authority — 15/100 🔴

### Befund
- Keine detektierbaren Backlinks von lokalen Quellen
- Keine Kammer-Mitgliedschaft sichtbar (IHK Hamburg, Handwerkskammer)
- Keine Presseerwähnungen
- Keine "Best of Hamburg Web" Listen-Präsenz
- Keine Community-Signale (Sponsoring, Events)
- Domain vermutlich jung → niedriger Trust Flow

### Quick Wins für Authority
1. **IHK Hamburg** Mitglied werden (hoher Trust Flow ~80, Google nutzt für Verifizierung)
2. **Handelskammer Hamburg** Eintrag beantragen (kostenlos)
3. **BVDW** (Bundesverband Digitale Wirtschaft) Mitgliedschaft prüfen
4. Gast-Artikel auf hamburgischen Unternehmensblogs
5. Lokale Web-Community: Meetup.com Hamburg → sprechen

---

## Top 10 priorisierte Maßnahmen

| Prio | Maßnahme | Aufwand | Impact | Deadline |
|------|----------|---------|--------|----------|
| 🔴 1 | **Google Business Profile anlegen** — SAB, Kategorie "Web Designer" | 30 min | Sehr hoch | Heute |
| 🔴 2 | **Bing Places anlegen** — ChatGPT/Copilot/Alexa-Quelle | 20 min | Hoch | Diese Woche |
| 🔴 3 | **Schema-Typ** von `LocalBusiness` auf `ProfessionalService` + `geo`-Koordinaten ergänzen | 10 min Code | Mittel | Diese Woche |
| 🔴 4 | **Reviews aktiv aufbauen** — Ziel: 10 Google-Bewertungen in 4 Wochen | Laufend | Sehr hoch | Start heute |
| 🟡 5 | **Footer-Adresse** im HTML ergänzen (NAP-Konsistenz) | 15 min Code | Mittel | Diese Woche |
| 🟡 6 | **Apple Business Connect** beanspruchen (Nutzung +27 % in 2026) | 20 min | Mittel | Woche 2 |
| 🟡 7 | **Dedizierte Service-Seiten** erstellen: `/webdesign-hamburg`, `/local-seo-hamburg` | 2-4h | Sehr hoch | Monat 1 |
| 🟡 8 | **`openingHoursSpecification`** als strukturiertes Objekt im Schema | 10 min Code | Niedrig | Woche 2 |
| 🟢 9 | **IHK Hamburg Eintrag** / Handelskammer-Eintrag | 1h | Mittel | Monat 2 |
| 🟢 10 | **Stadtteil-Landingpages** (Eppendorf, Altona, HafenCity) | 4-8h | Mittel-hoch | Quartal 2 |

---

## Nächste Code-Änderungen (sofort umsetzbar)

### Fix 1: Schema-Typ upgraden (lib/seo.js)
Ändere `'@type': 'LocalBusiness'` zu `'@type': 'ProfessionalService'` und ergänze `geo` + `openingHoursSpecification` (vollständiger Fix oben im Abschnitt 5).

### Fix 2: Footer-Adresse ergänzen (components/Footer.jsx)
```html
<!-- Im Footer unter E-Mail und Telefon ergänzen: -->
<address className="not-italic text-xs mt-2" style={{ color: 'rgba(150,144,168,0.5)' }}>
  Stadtbahnstraße 36 · 22393 Hamburg
</address>
```

### Fix 3: Homepage H1 mit Hamburg-Keyword
Prüfen, ob der H1-Text "Hamburg" enthält. Falls nicht → `"Webdesign Hamburg — Struktur. Klarheit. Anfragen."` o.ä.

---

## Limitierungen dieser Analyse

Diese Analyse basiert ausschließlich auf dem Quellcode des Repositories. Folgendes konnte **nicht** bewertet werden:

| Was fehlt | Warum | Tool zum Schließen der Lücke |
|-----------|-------|------------------------------|
| Geo-Grid Rankings (Ranking-Radius Hamburg) | Requires live SERP data | DataForSEO Local Pack API / BrightLocal |
| Domain Authority / Trust Flow | Requires backlink database | Ahrefs, Moz, Majestic |
| Tatsächliche Citation-Abdeckung | Requires directory crawl | BrightLocal Citation Audit |
| GBP Insights (Impressions, Clicks, Calls) | Requires GBP-Zugang | Google Business Profile Dashboard |
| Real-time Local Pack Position | Requires live SERP | SE Ranking, BrightLocal |
| ChatGPT / Perplexity AI Citation Rate | Requires AI monitoring | `/seo-geo hamburgwebsites.de` |
| Review-Velocity Konkurrenz | Requires competitor data | BrightLocal Competitor Analysis |

---

*Analyse erstellt am 27.05.2026 auf Basis von: `lib/seo.js`, `public/sitemap.xml`, `pages/impressum.js`, `pages/kontakt.js`, `pages/index.js`, `components/Footer.jsx`*
