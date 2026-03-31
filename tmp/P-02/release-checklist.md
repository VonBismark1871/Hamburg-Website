# Release Checklist — Performance Monitoring (PSI + CWV)

## 1) PSI Snapshot vor Release
- [ ] URLs prüfen: `/`, `/preise`, `/kontakt`
- [ ] Für jede URL PSI **mobile** ausführen
- [ ] Für jede URL PSI **desktop** ausführen
- [ ] Ergebnisse in `tmp/P-02/reports/` speichern

## 2) Core Web Vitals Zielwerte (Gate)
- **LCP**: Ziel `<= 2.5s` (Warnung, wenn `> 2.5s`)
- **CLS**: Ziel `<= 0.10` (Warnung, wenn `> 0.10`)
- **INP**: Ziel `<= 200ms` (Warnung, wenn `> 200ms`)

## 3) Regression Gate (Release-Entscheidung)
- [ ] **Warnung** bei einem CWV-Verstoß (LCP/CLS/INP) auf mobile oder desktop
- [ ] **Blocker-Empfehlung** wenn 2+ Seiten denselben Verstoß zeigen
- [ ] Ticket mit betroffener URL + Metrik + Wert erstellen

## 4) Dokumentation
- [ ] Kurzfazit in `tmp/P-02/report.md` ergänzen
- [ ] Reproduzierbare Kommandozeile dokumentieren
