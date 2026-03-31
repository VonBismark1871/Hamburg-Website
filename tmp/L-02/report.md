# L-02 – Google Fonts lokal hosten (Inter) + Privacy-Text anpassen

## Summary (was geändert/warum)
- Im Patch werden alle direkten Google-Fonts-Einbindungen in `pages/_app.js` entfernt (`preconnect` + Stylesheet-Link zu `fonts.googleapis.com`).
- In `styles/globals.css` werden idempotente `@font-face`-Definitionen für Inter (Gewichte 400/500/600/700/800) mit `font-display: swap` ergänzt.
- In `pages/datenschutz.js` wird der Text von „externes Laden via Google Fonts“ auf „lokal bereitgestellte Schriften“ umgestellt und die Nicht-Übermittlung an externe Font-Provider klargestellt.
- Zusätzlich wird `public/assets/fonts/inter/README.md` hinzugefügt, damit die benötigten WOFF2-Dateien nachvollziehbar und rechtssicher manuell abgelegt werden können.

**Warum so umgesetzt:**
- Keine externen Requests zu `fonts.googleapis.com`/`fonts.gstatic.com` beim Seitenladen.
- DSGVO-/Privacy-Aussage wird konsistent zur technischen Umsetzung.
- Idempotent, weil bestehende Imports entfernt und `@font-face` nur einmal ergänzt werden.

## Files changed
- `pages/_app.js`
- `styles/globals.css`
- `pages/datenschutz.js`
- `public/assets/fonts/inter/README.md`
- Artefakt: `tmp/L-02/patch.diff`

## Commands to test
1. Patch testweise anwenden:
   ```bash
   git apply --check tmp/L-02/patch.diff
   git apply tmp/L-02/patch.diff
   ```
2. Benötigte Font-Dateien bereitstellen:
   - Zielpfad: `public/assets/fonts/inter/`
   - Dateinamen:
     - `inter-latin-400.woff2`
     - `inter-latin-500.woff2`
     - `inter-latin-600.woff2`
     - `inter-latin-700.woff2`
     - `inter-latin-800.woff2`
3. Lokalen Server starten:
   ```bash
   npm run dev
   ```
4. Netzwerkanalyse in DevTools (Seiten: `/` und `/datenschutz`):
   - Filter nach `fonts.googleapis.com` und `fonts.gstatic.com`
   - Erwartung: **0 Requests**
5. Optional Lighthouse/PSI:
   - Prüfen, ob Third-party requests sinken und Render-Blocking reduziert ist.

## Risks / Rollback
- **Risiko:** Wenn WOFF2-Dateien nicht abgelegt werden, fällt Darstellung auf System-Fallback zurück.
- **Risiko:** Bei falschen Dateinamen/Pfaden greifen `@font-face`-Regeln nicht.
- **Rollback:**
  - Patch rückgängig via `git restore pages/_app.js styles/globals.css pages/datenschutz.js public/assets/fonts/inter/README.md`
  - Oder Commit revertieren.

## Open Questions
- Exakter Repo-Pfad (`repo_root`) war im Input als Platzhalter angegeben.
- Gewünschte Subsets (nur latin vs. latin-ext) nicht spezifiziert.
- Falls CMS außerhalb Repo die Datenschutzseite rendert: bitte finalen Privacy-Text dort ebenfalls spiegeln.
