import Link from 'next/link';
import { motion } from 'framer-motion';
import ImmobilienDemoLayout from '../../../../components/references/immobilien-demo/ImmobilienDemoLayout';
import FilterChips from '../../../../components/references/immobilien-demo/FilterChips';
import PropertyCard from '../../../../components/references/immobilien-demo/PropertyCard';
import { properties, propertyFilters } from '../../../../components/references/immobilien-demo/properties';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const stats = [
  { value: '6 Objekte', label: 'Kuratierte Angebote' },
  { value: 'Hamburg & Umgebung', label: 'Exklusive Lagen' },
  { value: 'Diskrete Vermarktung', label: 'Auf Wunsch vertraulich' },
];

export default function ImmobilienObjektePage() {
  return (
    <ImmobilienDemoLayout
      title="Aktuelle Immobilienangebote – Elbquartier Immobilien"
      description="Sechs kuratierte Immobilienangebote in Hamburg — von Altbauwohnung bis Penthouse. Persönliche Beratung und diskrete Vermarktung."
      path="/referenzen/immobilien-demo/objekte"
    >

      {/* ── EDITORIAL HEADER ── */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #E8E2D9', padding: '56px 32px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} custom={0} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 18,
            }}>
              Elbquartier Immobilien · Hamburg
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(38px, 5vw, 72px)', fontWeight: 400, lineHeight: 1.05,
              color: '#0F0D0A', letterSpacing: '-0.01em', marginBottom: 20,
            }}>
              Kuratierte<br />
              <em style={{ fontStyle: 'italic', color: '#8A7256' }}>Immobilien</em>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.3vw, 17px)', color: '#7B6D60', lineHeight: 1.7,
              maxWidth: 520, marginBottom: 48,
            }}>
              Sechs ausgewählte Objekte in Hamburg — jedes mit individuellem Charakter, hochwertiger Präsentation und persönlicher Beratung.
            </motion.p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            style={{
              display: 'flex', gap: 0,
              borderTop: '1px solid #E8E2D9',
              overflowX: 'auto',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.value} variants={fadeUp} custom={i + 3} style={{
                flex: '0 0 auto',
                padding: '24px 40px 24px 0',
                marginRight: 40,
                borderRight: i < stats.length - 1 ? '1px solid #E8E2D9' : 'none',
                paddingRight: i < stats.length - 1 ? 40 : 0,
              }}>
                <p style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 19, fontWeight: 400, color: '#0F0D0A', marginBottom: 4,
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: '#B89A72', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {/* Filter chips */}
          <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
            <FilterChips filters={propertyFilters} />
          </motion.div>

          {/* Property grid */}
          <div className="grid lg:grid-cols-2" style={{ gap: 28 }}>
            {properties.map((property, i) => (
              <motion.div key={property.id} variants={fadeUp} custom={i}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "Nicht das Richtige dabei?" consultation card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          style={{ marginTop: 64 }}
        >
          <div style={{
            backgroundColor: '#FAF8F4',
            border: '1px solid #E8E2D9',
            borderTop: '2px solid #B89A72',
            padding: '48px 40px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 14,
            }}>
              Individuelle Beratung
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400,
              color: '#0F0D0A', lineHeight: 1.1, marginBottom: 16,
            }}>
              Nicht das Richtige dabei?
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, color: '#7B6D60', lineHeight: 1.7,
              maxWidth: 480, margin: '0 auto 28px',
            }}>
              Wir finden das passende Objekt für Sie — aus unserem Netzwerk, diskret und gezielt auf Ihre Wünsche abgestimmt.
            </p>
            <Link href="/referenzen/immobilien-demo/kontakt" style={{
              fontFamily: "'DM Sans', sans-serif",
              display: 'inline-block',
              backgroundColor: '#0F0D0A', color: '#F5F1EA',
              fontWeight: 600, fontSize: 12, padding: '13px 30px',
              textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              Persönliche Beratung anfragen
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── DARK CTA: Objekt verkaufen? ── */}
      <section style={{ backgroundColor: '#0F0D0A', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}
          >
            <div>
              <motion.div variants={fadeUp} style={{ width: 40, height: 1, backgroundColor: '#B89A72', marginBottom: 28 }} />
              <motion.h2 variants={fadeUp} style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(32px, 4.5vw, 62px)', fontWeight: 400, fontStyle: 'italic',
                color: '#F0EAE0', lineHeight: 1.05, marginBottom: 16,
              }}>
                Objekt verkaufen?
              </motion.h2>
              <motion.p variants={fadeUp} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65,
                maxWidth: 400,
              }}>
                Diskrete Vermarktung, professionelles Exposé und eine persönliche Begleitung bis zur Übergabe.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/referenzen/immobilien-demo/kontakt" style={{
                fontFamily: "'DM Sans', sans-serif",
                display: 'inline-block',
                backgroundColor: '#B89A72', color: '#0F0D0A',
                fontWeight: 700, fontSize: 13, padding: '16px 36px',
                textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                Bewertung anfragen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#070503', padding: '52px 32px 40px', borderTop: '1px solid rgba(184,154,114,0.1)' }}>
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
                <Link href="/referenzen/immobilien-demo" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13, textDecoration: 'none' }}>Start</Link>
                <Link href="/referenzen/immobilien-demo/objekte" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13, textDecoration: 'none' }}>Objekte</Link>
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
