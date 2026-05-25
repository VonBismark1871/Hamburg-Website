import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';
import { properties, propertyImage } from '../../../components/references/immobilien-demo/properties';

// Palette: #F5F1EA parchment · #0F0D0A near-black · #1D1912 dark-warm · #B89A72 gold
// #7B6D60 stone-muted · #EBE3D4 cream · EB Garamond serif + DM Sans body

const featured = properties.slice(0, 3);

const districts = [
  { name: 'Winterhude', tag: 'Wasser & Stadtleben', desc: 'Begehrte Lage am Alster-Ufer — gepflegte Altbauten, hohe Nachfrage, stabile Wertentwicklung.' },
  { name: 'Eppendorf', tag: 'Tradition & Stil', desc: 'Historischer Stadtteil mit hohen Decken, Stuckfassaden und einem der besten Pflastersteinmilieus Hamburgs.' },
  { name: 'Blankenese', tag: 'Elbe & Natur', desc: 'Exklusiver Villenvorort mit Elbblick, weitläufigen Grundstücken und diskretem Marktgeschehen.' },
  { name: 'HafenCity', tag: 'Architektur & Zukunft', desc: 'Hamburgs neues Stadtquartier — internationale Architektur, Waterfront-Lagen und modernes Stadtleben.' },
];

const process = [
  { num: '01', title: 'Erstgespräch', desc: 'Persönliches Kennenlernen, Besichtigung und erste Markteinschätzung ohne Verpflichtung.' },
  { num: '02', title: 'Bewertung', desc: 'Fundierte Wertermittlung auf Basis aktueller Vergleichsobjekte und Mikrolage-Analyse.' },
  { num: '03', title: 'Vermarktung', desc: 'Professionelles Exposé, gezielte Käuferansprache und diskrete oder öffentliche Vermarktung.' },
  { num: '04', title: 'Abschluss', desc: 'Kaufpreisverhandlung, Notartermin und Übergabe — strukturiert bis zur letzten Unterschrift.' },
];

const navLinks = [
  { href: '/referenzen/immobilien-demo', label: 'Start' },
  { href: '/referenzen/immobilien-demo/objekte', label: 'Objekte' },
  { href: '/referenzen/immobilien-demo/kontakt', label: 'Kontakt' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(184,154,114,0.3)',
  borderRadius: 4,
  padding: '14px 16px',
  fontSize: 14,
  color: '#F0EAE0',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: "'DM Sans', sans-serif",
};

export default function ImmobilienDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Elbquartier Immobilien Hamburg — Exklusive Wohnimmobilien & Beratung"
        description="Ihr Immobilienmakler in Hamburg. Exklusive Wohnimmobilien in Winterhude, Eppendorf, Blankenese und HafenCity — professionelle Vermarktung und persönliche Beratung."
        path="/referenzen/immobilien-demo"
        noIndex
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ backgroundColor: '#F5F1EA', color: '#0F0D0A' }}>

        {/* ── TOP NAV ── */}
        <nav
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            backgroundColor: scrolled ? 'rgba(245,241,234,0.97)' : 'transparent',
            borderBottom: scrolled ? '1px solid rgba(184,154,114,0.2)' : '1px solid transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            transition: 'all 0.4s ease',
          }}
        >
          <div
            style={{
              maxWidth: 1280, margin: '0 auto', padding: '0 32px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72,
            }}
          >
            {/* Logo */}
            <div>
              <span
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 20, fontWeight: 500, letterSpacing: '0.02em',
                  color: scrolled ? '#0F0D0A' : '#FFFFFF',
                  transition: 'color 0.4s',
                }}
              >
                Elbquartier Immobilien
              </span>
            </div>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 32 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href} href={href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: scrolled ? '#7B6D60' : 'rgba(255,255,255,0.8)',
                    fontSize: 13, fontWeight: 400, textDecoration: 'none',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    transition: 'color 0.3s',
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/referenzen/immobilien-demo/kontakt"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: scrolled ? '#0F0D0A' : 'rgba(255,255,255,0.15)',
                  border: scrolled ? '1px solid #0F0D0A' : '1px solid rgba(255,255,255,0.4)',
                  color: scrolled ? '#F5F1EA' : '#FFFFFF',
                  fontSize: 12, fontWeight: 600, padding: '9px 22px',
                  textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'all 0.3s',
                }}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          style={{ position: 'relative', height: '100svh', minHeight: 580, overflow: 'hidden' }}
        >
          <motion.div style={{ scale: heroScale, position: 'absolute', inset: 0 }}>
            <Image
              src={propertyImage('penthouse-hamburg', 1800)}
              alt="Exklusives Penthouse in Hamburg-Winterhude — Elbquartier Immobilien"
              fill
              priority
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              sizes="100vw"
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(15,13,10,0.35) 0%, rgba(15,13,10,0.15) 40%, rgba(15,13,10,0.75) 100%)',
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ opacity: heroOpacity }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '0 32px 64px',
                maxWidth: 1280, margin: '0 auto',
              }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#B89A72', marginBottom: 20,
                }}
              >
                Elbquartier Immobilien · Hamburg
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={1}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(46px, 6.5vw, 96px)', fontWeight: 400, lineHeight: 1.0,
                  letterSpacing: '-0.01em', color: '#FFFFFF',
                  maxWidth: 820,
                }}
              >
                Exklusive Immobilien<br />
                <em style={{ fontStyle: 'italic', color: '#D4B98A' }}>in Hamburg</em>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(14px, 1.3vw, 17px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)',
                  maxWidth: 480, marginTop: 24,
                }}
              >
                Hochwertige Wohnimmobilien, persönliche Beratung und diskrete Vermarktung in den besten Hamburger Lagen.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}
              >
                <Link
                  href="/referenzen/immobilien-demo/objekte"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: '#FFFFFF', color: '#0F0D0A',
                    fontWeight: 600, fontSize: 13, padding: '13px 28px',
                    textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}
                >
                  Objekte ansehen
                </Link>
                <Link
                  href="/referenzen/immobilien-demo/kontakt"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    border: '1px solid rgba(255,255,255,0.45)', color: '#FFFFFF',
                    fontWeight: 500, fontSize: 13, padding: '12px 26px',
                    textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}
                >
                  Immobilie bewerten lassen
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── FEATURED PROPERTIES ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
              <div>
                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: '#B89A72', marginBottom: 16,
                  }}
                >
                  Aktuelle Objekte
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 'clamp(34px, 4vw, 60px)', fontWeight: 400, letterSpacing: '-0.005em',
                    color: '#0F0D0A', lineHeight: 1.05,
                  }}
                >
                  Ausgewählte Immobilien
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/referenzen/immobilien-demo/objekte"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, fontWeight: 600, color: '#7B6D60', textDecoration: 'none',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    borderBottom: '1px solid #B89A72', paddingBottom: 2,
                  }}
                >
                  Alle Objekte ansehen
                </Link>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
              {featured.map((property, i) => (
                <motion.article
                  key={property.id}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0D8CE',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                    <Image
                      src={property.image}
                      alt={property.imageAlt}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {property.label && (
                      <span
                        style={{
                          position: 'absolute', top: 16, left: 16,
                          fontFamily: "'DM Sans', sans-serif",
                          backgroundColor: 'rgba(255,255,255,0.92)',
                          fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                          color: '#0F0D0A', padding: '5px 12px',
                        }}
                      >
                        {property.label}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '24px 26px 28px' }}>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                        color: '#B89A72', marginBottom: 10,
                      }}
                    >
                      {property.district}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 20, fontWeight: 500, color: '#0F0D0A', lineHeight: 1.25, marginBottom: 8,
                      }}
                    >
                      {property.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: '#7B6D60', lineHeight: 1.55, marginBottom: 20,
                      }}
                    >
                      {property.angle}
                    </p>
                    <div
                      style={{
                        borderTop: '1px solid #EBE3D4', paddingTop: 18,
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: "'EB Garamond', Georgia, serif",
                            fontSize: 22, fontWeight: 500, color: '#0F0D0A',
                          }}
                        >
                          {property.price}
                        </span>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11, color: '#B89A72', marginTop: 2,
                          }}
                        >
                          {property.area} · {property.rooms}
                        </p>
                      </div>
                      <Link
                        href={property.href}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11, fontWeight: 700, color: '#0F0D0A', textDecoration: 'none',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          borderBottom: '1px solid #0F0D0A', paddingBottom: 2,
                        }}
                      >
                        Exposé →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── AGENCY STATEMENT (dark) ── */}
        <section style={{ backgroundColor: '#0F0D0A', padding: '96px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="grid lg:grid-cols-2"
              style={{ gap: 80, alignItems: 'center' }}
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  style={{ width: 48, height: 1, backgroundColor: '#B89A72', marginBottom: 32 }}
                />
                <motion.h2
                  variants={fadeUp}
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 'clamp(32px, 4vw, 58px)', fontWeight: 400, fontStyle: 'italic',
                    color: '#F0EAE0', lineHeight: 1.15, marginBottom: 28,
                  }}
                >
                  "Jede Immobilie hat eine Geschichte. Unsere Aufgabe ist es, sie richtig zu erzählen."
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
                  }}
                >
                  Elbquartier Immobilien — inhabergeführt, lokal verankert, hochwertig in der Vermarktung.
                </motion.p>
              </div>
              <div>
                <motion.div variants={stagger} className="grid sm:grid-cols-2" style={{ gap: 2 }}>
                  {[
                    { title: 'Lokale Expertise', desc: 'Tiefes Wissen über Hamburger Mikro-Lagen und aktuelle Marktentwicklungen' },
                    { title: 'Diskrete Vermarktung', desc: 'Auf Wunsch ohne öffentliche Portale — zielgerichtet und vertraulich' },
                    { title: 'Professionelle Exposés', desc: 'Hochwertige Fotografie, klare Grundrisspräsentation und überzeugende Texte' },
                    { title: 'Persönliche Betreuung', desc: 'Fester Ansprechpartner vom Erstgespräch bis zur notariellen Übergabe' },
                  ].map(({ title, desc }, i) => (
                    <motion.div
                      key={title}
                      variants={fadeUp}
                      custom={i}
                      style={{
                        backgroundColor: '#1D1912',
                        padding: '28px 24px',
                      }}
                    >
                      <div style={{ width: 28, height: 1, backgroundColor: '#B89A72', marginBottom: 18 }} />
                      <h3
                        style={{
                          fontFamily: "'EB Garamond', Georgia, serif",
                          fontSize: 17, fontWeight: 500, color: '#F0EAE0', marginBottom: 10,
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6,
                        }}
                      >
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── HAMBURG DISTRICTS ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 16,
              }}
            >
              Unsere Lagen
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 'clamp(34px, 4vw, 58px)', fontWeight: 400, letterSpacing: '-0.005em',
                color: '#0F0D0A', lineHeight: 1.05, marginBottom: 56,
              }}
            >
              Hamburger Stadtteile<br />
              <em style={{ fontStyle: 'italic', color: '#8A7256' }}>mit Tiefenwissen</em>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
              {districts.map((d, i) => (
                <motion.div
                  key={d.name}
                  variants={fadeUp}
                  custom={i}
                  style={{ backgroundColor: '#EBE3D4', padding: '36px 28px' }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: '#B89A72', marginBottom: 14,
                    }}
                  >
                    {d.tag}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 26, fontWeight: 500, color: '#0F0D0A', marginBottom: 14,
                    }}
                  >
                    {d.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13, color: '#7B6D60', lineHeight: 1.65,
                    }}
                  >
                    {d.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ backgroundColor: '#1D1912', padding: '96px 32px' }}>
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
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#B89A72', marginBottom: 16,
                }}
              >
                Ablauf
              </motion.p>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400,
                  color: '#F0EAE0', lineHeight: 1.1, marginBottom: 56,
                }}
              >
                Ihr Weg zum<br />
                <em style={{ fontStyle: 'italic', color: '#B89A72' }}>erfolgreichen Verkauf</em>
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
                {process.map((step, i) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    custom={i}
                    style={{ backgroundColor: '#0F0D0A', padding: '36px 28px' }}
                  >
                    <div
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 48, fontWeight: 400, color: '#B89A72',
                        lineHeight: 1, marginBottom: 20, opacity: 0.6,
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 20, fontWeight: 500, color: '#F0EAE0', marginBottom: 12,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65,
                      }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROPERTY GALLERY ── */}
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 16,
              }}
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400,
                color: '#0F0D0A', lineHeight: 1.1, marginBottom: 48,
              }}
            >
              Hamburger Objekte
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 3 }}>
              {[
                { key: 'altbau-eppendorf', label: 'Eppendorf', name: 'Sanierter Altbau' },
                { key: 'neubau-hafencity', label: 'HafenCity', name: 'Neubau Loftwohnung' },
                { key: 'stadthaus-blankenese', label: 'Blankenese', name: 'Stadthaus mit Garten' },
                { key: 'familienhaus-volksdorf', label: 'Volksdorf', name: 'Freistehendes Familienhaus' },
              ].map((item, i) => (
                <motion.div
                  key={item.key}
                  variants={fadeUp}
                  custom={i}
                  style={{ position: 'relative', height: 320, overflow: 'hidden' }}
                >
                  <Image
                    src={propertyImage(item.key, 800)}
                    alt={item.name}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(15,13,10,0.7) 0%, transparent 55%)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px' }}>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                        color: '#B89A72', marginBottom: 5,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: 17, fontWeight: 500, color: '#FFFFFF',
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── VALUATION CTA + CONTACT FORM ── */}
        <section style={{ backgroundColor: '#0F0D0A', padding: '96px 32px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                style={{ width: 48, height: 1, backgroundColor: '#B89A72', marginBottom: 32 }}
              />
              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400,
                  color: '#F0EAE0', lineHeight: 1.1, marginBottom: 14,
                }}
              >
                Immobilie bewerten<br />
                <em style={{ fontStyle: 'italic', color: '#B89A72' }}>oder anfragen</em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 52,
                }}
              >
                Ob Sie Ihre Immobilie verkaufen, bewerten lassen oder ein Objekt anfragen möchten — wir melden uns innerhalb von 24h persönlich.
              </motion.p>

              <motion.form
                variants={fadeUp}
                onSubmit={(e) => e.preventDefault()}
                style={{
                  backgroundColor: '#1D1912',
                  border: '1px solid rgba(184,154,114,0.15)',
                  padding: 44,
                }}
              >
                <div className="grid sm:grid-cols-2" style={{ gap: 18 }}>
                  {[
                    { id: 'name', label: 'Name', placeholder: 'Ihr vollständiger Name', type: 'text' },
                    { id: 'phone', label: 'Telefon', placeholder: '040 / ...', type: 'tel' },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <label
                        htmlFor={id}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10, fontWeight: 700, color: '#B89A72',
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                        }}
                      >
                        {label}
                      </label>
                      <input id={id} type={type} placeholder={placeholder} style={inputStyle} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label
                    htmlFor="inquiry"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10, fontWeight: 700, color: '#B89A72',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                    }}
                  >
                    Anliegen
                  </label>
                  <select id="inquiry" style={{ ...inputStyle, color: 'rgba(240,234,224,0.5)' }}>
                    <option value="">Bitte wählen…</option>
                    <option value="verkauf">Immobilie verkaufen</option>
                    <option value="bewertung">Bewertung anfragen</option>
                    <option value="kauf">Objekt kaufen / anfragen</option>
                    <option value="beratung">Allgemeine Beratung</option>
                  </select>
                </div>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10, fontWeight: 700, color: '#B89A72',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                    }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Immobilie…"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: 30,
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: '#B89A72', color: '#0F0D0A',
                    fontWeight: 700, fontSize: 12, padding: '15px 36px',
                    border: 'none', cursor: 'pointer',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}
                >
                  Anfrage senden
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: '#070503', padding: '60px 32px 44px', borderTop: '1px solid rgba(184,154,114,0.12)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]"
              style={{ gap: 56, marginBottom: 56 }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 22, fontWeight: 400, color: '#F0EAE0', marginBottom: 20,
                    letterSpacing: '0.01em',
                  }}
                >
                  Elbquartier Immobilien
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: 13, lineHeight: 1.75 }}>
                  Inhabergeführte Immobilienagentur<br />
                  Harvestehuder Weg 12 · 20149 Hamburg<br />
                  Mo–Fr 09:00–18:00
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#B89A72', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20,
                  }}
                >
                  Stadtteile
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {['Winterhude', 'Eppendorf', 'Blankenese', 'HafenCity'].map((l) => (
                    <Link
                      key={l}
                      href="/referenzen/immobilien-demo/objekte"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: 'rgba(255,255,255,0.3)', fontSize: 13, textDecoration: 'none',
                      }}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#B89A72', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20,
                  }}
                >
                  Kontakt
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>040 / 44 88 920</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>info@elbquartier.de</span>
                  <Link
                    href="/referenzen/immobilien-demo/kontakt"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#B89A72', fontSize: 13, textDecoration: 'none', fontWeight: 600,
                    }}
                  >
                    Kontakt aufnehmen →
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: 28,
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
              }}
            >
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.15)', fontSize: 12 }}>
                © 2025 Elbquartier Immobilien · Hamburg
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.1)', fontSize: 12 }}>
                Demo-Website · Hamburg Websites
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
