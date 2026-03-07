export default function Contact({ headingTag = 'h2', title = 'Fordern Sie eine kostenlose Demo-Webseite für Ihr Unternehmen an.' }) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl rounded-2xl bg-slate-50 p-8 shadow-soft">
        <Heading id="contact-heading" className="text-3xl font-bold text-slateBlue">
          {title}
        </Heading>
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
            <label>
              Dieses Feld bitte nicht ausfüllen, wenn Sie ein Mensch sind: <input name="bot-field" />
            </label>
          </p>
          <label className="grid gap-2">
            <span className="font-medium">Name</span>
            <input name="name" required className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Unternehmensname</span>
            <input name="business" className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">E-Mail</span>
            <input name="email" type="email" required className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Webseite (optional)</span>
            <input name="website" type="url" className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Nachricht</span>
            <textarea name="message" required rows="5" className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <button type="submit" className="mt-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
