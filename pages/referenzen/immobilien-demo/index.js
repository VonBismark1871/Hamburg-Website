import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';
import PropertyCard from '../../../components/references/immobilien-demo/PropertyCard';
import { featuredPropertyIds, properties } from '../../../components/references/immobilien-demo/properties';

const featuredProperties = properties.filter((property) => featuredPropertyIds.includes(property.id));

const testimonials = [
  '„Unsere Wohnung in Eppendorf wurde innerhalb weniger Wochen diskret und zum Zielpreis vermittelt.“ – Eigentümerin aus Hamburg',
  '„Sehr strukturierter Verkaufsprozess mit hochwertigem Exposé und klarer Kommunikation.“ – Verkäufer aus Blankenese',
  '„Die Beratung war persönlich, ehrlich und professionell. Wir haben uns jederzeit gut begleitet gefühlt.“ – Käuferpaar aus Winterhude'
];

const reasons = [
  'Lokale Marktkenntnis in den Hamburger Stadtteilen',
  'Hochwertige Präsentation mit professionellen Exposés',
  'Persönliche Betreuung von Erstgespräch bis Notartermin',
  'Strukturierte Vermarktung mit diskreten Prozessen'
];

export default function ImmobilienDemoHomePage() {
  return (
    <>
      <SEOHead
        title="Immobilienmakler Website Demo – Hamburg Websites"
        description="Beispiel einer modernen Immobilienmakler-Website mit Objektübersicht, Exposé und Anfragebereich."
        path="/referenzen/immobilien-demo"
      />
      <main className="bg-[#f6f3ee] text-stone-900">
        <section className="section-container pb-12 pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
            Beispiel einer möglichen Immobilienmakler-Website
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80"
                alt="Exklusive Dachterrasse mit Blick über Hamburg"
                width={1800}
                height={1200}
                priority
                className="h-[620px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
              <div className="absolute bottom-0 p-8 text-stone-100 sm:p-10">
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                  Moderne Immobilien in Hamburg professionell präsentiert
                </h1>
                <p className="mt-4 max-w-xl text-base text-stone-200 sm:text-lg">
                  Exklusive Wohnimmobilien, klare Vermarktung und persönliche Beratung für Eigentümerinnen,
                  Eigentümer und Interessenten.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/referenzen/immobilien-demo/objekte"
                    className="inline-flex rounded-md bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
                  >
                    Objekte ansehen
                  </Link>
                  <Link
                    href="/referenzen/immobilien-demo/kontakt"
                    className="inline-flex rounded-md border border-stone-200 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-100/20"
                  >
                    Immobilie bewerten lassen
                  </Link>
                </div>
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[2rem] border border-stone-300 bg-[#ebe6de] p-7 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Elbquartier Immobilien</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">Diskret, lokal und hochwertig in der Vermarktung</h2>
                <p className="mt-4 text-stone-700">
                  Als inhabergeführte Immobilienagentur kennen wir die Mikro-Lagen zwischen Winterhude, Eppendorf,
                  Blankenese und der HafenCity im Detail.
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-stone-700">
                <li>• Premium-Präsentation für Eigentumswohnungen und Häuser</li>
                <li>• Persönliche Betreuung mit festen Ansprechpartnern</li>
                <li>• Diskrete Vermarktung auf Wunsch ohne öffentliche Portale</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="featured-objects">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 id="featured-objects" className="text-3xl font-semibold sm:text-4xl">
              Ausgewählte Immobilien
            </h2>
            <Link href="/referenzen/immobilien-demo/objekte" className="text-sm font-semibold text-stone-700 underline-offset-4 hover:underline">
              Alle Objekte ansehen
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="warum-wir">
          <div className="rounded-[2rem] border border-stone-300 bg-[#ece7df] p-8 sm:p-10">
            <h2 id="warum-wir" className="text-3xl font-semibold sm:text-4xl">
              Warum Eigentümer und Käufer mit uns arbeiten
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <p key={reason} className="rounded-xl border border-stone-300 bg-stone-100/70 p-4 text-sm text-stone-700">
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="bewertung">
          <div className="grid gap-6 rounded-[2rem] bg-stone-900 p-8 text-stone-100 sm:p-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h2 id="bewertung" className="text-3xl font-semibold sm:text-4xl">
                Immobilie bewerten lassen
              </h2>
              <p className="mt-4 max-w-2xl text-stone-300">
                Sie möchten den aktuellen Marktwert Ihrer Immobilie erfahren? Wir geben Ihnen eine fundierte
                Erstindikation und besprechen die nächsten Schritte persönlich.
              </p>
            </div>
            <div>
              <Link
                href="/referenzen/immobilien-demo/kontakt"
                className="inline-flex w-full items-center justify-center rounded-md bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
              >
                Bewertung anfragen
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="stimmen">
          <h2 id="stimmen" className="text-3xl font-semibold sm:text-4xl">
            Stimmen von Verkäufer- und Käuferseite
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial} className="rounded-2xl border border-stone-300 bg-white p-6 text-sm leading-relaxed text-stone-700">
                {testimonial}
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section-container pb-20" aria-labelledby="schluss-cta">
          <div className="rounded-[2rem] border border-stone-300 bg-white p-8 sm:p-10">
            <h2 id="schluss-cta" className="text-3xl font-semibold sm:text-4xl">
              Sie möchten Ihre Immobilie professionell präsentieren?
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/referenzen/immobilien-demo/kontakt"
                className="inline-flex rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/referenzen/immobilien-demo/objekte"
                className="inline-flex rounded-md border border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
              >
                Objekte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ReferenceStickyBackButton />
    </>
  );
}
