import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ReferenceProjectCTA from '../../components/ReferenceProjectCTA';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const services = [
  {
    title: 'Damenhaarschnitt',
    description: 'Individueller Schnitt mit typgerechter Beratung für Alltag und besondere Anlässe.',
    price: 'ab 58 €'
  },
  {
    title: 'Herrenhaarschnitt',
    description: 'Moderne, präzise Schnitte mit natürlichem Finish und einfacher Styling-Routine.',
    price: 'ab 39 €'
  },
  {
    title: 'Föhnen & Styling',
    description: 'Volumen, Glanz und Form für ein gepflegtes, modernes Erscheinungsbild.',
    price: 'ab 36 €'
  },
  {
    title: 'Coloration',
    description: 'Brillante Farben mit schonenden Techniken und passender Pflegeempfehlung.',
    price: 'ab 82 €'
  },
  {
    title: 'Strähnen / Balayage',
    description: 'Weiche Übergänge, natürliche Lichtreflexe und personalisierte Farbabstimmung.',
    price: 'ab 118 €'
  },
  {
    title: 'Pflege & Beratung',
    description: 'Scalp- und Haaranalyse inkl. Produktempfehlung für gesundes Haar zu Hause.',
    price: 'ab 29 €'
  }
];

const values = [
  {
    title: 'Individuelle Beratung',
    text: 'Jeder Termin beginnt mit einer kurzen Analyse zu Haarstruktur, Stil und Pflegegewohnheiten.'
  },
  {
    title: 'Moderne Farbtechniken',
    text: 'Balayage, Glossing und sanfte Nuancierungen für ein natürliches, modernes Ergebnis.'
  },
  {
    title: 'Angenehme Atmosphäre',
    text: 'Ruhiges Studio, ausgewählte Produkte und ein Team, das aufmerksam auf Ihre Wünsche eingeht.'
  },
  {
    title: 'Online Terminbuchung',
    text: 'Anfragen sind flexibel online möglich – schnell, übersichtlich und ohne Wartezeit.'
  }
];

const team = [
  {
    name: 'Mila Hansen',
    specialty: 'Schnitt & Styling',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Aylin Demir',
    specialty: 'Farbe & Balayage',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Nora Petersen',
    specialty: 'Beratung & Pflege',
    image:
      'https://images.unsplash.com/photo-1542204625-de293a40268a?auto=format&fit=crop&w=900&q=80'
  }
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Heller Friseursalon mit Spiegeln, Holzdetails und ruhiger Atmosphäre'
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stylistin arbeitet konzentriert an einem Haarschnitt im Studio'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Detailaufnahme von hochwertigen Haarpflegeprodukten im Friseursalon'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Farbbehandlung an Kundin mit natürlichem Balayage-Ergebnis'
  }
];

const testimonials = [
  {
    quote: 'Sehr angenehme Beratung und ein Ergebnis, das wirklich zu mir passt. Ich komme definitiv wieder.',
    by: 'Laura M. · Eimsbüttel'
  },
  {
    quote: 'Balayage sah direkt natürlich aus und hat sich auch nach Wochen noch sehr schön entwickelt.',
    by: 'Sophie K. · Winterhude'
  },
  {
    quote: 'Ruhige Atmosphäre, pünktliche Termine und ein Team, das aufmerksam zuhört. Genau so wünsche ich es mir.',
    by: 'Daniela R. · Altona'
  }
];

export default function FriseursalonDemoPage() {
  return (
    <>
      <SEOHead
        title="Friseursalon Website Demo – Hamburg Websites"
        description="Beispiel einer modernen Friseursalon-Website mit Leistungen, Terminbuchung, Galerie und Kontaktbereich."
        path="/referenzen/friseursalon-demo"
      />

      <div className="min-h-screen bg-[#fcf9f6] text-[#2f2a29]">
        <ReferenceStickyBackButton />

        <header className="sticky top-0 z-30 border-b border-[#e6dfd6]/80 bg-[#fcf9f6]/95 backdrop-blur">
          <div className="section-container flex h-20 items-center justify-between">
            <Link href="#start" className="text-xl font-semibold tracking-tight text-[#2f2a29]" aria-label="Zum Seitenanfang">
              Salon Elbglanz
            </Link>
            <nav aria-label="Demo Navigation" className="hidden items-center gap-5 md:flex">
              <Link href="#ueber-uns" className="text-sm text-[#5d5550] transition hover:text-[#2f2a29]">Über uns</Link>
              <Link href="#leistungen" className="text-sm text-[#5d5550] transition hover:text-[#2f2a29]">Leistungen</Link>
              <Link href="#team" className="text-sm text-[#5d5550] transition hover:text-[#2f2a29]">Team</Link>
              <Link href="#kontakt" className="text-sm text-[#5d5550] transition hover:text-[#2f2a29]">Kontakt</Link>
            </nav>
          </div>
        </header>

        <main>
          <section className="section-container pt-8" aria-label="Demo Hinweis">
            <p className="inline-flex rounded-full border border-[#ddd3c8] bg-[#f7f2ec] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#6a625c]">
              Referenzprojekt für moderne Friseursalons · So könnte eine Website für Ihren Friseursalon aussehen
            </p>
          </section>

          <section id="start" className="section-container pb-14 pt-8" aria-labelledby="hero-heading">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-[#2f2a29] sm:text-5xl">
                  Moderner Friseursalon in Hamburg
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5a524d]">
                  Individuelle Haarschnitte, moderne Farbtechniken und eine entspannte Atmosphäre für stilbewusste Kundinnen und Kunden.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#termin" className="inline-flex rounded-2xl bg-[#c48c94] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b37882]">
                    Termin buchen
                  </Link>
                  <Link href="#leistungen" className="inline-flex rounded-2xl border border-[#c9beb2] bg-white px-6 py-3 text-sm font-semibold text-[#3b3330] transition hover:border-[#ab9f93]">
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
              <figure className="overflow-hidden rounded-[2.25rem]">
                <Image
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1600&q=80"
                  alt="Eleganter Friseursalon in Hamburg mit hellem Interieur und modernen Stylingplätzen"
                  width={1600}
                  height={1150}
                  priority
                  className="h-[430px] w-full object-cover sm:h-[500px]"
                />
              </figure>
            </div>
          </section>

          <section id="ueber-uns" className="section-container pb-14" aria-labelledby="about-heading">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <figure className="overflow-hidden rounded-[2rem]">
                <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80" alt="Persönliche Beratung in einem modernen Friseurstudio" width={1400} height={1000} className="h-[340px] w-full object-cover" />
              </figure>
              <div className="rounded-[2rem] border border-[#e2d8cd] bg-[#f6f0e9] p-8">
                <h2 id="about-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Über den Salon</h2>
                <p className="mt-4 text-base leading-relaxed text-[#5b534e]">
                  Im Salon Elbglanz stehen persönliche Beratung, moderner Stil und hochwertige Produkte im Mittelpunkt. Unser Team arbeitet präzise,
                  professionell und mit Blick auf Ergebnisse, die zu Persönlichkeit, Alltag und Wunsch-Look passen.
                </p>
              </div>
            </div>
          </section>

          <section id="leistungen" className="section-container pb-14" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Leistungen</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-[#e5ddd3] bg-white p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#2f2a29]">{service.title}</h3>
                    <p className="rounded-xl bg-[#f7f1eb] px-3 py-1 text-sm font-semibold text-[#5b534e]">{service.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#665d57]">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Warum Kundinnen und Kunden uns wählen</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="rounded-3xl border border-[#e3d9ce] bg-[#faf6f2] p-6">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ebd5d9] text-[#7d5a61]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                  <h3 className="text-xl font-medium">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#635b55]">{value.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="team" className="section-container pb-14" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Unser Team</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {team.map((person) => (
                <article key={person.name} className="overflow-hidden rounded-3xl border border-[#e6ddd4] bg-white">
                  <Image src={person.image} alt={`${person.name}, Stylistin im Friseursalon mit Schwerpunkt ${person.specialty}`} width={900} height={900} className="h-72 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="mt-1 text-sm text-[#665d57]">{person.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="termin" className="section-container pb-14" aria-labelledby="booking-heading">
            <div className="rounded-[2rem] bg-[#2f2a29] px-7 py-8 text-[#f8f5f2] sm:px-10 sm:py-10">
              <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Jetzt Termin anfragen</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#ddd3c8]">
                Ob neuer Haarschnitt, frische Farbe oder persönliches Styling – Termine können schnell und unkompliziert angefragt werden.
              </p>
              <p className="mt-2 text-sm text-[#c5bbb0]">Telefonisch erreichbar unter 040 / 987 65 43 · Beratungstermine auch am frühen Abend möglich.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#kontakt" className="inline-flex rounded-2xl bg-[#d8a8af] px-6 py-3 text-sm font-semibold text-[#2f2a29] transition hover:bg-[#e5bcc2]">
                  Termin buchen
                </Link>
                <Link href="#kontakt" className="inline-flex rounded-2xl border border-[#958981] px-6 py-3 text-sm font-semibold text-[#f5ede6] transition hover:border-[#b7aba2]">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Galerie & Studio-Eindrücke</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {gallery.map((image, index) => (
                <figure key={image.src} className={`${index === 0 ? 'sm:col-span-2' : ''} overflow-hidden rounded-[1.8rem]`}>
                  <Image src={image.src} alt={image.alt} width={1300} height={900} className={`w-full object-cover ${index === 0 ? 'h-[340px] sm:h-[410px]' : 'h-[280px] sm:h-[320px]'}`} />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Kundenstimmen</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item.by} className="rounded-3xl border border-[#e5ddd3] bg-white p-6">
                  <p className="text-base leading-relaxed text-[#4d4541]">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-[#6a615b]">{item.by}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="kontakt" className="section-container pb-14" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Kontakt & Öffnungszeiten</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#e2d9cf] bg-[#f7f2ec] p-7">
                <h3 className="text-lg font-semibold">Salon Elbglanz</h3>
                <p className="mt-3 text-[#59514c]">Osterstraße 128, 20255 Hamburg</p>
                <p className="mt-2 text-[#59514c]">Telefon: 040 / 987 65 43</p>
                <p className="mt-2 text-[#59514c]">E-Mail: hallo@elbglanz-demo.de</p>
                <p className="mt-5 text-sm text-[#6b625c]">Mo–Fr: 09:00–19:00 · Sa: 09:00–15:00 · So: geschlossen</p>
              </article>
              <aside className="rounded-3xl border border-dashed border-[#cfc4b8] bg-white p-7">
                <h3 className="text-lg font-semibold">Standort</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#645b55]">
                  Platzhalter für Kartenansicht oder eingebettete Standortdarstellung in Hamburg.
                </p>
                <div className="mt-5 rounded-2xl bg-[#f2ece5] p-5 text-sm text-[#6b625c]">
                  Gute Erreichbarkeit mit U2 und Buslinien · Parkmöglichkeiten in direkter Umgebung.
                </div>
              </aside>
            </div>
          </section>

          <ReferenceProjectCTA
            title="Sie möchten eine ähnliche Website für Ihren Friseursalon?"
            text="Wir entwickeln moderne Websites für lokale Unternehmen – klar strukturiert, mobil optimiert und professionell umgesetzt."
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
