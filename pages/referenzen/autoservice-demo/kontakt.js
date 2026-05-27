import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { workshopDetails } from '../../../components/references/autoservice-demo/demoData';

const inputStyle = {
  backgroundColor: '#1F2D3D',
  border: '1px solid rgba(232,50,28,0.25)',
  padding: '13px 16px',
  fontSize: 14,
  color: '#EEF3FA',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  transition: 'border-color 0.18s ease',
};

const labelStyle = {
  fontSize: 11,
  fontWeight: 700,
  color: '#7A8EA8',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: 8,
};

const trustPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14L5.5 18L7.5 12L2 8H8.5L11 2Z" stroke="#E8321C" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Faire Preise',
    desc: 'Kostenvoranschlag vor jedem Auftrag',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#E8321C" strokeWidth="1.5" />
        <path d="M11 6V11L14 14" stroke="#E8321C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Kurze Wartezeiten',
    desc: 'Terminplanung für reibungslose Abläufe',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6H18M4 11H14M4 16H10" stroke="#E8321C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Klar kommuniziert',
    desc: 'Rückmeldung bei jedem Arbeitsschritt',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C7.13 2 4 5.13 4 9C4 14 11 20 11 20C11 20 18 14 18 9C18 5.13 14.87 2 11 2Z" stroke="#E8321C" strokeWidth="1.5" />
        <circle cx="11" cy="9" r="2.5" stroke="#E8321C" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Zentrale Lage',
    desc: 'Hamburg-Hammerbrook, gut erreichbar',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function FocusInput({ type = 'text', id, placeholder, style = {} }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        ...style,
        borderColor: focused ? '#E8321C' : 'rgba(232,50,28,0.25)',
      }}
    />
  );
}

function FocusSelect({ id, children }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      id={id}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        color: '#7A8EA8',
        borderColor: focused ? '#E8321C' : 'rgba(232,50,28,0.25)',
      }}
    >
      {children}
    </select>
  );
}

function FocusTextarea({ id, rows, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        resize: 'vertical',
        borderColor: focused ? '#E8321C' : 'rgba(232,50,28,0.25)',
      }}
    />
  );
}

export default function AutoserviceContactPage() {
  return (
    <AutoserviceDemoLayout
      title="Kontakt & Termin | Elbwerk Kfz-Service"
      description="Werkstatttermin anfragen bei Elbwerk Kfz-Service in Hamburg. Adresse, Öffnungszeiten, Telefon und Online-Anfrage."
      path="/referenzen/autoservice-demo/kontakt"
    >
      {/* Hero band */}
      <section style={{ backgroundColor: '#161D2A', borderBottom: '1px solid rgba(232,50,28,0.15)', padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
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
            <span style={{ fontSize: 12, color: '#E8321C', fontWeight: 600 }}>Kontakt</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}
          >
            <div style={{ width: 28, height: 2, backgroundColor: '#E8321C' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E8321C' }}>
              Terminanfrage
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
              marginBottom: 24,
            }}
          >
            Kontakt &amp;<br />
            <span style={{ color: '#E8321C' }}>Termin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.7, color: '#7A8EA8', maxWidth: 480 }}
          >
            Anfrage stellen — wir melden uns innerhalb von 24 Stunden mit einem passenden Termin und einer ersten Einschätzung.
          </motion.p>
        </div>
      </section>

      {/* Split layout: sidebar + form */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 2,
          alignItems: 'stretch',
        }}>
          {/* LEFT: sidebar info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{
              backgroundColor: '#161D2A',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {/* Brand */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
              <div style={{
                width: 36, height: 36, backgroundColor: '#E8321C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700, color: '#FFFFFF',
              }}>
                E
              </div>
              <div>
                <div style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk</div>
                <div style={{ color: '#7A8EA8', fontSize: 12 }}>Kfz-Service Hamburg</div>
              </div>
            </motion.div>

            {/* Workshop details */}
            <motion.div variants={fadeUp} style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8321C', marginBottom: 16 }}>
                Werkstatt
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: 'Adresse', value: workshopDetails.address },
                  { label: 'Telefon', value: workshopDetails.phone },
                  { label: 'E-Mail', value: workshopDetails.email },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span style={{ fontSize: 12, color: '#4D5E72', fontWeight: 500, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontSize: 13, color: '#B0BECF', fontWeight: 500, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp} style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8321C', marginBottom: 16 }}>
                Öffnungszeiten
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {workshopDetails.hours.map((line) => (
                  <div key={line} style={{
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    fontSize: 13,
                    color: '#B0BECF',
                  }}>
                    {line}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust points */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8321C', marginBottom: 16 }}>
                Warum Elbwerk
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Kostenvoranschlag vor Beginn der Arbeiten',
                  'Rückmeldung bei jedem Arbeitsschritt',
                  'Kurze Wartezeiten durch klare Terminplanung',
                  'Erfahrene Kfz-Mechatroniker vor Ort',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      width: 18, height: 18, backgroundColor: 'rgba(232,50,28,0.15)',
                      border: '1px solid rgba(232,50,28,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="#E8321C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 12.5, color: '#7A8EA8', lineHeight: 1.55 }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              backgroundColor: '#1F2D3D',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '40px 36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 20, height: 2, backgroundColor: '#E8321C' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8321C' }}>
                Anfrage
              </span>
            </div>
            <h2 style={{
              fontSize: 22, fontWeight: 700, color: '#EEF3FA',
              letterSpacing: '-0.02em', marginBottom: 8,
            }}>
              Termin anfragen
            </h2>
            <p style={{ fontSize: 13, color: '#7A8EA8', lineHeight: 1.65, marginBottom: 32 }}>
              Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden zurück.
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Name */}
              <div>
                <label htmlFor="kontakt-name" style={labelStyle}>Name</label>
                <FocusInput id="kontakt-name" type="text" placeholder="Vor- und Nachname" />
              </div>

              {/* Fahrzeug */}
              <div>
                <label htmlFor="kontakt-fahrzeug" style={labelStyle}>Fahrzeug</label>
                <FocusInput id="kontakt-fahrzeug" type="text" placeholder="z. B. VW Golf VII, BMW 3er, Toyota Yaris" />
              </div>

              {/* Leistung */}
              <div>
                <label htmlFor="kontakt-leistung" style={labelStyle}>Gewünschte Leistung</label>
                <FocusSelect id="kontakt-leistung">
                  <option value="">Bitte auswählen…</option>
                  <option value="inspektion">Inspektion</option>
                  <option value="oelwechsel">Ölwechsel</option>
                  <option value="bremsen">Bremsenservice</option>
                  <option value="diagnose">Fahrzeugdiagnose</option>
                  <option value="sonstiges">Sonstiges</option>
                </FocusSelect>
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="kontakt-nachricht" style={labelStyle}>Nachricht</label>
                <FocusTextarea
                  id="kontakt-nachricht"
                  rows={4}
                  placeholder="Kurze Beschreibung Ihres Anliegens, Kennzeichen, gewünschter Termin…"
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#E8321C',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '16px 36px',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontFamily: 'inherit',
                  transition: 'background-color 0.18s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C82918'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E8321C'; }}
              >
                Anfrage senden →
              </button>

              <p style={{ fontSize: 11, color: '#4D5E72', lineHeight: 1.6 }}>
                Demo-Formular — keine Übermittlung. Bei dringenden Anliegen bitte telefonisch melden.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#161D2A',
            border: '1px solid rgba(255,255,255,0.07)',
            height: 280,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Grid lines pattern */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7A8EA8" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>

          {/* Location pin */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 48, height: 48,
              backgroundColor: 'rgba(232,50,28,0.15)',
              border: '2px solid rgba(232,50,28,0.4)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2C7.13 2 4 5.13 4 9C4 14 11 20 11 20C11 20 18 14 18 9C18 5.13 14.87 2 11 2Z" fill="rgba(232,50,28,0.3)" stroke="#E8321C" strokeWidth="1.5" />
                <circle cx="11" cy="9" r="2.5" fill="#E8321C" />
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#EEF3FA', marginBottom: 4 }}>
                Elbwerk Kfz-Service
              </p>
              <p style={{ fontSize: 12, color: '#7A8EA8' }}>
                {workshopDetails.address}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust strip */}
      <section style={{ backgroundColor: '#161D2A', borderTop: '1px solid rgba(232,50,28,0.15)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 2,
            }}
          >
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.label}
                variants={fadeUp}
                custom={i}
                style={{
                  backgroundColor: '#1F2D3D',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  backgroundColor: 'rgba(232,50,28,0.1)',
                  border: '1px solid rgba(232,50,28,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {point.icon}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#EEF3FA', marginBottom: 4 }}>{point.label}</p>
                  <p style={{ fontSize: 12, color: '#7A8EA8', lineHeight: 1.55 }}>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AutoserviceDemoLayout>
  );
}
