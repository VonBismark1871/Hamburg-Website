import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

/* ─── Palette ─────────────────────────────────────────────── */
const p = {
  bg:       '#F6FAFB',
  white:    '#FFFFFF',
  surface:  '#EDF3F6',
  ink:      '#0C1D26',
  body:     '#385060',
  muted:    '#648090',
  faint:    '#95AFBA',
  teal:     '#1A7896',
  tealDeep: '#145E76',
  tealDark: '#0D3D50',
  tealSoft: 'rgba(26,120,150,0.09)',
  tealLine: 'rgba(26,120,150,0.20)',
  line:     'rgba(12,29,38,0.08)',
  lineS:    'rgba(12,29,38,0.13)',
};

const font = "'DM Sans', system-ui, sans-serif";
const ease = [0.22, 1, 0.36, 1];

/* ─── Data ─────────────────────────────────────────────────── */
const navLinks = [
  { href: '#leistungen', label: 'Leistungen'  },
  { href: '#team',       label: 'Team'        },
  { href: '#praxis',     label: 'Praxis'      },
  { href: '#termin',     label: 'Termin'      },
];

const pillars = [
  { icon: '◎', head: 'Digitale Diagnostik',    text: 'Moderne Bildgebung für präzise Befunde — schonend und schnell.' },
  { icon: '◉', head: 'Neue Patienten willkommen', text: 'Unkomplizierte Aufnahme, klare Abläufe und kurze Wartezeiten.' },
  { icon: '◌', head: 'Verständliche Aufklärung', text: 'Wir erklären jeden Schritt — bevor wir ihn durchführen.' },
  { icon: '◍', head: 'Ruhige Atmosphäre',       text: 'Bewusst gestaltet für ein sicheres, entspanntes Praxiserlebnis.' },
];

const services = [
  { n: '01', name: 'Prophylaxe',                desc: 'Regelmäßige Vorsorge für gesunde Zähne und frühes Erkennen von Problemen.' },
  { n: '02', name: 'Professionelle Reinigung',  desc: 'Schonende Entfernung von Belägen, Verfärbungen und Zahnstein.' },
  { n: '03', name: 'Ästhetische Zahnheilkunde', desc: 'Bleaching und natürliche Korrekturen für ein harmonisches Lächeln.' },
  { n: '04', name: 'Zahnersatz',                desc: 'Individuelle Lösungen mit Fokus auf Funktion, Komfort und Qualität.' },
  { n: '05', name: 'Implantologie',             desc: 'Sorgfältig geplante Implantatversorgung mit persönlicher Begleitung.' },
  { n: '06', name: 'Kinderzahnheilkunde',       desc: 'Einfühlsame Behandlung mit altersgerechter, geduldiger Betreuung.' },
  { n: '07', name: 'Parodontologie',            desc: 'Gezielte Therapie bei Zahnfleischerkrankungen für stabile Mundgesundheit.' },
  { n: '08', name: 'Vorsorgeuntersuchung',      desc: 'Gründliche Kontrolltermine mit klaren Empfehlungen und Zeit für Fragen.' },
];

const team = [
  { name: 'Dr. David Becker',   role: 'Allgemeine Zahnheilkunde',       image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dr. Michael Hansen', role: 'Implantologie & Chirurgie',       image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lisa Krause',        role: 'Prophylaxe & Patientenbetreuung', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80' },
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80', alt: 'Helles Behandlungszimmer mit modernem Dentalstuhl', wide: true  },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',  alt: 'Beratungsgespräch vor der Behandlung',            wide: false },
  { src: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',  alt: 'Modernes Behandlungssetting',                    wide: false },
  { src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80', alt: 'Einladender Empfangsbereich der Praxis',          wide: true  },
];

const hours = [
  { day: 'Montag',     time: '08:00 – 18:00' },
  { day: 'Dienstag',   time: '08:00 – 19:00' },
  { day: 'Mittwoch',   time: '08:00 – 16:00' },
  { day: 'Donnerstag', time: '08:00 – 18:00' },
  { day: 'Freitag',    time: '08:00 – 14:00' },
];

/* ─── Helpers ───────────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 22, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Chip({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]"
      style={{ background: p.tealSoft, color: p.teal }}
    >
      {children}
    </span>
  );
}

/* ─── Nav ───────────────────────────────────────────────────── */
function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 52);
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
        background:    scrolled ? 'rgba(246,250,251,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)'             : 'none',
        borderBottom:  `1px solid ${scrolled ? p.line : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#start" className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight" style={{ color: p.ink }}>ElbDent</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: p.teal }}>
            Zahnarztpraxis · Hamburg
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: p.muted }}
              onMouseEnter={e => (e.currentTarget.style.color = p.ink)}
              onMouseLeave={e => (e.currentTarget.style.color = p.muted)}
            >{l.label}</Link>
          ))}
          <Link href="#termin"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            style={{ background: p.teal }}>
            Termin anfragen
          </Link>
        </div>

        <button type="button" onClick={() => setOpen(v => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{ border: `1px solid ${p.lineS}`, color: p.ink }}
          aria-label="Menü" aria-expanded={open}
        >
          <span>{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden" style={{ background: 'rgba(246,250,251,0.97)', borderTop: `1px solid ${p.line}` }}>
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium" style={{ color: p.ink }}>{l.label}</Link>
            ))}
            <Link href="#termin" onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              style={{ background: p.teal }}>Termin anfragen</Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="start" className="overflow-hidden" style={{ background: p.bg }}>
      <div className="mx-auto max-w-6xl px-5 pb-0 pt-28 sm:px-8 sm:pt-32">
        {/* Top: headline + image side by side */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}>
              <Chip>Zahnarztpraxis · Hamburg-Eppendorf</Chip>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-6 font-extrabold leading-[1.02] tracking-tight"
              style={{ color: p.ink, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              Ihre Zähne.<br />
              <span style={{ color: p.teal }}>Unser Fokus.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              className="mt-6 max-w-lg text-lg leading-relaxed"
              style={{ color: p.body }}
            >
              Moderne Zahnmedizin, verständliche Beratung und ruhige Praxisatmosphäre —
              in Hamburg für neue und langjährige Patientinnen und Patienten.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.56, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="#termin"
                className="rounded-full px-8 py-4 text-sm font-bold text-white uppercase tracking-wide transition hover:-translate-y-0.5"
                style={{ background: p.teal, letterSpacing: '0.08em' }}>
                Termin anfragen
              </Link>
              <Link href="#leistungen"
                className="rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-0.5"
                style={{ border: `1.5px solid ${p.lineS}`, color: p.ink, letterSpacing: '0.08em' }}>
                Leistungen
              </Link>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.figure
            initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="overflow-hidden rounded-[2rem]"
            style={{ boxShadow: `0 32px 80px -30px rgba(26,120,150,0.28), 0 0 0 1px ${p.tealLine}` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt="Freundlicher Behandlungsraum der Praxis ElbDent mit moderner Ausstattung"
              width={1400} height={1050} priority
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </motion.figure>
        </div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease }}
        className="mx-auto mt-10 max-w-6xl px-5 pb-16 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-3 rounded-2xl p-5 sm:grid-cols-4 sm:gap-4 sm:p-6"
          style={{ background: p.white, border: `1px solid ${p.line}`, boxShadow: '0 4px 24px rgba(12,29,38,0.05)' }}>
          {[
            { v: 'Neue Patienten', s: 'jederzeit willkommen' },
            { v: 'Digitale',       s: 'Röntgendiagnostik'    },
            { v: 'Mo–Fr',          s: 'geöffnet'             },
            { v: '040 / 123 45 67', s: 'direkt anrufen'      },
          ].map(({ v, s }) => (
            <div key={v} className="px-2 py-1">
              <p className="text-base font-extrabold tracking-tight" style={{ color: p.ink }}>{v}</p>
              <p className="mt-0.5 text-xs" style={{ color: p.muted }}>{s}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Pillars ───────────────────────────────────────────────── */
function Pillars() {
  return (
    <section style={{ background: p.tealDark }}>
      <div className="mx-auto grid max-w-6xl gap-px px-0 sm:grid-cols-2 lg:grid-cols-4"
        style={{ background: 'rgba(255,255,255,0.06)' }}>
        {pillars.map((item, i) => (
          <Reveal key={item.head} delay={i * 0.09}>
            <div className="px-7 py-9 sm:px-8" style={{ background: p.tealDark }}>
              <span className="text-2xl" style={{ color: p.teal }} aria-hidden="true">{item.icon}</span>
              <h3 className="mt-4 text-base font-bold leading-snug" style={{ color: '#E8F4F8' }}>{item.head}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(200,225,234,0.7)' }}>{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────── */
function Services() {
  return (
    <section id="leistungen" className="px-5 py-24 sm:px-8 sm:py-28" style={{ background: p.white, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Chip>Unser Angebot</Chip>
            <h2 className="mt-5 font-extrabold leading-tight tracking-tight"
              style={{ color: p.ink, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Leistungen
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed sm:text-right" style={{ color: p.muted }}>
            Klar strukturiert, patientenverständlich erklärt — von der Vorsorge bis zur Implantologie.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-2xl p-6"
                style={{ background: p.bg, border: `1px solid ${p.line}` }}
              >
                <span className="text-xs font-bold tabular-nums" style={{ color: p.teal }}>{s.n}</span>
                <h3 className="mt-3 text-base font-bold leading-snug" style={{ color: p.ink }}>{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{s.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team ──────────────────────────────────────────────────── */
function Team() {
  return (
    <section id="team" className="px-5 py-24 sm:px-8 sm:py-28" style={{ background: p.surface, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chip>Ihr Team</Chip>
          <h2 className="mt-5 font-extrabold tracking-tight"
            style={{ color: p.ink, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Persönliche Betreuung von Anfang an
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: p.body }}>
            Drei Ansprechpartner, klare Zuständigkeiten und echte Kontinuität in der Behandlung.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.11}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="group overflow-hidden rounded-[1.8rem]"
                style={{ background: p.white, border: `1px solid ${p.line}`, boxShadow: '0 16px 40px rgba(12,29,38,0.07)' }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={m.image} alt={`${m.name} – ${m.role}`} fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold" style={{ color: p.ink }}>{m.name}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: p.teal }}>{m.role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ───────────────────────────────────────────────── */
function Gallery() {
  return (
    <section id="praxis" className="px-5 py-24 sm:px-8 sm:py-28" style={{ background: p.white, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Chip>Einblick</Chip>
            <h2 className="mt-5 font-extrabold tracking-tight"
              style={{ color: p.ink, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ein Blick in unsere Praxis
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed sm:text-right" style={{ color: p.muted }}>
            Helle Räume, moderne Ausstattung und eine bewusst ruhige Atmosphäre.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08} className={img.wide ? 'col-span-2' : ''}>
              <figure className="group h-full overflow-hidden rounded-[1.4rem]"
                style={{ border: `1px solid ${p.line}` }}>
                <div className={`relative ${img.wide ? 'h-[240px]' : 'h-[220px]'}`}>
                  <Image src={img.src} alt={img.alt} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Booking ───────────────────────────────────────────────── */
function Booking() {
  const iStyle = {
    width: '100%', borderRadius: '0.75rem',
    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
    color: '#E8F4F8', padding: '0.75rem 1rem', fontSize: '0.9rem', fontFamily: font,
  };

  return (
    <section id="termin" className="px-5 py-24 sm:px-8 sm:py-28" style={{ background: p.tealDark, scrollMarginTop: 80 }}>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ background: 'rgba(26,120,150,0.35)', color: '#A8D8E8' }}>
              Jetzt anfragen
            </span>
            <h2 className="mt-6 font-extrabold leading-tight tracking-tight"
              style={{ color: '#F0F8FA', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Termin anfragen
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: 'rgba(200,225,234,0.8)' }}>
              Ob Vorsorge, Reinigung oder individuelle Behandlung — wir melden uns zeitnah
              mit einem Terminvorschlag.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-5">
              {[
                { dt: 'Öffnungszeiten', dd: hours.map(h => `${h.day}: ${h.time}`).join(' · ') },
                { dt: 'Adresse',        dd: 'Musterstraße 27 · 20095 Hamburg' },
                { dt: 'Telefon',        dd: '040 / 123 45 67' },
                { dt: 'E-Mail',         dd: 'kontakt@elb-dent.de' },
              ].map(({ dt, dd }) => (
                <div key={dt}>
                  <dt className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#6BBFD4' }}>{dt}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed" style={{ color: 'rgba(200,225,234,0.75)' }}>{dd}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form className="rounded-[1.8rem] p-7 sm:p-9" onSubmit={e => e.preventDefault()}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
            <p className="text-xl font-bold" style={{ color: '#E8F4F8' }}>Terminanfrage</p>
            <p className="mt-1 text-xs" style={{ color: 'rgba(200,225,234,0.5)' }}>Demo-Formular · ohne Datenübertragung</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <TField label="Name"><input type="text" placeholder="Ihr Name" style={iStyle} className="dental-input" /></TField>
              <TField label="Telefon"><input type="tel" placeholder="040 …" style={iStyle} className="dental-input" /></TField>
              <TField label="Wunschtermin"><input type="date" style={iStyle} className="dental-input" /></TField>
              <TField label="Anliegen">
                <select style={{ ...iStyle, cursor: 'pointer' }} className="dental-input">
                  <option value="">Bitte wählen …</option>
                  {services.map(s => <option key={s.n} value={s.name}>{s.name}</option>)}
                </select>
              </TField>
            </div>
            <div className="mt-4">
              <TField label="Nachricht"><textarea rows={2} placeholder="Fragen, Hinweise oder Vorgeschichte …" style={iStyle} className="dental-input" /></TField>
            </div>

            <button type="submit"
              className="mt-6 w-full rounded-full py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
              style={{ background: p.teal, letterSpacing: '0.1em' }}>
              Anfrage absenden
            </button>
            <p className="mt-4 text-center text-xs" style={{ color: 'rgba(200,225,234,0.45)' }}>
              Oder anrufen:{' '}
              <Link href="tel:+494012345678" className="underline underline-offset-4" style={{ color: '#6BBFD4' }}>040 / 123 45 67</Link>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function TField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em]"
        style={{ color: 'rgba(200,225,234,0.55)' }}>{label}</span>
      {children}
    </label>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
function Foot() {
  return (
    <footer className="px-5 py-12 sm:px-8" style={{ background: p.bg, borderTop: `1px solid ${p.line}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-base font-bold" style={{ color: p.ink }}>Praxis ElbDent</p>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: p.teal }}>Hamburg · Eppendorf</p>
        </div>
        <p className="text-xs" style={{ color: p.faint }}>Demo-Konzept von Hamburg Websites · ohne erfundene Kundenergebnisse</p>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function ZahnarztDemoPage() {
  return (
    <>
      <SEOHead
        title="Praxis ElbDent Hamburg"
        description="Moderne Zahnarztpraxis ElbDent in Hamburg-Eppendorf: Prophylaxe, Implantologie, Zahnersatz, ästhetische Zahnheilkunde und Terminanfrage."
        path="/referenzen/zahnarzt-demo"
      />

      <div style={{ background: p.bg, color: p.body, fontFamily: font, scrollBehavior: 'smooth' }}>
        <ReferenceStickyBackButton />
        <TopNav />
        <main>
          <Hero />
          <Pillars />
          <Services />
          <Team />
          <Gallery />
          <Booking />
        </main>
        <Foot />
      </div>

      <style jsx>{`
        .dental-input::placeholder { color: rgba(200,225,234,0.35); }
        .dental-input:focus        { outline: none; border-color: rgba(26,120,150,0.6); }
        .dental-input option       { background: ${p.tealDark}; color: #E8F4F8; }
      `}</style>
    </>
  );
}
