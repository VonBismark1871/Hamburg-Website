import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ImpressumPage() {
  return (
    <>
      <SEOHead title="Impressum" path="/impressum" description="Impressum mit Anbieterkennzeichnung für Webentwickler Hamburg." />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="impressum-heading">
        <h1 id="impressum-heading" className="text-4xl font-bold">
          Impressum
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600">
          Diese Seite enthält die gesetzlich erforderlichen Angaben zur Anbieterkennzeichnung. Bitte ergänze die
          Platzhalter durch deine vollständigen Unternehmens- und Kontaktdaten.
        </p>

        <section className="mt-8 space-y-4 text-slate-600">
          <h2 className="text-2xl font-semibold text-slateBlue">Angaben gemäß § 5 TMG</h2>
          <p>Name / Unternehmen, Anschrift, Kontaktinformationen, USt-IdNr. (falls vorhanden).</p>
        </section>

        <section className="mt-8 space-y-4 text-slate-600">
          <h2 className="text-2xl font-semibold text-slateBlue">Verantwortlich für den Inhalt</h2>
          <p>Vor- und Nachname, vollständige Anschrift und Kontaktmöglichkeit.</p>
        </section>

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
