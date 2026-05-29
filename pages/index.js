import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Hero from '../components/Hero';
import CountUp from '../components/ui/CountUp';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import AuroraBackground from '../components/ui/AuroraBackground';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import MagneticButton from '../components/ui/MagneticButton';
import AnimatedText from '../components/ui/AnimatedText';
import TiltCard from '../components/ui/TiltCard';
import Marquee from '../components/ui/Marquee';
import { localBusinessSchema, organizationSchema, serviceSchema, websiteSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website und Relaunch', priceFromEur: 650 },
  { name: 'Local SEO und Sichtbarkeit', priceFromEur: 350 },
  { name: 'Automatisierung und Tools', priceFromEur: 900 }
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ─── Trust strip ───────────────────────────────────── */
function TrustStrip() {
  const points = ['Kostenlose Demo vorab', 'Direkter Kontakt', '100 % Ihr Eigentum'];
  return (
    <section
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      aria-label="Vertrauen"
    >
      <div className="section-container py-8">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="max-w-xl text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Neu in Hamburg gestartet — statt erfundener Referenzen zeigen wir{' '}
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>echte, prüfbare Demo-Websites</span>.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Manifest band ─────────────────────────────────── */
function ManifestBand() {
  return (
    <section className="band-violet" aria-label="Anspruch">
      <AuroraBackground grid grain={false} />
      <div className="section-container relative z-[2] py-20 text-center sm:py-28">
        <AnimatedText
          as="h2"
          text="Struktur. Klarheit. Anfragen."
          className="display-xl mx-auto"
          style={{ textAlign: 'center' }}
        />
        <Reveal delay={0.2}>
          <p className="lead mx-auto mt-6 max-w-2xl">
            Kein Template von der Stange. Jede Seite wird auf ein Ziel hin gebaut: aus Besuchern Anfragen machen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Marktdaten ────────────────────────────────────── */
function ArcMeter({ percent, size = 72, gradId = 'arc-grad' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const sw = 5;
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const animatedOffset = inView || reduce ? circ * (1 - percent / 100) : circ;

  return (
    <svg ref={ref} width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={sw} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={animatedOffset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: reduce ? 'none' : 'stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1) 0.2s' }}
      />
    </svg>
  );
}

function FillBar({ percent, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} style={{ height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', marginTop: 14 }} aria-hidden="true">
      <div style={{
        height: '100%',
        borderRadius: 3,
        background: 'linear-gradient(90deg, #7C3AED, #22D3EE)',
        width: (inView || reduce) ? `${percent}%` : '0%',
        transition: reduce ? 'none' : `width 1.4s cubic-bezier(0.16,1,0.3,1) ${delay}s`
      }} />
    </div>
  );
}

function CompareBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const bars = [
    { label: 'Mit Website', pct: 100, color: 'linear-gradient(90deg,#7C3AED,#22D3EE)' },
    { label: 'Ohne Website', pct: 36, color: 'rgba(255,255,255,0.12)' }
  ];
  return (
    <div ref={ref} className="mt-4 space-y-2" aria-hidden="true">
      {bars.map((b) => (
        <div key={b.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
            <span style={{ fontSize: 9, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{b.label}</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 4,
              background: b.color,
              width: (inView || reduce) ? `${b.pct}%` : '0%',
              transition: reduce ? 'none' : 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s'
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DataBand() {
  return (
    <section
      className="section-spacing"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      aria-labelledby="data-heading"
    >
      <div className="section-container">
        <Reveal className="mb-12 max-w-xl">
          <p className="section-label">Warum eine Website zählt</p>
          <h2 id="data-heading" className="display-lg">Zahlen, die für sich sprechen</h2>
          <p className="mt-4 text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Unternehmen mit professioneller Online-Präsenz gewinnen messbar mehr Anfragen –
            das zeigen unabhängige Studien aus Deutschland und dem deutschsprachigen Raum.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 — 2.8× multiplier */}
          <RevealItem as="article">
            <TiltCard max={4} className="glass-card h-full p-6">
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <p className="font-display gradient-text" style={{ fontSize: 'clamp(2.4rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    <CountUp value={2.8} decimals={1} suffix="×" duration={1.8} />
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--cyan-2)' }}>Umsatzwachstum</p>
                </div>
                <span
                  style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan-2)' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 10l3-3 3 3 6-6" /><path d="M14 4h-3M14 4v3" />
                  </svg>
                </span>
              </div>
              <CompareBar />
              <p className="mt-4 text-xs leading-5" style={{ color: 'var(--muted)' }}>
                Unternehmen mit Website wachsen 2,8× wahrscheinlicher als solche ohne Online-Präsenz.
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'var(--faint)' }}>Google / Deloitte</p>
            </TiltCard>
          </RevealItem>

          {/* Card 2 — 81% search online */}
          <RevealItem as="article">
            <TiltCard max={4} className="glass-card h-full p-6">
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <p className="font-display gradient-text" style={{ fontSize: 'clamp(2.4rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    <CountUp value={81} suffix=" %" duration={1.6} />
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--cyan-2)' }}>Suchen online</p>
                </div>
                <ArcMeter percent={81} gradId="arc-grad-81" />
              </div>
              <FillBar percent={81} delay={0.1} />
              <p className="mt-4 text-xs leading-5" style={{ color: 'var(--muted)' }}>
                4 von 5 Kunden recherchieren online, bevor sie einen lokalen Anbieter kontaktieren.
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'var(--faint)' }}>Google Consumer Insights</p>
            </TiltCard>
          </RevealItem>

          {/* Card 3 — 36% ohne Website */}
          <RevealItem as="article">
            <TiltCard max={4} className="glass-card h-full p-6">
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <p className="font-display gradient-text" style={{ fontSize: 'clamp(2.4rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    <CountUp value={36} suffix=" %" duration={1.4} />
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--cyan-2)' }}>Noch ohne Website</p>
                </div>
                <ArcMeter percent={36} gradId="arc-grad-36" />
              </div>
              <FillBar percent={36} delay={0.05} />
              <p className="mt-4 text-xs leading-5" style={{ color: 'var(--muted)' }}>
                Jeder dritte Kleinstbetrieb in Deutschland hat keine eigene Webpräsenz – das ist Ihr Wettbewerbsvorteil.
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'var(--faint)' }}>Bitkom / Statista</p>
            </TiltCard>
          </RevealItem>

          {/* Card 4 — 40% faster growth */}
          <RevealItem as="article">
            <TiltCard max={4} className="glass-card h-full p-6">
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <p className="font-display gradient-text" style={{ fontSize: 'clamp(2.4rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    <CountUp value={40} prefix="+" suffix=" %" duration={1.5} />
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--cyan-2)' }}>Schnelleres Wachstum</p>
                </div>
                <span
                  style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: 'rgba(124,58,237,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-2)' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 13V3M4 7l4-4 4 4" />
                  </svg>
                </span>
              </div>
              <FillBar percent={40} delay={0.15} />
              <p className="mt-4 text-xs leading-5" style={{ color: 'var(--muted)' }}>
                KMU mit professioneller Online-Präsenz verzeichnen im Schnitt 40 % schnelleres Umsatzwachstum.
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'var(--faint)' }}>Deloitte Connected SMB</p>
            </TiltCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

/* ─── Warum Hamburg Websites ────────────────────────── */
const whyPoints = [
  { title: 'Direkter Ansprechpartner', text: 'Sie sprechen mit der Person, die Ihre Website baut – ohne Sachbearbeiter, ohne Ticketsystem.' },
  { title: 'Demo vor der Entscheidung', text: 'Sie sehen einen echten Entwurf Ihrer Website, bevor Sie sich entscheiden oder etwas bezahlen.' },
  { title: '100 % Ihr Eigentum', text: 'Code, Daten und alle Zugänge gehören Ihnen – keine Abhängigkeit, kein Lock-in.' },
  { title: 'Kein Agentur-Aufschlag', text: 'Faire Preise und eine ehrliche Einschätzung. Wenn ein einfacherer Weg reicht, sage ich das.' }
];

function WhyMe() {
  return (
    <section className="section-spacing" style={{ background: 'var(--surface)' }} aria-labelledby="why-heading">
      <div className="section-container">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Warum Hamburg Websites</p>
          <AnimatedText as="h2" text="Klare Bedingungen statt großer Versprechen" className="display-lg" id="why-heading" />
          <Reveal delay={0.15}>
            <p className="mt-5" style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
              Direkt, transparent und ohne Risiko beim Einstieg – darauf können Sie sich verlassen.
            </p>
          </Reveal>
        </div>
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {whyPoints.map((it) => (
            <RevealItem key={it.title}>
              <TiltCard as="article" max={5} className="glass-card h-full p-7">
                <span className="feature-icon" style={{ width: 44, height: 44, color: 'var(--cyan-2)' }}>
                  <CheckIcon />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold" style={{ color: 'var(--text)' }}>{it.title}</h3>
                <p className="mt-2 text-sm leading-7" style={{ color: 'var(--muted)' }}>{it.text}</p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.2} className="mt-10">
          <Link href="/ueber-uns" className="tile-link">
            Mehr über meine Arbeitsweise <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Process preview ───────────────────────────────── */
const processSteps = [
  { num: '01', title: 'Anfrage', text: 'Sie senden uns die wichtigsten Infos zu Ihrem Unternehmen und Ziel.' },
  { num: '02', title: 'Demo-Website', text: 'Wir zeigen Ihnen kostenlos einen ersten Entwurf mit Struktur und Stil.' },
  { num: '03', title: 'Abstimmung', text: 'Gemeinsam klären wir Inhalte, Ziele und Umfang des Projekts.' },
  { num: '04', title: 'Umsetzung', text: 'Technisch saubere Umsetzung – nur das, was wirklich nötig ist.' },
  { num: '05', title: 'Livegang', text: 'Prüfung, Freigabe und Veröffentlichung. Danach sind Sie Eigentümer.' }
];

function ProcessPreview() {
  return (
    <section className="process-band section-spacing" aria-labelledby="process-heading">
      <AuroraBackground grid grain={false} />
      <div className="section-container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Ablauf</p>
            <AnimatedText as="h2" text="So läuft die Zusammenarbeit ab" className="display-lg" id="process-heading" />
          </div>
          <Reveal delay={0.1}>
            <Link href="/ablauf" className="secondary-btn shrink-0">
              Ablauf im Detail <ArrowIcon />
            </Link>
          </Reveal>
        </div>

        <RevealGroup as="ol" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <RevealItem as="li" key={step.num} className="step-card">
              <span className="step-num">{step.num}</span>
              <h3 className="mt-4 font-display text-base font-bold" style={{ color: 'var(--text)' }}>{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{step.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-9 text-sm" style={{ color: 'var(--faint)' }}>
          Eine erste Demo-Website erhalten Sie in der Regel innerhalb weniger Tage. Kostenlos und unverbindlich.
        </p>
      </div>
    </section>
  );
}

/* ─── Pricing preview ───────────────────────────────── */
const pricingPreview = [
  { title: 'Website-Visitenkarte', subtitle: 'Einstieg', price: 'ab 400 €', points: ['1 strukturierte Seite', 'Kontakt-CTA', 'Responsive Design', 'SEO-Basics'] },
  { title: 'Onepager', subtitle: 'Beliebt', price: 'ab 650 €', featured: true, points: ['1 ausgebaute Seite', 'Leistungen & Story', 'Conversion-fokussiert', 'SEO-optimiert'] },
  { title: 'Mehrseitige Website', subtitle: 'Mehrseitig', price: 'ab 1.000 €', points: ['5–8 Seiten', 'Individuelles Design', 'SEO und Performance', '2 Korrekturschleifen'] },
  { title: 'Mit Adminbereich', subtitle: 'Individuell', price: 'ab 1.500 €', points: ['Eigene Inhaltspflege', 'CMS-Einrichtung', 'Strukturierte Übergabe', 'Betreuung optional'] }
];

function PricingPreview() {
  return (
    <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-label">Preise</p>
          <AnimatedText as="h2" text="Klare Preise. Kein Kleingedrucktes." className="display-lg" id="pricing-preview-heading" />
        </div>
        <Reveal delay={0.1}>
          <Link href="/preise" className="secondary-btn shrink-0">
            Alle Pakete ansehen <ArrowIcon />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricingPreview.map((it) => (
          <RevealItem as="article" key={it.title} className={`pricing-preview-card ${it.featured ? 'featured' : ''}`}>
            {it.featured && <p className="pricing-badge">Am beliebtesten</p>}
            <div className={it.featured ? 'mt-8' : ''}>
              <p className="font-display text-sm font-bold" style={{ color: 'var(--text)' }}>{it.title}</p>
              <p className="mt-1 text-xs font-medium" style={{ color: 'var(--muted)' }}>{it.subtitle}</p>
              <p className="mt-5 font-display gradient-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                {it.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6" style={{ color: 'var(--text-soft)' }}>
                {it.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full" style={{ background: 'rgba(34,211,238,0.14)', color: 'var(--cyan-2)' }}>
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/preise" className="tile-link mt-7">
                Details ansehen <ArrowIcon />
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="mx-auto mt-9 max-w-3xl text-center text-sm leading-7" style={{ color: 'var(--faint)' }}>
        Alle Preise sind Richtwerte. Jedes Projekt ist individuell. Nach einem kurzen Kennenlernen erhalten Sie ein passendes Angebot.
      </p>
    </section>
  );
}

/* ─── FAQ preview ───────────────────────────────────── */
const homepageFaqPreview = [
  { question: 'Was passiert nach meiner Anfrage?', answer: 'Sie erhalten eine kurze Rückmeldung, wir klären Ziel, Umfang und vorhandene Inhalte und entscheiden dann, ob eine Demo oder ein Audit der beste nächste Schritt ist.' },
  { question: 'Arbeiten Sie nur für Unternehmen in Hamburg?', answer: 'Der Standort ist Hamburg. Projekte können aber genauso für Unternehmen in Deutschland und DACH umgesetzt werden.' },
  { question: 'Kann später Automatisierung dazukommen?', answer: 'Ja. Website, SEO, Automatisierung und Tools sind getrennte Leistungen. Wenn es sinnvoll ist, können sie später sauber anschließen.' }
];

function FaqPreview() {
  return (
    <section className="section-spacing" style={{ background: 'var(--surface)' }} aria-labelledby="faq-preview-heading">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">FAQ</p>
            <AnimatedText as="h2" text="Fragen vor dem Start" className="display-lg" id="faq-preview-heading" />
            <Reveal delay={0.15}>
              <p className="mt-5" style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
                Der Einstieg bleibt bewusst einfach: Ziel klären, Richtung zeigen, dann sauber entscheiden.
              </p>
              <Link href="/faq" className="tile-link mt-6">
                Alle Fragen ansehen <ArrowIcon />
              </Link>
            </Reveal>
          </div>
          <RevealGroup style={{ borderTop: '1px solid var(--line)' }}>
            {homepageFaqPreview.map((it) => (
              <RevealItem as="article" key={it.question} className="py-6" style={{ borderBottom: '1px solid var(--line)' }}>
                <h3 className="font-display text-base font-bold" style={{ color: 'var(--text)' }}>{it.question}</h3>
                <p className="mt-2 text-sm leading-7" style={{ color: 'var(--muted)' }}>{it.answer}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────── */
function FinalCta() {
  return (
    <section className="final-cta-band" aria-labelledby="final-cta-heading">
      <div className="section-container">
        <div className="final-cta">
          <Reveal>
            <span className="eyebrow-pill mb-6">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)' }} aria-hidden="true" />
              Kostenloser Einstieg
            </span>
            <h2 id="final-cta-heading" className="max-w-xl" style={{ color: 'var(--text)', fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-5 max-w-lg" style={{ color: 'var(--text-soft)', fontSize: 'var(--text-lead)', lineHeight: 1.65 }}>
              Erzählen Sie kurz von Ihrem Projekt. Ich melde mich persönlich zur kostenlosen Demo oder zum
              Digital-Audit – in der Regel innerhalb von 24 Stunden.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton href="/kontakt" className="primary-btn">
                Kostenlose Demo anfragen <ArrowIcon />
              </MagneticButton>
              <MagneticButton href="/kontakt" className="secondary-btn" strength={10}>
                Digital-Audit starten
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.12} direction="left" className="final-cta-proof">
            <article><strong>Direkter Kontakt</strong><span>Sie sprechen direkt mit mir, ohne Umwege über Sachbearbeiter.</span></article>
            <article><strong>Schnelle Rückmeldung</strong><span>Persönliche Antwort, keine automatische Warteschleife.</span></article>
            <article><strong>Hamburg und DACH</strong><span>Lokal erreichbar, deutschlandweit umsetzbar.</span></article>
            <article><strong>100 % Ihr Eigentum</strong><span>Alle Zugänge, Daten und Code gehören Ihnen.</span></article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Websites und digitale Lösungen aus Hamburg"
        description="Hamburg Websites entwickelt klare Websites, lokale Sichtbarkeit, Automatisierungen und praktische digitale Tools für kleine Unternehmen."
        path="/"
        schema={[websiteSchema(), organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Portfolio />
        <ManifestBand />
        <DataBand />
        <WhyMe />
        <Testimonials />
        <ProcessPreview />
        <PricingPreview />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
