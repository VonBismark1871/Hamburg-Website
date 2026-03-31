# S-04 Implementierungsreport – Schema.org JSON-LD

## Summary (was geändert/warum)
- Es wurde **kein Produktionscode direkt geändert**. Stattdessen wurde ein anwendbarer Unified Diff Patch unter `tmp/S-04/patch.diff` erstellt.
- Der Patch implementiert:
  - `Organization` + `LocalBusiness` JSON-LD (mit NAP-Daten),
  - `Service` JSON-LD mit den drei angegebenen Leistungen inkl. `price_from_eur` als Mindestpreis,
  - Einbindung auf `home` (`pages/index.js`) und `preise` (`pages/preise.js`),
  - Beibehaltung von `FAQPage` ausschließlich auf der FAQ-Seite (`pages/faq.js` nutzt weiterhin `faqSchema(faqItems)`).
- Es werden **keine Bewertungen/Ratings** eingeführt.

## Files changed
- `tmp/S-04/patch.diff`
- `tmp/S-04/report.md`

## Commands to test
1. Patch anwenden:
   ```bash
   git apply --check tmp/S-04/patch.diff
   git apply tmp/S-04/patch.diff
   ```
2. Build/Lint:
   ```bash
   npm run lint
   npm run build
   ```
3. Lokal starten:
   ```bash
   npm run dev
   ```
4. JSON-LD prüfen:
   - Startseite (`/`) und Preisseite (`/preise`) in den
     - Google Rich Results Test
     - Schema Markup Validator
   - FAQ-Seite (`/faq`) separat prüfen und verifizieren, dass `FAQPage.mainEntity` exakt die sichtbaren FAQ-Inhalte enthält.

## Risks / Rollback
- **Risiko:** Falls `serviceSchema` bereits an anderen Stellen ohne Parameter verwendet wird, könnte sich das Ausgabeformat ändern.
  - Mitigation im Patch: Standardparameter `services = []`.
- **Rollback:**
  ```bash
  git restore lib/seo.js pages/index.js pages/preise.js
  ```
  oder Commit-Revert, falls bereits gemerged.

## Open Questions
- Sollen zusätzlich `openingHoursSpecification` oder `sameAs` (Social/Profiles) ergänzt werden? (Nur wenn belastbare Daten vorhanden sind.)
- Soll `areaServed` ausschließlich Hamburg bleiben oder auf Metropolregion erweitert werden?
