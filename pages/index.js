import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website und Relaunch', priceFromEur: 650 },
  { name: 'Local SEO und Sichtbarkeit', priceFromEur: 350 },
  { name: 'Automatisierung und Tools', priceFromEur: 900 }
];

/* ─── Trust strip (honest) ──────────────────────────── */
function TrustStrip() {
  const points = ['Kostenlose Demo vorab', 'Direkter Kontakt', '100 % Ihr Eigentum'];
  return (
    <section
      style={{
        background: '#0B0A12',
        borderTop: '1px solid rgba(168,142,247,0.08)',
        borderBottom: '1px solid rgba(168,142,247,0.08)'
      }}
      aria-label="Vertrauen"
    >
      <div className="section-container py-8">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="max-w-xl text-sm leading-7" style={{ color: '#9690A8' }}>
            Neu in Hamburg gestartet — statt erfundener Referenzen zeigen wir{' '}
            <span style={{ color: '#ECEAF3', fontWeight: 600 }}>echte, prüfbare Demo-Websites</span>.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#9690A8' }}>
                <span
                  style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}
                  aria-hidden="true"
                />
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
  {
    title: 'Direkter Ansprechpartner',
    text: 'Sie sprechen mit der Person, die Ihre Website baut – ohne Sachbearbeiter, ohne Ticketsystem.'
  },
  {
    title: 'Demo vor der Entscheidung',
    text: 'Sie sehen einen echten Entwurf Ihrer Website, bevor Sie sich entscheiden oder etwas bezahlen.'
  },
  {
    title: '100 % Ihr Eigentum',
    text: 'Code, Daten und alle Zugänge gehören Ihnen – keine Abhängigkeit, kein Lock-in.'
  },
  {
    title: 'Kein Agentur-Aufschlag',
    text: 'Faire Preise und eine ehrliche Einschätzung. Wenn ein einfacherer Weg reicht, sage ich das.'
  }
];

function WhyMe() {
  return (
    <section className="section-spacing" style={{ background: '#16131F' }} aria-labelledby="why-heading">
      <div className="section-container">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">Warum Hamburg Websites</p>
          <h2
            id="why-heading"
            className="text-3xl font-black leading-tight sm:text-5xl"
            style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
          >
            Klare Bedingungen statt großer Versprechen
          </h2>
          <p className="mt-4 text-base leading-8" style={{ color: '#9690A8' }}>
            Direkt, transparent und ohne Risiko beim Einstieg – darauf können Sie sich verlassen.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {whyPoints.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl p-7"
              style={{ border: '1px solid rgba(168,142,247,0.12)', background: 'rgba(255,255,255,0.02)' }}
            >
              <span
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: 'rgba(124,58,237,0.15)', color: '#A855F7' }}
              >
                <CheckIcon />
              </span>
              <h3 className="text-lg font-black" style={{ color: '#ECEAF3' }}>{item.title}</h3>
              <p className="mt-2 text-sm leading-7" style={{ color: '#9690A8' }}>{item.text}</p>
            </motion.article>
          ))}
        </div>
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
    <section
      className="section-spacing"
      style={{
        background: 'linear-gradient(135deg, #0B0A12 0%, #16131F 60%, #1a152b 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-labelledby="process-heading"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(168,142,247,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(168,142,247,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(124,58,237,0.14) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Ablauf</p>
            <h2
              id="process-heading"
              className="text-3xl font-black leading-tight sm:text-5xl"
              style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
            >
              So läuft die Zusammenarbeit ab
            </h2>
          </div>
          <Link
            href="/ablauf"
            className="shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition"
            style={{ border: '1px solid rgba(168,142,247,0.2)', color: '#9690A8' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#A855F7'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9690A8'; e.currentTarget.style.borderColor = 'rgba(168,142,247,0.2)'; }}
          >
            Ablauf im Detail →
          </Link>
        </div>

        <ol className="grid gap-4 sm:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: index * 0.07 }}
              className="relative rounded-2xl p-6 transition"
              style={{ border: '1px solid rgba(168,142,247,0.12)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
            >
              <span
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}
              >
                {step.num}
              </span>
              <h3 className="text-base font-black" style={{ color: '#ECEAF3' }}>{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#9690A8' }}>
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-sm" style={{ color: '#6B6480' }}>
          Eine erste Demo-Website erhalten Sie in der Regel innerhalb weniger Tage. Kostenlos und unverbindlich.
        </p>
      </div>
    </section>
  );
}

/* ─── Pricing Preview ───────────────────────────────── */
const pricingPreview = [
  {
    title: 'Website-Visitenkarte',
    subtitle: 'Einstieg',
    price: 'ab 400 €',
    points: ['1 strukturierte Seite', 'Kontakt-CTA', 'Responsive Design', 'SEO-Basics']
  },
  {
    title: 'Business Website',
    subtitle: 'Mehrseitig',
    price: 'ab 1.000 €',
    featured: true,
    points: ['5–8 Seiten', 'Individuelles Design', 'SEO und Performance', '2 Korrekturschleifen']
  },
  {
    title: 'Mit Adminbereich',
    subtitle: 'Individuell',
    price: 'ab 1.500 €',
    points: ['Eigene Inhaltspflege', 'CMS-Einrichtung', 'Strukturierte Übergabe', 'Betreuung optional']
  }
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingPreview() {
  return (
    <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-label">Preise</p>
          <h2
            id="pricing-preview-heading"
            className="text-3xl font-black leading-tight sm:text-5xl"
            style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
          >
            Klare Preise. Kein Kleingedrucktes.
          </h2>
        </div>
        <Link
          href="/preise"
          className="shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition"
          style={{ border: '1px solid rgba(168,142,247,0.18)', color: '#9690A8', background: '#16131F' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#A855F7'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#9690A8'; e.currentTarget.style.borderColor = 'rgba(168,142,247,0.18)'; }}
        >
          Alle Pakete ansehen →
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {pricingPreview.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`pricing-preview-card ${item.featured ? 'featured' : ''}`}
          >
            {item.featured && <p className="pricing-badge">Am beliebtesten</p>}
            <div className={item.featured ? 'mt-8' : ''}>
              <p className="text-sm font-bold" style={{ color: '#ECEAF3' }}>{item.title}</p>
              <p className="mt-1 text-xs font-semibold" style={{ color: '#9690A8' }}>{item.subtitle}</p>
              <p
                className="mt-5 font-black"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg,#7C3AED,#A855F7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {item.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6" style={{ color: '#9690A8' }}>
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full"
                      style={{ background: 'rgba(124,58,237,0.15)', color: '#A855F7' }}
                    >
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/preise"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold transition hover:gap-3"
                style={{ color: '#A855F7' }}
              >
                Details ansehen
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7" style={{ color: '#6B6480' }}>
        Alle Preise sind Richtwerte. Jedes Projekt ist individuell. Nach einem kurzen Kennenlernen erhalten Sie ein passendes Angebot.
      </p>
    </section>
  );
}

/* ─── FAQ Preview ───────────────────────────────────── */
const homepageFaqPreview = [
  {
    question: 'Was passiert nach meiner Anfrage?',
    answer:
      'Sie erhalten eine kurze Rückmeldung, wir klären Ziel, Umfang und vorhandene Inhalte und entscheiden dann, ob eine Demo oder ein Audit der beste nächste Schritt ist.'
  },
  {
    question: 'Arbeiten Sie nur für Unternehmen in Hamburg?',
    answer:
      'Der Standort ist Hamburg. Projekte können aber genauso für Unternehmen in Deutschland und DACH umgesetzt werden.'
  },
  {
    question: 'Kann später Automatisierung dazukommen?',
    answer:
      'Ja. Website, SEO, Automatisierung und Tools sind getrennte Leistungen. Wenn es sinnvoll ist, können sie später sauber anschließen.'
  }
];

function FaqPreview() {
  return (
    <section
      className="section-spacing"
      style={{ background: '#16131F' }}
      aria-labelledby="faq-preview-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">FAQ</p>
            <h2
              id="faq-preview-heading"
              className="text-3xl font-black leading-tight sm:text-4xl"
              style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
            >
              Fragen vor dem Start
            </h2>
            <p className="mt-4 text-base leading-8" style={{ color: '#9690A8' }}>
              Der Einstieg bleibt bewusst einfach: Ziel klären, Richtung zeigen, dann sauber entscheiden.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition hover:gap-3"
              style={{ color: '#A855F7' }}
            >
              Alle Fragen ansehen
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          <div style={{ borderTop: '1px solid rgba(168,142,247,0.1)' }}>
            {homepageFaqPreview.map((item) => (
              <article key={item.question} className="py-6" style={{ borderBottom: '1px solid rgba(168,142,247,0.1)' }}>
                <h3 className="text-base font-bold" style={{ color: '#ECEAF3' }}>{item.question}</h3>
                <p className="mt-2 text-sm leading-7" style={{ color: '#9690A8' }}>{item.answer}</p>
              </article>
            ))}
          </div>
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
          <div>
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
              style={{ background: 'rgba(124,58,237,0.12)', color: '#A855F7', border: '1px solid rgba(168,142,247,0.25)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A855F7', display: 'inline-block' }} aria-hidden="true" />
              Kostenloser Einstieg
            </span>
            <h2
              id="final-cta-heading"
              className="max-w-xl font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', color: '#ECEAF3' }}
            >
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8" style={{ color: '#9690A8' }}>
              Erzählen Sie kurz von Ihrem Projekt. Ich melde mich persönlich zur kostenlosen Demo oder zum Digital-Audit – in der Regel innerhalb von 24 Stunden.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Kostenlose Demo anfragen
              </Link>
              <Link
                href="/kontakt#audit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition"
                style={{ minHeight: 48, border: '1px solid rgba(168,142,247,0.2)', color: '#9690A8' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#A855F7'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9690A8'; e.currentTarget.style.borderColor = 'rgba(168,142,247,0.2)'; }}
              >
                Digital-Audit starten
              </Link>
            </div>
          </div>

          <div className="final-cta-proof">
            <article>
              <strong>Direkter Kontakt</strong>
              <span>Sie sprechen direkt mit mir, ohne Umwege über Sachbearbeiter.</span>
            </article>
            <article>
              <strong>Schnelle Rückmeldung</strong>
              <span>Persönliche Antwort, keine automatische Warteschleife.</span>
            </article>
            <article>
              <strong>Hamburg und DACH</strong>
              <span>Lokal erreichbar, deutschlandweit umsetzbar.</span>
            </article>
            <article>
              <strong>100 % Ihr Eigentum</strong>
              <span>Alle Zugänge, Daten und Code gehören Ihnen.</span>
            </article>
          </div>
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
