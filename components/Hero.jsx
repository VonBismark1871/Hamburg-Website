import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const heroStats = [
  { value: 'Kostenlos', label: 'Demo vorab' },
  { value: '24h', label: 'Antwortzeit' },
  { value: '100%', label: 'Ihr Eigentum' },
  { value: 'Hamburg', label: '& DACH' }
];

const layoutSections = [
  { name: 'Hero & Angebot', fill: '68%' },
  { name: 'Leistungen', fill: '90%' },
  { name: 'Referenzen', fill: '58%' },
  { name: 'Kontakt & Anfrage', fill: '78%' }
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
        style={{ width: '100%', maxWidth: 420 }}
      >
        <div className="hero-result-header">
          <div className="hero-result-header-dot" />
          <span>Demo-Vorschau</span>
        </div>

        <div className="hero-result-project">
          <div>
            <p className="hero-result-project-name">Beispiel-Onepager</p>
            <p className="hero-result-project-type">Struktur · Design · Anfrageführung</p>
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 999,
              background: 'rgba(124,58,237,0.16)',
              color: '#A855F7',
              border: '1px solid rgba(168,142,247,0.3)'
            }}
          >
            Vorschau
          </span>
        </div>

        <div className="hero-metrics">
          {layoutSections.map((s) => (
            <div key={s.name} className="hero-metric-row">
              <span className="hero-metric-label">{s.name}</span>
              <span
                aria-hidden="true"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  height: 6,
                  width: 56,
                  borderRadius: 999,
                  background: 'rgba(168,142,247,0.16)',
                  overflow: 'hidden'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: s.fill,
                    borderRadius: 999,
                    background: 'linear-gradient(90deg,#7C3AED,#A855F7)'
                  }}
                />
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
          <span style={{ marginLeft: 'auto', color: 'rgba(150,144,168,0.5)', fontSize: 11, alignSelf: 'center' }}>
            Beispiel-Layout
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
            className="font-black leading-[1.0]"
            style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
          >
            Websites,{' '}
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
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
            className="max-w-lg text-lg leading-8"
            style={{ color: '#9690A8' }}
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
            className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold"
            style={{ color: '#9690A8' }}
          >
            {['Direkter Ansprechpartner', 'Transparente Preise', 'Kein Agentur-Aufschlag'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#7C3AED" strokeWidth="1.5" />
                  <path d="M5 8.2 7 10l4-4" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
