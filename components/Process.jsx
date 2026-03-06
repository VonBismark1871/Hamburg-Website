import { motion } from 'framer-motion';

const steps = [
  'Send your business information',
  'I create a free demo website',
  'You review and request changes',
  'Website goes live'
];

export default function Process() {
  return (
    <section className="section-container section-spacing" id="process">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Simple process
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="card flex items-center gap-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
              {index + 1}
            </span>
            <p className="font-medium">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
