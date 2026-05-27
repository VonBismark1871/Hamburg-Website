import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';
import { practiceInfo } from '../../../components/references/physio-demo/physioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const trustPoints = [
  'Terminbestätigung innerhalb von 24 Stunden',
  'Kassenpatienten und Selbstzahler willkommen',
  'Persönliche Ansprechperson für Ihre gesamte Therapie',
  'Zentrale Lage — direkt erreichbar mit U2 & Bus',
];

const therapyOptions = [
  'Erstgespräch',
  'Krankengymnastik',
  'Manuelle Therapie',
  'Massage',
  'Rehabilitation',
  'Sonstiges',
];

const inputStyle = {
  backgroundColor: '#0C2318',
  border: '1px solid rgba(50,184,119,0.22)',
  borderRadius: 10,
  padding: '13px 16px',
  fontSize: 14,
  color: '#EEF6F2',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

function FocusInput({ as: Tag = 'input', style: extraStyle, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <Tag
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        ...extraStyle,
        borderColor: focused ? '#32B877' : 'rgba(50,184,119,0.22)',
        boxShadow: focused ? '0 0 0 3px rgba(50,184,119,0.12)' : 'none',
      }}
    />
  );
}

export default function PhysioDemoKontaktPage() {
  return (
    <PhysioDemoLayout
      title="Kontakt & Termin – Praxis Elbbalance Physiotherapie"
      description="Kontakt- und Terminseite der Praxis Elbbalance Physiotherapie in Hamburg."
      path="/referenzen/physio-demo/kontakt"
    >
      {/* Page hero */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(56px, 7vw, 88px) 24px clamp(36px, 5vw, 56px)',
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
            <span style={{ color: '#32B877', fontSize: 12, fontWeight: 600 }}>Kontakt & Termin</span>
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
              marginBottom: 18,
            }}
          >
            Terminanfrage
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#EEF6F2',
              marginBottom: 22,
            }}
          >
            Kontakt &<br />
            <span style={{ color: '#32B877' }}>Termin anfragen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.45)',
              maxWidth: 480,
            }}
          >
            Beschreiben Sie Ihr Anliegen kurz — wir melden uns in der Regel innerhalb von 24 Stunden mit passenden Terminvorschlägen.
          </motion.p>
        </div>
      </section>

      {/* Main split layout */}
      <section
        style={{
          backgroundColor: '#081510',
          padding: 'clamp(48px, 6vw, 80px) 24px clamp(64px, 8vw, 96px)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* LEFT: Practice info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {/* Info card */}
            <motion.div
              variants={fadeUp}
              style={{
                backgroundColor: '#0C2318',
                borderRadius: 20,
                border: '1px solid rgba(50,184,119,0.12)',
                padding: '32px 28px',
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#32B877',
                  marginBottom: 22,
                }}
              >
                Praxisinformationen
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: 'rgba(50,184,119,0.08)',
                      border: '1px solid rgba(50,184,119,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 14,
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>
                      Adresse
                    </p>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>
                      {practiceInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: 'rgba(50,184,119,0.08)',
                      border: '1px solid rgba(50,184,119,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 14,
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>
                      Telefon
                    </p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{practiceInfo.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: 'rgba(50,184,119,0.08)',
                      border: '1px solid rgba(50,184,119,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 14,
                    }}
                  >
                    ✉️
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>
                      E-Mail
                    </p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{practiceInfo.email}</p>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ borderTop: '1px solid rgba(50,184,119,0.08)', paddingTop: 20, marginTop: 4 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
                    Öffnungszeiten
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {practiceInfo.hours.map((entry) => (
                      <div
                        key={entry}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 12,
                        }}
                      >
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                          {entry.split(':')[0]}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#6DD4A4' }}>
                          {entry.includes(':') ? entry.split(/:(.+)/)[1].trim() : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              variants={fadeUp}
              style={{
                backgroundColor: '#081510',
                borderRadius: 16,
                border: '1px solid rgba(50,184,119,0.1)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(50,184,119,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12 }}>📍</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Anfahrt
                </span>
              </div>
              {/* Styled map placeholder */}
              <div
                style={{
                  height: 180,
                  backgroundColor: '#0A1C12',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Grid lines simulating street grid */}
                <svg
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', inset: 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal streets */}
                  <line x1="0" y1="45" x2="100%" y2="45" stroke="rgba(50,184,119,0.12)" strokeWidth="8" />
                  <line x1="0" y1="100" x2="100%" y2="100" stroke="rgba(50,184,119,0.07)" strokeWidth="4" />
                  <line x1="0" y1="150" x2="100%" y2="150" stroke="rgba(50,184,119,0.07)" strokeWidth="4" />
                  {/* Vertical streets */}
                  <line x1="80" y1="0" x2="80" y2="100%" stroke="rgba(50,184,119,0.1)" strokeWidth="6" />
                  <line x1="200" y1="0" x2="200" y2="100%" stroke="rgba(50,184,119,0.08)" strokeWidth="4" />
                  <line x1="320" y1="0" x2="320" y2="100%" stroke="rgba(50,184,119,0.06)" strokeWidth="3" />
                  <line x1="440" y1="0" x2="440" y2="100%" stroke="rgba(50,184,119,0.06)" strokeWidth="3" />
                  {/* Blocks */}
                  <rect x="90" y="55" width="100" height="38" fill="rgba(50,184,119,0.04)" />
                  <rect x="210" y="55" width="100" height="38" fill="rgba(50,184,119,0.04)" />
                  <rect x="90" y="110" width="100" height="32" fill="rgba(50,184,119,0.03)" />
                  <rect x="210" y="110" width="120" height="32" fill="rgba(50,184,119,0.03)" />
                </svg>
                {/* Pin */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: '#E87A38',
                      border: '3px solid rgba(255,255,255,0.9)',
                      boxShadow: '0 0 0 4px rgba(232,122,56,0.3)',
                    }}
                  />
                </div>
              </div>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                  Osterstraße 142 · 20255 Hamburg — U2 Osterstraße, 5 min Fußweg
                </p>
              </div>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={fadeUp}
              style={{
                backgroundColor: '#0C2318',
                borderRadius: 16,
                border: '1px solid rgba(50,184,119,0.1)',
                padding: '24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {trustPoints.map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(50,184,119,0.12)',
                      border: '1px solid rgba(50,184,119,0.3)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 1,
                    }}
                  >
                    <span style={{ color: '#32B877', fontSize: 11, fontWeight: 700 }}>✓</span>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
                    {point}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Appointment form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              backgroundColor: '#0C2318',
              borderRadius: 22,
              border: '1px solid rgba(50,184,119,0.14)',
              padding: 'clamp(28px, 4vw, 44px)',
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#32B877',
                marginBottom: 16,
              }}
            >
              Terminanfrage
            </p>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#EEF6F2',
                lineHeight: 1.15,
                marginBottom: 28,
              }}
            >
              Termin anfragen
            </h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Name
                  </label>
                  <FocusInput
                    id="name"
                    type="text"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Therapieform */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="therapieform"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Therapieform
                  </label>
                  <FocusInput
                    as="select"
                    id="therapieform"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <option value="" style={{ backgroundColor: '#0C2318' }}>
                      Bitte auswählen…
                    </option>
                    {therapyOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ backgroundColor: '#0C2318' }}>
                        {opt}
                      </option>
                    ))}
                  </FocusInput>
                </div>

                {/* Beschwerden */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="beschwerden"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Kurze Beschreibung der Beschwerden
                  </label>
                  <FocusInput
                    as="textarea"
                    id="beschwerden"
                    rows={4}
                    placeholder="Schildern Sie kurz Ihr Anliegen…"
                    style={{ resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>

                {/* Wunschtermin */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label
                    htmlFor="wunschtermin"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Wunschtermin
                  </label>
                  <FocusInput
                    id="wunschtermin"
                    type="text"
                    placeholder="z. B. Mo oder Di vormittags"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    marginTop: 8,
                    backgroundColor: '#E87A38',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: 15,
                    padding: '15px 32px',
                    borderRadius: 28,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    width: '100%',
                    letterSpacing: '-0.01em',
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Terminanfrage senden
                </button>

                <p
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.25)',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    marginTop: 4,
                  }}
                >
                  Demo-Formular · Daten werden nicht übermittelt
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
