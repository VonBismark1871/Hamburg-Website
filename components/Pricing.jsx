import Link from 'next/link';
import { motion } from 'framer-motion';
import PackagePreviewPopover from './pricing/PackagePreviewPopover';

const projectPricingCards = [
  {
    title: 'Konzept-Vorschau',
    price: '0 €',
    description: 'Ein erster visueller und struktureller Vorschlag, damit Sie Stil, Umfang und Richtung konkret bewerten können.',
    bullets: ['Erste Seitenrichtung', 'Empfehlung zum Startumfang', 'Unverbindliche Preisrange'],
    note: 'Kein fertiger Launch, sondern ein hochwertiger Einstieg in die Entscheidung.'
  },
  {
    title: 'Starter Präsenz',
    price: 'ab 400 €',
    description: 'Kompakter professioneller Auftritt für Unternehmen, die schnell sauber online sichtbar sein müssen.',
    bullets: ['Eine fokussierte Seite', 'Kontakt-CTA', 'SEO-Basics', 'Responsive Umsetzung', '1 Korrekturschleife'],
    preview: {
      description: 'Kompakte Basis-Präsenz mit kurzer Vorstellung, Kontaktdaten und einfacher Struktur.',
      bullets: ['1 Seite', 'Grundlegende Informationen', 'Kontaktmöglichkeit'],
      type: 'visitenkarte'
    }
  },
  {
    title: 'Business Onepager',
    price: 'ab 650 €',
    description: 'Conversion-orientierte Einzelseite mit klarer Story, Leistungen, Vertrauen und Anfrageführung.',
    bullets: ['Strategische Sektionen', 'Kontaktformular', 'Performance-Basics', '2 Korrekturschleifen', 'Technischer Livegang'],
    featured: true,
    badge: 'Empfohlen',
    preview: {
      description: 'Strukturierte Ein-Seiten-Website mit mehr Inhalten, klarer Nutzerführung und stärkerem Fokus auf Anfragen.',
      bullets: ['1 längere Seite', 'Leistungen / Vorteile / Kontakt', 'Conversion-orientiert'],
      type: 'onepager'
    }
  },
  {
    title: 'Studio Website',
    price: 'ab 1.000 €',
    description: 'Mehrseitige Website für Unternehmen mit Leistungen, FAQ, Referenzen, Landingpages oder komplexerer Beratung.',
    bullets: ['5-8 Seitenplan', 'Interne Verlinkung', 'SEO-Struktur', '2 Korrekturschleifen', 'Übergabe / Ownership'],
    note: 'Der sinnvolle Umfang wird vor Projektstart sauber abgegrenzt.',
    preview: {
      description: 'Website mit mehreren Unterseiten für umfangreichere Inhalte, bessere Navigation und detailliertere Informationen.',
      bullets: ['mehrere Unterseiten', 'klarere Informationsstruktur', 'geeignet für größere Projekte'],
      type: 'multipage'
    }
  },
  {
    title: 'Growth / CMS',
    price: 'ab 1.500 €',
    description: 'Für Seiten, die Inhalte später flexibel pflegen, erweitern oder stärker als digitale Infrastruktur nutzen sollen.',
    bullets: ['Mehrseitige Website', 'Adminbereich / CMS', 'Strukturierte Inhaltsverwaltung', '2-3 Korrekturschleifen', 'Erweiterbar geplant'],
    badge: 'Ausbaustufe',
    preview: {
      description: 'Website mit bearbeitbaren Inhalten und eigenständiger Pflege über einen Adminbereich.',
      bullets: ['Inhalte selbst ändern', 'Bilder und Texte aktualisieren', 'langfristig flexibel nutzbar'],
      type: 'admin'
    }
  },
  {
    title: 'Individuelle Funktionen',
    price: 'Nach Absprache',
    description: 'Buchungssysteme, Schnittstellen, spezielle Formulare oder individuelle Prozesse werden projektbezogen kalkuliert.',
    bullets: ['Buchungssysteme', 'Erweiterte Formulare', 'Individuelle Integrationen', 'Projektbezogene Kalkulation']
  }
];

const includedItems = [
  'Responsive Umsetzung',
  'Grundlegende SEO-Struktur',
  'Kontaktformular oder klare Kontaktführung',
  'Technische Einrichtung',
  'Performance-orientierter Aufbau',
  'Veröffentlichung / Livegang',
  'Vereinbarte Korrekturschleifen',
  '7 Tage Prüfungsphase nach Fertigstellung'
];

const technicalValue = [
  {
    title: 'Schneller Code',
    text: 'Statische Auslieferung, schlanke Komponenten und bewusst wenige Abhängigkeiten halten Seiten schnell.'
  },
  {
    title: 'SEO-fähige Struktur',
    text: 'Titles, Descriptions, Canonicals, Schema und klare Überschriften werden nicht nachträglich angeklebt.'
  },
  {
    title: 'Pflegbar statt verbaut',
    text: 'Komponenten und Inhalte werden so getrennt, dass spätere Anpassungen nicht jedes Mal ein Mini-Relaunch werden.'
  }
];

const carePlans = [
  {
    title: 'Websitepflege',
    price: 'ab 39 € / Monat',
    bullets: ['Kleinere Textänderungen', 'Bildtausch', 'Öffnungszeiten', 'Kontaktdaten', 'Kleine Inhaltsänderungen']
  },
  {
    title: 'Pflege & Hosting',
    price: 'ab 59 € / Monat',
    bullets: ['Hosting', 'Technische Betreuung', 'Kleine Inhaltsänderungen', 'Support bei Rückfragen', 'Stabile Veröffentlichung']
  }
];

function PricingCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`price-card card relative overflow-visible ${card.featured ? 'featured' : ''}`}
    >
      {card.badge ? <span className="price-pill">{card.badge}</span> : null}
      <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
      <p className="mt-4 text-4xl font-semibold text-slate-950">{card.price}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {card.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
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
      {card.note ? <p className="mt-5 text-xs font-semibold leading-5 text-slate-500">{card.note}</p> : null}
    </motion.article>
  );
}

export default function Pricing({ headingTag = 'h2', sectionId = 'pricing' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id={sectionId} aria-labelledby="pricing-heading">
      <div className="max-w-4xl">
        <p className="section-label">Pakete</p>
        <Heading id="pricing-heading" className="text-3xl text-slate-950 sm:text-5xl">
          Einstieg bezahlbar, Auftritt trotzdem hochwertig.
        </Heading>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Der Preisrahmen bleibt transparent. Entscheidend ist nicht nur die Anzahl der Seiten, sondern wie sauber
          Struktur, Design, SEO, Performance und spätere Pflege vorbereitet werden.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectPricingCards.map((card, index) => (
          <PricingCard key={card.title} card={card} index={index} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="proof-panel">
          <p className="section-label">Im Preis enthalten</p>
          <h3 className="text-2xl font-semibold text-slate-950">Die Basis ist kein Extra.</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-1">
            {includedItems.map((item) => (
              <li key={item} className="flex gap-2 rounded-xl border border-slate-950/10 bg-white/70 px-4 py-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-4">
          {technicalValue.map((item) => (
            <article key={item.title} className="standard-row">
              <span className="standard-index">{item.title.slice(0, 2)}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {carePlans.map((plan) => (
          <article key={plan.title} className="card">
            <h3 className="text-2xl font-semibold text-slate-950">{plan.title}</h3>
            <p className="mt-3 text-3xl font-semibold text-slate-950">{plan.price}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700">
              {plan.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/kontakt" className="primary-btn">
          Projekt einschätzen lassen
        </Link>
        <Link href="/referenzen" className="secondary-btn text-slate-950">
          Konzept-Galerie ansehen
        </Link>
      </div>
    </section>
  );
}
