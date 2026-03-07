import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function KontaktPage() {
  return (
    <>
      <SEOHead
        title="Kontakt – Website erstellen lassen in Hamburg"
        description="Kontaktieren Sie Hamburg Websites für eine kostenlose Demo-Webseite und ein unverbindliches Erstgespräch zur Website-Erstellung in Hamburg."
        path="/kontakt"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="kontakt-heading">
          <h1 id="kontakt-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Kontakt – Website erstellen lassen in Hamburg
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Nutzen Sie das Formular für Ihre Anfrage. Wir melden uns zeitnah mit einem konkreten Vorschlag für den
            nächsten Schritt.
          </p>
        </section>

        <Contact headingTag="h2" title="Schreiben Sie uns Ihr Website-Projekt" />

        <section className="section-container pb-16" aria-labelledby="kontakt-links-heading">
          <h2 id="kontakt-links-heading" className="text-2xl font-bold text-slateBlue">
            Weitere Informationen
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/faq" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
              FAQ lesen
            </Link>
            <Link href="/preise" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
              Preise ansehen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
