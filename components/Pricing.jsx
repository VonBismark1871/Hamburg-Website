import Link from 'next/link';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import PackagePreviewPopover from './pricing/PackagePreviewPopover';

const projectPricingCards = [
  {
    title: 'Website-Visitenkarte',
    price: 'ab 400 €',
    description:
      'Sehr kompakte Webpräsenz für einen professionellen Einstieg mit Kontaktinformationen und klarem Ersteindruck.',
    bullets: ['Seitenstruktur für 1 Seite', 'Kontakt-CTA', 'SEO-Basics', '1 Korrekturschleife'],
    preview: {
      description: 'Kompakte Basis-Präsenz mit kurzer Vorstellung, Kontaktdaten und einfacher Struktur.',
      bullets: ['1 Seite', 'Grundlegende Informationen', 'Kontaktmöglichkeit'],
      type: 'visitenkarte'
    }
  },
  {
    title: 'Onepager',
    price: 'ab 650 €',
    description: 'Strukturierte Einzelseite für mehr Inhalt, stärkere Wirkung und klare Nutzerführung.',
    bullets: [
      'Sektionen auf 1 Landingpage',
      'Kontaktformular',
      'Performance-Basics',
      '2 Korrekturschleifen',
      'Technische Veröffentlichung'
    ],
    preview: {
      description: 'Strukturierte Ein-Seiten-Website mit mehr Inhalten, klarer Nutzerführung und stärkerem Fokus auf Anfragen.',
      bullets: ['1 längere Seite', 'Leistungen / Vorteile / Kontakt', 'Conversion-orientiert'],
      type: 'onepager'
    }
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
    }
  },
  {
    title: 'Website mit Adminbereich',
    price: 'ab 1.500 €',
    description: 'Geeignet für Projekte, bei denen Inhalte später eigenständig verwaltet werden sollen.',
    bullets: ['Mehrseitige Website', 'Adminbereich / CMS', '2–3 Korrekturschleifen', 'Strukturierte Inhaltsverwaltung'],
    badge: 'Professioneller Standard',
    preview: {
      description: 'Website mit bearbeitbaren Inhalten und eigenständiger Pflege über einen Adminbereich.',
      bullets: ['Inhalte selbst ändern', 'Bilder und Texte aktualisieren', 'langfristig flexibel nutzbar'],
      type: 'admin'
    }
  },
  {
    title: 'Individuelle Funktionen',
    price: 'Nach Absprache',
    description:
      'Zusätzliche Funktionen wie Buchungssysteme, Schnittstellen oder individuelle Prozesse werden projektbezogen kalkuliert.',
    bullets: ['Buchungssysteme', 'Erweiterte Formulare', 'Individuelle Integrationen', 'Automatisierungen & Tools', 'Projektbezogene Kalkulation']
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
    bullets: ['Kleinere Textänderungen', 'Austausch von Bildern', 'Aktualisierung von Öffnungszeiten', 'Anpassung von Kontaktdaten', 'Laufende kleine Inhaltsänderungen']
  },
  {
    title: 'Websitepflege & Hosting',
    price: 'ab 59 € / Monat',
    description: 'Für Unternehmen, die Hosting und kleinere laufende Änderungen in einer betreuten Lösung bündeln möchten.',
    bullets: ['Hosting', 'Technische Betreuung', 'Kleinere Textänderungen', 'Austausch von Bildern', 'Laufende Inhaltsanpassungen', 'Unterstützung bei Rückfragen']
  }
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6" style={{ color: 'var(--text-soft)' }}>
      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(34,211,238,0.14)', color: 'var(--cyan-2)' }}>
        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
          <path d="M3 8.5 6.5 12 13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function PricingCard({ card }) {
  return (
    <RevealItem as="div">
      <TiltCard
        max={5}
        className={`pricing-preview-card flex h-full flex-col ${card.featured ? 'featured' : ''}`}
      >
        {card.badge ? (
          <span
            className={card.featured ? 'pricing-badge' : 'mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold'}
            style={card.featured ? {} : { border: '1px solid var(--line-2)', background: 'rgba(124,58,237,0.1)', color: 'var(--violet-2)' }}
          >
            {card.badge}
          </span>
        ) : null}
        <div className={card.featured ? 'mt-8 flex flex-1 flex-col' : 'flex flex-1 flex-col'}>
          <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text)' }}>{card.title}</h3>
          <p className="mt-3 font-display gradient-text" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {card.price}
          </p>
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{card.description}</p>
          <ul className="mt-5 space-y-2.5">
            {card.bullets.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </ul>
          {card.preview ? (
            <PackagePreviewPopover
              title={card.title}
              description={card.preview.description}
              bullets={card.preview.bullets}
              type={card.preview.type}
            />
          ) : null}
          {card.note ? <p className="mt-4 text-xs font-medium" style={{ color: 'var(--faint)' }}>{card.note}</p> : null}
        </div>
      </TiltCard>
    </RevealItem>
  );
}

export default function Pricing({ headingTag = 'h2', sectionId = 'pricing' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id={sectionId} aria-labelledby="pricing-heading">
      <Reveal className="max-w-4xl">
        <p className="section-label">Unsere Pakete</p>
        <Heading id="pricing-heading" className="display-lg">
          Richtwerte für jeden Website-Umfang
        </Heading>
        <p className="lead mt-6">
          Vom kompakten Einstieg bis zur erweiterten Website mit mehreren Bereichen oder Funktionen.
          Vor Projektstart erhalten Sie eine nachvollziehbare Preisrange – ohne versteckte Paketlogiken.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="cta-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--cyan-2)' }}>Kostenlos &amp; unverbindlich</p>
            <h3 className="mt-2 font-display text-xl font-bold" style={{ color: 'var(--text)' }}>Jedes Projekt startet mit einer kostenlosen Demo</h3>
            <p className="mt-2 max-w-xl text-sm leading-7" style={{ color: 'var(--muted)' }}>
              Sie sehen Stil, Aufbau und Richtung Ihrer zukünftigen Website – bevor Sie sich für ein Paket entscheiden.
            </p>
          </div>
          <Link href="/kontakt" className="primary-btn shrink-0"><span>Kostenlose Demo anfragen</span></Link>
        </div>
      </Reveal>

      <RevealGroup className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectPricingCards.map((card) => (
          <PricingCard key={card.title} card={card} />
        ))}
      </RevealGroup>

      <Reveal className="mt-12">
        <div className="glass-card p-6 sm:p-8">
          <p className="section-label">Im Preis enthalten</p>
          <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>In den meisten Projekten enthalten</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm" style={{ border: '1px solid var(--line)', background: 'rgba(124,58,237,0.05)', color: 'var(--text-soft)' }}>
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(34,211,238,0.14)', color: 'var(--cyan-2)' }}>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                    <path d="M3 8.5 6.5 12 13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <RevealGroup className="mt-8 grid gap-5 lg:grid-cols-2">
        <RevealItem as="article" className="glass-card p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text)' }}>Prüfung und Freigabe</h3>
          <p className="mt-4 text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Nach Fertigstellung erhalten Sie die Website zur Prüfung. Rückmeldungen und Änderungswünsche innerhalb der
            vereinbarten Korrekturschleifen können in der Regel innerhalb von 7 Tagen eingebracht werden.
          </p>
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>Die finale Veröffentlichung erfolgt nach Freigabe der abgestimmten Version.</p>
        </RevealItem>
        <RevealItem as="article" className="glass-card p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text)' }}>Zusätzliche Änderungen</h3>
          <p className="mt-4 text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Weitere Änderungswünsche nach Abschluss der vereinbarten Korrekturschleifen oder außerhalb des abgestimmten
            Projektumfangs werden gesondert berechnet.
          </p>
          <p className="mt-4 font-display text-lg font-bold gradient-text">Zusätzliche Anpassungen: ab 65 € / Stunde</p>
          <p className="mt-3 text-sm" style={{ color: 'var(--faint)' }}>
            Kleinere inhaltliche Anpassungen unterscheiden sich von strukturellen Erweiterungen oder neuen Funktionen.
          </p>
        </RevealItem>
      </RevealGroup>

      <Reveal className="mt-12">
        <div className="glass-card p-6 sm:p-8">
          <p className="section-label">Laufende Betreuung</p>
          <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>Websitepflege &amp; Hosting</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {carePlans.map((card) => (
              <article key={card.title} className="rounded-2xl p-6" style={{ border: '1px solid var(--line)', background: 'rgba(255,255,255,0.02)' }}>
                <h4 className="font-display text-lg font-bold" style={{ color: 'var(--text)' }}>{card.title}</h4>
                <p className="mt-2 font-display text-2xl font-bold gradient-text">{card.price}</p>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{card.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: 'var(--faint)' }}>
            Kleinere Änderungen umfassen z. B. den Austausch von Texten, Bildern, Öffnungszeiten oder Kontaktdaten.
            Größere strukturelle Änderungen, neue Seiten oder zusätzliche Funktionen werden separat kalkuliert.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
