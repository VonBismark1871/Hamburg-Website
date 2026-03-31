export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Webseite für Ihr Unternehmen an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl bg-slate-50 p-8 shadow-soft lg:grid-cols-[1fr_320px]">
        <div>
          <Heading id="contact-heading" className="text-3xl font-bold text-slateBlue">
            {title}
          </Heading>
          <p className="mt-3 text-slate-600">
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

            <label htmlFor="contact-name" className="grid gap-2">
              <span className="font-medium">Name</span>
              <input id="contact-name" name="name" autoComplete="name" required className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>
            <label htmlFor="contact-business" className="grid gap-2">
              <span className="font-medium">Unternehmensname</span>
              <input
                id="contact-business"
                name="business"
                autoComplete="organization"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />
            </label>
            <label htmlFor="contact-email" className="grid gap-2">
              <span className="font-medium">E-Mail</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-xl border border-slate-300 px-4 py-3"
              />
            </label>
            <label htmlFor="contact-website" className="grid gap-2">
              <span className="font-medium">Webseite (optional)</span>
              <input
                id="contact-website"
                name="website"
                type="url"
                autoComplete="url"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />
            </label>

            <label htmlFor="contact-goal" className="grid gap-2">
              <span className="font-medium">Ziel (optional)</span>
              <select id="contact-goal" name="ziel" className="rounded-xl border border-slate-300 bg-white px-4 py-3">
                <option value="">Bitte auswählen</option>
                <option value="Mehr Anfragen">Mehr Anfragen</option>
                <option value="Bessere Sichtbarkeit">Bessere Sichtbarkeit</option>
                <option value="Relaunch">Relaunch</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </label>
            <label htmlFor="contact-budget" className="grid gap-2">
              <span className="font-medium">Budget (optional)</span>
              <select id="contact-budget" name="budget" className="rounded-xl border border-slate-300 bg-white px-4 py-3">
                <option value="">Bitte auswählen</option>
                <option value="<500€">&lt;500€</option>
                <option value="500–1000€">500–1000€</option>
                <option value="1000–2000€">1000–2000€</option>
                <option value="2000€+">2000€+</option>
                <option value="noch unklar">noch unklar</option>
              </select>
            </label>
            <label htmlFor="contact-start" className="grid gap-2">
              <span className="font-medium">Gewünschter Start (optional)</span>
              <select id="contact-start" name="start" className="rounded-xl border border-slate-300 bg-white px-4 py-3">
                <option value="">Bitte auswählen</option>
                <option value="sofort">sofort</option>
                <option value="2–4 Wochen">2–4 Wochen</option>
                <option value="1–2 Monate">1–2 Monate</option>
                <option value="später">später</option>
              </select>
            </label>
            <label htmlFor="contact-industry" className="grid gap-2">
              <span className="font-medium">Branche (optional)</span>
              <input id="contact-industry" name="branche" className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>

            <label htmlFor="contact-message" className="grid gap-2">
              <span className="font-medium">Nachricht (optional)</span>
              <textarea id="contact-message" name="message" rows="5" className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Anfrage senden
            </button>
          </form>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slateBlue">Schnellkontakt & Vertrauen</h3>
          <ul className="mt-4 grid gap-3 text-slate-700">
            <li>
              <span className="font-semibold text-slateBlue">Telefon:</span>{' '}
              <a href="tel:+4916096297897" className="text-accent hover:underline">
                +49 160 96297897
              </a>
            </li>
            <li>
              <span className="font-semibold text-slateBlue">Antwortzeit:</span> Antwort i.d.R. innerhalb 24h
            </li>
            <li>
              <span className="font-semibold text-slateBlue">Standort:</span> Hamburg
            </li>
            <li>
              <span className="font-semibold text-slateBlue">Betreuung:</span> Inhaber / direkter Ansprechpartner
            </li>
            <li>
              <span className="font-semibold text-slateBlue">Arbeitsweise:</span> Klare Rückmeldeschleifen statt
              Ticket-System
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
