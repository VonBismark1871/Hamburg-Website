import Link from 'next/link';
import { motion } from 'framer-motion';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { inspectionChecklist } from '../../../components/references/autoservice-demo/demoData';

const processSteps = [
  { num: '01', title: 'Anlieferung', desc: 'Fahrzeugübergabe mit Zustandscheck und Auftragserfassung. Wir besprechen Ihr Anliegen persönlich.' },
  { num: '02', title: 'Diagnose', desc: 'Elektronischer Fahrzeugcheck, Sichtprüfung aller sicherheitsrelevanten Komponenten und Fehlerspeicher-Auslese.' },
  { num: '03', title: 'Übergabe', desc: 'Fahrzeugübergabe mit vollständigem Serviceprotokoll und klaren Empfehlungen für künftige Wartungsintervalle.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="rgba(50,184,119,0.15)" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke="#32B877" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AutoserviceInspectionPage() {
  return (
    <AutoserviceDemoLayout
      title="Inspektion | Elbwerk Kfz-Service"
      description="Fahrzeuginspektion in Hamburg: strukturiert, transparent und vollständig dokumentiert. Checkliste und Terminanfrage."
      path="/referenzen/autoservice-demo/inspektion"
    >
      {/* Hero */}
      <section style={{ backgroundColor: '#161D2A', borderBottom: '1px solid rgba(232,50,28,0.15)', padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}
          >
            <Link href="/referenzen/autoservice-demo" style={{ fontSize: 12, color: '#7A8EA8', textDecoration: 'none', fontWeight: 500 }}>
              Start
            </Link>
            <span style={{ fontSize: 12, color: '#4D5E72' }}>/</span>
            <span style={{ fontSize: 12, color: '#E8321C', fontWeight: 600 }}>Inspektion</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
          >
            <div style={{ width: 28, height: 2, backgroundColor: '#E8321C' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
              Fahrzeugwartung
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#EEF3FA',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: 22,
            }}
          >
            Fahrzeug-<br />
            <span style={{ color: '#E8321C' }}>inspektion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              fontWeight: 500,
              color: '#7A8EA8',
              letterSpacing: '0.01em',
            }}
          >
            Strukturiert. Transparent. Dokumentiert.
          </motion.p>
        </div>
      </section>

      {/* Two-column: text + checklist */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* LEFT: text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p variants={fadeUp} custom={0} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#E8321C', marginBottom: 20,
            }}>
              Warum regelmäßig inspizieren?
            </motion.p>

            <motion.h2 variants={fadeUp} custom={1} style={{
              fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em',
              color: '#EEF3FA', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 28,
            }}>
              Sicherheit &amp;<br />Werterhalt
            </motion.h2>

            {[
              {
                heading: 'Verschleiß frühzeitig erkennen',
                text: 'Regelmäßige Inspektionen helfen, sich anbahnende Defekte zu identifizieren, bevor sie zu teuren Folgeschäden führen.',
              },
              {
                heading: 'Fahrzeugsicherheit im Alltag',
                text: 'Bremsen, Beleuchtung, Fahrwerk und Flüssigkeitsstände — alles wird systematisch geprüft und dokumentiert.',
              },
              {
                heading: 'Planbare Werkstattkosten',
                text: 'Durch klare Diagnose und Kostenvoranschlag wissen Sie vor der Arbeit, was auf Sie zukommt. Keine Überraschungen.',
              },
              {
                heading: 'Herstellergerechte Dokumentation',
                text: 'Alle Inspektionsergebnisse werden schriftlich festgehalten — wichtig für Garantieansprüche und den Fahrzeugwert beim Verkauf.',
              },
            ].map(({ heading, text }, i) => (
              <motion.div key={heading} variants={fadeUp} custom={i + 2} style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#EEF3FA', marginBottom: 8 }}>
                  {heading}
                </h3>
                <p style={{ fontSize: 13.5, color: '#7A8EA8', lineHeight: 1.65 }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: checklist panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              backgroundColor: '#1F2D3D',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '36px 32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <div style={{ width: 20, height: 2, backgroundColor: '#32B877' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#32B877' }}>
                Prüfprotokoll
              </span>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#EEF3FA', marginBottom: 28, letterSpacing: '-0.01em' }}>
              Was wir bei jeder<br />Inspektion prüfen
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {inspectionChecklist.map((item, i) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '16px 0',
                  borderBottom: i < inspectionChecklist.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    width: 26,
                    height: 26,
                    backgroundColor: 'rgba(232,50,28,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#E8321C',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 13.5, color: '#B0BECF', lineHeight: 1.55, paddingTop: 2 }}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 28,
              padding: '18px 20px',
              backgroundColor: 'rgba(232,50,28,0.08)',
              border: '1px solid rgba(232,50,28,0.2)',
            }}>
              <p style={{ fontSize: 12, color: '#7A8EA8', lineHeight: 1.6 }}>
                Alle Ergebnisse werden schriftlich dokumentiert und Ihnen bei der Fahrzeugübergabe übergeben.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ backgroundColor: '#161D2A', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#E8321C', marginBottom: 14,
            }}>
              Ablauf
            </motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontSize: 'clamp(26px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em',
              color: '#EEF3FA', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 56,
            }}>
              In drei Schritten<br />zur Inspektion
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  custom={i}
                  style={{ backgroundColor: '#0D1117', padding: '32px 28px', position: 'relative' }}
                >
                  {/* Connecting line (not last) */}
                  {i < processSteps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: 46,
                      right: -1,
                      width: 2,
                      height: 'calc(100% - 92px)',
                      backgroundColor: 'rgba(232,50,28,0.2)',
                    }} />
                  )}
                  <div style={{
                    fontSize: 42, fontWeight: 700, color: '#E8321C',
                    letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 18,
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontSize: 14, fontWeight: 700, color: '#EEF3FA',
                    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#7A8EA8', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price teaser + CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}
      >
        <div style={{
          backgroundColor: '#1F2D3D',
          border: '1px solid rgba(232,50,28,0.15)',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 20,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
            Preisinfo
          </span>
          <div style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 700, color: '#EEF3FA', letterSpacing: '-0.03em', lineHeight: 1 }}>
            ab 89 <span style={{ fontSize: '0.55em', color: '#7A8EA8' }}>€</span>
          </div>
          <p style={{ fontSize: 15, color: '#7A8EA8', lineHeight: 1.65, maxWidth: 440 }}>
            Inspektion nach Herstellervorgabe inkl. digitaler Dokumentation. Kostenvoranschlag vor Beginn — ohne versteckte Posten.
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
            marginTop: 8,
          }}>
            Inspektionstermin anfragen →
          </Link>
        </div>
      </motion.section>
    </AutoserviceDemoLayout>
  );
}
