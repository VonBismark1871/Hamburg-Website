import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../../../components/ReferenceStickyBackButton';
import InquiryCard from '../../../../../components/references/immobilien-demo/InquiryCard';

const facts = [
  ['Kaufpreis', '2.390.000 €'],
  ['Wohnfläche', '182 m²'],
  ['Zimmer', '4'],
  ['Etage', '6. Obergeschoss'],
  ['Baujahr', '2018'],
  ['Energieausweis', 'Bedarfsausweis, 58 kWh/(m²*a)']
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063ba?auto=format&fit=crop&w=1600&q=80',
    alt: 'Offener Wohnbereich mit bodentiefen Fenstern im Penthouse'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    alt: 'Moderne Küche mit Kochinsel und hochwertigen Materialien'
  },
  {
    src: 'https://images.unsplash.com/photo-1613977257593-487ecd136cc3?auto=format&fit=crop&w=1600&q=80',
    alt: 'Schlafzimmer mit ruhiger Farbwelt und Blick über Hamburg'
  },
  {
    src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80',
    alt: 'Großzügige Dachterrasse mit Lounge-Bereich'
  }
];

export default function PenthouseExposePage() {
  return (
    <>
      <SEOHead
        title="Exklusives Penthouse in Hamburg-Winterhude – Demo"
        description="Beispiel einer Exposé-Seite für eine moderne Immobilienmakler-Website."
        path="/referenzen/immobilien-demo/objekte/penthouse-hamburg"
      />
      <main className="bg-[#f6f3ee] pb-20 text-stone-900">
        <section className="section-container pt-10" aria-labelledby="expose-heading">
          <figure className="overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
              alt="Exklusives Penthouse mit großzügiger Terrasse in Hamburg-Winterhude"
              width={2000}
              height={1250}
              priority
              className="h-[540px] w-full object-cover"
            />
          </figure>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Kaufobjekt · Winterhude</p>
              <h1 id="expose-heading" className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Exklusives Penthouse in Hamburg-Winterhude
              </h1>
              <p className="mt-5 max-w-3xl text-stone-700">
                Dieses lichtdurchflutete Penthouse verbindet klare Architektur, hochwertige Materialien und einen
                weitläufigen Außenbereich mit Blick über die Dächer der Stadt. Ideal für anspruchsvolle Käufer, die
                urbanes Wohnen mit Privatsphäre kombinieren möchten.
              </p>

              <dl className="mt-8 grid gap-4 rounded-2xl border border-stone-300 bg-white p-6 sm:grid-cols-2">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm text-stone-500">{label}</dt>
                    <dd className="text-base font-semibold text-stone-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <InquiryCard />
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="galerie-heading">
          <h2 id="galerie-heading" className="text-3xl font-semibold sm:text-4xl">
            Bildergalerie
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {galleryImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-stone-300">
                <Image src={image.src} alt={image.alt} width={1400} height={1000} className="h-64 w-full object-cover" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="beschreibung-heading">
          <div className="grid gap-5">
            <article className="rounded-2xl border border-stone-300 bg-white p-6">
              <h2 id="beschreibung-heading" className="text-2xl font-semibold">
                Objektbeschreibung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                Die Immobilie befindet sich in einem modernen Wohnensemble und überzeugt durch eine offene
                Grundrissgestaltung, bodentiefe Fensterflächen sowie eine repräsentative Dachterrasse. Das Wohn- und
                Esszimmer öffnet sich zur Südwestseite und schafft eine helle, großzügige Wohnatmosphäre.
              </p>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-white p-6">
              <h2 className="text-2xl font-semibold">Ausstattung</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-700">
                <li>Aufzug direkt in die Wohneinheit</li>
                <li>Echtholzparkett und maßgefertigte Einbauten</li>
                <li>Designküche mit hochwertigen Markengeräten</li>
                <li>Kaminbereich und smarte Haustechnik</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-white p-6">
              <h2 className="text-2xl font-semibold">Lage</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                Winterhude zählt zu den gefragtesten Stadtteilen Hamburgs. Die Immobilie liegt in ruhiger Nebenstraße
                mit kurzer Distanz zum Stadtpark, zur Alster und zu ausgewählten Restaurants, Cafés und
                Einkaufsmöglichkeiten.
              </p>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-white p-6">
              <h2 className="text-2xl font-semibold">Sonstiges</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                Alle Angaben beruhen auf Informationen des Eigentümers. Dieses Exposé dient als Referenzinhalt innerhalb
                des Hamburg-Websites-Demoportfolios.
              </p>
            </article>
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="standort-heading">
          <div className="rounded-2xl border border-stone-300 bg-[#ebe6de] p-6">
            <h2 id="standort-heading" className="text-2xl font-semibold">
              Standort in Hamburg-Winterhude
            </h2>
            <p className="mt-3 text-sm text-stone-700">
              Stadtparknähe · U3 Saarlandstraße in Laufweite · Alsterkanäle und Nahversorgung im direkten Umfeld.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/referenzen/immobilien-demo/objekte"
              className="inline-flex rounded-md border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
            >
              Weitere Objekte ansehen
            </Link>
            <Link
              href="/referenzen/immobilien-demo/kontakt"
              className="inline-flex rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
            >
              Besichtigung vereinbaren
            </Link>
          </div>
        </section>
      </main>
      <ReferenceStickyBackButton />
    </>
  );
}
