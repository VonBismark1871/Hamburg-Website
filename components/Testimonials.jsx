import Link from 'next/link';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';

function StarRow() {
  return (
    <span className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 12 12" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true" style={{ color: '#fbbf24' }}>
          <path d="M6 .5l1.39 2.82 3.11.45-2.25 2.19.53 3.09L6 7.57 3.22 9.05l.53-3.09L1.5 3.77l3.11-.45L6 .5z" />
        </svg>
      ))}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const outcomes = [
  {
    industry: 'Physiotherapie',
    label: 'Onepager',
    demo: '/referenzen/physio-demo',
    quote: 'Neue Patienten brauchen einen klaren ersten Eindruck: wer Sie sind, was Sie behandeln und wie sie einen Termin anfragen.',
    points: ['Leistungen auf einen Blick', 'Direkte Terminanfrage per Formular', 'Mobil-optimiert für unterwegs'],
    color: 'rgba(52,211,153,0.12)',
    borderColor: 'rgba(52,211,153,0.2)',
    accentColor: '#34D399'
  },
  {
    industry: 'Restaurant & Gastronomie',
    label: 'Mehrseitiger Onepager',
    demo: '/referenzen/restaurant-demo',
    quote: 'Gäste entscheiden in Sekunden. Eine klare Menüstruktur, Öffnungszeiten und ein Reservierungs-CTA machen den Unterschied.',
    points: ['Speisekarte mit Kategorien', 'Reservierungsanfrage ohne externe Plattform', 'Google-sichtbare Öffnungszeiten'],
    color: 'rgba(251,191,36,0.1)',
    borderColor: 'rgba(251,191,36,0.2)',
    accentColor: '#fbbf24'
  },
  {
    industry: 'Autoservice & Werkstatt',
    label: 'Mehrseitige Website',
    demo: '/referenzen/autoservice-demo',
    quote: 'Lokale Kunden suchen nach "Werkstatt Hamburg". Eine technisch saubere Website mit klarer Angebotsstruktur bringt sie direkt zu Ihnen.',
    points: ['Leistungsübersicht mit Direktanfrage', 'Inspektionsbuchung über die Website', 'Lokal auffindbar via SEO-Basis'],
    color: 'rgba(124,58,237,0.12)',
    borderColor: 'rgba(168,142,247,0.2)',
    accentColor: '#A855F7'
  }
];

export default function Testimonials() {
  return (
    <section
      className="section-spacing"
      style={{ background: 'var(--bg-2)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="section-label">Kundenstimmen</p>
            <h2 id="testimonials-heading" style={{ color: 'var(--text)' }}>
              Was Ihre Kunden<br />durch Sie gewinnen.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
              Wir sind neu gestartet und sammeln aktiv erste Bewertungen. Statt erfundener Zitate
              zeigen wir Ihnen konkret, was eine neue Website für typische Hamburger Unternehmen{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>tatsächlich bewirkt</span>.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <RevealItem as="article" key={item.industry} className="flex flex-col rounded-2xl p-6"
              style={{
                background: item.color,
                border: `1px solid ${item.borderColor}`,
                backdropFilter: 'blur(8px)'
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide"
                  style={{ background: 'rgba(8,7,13,0.5)', color: item.accentColor, border: `1px solid ${item.borderColor}` }}
                >
                  {item.label}
                </span>
                <StarRow />
              </div>

              <p
                className="mt-5 flex-1 text-sm leading-7"
                style={{ color: 'var(--text-soft)', fontStyle: 'italic' }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              <ul className="mt-5 space-y-2 text-xs" style={{ color: 'var(--muted)' }}>
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: item.accentColor }}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between" style={{ borderTop: '1px solid rgba(168,142,247,0.1)', paddingTop: '1rem' }}>
                <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>
                  {item.industry}
                </span>
                <Link
                  href={item.demo}
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: item.accentColor }}
                  aria-label={`Demo für ${item.industry} ansehen`}
                >
                  Demo ansehen <ArrowIcon />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10">
          <div
            className="flex flex-col items-center gap-5 rounded-2xl p-6 text-center sm:flex-row sm:justify-between sm:text-left"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(168,142,247,0.15)' }}
          >
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                Als einer der ersten Kunden zählt Ihre Rückmeldung besonders.
              </p>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                Nach dem Projektabschluss freuen wir uns über eine kurze Bewertung auf Google oder ProvenExpert.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://g.page/r/CTXEpU-dCplsEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn text-sm"
              >
                Google Bewertung
              </a>
              <Link href="/kontakt" className="primary-btn text-sm">
                Projekt starten
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
