import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';

// Palette: deep forest #0C2318 · mint #32B877 · amber #E87A38 · bg #F4FAF6

const conditionData = [
  {
    id: 'ruecken',
    label: 'Rücken',
    headline: 'Rückenschmerzen gezielt behandeln',
    sub: 'Von akuten Verspannungen bis zum Bandscheibenvorfall — mit manualtherapeutischen Techniken und einem individuellen Übungsprogramm.',
    treatments: ['Manuelle Therapie', 'Krankengymnastik', 'Haltungstraining', 'Elektrotherapie'],
    duration: '6–12 Einheiten',
    img: '/images/physio/treatment2.jpg',
    href: '/referenzen/physio-demo/rueckenschmerzen',
  },
  {
    id: 'nacken',
    label: 'Nacken & Schulter',
    headline: 'Nackenverspannungen & HWS-Beschwerden lösen',
    sub: 'Muskuläre Spannungen, Schulterprobleme und Kopfschmerzen durch HWS systematisch angehen — mit Tiefenentspannung und gezielter Kräftigung.',
    treatments: ['Manuelle Therapie', 'Klassische Massage', 'Bewegungstherapie', 'Heimübungen'],
    duration: '4–8 Einheiten',
    img: '/images/physio/treatment1.jpg',
    href: '/referenzen/physio-demo/leistungen',
  },
  {
    id: 'sport',
    label: 'Sportverletzungen',
    headline: 'Zurück in Bewegung',
    sub: 'Zerrungen, Überlastungen und Gelenkbeschwerden — sportgerechte Rehabilitation für Hobby- und Leistungssportler mit klarem Stufenplan.',
    treatments: ['Sportphysiotherapie', 'Lymphdrainage', 'Funktionstraining', 'Tape & Bandagen'],
    duration: '4–10 Einheiten',
    img: '/images/physio/treatment3.jpg',
    href: '/referenzen/physio-demo/leistungen',
  },
  {
    id: 'reha',
    label: 'Post-OP Reha',
    headline: 'Sicher in den Alltag zurück',
    sub: 'Nach Operationen an Knie, Hüfte oder Wirbelsäule: strukturierte Mobilisation mit messbaren Meilensteinen — auf Rezept und als Selbstzahler.',
    treatments: ['Physio auf Rezept', 'Mobilisation', 'Kräftigung', 'Gangschulung'],
    duration: '12–24 Einheiten',
    img: '/images/physio/treatment4.jpg',
    href: '/referenzen/physio-demo/leistungen',
  },
];

const services = [
  { title: 'Krankengymnastik', desc: 'Beweglichkeit, Stabilität und Koordination mit individuellem Therapieplan — auf Rezept und als Selbstzahler möglich.' },
  { title: 'Manuelle Therapie', desc: 'Gezielte Handgriffe zur Gelenkentlastung und natürlichen Bewegungsfreiheit — anerkannte Kassenleistung.' },
  { title: 'Klassische Massage', desc: 'Verspannungslösung und Regenerationsförderung bei körperlicher Belastung und Stress.' },
  { title: 'Lymphdrainage', desc: 'Sanfte Förderung des Lymphflusses nach Verletzungen, Operationen oder bei Ödemneigung.' },
  { title: 'Sportphysiotherapie', desc: 'Funktionelle Behandlung für aktive Menschen — von Hobbyläufern bis Leistungssportlern.' },
  { title: 'Rehabilitation', desc: 'Strukturierte Begleitung nach Eingriffen oder Verletzungen mit messbaren Fortschritten.' },
  { title: 'Haltungstraining', desc: 'Analyse und Korrektur von Bewegungsmustern für nachhaltige Entlastung im Berufsalltag.' },
  { title: 'Prävention', desc: 'Vorbeugende Konzepte zur Rückfallreduktion und langfristigen Stabilisierung.' },
];

const team = [
  { name: 'Maria Hoffmann', role: 'Leitende Physiotherapeutin', spec: 'Manuelle Therapie · Sportreha', img: '/images/physio/portrait-maria.jpg' },
  { name: 'Stefan Bauer', role: 'Physiotherapeut', spec: 'Rücken & Wirbelsäule · Prävention', img: '/images/physio/portrait-stefan.jpg' },
  { name: 'Jana Richter', role: 'Physiotherapeutin', spec: 'Post-OP Reha · Lymphdrainage', img: '/images/physio/portrait-jana.jpg' },
];

const navLinks = [
  { href: '/referenzen/physio-demo', label: 'Start' },
  { href: '/referenzen/physio-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/physio-demo/rueckenschmerzen', label: 'Rücken' },
  { href: '/referenzen/physio-demo/kontakt', label: 'Kontakt' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

export default function PhysioDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCondition, setActiveCondition] = useState('ruecken');
  const [openService, setOpenService] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const condition = conditionData.find((c) => c.id === activeCondition);

  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(50,184,119,0.25)',
    borderRadius: 10,
    padding: '13px 16px',
    fontSize: 14,
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  return (
    <>
      <SEOHead
        title="Elbbalance Physiotherapie Hamburg — Manuelle Therapie & Rehabilitation"
        description="Individuelle Physiotherapie in Hamburg-Eimsbüttel. Manuelle Therapie, Krankengymnastik, Sportreha und Post-OP Rehabilitation für nachhaltige Genesung."
        path="/referenzen/physio-demo"
        noIndex
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#F4FAF6', color: '#0A1B11' }}>

        {/* ── TOP NAV ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(10,27,17,0.97)' : '#0C2318',
          borderBottom: scrolled ? '1px solid rgba(50,184,119,0.18)' : '1px solid transparent',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#32B877' }} />
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 17, letterSpacing: '-0.015em' }}>Elbbalance</span>
              <span style={{ color: '#6DD4A4', fontWeight: 400, fontSize: 14, marginLeft: 2 }}>Physiotherapie</span>
            </div>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 4 }}>
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  color: 'rgba(255,255,255,0.72)', fontSize: 13, fontWeight: 500,
                  padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
                }}>
                  {label}
                </Link>
              ))}
              <Link href="/referenzen/physio-demo/kontakt" style={{
                backgroundColor: '#E87A38', color: '#FFFFFF',
                fontSize: 13, fontWeight: 700, padding: '8px 18px',
                borderRadius: 22, textDecoration: 'none', marginLeft: 10,
              }}>
                Termin anfragen
              </Link>
            </div>
            <button
              className="sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#FFFFFF', fontSize: 22, lineHeight: 1, padding: 4 }}
              aria-label="Menü öffnen"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="sm:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ backgroundColor: '#0A1E13', borderTop: '1px solid rgba(50,184,119,0.15)', overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                      color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 600,
                      padding: '13px 0', textDecoration: 'none',
                      borderBottom: '1px solid rgba(50,184,119,0.1)',
                    }}>
                      {label}
                    </Link>
                  ))}
                  <Link href="/referenzen/physio-demo/kontakt" onClick={() => setMenuOpen(false)} style={{
                    backgroundColor: '#E87A38', color: '#FFFFFF',
                    fontSize: 15, fontWeight: 700, padding: '13px 20px',
                    borderRadius: 30, textDecoration: 'none', textAlign: 'center', marginTop: 14,
                  }}>
                    Termin anfragen
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── HERO ── */}
        <section ref={heroRef} className="grid lg:grid-cols-2" style={{ minHeight: '100svh', paddingTop: 68 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 80px) clamp(28px, 5vw, 72px)',
            backgroundColor: '#F4FAF6',
          }}>
            <motion.p variants={fadeUp} custom={0} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#32B877', marginBottom: 22,
            }}>
              Praxis Elbbalance · Hamburg-Eimsbüttel
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} style={{
              fontSize: 'clamp(44px, 5.8vw, 84px)', fontWeight: 800, lineHeight: 1.03,
              letterSpacing: '-0.03em', color: '#0C2318',
            }}>
              Bewegen.<br />
              <span style={{ color: '#32B877' }}>Genesen.</span><br />
              Leben.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.7, color: '#4A6358',
              maxWidth: 430, marginTop: 26,
            }}>
              Individuelle Physiotherapie in Hamburg — von manueller Therapie bis Sportrehabilitation. Persönliche Betreuung mit klarem Therapieplan und spürbaren Ergebnissen.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/referenzen/physio-demo/kontakt" style={{
                backgroundColor: '#32B877', color: '#FFFFFF',
                fontWeight: 700, fontSize: 15, padding: '14px 30px',
                borderRadius: 30, textDecoration: 'none',
              }}>
                Termin anfragen
              </Link>
              <Link href="/referenzen/physio-demo/leistungen" style={{
                border: '2px solid #0C2318', color: '#0C2318',
                fontWeight: 600, fontSize: 15, padding: '12px 28px',
                borderRadius: 30, textDecoration: 'none',
              }}>
                Leistungen ansehen
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} style={{ display: 'flex', gap: 36, marginTop: 52, flexWrap: 'wrap' }}>
              {[
                { val: '07:30', label: 'Öffnung Mo–Fr' },
                { val: '8', label: 'Behandlungsformen' },
                { val: '∞', label: 'Neue Patienten' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: '#0C2318', letterSpacing: '-0.02em' }}>{val}</div>
                  <div style={{ fontSize: 11, color: '#6A8074', fontWeight: 600, marginTop: 3, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative min-h-[380px]" style={{ overflow: 'hidden' }}>
            <motion.div style={{ scale: heroScale, height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
              <Image
                src="/images/physio/treatment1.jpg"
                alt="Physiotherapeutin bei der Behandlung einer Patientin in ruhiger Praxisatmosphäre"
                fill priority
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(140deg, rgba(12,35,24,0.5) 0%, rgba(12,35,24,0.08) 55%)',
              }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute', bottom: 36, left: 32,
                backgroundColor: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(14px)',
                borderRadius: 18, padding: '16px 22px',
                boxShadow: '0 10px 36px rgba(0,0,0,0.16)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#32B877' }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0C2318' }}>Neue Patienten willkommen</span>
              </div>
              <p style={{ fontSize: 12, color: '#6A8074', marginTop: 5 }}>Termine Mo–Sa · Hamburg-Eimsbüttel</p>
            </motion.div>
          </div>
        </section>

        {/* ── CONDITION NAVIGATOR (replaces marquee) ── */}
        <section style={{ backgroundColor: '#0C2318', padding: '64px 24px 80px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#32B877', marginBottom: 28,
              }}
            >
              Bei welchen Beschwerden helfen wir?
            </motion.p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
              {conditionData.map((c) => (
                <button key={c.id} onClick={() => setActiveCondition(c.id)} style={{
                  backgroundColor: activeCondition === c.id ? '#32B877' : 'transparent',
                  border: `1px solid ${activeCondition === c.id ? '#32B877' : 'rgba(50,184,119,0.35)'}`,
                  color: activeCondition === c.id ? '#0C2318' : 'rgba(255,255,255,0.72)',
                  padding: '10px 22px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  borderRadius: 30, transition: 'all 0.2s ease', fontFamily: 'inherit',
                }}>
                  {c.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCondition}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="grid lg:grid-cols-[1fr_400px]" style={{ gap: 48, alignItems: 'center' }}>
                  <div>
                    <h2 style={{
                      fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.025em',
                      color: '#FFFFFF', lineHeight: 1.1, marginBottom: 18,
                    }}>
                      {condition.headline}
                    </h2>
                    <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.57)', lineHeight: 1.7, maxWidth: 480, marginBottom: 28 }}>
                      {condition.sub}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                      {condition.treatments.map((t) => (
                        <span key={t} style={{
                          backgroundColor: 'rgba(50,184,119,0.1)',
                          border: '1px solid rgba(50,184,119,0.25)',
                          color: '#32B877', padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 20,
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                      <div>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>
                          Ø Therapiedauer
                        </p>
                        <p style={{ fontSize: 16, color: '#32B877', fontWeight: 700 }}>{condition.duration}</p>
                      </div>
                      <Link href={condition.href} style={{
                        backgroundColor: '#E87A38', color: '#FFFFFF',
                        fontWeight: 700, fontSize: 13, padding: '11px 22px',
                        borderRadius: 22, textDecoration: 'none',
                      }}>
                        Mehr erfahren →
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block" style={{
                    position: 'relative', height: 320, borderRadius: 20, overflow: 'hidden',
                  }}>
                    <Image
                      src={condition.img}
                      alt={condition.headline}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="400px"
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(12,35,24,0.65) 100%)',
                    }} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── TEAM (before services) ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 52 }}>
              <div>
                <motion.p variants={fadeUp} style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#32B877', marginBottom: 16,
                }}>
                  Unser Team
                </motion.p>
                <motion.h2 variants={fadeUp} style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: '#0C2318', lineHeight: 1.1,
                }}>
                  Ihre Therapeuten —<br />persönlich und erfahren
                </motion.h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-3" style={{ gap: 20 }}>
              {team.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} custom={i} style={{
                  backgroundColor: '#FFFFFF', borderRadius: 22,
                  border: '1px solid #D4F0E4', overflow: 'hidden',
                }}>
                  <div style={{ position: 'relative', height: 260 }}>
                    <Image
                      src={t.img}
                      alt={t.name} fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#32B877', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                      {t.role}
                    </p>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0C2318', marginBottom: 6 }}>{t.name}</h3>
                    <p style={{ fontSize: 12.5, color: '#527060' }}>{t.spec}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SERVICES ACCORDION ── */}
        <section style={{ backgroundColor: '#EBF5EF', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 52 }}>
                <div>
                  <motion.p variants={fadeUp} style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#32B877', marginBottom: 16,
                  }}>
                    Leistungen
                  </motion.p>
                  <motion.h2 variants={fadeUp} style={{
                    fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                    color: '#0C2318', lineHeight: 1.1,
                  }}>
                    Unser Behandlungsspektrum
                  </motion.h2>
                </div>
                <motion.div variants={fadeUp}>
                  <Link href="/referenzen/physio-demo/leistungen" style={{
                    fontSize: 13, fontWeight: 700, color: '#32B877', textDecoration: 'none',
                  }}>
                    Alle Leistungen →
                  </Link>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                {services.map((s, i) => (
                  <div key={s.title}>
                    <button
                      onClick={() => setOpenService(openService === s.title ? null : s.title)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '22px 0', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
                        borderBottom: '1px solid #C6E5D5', textAlign: 'left', fontFamily: 'inherit',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#32B877', width: 28, flexShrink: 0, letterSpacing: '0.06em' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{ fontSize: 18, fontWeight: 700, color: '#0C2318' }}>{s.title}</span>
                      </div>
                      <span style={{
                        fontSize: 24, color: '#32B877', lineHeight: 1, flexShrink: 0,
                        display: 'inline-block',
                        transform: openService === s.title ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}>
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {openService === s.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.26, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ padding: '16px 0 28px 48px' }}>
                            <p style={{ fontSize: 15, color: '#527060', lineHeight: 1.7, maxWidth: 560 }}>{s.desc}</p>
                            <Link href="/referenzen/physio-demo/kontakt" style={{
                              display: 'inline-block', marginTop: 14,
                              fontSize: 13, fontWeight: 700, color: '#32B877', textDecoration: 'none',
                            }}>
                              Termin anfragen →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── GALLERY — asymmetric 2/3 + 1/3 ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.p variants={fadeUp} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#32B877', marginBottom: 16,
            }}>
              Einblicke
            </motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
              color: '#0C2318', lineHeight: 1.1, marginBottom: 40,
            }}>
              Unsere Praxisräume
            </motion.h2>
            <div className="grid lg:grid-cols-[2fr_1fr]" style={{ gap: 16 }}>
              <motion.div variants={fadeUp} custom={0} style={{
                position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 480,
              }}>
                <Image
                  src="/images/physio/treatment3.jpg"
                  alt="Therapeutin begleitet Patientin bei gezielten Übungen"
                  fill style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 67vw"
                />
              </motion.div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <motion.div variants={fadeUp} custom={1} style={{
                  position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 224,
                }}>
                  <Image
                    src="/images/physio/treatment4.jpg"
                    alt="Behandlungsraum mit Therapieliege"
                    fill style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </motion.div>
                <motion.div variants={fadeUp} custom={2} style={{
                  position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 224,
                }}>
                  <Image
                    src="/images/physio/gym.jpg"
                    alt="Trainings- und Rehabilitationsbereich"
                    fill style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── BOOKING — 2-column split ── */}
        <section style={{ backgroundColor: '#0C2318', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
              className="grid lg:grid-cols-[1fr_1.1fr]"
              style={{ gap: 72, alignItems: 'start' }}
            >
              <div>
                <motion.p variants={fadeUp} style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#32B877', marginBottom: 16,
                }}>
                  Terminanfrage
                </motion.p>
                <motion.h2 variants={fadeUp} style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: '#FFFFFF', lineHeight: 1.1, marginBottom: 18,
                }}>
                  Jetzt Termin<br />anfragen
                </motion.h2>
                <motion.p variants={fadeUp} style={{
                  fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 48,
                }}>
                  Beschreiben Sie Ihr Anliegen kurz — wir melden uns i. d. R. innerhalb von 24h.
                </motion.p>
                <motion.div variants={fadeUp}>
                  {[
                    { label: 'Montag – Donnerstag', time: '07:30–19:00 Uhr' },
                    { label: 'Freitag', time: '07:30–16:00 Uhr' },
                    { label: 'Samstag', time: '09:00–13:00 Uhr' },
                  ].map(({ label, time }) => (
                    <div key={label} style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '14px 0', borderBottom: '1px solid rgba(50,184,119,0.12)',
                    }}>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{label}</span>
                      <span style={{ fontSize: 13, color: '#32B877', fontWeight: 700 }}>{time}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 32 }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.8 }}>
                      Osterstraße 142 · 20255 Hamburg-Eimsbüttel<br />
                      040 / 88 42 19 30<br />
                      kontakt@elbbalance-physio.de
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(50,184,119,0.2)',
                borderRadius: 24, padding: '36px 32px',
              }}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2" style={{ gap: 14 }}>
                    {[
                      { id: 'name', label: 'Name', placeholder: 'Ihr vollständiger Name', type: 'text' },
                      { id: 'phone', label: 'Telefon', placeholder: '040 / ...', type: 'tel' },
                    ].map(({ id, label, placeholder, type }) => (
                      <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <label htmlFor={id} style={{
                          fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                        }}>
                          {label}
                        </label>
                        <input id={id} type={type} placeholder={placeholder} style={inputStyle} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label htmlFor="treatment" style={{
                      fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      Gewünschte Behandlung
                    </label>
                    <select id="treatment" style={{ ...inputStyle, color: 'rgba(255,255,255,0.5)' }}>
                      <option value="">Bitte auswählen…</option>
                      {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label htmlFor="message" style={{
                      fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      Kurze Beschreibung
                    </label>
                    <textarea id="message" rows={4} placeholder="Schildern Sie kurz Ihr Anliegen…"
                      style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{
                    marginTop: 24, backgroundColor: '#32B877', color: '#FFFFFF',
                    fontWeight: 700, fontSize: 14, padding: '14px 32px',
                    borderRadius: 28, border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', width: '100%',
                  }}>
                    Terminanfrage senden
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER — minimal 2-column ── */}
        <footer style={{ backgroundColor: '#060E09', padding: '52px 24px 38px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="grid sm:grid-cols-[1.5fr_1fr]" style={{ gap: 48, marginBottom: 44 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#32B877' }} />
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 16 }}>Elbbalance Physiotherapie</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.8 }}>
                  Osterstraße 142 · 20255 Hamburg-Eimsbüttel<br />
                  040 / 88 42 19 30 · kontakt@elbbalance-physio.de<br />
                  Mo–Do 07:30–19:00 · Fr 07:30–16:00
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ color: '#32B877', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Navigation
                </p>
                {[
                  { href: '/referenzen/physio-demo/leistungen', label: 'Leistungen' },
                  { href: '/referenzen/physio-demo/rueckenschmerzen', label: 'Rücken' },
                  { href: '/referenzen/physio-demo/kontakt', label: 'Kontakt & Termin' },
                ].map(({ href, label }) => (
                  <Link key={label} href={href} style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none' }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24,
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
            }}>
              <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 12 }}>© 2025 Elbbalance Physiotherapie · Hamburg</p>
              <p style={{ color: 'rgba(255,255,255,0.1)', fontSize: 12 }}>Demo-Website · Hamburg Websites</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
