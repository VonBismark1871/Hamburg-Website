export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Webseite für Ihr Unternehmen an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Form Card */}
          <div className="rounded-2xl border border-line bg-bg-card p-6 shadow-soft sm:p-8">
            <p className="section-label">Kontakt</p>
            <Heading id="contact-heading" className="text-2xl text-ink sm:text-3xl">
              {title}
            </Heading>
            <p className="mt-3 text-ink-secondary">
              Demo ist kostenlos und unverbindlich. Auf Wunsch erhalten Sie vorab eine realistische Preisrange und eine
              kurze Empfehlung für den sinnvollsten Startumfang.
            </p>
            
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="mt-8 grid gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label htmlFor="contact-bot-field">
                  Dieses Feld bitte nicht ausfüllen, wenn Sie ein Mensch sind: 
                  <input id="contact-bot-field" name="bot-field" />
                </label>
              </p>

              {/* Name & Business */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="contact-name" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Name <span className="text-coral">*</span></span>
                  <input 
                    id="contact-name" 
                    name="name" 
                    autoComplete="name" 
                    required 
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20" 
                    placeholder="Ihr Name"
                  />
                </label>
                <label htmlFor="contact-business" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Unternehmensname</span>
                  <input
                    id="contact-business"
                    name="business"
                    autoComplete="organization"
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Ihr Unternehmen"
                  />
                </label>
              </div>

              {/* Email & Website */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="contact-email" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">E-Mail <span className="text-coral">*</span></span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="ihre@email.de"
                  />
                </label>
                <label htmlFor="contact-website" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Aktuelle Webseite</span>
                  <input
                    id="contact-website"
                    name="website"
                    type="url"
                    autoComplete="url"
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="https://..."
                  />
                </label>
              </div>

              {/* Goal & Budget */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="contact-goal" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Ziel</span>
                  <select 
                    id="contact-goal" 
                    name="ziel" 
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="Mehr Anfragen">Mehr Anfragen</option>
                    <option value="Bessere Sichtbarkeit">Bessere Sichtbarkeit</option>
                    <option value="Relaunch">Relaunch</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </label>
                <label htmlFor="contact-budget" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Budget</span>
                  <select 
                    id="contact-budget" 
                    name="budget" 
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="<500€">&lt;500€</option>
                    <option value="500–1000€">500–1000€</option>
                    <option value="1000–2000€">1000–2000€</option>
                    <option value="2000€+">2000€+</option>
                    <option value="noch unklar">noch unklar</option>
                  </select>
                </label>
              </div>

              {/* Start & Industry */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="contact-start" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Gewünschter Start</span>
                  <select 
                    id="contact-start" 
                    name="start" 
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="sofort">sofort</option>
                    <option value="2–4 Wochen">2–4 Wochen</option>
                    <option value="1–2 Monate">1–2 Monate</option>
                    <option value="später">später</option>
                  </select>
                </label>
                <label htmlFor="contact-industry" className="grid gap-2">
                  <span className="text-sm font-medium text-ink">Branche</span>
                  <input 
                    id="contact-industry" 
                    name="branche" 
                    className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="z.B. Gastronomie, Praxis..."
                  />
                </label>
              </div>

              {/* Message */}
              <label htmlFor="contact-message" className="grid gap-2">
                <span className="text-sm font-medium text-ink">Nachricht</span>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows="4" 
                  className="rounded-xl border border-line bg-bg-base px-4 py-3 text-ink transition focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                />
              </label>

              <button
                type="submit"
                className="primary-btn mt-2 w-full sm:w-auto"
              >
                Anfrage senden
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-5">
            {/* Quick Contact */}
            <div className="rounded-2xl border border-line bg-bg-card p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Schnellkontakt</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium text-ink-muted">Telefon</p>
                    <a href="tel:+4916096297897" className="text-sm font-semibold text-ink hover:text-accent transition">
                      +49 160 96297897
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium text-ink-muted">Antwortzeit</p>
                    <p className="text-sm font-semibold text-ink">i.d.R. innerhalb 24h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium text-ink-muted">Standort</p>
                    <p className="text-sm font-semibold text-ink">Hamburg</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust Box */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-bg-dark">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">100% unverbindlich</p>
                  <p className="text-xs text-ink-muted">Keine versteckten Kosten</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
