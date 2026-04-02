import Link from 'next/link';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';

export default function RueckenschmerzenDetailPage() {
  return (
    <PhysioDemoLayout
      title="Physiotherapie bei Rückenschmerzen – Physiotherapie Demo"
      description="Beispiel einer Behandlungsdetailseite für Rückenschmerzen in einer Physiotherapiepraxis."
      path="/referenzen/physio-demo/rueckenschmerzen"
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-semibold text-[#244240]">Physiotherapie bei Rückenschmerzen</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4e6d6a]">
          Rückenschmerzen entstehen oft durch ein Zusammenspiel aus Belastung, Bewegungsmangel und ungünstigen Gewohnheiten. Die Therapie setzt daher nicht nur am Schmerzpunkt an.
        </p>
      </section>

      <section className="section-container pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d2e0dc] bg-[var(--bg-card)] p-5">
            <h2 className="text-xl font-semibold text-[#244240]">Wie die Therapie hilft</h2>
            <p className="mt-2 text-sm text-[#4f6d6b]">Wir verbessern Beweglichkeit, stabilisieren die Rumpfmuskulatur und reduzieren schmerzhafte Überlastungen.</p>
          </article>
          <article className="rounded-2xl border border-[#d2e0dc] bg-[var(--bg-card)] p-5">
            <h2 className="text-xl font-semibold text-[#244240]">Typischer Ablauf</h2>
            <p className="mt-2 text-sm text-[#4f6d6b]">Anamnese, manualtherapeutische Behandlung, aktive Übungen und ein kurzer Plan für zuhause.</p>
          </article>
          <article className="rounded-2xl border border-[#d2e0dc] bg-[var(--bg-card)] p-5">
            <h2 className="text-xl font-semibold text-[#244240]">Ihr Ziel</h2>
            <p className="mt-2 text-sm text-[#4f6d6b]">Weniger Schmerzen, mehr Sicherheit in Bewegung und langfristig stabile Belastbarkeit im Alltag.</p>
          </article>
        </div>
      </section>

      <section className="section-container pb-16">
        <div className="rounded-3xl bg-[#2a5b55] p-8 text-[#f0f7f5]">
          <h2 className="text-3xl font-semibold">Termin für Rückenschmerz-Behandlung anfragen</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d9ece8]">
            Wir planen die Behandlung nach Ihrem Beschwerdebild und aktuellen Alltagssituationen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/referenzen/physio-demo/kontakt" className="rounded-full bg-[var(--bg-card)] px-6 py-3 text-sm font-semibold text-[#2a5b55] hover:bg-[#eff9f7]">
              Termin anfragen
            </Link>
            <Link href="/referenzen/physio-demo/leistungen" className="rounded-full border border-[#a3c4bf] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] hover:bg-[#356d66]">
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
