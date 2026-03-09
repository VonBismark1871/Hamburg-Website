import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function AutoserviceDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Auto Service Website"
      description="Kontrastreiche Werkstatt-Demo mit klarer Struktur für Leistungen, Werkstattinfos und Anfragen."
      path="/referenzen/autoservice-demo"
      business="Hanse Werkstatt Service"
      tone="contrast"
      highlights={['Leistungsblöcke', 'Werkstattvorstellung', 'Schnellanfrage', 'Öffnungszeiten & Kontakt']}
    />
  );
}
