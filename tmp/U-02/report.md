# U-02 Implementierungsreport

## Summary (was geändert/warum)
- Patch erstellt, um das Kontaktformular um qualifizierende, optionale Felder (`ziel`, `budget`, `start`, `branche`) zu erweitern.
- Trust-Block für Schnellkontakt ergänzt (Telefon, SLA, Standort, direkter Ansprechpartner).
- Optionalen Conversion-Hinweis ergänzt: „Demo ist kostenlos, keine Verpflichtung“.
- Formular bleibt Netlify-kompatibel: Zusätzliche Felder werden über `name`-Attribute automatisch im POST-Body übertragen.
- Pflichtfelder auf Name + E-Mail begrenzt; Nachricht auf optional gestellt.

## Files changed
- `components/Contact.jsx` (im Patch enthalten)

## Commands to test
- `npm run dev`
- `curl -I http://localhost:3000/kontakt`
- Manuell im Browser:
  - `/kontakt` öffnen (Desktop + Mobile)
  - Formular mit/ohne neue optionale Felder absenden
  - Redirect auf `/thank-you` prüfen

## Risks/Rollback
- Risiko: Layout-Shift auf kleinen Breakpoints bei langen Select-Werten.
- Risiko: Falls ein separates Server-Backend striktes Whitelisting nutzt (außer Netlify), müssten neue Feldnamen dort ergänzt werden.
- Rollback: Patch nicht anwenden oder nur den Trust-Block/zusätzliche Felder selektiv zurücknehmen.

## Open Questions
- `repo_root` und `contact_page_path` wurden im Input als Platzhalter geliefert (`<PATH>`, `<path>`). Bitte konkrete Zielpfade bestätigen.
- Wird ausschließlich Netlify Forms genutzt oder existiert zusätzlich ein eigenes API-/Server-Handling für Formdaten?
- Soll der Trust-Block oberhalb des Formulars (statt rechts daneben) auf Desktop priorisiert werden?
