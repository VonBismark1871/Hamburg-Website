import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const trustCards = [
  {
    title: 'Direkte Zusammenarbeit',
    text: 'Sie erhalten klare Rückmeldungen und einen direkten Ansprechpartner während des gesamten Projekts.',
  },
  {
    title: 'Klare Abläufe',
    text: 'Vom ersten Entwurf bis zum Livegang bleibt jeder Schritt nachvollziehbar und strukturiert.',
  },
  {
    title: 'Lokaler Fokus',
    text: 'Inhalte, Struktur und Seitentitel werden auf lokale Sichtbarkeit und eine professionelle Außendarstellung abgestimmt.',
  },
];

const industries = ['Restaurants', 'Friseursalons', 'Werkstätten', 'lokale Dienstleister', 'kleinere Unternehmen'];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über Hamburg Websites"
        description="Hamburg Websites ist ein kleines Webstudio für moderne Unternehmenswebsites in Hamburg mit klaren Abläufen, direkter Zusammenarbeit und Fokus auf lokale Sichtbarkeit."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="about-page-heading">
          <h1 id="about-page-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Über Hamburg Websites
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Hamburg Websites ist eine kleine Webstudio für moderne Unternehmenswebsites in Hamburg. Wir entwickeln
            klare, strukturierte und mobil optimierte Websites für Unternehmen, die professionell auftreten und online
            besser gefunden werden möchten.
          </p>
          <p className="mt-4 max-w-3xl text-base text-slate-500">
            Der Fokus liegt auf klaren Abläufen, direkter Abstimmung und Websites, die Design, Struktur und technische
            Qualität sinnvoll verbinden.
          </p>
        </section>

        <section className="section-container pb-16" aria-labelledby="studio-strengths-heading">
          <h2 id="studio-strengths-heading" className="sr-only">
            Stärken von Hamburg Websites
          </h2>
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-3">
            {trustCards.map((card) => (
              <article key={card.title}>
                <h3 className="font-semibold text-slateBlue">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="process-heading">
          <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-2">
            <article>
              <h2 id="process-heading" className="text-2xl font-bold text-slateBlue">
                So arbeiten wir
              </h2>
              <p className="mt-4 text-slate-600">
                Wir verbinden klares Design mit technischer Sauberkeit und verständlicher Nutzerführung. Das Ergebnis
                sind Websites, die auf allen Geräten funktionieren und Inhalte überzeugend vermitteln.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-bold text-slateBlue">Warum eine kleine Studio?</h2>
              <p className="mt-4 text-slate-600">
                Kleine Teams ermöglichen kurze Wege, direkte Abstimmung und ein konzentriertes Arbeiten am Projekt.
                Dadurch bleibt die Zusammenarbeit persönlich, effizient und übersichtlich.
              </p>
            </article>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="industries-heading">
          <h2 id="industries-heading" className="text-2xl font-bold text-slateBlue">
            Für wen wir Websites entwickeln
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <li key={industry} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <section className="section-container pb-16" aria-labelledby="about-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 id="about-cta-heading" className="text-2xl font-bold text-slateBlue">
              Sie planen eine neue Website?
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Wenn Sie eine moderne und klar strukturierte Website für Ihr Unternehmen suchen, erhalten Sie bei uns
              eine realistische Einschätzung und einen nachvollziehbaren Projektablauf.
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
