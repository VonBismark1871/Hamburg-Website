import Link from 'next/link';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über Hamburg Websites"
        description="Erfahren Sie mehr über Hamburg Websites: unsere Arbeitsweise, unser Fokus auf lokale Sichtbarkeit und unseren Anspruch an modernes Webdesign."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="about-page-heading">
          <h1 id="about-page-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Über Hamburg Websites
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Wir entwickeln moderne Webseiten für Unternehmen in Hamburg, die professionell auftreten und qualifizierte
            Anfragen gewinnen möchten.
          </p>
        </section>

        <AboutSection headingTag="h2" />

        <section className="section-container pb-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-2xl font-bold text-slateBlue">
            So arbeiten wir
          </h2>
          <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
            <p>
              Wir verbinden klares Design mit technischer Qualität. Das Ergebnis sind Webseiten, die auf Mobilgeräten
              überzeugen und Inhalte strukturiert vermitteln.
            </p>
            <p>
              Jeder Schritt ist nachvollziehbar: vom Erstgespräch über die Seitenstruktur bis zur Veröffentlichung und
              laufenden Weiterentwicklung.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/preise" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
              Preise entdecken
            </Link>
            <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
              Projekt anfragen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
