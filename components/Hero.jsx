import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const proofItems = [
  'Kostenlose Demo-Richtung',
  'Klare Preisrange vor Start',
  'Direkter Ansprechpartner'
];

const previewCards = [
  {
    title: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    metric: 'Reservierung',
    accent: 'bg-cyan-300'
  },
  {
    title: 'Barbershop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    metric: 'Terminbuchung',
    accent: 'bg-lime-300'
  },
  {
    title: 'Autoservice',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    metric: 'Anfrage',
    accent: 'bg-orange-300'
  }
];

const standards = ['schnell', 'klar', 'lokal', 'stark'];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10.2 8.1 14 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.2 }}
      className="relative mx-auto w-full max-w-2xl"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-3 min-w-0 flex-1 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/60">
            hamburg-websites.de/live-preview
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#07110f]">
            <Image
              src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80"
              alt="Hamburg Hafen bei Nacht als Website-Hintergrund"
              fill
              className="object-cover opacity-75"
              priority
              sizes="(max-width: 768px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07110f] via-[#07110f]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-semibold uppercase text-cyan-200">Hamburg Websites</p>
              <p className="mt-2 max-w-[14rem] text-2xl font-semibold leading-tight text-white">
                Mehr Vertrauen im ersten Blick.
              </p>
              <div className="mt-4 flex gap-2">
                {standards.map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {previewCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.09] p-3"
              >
                <div className="flex gap-3">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={card.image}
                      alt={`${card.title} Website Referenzbild`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="120px"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className={`mb-3 block h-1 w-10 rounded-full ${card.accent}`} />
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-xs text-white/60">Fokus: {card.metric}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero min-h-[calc(100vh-76px)] py-16 text-white sm:py-20 lg:py-24">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="section-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 max-w-2xl space-y-7">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-[12ch] text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
          >
            Websites für Hamburg, die Vertrauen schaffen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="max-w-xl text-base leading-8 text-white/70 sm:text-lg"
          >
            Moderne Webauftritte für lokale Unternehmen: klare Struktur, starke Bildsprache, schnelle Technik und eine
            Nutzerführung, die aus Besuchern echte Anfragen macht.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kontakt" className="primary-btn primary-btn-hero">
              Kostenlose Demo anfragen
            </Link>
            <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
              Referenzen ansehen
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="grid gap-3 text-sm text-white/70 sm:grid-cols-3"
            aria-label="Vorteile"
          >
            {proofItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-300 text-[#07110f]">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}
