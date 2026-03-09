import ReferenceDemoTemplate from '../../components/references/ReferenceDemoTemplate';

export default function BarbershopDemoPage() {
  return (
    <ReferenceDemoTemplate
      title="Barbershop Website"
      description="Dunkler, urbaner Demo-Auftritt für moderne Barbershops mit klarer Terminführung und Leistungsfokus."
      path="/referenzen/barbershop-demo"
      business="Nordbarber Studio"
      tone="dark"
      highlights={['Online-Terminbuchung', 'Leistungsübersicht', 'Team & Kontakt', 'Stilvolle Hero-Sektion']}
    />
  );
}
