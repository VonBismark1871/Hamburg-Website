import { motion } from 'framer-motion';

const plans = [
  { name: 'Demo-Webseite', price: 'Kostenlos', description: 'Vorschau-Konzept, damit Sie Ihre künftige Webseite frühzeitig sehen können.' },
  { name: 'Starter-Webseite', price: 'ab 500 €', description: 'Passend für kleine lokale Unternehmen mit klarem Leistungsprofil.' },
  { name: 'Business-Webseite', price: 'ab 900 €', description: 'Erweiterte Seitenstruktur und Strategie für nachhaltiges Wachstum.' }
];

export default function Pricing() {
  return (
    <section className="section-container section-spacing" id="pricing" aria-labelledby="pricing-heading">
      <motion.h2
        id="pricing-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Transparente Preise
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
