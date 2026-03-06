import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="section-container section-spacing" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl rounded-2xl bg-slate-50 p-8 shadow-soft"
      >
        <h2 className="text-3xl font-bold">Get a free demo website for your business.</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mt-8 grid gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>
          <label className="grid gap-2">
            <span className="font-medium">Name</span>
            <input name="name" required className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Business name</span>
            <input name="business-name" required className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Website (optional)</span>
            <input name="website" type="url" className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">Message</span>
            <textarea name="message" required rows="5" className="rounded-xl border border-slate-300 px-4 py-3" />
          </label>
          <button type="submit" className="mt-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">
            Send request
          </button>
        </form>
      </motion.div>
    </section>
  );
}
