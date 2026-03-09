import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function PhysioDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Physiotherapie Website"
      description="Ruhige und freundliche Demo-Website mit Fokus auf Behandlungen, Praxisinfos und Kontakt."
      path="/referenzen/physio-demo"
      business="Physio Elbtherapie"
      tone="calm"
      highlights={['Behandlungen & Schwerpunkte', 'Praxisinfos', 'Kontakt & Anfahrt', 'Anfrageformular']}
    />
  );
}
