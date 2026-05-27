import Link from 'next/link';
import { motion } from 'framer-motion';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { services } from '../../../components/references/autoservice-demo/demoData';

const prices = {
  'Inspektion': 'ab 89 €',
  'Ölwechsel': 'ab 59 €',
  'Bremsenservice': 'ab 129 €',
  'Reifenwechsel & Einlagerung': 'ab 25 € / Rad',
  'Fahrzeugdiagnose': 'ab 49 €',
  'Klimaservice': 'ab 79 €',
  'HU / AU Vorbereitung': 'ab 39 €',
  'Allgemeine Reparaturen': 'auf Anfrage',
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function AutoserviceServicesPage() {
  return (
    <AutoserviceDemoLayout
      title="Leistungen | Elbwerk Kfz-Service"
      description="Leistungsübersicht einer modernen Kfz-Werkstatt in Hamburg mit klaren Beschreibungen und Anfrageoptionen."
      path="/referenzen/autoservice-demo/leistungen"
    >
      {/* Hero band */}
      <section style={{ backgroundColor: '#161D2A', borderBottom: '1px solid rgba(232,50,28,0.15)', padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}
          >
            <Link href="/referenzen/autoservice-demo" style={{ fontSize: 12, color: '#7A8EA8', textDecoration: 'none', fontWeight: 500 }}>
              Start
            </Link>
            <span style={{ fontSize: 12, color: '#4D5E72' }}>/</span>
            <span style={{ fontSize: 12, color: '#E8321C', fontWeight: 600 }}>Leistungen</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
          >
            <div style={{ width: 28, height: 2, backgroundColor: '#E8321C' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
              Werkstattleistungen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#EEF3FA',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: 24,
            }}
          >
            Unsere<br />
            <span style={{ color: '#E8321C' }}>Leistungen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.7, color: '#7A8EA8', maxWidth: 540 }}
          >
            Alles aus einer Hand — von der einfachen Inspektion bis zur komplexen Reparatur. Klare Kommunikation vor, während und nach der Arbeit.
          </motion.p>
        </div>
      </section>

      {/* Service cards grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: 2,
        }}>
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              style={{
                backgroundColor: '#161D2A',
                borderLeft: '4px solid #E8321C',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                transition: 'box-shadow 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(232,50,28,0.35), 0 8px 32px rgba(232,50,28,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                <h2 style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#EEF3FA',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  lineHeight: 1.2,
                }}>
                  {service.title}
                </h2>
                {prices[service.title] && (
                  <div style={{
                    backgroundColor: 'rgba(232,50,28,0.12)',
                    border: '1px solid rgba(232,50,28,0.3)',
                    padding: '4px 12px',
                    flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#E8321C', whiteSpace: 'nowrap' }}>
                      {prices[service.title]}
                    </span>
                  </div>
                )}
              </div>
              <p style={{ fontSize: 13.5, color: '#7A8EA8', lineHeight: 1.65, flex: 1 }}>
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: 24, fontSize: 11, color: '#4D5E72' }}
        >
          * Richtwertpreise. Endpreise nach Diagnose und Fahrzeugart. Kostenvoranschlag vor Beginn der Arbeiten.
        </motion.p>
      </section>

      {/* Bottom CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        style={{ backgroundColor: '#161D2A', borderTop: '1px solid rgba(232,50,28,0.15)', padding: '80px 24px' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 24, height: 2, backgroundColor: '#E8321C' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
              Termin
            </span>
            <div style={{ width: 24, height: 2, backgroundColor: '#E8321C' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#EEF3FA',
            textTransform: 'uppercase',
            lineHeight: 1.05,
          }}>
            Werkstatttermin anfragen
          </h2>
          <p style={{ fontSize: 15, color: '#7A8EA8', lineHeight: 1.7, maxWidth: 480 }}>
            Wir melden uns innerhalb von 24 Stunden und bestätigen Ihren Termin mit einem klaren Ablaufplan.
          </p>
          <Link href="/referenzen/autoservice-demo/kontakt" style={{
            backgroundColor: '#E8321C',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 14,
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Termin anfragen →
          </Link>
        </div>
      </motion.section>
    </AutoserviceDemoLayout>
  );
}
