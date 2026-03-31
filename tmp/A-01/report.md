# A-01 Accessibility Basics Fix Pack (Forms + Focus + Links)

## Summary (was geändert / warum)
Schnelle manuelle Code-Review für die angefragten Bereiche (`/kontakt`, `/preise`, `/faq`) ohne externe Scanner.

Vorgeschlagene minimale Fixes mit geringem Design-Risiko:

1. **Form-Labels robuster gemacht** (`components/Contact.jsx`)
   - Für alle Formularfelder wurden explizite `id`/`htmlFor`-Zuordnungen ergänzt.
   - Relevante `autocomplete`-Attribute wurden ergänzt (`name`, `organization`, `email`, `url`).
   - Effekt: bessere Accessibility-Kompatibilität (Screenreader/Formular-Navigation), ohne visuelle Änderung.

2. **Sichtbarer Keyboard-Focus global abgesichert** (`styles/globals.css`)
   - Einheitliche `:focus-visible`-Stile für Links, Buttons, Inputs, Selects, Textareas und Summary-Elemente ergänzt.
   - Stellt sicher, dass Fokuszustände auf den geprüften Seiten konsistent sichtbar sind.

3. **Reduzierte Bewegung respektiert** (`styles/globals.css`)
   - `prefers-reduced-motion`-Fallback ergänzt (`scroll-behavior: auto`), um motion-sensitive Nutzer zu unterstützen.

Keine neuen JS-Abhängigkeiten.

## Files changed
- `tmp/A-01/patch.diff`
- `tmp/A-01/report.md`

> Hinweis: Gemäß Constraint wurden **keine produktiven Dateien direkt geändert**; alle Änderungen liegen ausschließlich im Patch.

## Commands to test
Nach Anwenden des Patchs (lokal/staging):

1. `npm run dev`
2. Manuelle Tastatur-Tests:
   - `Tab`/`Shift+Tab` auf `/kontakt`, `/preise`, `/faq`
   - Prüfen, ob Fokuszustände klar sichtbar sind.
3. Formular-Prüfung auf `/kontakt`:
   - Fokus-Reihenfolge
   - Label-Vorlesung mit Screenreader
4. Mobile Sichtprüfung (DevTools):
   - iPhone/Android Breakpoints, keine Layoutverschiebungen durch Fokus-Outline.

Optional:
- `npm run lint`

## Risks / Rollback
### Risiken
- Globaler Fokusstil kann auf einzelnen Komponenten optisch stärker auffallen als bisher.
- `outline` + `box-shadow` kann bei sehr kleinen Elementen minimalen visuellen Overlap erzeugen.

### Rollback
- Patch nicht anwenden **oder** nur den `styles/globals.css`-Teil rückgängig machen, falls Fokusstil visuell angepasst werden muss.

## Open Questions
1. `repo_root` und `pages_to_check` wurden im Task-JSON als Platzhalter übergeben (`<PATH>`, `<contact_page_path>`, ...). Bitte final bestätigen, falls Scope erweitert/abweichend ist.
2. Soll der Fokusstil exakt an bestehende Brand-Token (z. B. Tailwind-Theme-Farben) gekoppelt werden statt hex-basiert?
3. Für „Alt-Texte für inhaltstragende Bilder“: In den drei geprüften Seiten sind keine inhaltstragenden Bilder direkt enthalten. Sollen zusätzlich verlinkte Unterseiten/Komponenten außerhalb dieses Scopes mit geprüft werden?
