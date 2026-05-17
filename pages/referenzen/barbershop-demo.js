import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function BarbershopDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Barber Studio St. Pauli"
      description="Barbershop in Hamburg mit Terminbuchung, Leistungsübersicht und stilvoller Bildsprache."
      path="/referenzen/barbershop-demo"
      business="Friseursalon Studio"
      tone="dark"
      highlights={['Online-Terminbuchung', 'Leistungsübersicht', 'Team & Kontakt', 'Stilvolle Hero-Sektion']}
    />
  );
}
