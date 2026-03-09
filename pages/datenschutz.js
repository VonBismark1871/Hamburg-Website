import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sections = [
  {
    id: 'verantwortlicher',
    title: '1. Verantwortlicher',
    content: (
      <>
        <p>
          Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
        </p>
        <p className="mt-4">
          <strong>Andrii Oleksiienko</strong>
          <br />
          Stadtbahnstraße 36
          <br />
          22393 Hamburg
          <br />
          Deutschland
          <br />
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
      </>
    )
  },
  {
    id: 'allgemeine-hinweise',
    title: '2. Allgemeine Hinweise zur Datenverarbeitung',
    content: (
      <>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website,
          zur Bearbeitung von Anfragen sowie zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen
          erforderlich ist.
        </p>
        <p className="mt-4">Die Verarbeitung erfolgt insbesondere auf Grundlage von:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Durchführung vorvertraglicher Maßnahmen),</li>
          <li>Art. 6 Abs. 1 lit. c DSGVO (Erfüllung rechtlicher Verpflichtungen),</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).</li>
        </ul>
        <p className="mt-4">
          Personenbezogene Daten werden zweckgebunden verarbeitet und nur so lange gespeichert, wie dies für den
          jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </p>
      </>
    )
  },
  {
    id: 'hosting',
    title: '3. Hosting',
    content: (
      <>
        <p>
          Diese Website wird über <strong>Netlify</strong> bereitgestellt. Beim Aufruf der Website verarbeitet Netlify
          technisch erforderliche Verbindungsdaten, um die Inhalte sicher und performant auszuliefern.
        </p>
        <p className="mt-4">
          Hierzu können insbesondere Server-Logdaten verarbeitet werden. Die Verarbeitung erfolgt zur Gewährleistung
          der Stabilität, Sicherheit und technischen Bereitstellung der Website.
        </p>
      </>
    )
  },
  {
    id: 'server-logfiles',
    title: '4. Zugriffsdaten / Server-Logfiles',
    content: (
      <>
        <p>
          Beim Zugriff auf diese Website können automatisch technische Zugriffsdaten in sogenannten Server-Logfiles
          erfasst werden. Dazu gehören insbesondere:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>IP-Adresse des anfragenden Geräts,</li>
          <li>Datum und Uhrzeit des Zugriffs,</li>
          <li>aufgerufene Seite bzw. Datei,</li>
          <li>übertragene Datenmenge und Statuscode,</li>
          <li>Informationen zu Browser und Betriebssystem,</li>
          <li>Referrer-URL (zuvor besuchte Seite).</li>
        </ul>
        <p className="mt-4">
          Die Verarbeitung erfolgt ausschließlich zur Sicherstellung eines störungsfreien Betriebs, zur IT-Sicherheit
          sowie zur technischen Administration der Website.
        </p>
      </>
    )
  },
  {
    id: 'kontaktaufnahme',
    title: '5. Kontaktaufnahme',
    content: (
      <>
        <p>
          Wenn Sie mit uns Kontakt aufnehmen (z. B. per Kontaktformular oder E-Mail), verarbeiten wir die von Ihnen
          übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
        </p>
        <p className="mt-4">Typischerweise verarbeiten wir dabei folgende Daten:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Name,</li>
          <li>E-Mail-Adresse,</li>
          <li>Unternehmen,</li>
          <li>Nachricht,</li>
          <li>Webseite (optional).</li>
        </ul>
        <p className="mt-4">
          Die Verarbeitung erfolgt ausschließlich zum Zweck der Kommunikation und der Bearbeitung Ihrer Anfrage.
        </p>
      </>
    )
  },
  {
    id: 'kontaktformular',
    title: '6. Kontaktformular',
    content: (
      <>
        <p>
          Das auf dieser Website eingesetzte Kontaktformular wird technisch über <strong>Netlify Forms</strong>{' '}
          verarbeitet. Übermittelte Formulardaten werden an Netlify übertragen und dort für die Bearbeitung der
          Anfrage bereitgestellt.
        </p>
        <p className="mt-4">
          Zum Schutz vor missbräuchlichen automatisierten Anfragen wird ein sogenanntes Honeypot-Feld eingesetzt.
          Weitere Captcha- oder Tracking-Verfahren werden derzeit nicht eingesetzt.
        </p>
      </>
    )
  },
  {
    id: 'email-kommunikation',
    title: '7. E-Mail-Kommunikation',
    content: (
      <>
        <p>
          Die Kommunikation erfolgt auch über geschäftliche E-Mail-Adressen, insbesondere über{' '}
          <a href="mailto:info@hamburgwebsites.de" className="text-accent underline-offset-4 hover:underline">
            info@hamburgwebsites.de
          </a>
          .
        </p>
        <p className="mt-4">
          Für die E-Mail-Kommunikation kann <strong>Google Workspace</strong> eingesetzt werden. Dabei werden
          Kommunikationsdaten (z. B. Absender, Empfänger, Zeitpunkt, Inhalt der Nachricht) zum Zweck der
          Korrespondenz sowie zur Anbahnung und Durchführung von Vertragsverhältnissen verarbeitet.
        </p>
      </>
    )
  },
  {
    id: 'cookies',
    title: '8. Cookies und vergleichbare Technologien',
    content: (
      <>
        <p>
          Diese Website verwendet derzeit ausschließlich technisch notwendige Mechanismen, die für die sichere
          Bereitstellung und grundlegende Funktion der Website erforderlich sind.
        </p>
        <p className="mt-4">
          Es werden keine Marketing- oder Werbe-Cookies eingesetzt. Sofern keine einwilligungspflichtigen Cookies
          verwendet werden, wird kein gesondertes Cookie-Banner eingesetzt.
        </p>
      </>
    )
  },
  {
    id: 'tracking',
    title: '9. Analyse- und Tracking-Tools',
    content: (
      <p>
        Auf dieser Website werden aktuell keine Analyse- oder Tracking-Tools eingesetzt, die eine Einwilligung
        erfordern (z. B. Webanalyse- oder Werbe-Tracking-Dienste).
      </p>
    )
  },
  {
    id: 'drittanbieter',
    title: '10. Externe Inhalte und Drittanbieter',
    content: (
      <>
        <p>
          Diese Website lädt zur Darstellung der Schriftart „Inter“ externe Ressourcen von{' '}
          <strong>Google Fonts</strong> (fonts.googleapis.com / fonts.gstatic.com). Dabei kann Ihre IP-Adresse an
          Server von Google übermittelt werden, soweit dies technisch für die Auslieferung der Schriftarten
          erforderlich ist.
        </p>
        <p className="mt-4">
          Darüber hinaus werden derzeit keine eingebetteten Karten, Videos, Terminbuchungs-Tools oder
          Marketing-Integrationen von Drittanbietern aktiv eingesetzt.
        </p>
      </>
    )
  },
  {
    id: 'speicherdauer',
    title: '11. Speicherdauer',
    content: (
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie dies zur Erfüllung der genannten Zwecke erforderlich
        ist. Sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungsfristen entgegenstehen, werden die Daten
        gelöscht oder in der Verarbeitung eingeschränkt.
      </p>
    )
  },
  {
    id: 'rechte',
    title: '12. Rechte der betroffenen Personen',
    content: (
      <>
        <p>Sie haben im Rahmen der gesetzlichen Vorgaben insbesondere folgende Rechte:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Recht auf Auskunft über die verarbeiteten personenbezogenen Daten,</li>
          <li>Recht auf Berichtigung unrichtiger Daten,</li>
          <li>Recht auf Löschung,</li>
          <li>Recht auf Einschränkung der Verarbeitung,</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung,</li>
          <li>Recht auf Datenübertragbarkeit,</li>
          <li>Recht auf Beschwerde bei einer zuständigen Datenschutz-Aufsichtsbehörde.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ssl-tls',
    title: '13. SSL / TLS-Verschlüsselung',
    content: (
      <p>
        Diese Website nutzt eine verschlüsselte Übertragung per HTTPS (SSL/TLS), um übermittelte Inhalte vor dem
        Zugriff unberechtigter Dritter zu schützen.
      </p>
    )
  },
  {
    id: 'pflichtangaben',
    title: '14. Pflicht zur Bereitstellung von Daten',
    content: (
      <p>
        Die Nutzung dieser Website ist grundsätzlich ohne aktive Angabe personenbezogener Daten möglich. Wenn Sie uns
        eine Anfrage senden, sind bestimmte Angaben (z. B. Name, E-Mail-Adresse, Nachricht) erforderlich, um Ihre
        Anfrage sachgerecht bearbeiten zu können.
      </p>
    )
  },
  {
    id: 'aenderungen',
    title: '15. Stand und Änderung dieser Datenschutzerklärung',
    content: (
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn rechtliche, technische oder organisatorische
        Änderungen dies erforderlich machen. Es gilt die jeweils auf dieser Website veröffentlichte Fassung.
      </p>
    )
  }
];

export default function DatenschutzPage() {
  return (
    <>
      <SEOHead
        title="Datenschutzerklärung – Hamburg Websites"
        path="/datenschutz"
        description="Datenschutzerklärung von Hamburg Websites mit Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
      />
      <Header />
      <main className="section-container section-spacing" aria-labelledby="datenschutz-heading">
        <div className="mx-auto max-w-4xl">
          <h1 id="datenschutz-heading" className="text-4xl font-bold tracking-tight text-slateBlue sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Mit dieser Datenschutzerklärung informieren wir über Art, Umfang und Zweck der Verarbeitung
            personenbezogener Daten im Zusammenhang mit der Nutzung dieser Website.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-slate-700">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2 id={`${section.id}-heading`} className="text-2xl font-semibold text-slateBlue">
                  {section.title}
                </h2>
                <div className="mt-4">{section.content}</div>
              </section>
            ))}
          </div>

          <nav className="mt-14 flex flex-wrap gap-4 border-t border-slate-200 pt-8" aria-label="Weiterführende Links">
            <Link href="/impressum" className="text-accent underline-offset-4 hover:underline">
              Zum Impressum
            </Link>
            <Link href="/agb" className="text-accent underline-offset-4 hover:underline">
              Zu den AGB
            </Link>
            <Link href="/kontakt" className="text-accent underline-offset-4 hover:underline">
              Zur Kontaktseite
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
