import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const principles = [
  {
    title: 'Struktur vor Dekoration',
    text: 'Eine Website soll nicht nur gut aussehen, sondern Besucher sicher zur nächsten Entscheidung führen.'
  },
  {
    title: 'Boutique statt Baukasten',
    text: 'Kleine Projekte bleiben schlank, bekommen aber trotzdem eine klare gestalterische und technische Handschrift.'
  },
  {
    title: 'Technik sichtbar ernst nehmen',
    text: 'SEO, Ladezeit, Komponentenstruktur, Formulare und spätere Pflege sind Teil des Produkts, nicht Nachgedanken.'
  },
  {
    title: 'Direkter Kontakt',
    text: 'Sie sprechen mit der Person, die denkt, gestaltet und umsetzt. Weniger Reibung, klarere Entscheidungen.'
  }
];

const promises = [
  'Konkrete Preisrange vor Projektstart',
  'Keine künstlichen Erfolgszahlen',
  'Klare Korrekturschleifen',
  'Saubere technische Übergabe',
  'Pflege und Hosting auf Wunsch',
  'Antwort in der Regel innerhalb von 24 Stunden'
];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über uns - Hamburg Websites"
        description="Hamburg Websites ist ein Boutique-Webstudio für lokale Unternehmen: klare Struktur, hochwertiges Design, schnelle Technik und direkte Betreuung."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section className="section-dark py-20 text-white sm:py-24" aria-labelledby="ueber-uns-hero-heading">
          <div className="section-container">
            <h1 id="ueber-uns-hero-heading" className="max-w-4xl text-4xl tracking-tight sm:text-6xl">
              Ein kleines Studio für Websites, die größer wirken als ihr Budget.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Hamburg Websites verbindet schnellen Einstieg mit einem hochwertigen Studio-Anspruch: Strategie, Design,
              SEO, Performance und wartbarer Code für lokale Unternehmen.
            </p>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="principles-heading">
          <p className="section-label">Arbeitsweise</p>
          <h2 id="principles-heading" className="text-3xl text-slate-950 sm:text-5xl">
            Weniger Agentur-Show. Mehr klare Website-Arbeit.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <article key={item.title} className="standard-row">
                <span className="standard-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container pb-20" aria-labelledby="promises-heading">
          <div className="proof-panel">
            <p className="section-label">Zusagen</p>
            <h2 id="promises-heading" className="text-3xl text-slate-950 sm:text-5xl">
              Woran Sie die Zusammenarbeit messen können.
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {promises.map((item) => (
                <li key={item} className="reference-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-container pb-20" aria-labelledby="ueber-uns-cta-heading">
          <div className="final-cta">
            <h2 id="ueber-uns-cta-heading" className="max-w-3xl text-3xl text-white sm:text-5xl">
              Passt das zu Ihrem Projekt?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Starten Sie mit einer kostenlosen Konzept-Vorschau oder schauen Sie zuerst in die Konzept-Galerie.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn primary-btn-hero">
                Konzept-Vorschau anfragen
              </Link>
              <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
                Konzept-Galerie ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
