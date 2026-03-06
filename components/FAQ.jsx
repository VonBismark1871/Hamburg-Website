import { motion } from 'framer-motion';

const faqs = [
  'How long does it take to build a website?',
  'Do I need hosting?',
  'Can you redesign my existing website?',
  'Is the demo really free?'
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
        Frequently asked questions
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
              Placeholder answer text that can be tailored to your exact service offering.
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
