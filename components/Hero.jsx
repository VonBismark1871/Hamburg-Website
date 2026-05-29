import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import AuroraBackground from './ui/AuroraBackground';
import Marquee from './ui/Marquee';
import CountUp from './ui/CountUp';
import { useParallax } from '../hooks/useParallax';

/* ── Chart path data ─────────────────────────────────────────────────── */
const C = {
  mit:  'M 0,145 C 11,143 45,136 67,131 C 89,126 111,120 133,113 C 155,106 178,98 200,90 C 222,82 245,74 267,65 C 289,57 311,48 333,39 C 355,31 378,23 400,14',
  ohne: 'M 0,145 C 22,144 45,143 67,142 C 89,141 111,140 133,139 C 155,138 178,137 200,136 C 222,135 245,134 267,133 C 289,132 311,130 333,129 C 355,127 378,125 400,122',
};
C.mitArea  = C.mit  + ' L 400,152 L 0,152 Z';
C.ohneArea = C.ohne + ' L 400,152 L 0,152 Z';
C.gapArea  = C.mit  +
  ' L 400,122 C 378,125 355,127 333,129 C 311,130 289,132 267,133' +
  ' C 245,134 222,135 200,136 C 178,137 155,138 133,139' +
  ' C 111,140 89,141 67,142 C 45,143 22,144 0,145 Z';

const X_LABELS = [
  { x: 0,   t: 'Start'   },
  { x: 133, t: '3 Mon.'  },
  { x: 267, t: '6 Mon.'  },
  { x: 400, t: '12 Mon.' },
];

/* ── Hero stats strip ────────────────────────────────────────────────── */
const heroStats = [
  { value: 24, suffix: 'h',    label: 'Antwort i. d. R.' },
  { value: 100, suffix: ' %',  label: 'Ihr Eigentum' },
  { static: 'Kostenlos',       label: 'Demo vorab' },
  { value: 7,  suffix: ' Tage', label: 'Erste Demo' },
];

const marqueeItems = [
  'Hamburg Websites',
  'Webdesign',
  'Local SEO',
  'Performance',
  'Automatisierung',
  'Conversion',
  'Relaunch',
];

const headlineLines = [
  [{ t: 'Websites,' }, { t: 'die' }],
  [{ t: 'Kunden', grad: true }, { t: 'gewinnen.' }],
];

const ease = [0.16, 1, 0.3, 1];

/* ── Kinetic headline ────────────────────────────────────────────────── */
function KineticHeadline({ reduce }) {
  if (reduce) {
    return (
      <h1 className="display-xl mt-7">
        Websites, die <span className="gradient-text">Kunden</span> gewinnen.
      </h1>
    );
  }
  let idx = 0;
  return (
    <h1 className="display-xl mt-7" aria-label="Websites, die Kunden gewinnen.">
      {headlineLines.map((line, li) => (
        <span key={li} className="block">
          {line.map((word) => {
            const delay = 0.15 + idx * 0.08;
            idx += 1;
            return (
              <span key={word.t} className="kinetic-word" aria-hidden="true">
                <motion.span
                  className={word.grad ? 'gradient-text' : undefined}
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay, ease }}
                >
                  {word.t}
                </motion.span>
                {' '}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ── Hero chart card ─────────────────────────────────────────────────── */
const KPI_CHIPS = [
  { value: 2.8, decimals: 1, suffix: '×',   label: 'Wachstum'     },
  { value: 40,  prefix: '+', suffix: ' %',  label: 'Umsatz'       },
  { value: 81,  suffix: ' %',               label: 'Online-Suche'  },
];

function HeroChart({ reduce }) {
  const d = (duration, delay = 0) =>
    reduce
      ? { duration: 0, delay: 0 }
      : { duration, ease, delay };

  return (
    <div
      style={{
        position: 'relative',
        isolation: 'isolate',
        background: 'rgba(15,12,24,0.9)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 20,
        padding: '20px 22px 16px',
        backdropFilter: 'blur(28px)',
        boxShadow:
          '0 32px 80px -18px rgba(124,58,237,0.35), 0 0 0 1px rgba(255,255,255,0.05) inset',
      }}
    >
      {/* Subtle grain / noise texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 20,
          zIndex: -1,
          opacity: 0.045,
          mixBlendMode: 'overlay',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='cn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cn)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(34,211,238,0.85)', marginBottom: 4 }}>
            Umsatz-Entwicklung
          </p>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>
            Lokale KMU · 12 Monate
          </p>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
          {[
            { label: 'Mit Website',  grad: true  },
            { label: 'Ohne Website', grad: false },
          ].map(({ label, grad }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 9, color: grad ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.22)' }}>{label}</span>
              <div style={{
                width: 18, height: 2, borderRadius: 1,
                background: grad
                  ? 'linear-gradient(90deg,#7C3AED,#22D3EE)'
                  : 'rgba(255,255,255,0.22)',
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* SVG area chart */}
      <svg viewBox="0 0 400 185" style={{ width: '100%', overflow: 'visible' }} aria-hidden="true">
        <defs>
          <linearGradient id="hc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="hc-gap" x1="0.3" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.12" />
          </linearGradient>
          <filter id="hc-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="hc-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {[50, 87, 124].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* X-axis baseline */}
        <line x1="0" y1="152" x2="400" y2="152" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

        {/* Opportunity gap zone */}
        <motion.path d={C.gapArea} fill="url(#hc-gap)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={d(1, 1.0)} />

        {/* Ohne Website area */}
        <motion.path d={C.ohneArea} fill="rgba(255,255,255,0.025)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={d(0.8, 0.4)} />

        {/* Mit Website area */}
        <motion.path d={C.mitArea} fill="url(#hc-area)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={d(0.8, 0.7)} />

        {/* Ohne Website line */}
        <motion.path d={C.ohne}
          stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"
          fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={d(1.4, 0.2)} />

        {/* Mit Website line – glowing gradient */}
        <motion.path d={C.mit}
          stroke="url(#hc-line)" strokeWidth="2.5"
          fill="none" strokeLinecap="round"
          filter="url(#hc-glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={d(1.9, 0.45)} />

        {/* "Ohne" endpoint dot */}
        <motion.circle cx="400" cy="122" r="3.5" fill="rgba(255,255,255,0.28)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={reduce ? {} : { delay: 1.65, type: 'spring', stiffness: 400, damping: 14 }} />

        {/* "Mit Website" endpoint — cyan glow dot */}
        <motion.circle cx="400" cy="14" r="5" fill="#22D3EE"
          filter="url(#hc-dot-glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={reduce ? {} : { delay: 2.2, type: 'spring', stiffness: 400, damping: 14 }} />

        {/* Pulse rings */}
        {!reduce && (
          <>
            <motion.circle cx="400" cy="14" r="5" fill="none"
              stroke="#22D3EE" strokeWidth="1.5"
              animate={{ r: [5, 16, 26], opacity: [0.7, 0.3, 0] }}
              transition={{ delay: 2.6, duration: 1.5, repeat: Infinity, repeatDelay: 2 }} />
            <motion.circle cx="400" cy="14" r="5" fill="none"
              stroke="#7C3AED" strokeWidth="1"
              animate={{ r: [5, 22, 34], opacity: [0.4, 0.15, 0] }}
              transition={{ delay: 2.9, duration: 1.8, repeat: Infinity, repeatDelay: 2 }} />
          </>
        )}

        {/* Annotation: gap bracket + badge */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={d(0.5, 2.3)}>
          <line x1="386" y1="17" x2="386" y2="119"
            stroke="rgba(34,211,238,0.32)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="382" y1="17"  x2="390" y2="17"  stroke="rgba(34,211,238,0.5)"  strokeWidth="1.5" />
          <line x1="382" y1="119" x2="390" y2="119" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <rect x="325" y="55" width="54" height="22" rx="7"
            fill="rgba(34,211,238,0.13)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
          <text x="352" y="69.5" textAnchor="middle" fill="#22D3EE"
            fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
            2,8×
          </text>
        </motion.g>

        {/* End labels */}
        <motion.text x="392" y="115" fill="rgba(255,255,255,0.22)" fontSize="8.5"
          fontFamily="system-ui" textAnchor="end"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={d(0.5, 1.8)}>
          Ohne
        </motion.text>
        <motion.text x="392" y="7" fill="#22D3EE" fontSize="8.5"
          fontFamily="system-ui" textAnchor="end" fontWeight="600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={d(0.5, 2.3)}>
          Mit Website
        </motion.text>

        {/* X-axis labels */}
        {X_LABELS.map(({ x, t }) => (
          <text key={t} x={x} y="172" fill="rgba(255,255,255,0.17)" fontSize="8.5"
            fontFamily="system-ui"
            textAnchor={x === 0 ? 'start' : x === 400 ? 'end' : 'middle'}>
            {t}
          </text>
        ))}
      </svg>

      {/* KPI chips */}
      <div style={{ display: 'flex', gap: 7, marginTop: 12 }}>
        {KPI_CHIPS.map((s) => (
          <div key={s.label} style={{
            flex: 1, borderRadius: 10, padding: '7px 8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            textAlign: 'center',
          }}>
            <p className="font-display gradient-text" style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>
              <CountUp
                value={s.value}
                decimals={s.decimals || 0}
                prefix={s.prefix || ''}
                suffix={s.suffix}
                duration={1.5}
              />
            </p>
            <p style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)', marginTop: 3, lineHeight: 1.2 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Google / Deloitte attribution + disclaimer */}
      <div style={{
        marginTop: 10, padding: '7px 10px', borderRadius: 8,
        background: 'rgba(34,211,238,0.05)',
        borderLeft: '2px solid rgba(34,211,238,0.35)',
      }}>
        <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>
          Laut Google &amp; Deloitte wachsen KMU mit Website 2,8× wahrscheinlicher –
          {' '}<span style={{ color: 'rgba(34,211,238,0.65)' }}>Connected Small Businesses Study</span>
          {' '}· <span style={{ color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Studien-Daten, kein Ergebnisversprechen</span>
        </p>
      </div>
    </div>
  );
}

/* ── Hero visual (right column) ──────────────────────────────────────── */
function HeroVisual({ reduce }) {
  const ref = useRef(null);
  const scrollY = useParallax(ref, 70);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.5 });

  const rotX = useTransform(smy, [-0.5, 0.5], [8, -8]);
  const rotY = useTransform(smx, [-0.5, 0.5], [-10, 10]);

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center lg:justify-end"
      style={{ perspective: 1100 }}
    >
      <motion.div
        style={{ maxWidth: 460, ...(reduce ? {} : { y: scrollY }) }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
        className="relative w-full"
      >
        {/* Chart card — tilts with mouse, floats on mount */}
        <motion.div
          style={reduce ? {} : { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HeroChart reduce={reduce} />
        </motion.div>

      </motion.div>
    </div>
  );
}

/* ── Hero section ────────────────────────────────────────────────────── */
export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  return (
    <section className="hero" aria-label="Startseite Hero">
      <AuroraBackground />

      <div className="hero-inner section-container grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="eyebrow-pill">
              <span
                style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--cyan)', boxShadow: '0 0 0 3px rgba(34,211,238,0.25)' }}
                aria-hidden="true"
              />
              Hamburg Websites · Lokal verankert, digital stark
            </span>
          </motion.div>

          <KineticHeadline reduce={reduce} />

          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p variants={item} className="lead mt-7 max-w-xl">
              Ich entwickle Websites für Hamburger Unternehmen – damit qualifizierte Anfragen
              eingehen, der erste Eindruck überzeugt und Ihr Unternehmen dort gefunden wird,
              wo Ihre Kunden suchen.
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
              {['Direkter Ansprechpartner', 'Transparente Preise', 'Kein Agentur-Aufschlag'].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
                    <circle cx="8" cy="8" r="7.5" stroke="var(--cyan)" strokeWidth="1.3" />
                    <path d="M5 8.2 7 10l4-4" stroke="var(--cyan-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <HeroVisual reduce={reduce} />
      </div>

      <div className="relative z-[2] border-y py-6" style={{ borderColor: 'var(--line)', background: 'rgba(8,7,13,0.4)' }}>
        <Marquee items={marqueeItems} duration={42} />
      </div>

      <div className="hero-stat-strip">
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <span className="hero-stat-value">
              {stat.static ? stat.static : <CountUp value={stat.value} suffix={stat.suffix || ''} />}
            </span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
