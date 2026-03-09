import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const steps = [
  {
    title: 'Anfrage',
    text: 'Sie senden uns einige Informationen zu Ihrem Unternehmen, Ihren Leistungen und Ihren Vorstellungen.'
  },
  {
    title: 'Kostenlose Demo-Website',
    text: 'Auf Basis Ihrer Angaben erstellen wir eine erste Demo-Website, damit Sie Aufbau, Stil und Struktur sehen können.'
  },
  {
    title: 'Abstimmung',
    text: 'Sie prüfen die Demo-Website und teilen uns Ihre Wünsche und Anpassungen mit.'
  },
  {
    title: 'Umsetzung',
    text: 'Nach der Abstimmung setzen wir die vollständige Website um und bereiten sie technisch für die Veröffentlichung vor.'
  },
  {
    title: 'Prüfung und Livegang',
    text: 'Nach Fertigstellung erhalten Sie die Website zur finalen Prüfung. Anschließend wird sie veröffentlicht.'
  }
];

export default function AblaufPage() {
  return (
    <>
      <SEOHead
        title="So läuft die Zusammenarbeit ab"
        description="Erfahren Sie den klaren und transparenten Ablauf von der Anfrage bis zum Livegang Ihrer neuen Website."
        path="/ablauf"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="ablauf-heading">
          <h1 id="ablauf-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            So läuft die Zusammenarbeit ab
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Von der ersten Anfrage bis zur veröffentlichten Website bleibt der Ablauf klar und transparent.
          </p>
        </section>

        <section className="section-container pb-16" aria-labelledby="prozess-heading">
          <h2 id="prozess-heading" className="text-2xl font-bold text-slateBlue">
            Der Ablauf in 5 Schritten
          </h2>
          <ol className="mt-8 grid gap-6 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">Schritt {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-slateBlue">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm font-medium text-slate-600">
            Eine erste Demo-Website erhalten Sie in der Regel innerhalb weniger Tage.
          </p>
        </section>

        <section className="section-container pb-16" aria-labelledby="ablauf-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="ablauf-cta-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Kontaktieren Sie uns und erhalten Sie eine erste Einschätzung für Ihr Projekt.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
