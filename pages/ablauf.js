import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const overviewSegments = [
  { label: 'Anfrage', duration: 'Tag 1', tone: 'bg-[rgba(45,91,255,0.12)] text-[rgba(21,21,21,0.88)]' },
  { label: 'Demo', duration: '2–4 Tage', tone: 'bg-[rgba(45,91,255,0.2)] text-[rgba(21,21,21,0.9)]' },
  { label: 'Abstimmung', duration: '1–2 Tage', tone: 'bg-[rgba(45,91,255,0.28)] text-[rgba(21,21,21,0.9)]' },
  { label: 'Umsetzung', duration: '5–10 Tage', tone: 'bg-[rgba(45,91,255,0.36)] text-[rgba(21,21,21,0.92)]' },
  { label: 'Livegang', duration: 'Finale Woche', tone: 'bg-[rgba(45,91,255,0.46)] text-[rgba(21,21,21,0.95)]' }
];

const processSteps = [
  {
    number: '01',
    role: 'Sie',
    roleTone: 'bg-[rgba(45,91,255,0.1)] text-[rgba(28,54,141,0.95)] border-[rgba(45,91,255,0.18)]',
    duration: 'ca. 10 Minuten',
    title: 'Kurze Anfrage mit Ihrem Zielbild',
    text: 'Sie schicken uns die wichtigsten Informationen zu Ihrem Unternehmen, Ihrer bisherigen Website und dem gewünschten Ergebnis. Kein langes Briefing, kein unnötiger Aufwand.',
    bullets: ['Branche und Standort', 'Was soll die neue Website leisten?', 'Falls vorhanden: Link zur aktuellen Website']
  },
  {
    number: '02',
    role: 'Hamburg Websites',
    roleTone: 'bg-[rgba(95,91,83,0.12)] text-[rgba(61,57,50,0.9)] border-[rgba(95,91,83,0.2)]',
    duration: '2 bis 4 Werktage',
    title: 'Kostenlose Demo als belastbare Entscheidungsgrundlage',
    text: 'Wir erstellen einen ersten Design- und Strukturvorschlag, der bereits zeigt, wie Ihre Website wirken wird. So sehen Sie früh, ob Richtung, Tonalität und Positionierung passen.',
    bullets: ['Individuelle Startseite als Vorschau', 'Erste Copy-Richtung und klare Nutzerführung', 'Keine Kosten bis zur Freigabe']
  },
  {
    number: '03',
    role: 'Gemeinsam',
    roleTone: 'bg-[rgba(168,142,79,0.14)] text-[rgba(99,80,40,0.92)] border-[rgba(168,142,79,0.24)]',
    duration: '1 bis 2 Feedbackrunden',
    title: 'Präzise Abstimmung statt endloser Schleifen',
    text: 'Wir justieren Inhalte, Hierarchie und visuelle Details gemeinsam. Der Fokus liegt auf klaren Entscheidungen, damit das Projekt zügig und in hoher Qualität vorangeht.',
    bullets: ['Feinschliff an Struktur und Botschaften', 'Abgleich von Bildwelt und Stil', 'Verbindliche Freigabe für die Umsetzung']
  },
  {
    number: '04',
    role: 'Hamburg Websites',
    roleTone: 'bg-[rgba(95,91,83,0.12)] text-[rgba(61,57,50,0.9)] border-[rgba(95,91,83,0.2)]',
    duration: '5 bis 10 Werktage',
    title: 'Technische Umsetzung mit Fokus auf Performance',
    text: 'Nach der Freigabe entwickeln wir die vollständige Website sauber, schnell und mobil optimiert. Inhalte, Interaktionen und SEO-Basis werden strukturiert integriert.',
    bullets: ['Responsive Umsetzung für alle Endgeräte', 'Saubere Ladezeiten und technische Basis', 'Verlässliche Qualitätssicherung vor der Übergabe']
  },
  {
    number: '05',
    role: 'Sie + Hamburg Websites',
    roleTone: 'bg-[rgba(45,91,255,0.1)] text-[rgba(28,54,141,0.95)] border-[rgba(45,91,255,0.18)]',
    duration: 'Go-Live nach Freigabe',
    title: 'Finale Prüfung und souveräner Livegang',
    text: 'Sie prüfen die fertige Website in Ruhe. Nach finaler Freigabe schalten wir live und begleiten den sauberen Übergang, damit Ihr neuer Auftritt direkt professionell wirkt.',
    bullets: ['Abschließender Qualitätscheck', 'Domain- und Launch-Begleitung', 'Klare nächste Schritte nach dem Livegang']
  }
];

export default function AblaufPage() {
  return (
    <>
      <SEOHead title="Ablauf | Hamburg Websites" description="Der Ablauf Ihres Website-Projekts: klar strukturiert, transparent geplant und hochwertig umgesetzt – von der Anfrage bis zum Livegang." path="/ablauf" />
      <Header />
      <main>
        <section className="dark-section relative overflow-hidden pb-[88px] pt-[84px]" aria-labelledby="ablauf-hero-heading">
          <div className="section-container relative z-10 grid gap-14 lg:grid-cols-[minmax(0,620px)_1fr] lg:items-end">
            <div>
              <p className="section-label mb-6 text-[rgba(129,159,255,0.88)]">Ablauf · Transparent & effizient</p>
              <h1 id="ablauf-hero-heading" className="display-title max-w-[620px] text-[clamp(3.4rem,7vw,4.5rem)] leading-[0.98] text-[var(--text-on-dark)]">
                Ihr Projektweg –
                <br />
                klar geführt von
                <br />
                Idee bis Livegang
              </h1>
              <p className="mt-8 max-w-[620px] text-[20px] leading-[1.55] text-[rgba(255,255,255,0.82)]">
                Jede Phase ist auf nachvollziehbare Entscheidungen ausgelegt: Sie wissen jederzeit, was als Nächstes passiert, wie lange es dauert und welches Ergebnis Sie erwarten dürfen.
              </p>
              <div className="mt-9 inline-flex h-10 items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.04)] px-4 text-[15px] font-semibold text-[rgba(255,255,255,0.88)]">
                <span className="h-2 w-2 rounded-full bg-[rgba(148,176,126,0.9)]" />
                Klarer Ablauf in fünf definierten Schritten
              </div>
              <p className="mt-4 text-[15px] text-[rgba(255,255,255,0.65)]">Vom Erstkontakt bis zur Live-Schaltung in einem belastbaren, kompakten Projektprozess.</p>
            </div>

            <div className="hidden h-full min-h-[260px] items-end justify-end lg:flex">
              <div className="w-full max-w-[470px] rounded-[22px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.02)] p-7">
                <p className="text-[12px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.58)]">Prozess-Rhythmus</p>
                <div className="mt-6 grid gap-6">
                  {[22, 38, 52, 70, 88].map((width, idx) => (
                    <div key={width} className="flex items-center gap-4">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] text-[11px] font-semibold text-[rgba(255,255,255,0.82)]">
                        {idx + 1}
                      </span>
                      <div className="h-[2px] rounded-full bg-[rgba(157,180,255,0.45)]" style={{ width: `${width}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing-sm pb-0 pt-[88px]" aria-labelledby="overview-heading">
          <div className="section-container">
            <div className="card rounded-[28px] bg-[var(--bg-card)] p-7 md:p-[28px]">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-label mb-3">Zeitplan auf einen Blick</p>
                  <h2 id="overview-heading" className="display-title text-[clamp(2rem,4.3vw,3.1rem)] leading-[1.04]">Kompakter Ablauf mit klaren Meilensteinen</h2>
                </div>
                <p className="max-w-[320px] text-[15px] leading-[1.6] text-[var(--text-muted)]">Transparente Taktung vom Erstkontakt bis zum finalen Go-Live.</p>
              </div>

              <div className="overflow-hidden rounded-[18px] border border-[rgba(21,21,21,0.08)]">
                <ol className="grid divide-x divide-[rgba(21,21,21,0.08)] md:grid-cols-5">
                  {overviewSegments.map((segment) => (
                    <li key={segment.label} className={`${segment.tone} px-4 py-4 md:px-5`}>
                      <p className="text-[15px] font-semibold leading-[1.3]">{segment.label}</p>
                      <p className="mt-1 text-[13px] font-medium opacity-80">{segment.duration}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing pt-[88px]" aria-labelledby="five-steps-heading">
          <div className="section-container">
            <div className="section-intro mb-14 max-w-[760px]">
              <p className="section-label">Projektprozess</p>
              <h2 id="five-steps-heading" className="display-title text-[clamp(2.2rem,4.4vw,3.25rem)] leading-[1.04]">Ihr Projekt in fünf klaren Schritten</h2>
              <p className="mt-4 text-[18px] leading-[1.65] text-[var(--text-secondary)]">Jeder Schritt hat eine eindeutige Verantwortung, ein definiertes Ziel und einen konkreten Output.</p>
            </div>

            <div className="relative grid gap-9 md:grid-cols-[116px_minmax(0,920px)] md:gap-x-7">
              <div className="pointer-events-none absolute bottom-12 left-[57px] top-6 hidden w-[2px] bg-[rgba(74,94,145,0.28)] md:block" />
              {processSteps.map((step) => (
                <div key={step.number} className="contents">
                  <div className="relative z-10 hidden justify-center md:flex">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(21,21,21,0.13)] bg-[var(--bg-card)] text-[14px] font-semibold tracking-[0.02em] text-[rgba(31,35,45,0.9)]">
                      {step.number}
                    </span>
                  </div>
                  <article className="card p-8">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`inline-flex h-7 items-center rounded-full border px-3 text-[13px] font-semibold ${step.roleTone}`}>{step.role}</span>
                      <span className="inline-flex h-7 items-center rounded-full border border-[rgba(21,21,21,0.12)] bg-[rgba(255,255,255,0.52)] px-3 text-[13px] font-medium text-[var(--text-muted)]">{step.duration}</span>
                    </div>
                    <h3 className="mt-[18px] max-w-[760px] text-[23px] font-semibold leading-[1.24] text-[var(--text-primary)]">{step.title}</h3>
                    <p className="mt-4 max-w-[760px] text-[18px] leading-[1.65] text-[var(--text-secondary)]">{step.text}</p>
                    <ul className="mt-6 grid gap-3">
                      {step.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[16px] leading-[1.65] text-[var(--text-secondary)]">
                          <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[rgba(45,91,255,0.72)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0" aria-labelledby="ablauf-cta-heading">
          <div className="section-container">
            <div className="dark-section overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] px-10 pb-11 pt-10">
              <h2 id="ablauf-cta-heading" className="display-title max-w-[620px] text-[clamp(2.1rem,4.6vw,3rem)] leading-[1.05] text-[var(--text-on-dark)]">Bereit, den Ablauf für Ihr Projekt zu starten?</h2>
              <p className="mt-5 max-w-[620px] text-[20px] leading-[1.55] text-[var(--text-on-dark-secondary)]">Lassen Sie uns mit einer kurzen Anfrage starten. Sie erhalten eine klare Empfehlung und auf Wunsch eine kostenlose Demo-Vorschau.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/kontakt" className="primary-btn primary-btn--light h-14 px-7">Projekt anfragen</Link>
                <Link href="/preise" className="secondary-btn secondary-btn--dark h-14 px-7">Pakete ansehen</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
