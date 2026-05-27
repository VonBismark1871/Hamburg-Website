import { useState } from 'react';
import { motion } from 'framer-motion';
import ImmobilienDemoLayout from '../../../../components/references/immobilien-demo/ImmobilienDemoLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const inputStyle = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #E8E2D9',
  borderRadius: 2,
  padding: '13px 16px',
  fontSize: 14,
  color: '#0F0D0A',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: "'DM Sans', sans-serif",
  transition: 'border-color 0.2s',
};

const trustItems = [
  {
    icon: '◆',
    title: 'Absolute Diskretion',
    desc: 'Auf Wunsch diskrete Vermarktung ohne öffentliche Portale — nur qualifizierte Kaufinteressenten aus unserem Netzwerk.',
  },
  {
    icon: '◈',
    title: 'Tiefe Marktkenntnis',
    desc: 'Jahrelange Erfahrung im Hamburger Immobilienmarkt mit detailliertem Wissen über Mikro-Lagen und Wertentwicklungen.',
  },
  {
    icon: '◉',
    title: 'Persönliche Begleitung',
    desc: 'Ein fester Ansprechpartner vom Erstgespräch bis zur notariellen Übergabe — transparent und zuverlässig.',
  },
];

const steps = [
  { num: '01', title: 'Erstgespräch', desc: 'Persönliches Kennenlernen und erste Einschätzung ohne Verpflichtung. Wir hören zu.' },
  { num: '02', title: 'Objektbewertung', desc: 'Fundierte Wertermittlung auf Basis aktueller Vergleichsobjekte und detaillierter Mikrolage-Analyse.' },
  { num: '03', title: 'Vermarktung', desc: 'Hochwertiges Exposé, gezielte Ansprache und strukturierte Verhandlungsführung bis zum erfolgreichen Abschluss.' },
];

export default function KontaktPage() {
  const [focusedField, setFocusedField] = useState(null);

  function getFieldStyle(fieldName) {
    return {
      ...inputStyle,
      borderColor: focusedField === fieldName ? '#B89A72' : '#E8E2D9',
      boxShadow: focusedField === fieldName ? '0 0 0 2px rgba(184,154,114,0.15)' : 'none',
    };
  }

  return (
    <ImmobilienDemoLayout
      title="Kontakt & Beratung – Elbquartier Immobilien"
      description="Nehmen Sie Kontakt mit Elbquartier Immobilien auf. Objektanfragen, Bewertungen und Besichtigungen — persönliche Beratung in Hamburg."
      path="/referenzen/immobilien-demo/kontakt"
    >
      {/* ── HERO HEADER ── */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #E8E2D9', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} custom={0} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 18,
            }}>
              Beratung & Anfrage
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(38px, 5vw, 72px)', fontWeight: 400, lineHeight: 1.05,
              color: '#0F0D0A', letterSpacing: '-0.01em', marginBottom: 20,
            }}>
              Sprechen Sie<br />
              <em style={{ fontStyle: 'italic', color: '#8A7256' }}>mit uns</em>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.3vw, 17px)', color: '#7B6D60', lineHeight: 1.7,
              maxWidth: 500,
            }}>
              Ob Verkauf, Bewertung oder Kaufanfrage — wir antworten persönlich und nehmen uns Zeit für Ihr Anliegen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── TWO-COLUMN MAIN ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: 'start' }}>

          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {/* Company contact card */}
            <motion.div variants={fadeUp} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8E2D9',
              borderTop: '3px solid #B89A72',
              padding: '36px 32px',
              marginBottom: 48,
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 18,
              }}>
                Büro Hamburg
              </p>
              <p style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 22, fontWeight: 400, color: '#0F0D0A', marginBottom: 24,
              }}>
                Elbquartier Immobilien
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: 'Adresse', value: 'Harvestehuder Weg 12\n20149 Hamburg' },
                  { label: 'Telefon', value: '040 / 44 88 920', href: 'tel:04044889200' },
                  { label: 'E-Mail', value: 'info@elbquartier.de', href: 'mailto:info@elbquartier.de' },
                  { label: 'Öffnungszeiten', value: 'Mo–Fr 09:00–18:00 Uhr' },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{
                    borderBottom: '1px solid #F0EBE2',
                    padding: '14px 0',
                    display: 'flex', flexDirection: 'column', gap: 4,
                  }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: '#B89A72',
                    }}>
                      {label}
                    </span>
                    {href ? (
                      <a href={href} style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15, color: '#0F0D0A', textDecoration: 'none',
                        fontWeight: 500,
                      }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15, color: '#0F0D0A',
                        whiteSpace: 'pre-line',
                      }}>
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process steps */}
            <motion.div variants={fadeUp}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 24,
              }}>
                So läuft die Zusammenarbeit
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {steps.map((step, i) => (
                  <motion.div key={step.num} variants={fadeUp} custom={i} style={{
                    display: 'flex', gap: 24, padding: '22px 0',
                    borderBottom: i < steps.length - 1 ? '1px solid #EBE3D4' : 'none',
                  }}>
                    <span style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: 28, fontWeight: 400, color: '#B89A72',
                      lineHeight: 1, flexShrink: 0, opacity: 0.7, minWidth: 36,
                    }}>
                      {step.num}
                    </span>
                    <div>
                      <p style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: 17, fontWeight: 400, color: '#0F0D0A', marginBottom: 6,
                      }}>
                        {step.title}
                      </p>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: '#7B6D60', lineHeight: 1.65,
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Inquiry Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8E2D9',
              padding: '40px 36px',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#B89A72', marginBottom: 8,
              }}>
                Anfrage stellen
              </p>
              <p style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 24, fontWeight: 400, color: '#0F0D0A', marginBottom: 28,
              }}>
                Schreiben Sie uns
              </p>

              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Anrede */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="anrede" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Anrede
                  </label>
                  <select
                    id="anrede"
                    style={{
                      ...getFieldStyle('anrede'),
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237B6D60' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: 36,
                      cursor: 'pointer',
                    }}
                    onFocus={() => setFocusedField('anrede')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="herr">Herr</option>
                    <option value="frau">Frau</option>
                    <option value="keine">Keine Angabe</option>
                  </select>
                </div>

                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="name" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Name
                  </label>
                  <input
                    id="name" type="text" placeholder="Ihr vollständiger Name"
                    style={getFieldStyle('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* E-Mail */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="email" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    E-Mail
                  </label>
                  <input
                    id="email" type="email" placeholder="ihre@email.de"
                    style={getFieldStyle('email')}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Telefon */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="telefon" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Telefon <span style={{ color: '#B89A72', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="telefon" type="tel" placeholder="+49 40 ..."
                    style={getFieldStyle('telefon')}
                    onFocus={() => setFocusedField('telefon')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Art der Anfrage */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="anfrage-art" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Art der Anfrage
                  </label>
                  <select
                    id="anfrage-art"
                    style={{
                      ...getFieldStyle('anfrage-art'),
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237B6D60' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: 36,
                      cursor: 'pointer',
                    }}
                    onFocus={() => setFocusedField('anfrage-art')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="kauf">Objektkauf</option>
                    <option value="verkauf">Objektverkauf</option>
                    <option value="bewertung">Bewertung</option>
                    <option value="besichtigung">Besichtigung</option>
                  </select>
                </div>

                {/* Nachricht */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label htmlFor="nachricht" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: '#7B6D60',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht" rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Immobilie…"
                    style={{ ...getFieldStyle('nachricht'), resize: 'vertical' }}
                    onFocus={() => setFocusedField('nachricht')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button type="submit" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: '#0F0D0A', color: '#F5F1EA',
                  fontWeight: 600, fontSize: 12, padding: '15px 32px',
                  border: 'none', cursor: 'pointer',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginTop: 4,
                  transition: 'background-color 0.2s',
                }}>
                  Anfrage absenden
                </button>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: '#B89A72', lineHeight: 1.6, marginTop: 4,
                }}>
                  Wir antworten persönlich, i. d. R. innerhalb von 24 Stunden.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #E8E2D9', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            <motion.p variants={fadeUp} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#B89A72', marginBottom: 14, textAlign: 'center',
            }}>
              Unser Versprechen
            </motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400,
              color: '#0F0D0A', lineHeight: 1.1, marginBottom: 52, textAlign: 'center',
            }}>
              Warum Elbquartier?
            </motion.h2>

            <div className="grid sm:grid-cols-3" style={{ gap: 3 }}>
              {trustItems.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E2D9',
                  padding: '36px 30px',
                }}>
                  <div style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 22, color: '#B89A72', marginBottom: 18,
                    letterSpacing: '-0.02em',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 19, fontWeight: 400, color: '#0F0D0A', marginBottom: 12,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, color: '#7B6D60', lineHeight: 1.65,
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
                Kontakt
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13 }}>040 / 44 88 920</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.28)', fontSize: 13, marginTop: 4 }}>info@elbquartier.de</p>
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
