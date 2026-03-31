# S-04 Implementierungsreport – Schema.org JSON-LD

## Summary (was geändert/warum)
Es wurde **kein Produktionscode direkt verändert**. Stattdessen wurde ein anwendbarer Unified-Diff unter `tmp/S-04/patch.diff` erzeugt.

Der Patch implementiert strukturierte Daten für:
1. **Homepage**: `Organization` + `LocalBusiness` + `Service`
2. **Preise-Seite**: `OfferCatalog` mit den drei übergebenen Leistungen inklusive `priceSpecification` (EUR)
3. **FAQ-Seite**: `FAQPage` ausschließlich auf der FAQ-Seite, abgeleitet aus den sichtbaren `faqItems`

Dabei wurden nur bereitgestellte, wahrheitsgemäße Daten verwendet (keine Reviews/Ratings/Testimonials).

## Files changed
- `tmp/S-04/patch.diff`
- `tmp/S-04/report.md`

## Commands to test
> Nach Anwendung des Patches im Repo-Root ausführen:

1. Patch anwenden (trocken):
```bash
git apply --check tmp/S-04/patch.diff
```

2. Patch anwenden:
```bash
git apply tmp/S-04/patch.diff
```

3. Lint/Build:
```bash
npm run lint
npm run build
```

4. JSON-LD manuell prüfen:
```bash
npm run dev
```
Dann Seiten aufrufen:
- `/`
- `/preise`
- `/faq`

Und im HTML nach `<script type="application/ld+json">` prüfen.

5. Externe Validatoren:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

Prüfhinweise:
- FAQ Rich Results nur für `/faq` erwarten.
- Keine Review-/Rating-Felder vorhanden.
- Preise als numerische `price` mit `priceCurrency: "EUR"`.

## Risks/Rollback
### Risiken
- `image`-URL im `LocalBusiness`-Schema referenziert `/brand/logo.svg`; falls Datei fehlt, ist nur dieses Feld schwächer, restliches Schema bleibt nutzbar.
- Mehrfachausgabe von JSON-LD ist beabsichtigt (mehrere Typen pro Seite), aber bei späteren Erweiterungen auf Duplikate achten.

### Rollback
- Patch zurücknehmen:
```bash
git apply -R tmp/S-04/patch.diff
```

## Open Questions
1. Soll ein `sameAs`-Array (z. B. LinkedIn/Instagram) ergänzt werden? Aktuell leer, um keine unbestätigten Profile zu veröffentlichen.
2. Soll für `LocalBusiness` zusätzlich `openingHoursSpecification` gepflegt werden? Derzeit nicht gesetzt, da keine bestätigten Öffnungszeiten im Input vorhanden.
3. Soll für Service-Angebote statt `OfferCatalog` ein separates `Service`-Objekt pro Angebot mit eigener URL (falls vorhanden) verwendet werden?
