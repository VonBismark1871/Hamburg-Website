import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEOHead from '../../components/SEOHead';
import ReferenceProjectCTA from '../../components/ReferenceProjectCTA';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const services = [
  {
    title: 'Damenhaarschnitt',
    text: 'Präziser Schnitt inklusive individueller Typberatung und passendem Finish.',
    price: 'ab 48€'
  },
  {
    title: 'Herrenhaarschnitt',
    text: 'Moderne Looks mit sauberen Konturen und unkompliziertem Styling für jeden Tag.',
    price: 'ab 29€'
  },
  {
    title: 'Föhnen & Styling',
    text: 'Mehr Volumen, Bewegung und Halt – perfekt für Alltag, Business oder Events.',
    price: 'ab 35€'
  },
  {
    title: 'Coloration',
    text: 'Schonende Farbbehandlungen mit natürlichem Glanz und harmonischen Nuancen.',
    price: 'ab 75€'
  },
  {
    title: 'Balayage / Strähnen',
    text: 'Sanfte Farbverläufe und gezielte Highlights für einen modernen, lebendigen Look.',
    price: 'ab 120€'
  },
  {
    title: 'Pflege & Beratung',
    text: 'Tiefenpflege und professionelle Empfehlungen für gesundes Haar zuhause.',
    price: 'ab 25€'
  }
];

const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1700&q=80',
    alt: 'Friseurin stylt langes Haar vor einem Spiegel im Salon'
  },
  {
    src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1300&q=80',
    alt: 'Balayage Ergebnis mit weichen Farbverläufen bei natürlichem Licht'
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1300&q=80',
    alt: 'Moderner Friseursalon mit Styling-Plätzen und Spiegeln'
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1300&q=80',
    alt: 'Stylist arbeitet konzentriert am Damenhaarschnitt'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337094846-8a818e733e2f?auto=format&fit=crop&w=1300&q=80',
    alt: 'Fertig gestylte lockige Frisur nach dem Salonbesuch'
  },
  {
    src: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=1300&q=80',
    alt: 'Haarwäschebereich mit eleganten Waschstationen im Friseursalon'
  }
];

const stylists = [
  {
    name: 'Anna',
    role: 'Schnitt & Styling',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Marco',
    role: 'Coloration & Balayage',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Lisa',
    role: 'Beratung & Pflege',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80'
  }
];

const reasons = ['Individuelle Beratung', 'Moderne Farbtechniken', 'Angenehme Atmosphäre'];

const testimonials = [
  {
    quote: 'Sehr angenehme Beratung und ein Ergebnis, das perfekt zu mir passt.',
    by: 'Kundin aus Eimsbüttel'
  },
  {
    quote: 'Ich habe mich sofort wohlgefühlt und die Farbe wirkt unglaublich natürlich.',
    by: 'Kundin aus Winterhude'
  },
  {
    quote: 'Tolles Team, ruhige Stimmung und mein neuer Schnitt sitzt jeden Morgen.',
    by: 'Kundin aus Ottensen'
  }
];

export default function FriseursalonDemoPage() {
  return (
    <>
      <SEOHead
        title="Friseursalon Demo in Hamburg – Moderne Salon-Website"
        description="Friseursalon-Demo mit Leistungen, Preisen, Team, Galerie, Termin-CTA und Kontaktbereich für eine realistische Salon-Website."
        path="/referenzen/friseursalon-demo"
      />
      <Header />
      <div className="relative min-h-screen bg-[#f7f2eb] text-[#2f2927]">
        <ReferenceStickyBackButton />

        <main>
          <section className="section-container pt-8" aria-label="Demo Hinweis">
            <p className="inline-flex rounded-full border border-[#dccfc2] bg-[#fffaf3] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#776a61]">
              Demo-Projekt · So könnte eine moderne Friseursalon-Website aussehen
            </p>
          </section>

          <section className="section-container pb-14 pt-8" id="start" aria-labelledby="hero-heading">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <article className="rounded-[2rem] border border-[#dfd2c4] bg-[#fffdfa] p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8b7d73]">Friseursalon Elbhaar · Hamburg</p>
                <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Moderner Friseursalon in Hamburg
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#655a54]">
                  Individuelle Haarschnitte, moderne Farbtechniken und eine entspannte Atmosphäre.
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
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1500&q=80"
                  alt="Stylistin arbeitet an einer eleganten Frisur im Friseursalon"
                  width={1200}
                  height={1400}
                  className="h-full min-h-[450px] w-full object-cover"
                  priority
                />
              </figure>
            </div>
          </section>

          <section className="section-container pb-16" id="leistungen" aria-labelledby="services-heading">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 id="services-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Unsere Leistungen
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6f645d]">
                  Von präzisen Schnitten bis zu aufwendigen Farbveränderungen – transparent kalkuliert und auf Ihren Haar-Typ abgestimmt.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#dfd3c7] bg-[#fffdfa] p-4 sm:p-5">
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.title} className="rounded-2xl border border-[#e8ddd1] bg-[#fffaf4] p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold sm:text-lg">{service.title}</h3>
                        <p className="rounded-full bg-[#332d2a] px-3 py-1 text-xs font-semibold text-[#f7f1e9] sm:text-sm">{service.price}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#655a54]">{service.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="lookbook-heading">
            <div className="flex items-end justify-between gap-4">
              <h2 id="lookbook-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Unsere Arbeiten
              </h2>
              <p className="hidden max-w-md text-right text-sm text-[#6b5f58] md:block">Looks, Farbe und Salonmomente aus dem Alltag.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="sm:col-span-2 lg:col-span-2 overflow-hidden rounded-[2rem]">
                <Image src={lookbook[0].src} alt={lookbook[0].alt} width={1600} height={1100} className="h-[430px] w-full object-cover" />
              </figure>
              <figure className="overflow-hidden rounded-[2rem]">
                <Image src={lookbook[1].src} alt={lookbook[1].alt} width={1000} height={1100} className="h-[430px] w-full object-cover" />
              </figure>
              {lookbook.slice(2).map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-[2rem]">
                  <Image src={item.src} alt={item.alt} width={1000} height={900} className="h-[260px] w-full object-cover" />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="team-heading">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="rounded-[2rem] border border-[#e1d5c8] bg-[#fff9f1] p-7">
                <h2 id="team-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Unser Team</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#665b54]">
                  Unser Team verbindet handwerkliche Präzision mit einem sicheren Gespür für aktuelle Trends und tragbare Looks.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {stylists.map((member) => (
                  <article key={member.name} className="overflow-hidden rounded-[1.8rem] border border-[#dfd4c9] bg-[#fffdfa]">
                    <Image src={member.image} alt={`${member.name}, Friseur mit Schwerpunkt ${member.role}`} width={900} height={980} className="h-64 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="mt-1 text-sm text-[#6b6059]">{member.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="reasons-heading">
            <div className="rounded-[2rem] border border-[#dbcebf] bg-[#fffaf3] p-7 sm:p-10">
              <h2 id="reasons-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Warum Kundinnen und Kunden uns wählen</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {reasons.map((reason) => (
                  <li key={reason} className="rounded-2xl border border-[#e4d8cc] bg-white px-4 py-4 text-sm font-medium text-[#4b423e]">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-container pb-16" id="termin" aria-labelledby="booking-heading">
            <div className="rounded-[2rem] bg-[#332d2a] px-7 py-9 text-[#f7f1e9] sm:px-10 sm:py-11">
              <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Jetzt Termin anfragen</h2>
              <p className="mt-4 max-w-2xl text-[#ddcfc2]">
                Ob neuer Haarschnitt oder frische Farbe – Termine können unkompliziert angefragt werden.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#kontakt" className="inline-flex rounded-full bg-[#e8c6a8] px-6 py-3 text-sm font-semibold text-[#2f2a28] transition hover:bg-[#f0d3b8]">
                  Termin buchen
                </Link>
                <Link href="#kontakt" className="inline-flex rounded-full border border-[#9d8d81] px-6 py-3 text-sm font-semibold text-[#f8f2ea] transition hover:border-[#d8c6b5]">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="testimonials-heading">
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
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Kontakt & Öffnungszeiten</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.8rem] border border-[#ded1c3] bg-[#fffdfa] p-7">
                <h3 className="text-lg font-semibold">Friseursalon Elbhaar</h3>
                <p className="mt-3 text-[#5f554f]">Isestraße 44, 20144 Hamburg</p>
                <p className="mt-2 text-[#5f554f]">Telefon: 040 / 389 74 112</p>
                <p className="mt-2 text-[#5f554f]">E-Mail: termin@elbhaar-demo.de</p>
                <dl className="mt-6 space-y-2 text-sm text-[#6b6059]">
                  <div className="flex justify-between gap-4">
                    <dt>Mo–Fr</dt>
                    <dd>09:00–19:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Samstag</dt>
                    <dd>09:00–15:00</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Sonntag</dt>
                    <dd>Geschlossen</dd>
                  </div>
                </dl>
              </article>
              <aside className="rounded-[1.8rem] border border-dashed border-[#cdbfac] bg-[#f9f3eb] p-7">
                <h3 className="text-lg font-semibold">Anfahrt</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61554f]">
                  U-Bahn Hoheluftbrücke in Laufnähe, Fahrradstellplätze direkt am Salon und Parkhäuser in der Umgebung.
                </p>
                <p className="mt-4 text-sm text-[#756960]">Termine telefonisch, per E-Mail oder über das Kontaktformular anfragen.</p>
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
