# Inter Font Assets (Self-hosted)

Status (Stand: 2026-04-02): Die benötigten WOFF2-Dateien sind aktuell **nicht** im Repository enthalten.
Damit es keine 404-Requests gibt, sind die `@font-face`-Regeln in `styles/globals.css` vorübergehend deaktiviert
und die Website nutzt einen System-Font-Fallback-Stack.

Letzter manueller Schritt zur Finalisierung:

1. Lege die folgenden Dateien mit exakt diesen Dateinamen in dieses Verzeichnis:

- `inter-latin-400.woff2`
- `inter-latin-500.woff2`
- `inter-latin-600.woff2`
- `inter-latin-700.woff2`
- `inter-latin-800.woff2`

2. Aktiviere danach wieder die passenden `@font-face`-Regeln in `styles/globals.css`.

Empfohlene Quelle: offizielles Inter-Release oder eigener, rechtssicherer Font-Export (lizenzkonform).

Hinweise:

- Nur Dateien verwenden, deren Lizenz und Herkunft geprüft sind.
- Dateinamen und Pfad müssen exakt den Angaben der `@font-face`-Regeln entsprechen.
- Optional können zusätzliche Subsets/Gewichte ergänzt werden.
- Optional können zusätzlich `.woff`-Dateien abgelegt und in `@font-face` ergänzt werden.

Sowohl im aktuellen Fallback-Betrieb als auch nach dem Ablegen der Dateien werden keine externen Requests zu
`fonts.googleapis.com` oder `fonts.gstatic.com` benötigt.
