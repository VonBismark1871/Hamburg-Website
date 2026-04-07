export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Webseite für Ihr Unternehmen an.' }) {
  const Heading = headingTag;
  return (
    <section className="section-spacing" id="contact" aria-labelledby="contact-heading">
      <div className="section-container grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="card p-8">
          <p className="section-label">Kontakt</p>
          <Heading id="contact-heading" className="text-3xl">{title}</Heading>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you" className="mt-6 grid gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <input name="name" required placeholder="Name" className="rounded-lg px-4 py-3" />
            <input name="business" placeholder="Unternehmensname" className="rounded-lg px-4 py-3" />
            <input name="email" type="email" required placeholder="E-Mail" className="rounded-lg px-4 py-3" />
            <textarea name="message" rows="5" placeholder="Nachricht" className="rounded-lg px-4 py-3" />
            <button type="submit" className="primary-btn w-fit">Anfrage senden</button>
          </form>
        </div>
        <aside className="card h-fit p-6">
          <h3 className="text-xl">Schnellkontakt & Vertrauen</h3>
          <ul className="mt-4 space-y-2 text-[var(--text-secondary)]">
            <li>Telefon: +49 160 96297897</li>
            <li>Antwortzeit: Antwort i.d.R. innerhalb 24h</li>
            <li>Standort: Hamburg</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
