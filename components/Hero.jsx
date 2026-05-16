import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const proofItems = [
  'Kostenlose Konzept-Vorschau',
  'SEO, Speed und saubere Codebasis',
  'Direkte Betreuung ohne Agentur-Nebel'
];

const deliveryNotes = [
  { label: 'Strategy', value: 'Struktur vor Design' },
  { label: 'Design', value: 'Branchenlogik statt Template' },
  { label: 'Code', value: 'Wartbar, schnell, statisch' },
  { label: 'Care', value: 'Hosting und Pflege möglich' }
];

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
        className="relative overflow-hidden rounded-[26px] border border-white/20 bg-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-3 min-w-0 flex-1 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/60">
            hamburg-websites.de/concept-preview
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="relative min-h-[340px] overflow-hidden rounded-[22px] border border-white/10 bg-[#07110f]">
            <Image
              src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80"
              alt="Hamburg Hafen bei Nacht als atmosphärische Website-Vorschau"
              fill
              className="object-cover opacity-72"
              priority
              sizes="(max-width: 768px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07110f] via-[#07110f]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Concept Preview</p>
              <p className="mt-3 max-w-[18rem] text-3xl font-semibold leading-tight text-white">
                Eine Website, die wie ein Studio-Projekt wirkt.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deliveryNotes.map((note) => (
              <article key={note.label} className="rounded-2xl border border-white/10 bg-white/[0.09] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{note.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{note.value}</p>
              </article>
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
            Boutique-Websites für lokale Unternehmen.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="max-w-xl text-base leading-8 text-white/70 sm:text-lg"
          >
            Premium-Auftritt, schnelle erste Richtung und eine technische Basis, die später nicht im Weg steht:
            Strategie, Design, SEO, Performance und wartbarer Code aus einer Hand.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kontakt" className="primary-btn primary-btn-hero">
              Konzept-Vorschau anfragen
            </Link>
            <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
              Konzept-Galerie ansehen
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
