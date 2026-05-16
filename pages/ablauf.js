import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const processSteps = [
  {
    number: '01',
    title: 'Anfrage',
    duration: '6-24 Stunden',
    text: 'Sie schicken kurz Branche, Ziel, bestehende Website und Wunschumfang. Ein perfektes Briefing ist nicht nötig.',
    details: ['Kontaktformular, E-Mail oder Telefon', 'Erste Einschätzung meist innerhalb von 24 Stunden']
  },
  {
    number: '02',
    title: 'Konzept-Vorschau',
    duration: '1-3 Tage',
    text: 'Sie erhalten eine konkrete Richtung für Look, Seitenlogik und sinnvollen Startumfang.',
    details: ['Design- und Strukturvorschlag', 'Preisrange und Ausbaupfad', 'Kostenlos und unverbindlich']
  },
  {
    number: '03',
    title: 'Abstimmung',
    duration: '2-3 Tage',
    text: 'Wir schärfen Inhalte, Bildwelt, CTA-Logik, SEO-Fokus und technische Anforderungen.',
    details: ['Klare Korrekturschleifen', 'Direkter Ansprechpartner', 'Kein Ticket-System']
  },
  {
    number: '04',
    title: 'Umsetzung',
    duration: '5-10 Tage',
    text: 'Die Website wird technisch sauber, responsive, schnell und suchmaschinenfreundlich umgesetzt.',
    details: ['Performance und SEO-Basis', 'Formulare und Metadaten', 'Stabile Komponenten']
  },
  {
    number: '05',
    title: 'Livegang & Pflege',
    duration: '7 Tage Prüfphase',
    text: 'Nach Ihrer Freigabe geht die Website online. Pflege, Hosting und spätere Erweiterungen können ergänzt werden.',
    details: ['Veröffentlichung nach Freigabe', 'Optionale laufende Betreuung', 'Übergabe / Ownership']
  }
];

export default function AblaufPage() {
  return (
    <>
      <SEOHead
        title="Ablauf | Hamburg Websites"
        description="So läuft Ihr Website-Projekt ab: von Anfrage und kostenloser Konzept-Vorschau bis Livegang, SEO-Basis und optionaler Pflege."
        path="/ablauf"
      />
      <Header />
      <main>
        <section className="section-dark py-20 text-white sm:py-24" aria-labelledby="ablauf-hero-heading">
          <div className="section-container">
            <h1 id="ablauf-hero-heading" className="max-w-4xl text-4xl tracking-tight sm:text-6xl">
              Ein schneller Start braucht trotzdem einen sauberen Prozess.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Die Konzept-Vorschau macht die Richtung sichtbar. Danach wird nur ausgebaut, was Design, Anfrageführung
              und technische Qualität wirklich verbessert.
            </p>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="prozess-heading">
          <p className="section-label">Prozess</p>
          <h2 id="prozess-heading" className="text-3xl text-slate-950 sm:text-5xl">
            Fünf Schritte von der Idee zur gepflegten Website.
          </h2>
          <ol className="mt-10 grid gap-5">
            {processSteps.map((step) => (
              <li key={step.number} className="standard-row">
                <span className="standard-index">{step.number}</span>
                <article>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-slate-950">{step.title}</h3>
                    <span className="reference-chip">{step.duration}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="reference-chip">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-container pb-20" aria-labelledby="ablauf-cta-heading">
          <div className="final-cta">
            <h2 id="ablauf-cta-heading" className="max-w-3xl text-3xl text-white sm:text-5xl">
              Bereit für den ersten sichtbaren Schritt?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Starten Sie mit einer kostenlosen Konzept-Vorschau und einer ehrlichen Einschätzung zum passenden Umfang.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn primary-btn-hero">
                Konzept-Vorschau anfragen
              </Link>
              <Link href="/preise" className="secondary-btn secondary-btn-hero">
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
