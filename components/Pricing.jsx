import Link from 'next/link';
import { motion } from 'framer-motion';

const projectPricingCards = [
  {
    title: 'Kostenlose Demo-Vorschau',
    price: '0 €',
    description:
      'Ein unverbindlicher erster Entwurf, um Stil, Aufbau und Richtung Ihrer zukünftigen Website sichtbar zu machen.',
    bullets: ['Erste visuelle Projektrichtung', 'Vorschau auf Aufbau und Stil', 'Unverbindliche Einschätzung']
  },
  {
    title: 'Website-Visitenkarte',
    price: 'ab 400 €',
    description:
      'Sehr kompakte Webpräsenz für grundlegende Online-Sichtbarkeit mit Kontaktinformationen und professionellem Ersteindruck.',
    bullets: ['1 Seite', '1 Korrekturschleife', 'Responsives Design', 'Kontaktmöglichkeit', '7 Tage Prüfungsphase']
  },
  {
    title: 'Onepager',
    price: 'ab 650 €',
    description:
      'Strukturierte, conversion-orientierte Einzelseite mit klarer Inhaltshierarchie und gezielter Nutzerführung.',
    bullets: [
      '1 strukturierte Landingpage',
      '2 Korrekturschleifen',
      'Klare Inhaltsstruktur',
      'Technische Veröffentlichung',
      '7 Tage Prüfungsphase'
    ]
  },
  {
    title: 'Mehrseitige Website',
    price: 'ab 1.000 €',
    description: 'Für Unternehmen mit mehreren Inhalten, Unterseiten und klarer Informationsstruktur.',
    bullets: ['Mehrere Unterseiten', '2 Korrekturschleifen', 'Strukturierte Navigation', 'Technische Einrichtung', '7 Tage Prüfungsphase'],
    note: 'Abhängig von Seitenanzahl und Umfang',
    featured: true,
    badge: 'Besonders gefragt'
  },
  {
    title: 'Website mit Adminbereich',
    price: 'ab 1.500 €',
    description: 'Geeignet für Projekte, bei denen Inhalte später eigenständig verwaltet werden sollen.',
    bullets: ['Mehrseitige Website', 'Adminbereich / CMS', '2–3 Korrekturschleifen', 'Strukturierte Inhaltsverwaltung', '7 Tage Prüfungsphase']
  },
  {
    title: 'Individuelle Funktionen',
    price: 'Nach Absprache',
    description:
      'Zusätzliche Funktionen wie Buchungssysteme, Schnittstellen oder individuelle Prozesse werden projektbezogen kalkuliert.',
    bullets: ['Buchungssysteme', 'Erweiterte Formulare', 'Individuelle Integrationen', 'Projektbezogene Kalkulation']
  }
];

const includedItems = [
  'Responsive Umsetzung',
  'Grundlegende SEO-Struktur',
  'Kontaktformular',
  'Technische Einrichtung',
  'Performance-Optimierung',
  'Veröffentlichung / Livegang',
  'Vereinbarte Korrekturschleifen',
  '7 Tage Prüfungsphase nach Fertigstellung'
];

const carePlans = [
  {
    title: 'Websitepflege',
    price: 'ab 39 € / Monat',
    description: 'Für kleinere laufende Anpassungen und inhaltliche Pflege bestehender Seiten.',
    bullets: [
      'Kleinere Textänderungen',
      'Austausch von Bildern',
      'Aktualisierung von Öffnungszeiten',
      'Anpassung von Kontaktdaten',
      'Laufende kleine Inhaltsänderungen'
    ]
  },
  {
    title: 'Websitepflege & Hosting',
    price: 'ab 59 € / Monat',
    description:
      'Für Unternehmen, die Hosting und kleinere laufende Änderungen in einer betreuten Lösung bündeln möchten.',
    bullets: [
      'Hosting',
      'Technische Betreuung',
      'Kleinere Textänderungen',
      'Austausch von Bildern',
      'Laufende Inhaltsanpassungen',
      'Unterstützung bei Rückfragen'
    ]
  }
];

function PricingCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`card relative ${card.featured ? 'border-2 border-accent/45 bg-accent/[0.04] shadow-[0_18px_40px_-26px_rgba(79,70,229,0.55)]' : ''}`}
    >
      {card.badge ? (
        <span className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {card.badge}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold text-slateBlue">{card.title}</h3>
      <p className={`mt-3 text-accent ${card.featured ? 'text-4xl font-extrabold' : 'text-3xl font-bold'}`}>{card.price}</p>
      <p className="mt-3 text-slate-600">{card.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {card.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {card.note ? <p className="mt-4 text-xs font-medium text-slate-500">{card.note}</p> : null}
    </motion.article>
  );
}

function ServiceCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="card"
    >
      <h4 className="text-lg font-semibold text-slateBlue">{card.title}</h4>
      <p className="mt-2 text-2xl font-bold text-accent">{card.price}</p>
      <p className="mt-3 text-slate-600">{card.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {card.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Pricing({ headingTag = 'h2', sectionId = 'pricing' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id={sectionId} aria-labelledby="pricing-heading">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Heading id="pricing-heading" className="text-3xl font-bold text-slateBlue">
          Richtwerte für typische Webprojekte
        </Heading>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
          Die folgenden Preisrahmen dienen als Orientierung für typische Projektumfänge. Der tatsächliche Aufwand
          richtet sich nach Inhalt, Seitenanzahl und gewünschtem Funktionsumfang, bewegt sich jedoch in der Regel im
          genannten Rahmen.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectPricingCards.map((card, index) => (
          <PricingCard key={card.title} card={card} index={index} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h3 className="text-2xl font-bold text-slateBlue">In den meisten Projekten enthalten</h3>
        <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
          {includedItems.map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h3 className="text-2xl font-bold text-slateBlue">Prüfung und Freigabe</h3>
          <p className="mt-4 text-slate-600">
            Nach Fertigstellung erhalten Sie die Website zur Prüfung. Rückmeldungen und Änderungswünsche innerhalb der
            vereinbarten Korrekturschleifen können in der Regel innerhalb von 7 Tagen eingebracht werden.
          </p>
          <p className="mt-3 text-slate-600">Die finale Veröffentlichung erfolgt nach Freigabe der abgestimmten Version.</p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft sm:p-8">
          <h3 className="text-2xl font-bold text-slateBlue">Zusätzliche Änderungen</h3>
          <p className="mt-4 text-slate-600">
            Weitere Änderungswünsche nach Abschluss der vereinbarten Korrekturschleifen oder außerhalb des abgestimmten
            Projektumfangs werden gesondert berechnet.
          </p>
          <p className="mt-4 text-lg font-semibold text-accent">Zusätzliche Anpassungen: ab 65 € / Stunde</p>
          <p className="mt-3 text-sm text-slate-500">
            Kleinere inhaltliche Anpassungen unterscheiden sich von strukturellen Erweiterungen oder neuen Funktionen.
          </p>
        </article>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h3 className="text-2xl font-bold text-slateBlue">Websitepflege &amp; Hosting</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {carePlans.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Kleinere Änderungen umfassen z. B. den Austausch von Texten, Bildern, Öffnungszeiten oder Kontaktdaten.
          Größere strukturelle Änderungen, neue Seiten oder zusätzliche Funktionen werden separat kalkuliert.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <p className="text-slate-600">
          Jedes Projekt wird individuell geplant. Die genannten Preise dienen als realistische Orientierung für typische
          Anforderungen.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
            Projekt anfragen
          </Link>
          <Link
            href="/kontakt"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
          >
            Kostenlose Demo anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
