import Link from 'next/link';
import { motion } from 'framer-motion';

export const pricingPlans = [
  {
    name: 'Demo-Webseite',
    price: 'Kostenlos',
    description: 'Vorschau-Konzept, damit Sie Ihre künftige Webseite frühzeitig sehen können.'
  },
  {
    name: 'Starter-Webseite',
    price: 'ab 500 €',
    description: 'Passend für kleine lokale Unternehmen mit klarem Leistungsprofil.'
  },
  {
    name: 'Business-Webseite',
    price: 'ab 900 €',
    description: 'Erweiterte Seitenstruktur und Strategie für nachhaltiges Wachstum.'
  }
];

export default function Pricing({
  headingTag = 'h2',
  title = 'Transparente Preise',
  sectionId = 'pricing',
  plans = pricingPlans,
  cta
}) {
  const Heading = headingTag;

  return (
    <section className="section-container section-spacing" id={sectionId} aria-labelledby="pricing-heading">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Heading id="pricing-heading" className="mb-4 text-3xl font-bold text-slateBlue">
          {title}
        </Heading>
        {cta ? (
          <Link href={cta.href} className="inline-flex text-sm font-semibold text-indigo-700 transition hover:text-indigo-600">
            {cta.label}
          </Link>
        ) : null}
      </motion.div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
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
