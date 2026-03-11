import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const positioningPoints = [
  'Fokus auf lokale Unternehmen',
  'Klare und mobile Websites',
  'Direkte Abstimmung',
  'Struktur vor Überladung',
];

const principles = [
  {
    title: 'Klar statt überladen',
    text: 'Wir reduzieren auf das Wesentliche, damit Inhalte schneller verstanden werden und Entscheidungen leichter fallen.',
  },
  {
    title: 'Mobil zuerst gedacht',
    text: 'Websites werden von Anfang an für Smartphones und Tablets mitgeplant, nicht erst im Nachgang angepasst.',
  },
  {
    title: 'Direkte Abstimmung statt Umwege',
    text: 'Sie sprechen direkt mit der Person, die Ihr Projekt umsetzt. Das spart Zeit und verhindert Missverständnisse.',
  },
  {
    title: 'Struktur mit klarem Ziel',
    text: 'Jede Seite folgt einem klaren Aufbau: Orientierung schaffen, Vertrauen stärken und gezielt zur Anfrage führen.',
  },
];

const collaborationSteps = [
  {
    title: '1. Anfrage',
    text: 'Kurze Projektanfrage mit Ziel, Branche und gewünschter Richtung.',
  },
  {
    title: '2. Demo-Vorschau',
    text: 'Eine erste Vorschau zeigt Stil, Aufbau und grundsätzliche Richtung.',
  },
  {
    title: '3. Abstimmung',
    text: 'Inhalte, Struktur und gewünschte Anpassungen werden gemeinsam präzisiert.',
  },
  {
    title: '4. Umsetzung & Veröffentlichung',
    text: 'Die finale Website wird technisch sauber umgesetzt und veröffentlicht.',
  },
];

const expectationPoints = [
  'klare Rückmeldungen',
  'realistische Zeitrahmen',
  'saubere technische Umsetzung',
  'verständliche Struktur',
];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über uns – Hamburg Websites"
        description="Hamburg Websites ist eine kleine Webstudio für moderne Unternehmenswebsites in Hamburg – mit Fokus auf klare Strukturen, mobile Nutzung und direkte Zusammenarbeit."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section className="section-container section-spacing" aria-labelledby="about-page-heading">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <div>
              <h1 id="about-page-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
                Über Hamburg Websites
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-600">
                Hamburg Websites ist eine kleine Webstudio für moderne Unternehmenswebsites in Hamburg.
              </p>
              <p className="mt-4 max-w-3xl text-slate-500">
                Wir entwickeln klare, strukturierte und mobil optimierte Websites für Unternehmen, die professionell
                auftreten und online besser gefunden werden möchten.
              </p>
            </div>
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft" aria-label="Positionierung von Hamburg Websites">
              <h2 className="text-base font-semibold text-slateBlue">Kurzprofil</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {positioningPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
            Wofür wir stehen
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-slateBlue">{principle.title}</h3>
                <p className="mt-3 text-slate-600">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="collaboration-heading">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <h2 id="collaboration-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
              So läuft die Zusammenarbeit
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {collaborationSteps.map((step) => (
                <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-slateBlue">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="small-studio-heading">
          <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 id="small-studio-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
                Warum eine kleine Studio oft die bessere Wahl ist
              </h2>
              <p className="mt-4 text-slate-600">
                Kleine Teams bieten häufig genau das, was in Website-Projekten entscheidend ist: direkte Kommunikation,
                klare Verantwortung, effiziente Entscheidungen und eine persönlichere Zusammenarbeit über alle
                Projektphasen hinweg.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-1" aria-label="Vorteile einer kleinen Studio">
              {['direkter Ansprechpartner', 'schnellere Entscheidungen', 'klare Verantwortung', 'weniger Abstimmungsaufwand'].map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slateBlue">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="expectations-heading">
          <h2 id="expectations-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
            Was Kundinnen und Kunden erwarten können
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expectationPoints.map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="font-medium text-slateBlue">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="references-bridge-heading">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 id="references-bridge-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
              Wie das in der Praxis aussieht
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Unsere Referenzen zeigen, wie unterschiedliche Website-Typen für verschiedene Branchen umgesetzt werden
              können.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/referenzen"
                className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
                Referenzen ansehen
              </Link>
              <Link
                href="/kontakt"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
              >
                Projekt anfragen
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="about-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 id="about-cta-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
              Lassen Sie uns Ihr Projekt klar und professionell umsetzen
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Wenn Sie eine moderne Website für Ihr Unternehmen planen, können wir gemeinsam eine passende Struktur
              und Richtung entwickeln.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
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
