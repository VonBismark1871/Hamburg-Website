import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DatenschutzPage() {
  return (
    <>
      <SEOHead
        title="Datenschutzerklärung"
        path="/datenschutz"
        description="Datenschutzerklärung zur Verarbeitung personenbezogener Daten für Webentwickler Hamburg."
      />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="datenschutz-heading">
        <h1 id="datenschutz-heading" className="text-4xl font-bold">
          Datenschutzerklärung
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600">
          Auf dieser Seite informierst du transparent über die Erhebung, Verarbeitung und Speicherung
          personenbezogener Daten. Ergänze die Platzhalter mit den tatsächlich verwendeten Tools und Services.
        </p>

        <section className="mt-8 space-y-4 text-slate-600">
          <h2 className="text-2xl font-semibold text-slateBlue">1. Verantwortlicher</h2>
          <p>Name, Anschrift, E-Mail-Adresse und ggf. weitere Kontaktdaten.</p>
          <h2 className="text-2xl font-semibold text-slateBlue">2. Erhobene Daten</h2>
          <p>Server-Logfiles, Kontaktformular-Daten und ggf. Analyse- oder Cookie-Informationen.</p>
          <h2 className="text-2xl font-semibold text-slateBlue">3. Rechte betroffener Personen</h2>
          <p>Auskunft, Berichtigung, Löschung, Widerspruch und Datenübertragbarkeit gemäß DSGVO.</p>
        </section>

        <nav className="mt-10 flex flex-wrap gap-4" aria-label="Weiterführende Links">
          <Link href="/impressum" className="text-accent underline-offset-4 hover:underline">
            Zum Impressum
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
