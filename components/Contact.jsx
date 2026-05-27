import Reveal from './ui/Reveal';

function Field({ id, label, optional, children }) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>
        {label}
        {optional ? <span style={{ color: 'var(--faint)', fontWeight: 400 }}> (optional)</span> : null}
      </span>
      {children}
    </label>
  );
}

const trustItems = [
  { label: 'Telefon', value: <a href="tel:+4916096297897" style={{ color: 'var(--cyan-2)' }} className="hover:underline">+49 160 96297897</a> },
  { label: 'Antwortzeit', value: 'i. d. R. innerhalb von 24 h' },
  { label: 'Standort', value: 'Hamburg & DACH' },
  { label: 'Betreuung', value: 'Inhaber / direkter Ansprechpartner' },
  { label: 'Arbeitsweise', value: 'Klare Rückmeldeschleifen statt Ticket-System' }
];

export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Website für Ihr Unternehmen an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <div className="mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-3xl p-7 sm:p-9 lg:grid-cols-[1fr_320px]" style={{ background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-card)' }}>
          <div>
            <p className="section-label">Kontakt</p>
            <Heading id="contact-heading" className="font-display text-3xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
              {title}
            </Heading>
            <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>
              Demo ist kostenlos und unverbindlich. Auf Wunsch erhalten Sie vorab eine realistische Preisrange und eine
              kurze Empfehlung für den sinnvollsten Startumfang.
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="mt-8 grid gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label htmlFor="contact-bot-field">
                  Dieses Feld bitte nicht ausfüllen, wenn Sie ein Mensch sind: <input id="contact-bot-field" name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="contact-name" label="Name">
                  <input id="contact-name" name="name" autoComplete="name" required className="field-input" />
                </Field>
                <Field id="contact-business" label="Unternehmensname">
                  <input id="contact-business" name="business" autoComplete="organization" className="field-input" />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="contact-email" label="E-Mail">
                  <input id="contact-email" name="email" type="email" autoComplete="email" required className="field-input" />
                </Field>
                <Field id="contact-website" label="Webseite" optional>
                  <input id="contact-website" name="website" type="url" autoComplete="url" className="field-input" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="contact-goal" label="Ziel" optional>
                  <select id="contact-goal" name="ziel" className="field-select">
                    <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                    <option value="Mehr Anfragen" style={{ background: '#16131F' }}>Mehr Anfragen</option>
                    <option value="Bessere Sichtbarkeit" style={{ background: '#16131F' }}>Bessere Sichtbarkeit</option>
                    <option value="Relaunch" style={{ background: '#16131F' }}>Relaunch</option>
                    <option value="Sonstiges" style={{ background: '#16131F' }}>Sonstiges</option>
                  </select>
                </Field>
                <Field id="contact-budget" label="Budget" optional>
                  <select id="contact-budget" name="budget" className="field-select">
                    <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                    <option value="<500€" style={{ background: '#16131F' }}>&lt;500€</option>
                    <option value="500–1000€" style={{ background: '#16131F' }}>500–1000€</option>
                    <option value="1000–2000€" style={{ background: '#16131F' }}>1000–2000€</option>
                    <option value="2000€+" style={{ background: '#16131F' }}>2000€+</option>
                    <option value="noch unklar" style={{ background: '#16131F' }}>noch unklar</option>
                  </select>
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="contact-start" label="Gewünschter Start" optional>
                  <select id="contact-start" name="start" className="field-select">
                    <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                    <option value="sofort" style={{ background: '#16131F' }}>sofort</option>
                    <option value="2–4 Wochen" style={{ background: '#16131F' }}>2–4 Wochen</option>
                    <option value="1–2 Monate" style={{ background: '#16131F' }}>1–2 Monate</option>
                    <option value="später" style={{ background: '#16131F' }}>später</option>
                  </select>
                </Field>
                <Field id="contact-industry" label="Branche" optional>
                  <input id="contact-industry" name="branche" className="field-input" />
                </Field>
              </div>

              <Field id="contact-message" label="Nachricht" optional>
                <textarea id="contact-message" name="message" rows="5" className="field-textarea" />
              </Field>
              <button type="submit" className="primary-btn mt-2 w-fit">
                <span>
                  Anfrage senden
                  <svg viewBox="0 0 16 16" fill="none" className="ml-2 inline h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <aside className="h-fit rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-2)' }}>
            <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text)' }}>Schnellkontakt &amp; Vertrauen</h3>
            <ul className="mt-5 grid gap-4 text-sm">
              {trustItems.map((it) => (
                <li key={it.label} className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--faint)' }}>{it.label}</span>
                  <span style={{ color: 'var(--text-soft)' }}>{it.value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
