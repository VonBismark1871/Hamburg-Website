import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function ImmobilienDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Immobilienmakler Website"
      description="Premium-Demo mit editorialem Look zur Präsentation von Objekten, Exposés und Anfragen."
      path="/referenzen/immobilien-demo"
      business="Elbimmobilien Hamburg"
      tone="premium"
      highlights={['Objektübersicht', 'Exposé-Download', 'Anfrageformulare', 'Standort- und Teamdarstellung']}
    />
  );
}
