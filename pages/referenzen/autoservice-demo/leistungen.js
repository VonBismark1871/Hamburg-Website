import Link from 'next/link';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { services } from '../../../components/references/autoservice-demo/demoData';

const serviceIcons = ['🛠️', '🧴', '🛑', '🛞', '💻', '❄️', '📋', '🔧'];

export default function AutoserviceServicesPage() {
  return (
    <AutoserviceDemoLayout
      title="Leistungen | Auto Service Demo"
      description="Leistungsübersicht einer modernen Kfz-Werkstatt in Hamburg mit klaren Beschreibungen und Anfrageoptionen."
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-bold text-[#111926]">Unsere Leistungen</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#445269]">
          Wir bieten alle wichtigen Werkstattleistungen aus einer Hand – verständlich erklärt, sauber geplant und mit
          transparenter Rückmeldung vor jeder größeren Arbeit.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-2xl border border-[#cbd3de] bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold text-[#111926]">{service.title}</h2>
                <span className="text-2xl" aria-hidden="true">
                  {serviceIcons[index]}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#445269]">{service.description}</p>
              <Link
                href="/referenzen/autoservice-demo/kontakt"
                className="mt-5 inline-flex rounded-md bg-[#111926] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1a273b]"
              >
                Termin anfragen
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-[#d6dde8] bg-[#eff3f8] p-4 text-sm text-[#2e3b4f]">
          Ersatzteile in geprüfter Qualität und transparente Rückmeldung zu allen Arbeiten.
        </p>
      </section>
    </AutoserviceDemoLayout>
  );
}
