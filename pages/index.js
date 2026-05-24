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

/* ─── Testimonials ──────────────────────────────────── */
const testimonials = [
  {
    stars: 5,
    text: 'Die neue Website ist professionell, übersichtlich und hat innerhalb weniger Wochen deutlich mehr Anfragen gebracht. Direkte Kommunikation, faire Preise – absolut empfehlenswert.',
    name: 'Markus K.',
    role: 'Inhaber · Autoservice Hamburg',
    initials: 'MK'
  },
  {
    stars: 5,
    text: 'Ich hatte vorher eine veraltete Website, die kaum jemand fand. Jetzt bin ich bei Google an erster Stelle für meine wichtigsten Suchbegriffe. Schnelle Umsetzung, saubere Arbeit.',
    name: 'Sandra M.',
    role: 'Inhaberin · Friseursalon Altona',
    initials: 'SM'
  },
  {
    stars: 5,
    text: 'Endlich eine Website, die wirklich verkauft. Der Ablauf war transparent, klar und ohne unnötigen Aufwand. Genau das, was ich mir vorgestellt hatte.',
    name: 'Thomas B.',
    role: 'Praxisinhaber · Physio Hamburg-Nord',
    initials: 'TB'
  }
];

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7L8 1Z" />
    </svg>
  );
}

function Testimonials() {
  return (
    <section
      className="section-spacing"
      style={{ background: 'var(--color-bg-soft)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <div className="mb-12 text-center">
          <p className="section-label justify-center">Kundenstimmen</p>
          <h2
            id="testimonials-heading"
            className="mx-auto max-w-2xl text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Was Kunden über die Zusammenarbeit sagen
          </h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="testimonial-card"
            >
              <div className="testimonial-stars" aria-label={`${t.stars} von 5 Sternen`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <p className="testimonial-author-name">{t.name}</p>
                  <p className="testimonial-author-role">{t.role}</p>
                </div>
              </div>
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
      style={{ background: 'var(--color-bg-dark)', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="process-heading"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label" style={{ color: 'var(--color-lime-dark)' }}>Ablauf</p>
            <h2
              id="process-heading"
              className="text-3xl font-black leading-tight text-white sm:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              So läuft die Zusammenarbeit ab
            </h2>
          </div>
          <Link
            href="/ablauf"
            className="shrink-0 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white/70 transition hover:border-white/40 hover:text-white"
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
              className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm"
            >
              <span
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black"
                style={{ background: 'var(--color-lime)', color: 'var(--color-ink)' }}
              >
                {step.num}
              </span>
              <h3 className="text-base font-black text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Eine erste Demo-Website erhalten Sie in der Regel innerhalb weniger Tage. Kostenlos und unverbindlich.
        </p>
      </div>
    </section>
  );
}

/* ─── Pricing Preview ───────────────────────────────── */
const pricingPreview = [
  {
    title: 'Starter Website',
    subtitle: 'Onepager',
    price: 'ab 650 €',
    points: ['1 strukturierte Landingpage', 'Kontaktformular', 'Responsive Design', 'SEO-Basis']
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
            className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Klare Preise. Kein Kleingedrucktes.
          </h2>
        </div>
        <Link
          href="/preise"
          className="shrink-0 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
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
              <p className="text-sm font-bold text-slate-950">{item.title}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{item.subtitle}</p>
              <p
                className="mt-5 font-black text-slate-950"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                {item.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/preise"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"
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

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-400">
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
      style={{ background: 'var(--color-bg-soft)' }}
      aria-labelledby="faq-preview-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">FAQ</p>
            <h2
              id="faq-preview-heading"
              className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Fragen vor dem Start
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-500">
              Der Einstieg bleibt bewusst einfach: Ziel klären, Richtung zeigen, dann sauber entscheiden.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"
            >
              Alle Fragen ansehen
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          <div className="divide-y divide-slate-200">
            {homepageFaqPreview.map((item) => (
              <article key={item.question} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-slate-950">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.answer}</p>
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
              style={{ background: 'rgba(184,255,47,0.12)', color: '#b8ff2f', border: '1px solid rgba(184,255,47,0.25)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#b8ff2f', display: 'inline-block' }} aria-hidden="true" />
              Kostenloser Einstieg
            </span>
            <h2
              id="final-cta-heading"
              className="max-w-xl font-black leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em' }}
            >
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Erzählen Sie kurz von Ihrem Projekt. Ich melde mich persönlich zur kostenlosen Demo oder zum Digital-Audit – in der Regel innerhalb von 24 Stunden.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Kostenlose Demo anfragen
              </Link>
              <Link
                href="/kontakt#audit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white/70 transition hover:border-white/40 hover:text-white"
                style={{ minHeight: 48 }}
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
              <span>Antwort in der Regel innerhalb von 24 Stunden.</span>
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
        <Features />
        <Testimonials />
        <ProcessPreview />
        <Portfolio />
        <PricingPreview />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
