import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const proofItems = ['Direkter Ansprechpartner', 'Transparente Preise', 'Website, SEO und Automatisierung'];

const projectServices = ['Website', 'SEO', 'Automatisierung'];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 7.5V5h16v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4 12 8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 16.5 8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const proofIcons = [PersonIcon, PriceIcon, StackIcon];

function HeroPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18 }}
      className="hero-preview-wrap"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-product-shell"
      >
        <div className="hero-product-window">
          <div className="hero-window-bar">
            <span className="bg-red-400" />
            <span className="bg-amber-300" />
            <span className="bg-emerald-400" />
            <p>projekt-dashboard.de</p>
          </div>

          <div className="hero-product-body">
            <div className="hero-product-main">
              <p className="hero-product-label">Projektseite</p>
              <h2>Ein Auftritt, der Angebot und Anfrageweg klar macht.</h2>
              <div className="hero-product-preview">
                <div>
                  <span />
                  <strong>Leistung klar erklären</strong>
                  <p>Struktur, Inhalte und CTA sind auf schnelle Entscheidung ausgelegt.</p>
                </div>
                <div>
                  <span />
                  <strong>Sichtbarkeit vorbereiten</strong>
                  <p>Saubere Seitenarchitektur und lokale Suchintentionen von Beginn an.</p>
                </div>
              </div>
            </div>

            <aside className="hero-status-card" aria-label="Projektstatus">
              <p className="hero-status-label">Aktueller Fokus</p>
              <strong>Website Relaunch</strong>
              <span className="hero-status-pill">Anfrage vorbereitet</span>
              <ul>
                <li>Kontaktweg sichtbar</li>
                <li>SEO-Basis geplant</li>
                <li>Ausbau optional</li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="hero-service-strip" aria-label="Leistungsbereiche">
          {projectServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero py-12 sm:py-14 lg:py-16">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative z-10 max-w-2xl space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-[11ch] text-4xl font-black leading-[0.98] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Websites und digitale Lösungen, die verständlich verkaufen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Ich entwickle klare Websites, lokale Sichtbarkeit, Automatisierungen und kleine Tools für Unternehmen, die
            pragmatisch digitaler arbeiten wollen.
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
            <Link href="/kontakt#audit" className="secondary-btn">
              Digital-Audit starten
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="grid gap-4 pt-2 text-sm font-semibold text-slate-800 sm:grid-cols-3"
            aria-label="Vertrauenssignale"
          >
            {proofItems.map((item, index) => {
              const Icon = proofIcons[index];
              return (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-950/10 bg-white text-blue-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                    <Icon />
                  </span>
                  <span className="pt-1.5 leading-5">{item}</span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}
