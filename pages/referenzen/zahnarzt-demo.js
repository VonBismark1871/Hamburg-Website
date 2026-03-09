import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function ZahnarztDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Zahnarztpraxis Website"
      description="Heller, vertrauensvoller Demo-Auftritt für Zahnarztpraxen mit klarer Informationsarchitektur."
      path="/referenzen/zahnarzt-demo"
      business="Praxis Alsterblick"
      tone="clean"
      highlights={['Leistungen & Schwerpunkte', 'Teamvorstellung', 'Termin anfragen', 'Patienteninfos']}
    />
  );
}
