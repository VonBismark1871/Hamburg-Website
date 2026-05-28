import { useRef, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import AuroraBackground from './ui/AuroraBackground';
import Marquee from './ui/Marquee';
import CountUp from './ui/CountUp';
import { useParallax } from '../hooks/useParallax';

const heroStats = [
  { value: 24, suffix: 'h', label: 'Antwort i. d. R.' },
  { value: 100, suffix: ' %', label: 'Ihr Eigentum' },
  { static: 'Kostenlos', label: 'Demo vorab' },
  { value: 7, suffix: ' Tage', label: 'Erste Demo' }
];

const demoPreviews = [
  { img: '/images/preview-restaurant.jpg', label: 'Hafenblick Bistro Hamburg',    url: 'hafenblick-bistro.de'  },
  { img: '/images/preview-physio.jpg',     label: 'Physiotherapie Hamburg-Nord',  url: 'physio-hamburg-nord.de' },
  { img: '/images/preview-immobilien.jpg', label: 'ImmobilienHH Premium',         url: 'immobilienhh.de'       },
];

const marqueeItems = [
  'Hamburg Websites',
  'Webdesign',
  'Local SEO',
  'Performance',
  'Automatisierung',
  'Conversion',
  'Relaunch'
];

const headlineLines = [
  [{ t: 'Websites,' }, { t: 'die' }],
  [{ t: 'Kunden', grad: true }, { t: 'gewinnen.' }]
];

const ease = [0.16, 1, 0.3, 1];

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

function HeroVisual({ reduce }) {
  const ref = useRef(null);
  const scrollY = useParallax(ref, 70);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % demoPreviews.length), 3500);
    return () => clearInterval(t);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.5 });

  const rotX = useTransform(smy, [-0.5, 0.5], [8, -8]);
  const rotY = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const layerFarX = useTransform(smx, [-0.5, 0.5], [22, -22]);
  const layerFarY = useTransform(smy, [-0.5, 0.5], [16, -16]);
  const layerNearX = useTransform(smx, [-0.5, 0.5], [-30, 30]);
  const layerNearY = useTransform(smy, [-0.5, 0.5], [-22, 22]);

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

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
        {/* Floating accent — far depth */}
        <motion.div
          className="absolute -left-6 top-10 z-0 hidden sm:block"
          style={reduce ? {} : { x: layerFarX, y: layerFarY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div
            className="rounded-2xl px-4 py-3 backdrop-blur"
            style={{ background: 'rgba(17,14,26,0.8)', border: '1px solid var(--line-2)', boxShadow: 'var(--shadow-card)' }}
          >
            <p className="text-[11px] font-semibold" style={{ color: 'var(--cyan-2)' }}>Live in 7 Tagen</p>
            <p className="mt-1 text-[10px]" style={{ color: 'var(--muted)' }}>Demo → Freigabe → Online</p>
          </div>
        </motion.div>

        {/* Browser mock — mid depth, tilts to cursor */}
        <motion.div
          className="hero-mock relative z-10"
          style={reduce ? {} : { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero-mock-bar">
            <span className="hero-mock-dot" style={{ background: '#ff5f57' }} />
            <span className="hero-mock-dot" style={{ background: '#febc2e' }} />
            <span className="hero-mock-dot" style={{ background: '#28c840' }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                className="ml-3 truncate rounded-md px-3 py-1 text-[11px] font-medium"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--muted)', border: '1px solid var(--line)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {demoPreviews[active].url}
              </motion.span>
            </AnimatePresence>
          </div>

          <div style={{ position: 'relative', lineHeight: 0, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={demoPreviews[active].img}
                alt={demoPreviews[active].label}
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>

            {/* Gradient fade at the bottom so the screenshot blends into the card */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: 'linear-gradient(to bottom, transparent, #15111f)' }} aria-hidden="true" />

            {/* Dot switcher */}
            <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 2 }}>
              {demoPreviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={demoPreviews[i].label}
                  style={{
                    width: i === active ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? 'var(--cyan-2)' : 'rgba(255,255,255,0.28)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.3s ease, background 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating metric — near depth */}
        <motion.div
          className="absolute -right-4 bottom-8 z-20 hidden sm:block"
          style={reduce ? {} : { x: layerNearX, y: layerNearY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur"
            style={{ background: 'rgba(17,14,26,0.85)', border: '1px solid rgba(34,211,238,0.3)', boxShadow: '0 18px 50px -18px rgba(34,211,238,0.35)' }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: 'rgba(34,211,238,0.14)', color: 'var(--cyan-2)' }}
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 9l3-3 3 3 6-6" />
                <path d="M14 3h-3M14 3v3" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] font-bold" style={{ color: 'var(--text)' }}>Auf Anfragen gebaut</p>
              <p className="text-[10px]" style={{ color: 'var(--muted)' }}>Klare Nutzerführung</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } }
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
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
