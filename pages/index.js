import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import AuroraBackground from '../components/ui/AuroraBackground';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import MagneticButton from '../components/ui/MagneticButton';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

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
        <Reveal className="mb-14 max-w-2xl">
          <p className="section-label">Warum Hamburg Websites</p>
          <h2 id="why-heading" style={{ color: 'var(--text)' }}>
            Klare Bedingungen statt großer Versprechen
          </h2>
          <p className="mt-5" style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
            Direkt, transparent und ohne Risiko beim Einstieg – darauf können Sie sich verlassen.
          </p>
        </Reveal>
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {whyPoints.map((it) => (
            <RevealItem as="article" key={it.title} className="glass-card p-7">
              <span className="feature-icon" style={{ width: 44, height: 44, color: 'var(--cyan-2)' }}>
                <CheckIcon />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold" style={{ color: 'var(--text)' }}>{it.title}</h3>
              <p className="mt-2 text-sm leading-7" style={{ color: 'var(--muted)' }}>{it.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
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
          <Reveal>
            <p className="section-label">Ablauf</p>
            <h2 id="process-heading" style={{ color: 'var(--text)' }}>So läuft die Zusammenarbeit ab</h2>
          </Reveal>
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
  { title: 'Business Website', subtitle: 'Mehrseitig', price: 'ab 1.000 €', featured: true, points: ['5–8 Seiten', 'Individuelles Design', 'SEO und Performance', '2 Korrekturschleifen'] },
  { title: 'Mit Adminbereich', subtitle: 'Individuell', price: 'ab 1.500 €', points: ['Eigene Inhaltspflege', 'CMS-Einrichtung', 'Strukturierte Übergabe', 'Betreuung optional'] }
];

function PricingPreview() {
  return (
    <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="section-label">Preise</p>
          <h2 id="pricing-preview-heading" style={{ color: 'var(--text)' }}>Klare Preise. Kein Kleingedrucktes.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/preise" className="secondary-btn shrink-0">
            Alle Pakete ansehen <ArrowIcon />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="grid gap-5 md:grid-cols-3">
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
          <Reveal>
            <p className="section-label">FAQ</p>
            <h2 id="faq-preview-heading" style={{ color: 'var(--text)' }}>Fragen vor dem Start</h2>
            <p className="mt-5" style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
              Der Einstieg bleibt bewusst einfach: Ziel klären, Richtung zeigen, dann sauber entscheiden.
            </p>
            <Link href="/faq" className="tile-link mt-6">
              Alle Fragen ansehen <ArrowIcon />
            </Link>
          </Reveal>
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
              <MagneticButton href="/kontakt#audit" className="secondary-btn" strength={10}>
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
        schema={[organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Portfolio />
        <WhyMe />
        <ProcessPreview />
        <PricingPreview />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
