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
    description: 'Regelmäßige Vorsorge für gesunde Zähne und frühzeitige Erkennung von Veränderungen.'
  },
  {
    title: 'Professionelle Zahnreinigung',
    description: 'Sanfte Reinigung zur Entfernung von Belägen mit verständlicher Nachberatung für zuhause.'
  },
  {
    title: 'Ästhetische Zahnheilkunde',
    description: 'Natürlich wirkende Korrekturen für ein harmonisches und selbstbewusstes Lächeln.'
  },
  {
    title: 'Zahnersatz',
    description: 'Individuell angepasste Lösungen mit Fokus auf Funktion, Komfort und langlebige Qualität.'
  },
  {
    title: 'Implantologie',
    description: 'Moderne Implantatversorgung mit strukturierter Planung und klaren Behandlungsschritten.'
  },
  {
    title: 'Vorsorgeuntersuchung',
    description: 'Gründliche Untersuchung inklusive transparenter Erklärung der nächsten sinnvollen Maßnahmen.'
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
    name: 'Dr. Anna Becker',
    role: 'Allgemeine Zahnheilkunde',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Dr. Michael Hansen',
    role: 'Implantologie',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Lisa Krause',
    role: 'Prophylaxe & Patientenbetreuung',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=80'
  }
];

const practicePhotos = [
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    alt: 'Heller und moderner Behandlungsraum in einer Zahnarztpraxis'
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    alt: 'Empfangsbereich einer Zahnarztpraxis mit freundlicher Atmosphäre'
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
    alt: 'Wartebereich mit ruhigem, patientenfreundlichem Interieur'
  },
  {
    src: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1400&q=80',
    alt: 'Moderne medizinische Ausstattung in der Zahnarztpraxis'
  }
];

const testimonials = [
  {
    quote: 'Die Praxis ist modern, freundlich und sehr gut organisiert. Ich habe mich direkt gut aufgehoben gefühlt.',
    author: 'Patientin aus Eppendorf'
  },
  {
    quote: 'Sehr ruhige Atmosphäre und eine klare Erklärung aller Behandlungsschritte. Das hat mir Sicherheit gegeben.',
    author: 'Patient aus Winterhude'
  },
  {
    quote: 'Von der Terminvergabe bis zur Behandlung lief alles unkompliziert und professionell.',
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

export default function ZahnarztDemoPage() {
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
            <p className="inline-flex items-center rounded-md border border-[#c7d8df] bg-white px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#4f6974]">
              Referenzprojekt für moderne Zahnarztpraxen
            </p>
          </section>

          <section className="section-container pb-16 pt-8" id="start" aria-labelledby="hero-heading">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <article className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(11,49,64,0.08)] sm:p-10">
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
                    className="inline-flex items-center rounded-md bg-[#1f5f78] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#184a5d]"
                  >
                    Termin anfragen
                  </Link>
                  <Link
                    href="#leistungen"
                    className="inline-flex items-center rounded-md border border-[#9bb8c2] bg-[#f7fbfc] px-6 py-3 text-sm font-semibold text-[#20404c] transition hover:bg-[#edf5f7]"
                  >
                    Leistungen ansehen
                  </Link>
                </div>
              </article>

              <figure className="overflow-hidden rounded-3xl border border-[#d5e3e8] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-ec7e0fedd4f7?auto=format&fit=crop&w=1600&q=80"
                  alt="Zahnärztin behandelt einen Patienten in einem modernen Behandlungsraum"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </figure>
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

          <section className="section-container pb-16" aria-labelledby="trust-heading">
            <div className="rounded-3xl bg-[#e9f3f6] px-7 py-10 sm:px-10">
              <h2 id="trust-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
                Warum Patientinnen und Patienten uns vertrauen
              </h2>
              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 text-sm text-[#33525e]">
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
                <article key={member.name} className="overflow-hidden rounded-3xl border border-[#d4e2e7] bg-white">
                  <Image
                    src={member.image}
                    alt={`${member.name}, Schwerpunkt ${member.role}`}
                    width={1000}
                    height={1150}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#1e3b46]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[#56717b]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Ein Blick in unsere Praxis
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {practicePhotos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-3xl border border-[#d4e2e7] bg-white">
                  <Image src={photo.src} alt={photo.alt} width={1400} height={1000} className="h-64 w-full object-cover" />
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
                <blockquote key={item.author} className="rounded-3xl border border-[#d4e2e7] bg-white p-6">
                  <p className="text-sm leading-relaxed text-[#3f5e69]">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-[#5b7680]">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="section-container pb-16" id="termin" aria-labelledby="booking-heading">
            <div className="rounded-3xl bg-[#1f5f78] px-7 py-10 text-white sm:px-10">
              <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Jetzt Termin anfragen
              </h2>
              <p className="mt-4 max-w-2xl text-[#dbeaf0]">
                Ob Vorsorge, Zahnreinigung oder individuelle Behandlung – Termine können unkompliziert angefragt werden.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#kontakt" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1f5f78] transition hover:bg-[#edf6f9]">
                  Termin anfragen
                </Link>
                <Link
                  href="#kontakt"
                  className="inline-flex items-center rounded-md border border-[#8fb6c3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1a5065]"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </section>

          <section className="section-container pb-14" id="kontakt" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-[#17303a] sm:text-4xl">
              Öffnungszeiten, Kontakt & Standort
            </h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-3xl border border-[#d4e2e7] bg-white p-7">
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

              <aside className="rounded-3xl border border-dashed border-[#b9d0d9] bg-[#eef6f8] p-7">
                <h3 className="text-lg font-semibold text-[#244653]">Anfahrt</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#48636e]">
                  Zentral in Hamburg gelegen, gut erreichbar mit U-Bahn und Bus. Fahrradstellplätze befinden sich direkt vor der Praxis.
                </p>
                <div className="mt-5 rounded-2xl border border-[#c8dbe1] bg-white p-4 text-sm text-[#56737d]">
                  Standortkarte (Platzhalter)
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
