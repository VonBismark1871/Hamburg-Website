import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEOHead from '../../components/SEOHead';
import ReferenceProjectCTA from '../../components/ReferenceProjectCTA';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const services = [
  {
    title: 'Prophylaxe',
    description: 'Regelmäßige Vorsorge für gesunde Zähne und das frühzeitige Erkennen von Problemen.'
  },
  {
    title: 'Vorsorgeuntersuchung',
    description: 'Gründliche Kontrolltermine mit klaren Empfehlungen, damit Sie gut informiert entscheiden können.'
  },
  {
    title: 'Professionelle Zahnreinigung',
    description: 'Schonende Entfernung von Belägen und Verfärbungen inklusive Tipps für die tägliche Zahnpflege.'
  },
  {
    title: 'Ästhetische Zahnheilkunde',
    description: 'Natürlich wirkende Korrekturen wie Bleaching oder kleine Formanpassungen für ein harmonisches Lächeln.'
  },
  {
    title: 'Zahnersatz',
    description: 'Individuell angepasste Lösungen mit Fokus auf Funktion, Komfort und langlebige Qualität.'
  },
  {
    title: 'Implantologie',
    description: 'Sorgfältig geplante Implantatversorgung mit persönlicher Beratung in jeder Behandlungsphase.'
  },
  {
    title: 'Kinderzahnheilkunde',
    description: 'Einfühlsame Behandlung für Kinder mit altersgerechter Aufklärung und ruhiger Betreuung.'
  },
  {
    title: 'Parodontologie',
    description: 'Gezielte Therapie bei Zahnfleischerkrankungen für langfristig stabile Mundgesundheit.'
  }
];

const trustPoints = [
  'Moderne Behandlungsmethoden mit digitaler Diagnostik',
  'Freundliche Betreuung und verständliche Aufklärung',
  'Klare Terminorganisation mit kurzen Wartezeiten',
  'Ruhige Praxisatmosphäre für ein sicheres Gefühl'
];

const teamMembers = [
  {
    name: 'Dr. David Becker',
    role: 'Allgemeine Zahnheilkunde',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Dr. Michael Hansen',
    role: 'Implantologie',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Lisa Krause',
    role: 'Prophylaxe & Patientenbetreuung',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80'
  }
];

const practicePhotos = [
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
    alt: 'Helles Behandlungszimmer mit modernem Dentalstuhl und ruhiger Praxisatmosphäre'
  },
  {
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
    alt: 'Zahnarzt im Beratungsgespräch mit Patientin vor der Behandlung'
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80',
    alt: 'Behandlungssituation in einer modernen Zahnarztpraxis'
  },
  {
    src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1400&q=80',
    alt: 'Freundlicher Empfangsbereich mit Sitzgelegenheiten in der Zahnarztpraxis'
  }
];

const testimonials = [
  {
    quote: 'Ich wurde pünktlich aufgerufen und alles wurde ruhig erklärt. Genau so wünsche ich mir einen Zahnarzttermin.',
    author: 'Patientin aus Eppendorf'
  },
  {
    quote: 'Besonders angenehm fand ich die freundliche Betreuung und dass auf meine Fragen wirklich eingegangen wurde.',
    author: 'Patient aus Winterhude'
  },
  {
    quote: 'Von der Online-Anfrage bis zur Behandlung lief alles strukturiert und unkompliziert.',
    author: 'Patientin aus Altona'
  }
];

const openingHours = [
  { day: 'Montag', time: '08:00–18:00' },
  { day: 'Dienstag', time: '08:00–19:00' },
  { day: 'Mittwoch', time: '08:00–16:00' },
  { day: 'Donnerstag', time: '08:00–18:00' },
  { day: 'Freitag', time: '08:00–14:00' }
];

const heroImages = {
  primary: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1600&q=80',
  fallback: '/demo-images/zahnarzt.svg'
};

export default function ZahnarztDemoPage() {
  const [heroImage, setHeroImage] = useState(heroImages.primary);

  return (
    <>
      <SEOHead
        title="Zahnarztpraxis Website Demo – Hamburg Websites"
        description="Beispiel einer modernen Zahnarztpraxis-Website mit Leistungen, Team, Terminbereich und Kontakt."
        path="/referenzen/zahnarzt-demo"
      />
      <Header />
      <div className="min-h-screen bg-[#f4f8f9] text-[#1f2f36]">
        <ReferenceStickyBackButton />

        <main>
          <section className="section-container pt-8" aria-label="Demo Hinweis">
            <p className="inline-flex items-center rounded-[12px] border border-[#c7d8df] bg-[var(--bg-card)] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#4f6974]">
              Referenzprojekt für moderne Zahnarztpraxen
            </p>
          </section>

          <section className="section-container pb-8 pt-8" id="start" aria-labelledby="hero-heading">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <article className="rounded-[32px] bg-[var(--bg-card)] p-8 shadow-[0_20px_60px_rgba(11,49,64,0.08)] sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5f7d88]">Praxis ElbDent · Hamburg</p>
                <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight text-[#17303a] sm:text-5xl">
                  Moderne Zahnarztpraxis in Hamburg
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#3f5a65]">
                  Vertrauensvolle Zahnmedizin, moderne Behandlungen und eine klare, patientenfreundliche Praxisstruktur.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#termin"
                    className="inline-flex items-center rounded-[12px] bg-[#1f5f78] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[#184a5d]"
                  >
                    Termin anfragen
                  </Link>
                  <Link
                    href="#leistungen"
                    className="inline-flex items-center rounded-[12px] border border-[#9bb8c2] bg-[#f7fbfc] px-6 py-3 text-sm font-semibold text-[#20404c] transition hover:bg-[#edf5f7]"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </article>

              <figure className="overflow-hidden rounded-[32px] bg-[var(--bg-card)]">
 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]                <Image
                  src={heroImage}
                  alt="Zahnärztin behandelt einen Patienten in einem modernen Behandlungsraum"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                  onError={() => {
                    if (heroImage !== heroImages.fallback) {
                      setHeroImage(heroImages.fallback);
                    }
                  }}
                />
              </figure>
            </div>
          </section>

          <section className="section-container pb-14" aria-label="Google Bewertung">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] px-6 py-4 text-sm text-[#2d4a56] sm:px-7">
              <span className="text-lg tracking-wide text-[#f2b01e]" aria-hidden="true">★★★★★</span>
              <p className="font-medium">4.8 Bewertung bei Google · 120+ Rezensionen</p>
              <p className="text-[#5c7781]">Viele zufriedene Patientinnen und Patienten aus Hamburg.</p>
            </div>
          </section>

          <section className="section-container pb-16" id="leistungen" aria-labelledby="services-heading">
            <header className="max-w-3xl">
              <h2 id="services-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
                Leistungen
              </h2>
              <p className="mt-4 text-[#42606b]">Unser Behandlungsangebot ist klar strukturiert und leicht verständlich.</p>
            </header>
            <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="border-b border-[#d2e0e5] pb-5">
                  <h3 className="text-lg font-semibold text-[#1e3a45]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a6671]">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" id="termin" aria-labelledby="booking-heading">
            <div className="rounded-[32px] bg-[#1f5f78] px-7 py-10 text-[var(--text-primary)] sm:px-10 sm:py-11">
              <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Jetzt Termin anfragen
              </h2>
              <p className="mt-4 max-w-2xl text-[#dbeaf0]">
                Ob Vorsorge, Zahnreinigung oder individuelle Behandlung – Termine können unkompliziert angefragt werden.
              </p>
              <p className="mt-2 text-sm text-[#c7dde6]">Neue Patientinnen und Patienten willkommen.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#kontakt" className="inline-flex items-center rounded-[12px] bg-[var(--bg-card)] px-6 py-3 text-sm font-semibold text-[#1f5f78] transition hover:bg-[#edf6f9]">
                  Termin anfragen
                </Link>
                <Link
                  href="#kontakt"
                  className="inline-flex items-center rounded-[12px] border border-[#8fb6c3] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[#1a5065]"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Ein Blick in unsere Praxis
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {practicePhotos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-[32px] bg-[var(--bg-card)]">
 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]                  <Image src={photo.src} alt={photo.alt} width={1400} height={1000} className="h-64 w-full object-cover" />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Patientenstimmen
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="rounded-[32px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-6 shadow-[0_8px_24px_rgba(15,48,62,0.04)]">
                  <p className="text-[15px] leading-relaxed text-[#3f5e69]">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-[#5b7680]">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="trust-heading">
            <div className="rounded-[32px] bg-[#e9f3f6] px-7 py-10 sm:px-10">
              <h2 id="trust-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
                Warum Patientinnen und Patienten uns vertrauen
              </h2>
              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-[20px] bg-[var(--bg-card)] px-4 py-4 text-sm text-[#33525e]">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#53a5b7]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-container pb-16" id="team" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Unser Team
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[32px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] shadow-[0_12px_28px_rgba(12,42,54,0.06)]">
                  <Image
                    src={member.image}
                    alt={`${member.name}, Schwerpunkt ${member.role}`}
                    width={1000}
                    height={1150}
                    className="h-64 w-full object-cover object-top"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#1e3b46]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[#56717b]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-14" id="kontakt" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Öffnungszeiten, Kontakt & Standort
            </h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <article className="rounded-[32px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-7">
                <h3 className="text-lg font-semibold text-[#1c3a45]">Praxis ElbDent</h3>
                <p className="mt-3 text-sm text-[#49646f]">Musterstraße 27, 20095 Hamburg</p>
                <p className="mt-2 text-sm text-[#49646f]">Telefon: 040 / 123 45 67</p>
                <p className="mt-2 text-sm text-[#49646f]">E-Mail: kontakt@elb-dent-demo.de</p>
                <dl className="mt-6 space-y-2 text-sm text-[#3f5c67]">
                  {openingHours.map((item) => (
                    <div key={item.day} className="flex justify-between gap-4 border-b border-[#edf3f5] pb-2">
                      <dt>{item.day}</dt>
                      <dd>{item.time}</dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-4 pt-1 font-medium">
                    <dt>Samstag & Sonntag</dt>
                    <dd>Geschlossen</dd>
                  </div>
                </dl>
              </article>

              <aside className="rounded-[32px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-4 sm:p-5">
                <h3 className="px-2 text-lg font-semibold text-[#244653]">Anfahrt</h3>
                <p className="mt-2 px-2 text-sm leading-relaxed text-[#48636e]">
                  Zentral in Hamburg gelegen, gut erreichbar mit U-Bahn und Bus. Fahrradstellplätze befinden sich direkt vor der Praxis.
                </p>
                <div className="mt-4 overflow-hidden rounded-[20px] bg-[#eef4f7]">
 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]                  <iframe
                    title="Google Maps Standort Praxis ElbDent"
                    src="https://www.google.com/maps?q=Jungfernstieg%2C%20Hamburg&z=14&output=embed"
                    className="h-[280px] w-full md:h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </aside>
            </div>
          </section>

          <ReferenceProjectCTA
            title="Sie möchten eine ähnliche Website für Ihre Praxis?"
            text="Wir entwickeln individuelle Praxis-Websites mit klarer Struktur, vertrauensvoller Gestaltung und intuitiver Terminführung."
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
