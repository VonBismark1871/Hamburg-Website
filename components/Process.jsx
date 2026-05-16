import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Anfrage',
    text: 'Sie senden Branche, Ziel, vorhandene Website und groben Wunschumfang.'
  },
  {
    title: 'Konzept-Vorschau',
    text: 'Sie sehen früh eine visuelle und strukturelle Richtung, bevor ein vollständiges Projekt startet.'
  },
  {
    title: 'Abstimmung',
    text: 'Umfang, Inhalte, SEO-Fokus, Bildwelt und technische Anforderungen werden klar abgegrenzt.'
  },
  {
    title: 'Umsetzung',
    text: 'Design, Code, responsive Verhalten, Formular, Metadaten und Performance werden sauber umgesetzt.'
  },
  {
    title: 'Livegang',
    text: 'Nach Prüfung und Freigabe geht die Website online und kann weiter gepflegt werden.'
  }
];

export default function Process() {
  return (
    <section className="section-container section-spacing" id="process" aria-labelledby="process-heading">
      <motion.h2
        id="process-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl text-slate-950 sm:text-5xl"
      >
        So wird aus einem schnellen Start ein sauberer Webauftritt.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-4 max-w-3xl text-lg leading-8 text-slate-600"
      >
        Von der ersten Anfrage bis zum Livegang bleibt der Ablauf klar, sichtbar und auf konkrete Anfrageziele
        ausgerichtet.
      </motion.p>

      <ol className="mt-10 grid gap-4 md:grid-cols-5">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="service-card"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">0{index + 1}</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
