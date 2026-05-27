import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

/* ── Palette ─────────────────────────────────────────── */
const BG    = '#FAF7F2';   // warm ivory
const SURF  = '#F2EDE5';   // cream surface
const CARD  = '#FFFFFF';   // white cards
const DARK  = '#0E1826';   // dark panel (stats, testimonials)
const INK   = '#0D1520';   // headings
const BODY  = '#445568';   // body text
const MUTED = '#8A9BAC';   // muted text
const GOLD  = '#B8893A';   // warm gold (readable on light)
const GOLDF = 'rgba(184,137,58,0.1)';
const GOLDL = 'rgba(184,137,58,0.45)';
const TEAL  = '#1A7896';   // teal accent
const LINE  = 'rgba(184,137,58,0.22)';
const LINEW = 'rgba(0,0,0,0.07)';
const SERIF = "'Playfair Display', Georgia, serif";
const SANS  = "'Inter', system-ui, sans-serif";
const ease  = [0.16, 1, 0.3, 1];

/* ── Data ────────────────────────────────────────────── */
const NAV = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Team',       href: '#team'       },
  { label: 'Praxis',     href: '#praxis'     },
  { label: 'Termin',     href: '#termin'     },
];

const SERVICES = [
  { n: '01', name: 'Prophylaxe',                 desc: 'Regelmäßige Vorsorge und individuelle Mundhygieneberatung für dauerhaft gesunde Zähne und frühzeitige Problemerkennung.' },
  { n: '02', name: 'Professionelle Reinigung',   desc: 'Schonende Entfernung von Belägen, Zahnstein und Verfärbungen — für ein frisches Gefühl und gesundes Zahnfleisch.' },
  { n: '03', name: 'Ästhetische Zahnheilkunde',  desc: 'Bleaching, Veneers und natürliche Korrekturen für ein strahlendes, harmonisches Lächeln, das zu Ihnen passt.' },
  { n: '04', name: 'Implantologie',              desc: 'Sorgfältig geplante Implantatversorgung mit modernster Technologie und einfühlsamer persönlicher Begleitung von Anfang an.' },
  { n: '05', name: 'Zahnersatz',                 desc: 'Individuell gefertigte Lösungen mit Fokus auf Funktion, Ästhetik und langfristigen Komfort im Alltag.' },
  { n: '06', name: 'Kinderzahnheilkunde',        desc: 'Geduldige, altersgerechte Behandlung für ein positives erstes Zahnarzt-Erlebnis und gesunde kleine Zähne.' },
  { n: '07', name: 'Parodontologie',             desc: 'Gezielte Diagnose und Therapie bei Zahnfleischerkrankungen für stabile Mundgesundheit auf lange Sicht.' },
  { n: '08', name: 'Notfallbehandlung',          desc: 'Schnelle Hilfe bei akuten Zahnschmerzen — wann immer möglich noch am selben Tag, ohne lange Wartezeit.' },
];

const TEAM = [
  { name: 'Dr. Laura Richter',  role: 'Allgemeine Zahnheilkunde & Ästhetik', quote: 'Schönheit entsteht, wenn Funktion und Form zusammenfinden.',        img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Dr. Marcus Stein',   role: 'Implantologie & Oralchirurgie',        quote: 'Präzision beginnt mit Vertrauen — und Vertrauen mit Zeit.',         img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jana Wolff',         role: 'Prophylaxe & Patientenbetreuung',      quote: 'Ein gesundes Lächeln braucht gute Gewohnheiten und echte Fürsorge.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' },
];

const STATS = [
  { val: 1800, suf: '+',      label: 'zufriedene Patienten', isFloat: false },
  { val: 15,   suf: ' Jahre', label: 'Praxiserfahrung',      isFloat: false },
  { val: 4.9,  suf: '★',     label: 'Ø Google-Bewertung',   isFloat: true  },
];

const TESTIMONIALS = [
  { name: 'Sandra M.',  stars: 5, text: 'Endlich eine Praxis, in der ich mich nicht nervös fühle. Das Team erklärt alles verständlich und nimmt sich wirklich Zeit.' },
  { name: 'Thomas K.', stars: 5, text: 'Nach jahrelanger Zahnarzt-Angst bin ich hier gut aufgehoben. Professionell, freundlich und modern ausgestattet.' },
  { name: 'Miriam H.', stars: 5, text: 'Die Behandlung war absolut schmerzlos. Ich hätte nicht gedacht, dass ein Zahnarztbesuch so angenehm sein kann.' },
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80', alt: 'Modernes Behandlungszimmer' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',  alt: 'Beratungsgespräch' },
  { src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',  alt: 'Behandlungssetting' },
  { src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80',  alt: 'Empfangsbereich' },
];

const TICKER_ITEMS = [
  'Prophylaxe', 'Implantologie', 'Zahnreinigung', 'Ästhetische Zahnheilkunde',
  'Parodontologie', 'Zahnersatz', 'Kinderzahnheilkunde', 'Digitale Diagnostik',
];

const FEATURES = [
  { icon: '◎', head: 'Digitale Diagnostik',  text: 'Modernste Bildgebung für präzise Befunde — strahlungsarm, schnell und patientenfreundlich.' },
  { icon: '◉', head: 'Angstpatienten',       text: 'Einfühlsame Behandlung und Zeit für Sie — auf Wunsch mit sanfter Betäubung und Ruhe.' },
  { icon: '◌', head: 'Neue Patienten',       text: 'Unkomplizierte Aufnahme, kurze Wartezeiten und persönliche Aufmerksamkeit ab Tag eins.' },
  { icon: '◍', head: 'Ehrliche Beratung',    text: 'Wir erklären jeden Schritt und alle Kosten — bevor wir ihn durchführen.' },
];

/* ── Helpers ─────────────────────────────────────────── */
function Counter({ to, suf = '', isFloat = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1800, t0 = performance.now();
    const run = now => {
      const p = Math.min((now - t0) / dur, 1);
      const v = (1 - Math.pow(1 - p, 3)) * to;
      setN(isFloat ? Math.round(v * 10) / 10 : Math.floor(v));
      if (p < 1) requestAnimationFrame(run); else setN(to);
    };
    requestAnimationFrame(run);
  }, [inView, to, isFloat]);
  return <span ref={ref}>{isFloat ? n.toFixed(1) : n.toLocaleString('de-DE')}{suf}</span>;
}

function SectionLabel({ children, onDark = false }) {
  const c = onDark ? '#C8A86B' : GOLD;
  return (
    <motion.span
      initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, ease }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
               fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.24em',
               textTransform: 'uppercase', color: c, fontFamily: SANS }}
    >
      <span style={{ display: 'inline-block', width: 20, height: 1, background: c }} />
      {children}
    </motion.span>
  );
}

function GoldDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.9, ease }}
      style={{ height: 1, background: `linear-gradient(90deg, ${GOLD}, transparent)`,
               transformOrigin: 'left' }}
    />
  );
}

/* ── Nav ──────────────────────────────────────────────── */
function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn(); window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background:     scrolled ? 'rgba(250,247,242,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom:   `1px solid ${scrolled ? LINE : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#start" className="flex flex-col leading-none">
          <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em',
                         color: INK, fontFamily: SERIF }}>ElbDent</span>
          <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.3em',
                         textTransform: 'uppercase', color: GOLD, fontFamily: SANS }}>Zahnarztpraxis · Hamburg</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: BODY, fontFamily: SANS }}
              onMouseEnter={e => (e.currentTarget.style.color = INK)}
              onMouseLeave={e => (e.currentTarget.style.color = BODY)}
            >{l.label}</Link>
          ))}
          <Link href="#termin"
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            style={{ background: TEAL, fontFamily: SANS, letterSpacing: '0.03em' }}>
            Termin
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(v => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          style={{ border: `1px solid ${LINEW}`, color: INK, borderRadius: '50%', background: 'none' }}
          aria-label="Menü" aria-expanded={open}>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
            style={{ background: 'rgba(250,247,242,0.97)', borderTop: `1px solid ${LINEW}` }}>
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium"
                  style={{ color: INK, fontFamily: SANS }}>{l.label}</Link>
              ))}
              <Link href="#termin" onClick={() => setOpen(false)}
                className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
                style={{ background: TEAL, fontFamily: SANS }}>Termin anfragen</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgS = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  return (
    <section id="start" ref={ref} className="relative overflow-hidden"
      style={{ background: BG, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Subtle gold orb far right */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[700px] w-[700px] rounded-full"
        style={{ background: `radial-gradient(circle, ${GOLDF} 0%, transparent 70%)` }} />
      {/* Faint circle watermark */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full"
        style={{ border: `1px solid ${GOLDF}`, opacity: 0.6 }} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-24">
        {/* Text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}>
            <SectionLabel>Zahnarztpraxis · Hamburg-Eppendorf</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            style={{ fontFamily: SERIF, color: INK, lineHeight: 1.05,
                     letterSpacing: '-0.02em', fontSize: 'clamp(3rem, 6.5vw, 5.6rem)',
                     fontWeight: 800, marginTop: '1.4rem' }}
          >
            Ihr schönstes<br />
            <em style={{ color: GOLD, fontStyle: 'italic' }}>Lächeln</em><br />
            beginnt hier.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease }}
            className="mt-6 max-w-md text-base leading-relaxed"
            style={{ color: BODY, fontFamily: SANS }}
          >
            Moderne Zahnmedizin, ruhige Atmosphäre und ehrliche Beratung — in Hamburg für
            Menschen, denen ihr Lächeln wichtig ist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.56, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="#termin"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: TEAL, fontFamily: SANS, letterSpacing: '0.04em',
                       boxShadow: `0 8px 28px rgba(26,120,150,0.35)` }}>
              Termin anfragen →
            </Link>
            <Link href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{ border: `1.5px solid ${LINEW}`, color: INK, fontFamily: SANS }}>
              Leistungen
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3">
            {['Neue Patienten willkommen', 'Angstpatienten willkommen', 'Digitale Röntgendiagnostik'].map(b => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 600, color: BODY, fontFamily: SANS,
                background: CARD, border: `1px solid ${LINE}`,
                borderRadius: 100, padding: '0.35rem 0.8rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <span style={{ color: GOLD }}>◆</span> {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 44, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* Gold corner brackets */}
          <div className="pointer-events-none absolute -left-4 -top-4 h-14 w-14"
            style={{ borderTop: `2px solid ${GOLD}`, borderLeft: `2px solid ${GOLD}`, opacity: 0.7 }} />
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-14 w-14"
            style={{ borderBottom: `2px solid ${GOLD}`, borderRight: `2px solid ${GOLD}`, opacity: 0.7 }} />
          <div className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: `0 32px 80px -16px rgba(14,24,38,0.22), 0 0 0 1px ${LINE}` }}>
            <motion.div style={{ y: imgY, scale: imgS }}>
              <Image
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"
                alt="Modernes Behandlungszimmer der Praxis ElbDent"
                width={1200} height={1600} priority
                className="w-full object-cover"
                style={{ height: '520px' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em',
                       textTransform: 'uppercase', color: MUTED, fontFamily: SANS }}>Entdecken</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 28, background: `linear-gradient(${GOLD}, transparent)` }} />
      </motion.div>
    </section>
  );
}

/* ── Ticker ───────────────────────────────────────────── */
function Ticker() {
  const items = Array(6).fill(TICKER_ITEMS).flat();
  return (
    <div style={{ background: GOLD, overflow: 'hidden', padding: '0.85rem 0' }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6"
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em',
                     textTransform: 'uppercase', color: '#0E1826', fontFamily: SANS }}>
            {item} <span style={{ opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Feature pillars ──────────────────────────────────── */
function Features() {
  return (
    <section style={{ background: SURF, padding: '5rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div key={f.head}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease }}
              whileHover={{ y: -5, boxShadow: `0 12px 32px rgba(0,0,0,0.09)` }}
              className="rounded-2xl p-7 transition-shadow"
              style={{ background: CARD, border: `1px solid ${LINEW}`, cursor: 'default',
                       boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              <span style={{ fontSize: '1.4rem', color: GOLD }}>{f.icon}</span>
              <h3 style={{ marginTop: '1rem', fontSize: '0.95rem', fontWeight: 700,
                           color: INK, fontFamily: SANS, lineHeight: 1.35 }}>{f.head}</h3>
              <p style={{ marginTop: '0.6rem', fontSize: '0.83rem', lineHeight: 1.75,
                          color: BODY, fontFamily: SANS }}>{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services (accordion) ─────────────────────────────── */
function Services() {
  const [open, setOpen] = useState(null);
  return (
    <section id="leistungen" style={{ background: BG, scrollMarginTop: 80, padding: '6rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Unser Angebot</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(2.2rem,4.5vw,3.8rem)',
                   fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                   marginTop: '1rem', marginBottom: '3rem' }}
        >
          Leistungen
        </motion.h2>
        <GoldDivider />
        {SERVICES.map((s, i) => (
          <motion.div key={s.n}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05, ease }}
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left"
              style={{ display: 'block', width: '100%', background: 'none', border: 'none',
                       borderBottom: `1px solid ${LINEW}`, padding: '1.3rem 0', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, fontFamily: SANS,
                                 color: GOLD, minWidth: 28, letterSpacing: '0.1em' }}>{s.n}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, fontFamily: SANS,
                                 color: open === i ? TEAL : INK, transition: 'color 0.3s' }}>{s.name}</span>
                </div>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.28 }}
                  style={{ color: GOLD, fontSize: '1.25rem', lineHeight: 1, display: 'inline-block' }}>+</motion.span>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="desc"
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ padding: '0.7rem 0 1.4rem 3.25rem', fontSize: '0.88rem',
                              lineHeight: 1.75, color: BODY, fontFamily: SANS }}>{s.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        <GoldDivider />
      </div>
    </section>
  );
}

/* ── Stats (dark panel) ───────────────────────────────── */
function Stats() {
  return (
    <section style={{ background: DARK, padding: '5.5rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.14, ease }}
            >
              <div style={{ fontFamily: SERIF, fontSize: 'clamp(3rem,6vw,4.5rem)',
                            fontWeight: 800, color: '#C8A86B', lineHeight: 1, letterSpacing: '-0.03em' }}>
                <Counter to={s.val} suf={s.suf} isFloat={s.isFloat} />
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.88rem', fontWeight: 500,
                            color: 'rgba(200,220,240,0.7)', fontFamily: SANS,
                            letterSpacing: '0.04em' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Team ─────────────────────────────────────────────── */
function Team() {
  return (
    <section id="team" style={{ background: SURF, scrollMarginTop: 80, padding: '6rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Ihr Team</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(2.2rem,4.5vw,3.8rem)',
                   fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                   marginTop: '1rem', marginBottom: '3rem' }}
        >
          Persönliche Betreuung<br />
          <em style={{ color: GOLD, fontStyle: 'italic' }}>von Anfang an.</em>
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {TEAM.map((m, i) => (
            <motion.article key={m.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.13, ease }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ background: CARD, border: `1px solid ${LINEW}`,
                       boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.13)' }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image src={m.img} alt={`${m.name} — ${m.role}`} fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-60" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(14,24,38,0.92) 0%, rgba(14,24,38,0.3) 60%, transparent 100%)' }}>
                  <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'rgba(220,235,250,0.9)',
                              fontFamily: SERIF, lineHeight: 1.65 }}>«{m.quote}»</p>
                </div>
              </div>
              <div className="p-5" style={{ borderTop: `1px solid ${LINEW}` }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: INK, fontFamily: SANS }}>{m.name}</h3>
                <p style={{ marginTop: '0.3rem', fontSize: '0.78rem', fontWeight: 500,
                            color: TEAL, fontFamily: SANS }}>{m.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Gallery ──────────────────────────────────────────── */
function Gallery() {
  return (
    <section id="praxis" style={{ background: BG, scrollMarginTop: 80, padding: '6rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Einblick</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(2.2rem,4.5vw,3.8rem)',
                   fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                   marginTop: '1rem', marginBottom: '3rem' }}
        >
          Unsere Praxis
        </motion.h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {GALLERY.map((img, i) => (
            <motion.figure key={img.src}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.09, ease }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ height: 220, border: `1px solid ${LINEW}`,
                       boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              <Image src={img.src} alt={img.alt} fill
                className="object-cover transition-transform duration-700 group-hover:scale-106" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'linear-gradient(to top, rgba(14,24,38,0.6), transparent)' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 500, color: '#fff', fontFamily: SANS }}>{img.alt}</p>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials (dark panel) ────────────────────────── */
function Testimonials() {
  return (
    <section style={{ background: DARK, padding: '6rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel onDark>Patientenstimmen</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ fontFamily: SERIF, color: '#F0EAE2', fontSize: 'clamp(2.2rem,4.5vw,3.8rem)',
                   fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                   marginTop: '1rem', marginBottom: '3rem' }}
        >
          Was unsere Patienten<br />
          <em style={{ color: '#C8A86B', fontStyle: 'italic' }}>sagen.</em>
        </motion.h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.article key={t.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: '1.1rem' }}>
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} style={{ color: '#C8A86B', fontSize: '0.85rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(200,220,240,0.8)',
                          fontFamily: SANS, fontStyle: 'italic' }}>«{t.text}»</p>
              <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', fontWeight: 700,
                          color: '#F0EAE2', fontFamily: SANS }}>{t.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Booking ──────────────────────────────────────────── */
function Field({ label, children }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.63rem',
                     fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
                     color: MUTED, fontFamily: SANS }}>{label}</span>
      {children}
    </label>
  );
}

function Booking() {
  const iStyle = {
    width: '100%', borderRadius: '0.6rem', fontFamily: SANS,
    background: CARD, border: `1px solid ${LINEW}`,
    color: INK, padding: '0.72rem 1rem', fontSize: '0.87rem',
  };
  const HOURS = ['Mo 08:00 – 18:00', 'Di 08:00 – 19:00', 'Mi 08:00 – 16:00', 'Do 08:00 – 18:00', 'Fr 08:00 – 14:00'];
  return (
    <section id="termin" style={{ background: SURF, scrollMarginTop: 80, padding: '6rem 0' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionLabel>Jetzt anfragen</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }}
              style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(2.2rem,4.5vw,3.5rem)',
                       fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '1rem' }}
            >
              Wir freuen uns<br />
              <em style={{ color: GOLD, fontStyle: 'italic' }}>auf Sie.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              style={{ marginTop: '1.25rem', fontSize: '0.9rem', lineHeight: 1.75,
                       color: BODY, fontFamily: SANS, maxWidth: '22rem' }}
            >
              Ob Vorsorge, ästhetische Behandlung oder Notfall — wir melden uns zeitnah
              mit einem Terminvorschlag.
            </motion.p>
            <motion.dl
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.28, ease }}
              style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
            >
              {[
                { dt: 'Öffnungszeiten', dd: HOURS.join(' · ') },
                { dt: 'Adresse',        dd: 'Musterstraße 27 · 20095 Hamburg' },
                { dt: 'Telefon',        dd: '040 / 123 45 67' },
                { dt: 'E-Mail',         dd: 'hallo@elb-dent.de' },
              ].map(({ dt, dd }) => (
                <div key={dt}>
                  <dt style={{ fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.22em',
                               textTransform: 'uppercase', color: GOLD, fontFamily: SANS }}>{dt}</dt>
                  <dd style={{ marginTop: '0.3rem', fontSize: '0.87rem', color: BODY,
                               fontFamily: SANS, lineHeight: 1.6 }}>{dd}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease }}>
            <form className="rounded-2xl p-7 sm:p-9" onSubmit={e => e.preventDefault()}
              style={{ background: CARD, border: `1px solid ${LINEW}`,
                       boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: INK, fontFamily: SERIF }}>Terminanfrage</p>
              <p style={{ marginTop: '0.2rem', fontSize: '0.7rem', color: MUTED, fontFamily: SANS }}>Demo-Formular · keine Datenübertragung</p>
              <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: '1.5rem' }}>
                <Field label="Name"><input type="text" placeholder="Ihr Name" style={iStyle} className="elb-input" /></Field>
                <Field label="Telefon"><input type="tel" placeholder="040 …" style={iStyle} className="elb-input" /></Field>
                <Field label="Wunschdatum"><input type="date" style={iStyle} className="elb-input" /></Field>
                <Field label="Anliegen">
                  <select style={{ ...iStyle, cursor: 'pointer' }} className="elb-input">
                    <option value="">Bitte wählen …</option>
                    {SERVICES.map(s => <option key={s.n} value={s.name}>{s.name}</option>)}
                  </select>
                </Field>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Field label="Nachricht">
                  <textarea rows={2} placeholder="Fragen, Hinweise oder Vorgeschichte …"
                    style={iStyle} className="elb-input" />
                </Field>
              </div>
              <button type="submit"
                className="mt-6 w-full rounded-full py-4 font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5"
                style={{ background: TEAL, fontSize: '0.78rem', letterSpacing: '0.14em',
                         fontFamily: SANS, boxShadow: `0 8px 28px rgba(26,120,150,0.35)` }}>
                Anfrage absenden
              </button>
              <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.74rem',
                          color: MUTED, fontFamily: SANS }}>
                oder anrufen:{' '}
                <Link href="tel:+494012345678"
                  style={{ color: TEAL, textDecorationLine: 'underline', textUnderlineOffset: 3 }}>040 / 123 45 67</Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: BG, borderTop: `1px solid ${LINEW}`, padding: '3rem 0' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div>
          <p style={{ fontSize: '1.1rem', fontWeight: 800, color: INK, fontFamily: SERIF }}>ElbDent</p>
          <p style={{ marginTop: '0.2rem', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em',
                      textTransform: 'uppercase', color: GOLD, fontFamily: SANS }}>Hamburg · Eppendorf</p>
        </div>
        <p style={{ fontSize: '0.72rem', color: MUTED, fontFamily: SANS }}>
          Demo-Konzept von Hamburg Websites · ohne erfundene Patientenergebnisse
        </p>
      </div>
    </footer>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function ZahnarztDemoPage() {
  return (
    <>
      <SEOHead
        title="Praxis ElbDent Hamburg — Zahnarzt mit Herz"
        description="Moderne Zahnarztpraxis ElbDent in Hamburg-Eppendorf: Prophylaxe, Implantologie, Zahnersatz, Ästhetik — jetzt Termin anfragen."
        path="/referenzen/zahnarzt-demo"
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: BG, color: BODY, fontFamily: SANS, scrollBehavior: 'smooth' }}>
        <ReferenceStickyBackButton />
        <TopNav />
        <main>
          <Hero />
          <Ticker />
          <Features />
          <Services />
          <Stats />
          <Team />
          <Gallery />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .elb-input::placeholder { color: ${MUTED}; }
        .elb-input:focus        { outline: none; border-color: ${TEAL}; box-shadow: 0 0 0 3px rgba(26,120,150,0.1); }
        .elb-input option       { background: ${CARD}; color: ${INK}; }
      `}</style>
    </>
  );
}
