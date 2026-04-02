import Link from 'next/link';

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
        <Link href="/preise" className="font-medium text-accent underline-offset-4 hover:underline">
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
        <Link href="/preise" className="font-medium text-accent underline-offset-4 hover:underline">
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
      <p className="section-label">FAQ</p>
      <Heading id="faq-heading" className="text-3xl text-slateBlue">
        {title}
      </Heading>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{intro}</p>

      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="faq-item group card px-6 py-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slateBlue">{item.question}</h3>
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-answer"><p className="mt-4 pr-8 leading-relaxed text-slate-600">{item.answer ?? item.answerText}</p></div>
          </details>
        ))}
      </div>

      {showFinalCta ? (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slateBlue">Haben Sie noch Fragen?</h3>
          <p className="mt-3 max-w-3xl text-slate-600">
            Wenn Ihre Frage hier nicht beantwortet wurde, können Sie uns gerne direkt kontaktieren. Wir geben Ihnen
            eine klare Einschätzung für Ihr Projekt.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kontakt" className="primary-btn">
              Projekt anfragen
            </Link>
            <Link
              href="/preise"
              className="secondary-btn text-slateBlue"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
