import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import AuroraBackground from './ui/AuroraBackground';
import { useParallax } from '../hooks/useParallax';

const heroStats = [
  { value: 'Kostenlos', label: 'Demo vorab' },
  { value: '24h', label: 'Antwortzeit' },
  { value: '100%', label: 'Ihr Eigentum' },
  { value: 'Hamburg', label: '& DACH' }
];

const mockSections = [
  { label: 'Hero & Angebot', fill: '70%' },
  { label: 'Leistungen', fill: '90%' },
  { label: 'Referenzen', fill: '56%' },
  { label: 'Kontakt & Anfrage', fill: '80%' }
];

const trustPoints = ['Direkter Ansprechpartner', 'Transparente Preise', 'Kein Agentur-Aufschlag'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function CheckCircle() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="var(--cyan)" strokeWidth="1.3" />
      <path d="M5 8.2 7 10l4-4" stroke="var(--cyan-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroMock({ reduce }) {
  const ref = useRef(null);
  const y = useParallax(ref, 60);

  return (
    <div ref={ref} className="relative flex items-center justify-center lg:justify-end">
      <motion.div
        style={{ maxWidth: 440, ...(reduce ? {} : { y }) }}
        initial={{ opacity: 0, x: 28, rotateY: 6 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <motion.div
          className="hero-mock"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero-mock-bar">
            <span className="hero-mock-dot" style={{ background: '#ff5f57' }} />
            <span className="hero-mock-dot" style={{ background: '#febc2e' }} />
            <span className="hero-mock-dot" style={{ background: '#28c840' }} />
            <span
              className="ml-3 truncate rounded-md px-3 py-1 text-[11px] font-medium"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--muted)', border: '1px solid var(--line)' }}
            >
              ihr-unternehmen.de
            </span>
          </div>

          <div className="p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-[17px] font-bold" style={{ color: 'var(--text)' }}>
                  Beispiel-Onepager
                </p>
                <p className="mt-1 text-[12px]" style={{ color: 'var(--muted)' }}>
                  Struktur · Design · Anfrageführung
                </p>
              </div>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-bold"
                style={{ background: 'rgba(34,211,238,0.12)', color: 'var(--cyan-2)', border: '1px solid rgba(34,211,238,0.3)' }}
              >
                Vorschau
              </span>
            </div>

            <div className="mt-6 space-y-2.5">
              {mockSections.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line)' }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-[13px] font-medium" style={{ color: 'var(--text-soft)' }}>{s.label}</span>
                  <span style={{ position: 'relative', height: 6, width: 64, borderRadius: 999, background: 'rgba(168,142,247,0.16)', overflow: 'hidden' }}>
                    <motion.span
                      style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'linear-gradient(90deg,#7C3AED,#22D3EE)', transformOrigin: 'left' }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: parseFloat(s.fill) / 100 }}
                      transition={{ duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Website', 'SEO', 'Automatisierung'].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1.5 text-[12px] font-medium"
                  style={{ border: '1px solid var(--line)', background: 'rgba(124,58,237,0.08)', color: 'var(--muted)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" aria-label="Startseite Hero">
      <AuroraBackground />

      <div className="hero-inner section-container grid items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={item}>
            <span className="eyebrow-pill">
              <span
                style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--cyan)', boxShadow: '0 0 0 3px rgba(34,211,238,0.25)' }}
                aria-hidden="true"
              />
              Hamburg Websites · Lokal verankert, digital stark
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-7 font-display" style={{ color: 'var(--text)' }}>
            Websites, die <span className="gradient-text">Kunden</span> gewinnen.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl" style={{ color: 'var(--text-soft)', fontSize: 'var(--text-lead)', lineHeight: 1.65 }}>
            Klares Design. Schnelle Seiten. Lokales SEO. Ich entwickle Websites für Hamburger
            Unternehmen – mit Struktur und Überzeugungskraft, die Anfragen bringt.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="/kontakt" className="primary-btn">
              Kostenlose Demo anfragen
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </MagneticButton>
            <MagneticButton href="/referenzen" className="secondary-btn" strength={10}>
              Referenzen ansehen
            </MagneticButton>
          </motion.div>

          <motion.ul variants={item} className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle />
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroMock reduce={reduce} />
      </div>

      <div className="hero-stat-strip">
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
