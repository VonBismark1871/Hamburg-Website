const inputStyle = {
  background: '#16131F',
  border: '1px solid rgba(168,142,247,0.15)',
  color: '#ECEAF3',
  borderRadius: '12px',
  padding: '12px 16px',
  width: '100%',
  fontSize: '14px',
  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
  outline: 'none'
};

const inputFocusStyle = {
  borderColor: 'rgba(168,85,247,0.45)',
  boxShadow: '0 0 0 3px rgba(124,58,237,0.15)'
};

function Field({ id, label, children }) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold" style={{ color: '#9690A8' }}>{label}</span>
      {children}
    </label>
  );
}

function DarkInput({ id, ...props }) {
  return (
    <input
      id={id}
      {...props}
      style={inputStyle}
      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
      onBlur={e => { e.target.style.borderColor = 'rgba(168,142,247,0.15)'; e.target.style.boxShadow = ''; }}
    />
  );
}

function DarkTextarea({ id, ...props }) {
  return (
    <textarea
      id={id}
      {...props}
      style={{ ...inputStyle, resize: 'vertical' }}
      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
      onBlur={e => { e.target.style.borderColor = 'rgba(168,142,247,0.15)'; e.target.style.boxShadow = ''; }}
    />
  );
}

function DarkSelect({ id, children, ...props }) {
  return (
    <select
      id={id}
      {...props}
      style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%239690A8' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '40px' }}
      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
      onBlur={e => { e.target.style.borderColor = 'rgba(168,142,247,0.15)'; e.target.style.boxShadow = ''; }}
    >
      {children}
    </select>
  );
}

export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Webseite für Ihr Unternehmen an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <div
        className="mx-auto grid max-w-5xl gap-8 rounded-2xl p-8 lg:grid-cols-[1fr_320px]"
        style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
      >
        <div>
          <p className="section-label">Kontakt</p>
          <Heading id="contact-heading" className="text-3xl font-black" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
            {title}
          </Heading>
          <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>
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

            <Field id="contact-name" label="Name">
              <DarkInput id="contact-name" name="name" autoComplete="name" required />
            </Field>
            <Field id="contact-business" label="Unternehmensname">
              <DarkInput id="contact-business" name="business" autoComplete="organization" />
            </Field>
            <Field id="contact-email" label="E-Mail">
              <DarkInput id="contact-email" name="email" type="email" autoComplete="email" required />
            </Field>
            <Field id="contact-website" label="Webseite (optional)">
              <DarkInput id="contact-website" name="website" type="url" autoComplete="url" />
            </Field>

            <Field id="contact-goal" label="Ziel (optional)">
              <DarkSelect id="contact-goal" name="ziel">
                <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                <option value="Mehr Anfragen" style={{ background: '#16131F' }}>Mehr Anfragen</option>
                <option value="Bessere Sichtbarkeit" style={{ background: '#16131F' }}>Bessere Sichtbarkeit</option>
                <option value="Relaunch" style={{ background: '#16131F' }}>Relaunch</option>
                <option value="Sonstiges" style={{ background: '#16131F' }}>Sonstiges</option>
              </DarkSelect>
            </Field>
            <Field id="contact-budget" label="Budget (optional)">
              <DarkSelect id="contact-budget" name="budget">
                <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                <option value="<500€" style={{ background: '#16131F' }}>&lt;500€</option>
                <option value="500–1000€" style={{ background: '#16131F' }}>500–1000€</option>
                <option value="1000–2000€" style={{ background: '#16131F' }}>1000–2000€</option>
                <option value="2000€+" style={{ background: '#16131F' }}>2000€+</option>
                <option value="noch unklar" style={{ background: '#16131F' }}>noch unklar</option>
              </DarkSelect>
            </Field>
            <Field id="contact-start" label="Gewünschter Start (optional)">
              <DarkSelect id="contact-start" name="start">
                <option value="" style={{ background: '#16131F' }}>Bitte auswählen</option>
                <option value="sofort" style={{ background: '#16131F' }}>sofort</option>
                <option value="2–4 Wochen" style={{ background: '#16131F' }}>2–4 Wochen</option>
                <option value="1–2 Monate" style={{ background: '#16131F' }}>1–2 Monate</option>
                <option value="später" style={{ background: '#16131F' }}>später</option>
              </DarkSelect>
            </Field>
            <Field id="contact-industry" label="Branche (optional)">
              <DarkInput id="contact-industry" name="branche" />
            </Field>

            <Field id="contact-message" label="Nachricht (optional)">
              <DarkTextarea id="contact-message" name="message" rows="5" />
            </Field>
            <button type="submit" className="mt-2 primary-btn">
              Anfrage senden
            </button>
          </form>
        </div>

        <aside
          className="h-fit rounded-2xl p-6"
          style={{ background: '#1E1A2B', border: '1px solid rgba(168,142,247,0.12)' }}
        >
          <h3 className="text-xl font-bold" style={{ color: '#ECEAF3' }}>Schnellkontakt & Vertrauen</h3>
          <ul className="mt-4 grid gap-3 text-sm" style={{ color: '#9690A8' }}>
            <li>
              <span className="font-semibold" style={{ color: '#ECEAF3' }}>Telefon:</span>{' '}
              <a href="tel:+4916096297897" style={{ color: '#A855F7' }} className="hover:underline">
                +49 160 96297897
              </a>
            </li>
            <li>
              <span className="font-semibold" style={{ color: '#ECEAF3' }}>Antwortzeit:</span> Antwort i.d.R. innerhalb 24h
            </li>
            <li>
              <span className="font-semibold" style={{ color: '#ECEAF3' }}>Standort:</span> Hamburg
            </li>
            <li>
              <span className="font-semibold" style={{ color: '#ECEAF3' }}>Betreuung:</span> Inhaber / direkter Ansprechpartner
            </li>
            <li>
              <span className="font-semibold" style={{ color: '#ECEAF3' }}>Arbeitsweise:</span> Klare Rückmeldeschleifen statt
              Ticket-System
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
