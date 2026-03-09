import Image from 'next/image';
import Link from 'next/link';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';
import {
  ComplaintCards,
  PhysioTestimonials,
  PracticeGallery,
  TreatmentCard
} from '../../../components/references/physio-demo/PhysioSections';
import {
  complaints,
  galleryImages,
  practiceInfo,
  reasons,
  services,
  testimonials,
  trustPoints
} from '../../../components/references/physio-demo/physioData';

export default function PhysioDemoHomePage() {
  return (
    <PhysioDemoLayout
      title="Physiotherapie Website Demo – Hamburg Websites"
      description="Beispiel einer modernen Physiotherapie-Website mit Leistungen, Terminbereich und Kontaktseite."
      path="/referenzen/physio-demo"
    >
      <section className="section-container py-10">
        <p className="text-sm font-medium text-[#5d7673]">Referenzprojekt für moderne Physiotherapiepraxen</p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=2000&q=80"
              alt="Physiotherapeutin behandelt einen Patienten in einer ruhigen Praxis in Hamburg"
              width={1900}
              height={1200}
              priority
              className="h-[540px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a38]/80 via-[#264f4b]/45 to-[#375f5b]/15" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-10">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Moderne Physiotherapie in Hamburg</h1>
                <p className="mt-4 text-base text-[#e4f2ef] sm:text-lg">
                  Individuelle Behandlung, klare Therapiepläne und eine ruhige Praxisatmosphäre für Ihre nachhaltige Verbesserung im Alltag.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/referenzen/physio-demo/kontakt" className="rounded-full bg-[#f2faf8] px-6 py-3 text-sm font-semibold text-[#2a5a54] transition hover:bg-white">
                    Termin anfragen
                  </Link>
                  <Link
                    href="/referenzen/physio-demo/leistungen"
                    className="rounded-full border border-[#d3e4df] bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="rounded-3xl border border-[#d4e2dd] bg-white p-7">
            <h2 className="text-2xl font-semibold text-[#254542]">Ihr Weg zur passenden Behandlung</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4d6c69]">
              Wir schauen nicht nur auf den aktuellen Schmerzpunkt, sondern auf Bewegungsmuster, Belastungen im Alltag und Ihre persönlichen Ziele.
            </p>
            <div className="mt-6 rounded-2xl bg-[#edf5f2] p-4 text-sm text-[#355754]">
              <p className="font-semibold">Öffnungszeiten</p>
              <ul className="mt-2 space-y-1">
                {practiceInfo.hours.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 rounded-2xl border border-[#d6e3df] p-4 text-sm">
              <p className="font-semibold text-[#234441]">Direkter Kontakt</p>
              <p className="mt-2 text-[#4d6c69]">Tel. {practiceInfo.phone}</p>
              <p className="text-[#4d6c69]">{practiceInfo.email}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-container pb-10">
        <div className="grid gap-3 rounded-2xl bg-[#dcebe6] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <p key={point} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#315652]">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <h2 className="text-3xl font-semibold text-[#244240]">Bei diesen Beschwerden unterstützen wir Sie</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#51706d]">
          Häufige Beschwerden lassen sich mit einer passenden Kombination aus manuellen Techniken, Übungen und alltagsnaher Beratung gut behandeln.
        </p>
        <div className="mt-6">
          <ComplaintCards items={complaints} />
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[#244240]">Leistungen im Überblick</h2>
          <Link href="/referenzen/physio-demo/leistungen" className="text-sm font-semibold text-[#2f736b] hover:underline">
            Alle Leistungen ansehen
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <TreatmentCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="grid gap-6 rounded-3xl bg-white p-7 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#244240]">Warum Patientinnen und Patienten uns wählen</h2>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="rounded-xl bg-[#edf6f3] px-4 py-3 text-sm text-[#365a57]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=80"
              alt="Physiotherapeut begleitet eine Patientin bei gezielten Rückenübungen im Trainingsbereich"
              width={1500}
              height={1000}
              className="h-80 w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="section-container pb-12">
        <h2 className="text-3xl font-semibold text-[#244240]">Einblicke in unsere Praxisräume</h2>
        <p className="mt-3 text-sm text-[#53706e]">Helle Behandlungsräume, ein ruhiger Trainingsbereich und eine freundliche Empfangszone.</p>
        <div className="mt-6">
          <PracticeGallery images={galleryImages} />
        </div>
      </section>

      <section className="section-container pb-12">
        <h2 className="text-3xl font-semibold text-[#244240]">Patientenstimmen</h2>
        <div className="mt-5">
          <PhysioTestimonials testimonials={testimonials} />
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="rounded-3xl bg-[#2a5b55] p-8 text-[#f0f7f5]">
          <h2 className="text-3xl font-semibold">Jetzt Termin anfragen</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d8ebe7]">
            Ob akute Beschwerden oder längerfristige Therapie – Anfragen können unkompliziert gestellt werden.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/referenzen/physio-demo/kontakt" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2a5b55] hover:bg-[#f2faf8]">
              Termin anfragen
            </Link>
            <Link href="/referenzen/physio-demo/kontakt" className="rounded-full border border-[#9ec0bb] px-6 py-3 text-sm font-semibold text-[#f0f7f5] hover:bg-[#356d66]">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container pb-16">
        <div className="grid gap-6 rounded-3xl border border-[#cadbd6] bg-white p-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-[#244240]">Kontakt, Öffnungszeiten & Lage</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4d6c69]">{practiceInfo.address}</p>
            <p className="text-sm text-[#4d6c69]">Tel. {practiceInfo.phone}</p>
            <p className="text-sm text-[#4d6c69]">{practiceInfo.email}</p>
            <ul className="mt-4 space-y-1 text-sm text-[#4d6c69]">
              {practiceInfo.hours.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Link href="/referenzen/physio-demo/kontakt" className="rounded-full bg-[#2f736b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285f58]">
              Zur Kontaktseite
            </Link>
          </div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
