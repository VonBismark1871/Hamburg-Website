import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AGBPage() {
  return (
    <>
      <SEOHead
        title="Allgemeine Geschäftsbedingungen"
        path="/agb"
        description="AGB für Webdesign- und Webentwicklungsleistungen in Hamburg."
      />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="agb-heading">
        <h1 id="agb-heading" className="text-4xl font-bold">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mt-6 max-w-3xl text-slate-600">
          Diese Seite beschreibt die vertraglichen Grundlagen für angebotene Leistungen. Passe die Inhalte an deine
          tatsächlichen Projektbedingungen und juristischen Anforderungen an.
        </p>

        <section className="mt-8 space-y-4 text-slate-600">
          <h2 className="text-2xl font-semibold text-slateBlue">1. Leistungsumfang</h2>
          <p>Beschreibung der angebotenen Leistungen, Projektphasen und Abgrenzungen.</p>
          <h2 className="text-2xl font-semibold text-slateBlue">2. Vergütung und Zahlungsbedingungen</h2>
          <p>Regelungen zu Preisen, Zahlungsfristen, Abschlagszahlungen und Zusatzleistungen.</p>
          <h2 className="text-2xl font-semibold text-slateBlue">3. Abnahme und Haftung</h2>
          <p>Abnahmeregeln, Mängelrechte und Haftungsbegrenzungen.</p>
        </section>

        <nav className="mt-10 flex flex-wrap gap-4" aria-label="Weiterführende Links">
          <Link href="/impressum" className="text-accent underline-offset-4 hover:underline">
            Zum Impressum
          </Link>
          <Link href="/datenschutz" className="text-accent underline-offset-4 hover:underline">
            Zur Datenschutzerklärung
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
