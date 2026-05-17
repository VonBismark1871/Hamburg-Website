import Image from 'next/image';
import Link from 'next/link';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import ConceptCaseBlock from '../../../components/references/ConceptCaseBlock';
import {
  quickTrustPoints,
  reasons,
  services,
  testimonials,
  workshopDetails
} from '../../../components/references/autoservice-demo/demoData';

export default function AutoserviceDemoHomePage() {
  return (
    <AutoserviceDemoLayout
      title="Elbwerk Kfz-Service Hamburg"
      description="Kfz-Werkstatt in Hamburg mit Leistungen, Inspektion, Diagnose und Terminanfragen."
      path="/referenzen/autoservice-demo"
    >
      <section className="section-container py-10">
        <p className="text-sm font-medium text-[#4d5d73]">Elbwerk Kfz-Service · Ausschläger Weg Hamburg</p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="relative overflow-hidden rounded-3xl bg-[#0f1724]">
            <Image
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=2000&q=80"
              alt="Kfz-Mechaniker prüft ein Fahrzeug in einer modernen Werkstatt"
              width={1900}
              height={1200}
              priority
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/90 via-[#0b1220]/60 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-10">
              <div className="max-w-xl text-[#f4f7fb]">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Ihre Autowerkstatt in Hamburg</h1>
                <p className="mt-4 text-base text-[#d8e0eb] sm:text-lg">
                  Schneller Service, faire Preise und klare Kommunikation für Inspektion, Reparatur und Wartung.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/referenzen/autoservice-demo/kontakt"
                    className="rounded-md bg-[#b8453c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9f392f]"
                  >
                    Termin anfragen
                  </Link>
                  <Link
                    href="/referenzen/autoservice-demo/leistungen"
                    className="rounded-md border border-[#cdd5e0] px-6 py-3 text-sm font-semibold text-[#f4f7fb] transition hover:bg-white/10"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="rounded-3xl border border-[#c9d1dc] bg-white p-7">
            <h2 className="text-2xl font-semibold text-[#111926]">Werkstatt mit klaren Abläufen</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#435067]">
              Von der Annahme bis zur Fahrzeugübergabe erhalten Kundinnen und Kunden verständliche Rückmeldungen,
              realistische Zeitfenster und eine transparente Kostenübersicht.
            </p>
            <div className="mt-6 rounded-2xl bg-[#eef2f6] p-4 text-sm text-[#2f3b4d]">
              <p className="font-semibold">Öffnungszeiten</p>
              <ul className="mt-2 space-y-1">
                {workshopDetails.hours.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 rounded-2xl border border-[#d6dde7] p-4 text-sm">
              <p className="font-semibold text-[#172131]">Direkter Kontakt</p>
              <p className="mt-2 text-[#435067]">Tel. {workshopDetails.phone}</p>
              <p className="text-[#435067]">{workshopDetails.email}</p>
            </div>
          </aside>
        </div>
      </section>

      <ConceptCaseBlock slug="autoservice-demo" compact />

      <section className="section-container pb-10">
        <div className="grid gap-3 rounded-2xl bg-[#172131] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickTrustPoints.map((point) => (
            <p key={point} className="rounded-xl bg-[#202d41] px-4 py-3 text-sm font-medium text-[#e3ebf7]">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[#111926]">Unsere wichtigsten Leistungen</h2>
          <Link href="/referenzen/autoservice-demo/leistungen" className="text-sm font-semibold text-[#b8453c] hover:underline">
            Alle Leistungen ansehen
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.title} className="rounded-2xl border border-[#ccd4df] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#111926]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#48566c]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="grid gap-6 rounded-3xl bg-white p-7 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#111926]">Warum Kundinnen und Kunden uns wählen</h2>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="rounded-xl bg-[#edf1f6] px-4 py-3 text-sm text-[#2d3a4d]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80"
              alt="Zwei Kfz-Mechatroniker besprechen einen Serviceauftrag in der Werkstatt"
              width={1500}
              height={1000}
              className="h-80 w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="section-container pb-12">
        <h2 className="text-3xl font-semibold text-[#111926]">Kundenstimmen</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-[#ccd4df] bg-white p-5">
              <p className="text-sm leading-relaxed text-[#3b495f]">„{testimonial.quote}“</p>
              <footer className="mt-4 text-sm font-semibold text-[#111926]">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="rounded-3xl bg-[#111926] p-8 text-[#e9eef6]">
          <h2 className="text-3xl font-semibold">Jetzt Termin anfragen</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#c8d2e1]">
            Ob Inspektion, Diagnose oder Reparatur – Anfragen können schnell und unkompliziert gestellt werden.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/referenzen/autoservice-demo/kontakt" className="rounded-md bg-[#b8453c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9f392f]">
              Termin anfragen
            </Link>
            <Link href="/referenzen/autoservice-demo/kontakt" className="rounded-md border border-[#4a5b74] px-6 py-3 text-sm font-semibold text-[#e9eef6] hover:bg-[#1a263a]">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container pb-16">
        <div className="grid gap-6 rounded-3xl border border-[#cad2dd] bg-white p-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-[#111926]">Kontakt, Öffnungszeiten & Anfahrt</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#445269]">{workshopDetails.address}</p>
            <p className="text-sm text-[#445269]">Tel. {workshopDetails.phone}</p>
            <p className="text-sm text-[#445269]">{workshopDetails.email}</p>
            <ul className="mt-4 space-y-1 text-sm text-[#445269]">
              {workshopDetails.hours.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Link
              href="/referenzen/autoservice-demo/kontakt"
              className="rounded-md bg-[#111926] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1a273b]"
            >
              Zur Kontaktseite
            </Link>
          </div>
        </div>
      </section>
    </AutoserviceDemoLayout>
  );
}
