# Implementierungsreport — V-01 Screenshot Pack

## Summary (was geändert / warum)
- Es wurde **kein Produktionscode direkt verändert**. Stattdessen wurde ein anwendbarer Unified-Diff unter `tmp/V-01/patch.diff` erstellt.
- Der Diff ergänzt:
  - `scripts/proof-screenshot-pack.mjs`: Playwright-Skript für Screenshots der vier angegebenen URLs in Desktop- und Mobile-Viewport.
  - `package.json`: npm-Script `screenshot:proof` und Dev-Dependency `playwright`.
- Dateinamensschema ist stabil und idempotent (`<slug>-desktop.png`, `<slug>-mobile.png`), wodurch Wiederholungen dieselben Dateien überschreiben.

## Files changed
- `tmp/V-01/patch.diff`
- `tmp/V-01/report.md`

## Ausführung & Abhängigkeiten
### Voraussetzungen
- Node.js 18+
- npm
- Playwright (über Patch als devDependency vorgesehen)
- Browser-Binaries: `npx playwright install chromium`

### Vorgesehene Ausführung (nach Anwenden des Patches)
1. `npm install`
2. `npx playwright install chromium`
3. `npm run screenshot:proof`

### Ergebnisartefakte
- Zielordner: `tmp/V-01/screenshots`
- Erwartete Dateien:
  - `home-desktop.png`, `home-mobile.png`
  - `preise-desktop.png`, `preise-mobile.png`
  - `kontakt-desktop.png`, `kontakt-mobile.png`
  - `autoservice-demo-desktop.png`, `autoservice-demo-mobile.png`

### Tatsächlich im aktuellen Lauf ausgeführt
- `git diff -- package.json scripts/proof-screenshot-pack.mjs > tmp/V-01/patch.diff`
- `git apply --check tmp/V-01/patch.diff` (Validierung erfolgreich)

## Commands to test
- `git apply --check tmp/V-01/patch.diff`
- `git apply tmp/V-01/patch.diff`
- `npm install`
- `npx playwright install chromium`
- `npm run screenshot:proof`
- `ls -1 tmp/V-01/screenshots`

## Risks / Rollback
### Risiken
- Externe Seiten können dynamische Inhalte/Popups laden, was zu visuell inkonsistenten Screenshots führt.
- `waitUntil: networkidle` kann bei Tracking/long-polling in seltenen Fällen zu Timeouts führen.
- Mobile-Rendering kann sich zwischen Playwright/Chromium-Versionen leicht unterscheiden.

### Rollback
- Da nur Diff + Report erzeugt wurden: Entfernen von `tmp/V-01/` genügt.
- Nach Patch-Anwendung: `git restore package.json && rm scripts/proof-screenshot-pack.mjs`

## Open Questions
- Soll `repo_root` im JSON künftig konkret gesetzt werden (statt Platzhalter `<PATH>`), um Runner/CI-Integration zu ermöglichen?
- Sollen Cookie-Banner aktiv weggeclickt werden (projektspezifische Selektoren) für konsistentere Proof-Screenshots?
- Soll zusätzlich `fullPage: false` (Above-the-fold) als zweites Set erzeugt werden?
