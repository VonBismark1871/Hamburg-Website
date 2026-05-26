import Link from 'next/link';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';

export const faqItems = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answerText:
      'Die Erstellung einer typischen Unternehmenswebsite dauert in der Regel zwischen 7 und 14 Tagen. Der genaue Zeitraum hängt vom Umfang der Inhalte, der Seitenanzahl und den Feedbackschleifen ab.'
  },
  {
    question: 'Wie viel kostet eine Website?',
    answerText:
      'Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über typische Projektbudgets finden Sie auf unserer Preisübersicht.',
    answer: (
      <>
        Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über
        typische Projektbudgets finden Sie auf unserer{' '}
        <Link href="/preise" style={{ color: 'var(--cyan-2)' }} className="font-medium underline-offset-4 hover:underline">
          Preisübersicht
        </Link>
        .
      </>
    )
  },
  {
    question: 'Ist die Demo wirklich kostenlos?',
    answerText:
      'Ja. Sie erhalten eine unverbindliche Demo-Vorschau, damit Sie Stil, Struktur und Aufbau Ihrer möglichen Website sehen können, bevor Sie sich für eine Umsetzung entscheiden.'
  },
  {
    question: 'Wie viele Änderungen sind im Preis enthalten?',
    answerText:
      'Je nach Paket sind ein bis zwei Korrekturschleifen enthalten. Nach Fertigstellung erhalten Sie außerdem eine Prüfungsphase von bis zu 7 Tagen, in der kleinere Anpassungen vorgenommen werden können.'
  },
  {
    question: 'Was passiert nach der Fertigstellung der Website?',
    answerText:
      'Nach der Veröffentlichung können Sie Ihre Website selbst verwalten oder optional eine laufende Betreuung buchen. Mehr Informationen dazu finden Sie im Bereich Websitepflege und Hosting.',
    answer: (
      <>
        Nach der Veröffentlichung können Sie Ihre Website selbst verwalten oder optional eine laufende Betreuung
        buchen. Mehr Informationen dazu finden Sie im Bereich{' '}
        <Link href="/preise" style={{ color: 'var(--cyan-2)' }} className="font-medium underline-offset-4 hover:underline">
          Websitepflege und Hosting
        </Link>
        .
      </>
    )
  },
  {
    question: 'Bieten Sie Hosting und technische Betreuung an?',
    answerText:
      'Ja. Auf Wunsch übernehmen wir Hosting, technische Betreuung sowie kleinere Inhaltsanpassungen im Rahmen einer monatlichen Websitepflege.'
  },
  {
    question: 'Können bestehende Websites überarbeitet werden?',
    answerText:
      'Ja. Bestehende Websites können modernisiert, strukturell verbessert und für mobile Geräte sowie Suchmaschinen optimiert werden.'
  },
  {
    question: 'Benötige ich eigene Texte und Bilder?',
    answerText:
      'Idealerweise stellen Sie Texte und Bilder bereit. Falls nötig unterstützen wir jedoch bei Struktur, Formulierung und Bildauswahl.'
  },
  {
    question: 'Kann meine Website später erweitert werden?',
    answerText:
      'Ja. Websites werden so aufgebaut, dass sie später um zusätzliche Seiten, Inhalte oder Funktionen erweitert werden können.'
  }
];

export default function FAQ({
  headingTag = 'h2',
  title = 'Häufig gestellte Fragen',
  intro = 'Hier finden Sie Antworten auf typische Fragen zur Planung, Erstellung und Betreuung Ihrer neuen Unternehmenswebsite.',
  sectionId = 'faq',
  items = faqItems,
  showFinalCta = true
}) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id={sectionId} aria-labelledby="faq-heading">
      <Reveal className="max-w-3xl">
        <p className="section-label">FAQ</p>
        <Heading id="faq-heading" className="display-lg">{title}</Heading>
        <p className="lead mt-6">{intro}</p>
      </Reveal>

      <RevealGroup className="mt-10 space-y-3">
        {items.map((item) => (
          <RevealItem
            as="details"
            key={item.question}
            className="faq-detail group overflow-hidden rounded-2xl px-6 py-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text)' }}>{item.question}</h3>
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-45"
                style={{ border: '1px solid var(--line-2)', background: 'rgba(34,211,238,0.08)', color: 'var(--cyan-2)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 pr-8 leading-relaxed" style={{ color: 'var(--muted)' }}>{item.answer ?? item.answerText}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      {showFinalCta ? (
        <Reveal className="mt-10">
          <div className="cta-card p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>Haben Sie noch Fragen?</h3>
            <p className="mt-3 max-w-3xl" style={{ color: 'var(--muted)' }}>
              Wenn Ihre Frage hier nicht beantwortet wurde, kontaktieren Sie uns gerne direkt. Sie erhalten eine klare
              Einschätzung für Ihr Projekt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kontakt" className="primary-btn"><span>Projekt anfragen</span></Link>
              <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
            </div>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
