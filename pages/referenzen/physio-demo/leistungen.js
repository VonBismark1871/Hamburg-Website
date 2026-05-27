import Link from 'next/link';
import { motion } from 'framer-motion';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';
import { services, complaints } from '../../../components/references/physio-demo/physioData';

const sessionTimes = {
  'Krankengymnastik': '50 min',
  'Manuelle Therapie': '50 min',
  'Klassische Massage': '50 min',
  'Lymphdrainage': '45 min',
  'Sportphysiotherapie': '60 min',
  'Rehabilitation': '60 min',
  'Haltungstraining': '45 min',
  'Präventive Behandlung': '45 min',
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function PhysioDemoLeistungenPage() {
  return (
    <PhysioDemoLayout
      title="Leistungen – Praxis Elbbalance Physiotherapie"
      description="Leistungsseite der Praxis Elbbalance mit Behandlungen, Beschwerden und Terminwegen."
      path="/referenzen/physio-demo/leistungen"
    >
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(56px, 8vw, 96px) 24px clamp(40px, 5vw, 64px)',
          borderBottom: '1px solid rgba(50,184,119,0.08)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}
          >
            <Link
              href="/referenzen/physio-demo"
              style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none' }}
            >
              Start
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>›</span>
            <span style={{ color: '#32B877', fontSize: 12, fontWeight: 600 }}>Leistungen</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#32B877',
              marginBottom: 20,
            }}
          >
            Therapie &amp; Behandlung
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#EEF6F2',
              marginBottom: 24,
            }}
          >
            Unser<br />
            <span style={{ color: '#32B877' }}>Behandlungsspektrum</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 520,
            }}
          >
            Jede Behandlung beginnt mit einer sorgfältigen Befundaufnahme. Darauf aufbauend planen wir eine Therapie, die zu Ihrem Alltag passt — verständlich und in klaren Schritten.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ backgroundColor: '#081510', padding: 'clamp(56px, 7vw, 96px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#32B877',
                marginBottom: 16,
              }}
            >
              Unsere Leistungen
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(26px, 3vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#EEF6F2',
                lineHeight: 1.1,
                marginBottom: 48,
              }}
            >
              8 Behandlungsformen —<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>individuell auf Sie abgestimmt</span>
            </motion.h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
                gap: 16,
              }}
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    backgroundColor: '#0C2318',
                    borderRadius: 18,
                    borderLeft: '4px solid rgba(50,184,119,0.35)',
                    border: '1px solid rgba(50,184,119,0.12)',
                    borderLeftWidth: 4,
                    borderLeftColor: 'rgba(50,184,119,0.35)',
                    padding: '28px 28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 12,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: '#EEF6F2',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>
                    {sessionTimes[service.title] && (
                      <span
                        style={{
                          flexShrink: 0,
                          backgroundColor: 'rgba(50,184,119,0.1)',
                          border: '1px solid rgba(50,184,119,0.22)',
                          color: '#6DD4A4',
                          fontSize: 11,
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 20,
                          letterSpacing: '0.04em',
                          marginTop: 2,
                        }}
                      >
                        {sessionTimes[service.title]}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href="/referenzen/physio-demo/kontakt"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      color: '#32B877',
                      fontSize: 12,
                      fontWeight: 700,
                      textDecoration: 'none',
                      marginTop: 4,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Termin anfragen →
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beschwerdebilder */}
      <section
        style={{
          backgroundColor: '#0C2318',
          padding: 'clamp(56px, 7vw, 96px) 24px',
          borderTop: '1px solid rgba(50,184,119,0.08)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#32B877',
                marginBottom: 16,
              }}
            >
              Beschwerdebilder
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(26px, 3vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#EEF6F2',
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              Womit können wir helfen?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: 48,
                maxWidth: 480,
              }}
            >
              Physiotherapie wirkt bei einer Vielzahl von Beschwerden — akut oder chronisch, nach Verletzungen oder zur Vorbeugung.
            </motion.p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 14,
              }}
            >
              {complaints.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    backgroundColor: '#122B1F',
                    borderRadius: 14,
                    border: '1px solid rgba(50,184,119,0.1)',
                    padding: '22px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: '#32B877',
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#EEF6F2',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.45)',
                      paddingLeft: 17,
                    }}
                  >
                    {c.description}
                  </p>
                  {c.href && (
                    <Link
                      href={c.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        color: '#32B877',
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: 'none',
                        paddingLeft: 17,
                        marginTop: 2,
                      }}
                    >
                      Mehr erfahren →
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(56px, 7vw, 80px) 24px',
          borderTop: '1px solid rgba(50,184,119,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#32B877',
                marginBottom: 16,
              }}
            >
              Nächster Schritt
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#EEF6F2',
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Unsicher, welche Leistung<br />zu Ihnen passt?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 460,
                margin: '0 auto 40px',
              }}
            >
              Beschreiben Sie Ihre Beschwerden kurz — wir melden uns mit einer passenden Ersteinschätzung und konkreten Terminvorschlägen.
            </p>
            <div
              style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link
                href="/referenzen/physio-demo/kontakt"
                style={{
                  backgroundColor: '#E87A38',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '15px 36px',
                  borderRadius: 30,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Termin anfragen
              </Link>
              <Link
                href="/referenzen/physio-demo/rueckenschmerzen"
                style={{
                  border: '1px solid rgba(50,184,119,0.35)',
                  color: '#6DD4A4',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '14px 30px',
                  borderRadius: 30,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Rückenschmerzen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
