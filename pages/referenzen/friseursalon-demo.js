import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

/* ─── Palette ─────────────────────────────────────────────────────────── */
const p = {
  bg:         '#0B0908',
  panel:      '#131110',
  card:       '#1A1614',
  cream:      '#F0E9DF',
  muted:      '#9A8D84',
  faint:      '#6B6058',
  blush:      '#C4897D',
  blushBright:'#E5B5A8',
  line:       'rgba(240,233,224,0.10)',
  lineS:      'rgba(240,233,224,0.18)',
};

const serif  = "'Cormorant Garamond', Georgia, serif";
const body   = "'DM Sans', system-ui, sans-serif";
const ease   = [0.22, 1, 0.36, 1];

/* ─── Data ─────────────────────────────────────────────────────────────── */
const navLinks = [
  { href: '#studio',      label: 'Studio'      },
  { href: '#leistungen',  label: 'Leistungen'  },
  { href: '#lookbook',    label: 'Lookbook'    },
  { href: '#team',        label: 'Team'        },
  { href: '#termin',      label: 'Termin'      },
];

const services = [
  { name: 'Damenhaarschnitt',    sub: 'Präziser Schnitt, Typberatung, Finish',                       price: 'ab 48 €' },
  { name: 'Herrenhaarschnitt',   sub: 'Moderne Looks, saubere Konturen, alltagstaugliches Styling',  price: 'ab 29 €' },
  { name: 'Föhnen & Styling',    sub: 'Volumen, Bewegung und Halt — für Alltag und Events',           price: 'ab 35 €' },
  { name: 'Coloration',          sub: 'Schonende Farbbehandlung mit natürlichem Glanz',              price: 'ab 75 €' },
  { name: 'Balayage / Strähnen', sub: 'Sanfte Übergänge und Highlights für einen lebendigen Look',   price: 'ab 120 €'},
  { name: 'Pflege & Beratung',   sub: 'Tiefenpflege und Empfehlungen für gesundes Haar zuhause',    price: 'ab 25 €' },
];

const lookbook = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80', alt: 'Fertiges Balayage-Ergebnis – glänzendes, weiches Haar mit natürlichem Farbverlauf', tall: true  },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80', alt: 'Moderner Kurzhaarschnitt mit präzisen Konturen',                                    tall: false },
  { src: 'https://images.unsplash.com/photo-1522337094846-8a818e733e2f?auto=format&fit=crop&w=1000&q=80', alt: 'Farbbehandlung – satte, harmonische Nuancen als Salonergebnis',                      tall: false },
  { src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80', alt: 'Luftiger Stufenschnitt mit Volumen und Bewegung',                                    tall: true  },
];

const team = [
  { name: 'Anna',  role: 'Schnitt & Styling',    note: 'Lieblingslook: luftige Stufenschnitte mit natürlicher Bewegung.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { name: 'Marco', role: 'Coloration & Balayage', note: 'Spezialist für softe Übergänge und blonde Nuancen ohne harte Kanten.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lisa',  role: 'Beratung & Pflege',     note: 'Findet alltagstaugliche Routinen, die wirklich zum Leben passen.', image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80' },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 24, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }) {
  return (
    <span
      className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.38em]"
      style={{ color: p.blush }}
    >
      {children}
    </span>
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */
function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background:    scrolled ? 'rgba(11,9,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)'        : 'none',
        borderBottom:  `1px solid ${scrolled ? p.line : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#start" className="flex flex-col leading-none">
          <span style={{ fontFamily: serif, fontSize: '1.45rem', color: p.cream, fontWeight: 600, letterSpacing: '-0.01em' }}>
            Elbhaar Studio
          </span>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.36em', color: p.blush, textTransform: 'uppercase', marginTop: 1 }}>
            Hamburg · Eimsbüttel
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm transition-colors"
              style={{ color: p.muted }}
              onMouseEnter={e => (e.currentTarget.style.color = p.cream)}
              onMouseLeave={e => (e.currentTarget.style.color = p.muted)}
            >{l.label}</Link>
          ))}
          <Link href="#termin"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{ border: `1px solid ${p.blush}`, color: p.blush }}
            onMouseEnter={e => { e.currentTarget.style.background = p.blush; e.currentTarget.style.color = p.bg; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = p.blush; }}
          >
            Termin buchen
          </Link>
        </div>

        <button type="button" onClick={() => setOpen(v => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{ border: `1px solid ${p.lineS}`, color: p.cream }}
          aria-label="Menü" aria-expanded={open}
        >
          <span className="text-base">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden" style={{ background: 'rgba(11,9,8,0.97)', borderTop: `1px solid ${p.line}` }}>
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm" style={{ color: p.cream }}>{l.label}</Link>
            ))}
            <Link href="#termin" onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold"
              style={{ border: `1px solid ${p.blush}`, color: p.blush }}>
              Termin buchen
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="start" className="relative grid min-h-[100svh] lg:grid-cols-[1fr_1fr]" style={{ minHeight: 640 }}>
      {/* Left — text */}
      <div className="flex flex-col justify-end px-7 pb-14 pt-32 sm:px-12 sm:pb-16 lg:justify-center lg:pt-20">
        <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}>
          <Label>Friseursalon · Hamburg</Label>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="mt-5 leading-[0.95]"
          style={{ fontFamily: serif, color: p.cream, fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 600 }}
        >
          Dein Haar.<br />
          <span style={{ fontStyle: 'italic', color: p.blushBright }}>Dein Look.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.52, ease }}
          className="mt-7 max-w-md text-base leading-relaxed sm:text-lg"
          style={{ color: p.muted }}
        >
          Individuelle Haarschnitte, moderne Farbtechniken und echte Beratung — in unserem Studio
          in Hamburg-Eimsbüttel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link href="#termin"
            className="rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider transition hover:-translate-y-0.5"
            style={{ background: p.blush, color: p.bg, letterSpacing: '0.1em' }}>
            Termin buchen
          </Link>
          <Link href="#leistungen"
            className="rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider transition hover:-translate-y-0.5"
            style={{ border: `1px solid ${p.lineS}`, color: p.cream, letterSpacing: '0.1em' }}>
            Leistungen
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 hidden items-center gap-4 lg:flex"
        >
          <span style={{ width: 32, height: 1, background: p.lineS }} />
          <span className="text-xs uppercase" style={{ color: p.faint, letterSpacing: '0.28em' }}>
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Right — image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="relative lg:sticky lg:top-0 lg:h-screen"
        style={{ minHeight: 320 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80"
          alt="Stylistin beim professionellen Damenhaarschnitt im Elbhaar Studio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-[#0B0908]/60 lg:to-transparent" />

        {/* Floating detail */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease }}
          className="absolute bottom-6 right-6 rounded-2xl px-5 py-4 text-right"
          style={{ background: 'rgba(11,9,8,0.72)', border: `1px solid ${p.lineS}`, backdropFilter: 'blur(12px)' }}
        >
          <p className="text-xs uppercase" style={{ color: p.blush, letterSpacing: '0.22em' }}>Schnitt & Coloration</p>
          <p className="mt-1 text-sm font-medium" style={{ color: p.cream }}>Elbhaar Studio · Hamburg</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Studio strip ──────────────────────────────────────────────────────── */
function StudioStrip() {
  return (
    <section id="studio" className="px-7 py-28 sm:px-12 sm:py-36" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-4xl">
        <Reveal y={20} className="text-center">
          <p
            className="mx-auto leading-[1.15]"
            style={{ fontFamily: serif, fontStyle: 'italic', color: p.cream, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500 }}
          >
            „Haarschnitt ist nicht das Ziel.<br />
            <span style={{ color: p.blushBright }}>Der richtige Look</span> ist das Ziel."
          </p>
          <p className="mt-8 text-xs uppercase" style={{ color: p.faint, letterSpacing: '0.32em' }}>Elbhaar Studio · seit 2014</p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3" style={{ background: p.line }}>
          {[
            { n: '01', h: 'Individuelle Analyse', t: 'Haarstruktur, Gesichtsform und persönliche Wünsche fließen in jeden Termin ein.' },
            { n: '02', h: 'Moderne Techniken',    t: 'Balayage, Coloration und Schnitt auf aktuellem Stand der Friseurtechnik.' },
            { n: '03', h: 'Angenehme Atmosphäre', t: 'Ruhiger Salon, persönliche Betreuung, genug Zeit für jeden Termin.' },
          ].map((item, i) => (
            <Reveal key={item.n} delay={i * 0.1}>
              <div className="h-full p-7" style={{ background: p.panel }}>
                <span style={{ fontFamily: serif, fontSize: '3rem', color: `rgba(196,137,125,0.25)`, fontWeight: 700, lineHeight: 1 }}>
                  {item.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold" style={{ color: p.cream }}>{item.h}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: p.muted }}>{item.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="leistungen" className="px-7 py-24 sm:px-12 sm:py-28" style={{ background: p.panel, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Label>Leistungen & Preise</Label>
            <h2 className="mt-4 text-4xl sm:text-5xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>
              Was wir anbieten
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed sm:text-right" style={{ color: p.muted }}>
            Transparente Richtwerte. Abgestimmt auf Haarstruktur, Pflegezustand und Wunschlook.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y" style={{ borderTop: `1px solid ${p.line}`, borderBottom: `1px solid ${p.line}` }}>
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06} className="divide-transparent">
              <motion.li
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease }}
                className="group flex cursor-default items-center gap-4 py-6"
                style={{ borderColor: p.line }}
              >
                <span
                  className="w-7 text-xs font-semibold tabular-nums transition-colors"
                  style={{ color: p.faint }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 items-baseline gap-3">
                  <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: p.cream }}>
                    {s.name}
                  </span>
                  <span className="hidden flex-1 translate-y-[-2px] sm:block" style={{ borderBottom: `1px dotted ${p.lineS}` }} aria-hidden="true" />
                </div>
                <div className="text-right">
                  <span className="text-base font-semibold" style={{ color: p.blushBright }}>{s.price}</span>
                  <p className="mt-0.5 hidden text-xs sm:block" style={{ color: p.faint }}>{s.sub}</p>
                </div>
              </motion.li>
            </Reveal>
          ))}
        </ul>
        <p className="mt-5 text-xs" style={{ color: p.faint }}>Endpreise werden individuell nach Haarstruktur und -länge besprochen.</p>
      </div>
    </section>
  );
}

/* ─── Lookbook ──────────────────────────────────────────────────────────── */
function Lookbook() {
  return (
    <section id="lookbook" className="px-7 py-24 sm:px-12 sm:py-28" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Label>Lookbook</Label>
          <h2 className="mt-4 text-4xl sm:text-5xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>
            Unsere Arbeiten
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: p.muted }}>
            Schnitte, Colorationen und Styling — direkt aus dem Salonalltag des Elbhaar Studios.
          </p>
        </Reveal>

        {/* Asymmetric 2-col grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {lookbook.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.09}
              className={img.tall ? 'lg:row-span-2' : ''}
            >
              <figure className="group h-full overflow-hidden rounded-[1.4rem]">
                <div className={`relative ${img.tall ? 'h-[340px] lg:h-full' : 'h-[200px] lg:h-[244px]'}`}>
                  <Image src={img.src} alt={img.alt} fill
                    className="object-cover transition-transform duration-[1100ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team ──────────────────────────────────────────────────────────────── */
function Team() {
  return (
    <section id="team" className="px-7 py-24 sm:px-12 sm:py-28" style={{ background: p.panel, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Label>Das Team</Label>
          <h2 className="mt-4 text-4xl sm:text-5xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>
            Drei Gesichter, eine Vision
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: p.muted }}>
            Kurze Wege, ehrliche Empfehlungen — bei uns kennt man sich beim Namen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="group relative overflow-hidden rounded-[1.8rem]"
                style={{ border: `1px solid ${p.line}` }}
              >
                <div className="relative h-[380px] sm:h-[440px]">
                  <Image src={member.image} alt={`${member.name} – ${member.role}`} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase" style={{ color: p.blush, letterSpacing: '0.24em' }}>{member.role}</p>
                  <h3 className="mt-1 text-2xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>{member.name}</h3>
                  <p
                    className="mt-2 text-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ color: p.muted }}
                  >{member.note}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Booking ───────────────────────────────────────────────────────────── */
function Booking() {
  const inputStyle = {
    width: '100%', borderRadius: '0.75rem',
    background: p.bg, border: `1px solid ${p.line}`,
    color: p.cream, padding: '0.75rem 1rem',
    fontSize: '0.9rem', fontFamily: body,
  };

  return (
    <section id="termin" className="px-7 py-24 sm:px-12 sm:py-32" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left info */}
        <div>
          <Reveal>
            <Label>Jetzt anfragen</Label>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>
              Reservieren Sie Ihren Termin
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: p.muted }}>
              Ob neuer Haarschnitt, Coloration oder persönliche Beratung — wir halten Zeit für Sie frei.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-6">
              {[
                { dt: 'Öffnungszeiten', dd: 'Mo–Fr · 09:00–19:00\nSamstag · 09:00–15:00' },
                { dt: 'Adresse',        dd: 'Isestraße 44 · 20144 Hamburg' },
                { dt: 'Kontakt',        dd: '040 / 389 74 112\ntermin@elbhaar-studio.de' },
              ].map(({ dt, dd }) => (
                <div key={dt}>
                  <dt className="text-xs uppercase" style={{ color: p.blush, letterSpacing: '0.24em' }}>{dt}</dt>
                  <dd className="mt-2 text-sm leading-7" style={{ color: p.muted }}>
                    {dd.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right form */}
        <Reveal delay={0.15}>
          <form
            className="rounded-[1.8rem] p-7 sm:p-9"
            style={{ background: p.card, border: `1px solid ${p.line}` }}
            onSubmit={e => e.preventDefault()}
          >
            <p className="text-xl" style={{ fontFamily: serif, color: p.cream, fontWeight: 600 }}>
              Terminanfrage
            </p>
            <p className="mt-1 text-xs" style={{ color: p.faint }}>Demo-Formular · ohne Datenübertragung</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <BField label="Name">
                <input type="text" placeholder="Ihr Name" style={inputStyle} className="salon-input" />
              </BField>
              <BField label="Leistung">
                <select style={{ ...inputStyle, cursor: 'pointer' }} className="salon-input">
                  <option value="">Bitte wählen …</option>
                  {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </BField>
              <BField label="Wunschdatum">
                <input type="date" style={inputStyle} className="salon-input" />
              </BField>
              <BField label="Uhrzeit">
                <input type="time" defaultValue="10:00" style={inputStyle} className="salon-input" />
              </BField>
            </div>
            <div className="mt-4">
              <BField label="Anmerkung">
                <textarea rows={2} placeholder="Haarlänge, Wunschlook, Allergien …" style={inputStyle} className="salon-input" />
              </BField>
            </div>

            <button type="submit"
              className="mt-6 w-full rounded-full py-4 text-sm font-semibold uppercase transition hover:-translate-y-0.5"
              style={{ background: p.blush, color: p.bg, letterSpacing: '0.12em' }}>
              Termin anfragen
            </button>
            <p className="mt-4 text-center text-xs" style={{ color: p.faint }}>
              Telefonisch:{' '}
              <Link href="tel:+494038974112" className="underline underline-offset-4" style={{ color: p.blush }}>
                040 / 389 74 112
              </Link>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function BField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase" style={{ color: p.faint, letterSpacing: '0.14em' }}>{label}</span>
      {children}
    </label>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function Foot() {
  return (
    <footer className="px-7 py-12 sm:px-12" style={{ borderTop: `1px solid ${p.line}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p style={{ fontFamily: serif, fontSize: '1.2rem', color: p.cream }}>Elbhaar Studio</p>
          <p className="mt-1 text-xs uppercase" style={{ color: p.blush, letterSpacing: '0.22em' }}>Hamburg · Eimsbüttel</p>
        </div>
        <p className="text-xs" style={{ color: p.faint }}>Demo-Konzept von Hamburg Websites · ohne erfundene Kundenergebnisse</p>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function FriseursalonDemoPage() {
  return (
    <>
      <SEOHead
        title="Elbhaar Studio Hamburg"
        description="Moderner Friseursalon in Hamburg-Eimsbüttel: Haarschnitte, Coloration, Balayage, Team und Terminbuchung in einem editorial gestalteten Studio."
        path="/referenzen/friseursalon-demo"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ background: p.bg, color: p.cream, fontFamily: body, scrollBehavior: 'smooth' }}>
        <ReferenceStickyBackButton />
        <TopNav />
        <main>
          <Hero />
          <StudioStrip />
          <Services />
          <Lookbook />
          <Team />
          <Booking />
        </main>
        <Foot />
      </div>

      <style jsx>{`
        .salon-input::placeholder { color: ${p.faint}; }
        .salon-input:focus        { outline: none; border-color: ${p.blush}; }
        .salon-input option       { background: ${p.card}; color: ${p.cream}; }
      `}</style>
    </>
  );
}
