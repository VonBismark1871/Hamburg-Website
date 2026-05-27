import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImmobilienDemoLayout from './ImmobilienDemoLayout';
import InquiryCard from './InquiryCard';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

export default function PropertyExposePage({ path, content }) {
  return (
    <ImmobilienDemoLayout
      title={content.seoTitle}
      description={content.seoDescription}
      path={path}
    >
      {/* ── HERO IMAGE ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%', height: 'clamp(340px, 55vw, 640px)' }}>
          <Image
            src={content.heroImage}
            alt={content.heroAlt}
            fill
            priority
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            sizes="100vw"
          />
          {/* gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,13,10,0.0) 40%, rgba(15,13,10,0.55) 100%)',
          }} />
          {/* Badge overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '0 32px 36px',
            maxWidth: 1280, margin: '0 auto',
          }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: 'rgba(255,255,255,0.92)',
              fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#0F0D0A', padding: '6px 16px',
              backdropFilter: 'blur(8px)',
            }}>
              {content.badge}
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid lg:grid-cols-[1.5fr_0.5fr]"
          style={{ gap: 48, alignItems: 'start' }}
        >
          {/* Left: Property details */}
          <div>
            <motion.p variants={fadeUp} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 14,
            }}>
              {content.badge}
            </motion.p>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.1,
              color: '#0F0D0A', marginBottom: 20,
              letterSpacing: '-0.01em',
            }}>
              {content.title}
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, color: '#7B6D60', lineHeight: 1.7,
              maxWidth: 580, marginBottom: 36,
            }}>
              {content.intro}
            </motion.p>

            {/* Key facts */}
            <motion.div variants={fadeUp} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8E2D9',
              borderTop: '2px solid #B89A72',
              padding: '28px 28px 24px',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 20,
              }}>
                Eckdaten
              </p>
              <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px 24px' }}>
                {content.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, color: '#B89A72', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
                    }}>
                      {label}
                    </dt>
                    <dd style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: 17, fontWeight: 400, color: '#0F0D0A',
                    }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right: Inquiry Card (styled within existing component) */}
          <motion.div variants={fadeUp}>
            <InquiryCard />
          </motion.div>
        </motion.div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 64px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#B89A72', marginBottom: 14,
          }}>
            Bildergalerie
          </motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400,
            color: '#0F0D0A', marginBottom: 28,
          }}>
            Eindrücke des Objekts
          </motion.h2>
          <div className="grid sm:grid-cols-2" style={{ gap: 3 }}>
            {content.gallery.map((image, i) => (
              <motion.figure
                key={image.src + image.alt}
                variants={fadeUp}
                custom={i}
                style={{ overflow: 'hidden', margin: 0, position: 'relative' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={1000}
                  unoptimized
                  style={{
                    width: '100%', height: 'clamp(200px, 28vw, 320px)',
                    objectFit: 'cover', display: 'block',
                  }}
                />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROPERTY DETAILS ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          style={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          {[
            { id: 'beschreibung', label: 'Objektbeschreibung', content: content.description },
            { id: 'lage', label: 'Lage', content: content.location },
            { id: 'sonstiges', label: 'Sonstiges', content: content.misc },
          ].map((section) => (
            <motion.article key={section.id} variants={fadeUp} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8E2D9',
              padding: '30px 28px',
            }}>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 22, fontWeight: 400, color: '#0F0D0A', marginBottom: 14,
              }}>
                {section.label}
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, color: '#7B6D60', lineHeight: 1.75,
              }}>
                {section.content}
              </p>
            </motion.article>
          ))}

          {/* Ausstattung */}
          <motion.article variants={fadeUp} style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E2D9',
            padding: '30px 28px',
          }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 22, fontWeight: 400, color: '#0F0D0A', marginBottom: 14,
            }}>
              Ausstattung
            </h2>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {content.features.map((feature) => (
                <li key={feature} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, color: '#7B6D60', lineHeight: 1.55,
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <span style={{ color: '#B89A72', flexShrink: 0, marginTop: 2 }}>—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </section>

      {/* ── LOCATION SUMMARY + CTA ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 80px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} style={{
            backgroundColor: '#FAF8F4',
            border: '1px solid #E8E2D9',
            borderLeft: '3px solid #B89A72',
            padding: '28px 28px',
            marginBottom: 36,
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 8,
            }}>
              Standort in Hamburg
            </p>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 18, fontWeight: 400, color: '#0F0D0A',
            }}>
              {content.locationSummary}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/referenzen/immobilien-demo/objekte" style={{
              fontFamily: "'DM Sans', sans-serif",
              display: 'inline-block',
              border: '1px solid #0F0D0A', color: '#0F0D0A',
              fontWeight: 600, fontSize: 12, padding: '13px 28px',
              textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}>
              Weitere Objekte
            </Link>
            <Link href="/referenzen/immobilien-demo/kontakt" style={{
              fontFamily: "'DM Sans', sans-serif",
              display: 'inline-block',
              backgroundColor: '#0F0D0A', color: '#F5F1EA',
              fontWeight: 600, fontSize: 12, padding: '14px 28px',
              textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}>
              Besichtigung vereinbaren
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0F0D0A', padding: '52px 32px 40px', borderTop: '1px solid rgba(184,154,114,0.1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
            <div>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, fontWeight: 400, color: '#F0EAE0', marginBottom: 12 }}>
                Elbquartier Immobilien
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13, lineHeight: 1.8 }}>
                Harvestehuder Weg 12 · 20149 Hamburg<br />
                Mo–Fr 09:00–18:00
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#B89A72', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>
                Navigation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href="/referenzen/immobilien-demo/objekte" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13, textDecoration: 'none' }}>Alle Objekte</Link>
                <Link href="/referenzen/immobilien-demo/kontakt" style={{ fontFamily: "'DM Sans', sans-serif", color: '#B89A72', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>Kontakt →</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.14)', fontSize: 12 }}>
              © 2025 Elbquartier Immobilien · Hamburg
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.1)', fontSize: 12 }}>
              Demo-Website · Hamburg Websites
            </p>
          </div>
        </div>
      </footer>
    </ImmobilienDemoLayout>
  );
}
