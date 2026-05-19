import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const trustBadges = [
  { icon: 'check', text: 'Kostenlose Demo' },
  { icon: 'clock', text: 'Schnelle Umsetzung' },
  { icon: 'shield', text: 'Faire Preise' }
];

const stats = [
  { value: '50+', label: 'Projekte' },
  { value: '5+', label: 'Jahre Erfahrung' },
  { value: '100%', label: 'Empfehlungsrate' }
];

function TrustIcon({ type }) {
  const icons = {
    check: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    clock: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    shield: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    )
  };

  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icons[type]}
    </svg>
  );
}

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Browser Window */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
      >
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex-1 rounded-md bg-white/10 px-3 py-1.5 text-center text-xs text-white/50">
            hamburg-websites.de
          </div>
        </div>

        {/* Preview Content */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80"
            alt="Hamburg Skyline - Professionelle Website Beispiel"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Live Preview
              </div>
              <h3 className="text-2xl font-bold text-white">Ihr Unternehmen</h3>
              <p className="max-w-sm text-sm text-white/70">
                Eine Website, die zu Ihrem Angebot passt und Besucher zu Kunden macht.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Modern', 'Responsiv', 'Schnell'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-lg sm:-right-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <svg className="h-5 w-5 text-bg-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Performance</p>
            <p className="text-xs text-white/60">Score 98/100</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -left-4 bottom-16 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-lg sm:-left-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Zufriedene Kunden</p>
            <p className="text-xs text-white/60">100% Empfehlung</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero relative min-h-[calc(100vh-80px)] py-16 text-white sm:py-20 lg:py-24">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Webdesign aus Hamburg
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl"
            >
              Websites, die{' '}
              <span className="text-accent">überzeugen</span> und Anfragen bringen.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-white/70"
            >
              Vom kompakten lokalen Auftritt bis zur individuellen Business-Website. 
              Klare Struktur, passende Gestaltung und eine Nutzerführung, die Besucher 
              zu Kunden macht.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/kontakt" className="primary-btn primary-btn-hero">
                Kostenlose Demo anfragen
              </Link>
              <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
                Referenzen ansehen
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-accent">
                    <TrustIcon type={badge.icon} />
                  </span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
