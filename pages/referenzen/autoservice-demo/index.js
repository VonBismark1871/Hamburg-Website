import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';

// Palette: #0D1117 bg · #161D2A graphite · #1F2D3D panel · #E8321C red · #7A8EA8 slate

const services = [
  { title: 'Inspektion', desc: 'Herstellergerechte Inspektionen mit digitaler Dokumentation und klarer Ergebnisrückmeldung an Sie als Fahrer.', price: 'ab 89 €' },
  { title: 'Ölwechsel', desc: 'Passendes Markenöl, neuer Filter und fachgerechte Entsorgung — schnell und transparent abgewickelt.', price: 'ab 59 €' },
  { title: 'Bremsenservice', desc: 'Prüfung und Austausch von Belägen, Scheiben und Bremsflüssigkeit für zuverlässige Bremsleistung.', price: 'ab 129 €' },
  { title: 'Reifenwechsel', desc: 'Saisonaler Reifenservice inkl. Sichtprüfung, Auswuchten und optionaler Einlagerung im Reifenhotel.', price: 'ab 25 € / Rad' },
  { title: 'Fahrzeugdiagnose', desc: 'Moderne Diagnosegeräte für präzise Fehleranalyse — Ursache ermitteln, bevor Kosten entstehen.', price: 'ab 49 €' },
  { title: 'Klimaservice', desc: 'Wartung, Dichtigkeitsprüfung und Neubefüllung für zuverlässiges Innenraumklima das ganze Jahr.', price: 'ab 79 €' },
  { title: 'HU / AU Vorbereitung', desc: 'Vorabprüfung und gezielte Mängelbehebung für eine reibungslose Hauptuntersuchung ohne Nachtermin.', price: 'ab 39 €' },
  { title: 'Allgemeine Reparaturen', desc: 'Vom Fahrwerk bis zur Elektrik — fachgerechte Reparaturen mit Originalteilen oder hochwertigen Alternativen.', price: 'auf Anfrage' },
];

const processSteps = [
  { num: '01', title: 'Annahme', desc: 'Fahrzeugübergabe mit Zustandscheck und Auftragserfassung' },
  { num: '02', title: 'Diagnose', desc: 'Elektronische Fehleranalyse und Sichtprüfung relevanter Bauteile' },
  { num: '03', title: 'Freigabe', desc: 'Kostenvoranschlag und klare Rückmeldung vor Beginn der Arbeiten' },
  { num: '04', title: 'Reparatur', desc: 'Fachgerechte Ausführung durch erfahrene Kfz-Mechatroniker' },
  { num: '05', title: 'Übergabe', desc: 'Fahrzeugübergabe mit Serviceprotokoll und allen erledigten Positionen' },
];

const galleryItems = [
  { src: '1486006920555-c77dcf18193c', alt: 'Kfz-Mechaniker prüft Fahrzeug in der Werkstatt', label: 'Diagnose' },
  { src: '1619642751034-765dfdf7c58e', alt: 'Kfz-Mechatroniker bei Diagnosearbeiten am Motor', label: 'Reparatur' },
  { src: '1549317661-bd32c8ce0db2', alt: 'Motorraum während professioneller Inspektion', label: 'Übergabe' },
];

const navLinks = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt' },
];

const priceHighlights = [
  { service: 'Ölwechsel', price: 'ab 59 €' },
  { service: 'Inspektion', price: 'ab 89 €' },
  { service: 'Bremsen', price: 'ab 129 €' },
  { service: 'Diagnose', price: 'ab 49 €' },
  { service: 'Klima', price: 'ab 79 €' },
  { service: 'HU/AU Vorb.', price: 'ab 39 €' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(232,50,28,0.25)',
  borderRadius: 4,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: '#0D1117', color: '#EEF3FA' }}>

        {/* ── TOP NAV ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(13,17,23,0.98)' : '#0D1117',
          borderBottom: scrolled ? '1px solid rgba(232,50,28,0.2)' : '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 28, height: 28, backgroundColor: '#E8321C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700, color: '#FFFFFF',
              }}>
                E
              </div>
              <div>
                <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk</span>
                <span style={{ color: '#7A8EA8', fontWeight: 400, fontSize: 13, marginLeft: 6 }}>Kfz-Service</span>
              </div>
            </div>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 2 }}>
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  color: '#B0BECF', fontSize: 13, fontWeight: 500,
                  padding: '7px 14px', textDecoration: 'none',
                }}>
                  {label}
                </Link>
              ))}
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                backgroundColor: '#E8321C', color: '#FFFFFF',
                fontSize: 13, fontWeight: 700, padding: '9px 20px',
                textDecoration: 'none', marginLeft: 8, letterSpacing: '0.01em',
              }}>
                Termin anfragen
              </Link>
            </div>
            <button
              className="sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#EEF3FA', fontSize: 22, lineHeight: 1, padding: 4 }}
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
                style={{ backgroundColor: '#161D2A', borderTop: '1px solid rgba(232,50,28,0.15)', overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                      color: '#B0BECF', fontSize: 16, fontWeight: 600,
                      padding: '13px 0', textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      {label}
                    </Link>
                  ))}
                  <Link href="/referenzen/autoservice-demo/kontakt" onClick={() => setMenuOpen(false)} style={{
                    backgroundColor: '#E8321C', color: '#FFFFFF',
                    fontSize: 15, fontWeight: 700, padding: '13px 20px',
                    textDecoration: 'none', textAlign: 'center', marginTop: 14, letterSpacing: '0.02em',
                  }}>
                    Termin anfragen
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── HERO ── */}
        <section ref={heroRef} style={{ position: 'relative', height: '100svh', minHeight: 560, overflow: 'hidden' }}>
          <motion.div style={{ scale: heroScale, position: 'absolute', inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85"
              alt="Moderne Kfz-Werkstatt von Elbwerk in Hamburg"
              fill priority unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              sizes="100vw"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(105deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.65) 50%, rgba(13,17,23,0.25) 100%)',
            }} />
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            style={{
              position: 'relative', zIndex: 10,
              maxWidth: 1280, margin: '0 auto',
              padding: '0 24px',
              height: '100%',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              paddingTop: 64,
            }}
          >
            <motion.div variants={fadeIn} custom={0} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <div style={{ width: 28, height: 2, backgroundColor: '#E8321C' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
                Kfz-Service · Hamburg-Hammerbrook
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} custom={1} style={{
              fontSize: 'clamp(44px, 7vw, 100px)', fontWeight: 700, lineHeight: 0.95,
              letterSpacing: '-0.03em', color: '#FFFFFF',
              textTransform: 'uppercase', maxWidth: 700,
            }}>
              Ihre<br />
              <span style={{ color: '#E8321C' }}>Werkstatt</span><br />
              Hamburg.
            </motion.h1>

            <motion.p variants={fadeIn} custom={2} style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.65, color: '#B0BECF',
              maxWidth: 420, marginTop: 28,
            }}>
              Faire Preise, klare Kommunikation und erfahrene Kfz-Mechatroniker. Vom Ölwechsel bis zur Vollinspektion — alles aus einer Hand.
            </motion.p>

            <motion.div variants={fadeIn} custom={3} style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                backgroundColor: '#E8321C', color: '#FFFFFF',
                fontWeight: 700, fontSize: 14, padding: '14px 30px',
                textDecoration: 'none', letterSpacing: '0.02em',
              }}>
                Werkstatttermin anfragen
              </Link>
              <Link href="/referenzen/autoservice-demo/leistungen" style={{
                border: '1px solid rgba(255,255,255,0.25)', color: '#EEF3FA',
                fontWeight: 500, fontSize: 14, padding: '13px 28px',
                textDecoration: 'none', letterSpacing: '0.01em',
              }}>
                Alle Leistungen
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── PRICE TRANSPARENCY STRIP (replaces marquee) ── */}
        <section style={{ backgroundColor: '#161D2A', borderBottom: '1px solid rgba(232,50,28,0.15)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'stretch', overflowX: 'auto' }}>
              <div style={{
                flexShrink: 0, padding: '22px 28px 22px 0',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#E8321C', letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Richtwertpreise
                </span>
              </div>
              {priceHighlights.map((p, i) => (
                <div key={p.service} style={{
                  flexShrink: 0, padding: '18px 28px',
                  borderRight: i < priceHighlights.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  display: 'flex', flexDirection: 'column', gap: 4,
                }}>
                  <span style={{ fontSize: 11, color: '#7A8EA8', fontWeight: 500, whiteSpace: 'nowrap' }}>{p.service}</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#EEF3FA', letterSpacing: '-0.01em' }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '48px 24px' }}>
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

        {/* ── SERVICES — vertical editorial list ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
              <div>
                <motion.p variants={fadeIn} style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#E8321C', marginBottom: 14,
                }}>
                  Leistungen
                </motion.p>
                <motion.h2 variants={fadeIn} style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, letterSpacing: '-0.025em',
                  color: '#EEF3FA', lineHeight: 1.05, textTransform: 'uppercase',
                }}>
                  Unser Service-<br />Spektrum
                </motion.h2>
              </div>
              <motion.div variants={fadeIn}>
                <Link href="/referenzen/autoservice-demo/leistungen" style={{
                  fontSize: 13, fontWeight: 600, color: '#E8321C', textDecoration: 'none', letterSpacing: '0.02em',
                }}>
                  Alle Leistungen ansehen →
                </Link>
              </motion.div>
            </div>

            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeIn}
                custom={i}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  gap: '0 32px', alignItems: 'start',
                  padding: '26px 0',
                  borderTop: `1px solid ${i === 0 ? 'rgba(232,50,28,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderBottom: i === services.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: '#E8321C',
                    letterSpacing: '0.06em', flexShrink: 0, paddingTop: 3,
                    minWidth: 28,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 style={{
                      fontSize: 18, fontWeight: 700, color: '#EEF3FA',
                      textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8,
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#7A8EA8', lineHeight: 1.6, maxWidth: 540 }}>{s.desc}</p>
                  </div>
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700, color: '#EEF3FA',
                  whiteSpace: 'nowrap', paddingTop: 3,
                }}>
                  {s.price}
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeIn} style={{ marginTop: 12, fontSize: 11, color: '#4D5E72' }}>
              * Richtwertpreise. Endpreise nach Diagnose und Fahrzeugart. Kostenvoranschlag vor Beginn.
            </motion.div>
          </motion.div>
        </section>

        {/* ── INSPECTION PROCESS ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.p variants={fadeIn} style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#E8321C', marginBottom: 14,
              }}>
                Ablauf
              </motion.p>
              <motion.h2 variants={fadeIn} style={{
                fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, letterSpacing: '-0.025em',
                color: '#EEF3FA', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 56,
              }}>
                Von der Annahme<br />zur Übergabe
              </motion.h2>

              <div className="grid sm:grid-cols-3 lg:grid-cols-5" style={{ gap: 2 }}>
                {processSteps.map((step, i) => (
                  <motion.div key={step.num} variants={fadeIn} custom={i} style={{
                    backgroundColor: '#0D1117', padding: '28px 20px',
                  }}>
                    <div style={{ fontSize: 36, fontWeight: 700, color: '#E8321C', letterSpacing: '-0.02em', marginBottom: 14 }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#EEF3FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 12.5, color: '#7A8EA8', lineHeight: 1.6 }}>{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} style={{ marginTop: 40 }}>
                <Link href="/referenzen/autoservice-demo/inspektion" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  backgroundColor: '#E8321C', color: '#FFFFFF',
                  fontWeight: 700, fontSize: 14, padding: '13px 26px',
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}>
                  Inspektion anfragen →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── GALLERY with process labels ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.p variants={fadeIn} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#E8321C', marginBottom: 14,
            }}>
              Einblicke
            </motion.p>
            <motion.h2 variants={fadeIn} style={{
              fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em',
              color: '#EEF3FA', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 32,
            }}>
              Die Werkstatt
            </motion.h2>
            <div className="grid sm:grid-cols-3" style={{ gap: 2 }}>
              {galleryItems.map((img, i) => (
                <motion.div key={img.src} variants={fadeIn} custom={i} style={{ position: 'relative', height: 300 }}>
                  <Image
                    src={`https://images.unsplash.com/photo-${img.src}?auto=format&fit=crop&w=900&q=80`}
                    alt={img.alt} fill unoptimized
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,17,23,0.8) 0%, transparent 50%)',
                  }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: '#E8321C',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                    }}>
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BOOKING — 2-column split ── */}
        <section style={{ backgroundColor: '#161D2A', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
              className="grid lg:grid-cols-[1fr_1.15fr]"
              style={{ gap: 2, alignItems: 'stretch' }}
            >
              {/* Left: workshop info panel */}
              <motion.div variants={fadeIn} style={{
                backgroundColor: '#0D1117', padding: '48px 40px',
                display: 'flex', flexDirection: 'column',
              }}>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#E8321C', marginBottom: 20,
                }}>
                  Kontakt & Anfahrt
                </p>
                <h2 style={{
                  fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em',
                  color: '#EEF3FA', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 40,
                }}>
                  Werkstatttermin<br />anfragen
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
                  {[
                    { label: 'Montag – Freitag', val: '07:30 – 18:00 Uhr' },
                    { label: 'Samstag', val: '09:00 – 13:00 Uhr' },
                  ].map(({ label, val }) => (
                    <div key={label} style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <span style={{ fontSize: 13, color: '#7A8EA8' }}>{label}</span>
                      <span style={{ fontSize: 13, color: '#EEF3FA', fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 36 }}>
                  <p style={{ color: '#4D5E72', fontSize: 13, lineHeight: 1.8 }}>
                    Ausschläger Weg 62<br />
                    20537 Hamburg-Hammerbrook<br />
                    040 712 45 890<br />
                    service@elbwerk-kfz.de
                  </p>
                </div>

                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Kostenvoranschlag vor Beginn',
                    'Rückmeldung bei jedem Schritt',
                    'Kurze Wartezeiten durch Terminplanung',
                  ].map((point) => (
                    <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 18, height: 18, backgroundColor: '#E8321C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <span style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 700 }}>✓</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#7A8EA8', lineHeight: 1.55 }}>{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div variants={fadeIn} style={{ backgroundColor: '#1F2D3D', padding: '48px 40px' }}>
                <p style={{ fontSize: 13, color: '#7A8EA8', lineHeight: 1.7, marginBottom: 32 }}>
                  Anfrage stellen — wir melden uns innerhalb von 24h und bestätigen Ihren Termin.
                </p>
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="grid sm:grid-cols-2" style={{ gap: 16 }}>
                    {[
                      { id: 'name', label: 'Name', placeholder: 'Ihr Name', type: 'text' },
                      { id: 'phone', label: 'Telefon', placeholder: '040 / ...', type: 'tel' },
                    ].map(({ id, label, placeholder, type }) => (
                      <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <label htmlFor={id} style={{
                          fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                        }}>
                          {label}
                        </label>
                        <input id={id} type={type} placeholder={placeholder} style={inputStyle} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label htmlFor="service" style={{
                      fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      Gewünschte Leistung
                    </label>
                    <select id="service" style={{ ...inputStyle, color: '#7A8EA8' }}>
                      <option value="">Bitte auswählen…</option>
                      {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label htmlFor="message" style={{
                      fontSize: 11, fontWeight: 700, color: '#7A8EA8',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      Fahrzeug & Anliegen
                    </label>
                    <textarea id="message" rows={4} placeholder="Fahrzeugtyp, Kennzeichen und kurze Beschreibung…"
                      style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{
                    backgroundColor: '#E8321C', color: '#FFFFFF',
                    fontWeight: 700, fontSize: 14, padding: '16px 36px',
                    border: 'none', cursor: 'pointer',
                    letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'inherit',
                  }}>
                    Terminanfrage senden →
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: '#060A0F', padding: '52px 24px 38px', borderTop: '1px solid rgba(232,50,28,0.12)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="grid sm:grid-cols-[1.5fr_1fr]" style={{ gap: 48, marginBottom: 44 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 26, height: 26, backgroundColor: '#E8321C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>
                    E
                  </div>
                  <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16 }}>Elbwerk Kfz-Service</span>
                </div>
                <p style={{ color: '#2A3345', fontSize: 13, lineHeight: 1.8 }}>
                  Ausschläger Weg 62 · 20537 Hamburg<br />
                  040 712 45 890 · service@elbwerk-kfz.de<br />
                  Mo–Fr 07:30–18:00 · Sa 09:00–13:00
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ color: '#E8321C', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Schnellnavigation
                </p>
                {[
                  { href: '/referenzen/autoservice-demo/leistungen', label: 'Alle Leistungen' },
                  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
                  { href: '/referenzen/autoservice-demo/kontakt', label: 'Werkstatttermin anfragen' },
                ].map(({ href, label }) => (
                  <Link key={label} href={href} style={{ color: '#2A3345', fontSize: 13, textDecoration: 'none' }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24,
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
            }}>
              <p style={{ color: '#1A2030', fontSize: 12 }}>© 2025 Elbwerk Kfz-Service · Hamburg</p>
              <p style={{ color: '#141B24', fontSize: 12 }}>Demo-Website · Hamburg Websites</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
