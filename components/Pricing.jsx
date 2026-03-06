import { motion } from 'framer-motion';

const plans = [
  { name: 'Demo website', price: 'Free', description: 'Preview concept to see your future site.' },
  { name: 'Starter website', price: 'from 500€', description: 'Perfect for small local businesses.' },
  { name: 'Business website', price: 'from 900€', description: 'Advanced pages and strategy for growth.' }
];

export default function Pricing() {
  return (
    <section className="section-container section-spacing" id="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Transparent pricing
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`card ${i === 1 ? 'border-accent' : ''}`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-3 text-3xl font-bold text-accent">{plan.price}</p>
            <p className="mt-3 text-slate-600">{plan.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
