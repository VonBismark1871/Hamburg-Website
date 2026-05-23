import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const proofItems = ['Direkter Ansprechpartner', 'Klare Preisrange', 'Hamburg als Vertrauensanker'];

const systemSteps = [
  { title: 'Website', text: 'Klares Angebot und Anfrageweg' },
  { title: 'Sichtbarkeit', text: 'Lokale Struktur und Inhalte' },
  { title: 'Automatisierung', text: 'Formulare, Tools und Prozesse' }
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 11.5V5h6.5L21 15.5 15.5 21 5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.3" fill="currentColor" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const proofIcons = [PersonIcon, TagIcon, PinIcon];

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
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-browser"
      >
        <div className="hero-window-bar">
          <span className="bg-red-400" />
          <span className="bg-amber-300" />
          <span className="bg-emerald-400" />
          <p>hamburg-websites.de/system-preview</p>
        </div>

        <div className="hero-site-frame">
          <Image
            src="https://images.unsplash.com/photo-1671190363850-6c0d53346d3d?auto=format&fit=crop&w=1400&q=82"
            alt="Hamburg Hafen als Website-Vorschau"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-cover"
          />
          <div className="hero-site-overlay" />
          <div className="hero-site-content">
            <p>Hamburg Website</p>
            <h2>Nordisch. Klar. Direkt anfragbar.</h2>
            <span>Demo anfragen</span>
          </div>
        </div>
      </motion.div>

      <div className="hero-phone" aria-hidden="true">
        <div className="hero-phone-notch" />
        <div className="relative h-full overflow-hidden rounded-[1.45rem]">
          <Image
            src="https://images.unsplash.com/photo-1671190363850-6c0d53346d3d?auto=format&fit=crop&w=700&q=82"
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/84 via-slate-950/18 to-white/20" />
          <div className="absolute inset-x-4 bottom-5">
            <p className="text-[10px] font-bold uppercase text-white/72">Mobile Flow</p>
            <p className="mt-1 text-lg font-bold leading-tight text-white">Anfrage in wenigen Klicks</p>
          </div>
        </div>
      </div>

      <div className="hero-flow-rail" aria-hidden="true" />

      <div className="hero-system-grid">
        {systemSteps.map((step, index) => (
          <article key={step.title} className="hero-system-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero py-10 sm:py-11 lg:py-12">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-2xl space-y-5">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-[12ch] text-4xl font-black leading-[0.98] text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Websites fuer Hamburg, die zu digitalen Systemen wachsen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Vom klaren Webauftritt bis zu Automatisierungen, die im Alltag Zeit sparen: ein direkter Partner fuer
            Website, Sichtbarkeit und praktische IT-Loesungen.
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
              Digital-Audit ansehen
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
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-950/12 bg-white text-blue-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
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
