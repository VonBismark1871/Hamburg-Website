import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';

// Palette: #0D1117 bg · #161D2A graphite · #1F2D3D panel · #E8321C red · #F5A623 amber
// #7A8EA8 slate · #EEF3FA off-white · Space Grotesk font

const services = [
  { title: 'Inspektion', desc: 'Herstellergerechte Inspektionen mit digitaler Dokumentation und klarer Ergebnisrückmeldung' },
  { title: 'Ölwechsel', desc: 'Passendes Markenöl, neuer Filter und fachgerechte Entsorgung — schnell und transparent' },
  { title: 'Bremsenservice', desc: 'Prüfung und Austausch von Belägen, Scheiben und Bremsflüssigkeit für sichere Bremsleistung' },
  { title: 'Reifenwechsel', desc: 'Saisonaler Reifenservice inkl. Sichtprüfung und optionaler Einlagerung im Reifenhotel' },
  { title: 'Fahrzeugdiagnose', desc: 'Moderne Diagnosegeräte für präzise Fehleranalyse und gezielte Behebung' },
  { title: 'Klimaservice', desc: 'Wartung, Dichtigkeitsprüfung und Neubefüllung für zuverlässiges Innenraumklima' },
  { title: 'HU / AU Vorbereitung', desc: 'Vorabprüfung und Mängelbehebung für eine reibungslose Hauptuntersuchung' },
  { title: 'Allgemeine Reparaturen', desc: 'Vom Fahrwerk bis zur Elektrik: fachgerechte Reparaturen in geprüfter Qualität' },
];

const processSteps = [
  { num: '01', title: 'Annahme', desc: 'Fahrzeugübergabe mit Zustandscheck und Auftragserfassung' },
  { num: '02', title: 'Diagnose', desc: 'Elektronische Fehleranalyse und Sichtprüfung relevanter Bauteile' },
  { num: '03', title: 'Freigabe', desc: 'Kostenvoranschlag und klare Rückmeldung vor Beginn der Arbeiten' },
  { num: '04', title: 'Reparatur', desc: 'Fachgerechte Ausführung durch erfahrene Kfz-Mechatroniker' },
  { num: '05', title: 'Übergabe', desc: 'Fahrzeugübergabe mit Serviceprotokoll und allen erledigten Positionen' },
];

const gallery = [
  { src: '1486006920555-c77dcf18193c', alt: 'Kfz-Mechaniker prüft Fahrzeug in der Werkstatt' },
  { src: '1619642751034-765dfdf7c58e', alt: 'Kfz-Mechatroniker bei Diagnosearbeiten am Motor' },
  { src: '1549317661-bd32c8ce0db2', alt: 'Motorraum während professioneller Inspektion' },
];

const navLinks = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt' },
];

const marqueeItems = [
  'Inspektion', 'Ölwechsel', 'Bremsenservice', 'Diagnose', 'HU/AU',
  'Reifenwechsel', 'Klimaservice', 'Fahrwerkcheck', 'Reparatur',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(232,50,28,0.25)',
  borderRadius: 6,
  padding: '13px 16px',
  fontSize: 14,
  color: '#EEF3FA',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

export default function AutoserviceDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Elbwerk Kfz-Service Hamburg — Werkstatt, Inspektion & Diagnose"
        description="Ihre Autowerkstatt in Hamburg. Inspektionen, Bremsenservice, Reifenwechsel, Diagnose und Reparaturen mit fairen Preisen und klarer Kommunikation."
        path="/referenzen/autoservice-demo"
        noIndex
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: '#0D1117', color: '#EEF3FA' }}>

        {/* ── TOP NAV ── */}
        <nav
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            backgroundColor: scrolled ? 'rgba(13,17,23,0.98)' : '#0D1117',
            borderBottom: scrolled ? '1px solid rgba(232,50,28,0.2)' : '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              maxWidth: 1280, margin: '0 auto', padding: '0 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 28, height: 28, backgroundColor: '#E8321C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: '#FFFFFF',
                }}
              >
                E
              </div>
              <div>
                <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk</span>
                <span style={{ color: '#7A8EA8', fontWeight: 400, fontSize: 13, marginLeft: 6 }}>Kfz-Service</span>
              </div>
            </div>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 2 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href} href={href}
                  style={{
                    color: '#B0BECF', fontSize: 13, fontWeight: 500,
                    padding: '7px 14px', textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/referenzen/autoservice-demo/kontakt"
                style={{
                  backgroundColor: '#E8321C', color: '#FFFFFF',
                  fontSize: 13, fontWeight: 700, padding: '9px 20px',
                  textDecoration: 'none', marginLeft: 8,
                  letterSpacing: '0.01em',
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
          style={{ position: 'relative', height: '100svh', minHeight: 560, overflow: 'hidden' }}
        >
          <motion.div style={{ scale: heroScale, position: 'absolute', inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85"
              alt="Moderne Kfz-Werkstatt von Elbwerk in Hamburg"
              fill
              priority
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              sizes="100vw"
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.65) 50%, rgba(13,17,23,0.25) 100%)',
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{
              position: 'relative', zIndex: 10,
              maxWidth: 1280, margin: '0 auto',
              padding: '0 24px',
              height: '100%',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              paddingTop: 64,
            }}
          >
            <motion.div variants={fadeUp} custom={0} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <div style={{ width: 28, height: 2, backgroundColor: '#E8321C' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
                Kfz-Service · Hamburg-Hammerbrook
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: 'clamp(44px, 7vw, 100px)', fontWeight: 700, lineHeight: 0.95,
                letterSpacing: '-0.03em', color: '#FFFFFF',
                textTransform: 'uppercase', maxWidth: 700,
              }}
            >
              Ihre<br />
              <span style={{ color: '#E8321C' }}>Werkstatt</span><br />
              Hamburg.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              style={{
                fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.65, color: '#B0BECF',
                maxWidth: 420, marginTop: 28,
              }}
            >
              Faire Preise, klare Kommunikation und erfahrene Kfz-Mechatroniker. Vom Ölwechsel bis zur Vollinspektion — alles aus einer Hand.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}
            >
              <Link
                href="/referenzen/autoservice-demo/kontakt"
                style={{
                  backgroundColor: '#E8321C', color: '#FFFFFF',
                  fontWeight: 700, fontSize: 14, padding: '14px 30px',
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}
              >
                Werkstatttermin anfragen
              </Link>
              <Link
                href="/referenzen/autoservice-demo/leistungen"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)', color: '#EEF3FA',
                  fontWeight: 500, fontSize: 14, padding: '13px 28px',
                  textDecoration: 'none', letterSpacing: '0.01em',
                }}
              >
                Alle Leistungen
              </Link>
            </motion.div>

            {/* Service quick-chips */}
            <motion.div
              variants={fadeUp}
              custom={4}
              style={{
                position: 'absolute', bottom: 40, left: 24, right: 24,
                maxWidth: 1232, display: 'flex', flexWrap: 'wrap', gap: 8,
              }}
            >
              {['Inspektion', 'Bremsenservice', 'Reifenwechsel', 'Diagnose', 'HU/AU Vorbereitung'].map((s) => (
                <span
                  key={s}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#D0DAE8', fontSize: 12, fontWeight: 500,
                    padding: '7px 14px', letterSpacing: '0.02em',
                  }}
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <section style={{ backgroundColor: '#E8321C', overflow: 'hidden', padding: '14px 0' }}>
          <motion.div
            animate={{ x: [0, -1680] }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 24px', gap: 18 }}>
                <span style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {item}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>■</span>
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── TRUST BAR ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
              {[
                { val: 'Fair', label: 'Transparente Preise', sub: 'Kostenvoranschlag vor Beginn' },
                { val: 'Klar', label: 'Kommunikation', sub: 'Rückmeldung bei jedem Schritt' },
                { val: 'Mo–Sa', label: 'Geöffnet', sub: '07:30–18:00 · Sa 09:00–13:00' },
                { val: 'HH', label: 'Hamburg-Hammerbrook', sub: 'Ausschläger Weg 62' },
              ].map(({ val, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  style={{ backgroundColor: '#1F2D3D', padding: '28px 24px' }}
                >
                  <div style={{ fontSize: 34, fontWeight: 700, color: '#E8321C', letterSpacing: '-0.02em', marginBottom: 6 }}>{val}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#EEF3FA', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: '#7A8EA8' }}>{sub}</div>
                </motion.div>
              ))}
            </div>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 0 }}>
              <div>
                <motion.p
                  variants={fadeUp}
                  style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: '#E8321C', marginBottom: 14,
                  }}
                >
                  Leistungen
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, letterSpacing: '-0.025em',
                    color: '#EEF3FA', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 48,
                  }}
                >
                  Unser Service-<br />Spektrum
                </motion.h2>
              </div>
              <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
                <Link
                  href="/referenzen/autoservice-demo/leistungen"
                  style={{ fontSize: 13, fontWeight: 600, color: '#E8321C', textDecoration: 'none', letterSpacing: '0.02em' }}
                >
                  Alle Leistungen ansehen →
                </Link>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ backgroundColor: '#1F2D3D' }}
                  style={{
                    backgroundColor: '#161D2A',
                    borderLeft: '3px solid #E8321C',
                    padding: '24px 20px',
                    transition: 'background-color 0.2s',
                  }}
                >
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: '#EEF3FA', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.title}</h3>
                  <p style={{ fontSize: 12.5, color: '#7A8EA8', lineHeight: 1.6 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── INSPECTION PROCESS ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '96px 24px' }}>
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
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#E8321C', marginBottom: 14,
                }}
              >
                Ablauf
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, letterSpacing: '-0.025em',
                  color: '#EEF3FA', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 56,
                }}
              >
                Von der Annahme<br />zur Übergabe
              </motion.h2>

              <div className="grid sm:grid-cols-3 lg:grid-cols-5" style={{ gap: 2 }}>
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    custom={i}
                    style={{ backgroundColor: '#0D1117', padding: '28px 20px', position: 'relative' }}
                  >
                    <div style={{ fontSize: 36, fontWeight: 700, color: '#E8321C', letterSpacing: '-0.02em', marginBottom: 14 }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#EEF3FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 12.5, color: '#7A8EA8', lineHeight: 1.6 }}>{step.desc}</p>
                    {i < processSteps.length - 1 && (
                      <div
                        style={{
                          position: 'absolute', top: 42, right: -2,
                          width: 4, height: 2, backgroundColor: '#E8321C',
                          display: 'none',
                        }}
                        className="lg:block"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
                <Link
                  href="/referenzen/autoservice-demo/inspektion"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    backgroundColor: '#E8321C', color: '#FFFFFF',
                    fontWeight: 700, fontSize: 14, padding: '13px 26px',
                    textDecoration: 'none', letterSpacing: '0.02em',
                  }}
                >
                  Inspektion anfragen →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── WORKSHOP FEATURE ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid lg:grid-cols-2"
            style={{ gap: 2 }}
          >
            <div style={{ backgroundColor: '#161D2A', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#E8321C', marginBottom: 20,
                }}
              >
                Warum Elbwerk
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em',
                  color: '#EEF3FA', lineHeight: 1.1, textTransform: 'uppercase', marginBottom: 32,
                }}
              >
                Klar. Fair.<br />Zuverlässig.
              </motion.h2>
              {[
                'Transparente Kommunikation bei jedem Arbeitsschritt',
                'Klare Kostenstruktur vor Beginn der Arbeiten',
                'Kurze Wartezeiten durch strukturierte Terminplanung',
                'Fachgerechte Reparaturen mit Ersatzteilen in geprüfter Qualität',
              ].map((point, i) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    marginBottom: 16,
                  }}
                >
                  <div style={{ width: 20, height: 20, backgroundColor: '#E8321C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <span style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 700 }}>✓</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#B0BECF', lineHeight: 1.55 }}>{point}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeUp}
              style={{ position: 'relative', minHeight: 400 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                alt="Kfz-Mechatroniker bei Diagnosearbeiten in der Elbwerk Werkstatt"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(22,29,42,0.2) 0%, rgba(13,17,23,0.05) 100%)' }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── GALLERY ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 96px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#E8321C', marginBottom: 14,
              }}
            >
              Einblicke
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em',
                color: '#EEF3FA', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 32,
              }}
            >
              Die Werkstatt
            </motion.h2>

            <div className="grid sm:grid-cols-3" style={{ gap: 2 }}>
              {gallery.map((img, i) => (
                <motion.div
                  key={img.src}
                  variants={fadeUp}
                  custom={i}
                  style={{ position: 'relative', height: 280 }}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${img.src}?auto=format&fit=crop&w=900&q=80`}
                    alt={img.alt}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(13,17,23,0.5) 0%, transparent 50%)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BOOKING ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '96px 24px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#E8321C', marginBottom: 14,
                }}
              >
                Terminanfrage
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, letterSpacing: '-0.025em',
                  color: '#EEF3FA', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 14,
                }}
              >
                Werkstatttermin<br />anfragen
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: 15, color: '#7A8EA8', lineHeight: 1.65, marginBottom: 48 }}
              >
                Anfrage einfach stellen — wir melden uns innerhalb von 24h.
              </motion.p>

              <motion.form
                variants={fadeUp}
                onSubmit={(e) => e.preventDefault()}
                style={{
                  backgroundColor: '#0D1117',
                  border: '1px solid rgba(232,50,28,0.2)',
                  padding: 40,
                }}
              >
                <div className="grid sm:grid-cols-2" style={{ gap: 16 }}>
                  {[
                    { id: 'name', label: 'Name', placeholder: 'Ihr Name', type: 'text' },
                    { id: 'phone', label: 'Telefon', placeholder: '040 / ...', type: 'tel' },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label
                        htmlFor={id}
                        style={{
                          fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
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
                    htmlFor="service"
                    style={{
                      fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}
                  >
                    Gewünschte Leistung
                  </label>
                  <select id="service" style={{ ...inputStyle, color: '#7A8EA8' }}>
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
                      fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}
                  >
                    Fahrzeug & Anliegen
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Fahrzeugtyp, Kennzeichen und kurze Beschreibung…"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: 28, backgroundColor: '#E8321C', color: '#FFFFFF',
                    fontWeight: 700, fontSize: 14, padding: '16px 36px',
                    border: 'none', cursor: 'pointer',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}
                >
                  Terminanfrage senden →
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: '#060A0F', padding: '56px 24px 40px', borderTop: '1px solid rgba(232,50,28,0.15)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]"
              style={{ gap: 48, marginBottom: 52 }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 28, height: 28, backgroundColor: '#E8321C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>
                    E
                  </div>
                  <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk Kfz-Service</span>
                </div>
                <p style={{ color: '#4D5E72', fontSize: 13, lineHeight: 1.75 }}>
                  Ausschläger Weg 62<br />
                  20537 Hamburg<br />
                  Mo–Fr 07:30–18:00 · Sa 09:00–13:00
                </p>
              </div>
              <div>
                <p style={{ color: '#E8321C', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>
                  Leistungen
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Inspektion', 'Bremsenservice', 'Reifenwechsel', 'Diagnose'].map((l) => (
                    <Link
                      key={l}
                      href="/referenzen/autoservice-demo/leistungen"
                      style={{ color: '#4D5E72', fontSize: 13, textDecoration: 'none' }}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ color: '#E8321C', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>
                  Kontakt
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ color: '#4D5E72', fontSize: 13 }}>040 712 45 890</span>
                  <span style={{ color: '#4D5E72', fontSize: 13 }}>service@elbwerk-kfz.de</span>
                  <Link
                    href="/referenzen/autoservice-demo/kontakt"
                    style={{ color: '#E8321C', fontSize: 13, textDecoration: 'none', fontWeight: 700 }}
                  >
                    Termin anfragen →
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: 26,
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
              }}
            >
              <p style={{ color: '#2A3345', fontSize: 12 }}>© 2025 Elbwerk Kfz-Service · Hamburg</p>
              <p style={{ color: '#1E2738', fontSize: 12 }}>Demo-Website · Hamburg Websites</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
