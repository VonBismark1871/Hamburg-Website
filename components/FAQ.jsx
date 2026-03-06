import { motion } from 'framer-motion';

const faqs = [
  'Wie lange dauert die Erstellung einer Website?',
  'Brauche ich eigenes Hosting?',
  'Kannst du meine bestehende Website neu gestalten?',
  'Ist die Demo wirklich kostenlos?'
];

export default function FAQ() {
  return (
    <section className="section-container section-spacing" id="faq">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Häufig gestellte Fragen
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((q, i) => (
          <motion.details
            key={q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="card group"
          >
            <summary className="cursor-pointer list-none font-semibold">
              {q}
            </summary>
            <p className="mt-3 text-slate-600">
              Platzhalter-Antworttext, der individuell auf dein Angebot angepasst werden kann.
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
