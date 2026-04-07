import SEOHead from '../components/SEOHead';
import LegalLayout from '../components/legal/LegalLayout';

export default function ImpressumPage() {
  return (
    <>
      <SEOHead
        title="Impressum – Hamburg Websites"
        path="/impressum"
        description="Impressum von Hamburg Websites mit den gesetzlichen Pflichtangaben."
      />
      <LegalLayout
        headingId="impressum-heading"
        title="Impressum"
        navLinks={[
          { href: '/datenschutz', label: 'Zur Datenschutzerklärung' },
          { href: '/agb', label: 'Zu den AGB' },
          { href: '/', label: 'Zurück zur Startseite' },
        ]}
      >
        <section className="space-y-4">
          <h2>Angaben gemäß § 5 TMG</h2>
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

        <section className="space-y-4">
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@hamburgwebsites.de">info@hamburgwebsites.de</a>
            <br />
            Telefon: <a href="tel:+4916096297897">+49 160 96297897</a>
          </p>
        </section>

        <section className="space-y-4">
          <h2>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</h2>
          <p>DE449549426</p>
        </section>
      </LegalLayout>
    </>
  );
}
