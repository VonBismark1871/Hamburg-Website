import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEOHead from '../../components/SEOHead';
import ReferenceProjectCTA from '../../components/ReferenceProjectCTA';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const services = [
  { title: 'Damenhaarschnitt', text: 'Präziser Schnitt mit persönlicher Stilberatung und passendem Finish.', price: 'ab 62 €' },
  { title: 'Herrenhaarschnitt', text: 'Moderne Formen, klare Konturen und unkompliziertes Styling für den Alltag.', price: 'ab 40 €' },
  { title: 'Föhnen & Styling', text: 'Volumen, Bewegung und Halt – abgestimmt auf Anlass und Haarstruktur.', price: 'ab 38 €' },
  { title: 'Coloration', text: 'Ganzheitliche Farbberatung inklusive Glossing und schonender Veredelung.', price: 'ab 86 €' },
  { title: 'Balayage / Strähnen', text: 'Natürliche Lichtreflexe mit weichen Übergängen und langlebigem Ergebnis.', price: 'ab 125 €' },
  { title: 'Pflege & Beratung', text: 'Tiefenpflege, Kopfhautanalyse und Produktempfehlung für zuhause.', price: 'ab 32 €' }
];

const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80',
    alt: 'Stylist bei einem präzisen Damenhaarschnitt im modernen Friseursalon'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1300&q=80',
    alt: 'Balayage-Färbung an langem Haar mit weichem Farbverlauf'
  },
  {
    src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1300&q=80',
    alt: 'Heller Salonbereich mit Spiegelplätzen und Styling-Stühlen'
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1300&q=80',
    alt: 'Friseur arbeitet konzentriert am Herrenhaarschnitt'
  }
];

const stylists = [
  {
    name: 'Mila Hansen',
    role: 'Creative Director · Schnitt & Styling',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Aylin Demir',
    role: 'Color Specialist · Balayage & Glossing',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Nora Petersen',
    role: 'Senior Stylist · Beratung & Pflege',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80'
  }
];

const reasons = ['Individuelle Beratung', 'Moderne Farbtechniken', 'Angenehme Atmosphäre', 'Online Terminbuchung'];

const testimonials = [
  { quote: 'Ich wurde ehrlich beraten und der Schnitt fällt auch ohne viel Aufwand perfekt.', by: 'Julia S. · Eppendorf' },
  { quote: 'Die Balayage wirkt super natürlich. Genau der elegante Look, den ich wollte.', by: 'Leonie K. · Ottensen' },
  { quote: 'Pünktlicher Termin, ruhige Stimmung und tolles Team. Klare Empfehlung.', by: 'Miriam T. · Winterhude' }
];

export default function FriseursalonDemoPage() {
  return (
    <>
      <SEOHead
        title="Friseursalon Website Demo – Hamburg Websites"
        description="Beispiel einer modernen Friseursalon-Website mit Leistungen, Terminbuchung, Galerie und Kontaktbereich."
        path="/referenzen/friseursalon-demo"
      />
      <Header />
      <div className="relative min-h-screen bg-[#f6f1ea] text-[#2f2a28]">
        <ReferenceStickyBackButton />

        <main>
          <section className="section-container pt-8" aria-label="Demo Hinweis">
            <p className="inline-flex rounded-full border border-[#d9cec2] bg-[#fdfaf5] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#72665e]">
              Beispiel einer möglichen Friseursalon-Website · So könnte eine Website für Ihren Friseursalon aussehen
            </p>
          </section>

          <section className="section-container pb-14 pt-8" id="start" aria-labelledby="hero-heading">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <article className="rounded-[2rem] border border-[#ded2c6] bg-[#fffdf9] p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8b7d73]">Salon Elbatelier · Hamburg</p>
                <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Moderner Friseursalon in Hamburg
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#655a54]">
                  Editorial inspirierte Haarkunst mit Fokus auf Schnitt, Farbe und natürliche Ergebnisse – in einem ruhigen, lichtdurchfluteten Studio.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#termin" className="inline-flex rounded-full bg-[#332d2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1a]">
                    Termin buchen
                  </Link>
                  <Link href="#leistungen" className="inline-flex rounded-full border border-[#b6a99c] px-6 py-3 text-sm font-semibold text-[#2f2a28] transition hover:border-[#86786d]">
                    Leistungen ansehen
                  </Link>
                </div>
              </article>
              <figure className="overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1500&q=80"
                  alt="Stylistin arbeitet an einer modernen Frisur in einem Hamburger Salon"
                  width={1200}
                  height={1400}
                  className="h-full min-h-[420px] w-full object-cover"
                  priority
                />
              </figure>
            </div>
          </section>

          <section className="section-container pb-14" id="leistungen" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Leistungen & Preise</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="grid gap-3 rounded-3xl border border-[#dfd3c7] bg-[#fffdfa] p-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#655a54]">{service.text}</p>
                  </div>
                  <p className="text-sm font-semibold tracking-wide text-[#7c6859] sm:pt-1">{service.price}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="lookbook-heading">
            <div className="flex items-end justify-between gap-6">
              <h2 id="lookbook-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Lookbook & Galerie</h2>
              <p className="hidden max-w-md text-right text-sm text-[#6b5f58] md:block">Ergebnisse, Atmosphäre und echte Salonmomente aus dem Alltag.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
              <figure className="sm:row-span-2 overflow-hidden rounded-[2rem]">
                <Image src={lookbook[0].src} alt={lookbook[0].alt} width={1500} height={1800} className="h-full min-h-[520px] w-full object-cover" />
              </figure>
              {lookbook.slice(1).map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-[2rem]">
                  <Image src={item.src} alt={item.alt} width={1200} height={900} className="h-[250px] w-full object-cover" />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Stylistinnen</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {stylists.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[1.8rem] border border-[#dfd4c9] bg-[#fffdfa]">
                  <Image src={member.image} alt={`${member.name}, Friseurin mit Schwerpunkt ${member.role}`} width={900} height={980} className="h-72 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm text-[#6b6059]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="reasons-heading">
            <div className="rounded-[2rem] border border-[#dbcebf] bg-[#fffaf3] p-7 sm:p-10">
              <h2 id="reasons-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Warum Kundinnen uns wählen</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <li key={reason} className="rounded-2xl border border-[#e4d8cc] bg-white px-4 py-3 text-sm font-medium text-[#4b423e]">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-container pb-14" id="termin" aria-labelledby="booking-heading">
            <div className="rounded-[2rem] bg-[#332d2a] px-7 py-9 text-[#f7f1e9] sm:px-10 sm:py-11">
              <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Jetzt Termin anfragen</h2>
              <p className="mt-4 max-w-2xl text-[#ddcfc2]">Schnell online anfragen und Wunschzeit sichern – für Schnitt, Styling oder Farbtermin.</p>
              <Link href="#kontakt" className="mt-7 inline-flex rounded-full bg-[#e8c6a8] px-6 py-3 text-sm font-semibold text-[#2f2a28] transition hover:bg-[#f0d3b8]">
                Termin buchen
              </Link>
            </div>
          </section>

          <section className="section-container pb-14" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Kundenstimmen</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item.by} className="rounded-3xl border border-[#dfd3c7] bg-[#fffdfa] p-6">
                  <p className="leading-relaxed text-[#4f453f]">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-[#74685f]">{item.by}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" id="kontakt" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Kontakt, Öffnungszeiten & Standort</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.8rem] border border-[#ded1c3] bg-[#fffdfa] p-7">
                <h3 className="text-lg font-semibold">Salon Elbatelier</h3>
                <p className="mt-3 text-[#5f554f]">Isestraße 44, 20144 Hamburg</p>
                <p className="mt-2 text-[#5f554f]">Telefon: 040 / 389 74 112</p>
                <p className="mt-2 text-[#5f554f]">E-Mail: termin@elbatelier-demo.de</p>
                <dl className="mt-6 space-y-2 text-sm text-[#6b6059]">
                  <div className="flex justify-between gap-4"><dt>Mo–Fr</dt><dd>09:00–19:00</dd></div>
                  <div className="flex justify-between gap-4"><dt>Samstag</dt><dd>09:00–15:00</dd></div>
                  <div className="flex justify-between gap-4"><dt>Sonntag</dt><dd>Geschlossen</dd></div>
                </dl>
              </article>
              <aside className="rounded-[1.8rem] border border-dashed border-[#cdbfac] bg-[#f9f3eb] p-7">
                <h3 className="text-lg font-semibold">Anfahrt</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61554f]">
                  U-Bahn Hoheluftbrücke in Laufnähe, Fahrradstellplätze direkt am Salon und Parkhäuser in der Umgebung.
                </p>
                <p className="mt-4 text-sm text-[#756960]">Platzhalter für Kartenmodul oder eingebettete Standortansicht.</p>
              </aside>
            </div>
          </section>

          <ReferenceProjectCTA
            title="Sie möchten eine ähnliche Website für Ihren Friseursalon?"
            text="Wir gestalten individuelle Salon-Websites mit klarer Struktur, starker Bildsprache und überzeugender Terminführung."
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
