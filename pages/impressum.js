import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const linkStyle = { color: '#A855F7', textDecorationOffset: '4px' };

export default function ImpressumPage() {
  return (
    <>
      <SEOHead
        title="Impressum"
        path="/impressum"
        description="Impressum von Hamburg Websites mit den gesetzlichen Pflichtangaben."
      />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="impressum-heading">
        <article className="mx-auto max-w-4xl space-y-10">
          <h1 id="impressum-heading" className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
            Impressum
          </h1>

          <section className="space-y-4 text-base leading-8" style={{ color: '#9690A8' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>Angaben gemäß § 5 DDG</h2>
            <p>
              Andrii Oleksiienko<br />
              Stadtbahnstraße 36<br />
              22393 Hamburg<br />
              Deutschland
            </p>
          </section>

          <section className="space-y-4 text-base leading-8" style={{ color: '#9690A8' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@hamburgwebsites.de" style={linkStyle} className="underline-offset-4 hover:underline">
                info@hamburgwebsites.de
              </a>
              <br />
              Telefon:{' '}
              <a href="tel:+4916096297897" style={linkStyle} className="underline-offset-4 hover:underline">
                +49 160 96297897
              </a>
            </p>
          </section>

          <section className="space-y-4 text-base leading-8" style={{ color: '#9690A8' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
            </h2>
            <p>DE449549426</p>
          </section>

          <section className="space-y-4 text-base leading-8" style={{ color: '#9690A8' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>
            <p>
              Andrii Oleksiienko<br />
              Stadtbahnstraße 36<br />
              22393 Hamburg
            </p>
          </section>

          <section className="space-y-4 text-base leading-8" style={{ color: '#9690A8' }}>
            <h2 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>
              Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="underline-offset-4 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Hamburg Websites ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </article>

        <nav className="mt-10 flex flex-wrap gap-4" aria-label="Weiterführende Links">
          <Link href="/datenschutz" style={linkStyle} className="underline-offset-4 hover:underline">
            Zur Datenschutzerklärung
          </Link>
          <Link href="/agb" style={linkStyle} className="underline-offset-4 hover:underline">
            Zu den AGB
          </Link>
          <Link href="/" style={linkStyle} className="underline-offset-4 hover:underline">
            Zurück zur Startseite
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
