import Link from 'next/link';
import { motion } from 'framer-motion';
import PackagePreviewPopover from './pricing/PackagePreviewPopover';

const projectPricingCards = [
  {
    title: 'Kostenlose Demo-Vorschau',
    price: '0 €',
    description:
      'Ein unverbindlicher erster Entwurf, um Stil, Aufbau und Richtung Ihrer zukünftigen Website sichtbar zu machen.',
    bullets: ['Erste visuelle Projektrichtung', 'Vorschau auf Aufbau und Stil', 'Unverbindliche Einschätzung'],
    color: 'green'
  },
  {
    title: 'Website-Visitenkarte',
    price: 'ab 400 €',
    description:
      'Sehr kompakte Webpräsenz für einen professionellen Einstieg mit Kontaktinformationen und klarem Ersteindruck.',
    bullets: ['1 Seite', 'Kontakt-CTA', 'SEO-Basics', '1 Korrekturschleife'],
    preview: {
      description: 'Kompakte Basis-Präsenz mit kurzer Vorstellung, Kontaktdaten und einfacher Struktur.',
      bullets: ['1 Seite', 'Grundlegende Informationen', 'Kontaktmöglichkeit'],
      type: 'visitenkarte'
    },
    color: 'teal'
  },
  {
    title: 'Onepager',
    price: 'ab 650 €',
    description:
      'Strukturierte Einzelseite für mehr Inhalt, stärkere Wirkung und klare Nutzerführung.',
    bullets: [
      'Sektionen auf 1 Landingpage',
      'Kontaktformular',
      'Performance-Basics',
      '2 Korrekturschleifen'
    ],
    preview: {
      description: 'Strukturierte Ein-Seiten-Website mit mehr Inhalten, klarer Nutzerführung und stärkerem Fokus auf Anfragen.',
      bullets: ['1 längere Seite', 'Leistungen / Vorteile / Kontakt', 'Conversion-orientiert'],
      type: 'onepager'
    },
    color: 'blue'
  },
  {
    title: 'Mehrseitige Website',
    price: 'ab 1.000 €',
    description: 'Für Unternehmen mit mehreren Angeboten, Zielgruppen, Unterseiten oder stärkerem Informationsbedarf.',
    bullets: ['5–8 Seitenplan', 'Interne Verlinkung', 'Übergabe / Ownership', '2 Korrekturschleifen'],
    note: 'Abhängig von Seitenanzahl und Umfang',
    featured: true,
    badge: 'Beliebt',
    preview: {
      description: 'Website mit mehreren Unterseiten für umfangreichere Inhalte, bessere Navigation und detailliertere Informationen.',
      bullets: ['mehrere Unterseiten', 'klarere Informationsstruktur', 'geeignet für größere Projekte'],
      type: 'multipage'
    },
    color: 'accent'
  },
  {
    title: 'Website mit Adminbereich',
    price: 'ab 1.500 €',
    description: 'Geeignet für Projekte, bei denen Inhalte später eigenständig verwaltet werden sollen.',
    bullets: ['Mehrseitige Website', 'Adminbereich / CMS', '2–3 Korrekturschleifen', 'Strukturierte Inhaltsverwaltung'],
    badge: 'Professionell',
    badgeStyle: 'premium',
    preview: {
      description: 'Website mit bearbeitbaren Inhalten und eigenständiger Pflege über einen Adminbereich.',
      bullets: ['Inhalte selbst ändern', 'Bilder und Texte aktualisieren', 'langfristig flexibel nutzbar'],
      type: 'admin'
    },
    color: 'purple'
  },
  {
    title: 'Individuelle Funktionen',
    price: 'Nach Absprache',
    description:
      'Zusätzliche Funktionen wie Buchungssysteme, Schnittstellen oder individuelle Prozesse werden projektbezogen kalkuliert.',
    bullets: ['Buchungssysteme', 'Erweiterte Formulare', 'Individuelle Integrationen'],
    color: 'coral'
  }
];

const includedItems = [
  { text: 'Responsive Umsetzung', icon: 'device' },
  { text: 'Grundlegende SEO-Struktur', icon: 'search' },
  { text: 'Kontaktformular', icon: 'mail' },
  { text: 'Technische Einrichtung', icon: 'cog' },
  { text: 'Performance-Optimierung', icon: 'speed' },
  { text: 'Veröffentlichung / Livegang', icon: 'rocket' },
  { text: 'Vereinbarte Korrekturschleifen', icon: 'edit' },
  { text: '7 Tage Prüfungsphase', icon: 'calendar' }
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
      'Anpassung von Kontaktdaten'
    ]
  },
  {
    title: 'Websitepflege & Hosting',
    price: 'ab 59 € / Monat',
    description:
      'Für Unternehmen, die Hosting und kleinere laufende Änderungen in einer betreuten Lösung bündeln möchten.',
    bullets: [
      'Hosting inklusive',
      'Technische Betreuung',
      'Kleinere Textänderungen',
      'Austausch von Bildern',
      'Unterstützung bei Rückfragen'
    ]
  }
];

const colorMap = {
  green: 'border-l-emerald-500',
  teal: 'border-l-accent',
  blue: 'border-l-blue-500',
  accent: 'border-l-accent',
  purple: 'border-l-purple-500',
  coral: 'border-l-coral'
};

function IncludedIcon({ type }) {
  const icons = {
    device: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
    mail: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
    cog: <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />,
    speed: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    rocket: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />,
    edit: <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />,
    calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  };
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icons[type]}
    </svg>
  );
}

function PricingCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`price-card card relative overflow-visible border-l-4 ${colorMap[card.color] || 'border-l-accent'} ${card.featured ? 'ring-2 ring-accent ring-offset-2' : ''}`}
    >
      {card.badge && (
        <span className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
          card.featured 
            ? 'bg-accent text-bg-dark' 
            : card.badgeStyle === 'premium' 
              ? 'bg-purple-100 text-purple-700' 
              : 'bg-accent/10 text-accent'
        }`}>
          {card.badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-ink">{card.title}</h3>
      <p className={`mt-3 text-3xl font-bold ${card.featured ? 'text-accent' : 'text-ink'}`}>{card.price}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{card.description}</p>
      <ul className="mt-5 space-y-2">
        {card.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {card.preview && (
        <PackagePreviewPopover
          title={card.title}
          description={card.preview.description}
          bullets={card.preview.bullets}
          type={card.preview.type}
        />
      )}
      {card.note && <p className="mt-4 text-xs font-medium text-ink-muted">{card.note}</p>}
    </motion.article>
  );
}

function ServiceCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card"
    >
      <h4 className="text-lg font-semibold text-ink">{card.title}</h4>
      <p className="mt-2 text-2xl font-bold text-accent">{card.price}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{card.description}</p>
      <ul className="mt-5 space-y-2">
        {card.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="section-label">Preise</p>
        <Heading id="pricing-heading" className="text-3xl text-ink sm:text-4xl lg:text-5xl">
          Transparente Richtwerte für unterschiedliche Website-Umfänge.
        </Heading>
        <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
          Die folgenden Preisrahmen dienen als Orientierung: vom kompakten Einstieg bis zur erweiterten Website mit
          mehreren Bereichen oder Funktionen.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectPricingCards.map((card, index) => (
          <PricingCard key={card.title} card={card} index={index} />
        ))}
      </div>

      {/* Included Items */}
      <div className="mt-16 rounded-2xl border border-line bg-bg-card p-6 shadow-soft sm:p-8">
        <p className="section-label">Inklusive</p>
        <h3 className="text-2xl font-semibold text-ink">In den meisten Projekten enthalten</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {includedItems.map((item) => (
            <div key={item.text} className="flex items-center gap-3 rounded-xl border border-line bg-bg-muted px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <IncludedIcon type={item.icon} />
              </span>
              <span className="text-sm font-medium text-ink">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-line bg-bg-card p-6 shadow-soft sm:p-8">
          <h3 className="text-xl font-semibold text-ink">Prüfung und Freigabe</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            Nach Fertigstellung erhalten Sie die Website zur Prüfung. Rückmeldungen und Änderungswünsche innerhalb der
            vereinbarten Korrekturschleifen können in der Regel innerhalb von 7 Tagen eingebracht werden.
          </p>
        </article>

        <article className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-ink">Zusätzliche Änderungen</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            Weitere Änderungswünsche nach Abschluss der vereinbarten Korrekturschleifen werden gesondert berechnet.
          </p>
          <p className="mt-4 text-2xl font-bold text-accent">ab 65 € / Stunde</p>
        </article>
      </div>

      {/* Care Plans */}
      <div className="mt-16 rounded-2xl border border-line bg-bg-card p-6 shadow-soft sm:p-8">
        <p className="section-label">Laufende Betreuung</p>
        <h3 className="text-2xl font-semibold text-ink">Websitepflege &amp; Hosting</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {carePlans.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
