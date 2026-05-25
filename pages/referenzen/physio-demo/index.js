import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';

// Palette: deep forest #0C2318 · leaf #2B6648 · mint #32B877 · mintPale #D4F0E4
// amber #E87A38 · bg #F4FAF6 · ink #0A1B11 · muted #527060

const complaints = [
  {
    id: 1,
    label: 'Rückenschmerzen',
    desc: 'Akute und chronische Beschwerden, Bandscheibenvorfälle und Haltungskorrektur mit gezieltem Therapieplan.',
    href: '/referenzen/physio-demo/rueckenschmerzen',
  },
  {
    id: 2,
    label: 'Nackenverspannungen',
    desc: 'Muskuläre Spannungen lösen mit manuellen Techniken und alltagstauglichen Entspannungsübungen.',
  },
  {
    id: 3,
    label: 'Sportverletzungen',
    desc: 'Begleitete Genesung nach Zerrungen, Überlastungen und Gelenkbeschwerden — zurück in die Bewegung.',
  },
  {
    id: 4,
    label: 'Post-OP Rehabilitation',
    desc: 'Stufenweise Mobilisation nach Operationen für eine sichere, messbare Rückkehr in den Alltag.',
  },
];

const services = [
  { title: 'Krankengymnastik', desc: 'Beweglichkeit, Stabilität und Koordination mit individuellem Therapieplan' },
  { title: 'Manuelle Therapie', desc: 'Gezielte Handgriffe zur Gelenkentlastung und natürlichen Bewegungsfreiheit' },
  { title: 'Klassische Massage', desc: 'Verspannungslösung und Regenerationsförderung bei körperlicher Belastung' },
  { title: 'Lymphdrainage', desc: 'Sanfte Förderung des Lymphflusses nach Verletzungen oder Eingriffen' },
  { title: 'Sportphysiotherapie', desc: 'Funktionelle Behandlung für aktive Menschen — von Hobby bis Leistungssport' },
  { title: 'Rehabilitation', desc: 'Strukturierte Begleitung mit messbaren Fortschritten nach Eingriffen' },
  { title: 'Haltungstraining', desc: 'Analyse und Korrektur von Bewegungsmustern für nachhaltige Entlastung' },
  { title: 'Prävention', desc: 'Vorbeugende Konzepte zur Rückfallreduktion und Alltagsstabilisierung' },
];

const team = [
  {
    name: 'Maria Hoffmann',
    role: 'Leitende Physiotherapeutin',
    spec: 'Manuelle Therapie · Sportreha',
    img: '1527613426441-4da17471b66d',
  },
  {
    name: 'Stefan Bauer',
    role: 'Physiotherapeut',
    spec: 'Rücken & Wirbelsäule · Prävention',
    img: '1582750433449-648ed127bb54',
  },
  {
    name: 'Jana Richter',
    role: 'Physiotherapeutin',
    spec: 'Post-OP Reha · Lymphdrainage',
    img: '1438761681033-6461ffad8d80',
  },
];

const gallery = [
  { src: '1576671081837-49000212a370', alt: 'Behandlungsraum mit Therapieliege und ruhiger Atmosphäre' },
  { src: '1518611012118-696072aa579a', alt: 'Trainings- und Rehabilitationsbereich der Praxis' },
  { src: '1594381898411-846e7d193883', alt: 'Therapeutin begleitet Patientin bei gezielten Übungen' },
];

const marqueeItems = [
  'Rückenschmerzen', 'Nacken', 'Schulter', 'Knie', 'Hüfte',
  'Sportverletzungen', 'Post-OP Reha', 'Prävention', 'Manuelle Therapie', 'Lymphdrainage',
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
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(50,184,119,0.25)',
  borderRadius: 12,
  padding: '14px 16px',
  fontSize: 14,
  color: '#FFFFFF',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

export default function PhysioDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#F4FAF6', color: '#0A1B11' }}>

        {/* ── TOP NAV ── */}
        <nav
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            backgroundColor: scrolled ? 'rgba(10,27,17,0.97)' : '#0C2318',
            borderBottom: scrolled ? '1px solid rgba(50,184,119,0.18)' : '1px solid transparent',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              maxWidth: 1280, margin: '0 auto', padding: '0 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#32B877' }} />
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 17, letterSpacing: '-0.015em' }}>Elbbalance</span>
              <span style={{ color: '#6DD4A4', fontWeight: 400, fontSize: 14, marginLeft: 2 }}>Physiotherapie</span>
            </div>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 4 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href} href={href}
                  style={{
                    color: 'rgba(255,255,255,0.72)', fontSize: 13, fontWeight: 500,
                    padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/referenzen/physio-demo/kontakt"
                style={{
                  backgroundColor: '#E87A38', color: '#FFFFFF',
                  fontSize: 13, fontWeight: 700, padding: '8px 18px',
                  borderRadius: 22, textDecoration: 'none', marginLeft: 10,
                }}
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="grid lg:grid-cols-2"
          style={{ minHeight: '100svh', paddingTop: 68 }}
        >
          {/* Text side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: 'clamp(40px, 6vw, 80px) clamp(28px, 5vw, 72px)',
              backgroundColor: '#F4FAF6',
            }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#32B877', marginBottom: 22,
              }}
            >
              Praxis Elbbalance · Hamburg-Eimsbüttel
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: 'clamp(44px, 5.8vw, 84px)', fontWeight: 800, lineHeight: 1.03,
                letterSpacing: '-0.03em', color: '#0C2318',
              }}
            >
              Bewegen.<br />
              <span style={{ color: '#32B877' }}>Genesen.</span><br />
              Leben.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              style={{
                fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.7, color: '#4A6358',
                maxWidth: 430, marginTop: 26,
              }}
            >
              Individuelle Physiotherapie in Hamburg — von manueller Therapie bis Sportrehabilitation. Persönliche Betreuung mit klarem Therapieplan und spürbaren Ergebnissen.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}
            >
              <Link
                href="/referenzen/physio-demo/kontakt"
                style={{
                  backgroundColor: '#32B877', color: '#FFFFFF',
                  fontWeight: 700, fontSize: 15, padding: '14px 30px',
                  borderRadius: 30, textDecoration: 'none',
                }}
              >
                Termin anfragen
              </Link>
              <Link
                href="/referenzen/physio-demo/leistungen"
                style={{
                  border: '2px solid #0C2318', color: '#0C2318',
                  fontWeight: 600, fontSize: 15, padding: '12px 28px',
                  borderRadius: 30, textDecoration: 'none',
                }}
              >
                Leistungen ansehen
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={4}
              style={{ display: 'flex', gap: 36, marginTop: 52, flexWrap: 'wrap' }}
            >
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

          {/* Image side */}
          <div className="relative min-h-[380px]" style={{ overflow: 'hidden' }}>
            <motion.div style={{ scale: heroScale, height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
              <Image
                src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1600&q=85"
                alt="Physiotherapeutin bei der Behandlung einer Patientin in ruhiger Praxisatmosphäre"
                fill
                priority
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(140deg, rgba(12,35,24,0.5) 0%, rgba(12,35,24,0.08) 55%)',
                }}
              />
            </motion.div>

            {/* Floating badge */}
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
              <p style={{ fontSize: 12, color: '#6A8074', marginTop: 5, fontWeight: 400 }}>
                Termine Mo–Sa · Hamburg-Eimsbüttel
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <section style={{ backgroundColor: '#0C2318', overflow: 'hidden', padding: '22px 0' }}>
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 28px', gap: 20 }}>
                <span style={{ color: '#32B877', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {item}
                </span>
                <span style={{ color: 'rgba(50,184,119,0.35)', fontSize: 18 }}>·</span>
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── TREATMENT PATHS ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#32B877', marginBottom: 16,
              }}
            >
              Behandlungswege
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(30px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.025em',
                color: '#0C2318', lineHeight: 1.1, marginBottom: 16,
              }}
            >
              Bei welchen Beschwerden<br />helfen wir Ihnen?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ fontSize: 16, color: '#527060', lineHeight: 1.65, maxWidth: 500, marginBottom: 56 }}
            >
              Häufige Beschwerden lassen sich mit einer passenden Kombination aus manuellen Techniken, Übungen und alltagsnaher Beratung gezielt behandeln.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
              {complaints.map((c, i) => (
                <motion.div
                  key={c.id}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -7, boxShadow: '0 22px 52px rgba(12,35,24,0.1)' }}
                  style={{
                    backgroundColor: '#FFFFFF', borderRadius: 22, padding: 30,
                    border: '1px solid #D4F0E4',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 14,
                      backgroundColor: '#D4F0E4',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#32B877', fontSize: 18, fontWeight: 800,
                      marginBottom: 22,
                    }}
                  >
                    {c.id}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0C2318', marginBottom: 10 }}>{c.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#527060', lineHeight: 1.6 }}>{c.desc}</p>
                  {c.href && (
                    <Link
                      href={c.href}
                      style={{
                        display: 'inline-block', marginTop: 20,
                        fontSize: 12, fontWeight: 700, color: '#32B877', textDecoration: 'none',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Mehr erfahren →
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── WHY US (dark forest) ── */}
        <section style={{ backgroundColor: '#0C2318', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#32B877', marginBottom: 16,
                }}
              >
                Warum Elbbalance
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: '#FFFFFF', lineHeight: 1.12, marginBottom: 56,
                }}
              >
                Physiotherapie, die<br />wirklich weiterhilft.
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
                {[
                  { title: 'Feste Ansprechperson', desc: 'Persönliche Betreuung von der ersten bis zur letzten Stunde — kein Therapeutenwechsel' },
                  { title: 'Strukturierter Therapieplan', desc: 'Klare Ziele und Meilensteine — Sie sehen und spüren Ihre Fortschritte' },
                  { title: 'Ruhige Praxisatmosphäre', desc: 'Konzentrierte Behandlungen ohne Hektik in einer angenehmen Umgebung' },
                  { title: 'Verständliche Erklärungen', desc: 'Jeder Behandlungsschritt wird erklärt — transparent und nachvollziehbar' },
                ].map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={i}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(50,184,119,0.18)',
                      borderRadius: 20, padding: 28,
                    }}
                  >
                    <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: '#32B877', marginBottom: 22 }} />
                    <h3 style={{ fontSize: 15.5, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 0, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <motion.p
                  variants={fadeUp}
                  style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#32B877', marginBottom: 16,
                  }}
                >
                  Leistungen
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                    color: '#0C2318', lineHeight: 1.1, marginBottom: 48,
                  }}
                >
                  Unser Behandlungsspektrum
                </motion.h2>
              </div>
              <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
                <Link
                  href="/referenzen/physio-demo/leistungen"
                  style={{ fontSize: 13, fontWeight: 700, color: '#32B877', textDecoration: 'none' }}
                >
                  Alle Leistungen ansehen →
                </Link>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ backgroundColor: '#0C2318' }}
                  style={{
                    backgroundColor: '#FFFFFF', borderRadius: 16, padding: '24px 26px',
                    border: '1px solid #D4F0E4',
                    transition: 'background-color 0.25s',
                  }}
                >
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 4, minHeight: 40, borderRadius: 2,
                        backgroundColor: '#32B877', flexShrink: 0, marginTop: 2,
                      }}
                    />
                    <div>
                      <h3 style={{ fontSize: 14.5, fontWeight: 700, color: 'inherit', marginBottom: 7 }}>{s.title}</h3>
                      <p style={{ fontSize: 12.5, color: '#527060', lineHeight: 1.55 }}>{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── TEAM ── */}
        <section style={{ backgroundColor: '#EBF5EF', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#32B877', marginBottom: 16,
                }}
              >
                Unser Team
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: '#0C2318', lineHeight: 1.1, marginBottom: 56,
                }}
              >
                Erfahrene Therapeuten —<br />persönliche Begleitung
              </motion.h2>

              <div className="grid sm:grid-cols-3" style={{ gap: 24 }}>
                {team.map((t, i) => (
                  <motion.div
                    key={t.name}
                    variants={fadeUp}
                    custom={i}
                    style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}
                  >
                    <div style={{ position: 'relative', height: 340 }}>
                      <Image
                        src={`https://images.unsplash.com/photo-${t.img}?auto=format&fit=crop&w=800&q=80`}
                        alt={t.name}
                        fill
                        unoptimized
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(to top, rgba(12,35,24,0.88) 0%, rgba(12,35,24,0.12) 55%)',
                        }}
                      />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 24px' }}>
                        <p
                          style={{
                            color: '#32B877', fontSize: 10, fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6,
                          }}
                        >
                          {t.role}
                        </p>
                        <h3 style={{ color: '#FFFFFF', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>{t.name}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 12 }}>{t.spec}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#32B877', marginBottom: 16,
              }}
            >
              Einblicke
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                color: '#0C2318', lineHeight: 1.1, marginBottom: 48,
              }}
            >
              Unsere Praxisräume
            </motion.h2>

            <div className="grid sm:grid-cols-3" style={{ gap: 16 }}>
              {gallery.map((img, i) => (
                <motion.div
                  key={img.src}
                  variants={fadeUp}
                  custom={i}
                  style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 280 }}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${img.src}?auto=format&fit=crop&w=900&q=80`}
                    alt={img.alt}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BOOKING ── */}
        <section style={{ backgroundColor: '#0C2318', padding: '96px 24px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#32B877', marginBottom: 16,
                }}
              >
                Terminanfrage
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: '#FFFFFF', lineHeight: 1.1, marginBottom: 14,
                }}
              >
                Jetzt Termin anfragen
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 48 }}
              >
                Beschreiben Sie Ihr Anliegen kurz — wir melden uns in der Regel innerhalb von 24h.
              </motion.p>

              <motion.form
                variants={fadeUp}
                onSubmit={(e) => e.preventDefault()}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(50,184,119,0.2)',
                  borderRadius: 24, padding: 40,
                }}
              >
                <div className="grid sm:grid-cols-2" style={{ gap: 16 }}>
                  {[
                    { id: 'name', label: 'Name', placeholder: 'Ihr vollständiger Name', type: 'text' },
                    { id: 'phone', label: 'Telefon', placeholder: '040 / ...', type: 'tel' },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label
                        htmlFor={id}
                        style={{
                          fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                        }}
                      >
                        {label}
                      </label>
                      <input id={id} type={type} placeholder={placeholder} style={inputStyle} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="treatment"
                    style={{
                      fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}
                  >
                    Gewünschte Behandlung
                  </label>
                  <select
                    id="treatment"
                    style={{
                      ...inputStyle,
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    <option value="">Bitte auswählen…</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}
                  >
                    Kurze Beschreibung
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Schildern Sie kurz Ihr Anliegen…"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: 28, backgroundColor: '#32B877', color: '#FFFFFF',
                    fontWeight: 700, fontSize: 15, padding: '16px 38px',
                    borderRadius: 30, border: 'none', cursor: 'pointer',
                  }}
                >
                  Terminanfrage senden
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: '#060E09', padding: '60px 24px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]"
              style={{ gap: 48, marginBottom: 52 }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#32B877' }} />
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 16 }}>Elbbalance Physiotherapie</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: 13, lineHeight: 1.75 }}>
                  Osterstraße 142<br />
                  20255 Hamburg-Eimsbüttel<br />
                  Mo–Do 07:30–19:00 · Fr 07:30–16:00
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: '#32B877', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18,
                  }}
                >
                  Leistungen
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {['Krankengymnastik', 'Manuelle Therapie', 'Sportphysiotherapie', 'Rehabilitation'].map((l) => (
                    <Link
                      key={l}
                      href="/referenzen/physio-demo/leistungen"
                      style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p
                  style={{
                    color: '#32B877', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18,
                  }}
                >
                  Kontakt
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>040 / 88 42 19 30</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>kontakt@elbbalance-physio.de</span>
                  <Link
                    href="/referenzen/physio-demo/kontakt"
                    style={{ color: '#32B877', fontSize: 13, textDecoration: 'none', fontWeight: 700 }}
                  >
                    Termin anfragen →
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                paddingTop: 26,
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: 12 }}>
                © 2025 Elbbalance Physiotherapie · Hamburg
              </p>
              <p style={{ color: 'rgba(255,255,255,0.14)', fontSize: 12 }}>
                Demo-Website · Hamburg Websites
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
