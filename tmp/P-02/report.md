# Implementierungsreport — P-02 Performance Monitoring Setup

## Summary (was geändert/warum)
- Eine kurze, release-taugliche Performance-Checkliste wurde ergänzt (`tmp/P-02/release-checklist.md`) mit PSI-Snapshot-Schritten, klaren CWV-Zielwerten (LCP/CLS/INP) und einem einfachen Regression Gate.
- Ein PSI-Skript-Stub wurde ergänzt (`tmp/P-02/psi_snapshot.py`), der optional mit `PSI_API_KEY` echte API-Requests ausführt.
- Ohne API-Key läuft das Skript absichtlich als **dry-run** und beendet erfolgreich mit klaren Hinweisen. So ist der Workflow ohne Secrets lauffähig.

## Files changed
- `tmp/P-02/release-checklist.md`
- `tmp/P-02/psi_snapshot.py`
- `tmp/P-02/report.md`
- `tmp/P-02/patch.diff`

## Commands to test
```bash
python3 tmp/P-02/psi_snapshot.py
PSI_API_KEY=your_key_here python3 tmp/P-02/psi_snapshot.py
```

## Risks/Rollback
- Risiko: Mit gesetztem API-Key können API-Quota-Limits oder Netzfehler auftreten; das Skript meldet Fehler pro URL/Strategie.
- Risiko: PSI-Ergebnisse schwanken je nach Last/Netz; als Gate daher trendbasiert oder mit wiederholten Läufen nutzen.
- Rollback: `tmp/P-02/` entfernen oder die Dateien aus dem Commit rückgängig machen (`git revert <commit>`).

## Open Questions
- Soll das Regression Gate nur warnen oder in CI später auch hart fehlschlagen?
- Sollen zusätzliche URLs (z. B. Blog-/Landingpages) in den Snapshot aufgenommen werden?
- Soll neben Performance auch Accessibility/Best Practices in PSI mitgespeichert werden?
