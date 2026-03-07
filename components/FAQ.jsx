import { motion } from 'framer-motion';

export const faqItems = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'Eine typische Unternehmenswebsite mit 4 bis 6 Seiten ist oft in 7 bis 14 Tagen online. Umfang und Feedbackzyklen beeinflussen die genaue Dauer.'
  },
  {
    question: 'Brauche ich eigenes Hosting?',
    answer:
      'Nein, ich kann Hosting und Domain mit einrichten oder bestehendes Hosting übernehmen. Du bekommst eine klare Empfehlung passend zu deinem Budget.'
  },
  {
    question: 'Kannst du meine bestehende Website neu gestalten?',
    answer:
      'Ja. Ich überarbeite Struktur, Design und Inhalte so, dass die Seite moderner wirkt, mobil besser funktioniert und lokal besser gefunden werden kann.'
  },
  {
    question: 'Ist die Demo wirklich kostenlos?',
    answer:
      'Ja. Du erhältst eine unverbindliche Demo-Startseite als Vorschau, bevor du dich für eine Umsetzung entscheidest.'
  }
];

export default function FAQ() {
  return (
    <section className="section-container section-spacing" id="faq" aria-labelledby="faq-heading">
      <motion.h2
        id="faq-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Häufig gestellte Fragen zur Website-Erstellung
      </motion.h2>
      <div className="space-y-4">
        {faqItems.map((item, i) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="card group"
          >
            <summary className="cursor-pointer list-none font-semibold">{item.question}</summary>
            <p className="mt-3 text-slate-600">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
