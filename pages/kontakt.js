import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function KontaktPage() {
  return (
    <>
      <SEOHead
        title="Kontakt – Website-Projekt in Hamburg besprechen"
        description="Kontaktieren Sie Hamburg Websites für eine kostenlose Demo-Richtung und ein unverbindliches Erstgespräch zu Umfang, Stil und Budget."
        path="/kontakt"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="kontakt-heading">
          <h1 id="kontakt-heading" className="text-4xl tracking-tight text-slateBlue sm:text-5xl">
            <span className="h1-accent-italic">Kontakt</span> – Website-Projekt besprechen
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Nutzen Sie das Formular für Ihre Anfrage. Wir melden uns zeitnah mit einem konkreten Vorschlag für den
            nächsten Schritt.
          </p>
        </section>

        <Contact headingTag="h2" title="Schreiben Sie uns Ihr Website-Projekt" />

        <section className="section-container pb-16" aria-labelledby="kontakt-links-heading">
          <p className="section-label">Weitere Links</p>
          <h2 id="kontakt-links-heading" className="text-2xl text-slateBlue">
            Weitere Informationen
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/faq" className="secondary-btn text-slateBlue">
              FAQ lesen
            </Link>
            <Link href="/preise" className="secondary-btn text-slateBlue">
              Preise ansehen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
