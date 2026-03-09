import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import ReferenceGrid from '../components/references/ReferenceGrid';
import { referenceProjects } from '../data/references';

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Referenzen – Hamburg Websites"
        description="Beispiele moderner Websites für Restaurants, Friseursalons, Praxen, Werkstätten, Immobilien und weitere Unternehmen."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="referenzen-heading">
          <h1 id="referenzen-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Referenzen und Beispiel-Websites
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Hier finden Sie Beispiele moderner Unternehmenswebsites, die zeigen, wie Design, Struktur und Nutzerführung in unterschiedlichen Branchen umgesetzt werden können.
          </p>
        </section>

        <section className="section-container pb-16" aria-labelledby="projekt-grid-heading">
          <h2 id="projekt-grid-heading" className="text-2xl font-bold text-slateBlue">
            Projektbeispiele
          </h2>
          <div className="mt-8">
            <ReferenceGrid projects={referenceProjects} />
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="referenzen-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="referenzen-cta-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              Ihre Website könnte hier stehen
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Wir erstellen moderne Websites für lokale Unternehmen in Hamburg und Umgebung.
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
