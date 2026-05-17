import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const services = [
  {
    title: 'Damenhaarschnitt',
    text: 'Präziser Schnitt inklusive individueller Typberatung und passendem Finish.',
    price: 'ab 48€',
    icon: 'Cut'
  },
  {
    title: 'Herrenhaarschnitt',
    text: 'Moderne Looks mit sauberen Konturen und unkompliziertem Styling für jeden Tag.',
    price: 'ab 29€',
    icon: 'Men'
  },
  {
    title: 'Föhnen & Styling',
    text: 'Mehr Volumen, Bewegung und Halt – perfekt für Alltag, Business oder Events.',
    price: 'ab 35€',
    icon: 'Styling'
  },
  {
    title: 'Coloration',
    text: 'Schonende Farbbehandlungen mit natürlichem Glanz und harmonischen Nuancen.',
    price: 'ab 75€',
    icon: 'Color'
  },
  {
    title: 'Balayage / Strähnen',
    text: 'Sanfte Farbverläufe und gezielte Highlights für einen modernen, lebendigen Look.',
    price: 'ab 120€',
    icon: 'Balayage'
  },
  {
    title: 'Pflege & Beratung',
    text: 'Tiefenpflege und professionelle Empfehlungen für gesundes Haar zuhause.',
    price: 'ab 25€',
    icon: 'Care'
  }
];

const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fertiges Farbergebnis mit glänzendem, weich fallendem Haar',
    style: 'h-[250px] sm:h-[290px]'
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Moderner Haarschnitt mit gestyltem Volumen als Salonergebnis',
    style: 'h-[250px] sm:h-[290px]'
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc: 'https://images.unsplash.com/photo-1522337094846-8a818e733e2f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stylistin arbeitet an einem Damenhaarschnitt im Salon',
    style: 'h-[250px] sm:h-[290px]'
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80',
    alt: 'Helles Saloninterieur mit Spiegelplätzen und Stylingstühlen',
    style: 'h-[250px] sm:h-[290px]'
  }
];

const stylists = [
  {
    name: 'Anna',
    role: 'Schnitt & Styling',
    note: 'Lieblingslook: luftige Stufenschnitte mit natürlicher Bewegung.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Marco',
    role: 'Coloration & Balayage',
    note: 'Spezialisiert auf softe Übergänge und blonde Nuancen ohne harte Kanten.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Lisa',
    role: 'Beratung & Pflege',
    note: 'Findet gemeinsam mit Kundinnen und Kunden Routinen, die wirklich alltagstauglich sind.',
    image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80'
  }
];

const reasons = [
  {
    title: 'Individuelle Beratung',
    text: 'Wir analysieren Haarstruktur, Gesichtsform und persönliche Wünsche, um den passenden Look zu finden.'
  },
  {
    title: 'Moderne Farbtechniken',
    text: 'Balayage, Highlights und natürliche Farbverläufe für moderne und langlebige Ergebnisse.'
  },
  {
    title: 'Angenehme Atmosphäre',
    text: 'Ein ruhiger Salon mit persönlicher Betreuung und genügend Zeit für jeden Termin.'
  }
];

const popularServices = [
  {
    icon: 'Cut',
    title: 'Haarschnitt',
    text: 'Präzise Schnitte für Damen und Herren.'
  },
  {
    icon: 'Color',
    title: 'Coloration',
    text: 'Moderne Farbtechniken für natürliche Ergebnisse.'
  },
  {
    icon: 'Balayage',
    title: 'Balayage',
    text: 'Sanfte Highlights für lebendige Haarfarben.'
  }
];


function SalonImage({ src, fallbackSrc, alt, width, height, className, priority = false }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

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
        title="Friseursalon Elbhaar Hamburg"
        description="Friseursalon Elbhaar in Hamburg mit Leistungen, Preisen, Team, Galerie, Termin und Kontakt."
        path="/referenzen/friseursalon-demo"
      />
      <div className="relative min-h-screen bg-[#f7f2eb] text-[#2f2927]">
        <ReferenceStickyBackButton />

        <main>
          <section className="section-container pb-10 pt-8" id="start" aria-labelledby="hero-heading">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <article className="rounded-[2rem] border border-[#dfd2c4] bg-[#fffdfa] p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8b7d73]">Friseursalon Elbhaar · Hamburg</p>
                <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Moderner Friseursalon in Hamburg
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#655a54]">
                  Individuelle Haarschnitte, moderne Farbtechniken und eine entspannte Atmosphäre im Herzen von Eimsbüttel.
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
                  alt="Friseurin stylt langes Haar einer Kundin in einem modernen Hamburger Salon"
                  width={1500}
                  height={1700}
                  className="h-full min-h-[380px] w-full object-cover"
                  priority
                />
              </figure>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="popular-services-heading">
            <h2 id="popular-services-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Unsere beliebtesten Leistungen</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {popularServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.7rem] border border-[#e1d6c9] bg-[#fffdfa] p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-22px_rgba(53,40,33,0.55)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b7d73]" aria-hidden="true">{service.icon}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#3b312d]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#655951]">{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" aria-label="Vertrauen und Bewertungen">
            <div className="flex flex-col gap-4 rounded-[1.7rem] border border-[#dfd2c4] bg-[#fff8f0] px-6 py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-semibold text-[#4c403a] sm:text-base">★★★★★ 4.8 Bewertung bei Google · 120+ Rezensionen</p>
              <ul className="flex flex-wrap gap-3 text-sm text-[#665951]">
                <li className="rounded-full bg-white px-3 py-1.5">✦ Über 10 Jahre Erfahrung</li>
                <li className="rounded-full bg-white px-3 py-1.5">✦ Persönliche Beratung</li>
                <li className="rounded-full bg-white px-3 py-1.5">✦ Zentrale Lage in Hamburg</li>
              </ul>
            </div>
          </section>

          <section className="section-container pb-16" id="leistungen" aria-labelledby="services-heading">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-[#e2d6ca] bg-[#fff9f2] p-7 sm:p-9">
                <h2 id="services-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Leistungen & Preise</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#665b54]">
                  Transparente Preise und Leistungen, die auf Haarstruktur, Pflegezustand und Wunschlook abgestimmt sind.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#dfd3c7] bg-[#fffdfa] p-4 sm:p-5">
                <ul className="divide-y divide-[#ebe1d6] overflow-hidden rounded-2xl border border-[#ece2d7] bg-[#fffaf4]">
                  {services.map((service) => (
                    <li key={service.title} className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold sm:text-lg">
                          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b7d73]" aria-hidden="true">{service.icon}</span>
                          {service.title}
                        </h3>
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
              <p className="hidden max-w-md text-right text-sm text-[#6b5f58] md:block">Schnitte, Farbe, Styling und echte Eindrücke direkt aus dem Salonalltag.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {lookbook.map((item) => (
                <figure key={item.src} className={`overflow-hidden rounded-[1.8rem] ${item.style}`}>
                  <SalonImage
                    src={item.src}
                    fallbackSrc={item.fallbackSrc}
                    alt={item.alt}
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="post-transformation-cta-heading">
            <div className="rounded-[2rem] bg-[#332d2a] px-7 py-9 text-[#f7f1e9] sm:px-10 sm:py-11">
              <h2 id="post-transformation-cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Bereit für einen neuen Look?</h2>
              <p className="mt-4 max-w-2xl text-[#ddcfc2]">
                Vereinbaren Sie jetzt einen Termin und lassen Sie sich persönlich beraten.
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

          <section className="section-container pb-16" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Unser Team</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#665b54]">
              Drei feste Ansprechpartner, kurze Wege und ehrliche Empfehlungen – bei uns kennt man sich beim Namen.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {stylists.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[1.8rem] bg-[#fffdf9]">
                  <Image src={member.image} alt={`${member.name}, Friseur mit Schwerpunkt ${member.role}`} width={900} height={980} className="h-72 w-full rounded-[1.8rem] object-cover" />
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-[#6f6158]">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6a5e56]">{member.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="reasons-heading">
            <div className="rounded-[2rem] border border-[#dbcebf] bg-[#fffaf3] p-7 sm:p-10">
              <h2 id="reasons-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Warum Kundinnen und Kunden uns wählen</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {reasons.map((reason) => (
                  <li key={reason.title} className="rounded-2xl border border-[#e4d8cc] bg-white p-5 shadow-[0_12px_24px_-22px_rgba(52,39,32,0.6)]">
                    <h3 className="text-base font-semibold text-[#453b36]">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#635850]">{reason.text}</p>
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
              <aside className="rounded-[1.8rem] border border-[#ded1c3] bg-[#f9f3eb] p-7">
                <h3 className="text-lg font-semibold">Anfahrt</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61554f]">
                  U-Bahn Hoheluftbrücke in Laufnähe, Fahrradstellplätze direkt am Salon und Parkhäuser in der Umgebung.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[#d6c8ba]">
                  <div className="relative w-full overflow-hidden pb-[66%]">
                    <iframe
                      title="Standort von Friseursalon Elbhaar in der Isestraße 44, Hamburg"
                      src="https://maps.google.com/maps?q=Isestra%C3%9Fe%2044%2C%2020144%20Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="absolute left-0 top-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#756960]">Termine telefonisch, per E-Mail oder über das Kontaktformular anfragen.</p>
              </aside>
            </div>
          </section>

          <section className="section-container pb-14" aria-label="Terminabschluss">
            <div className="rounded-[2rem] border border-[#ded1c3] bg-[#fffdfa] p-7 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[#5f554f]">Termine werden telefonisch oder per E-Mail bestätigt.</p>
              <Link href="#kontakt" className="mt-4 inline-flex rounded-full bg-[#332d2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1a] sm:mt-0">
                Kontakt ansehen
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
