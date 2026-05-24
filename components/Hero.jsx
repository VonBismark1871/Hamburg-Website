import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const heroStats = [
  { value: '30+', label: 'Projekte umgesetzt' },
  { value: '24h', label: 'Antwortzeit' },
  { value: '100%', label: 'Inhaber-Eigentum' },
  { value: '5 ★', label: 'Kundenbewertungen' }
];

const metrics = [
  { label: 'Neue Anfragen / Monat', value: '+180%', badge: 'up', badgeLabel: '↑' },
  { label: 'Google-Ranking', value: 'Position #1', badge: 'neutral', badgeLabel: '◉' },
  { label: 'Ladezeit', value: '0.9s', badge: 'up', badgeLabel: '⚡' }
];

const serviceTags = ['Website', 'SEO', 'Automatisierung'];

function ResultCard({ shouldReduceMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-result-card"
      >
        <div className="hero-result-header">
          <div className="hero-result-header-dot" />
          <span>Projekt-Ergebnis</span>
        </div>

        <div className="hero-result-project">
          <div>
            <p className="hero-result-project-name">Autoservice Hamburg</p>
            <p className="hero-result-project-type">KFZ-Werkstatt · Hamburg-Wandsbek</p>
          </div>
          <span className="hero-live-pill">Live</span>
        </div>

        <div className="hero-metrics">
          {metrics.map((m) => (
            <div key={m.label} className="hero-metric-row">
              <span className="hero-metric-label">{m.label}</span>
              <span className="hero-metric-value">
                {m.value}
                <span className={`hero-metric-badge ${m.badge}`}>{m.badgeLabel}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="hero-service-tags">
          {serviceTags.map((tag) => (
            <span key={tag} className="hero-service-tag">
              {tag}
            </span>
          ))}
          <span
            style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: 11, alignSelf: 'center' }}
          >
            Beispielprojekt
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" aria-label="Startseite Hero">
      <div className="section-container grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-28">
        {/* Left – copy */}
        <div className="relative z-10 space-y-7 max-w-2xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              Hamburg Websites · Lokal verankert, digital stark
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-black leading-[1.0] text-slate-950"
            style={{ letterSpacing: '-0.03em' }}
          >
            Websites,{' '}
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #b8ff2f, #9de800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              die Kunden
            </span>
            <br />
            gewinnen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="max-w-lg text-lg leading-8 text-slate-500"
          >
            Klares Design. Schnelle Seiten. Lokales SEO. Ich entwickle Websites für Hamburger Unternehmen – mit Struktur und Überzeugungskraft, die Anfragen bringt.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kontakt" className="primary-btn">
              Kostenlose Demo anfragen
            </Link>
            <Link href="/referenzen" className="secondary-btn">
              Referenzen ansehen
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-slate-600"
          >
            {['Direkter Ansprechpartner', 'Transparente Preise', 'Kein Agentur-Aufschlag'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#b8ff2f" strokeWidth="1.5" />
                  <path d="M5 8.2 7 10l4-4" stroke="#3a5a00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right – result card */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <ResultCard shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="hero-stats-strip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat-item">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
