import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const approachCards = [
  {
    step: '01',
    title: 'Befundaufnahme',
    desc: 'Eine gründliche Anamnese erfasst Schmerzgeschichte, Alltagsbelastung und Bewegungsmuster. So entsteht ein klares Bild — kein Rücken gleicht dem anderen.',
    icon: '◎',
  },
  {
    step: '02',
    title: 'Therapieplan',
    desc: 'Auf Basis der Befundaufnahme entwickeln wir einen individuellen Plan: Behandlungsfrequenz, Techniken und begleitende Heimübungen — transparent und nachvollziehbar.',
    icon: '◈',
  },
  {
    step: '03',
    title: 'Behandlung & Übungen',
    desc: 'Manuelle Techniken reduzieren Schmerzen und stellen Beweglichkeit wieder her. Begleitende Kräftigungsübungen sichern den Erfolg dauerhaft im Alltag.',
    icon: '◉',
  },
];

const symptoms = [
  'Anhaltende Schmerzen im unteren Rücken über mehrere Tage',
  'Ausstrahlende Schmerzen ins Gesäß oder die Beine',
  'Morgensteifigkeit, die länger als 30 Minuten anhält',
  'Schmerzen beim langen Sitzen oder Stehen',
  'Bewegungseinschränkungen beim Bücken oder Drehen',
  'Wiederkehrende Verspannungen trotz Bewegung',
];

const keyPoints = [
  {
    headline: 'Ursache statt Symptom',
    body: 'Physiotherapie setzt dort an, wo der Schmerz entsteht — nicht nur wo er spürbar ist. Oft liegt die Ursache in kompensatorischen Bewegungsmustern, die sich über Monate eingeschlichen haben.',
  },
  {
    headline: 'Aktiv und passiv kombiniert',
    body: 'Manuelle Techniken nehmen Druck von Gelenken und Nerven. Aktive Übungen stärken die stabilisierende Muskulatur. Erst diese Kombination sorgt für nachhaltige Beschwerdefreiheit.',
  },
  {
    headline: 'Alltag mitdenken',
    body: 'Jeder Therapieplan berücksichtigt Ihren Berufsalltag, sportliche Aktivitäten und persönliche Ziele. Heimübungen sind so gestaltet, dass sie sich realistisch integrieren lassen.',
  },
];

const exercises = [
  {
    title: 'Beckenbodenaktivierung',
    cue: 'Rückenlage, Beine angestellt. Bauch sanft einziehen, tief ausatmen, Spannung 5 Sek. halten.',
    sets: '3 × 10 Wdh.',
  },
  {
    title: 'Katzenbuckel & Hohlkreuz',
    cue: 'Vierfüßlerstand. Abwechselnd Rücken maximal runden und strecken, langsam und kontrolliert.',
    sets: '2 × 12 Wdh.',
  },
  {
    title: 'Hüftbeuger-Dehnung',
    cue: 'Ausfallschritt, hinteres Knie am Boden. Beckenboden anspannen, Oberkörper aufrecht halten, dehnen.',
    sets: '30 Sek. je Seite',
  },
];

export default function BackPainDetailPage() {
  return (
    <PhysioDemoLayout
      title="Physiotherapie bei Rückenschmerzen – Praxis Elbbalance"
      description="Behandlungsdetailseite der Praxis Elbbalance für Rückenschmerzen: Ursachen, Therapieansatz und gezielte Behandlung in Hamburg."
      path="/referenzen/physio-demo/rueckenschmerzen"
    >
      {/* Hero with image */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(420px, 55vw, 640px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/physio/treatment2.jpg"
          alt="Physiotherapie bei Rückenschmerzen"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          sizes="100vw"
        />
        {/* Deep overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(8,21,16,0.55) 0%, rgba(8,21,16,0.75) 50%, rgba(8,21,16,0.97) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1280,
            width: '100%',
            margin: '0 auto',
            padding: '0 24px clamp(48px, 7vw, 80px)',
          }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}
          >
            <Link
              href="/referenzen/physio-demo"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'none' }}
            >
              Start
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>›</span>
            <Link
              href="/referenzen/physio-demo/leistungen"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textDecoration: 'none' }}
            >
              Leistungen
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>›</span>
            <span style={{ color: '#32B877', fontSize: 12, fontWeight: 600 }}>Rückenschmerzen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{
              fontSize: 'clamp(42px, 6.5vw, 88px)',
              fontWeight: 800,
              lineHeight: 1.01,
              letterSpacing: '-0.035em',
              color: '#EEF6F2',
              marginBottom: 18,
            }}
          >
            Rücken&shy;schmerzen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 500,
              fontWeight: 400,
            }}
          >
            Ursachen verstehen.{' '}
            <span style={{ color: '#6DD4A4' }}>Gezielt behandeln.</span>
          </motion.p>
        </div>
      </section>

      {/* Treatment approach — 3 columns */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(56px, 7vw, 96px) 24px',
          borderBottom: '1px solid rgba(50,184,119,0.08)',
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
              Unser Ansatz
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
              In drei Phasen zur<br />
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>dauerhaften Besserung</span>
            </motion.h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 16,
              }}
            >
              {approachCards.map((card, i) => (
                <motion.div
                  key={card.step}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    backgroundColor: '#0C2318',
                    borderRadius: 20,
                    border: '1px solid rgba(50,184,119,0.12)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: '#32B877',
                        letterSpacing: '0.12em',
                        opacity: 0.7,
                      }}
                    >
                      {card.step}
                    </span>
                    <div
                      style={{
                        width: 1,
                        height: 20,
                        backgroundColor: 'rgba(50,184,119,0.2)',
                      }}
                    />
                    <span style={{ fontSize: 22, color: '#32B877' }}>{card.icon}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#EEF6F2',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.48)',
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* So hilft Physiotherapie — alternating blocks */}
      <section
        style={{
          backgroundColor: '#0C2318',
          padding: 'clamp(56px, 7vw, 96px) 24px',
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
              Wirkungsweise
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(26px, 3vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#EEF6F2',
                lineHeight: 1.1,
                marginBottom: 56,
              }}
            >
              So hilft Physiotherapie
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {keyPoints.map((point, i) => (
                <motion.div
                  key={point.headline}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(180px, 22%, 260px) 1fr',
                    gap: 48,
                    alignItems: 'start',
                    padding: '36px 0',
                    borderBottom: '1px solid rgba(50,184,119,0.08)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 36,
                        height: 3,
                        backgroundColor: '#32B877',
                        borderRadius: 2,
                        marginBottom: 18,
                        opacity: 0.7,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: 'clamp(16px, 1.5vw, 20px)',
                        fontWeight: 700,
                        color: '#EEF6F2',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {point.headline}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.48)',
                      paddingTop: 4,
                    }}
                  >
                    {point.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptom guide */}
      <section
        style={{
          backgroundColor: '#081510',
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
              Symptome
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
              Wann lohnt sich Physiotherapie?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: 44,
                maxWidth: 480,
              }}
            >
              Diese Beschwerden sind typische Anzeichen, bei denen physiotherapeutische Behandlung nachweislich helfen kann.
            </motion.p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
                gap: 12,
              }}
            >
              {symptoms.map((symptom, i) => (
                <motion.div
                  key={symptom}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    backgroundColor: '#0C2318',
                    borderRadius: 14,
                    border: '1px solid rgba(50,184,119,0.1)',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#32B877',
                      flexShrink: 0,
                      marginTop: 5,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    {symptom}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exercise preview */}
      <section
        style={{
          backgroundColor: '#122B1F',
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
              Übungsvorschau
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
              Übungen für zuhause
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
              Diese einfachen Übungen ergänzen die Behandlung in der Praxis. Ihr Therapeut passt das Heimprogramm individuell auf Sie an.
            </motion.p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: 16,
              }}
            >
              {exercises.map((ex, i) => (
                <motion.div
                  key={ex.title}
                  variants={fadeUp}
                  custom={i}
                  style={{
                    backgroundColor: '#0C2318',
                    borderRadius: 18,
                    border: '1px solid rgba(50,184,119,0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Visual placeholder */}
                  <div
                    style={{
                      height: 160,
                      backgroundColor: '#081510',
                      borderBottom: '1px solid rgba(50,184,119,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Grid pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                          'linear-gradient(rgba(50,184,119,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(50,184,119,0.06) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                      }}
                    />
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          border: '2px solid rgba(50,184,119,0.3)',
                          backgroundColor: 'rgba(50,184,119,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ color: '#32B877', fontSize: 20 }}>◎</span>
                      </div>
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.2)',
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Illustration
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <h3
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: '#EEF6F2',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {ex.title}
                      </h3>
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
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {ex.sets}
                      </span>
                    </div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>
                      {ex.cue}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(64px, 8vw, 100px) 24px',
          borderTop: '1px solid rgba(50,184,119,0.08)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Jetzt starten
            </p>
            <h2
              style={{
                fontSize: 'clamp(30px, 4vw, 58px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#EEF6F2',
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              Termin für Erstgespräch<br />
              <span style={{ color: '#32B877' }}>jetzt anfragen</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: 44,
                maxWidth: 440,
                margin: '0 auto 44px',
              }}
            >
              Beschreiben Sie Ihre Beschwerden kurz — wir melden uns innerhalb von 24h mit konkreten Terminvorschlägen.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/referenzen/physio-demo/kontakt"
                style={{
                  backgroundColor: '#E87A38',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '15px 38px',
                  borderRadius: 30,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Termin für Erstgespräch anfragen
              </Link>
              <Link
                href="/referenzen/physio-demo/leistungen"
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
                Alle Leistungen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
