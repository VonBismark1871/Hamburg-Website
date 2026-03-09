import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ImpressumPage() {
  return (
    <>
      <SEOHead
        title="Impressum – Hamburg Websites"
        path="/impressum"
        description="Impressum von Hamburg Websites mit den gesetzlichen Pflichtangaben."
      />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="impressum-heading">
        <article className="mx-auto max-w-4xl space-y-10">
          <h1 id="impressum-heading" className="text-4xl font-bold tracking-tight text-slateBlue sm:text-5xl">
            Impressum
          </h1>

          <section className="space-y-4 text-base leading-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slateBlue">Angaben gemäß § 5 TMG</h2>
            <p>
              Andrii Oleksiienko
              <br />
              Stadtbahnstraße 36
              <br />
              22393 Hamburg
              <br />
              Deutschland
            </p>
          </section>

          <section className="space-y-4 text-base leading-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slateBlue">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@hamburgwebsites.de" className="text-accent underline-offset-4 hover:underline">
                info@hamburgwebsites.de
              </a>
              <br />
              Telefon:{' '}
              <a href="tel:+4916096297897" className="text-accent underline-offset-4 hover:underline">
                +49 160 96297897
              </a>
            </p>
          </section>

          <section className="space-y-4 text-base leading-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slateBlue">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
            </h2>
            <p>DE449549426</p>
          </section>
        </article>

        <nav className="mt-10 flex flex-wrap gap-4" aria-label="Weiterführende Links">
          <Link href="/datenschutz" className="text-accent underline-offset-4 hover:underline">
            Zur Datenschutzerklärung
          </Link>
          <Link href="/agb" className="text-accent underline-offset-4 hover:underline">
            Zu den AGB
          </Link>
          <Link href="/" className="text-accent underline-offset-4 hover:underline">
            Zurück zur Startseite
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
