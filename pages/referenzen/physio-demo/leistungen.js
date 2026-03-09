import Link from 'next/link';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';
import { TreatmentCard } from '../../../components/references/physio-demo/PhysioSections';
import { services } from '../../../components/references/physio-demo/physioData';

export default function PhysioDemoLeistungenPage() {
  return (
    <PhysioDemoLayout
      title="Leistungen – Physiotherapie Demo"
      description="Beispiel einer Leistungsseite für eine moderne Physiotherapiepraxis-Website."
      path="/referenzen/physio-demo/leistungen"
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-semibold text-[#244240]">Unsere Leistungen</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4e6d6a]">
          Jede Behandlung startet mit einer sorgfältigen Einschätzung. Darauf aufbauend planen wir die Therapie verständlich, alltagsnah und in sinnvollen Schritten.
        </p>
      </section>

      <section className="section-container pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <TreatmentCard key={service.title} service={service} showCta />
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-[#e7f1ee] p-4 text-sm text-[#355855]">
          Die genaue Behandlung wird individuell nach Beschwerdebild und therapeutischer Einschätzung abgestimmt.
        </p>
      </section>

      <section className="section-container pb-16">
        <div className="rounded-3xl border border-[#cfded9] bg-white p-7">
          <h2 className="text-2xl font-semibold text-[#244240]">Unsicher, welche Leistung passt?</h2>
          <p className="mt-3 text-sm text-[#4d6c69]">
            Beschreiben Sie Ihre Beschwerden kurz – wir melden uns mit einer passenden Ersteinschätzung für den weiteren Ablauf.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/referenzen/physio-demo/kontakt" className="rounded-full bg-[#2f736b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#285f58]">
              Termin anfragen
            </Link>
            <Link href="/referenzen/physio-demo/rueckenschmerzen" className="rounded-full border border-[#9ab9b4] px-6 py-3 text-sm font-semibold text-[#2f736b] hover:bg-[#f4fbf9]">
              Beispiel: Rückenschmerzen
            </Link>
          </div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
