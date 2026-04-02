import Link from 'next/link';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { inspectionChecklist } from '../../../components/references/autoservice-demo/demoData';

export default function AutoserviceInspectionPage() {
  return (
    <AutoserviceDemoLayout
      title="Inspektion | Auto Service Demo"
      description="Beispiel einer Leistungsdetailseite für eine Fahrzeuginspektion in einer Hamburger Werkstatt."
      path="/referenzen/autoservice-demo/inspektion"
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-bold text-[#111926]">Inspektion für Ihr Fahrzeug</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#445269]">
          Eine regelmäßige Inspektion hilft, Verschleiß frühzeitig zu erkennen und teure Folgeschäden zu vermeiden.
          Gleichzeitig bleibt Ihr Fahrzeug zuverlässig und sicher im Alltag.
        </p>

        <div className="mt-8 rounded-2xl border border-[#cbd4df] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#111926]">Was wir bei der Inspektion prüfen</h2>
          <ul className="mt-4 space-y-3">
            {inspectionChecklist.map((item) => (
              <li key={item} className="rounded-lg bg-[#edf2f7] px-4 py-3 text-sm text-[#2d3a4d]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-[#111926] p-7 text-[#e7edf6]">
          <h2 className="text-2xl font-semibold">Warum regelmäßige Inspektionen wichtig sind</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#c8d2e1]">
            Regelmäßige Wartungsintervalle erhalten den Fahrzeugwert, verbessern die Betriebssicherheit und schaffen
            Planungssicherheit bei zukünftigen Werkstattkosten.
          </p>
          <Link
            href="/referenzen/autoservice-demo/kontakt"
            className="mt-5 inline-flex rounded-md bg-[#b8453c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#9f392f]"
          >
            Termin für Inspektion anfragen
          </Link>
        </div>
      </section>
    </AutoserviceDemoLayout>
  );
}
