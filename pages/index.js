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
    text: 'Klare Schritte, realistische Zeitpläne und offene Kommunikation vom ersten Gespräch bis nach dem Launch.'
  },
  {
    title: 'Eigentum und Kontrolle',
    text: 'Sie behalten alle Rechte, Zugänge und Daten. Keine Abhängigkeiten, keine versteckten Fallstricke.'
  },
  {
    title: 'Technische Qualität',
    text: 'Saubere Struktur, schnelle Seiten und ein Fundament für Sichtbarkeit, Datenschutz und Stabilität.'
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
    price: 'ab 900 €',
    points: ['Bis zu 5 Abschnitte', 'Kontaktformular', 'Responsive Design', 'SEO-Basis']
  },
  {
    title: 'Business Website',
    subtitle: 'Mehrseitig',
    price: 'ab 1.900 €',
    featured: true,
    points: ['Bis zu 8 Seiten', 'Individuelles Design', 'SEO und Performance', 'Grundlegende Automationen']
  },
  {
    title: 'System Website',
    subtitle: 'Individuell',
    price: 'ab 3.900 €',
    points: ['Maßgeschneiderte Funktionen', 'Automatisierungen und Integrationen', 'Erweiterbare Architektur', 'Betreuung optional']
  }
];

const homepageFaqPreview = [
  {
    question: 'Was passiert nach meiner Anfrage?',
    answer:
      'Sie erhalten eine kurze Rückmeldung, wir klären Ziel, Umfang und vorhandene Inhalte und entscheiden dann, ob eine Demo oder ein Audit der beste nächste Schritt ist.'
  },
  {
    question: 'Arbeiten Sie nur für Unternehmen in Hamburg?',
    answer:
      'Der Standort ist Hamburg. Projekte können aber genauso für Unternehmen in Deutschland und DACH umgesetzt werden.'
  },
  {
    question: 'Kann später Automatisierung dazukommen?',
    answer:
      'Ja. Website, SEO, Automatisierung und Tools sind getrennte Leistungen. Wenn es sinnvoll ist, können sie später sauber anschließen.'
  }
];

const nextSteps = [
  { title: 'Service Hub', text: 'Übersicht aller Leistungen für Website, SEO, Automatisierung und Tools.' },
  { title: 'SEO & Sichtbarkeit', text: 'Mehr Sichtbarkeit in Hamburg, Deutschland und DACH mit sauberer lokaler Struktur.' },
  { title: 'Automatisierung', text: 'Wiederkehrende Abläufe reduzieren, ohne den Webauftritt unnötig kompliziert zu machen.' },
  { title: 'Plugins und Tools', text: 'Eigene Tools für wiederkehrende Aufgaben, interne Abläufe und nahtlose Integration.' },
  { title: 'Case Studies', text: 'Mehr Einblicke in Projekte, Ergebnisse und echte Vorher-Nachher-Beispiele.' }
];

function ExpansionIcon({ index }) {
  const paths = [
    <>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </>,
    <>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m16 16 4 4" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </>,
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
      <path d="M10 7h4.5A2.5 2.5 0 0 1 17 9.5V14" />
      <path d="M14 17H9.5A2.5 2.5 0 0 1 7 14.5V10" />
    </>,
    <>
      <path d="m14.5 5 4.5 4.5-9.5 9.5H5v-4.5L14.5 5Z" />
      <path d="m13 6.5 4.5 4.5" />
    </>,
    <>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h8" />
      <circle cx="17" cy="17" r="2" />
    </>
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

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
          Vertrauen entsteht durch Klarheit und Verlässlichkeit
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
            Der Einstieg bleibt bewusst einfach: Ziel klären, Richtung zeigen, dann sauber entscheiden.
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
          Weitere Leistungen, wenn mehr gebraucht wird
        </h2>

        <div className="next-steps-grid mt-10">
          {nextSteps.map((item, index) => (
            <article key={item.title} className="next-step-item">
              <span className="next-step-icon">
                <ExpansionIcon index={index} />
              </span>
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
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Erzählen Sie kurz von Ihrem Projekt. Ich melde mich persönlich zur kostenlosen Demo oder zum Digital-Audit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn">
              Kostenlose Demo anfragen
            </Link>
            <Link href="/kontakt#audit" className="secondary-btn">
              Digital-Audit starten
            </Link>
          </div>
        </div>
        <div className="final-cta-proof">
          <article>
            <strong>Direkter Kontakt</strong>
            <span>Sie sprechen direkt mit mir, ohne Umwege.</span>
          </article>
          <article>
            <strong>Schnelle Rückmeldung</strong>
            <span>In der Regel innerhalb von 24 Stunden.</span>
          </article>
          <article>
            <strong>Hamburg und DACH</strong>
            <span>Lokal erreichbar, deutschlandweit umsetzbar.</span>
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
        title="Websites und digitale Lösungen aus Hamburg"
        description="Hamburg Websites entwickelt klare Websites, lokale Sichtbarkeit, Automatisierungen und praktische digitale Tools für kleine Unternehmen."
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
