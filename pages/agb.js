import SEOHead from '../components/SEOHead';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
  {
    title: '1. Geltungsbereich',
    paragraphs: [
      'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Hamburg Websites und seinen Auftraggebern über Leistungen im Bereich Webdesign, Webentwicklung sowie projektbezogene digitale Dienstleistungen.',
      'Das Angebot von Hamburg Websites richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen. Ein Vertragsschluss mit Verbrauchern im Sinne des § 13 BGB erfolgt nicht.',
      'Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn Hamburg Websites ihrer Geltung ausdrücklich schriftlich oder in Textform zugestimmt hat.',
    ],
  },
  {
    title: '2. Vertragsgegenstand',
    paragraphs: [
      'Gegenstand und Umfang der Leistungen ergeben sich aus dem jeweiligen Angebot, der Projektbeschreibung, der Leistungsübersicht sowie gegebenenfalls aus einer Auftragsbestätigung.',
      'Soweit nicht ausdrücklich schriftlich zugesichert, schuldet Hamburg Websites keinen bestimmten wirtschaftlichen Erfolg. Insbesondere wird kein Erfolg im Hinblick auf Umsätze, Anfragen, Conversion-Raten, Suchmaschinen-Rankings oder sonstige geschäftliche Ergebnisse garantiert.',
      'Ebenfalls wird keine dauerhafte Verfügbarkeit von Leistungen und Diensten Dritter geschuldet, sofern dies nicht ausdrücklich vereinbart wurde.',
    ],
  },
  {
    title: '3. Vertragsschluss',
    paragraphs: [
      'Ein Vertrag kommt durch Annahme eines Angebots, durch Auftragsbestätigung oder durch Projektbeginn auf Grundlage einer kundenseitigen Freigabe zustande.',
      'Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen eines geschlossenen Vertrags bedürfen mindestens der Textform.',
    ],
  },
  {
    title: '4. Mitwirkungspflichten des Kunden',
    paragraphs: [
      'Der Kunde stellt Hamburg Websites alle zur Durchführung des Projekts erforderlichen Inhalte, Informationen, Zugangsdaten, Ansprechpartner und Freigaben rechtzeitig zur Verfügung. Dazu zählen insbesondere Texte, Bilder, Logos, rechtliche Pflichtangaben und technische Zugänge.',
      'Der Kunde versichert, dass die von ihm bereitgestellten Inhalte und Materialien frei von Rechten Dritter sind und rechtmäßig verwendet werden dürfen. Die Prüfung der materiellen und rechtlichen Zulässigkeit dieser Inhalte ist nicht geschuldet.',
      'Kommt der Kunde seinen Mitwirkungspflichten nicht rechtzeitig nach, verlängern sich vereinbarte Fristen und Termine angemessen. Ein dadurch entstehender Mehraufwand kann gesondert vergütet werden.',
    ],
  },
  {
    title: '5. Vergütung und Zahlungsbedingungen',
    paragraphs: [
      'Es gelten die im jeweiligen Angebot ausgewiesenen Preise. Alle Preise verstehen sich zuzüglich gesetzlicher Umsatzsteuer, soweit diese anfällt.',
      'Hamburg Websites ist berechtigt, Vorauszahlungen oder eine Abschlagsstruktur zu vereinbaren. Sofern nicht anders geregelt, kann die Vergütung in Teilbeträgen fällig werden, beispielsweise 50 % bei Projektstart und 50 % vor Go-live oder nach Fertigstellung der vereinbarten Projektversion.',
      'Rechnungen sind, sofern nicht abweichend vereinbart, innerhalb von 7 Kalendertagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig.',
      'Laufende Leistungen (z. B. Hosting-, Wartungs- oder Betreuungsleistungen) sind monatlich im Voraus zu bezahlen.',
      'Leistungen, die nicht vom vereinbarten Leistungsumfang umfasst sind, insbesondere Zusatz- oder Änderungsleistungen, werden gesondert nach Aufwand oder auf Basis eines ergänzenden Angebots berechnet.',
    ],
  },
  {
    title: '6. Korrekturschleifen und Änderungswünsche',
    paragraphs: [
      'Die Anzahl enthaltener Korrekturschleifen richtet sich nach dem gebuchten Paket oder dem individuellen Angebot.',
      'Eine Korrekturschleife umfasst gebündelte, angemessene Anpassungen innerhalb des ursprünglich vereinbarten Leistungsumfangs.',
      'Nicht umfasst sind insbesondere konzeptionelle Neuausrichtungen, zusätzliche Unterseiten, neue Funktionen, erhebliche inhaltliche Erweiterungen oder umfangreiche Nachträge nach bereits erfolgtem Feedback.',
      'Solche zusätzlichen Änderungswünsche gelten als Mehrleistung und werden gesondert vergütet.',
    ],
  },
  {
    title: '7. Prüfungsphase, Abnahme, Freigabe',
    paragraphs: [
      'Nach Fertigstellung der vereinbarten Leistungen erhält der Kunde eine Prüfungsphase zur Kontrolle und Freigabe der Arbeitsergebnisse.',
      'Sofern vertraglich vereinbart, beträgt die Prüfungsphase 7 Kalendertage ab Bereitstellung der Leistungen zur Abnahme.',
      'Der Kunde hat in dieser Zeit wesentliche Mängel sowie vom Leistungsumfang gedeckte Änderungswünsche mitzuteilen.',
      'Die Abnahme kann durch ausdrückliche Freigabe, durch produktive Nutzung der Leistung oder durch ausbleibende Rückmeldung nach angemessener Aufforderung zur Abnahme erfolgen, sofern keine wesentlichen Mängel angezeigt wurden.',
      'Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.',
    ],
  },
  {
    title: '8. Termine und Fristen',
    paragraphs: [
      'Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als verbindlich vereinbart wurden.',
      'Die Einhaltung von Zeitplänen setzt die rechtzeitige Erfüllung der Mitwirkungspflichten des Kunden voraus.',
      'Ereignisse höherer Gewalt sowie nicht von Hamburg Websites zu vertretende Verzögerungen, insbesondere durch Drittanbieter oder externe technische Störungen, verlängern Fristen und Termine angemessen.',
    ],
  },
  {
    title: '9. Nutzungsrechte',
    paragraphs: [
      'Hamburg Websites räumt dem Kunden an den erstellten Arbeitsergebnissen ein einfaches, nicht übertragbares Nutzungsrecht für den vertraglich vorgesehenen Zweck ein, sofern nichts Abweichendes vereinbart wurde.',
      'Die Einräumung der Nutzungsrechte steht unter der aufschiebenden Bedingung der vollständigen Zahlung der vereinbarten Vergütung.',
      'Die Herausgabe editierbarer Quell-, Roh- oder offenen Projektdateien ist nur geschuldet, wenn dies ausdrücklich vereinbart wurde.',
      'Für eingesetzte Bestandteile von Drittanbietern (z. B. Themes, Plugins, Stockmedien, Schriftarten, APIs) gelten ergänzend die jeweiligen Lizenz- und Nutzungsbedingungen der Drittanbieter.',
    ],
  },
  {
    title: '10. Hosting, Domains, E-Mail, Drittanbieter',
    paragraphs: [
      'Hamburg Websites ist nicht verpflichtet, eine eigene Hosting-Infrastruktur zu betreiben, sofern dies nicht ausdrücklich vereinbart wurde.',
      'Zur Leistungserbringung dürfen geeignete Drittanbieter und externe Dienste eingesetzt werden, insbesondere in den Bereichen Hosting, DNS, Formulare, E-Mail, CDN, Analytics, Medienauslieferung, Captcha, CMS oder vergleichbare technische Infrastruktur.',
      'Für Verfügbarkeit, Preisänderungen oder Leistungsänderungen von Drittanbietern, die außerhalb des Einflussbereichs von Hamburg Websites liegen, wird keine Haftung übernommen.',
      'Kosten für Domains, Hosting, E-Mail-Dienste, Plugins, APIs, Lizenzen oder sonstige Drittleistungen trägt grundsätzlich der Kunde, sofern nichts Abweichendes vereinbart ist.',
      'Der Kunde ist für den sicheren Umgang mit seinen Zugangsdaten und die Verhinderung unbefugter Zugriffe in seinem Verantwortungsbereich selbst verantwortlich.',
    ],
  },
  {
    title: '11. Websitepflege und laufende Betreuung',
    paragraphs: [
      'Leistungen zur laufenden Pflege, Wartung oder Betreuung werden nur geschuldet, wenn sie ausdrücklich gebucht oder vertraglich vereinbart wurden.',
      'Kleinere Änderungen können – je nach Vereinbarung – beispielsweise Textanpassungen, Bildaustausch sowie Aktualisierungen von Öffnungszeiten oder Kontaktdaten umfassen.',
      'Nicht umfasst sind insbesondere neue Unterseiten, Redesigns, grundlegende strukturelle Änderungen, neue Funktionen oder komplexe Integrationen.',
      'Nicht enthaltene Leistungen werden gesondert vergütet.',
      'Laufende Wartungs-, Betreuungs- oder Hostingpakete sind, sofern nichts anderes vereinbart wurde, mit einer Frist von 30 Tagen zum Monatsende kündbar.',
    ],
  },
  {
    title: '12. Mängel',
    paragraphs: [
      'Es gelten die gesetzlichen Mängelrechte unter Berücksichtigung der besonderen Rahmenbedingungen von B2B-Verträgen.',
      'Hamburg Websites ist im Mängelfall zunächst Gelegenheit zur Nacherfüllung innerhalb angemessener Frist zu geben.',
      'Ein Mangel liegt insbesondere nicht vor bei Änderungen durch den Kunden oder Dritte, bei fehlerhaften Kundenvorgaben, bei Ausfällen externer Dienste, bei späteren Änderungen von Browsern oder Plattformen sowie bei unterlassener Wartung außerhalb eines vereinbarten Supportvertrags.',
    ],
  },
  {
    title: '13. Haftung',
    paragraphs: [
      'Hamburg Websites haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.',
      'Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.',
      'Im Übrigen ist die Haftung – soweit gesetzlich zulässig – ausgeschlossen, insbesondere für entgangenen Gewinn, mittelbare Schäden, Folgeschäden, Datenverluste, ausgebliebene Rankings oder nicht erreichte Umsatz- bzw. Vertriebserwartungen sowie für die Verfügbarkeit von Drittanbieterleistungen.',
      'Für regelmäßige Datensicherungen ist der Kunde selbst verantwortlich, sofern Backup- oder Supportleistungen nicht ausdrücklich vereinbart wurden.',
    ],
  },
  {
    title: '14. Referenznennung',
    paragraphs: [
      'Hamburg Websites ist berechtigt, abgeschlossene Projekte unter Nennung des Kundennamens und mit Verlinkung als Referenz zu verwenden, sofern der Kunde dem nicht vorab widerspricht.',
      'Die Nutzung von Marken, Logos oder sonstigen Kennzeichen erfolgt nur im vereinbarten oder zur Referenzdarstellung erforderlichen Umfang.',
    ],
  },
  {
    title: '15. Vertraulichkeit',
    paragraphs: [
      'Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen streng vertraulich zu behandeln und nicht unbefugt an Dritte weiterzugeben.',
      'Diese Verpflichtung gilt auch über die Beendigung des Vertragsverhältnisses hinaus fort.',
    ],
  },
  {
    title: '16. Rechtswahl und Gerichtsstand',
    paragraphs: [
      'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).',
      'Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit dem Vertragsverhältnis der Sitz von Hamburg Websites.',
    ],
  },
  {
    title: '17. Verbraucherstreitbeilegung',
    paragraphs: [
      'Hamburg Websites ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, soweit keine gesetzliche Verpflichtung besteht.',
    ],
  },
];

export default function AGBPage() {
  return (
    <>
      <SEOHead
        title="AGB – Hamburg Websites"
        path="/agb"
        description="Allgemeine Geschäftsbedingungen von Hamburg Websites für Webdesign, Webentwicklung und digitale Dienstleistungen."
      />
      <LegalLayout
        headingId="agb-heading"
        title="Allgemeine Geschäftsbedingungen"
        intro="Diese Allgemeinen Geschäftsbedingungen gelten für die Leistungen von Hamburg Websites im Bereich Webdesign, Webentwicklung und projektbezogene digitale Dienstleistungen."
        lead="Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB."
        headerAddon={
          <section
            className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-5"
            aria-labelledby="anbieter-heading"
          >
            <h2 id="anbieter-heading">Anbieter</h2>
            <p className="mt-3 text-sm leading-7">
              Andrii Oleksiienko
              <br />
              Stadtbahnstraße 36
              <br />
              22393 Hamburg
              <br />
              E-Mail:{' '}
              <a href="mailto:info@hamburgwebsites.de">info@hamburgwebsites.de</a>
              <br />
              Telefon: <a href="tel:+4916096297897">+49 160 96297897</a>
            </p>
          </section>
        }
        navLinks={[
          { href: '/impressum', label: 'Impressum' },
          { href: '/datenschutz', label: 'Datenschutz' },
          { href: '/kontakt', label: 'Kontakt' },
        ]}
      >
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </LegalLayout>
    </>
  );
}
