import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website und Relaunch', priceFromEur: 650 },
  { name: 'Local SEO und Sichtbarkeit', priceFromEur: 350 },
  { name: 'Automatisierung und Tools', priceFromEur: 900 }
];

const trustItems = [
  {
    title: 'Transparenter Ablauf',
    text: 'Klare Schritte, realistische Zeitplaene und offene Kommunikation vom ersten Gespraech bis nach dem Launch.'
  },
  {
    title: 'Eigentum und Kontrolle',
    text: 'Sie behalten alle Rechte, Zugaenge und Daten. Keine Abhaengigkeiten, keine versteckten Fallstricke.'
  },
  {
    title: 'SEO, Performance und Sicherheit',
    text: 'Technische Sauberkeit, schnelle Seiten und ein Fundament fuer Sichtbarkeit, Datenschutz und Stabilitaet.'
  },
  {
    title: 'Datenschutz und DSGVO',
    text: 'Datenschutz wird von Anfang an mitgedacht: sauber umgesetzt, nachvollziehbar dokumentiert und wartbar.'
  }
];

const pricingPreview = [
  {
    title: 'Starter Website',
    subtitle: 'Onepager',
    price: 'ab 900 EUR',
    points: ['Bis zu 5 Abschnitte', 'Kontaktformular', 'Responsive Design', 'SEO-Basis']
  },
  {
    title: 'Business Website',
    subtitle: 'Mehrseitig',
    price: 'ab 1.900 EUR',
    featured: true,
    points: ['Bis zu 8 Seiten', 'Individuelles Design', 'SEO und Performance', 'Grundlegende Automationen']
  },
  {
    title: 'System Website',
    subtitle: 'Individuell',
    price: 'ab 3.900 EUR',
    points: ['Massgeschneiderte Funktionen', 'Automatisierungen und Integrationen', 'Erweiterbare Architektur', 'Betreuung optional']
  }
];

const homepageFaqPreview = [
  {
    question: 'Was passiert nach meiner Anfrage?',
    answer:
      'Sie erhalten eine kurze Rueckmeldung, wir klaeren Ziel, Umfang und vorhandene Inhalte und entscheiden dann, ob eine Demo oder ein Audit der beste naechste Schritt ist.'
  },
  {
    question: 'Geht es nur um Websites in Hamburg?',
    answer:
      'Hamburg bleibt der lokale Vertrauensanker. Die Struktur ist aber bewusst so aufgebaut, dass Projekte auch fuer Deutschland und DACH wachsen koennen.'
  },
  {
    question: 'Kann spaeter Automatisierung dazukommen?',
    answer:
      'Ja. Der erste Webauftritt wird so geplant, dass spaeter Formulare, kleine Tools, Plugins, Admin-Bereiche oder Prozesshilfen sauber anschliessen koennen.'
  }
];

const nextSteps = [
  { title: 'Service Hub', text: 'Uebersicht aller Leistungen fuer Website, SEO, Automatisierung und Tools.' },
  { title: 'Local SEO und Growth', text: 'Mehr Sichtbarkeit in Hamburg und Deutschland mit lokalem Fokus.' },
  { title: 'Automatisierung', text: 'Mehr Ablaeufe verbinden, weniger manuelle Arbeit, mehr Zeit fuers Kerngeschaeft.' },
  { title: 'Plugins und Tools', text: 'Eigene Tools fuer wiederkehrende Aufgaben und nahtlose Integration.' },
  { title: 'Case Studies', text: 'Mehr Einblicke in Projekte, Ergebnisse und echte Vorher-Nachher-Beispiele.' }
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10.2 8.1 14 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrustSection() {
  return (
    <section className="section-container section-spacing pt-6" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="trust-heading" className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
          Vertrauen entsteht durch Klarheit und Verlaesslichkeit
        </h2>
      </div>

      <div className="trust-grid mt-10">
        {trustItems.map((item) => (
          <article key={item.title} className="trust-item">
            <span className="trust-icon">
              <CheckIcon />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="pricing-preview-heading" className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
          Preisrange - klar und fair
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricingPreview.map((item) => (
          <article key={item.title} className={`pricing-preview-card ${item.featured ? 'featured' : ''}`}>
            {item.featured ? <p className="pricing-badge">Am beliebtesten</p> : null}
            <p className="text-sm font-bold text-slate-950">{item.title}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">{item.subtitle}</p>
            <p className="mt-6 text-3xl font-black text-slate-950">{item.price}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <CheckIcon />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link href="/preise" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
              Details ansehen
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
        Alle Preise sind Richtwerte. Jedes Projekt ist individuell. Nach einem kurzen Kennenlernen erhalten Sie ein
        passendes Angebot.
      </p>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="section-container section-spacing pt-4" aria-labelledby="faq-preview-heading">
      <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 id="faq-preview-heading" className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Fragen vor dem Start
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Der Einstieg bleibt bewusst einfach: Ziel klaeren, Richtung zeigen, dann sauber entscheiden.
          </p>
          <Link href="/faq" className="mt-6 inline-flex text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
            Alle Fragen ansehen
          </Link>
        </div>
        <div className="divide-y divide-slate-950/10">
          {homepageFaqPreview.map((item) => (
            <article key={item.question} className="py-6 first:pt-0">
              <h3 className="text-base font-bold text-slate-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section className="next-steps-band section-spacing" aria-labelledby="next-steps-heading">
      <div className="section-container">
        <h2 id="next-steps-heading" className="text-center text-3xl font-black leading-tight text-white sm:text-4xl">
          Was als Naechstes kommt
        </h2>

        <div className="next-steps-grid mt-10">
          {nextSteps.map((item) => (
            <article key={item.title} className="next-step-item">
              <span aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-container section-spacing" aria-labelledby="final-cta-heading">
      <div className="final-cta">
        <div>
          <h2 id="final-cta-heading" className="max-w-2xl text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Bereit fuer den naechsten Schritt?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Erzaehlen Sie kurz von Ihrem Projekt. Ich melde mich persoenlich zur kostenlosen Demo oder zum Digital-Audit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn">
              Kostenlose Demo anfragen
            </Link>
            <Link href="/kontakt#audit" className="secondary-btn">
              Digital-Audit ansehen
            </Link>
          </div>
        </div>
        <div className="final-cta-proof">
          <article>
            <strong>Direkter Kontakt</strong>
            <span>Sie sprechen direkt mit mir, ohne Umwege.</span>
          </article>
          <article>
            <strong>Schnelle Rueckmeldung</strong>
            <span>In der Regel innerhalb von 24 Stunden.</span>
          </article>
          <article>
            <strong>Hamburg und DACH</strong>
            <span>Lokal verwurzelt, deutschlandweit aktiv.</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Websites und digitale Systeme aus Hamburg"
        description="Hamburg Websites entwickelt klare Websites, lokale Sichtbarkeit und praktische digitale Systeme fuer kleine Unternehmen in Hamburg und Deutschland."
        path="/"
        schema={[organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <TrustSection />
        <Portfolio />
        <PricingPreview />
        <FaqPreview />
        <NextSteps />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
