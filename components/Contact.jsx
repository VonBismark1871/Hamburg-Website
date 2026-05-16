export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Konzept-Vorschau an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <div>
          <p className="section-label">Kontakt</p>
          <Heading id="contact-heading" className="text-3xl text-slate-950 sm:text-5xl">
            {title}
          </Heading>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Schicken Sie die wichtigsten Eckdaten. Die erste Antwort soll nicht nach Ticket-System klingen, sondern nach
            konkreter Empfehlung: Startumfang, Preisrange und nächster sinnvoller Schritt.
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

            <div className="grid gap-4 md:grid-cols-2">
              <label htmlFor="contact-name" className="grid gap-2">
                <span className="font-semibold">Name</span>
                <input id="contact-name" name="name" autoComplete="name" required className="contact-input" />
              </label>
              <label htmlFor="contact-email" className="grid gap-2">
                <span className="font-semibold">E-Mail</span>
                <input id="contact-email" name="email" type="email" autoComplete="email" required className="contact-input" />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label htmlFor="contact-business" className="grid gap-2">
                <span className="font-semibold">Unternehmen</span>
                <input id="contact-business" name="business" autoComplete="organization" className="contact-input" />
              </label>
              <label htmlFor="contact-goal" className="grid gap-2">
                <span className="font-semibold">Ziel</span>
                <select id="contact-goal" name="ziel" className="contact-input bg-white">
                  <option value="">Bitte auswählen</option>
                  <option value="Kostenlose Konzept-Vorschau">Kostenlose Konzept-Vorschau</option>
                  <option value="Mehr Anfragen">Mehr Anfragen</option>
                  <option value="Relaunch">Relaunch</option>
                  <option value="Mehrseitige Website">Mehrseitige Website</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </label>
            </div>

            <label htmlFor="contact-message" className="grid gap-2">
              <span className="font-semibold">Worum geht es?</span>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                className="contact-input"
                placeholder="Branche, bestehende Website, gewünschter Start oder was aktuell nicht hochwertig genug wirkt."
              />
            </label>

            <details className="optional-details">
              <summary>Optionale Projektdetails ergänzen</summary>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label htmlFor="contact-website" className="grid gap-2">
                  <span className="font-semibold">Webseite</span>
                  <input id="contact-website" name="website" type="url" autoComplete="url" className="contact-input" />
                </label>
                <label htmlFor="contact-budget" className="grid gap-2">
                  <span className="font-semibold">Budget</span>
                  <select id="contact-budget" name="budget" className="contact-input bg-white">
                    <option value="">Bitte auswählen</option>
                    <option value="<500€">&lt;500€</option>
                    <option value="500-1000€">500-1000€</option>
                    <option value="1000-2000€">1000-2000€</option>
                    <option value="2000€+">2000€+</option>
                    <option value="noch unklar">noch unklar</option>
                  </select>
                </label>
                <label htmlFor="contact-start" className="grid gap-2">
                  <span className="font-semibold">Gewünschter Start</span>
                  <select id="contact-start" name="start" className="contact-input bg-white">
                    <option value="">Bitte auswählen</option>
                    <option value="sofort">sofort</option>
                    <option value="2-4 Wochen">2-4 Wochen</option>
                    <option value="1-2 Monate">1-2 Monate</option>
                    <option value="später">später</option>
                  </select>
                </label>
                <label htmlFor="contact-industry" className="grid gap-2">
                  <span className="font-semibold">Branche</span>
                  <input id="contact-industry" name="branche" className="contact-input" />
                </label>
              </div>
            </details>

            <button type="submit" className="primary-btn mt-2 w-fit">
              Anfrage senden
            </button>
          </form>
        </div>

        <aside className="contact-aside">
          <h3 className="text-2xl font-semibold text-slate-950">Was danach passiert</h3>
          <ol className="mt-5 grid gap-4 text-sm leading-7 text-slate-600">
            <li>
              <strong className="block text-slate-950">1. Kurze Einschätzung</strong>
              Passt ein schneller Starter, ein Onepager oder eine mehrseitige Struktur?
            </li>
            <li>
              <strong className="block text-slate-950">2. Konzept-Vorschau</strong>
              Sie sehen eine Richtung, bevor Sie ein größeres Projekt beauftragen.
            </li>
            <li>
              <strong className="block text-slate-950">3. Sauberer Ausbau</strong>
              Design, SEO, Performance, Formular, Launch und Pflege werden strukturiert umgesetzt.
            </li>
          </ol>
          <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold">Direkter Kontakt</p>
            <a href="tel:+4916096297897" className="mt-2 block text-lg font-semibold text-lime-200">
              +49 160 96297897
            </a>
            <p className="mt-3 text-sm leading-6 text-white/60">Antwort in der Regel innerhalb von 24 Stunden.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
