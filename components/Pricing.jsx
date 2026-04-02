import { motion } from 'framer-motion';

const cards = [
  { title: 'Demo-Vorschau', price: '0 €', description: 'Unverbindlicher erster Entwurf.' },
  { title: 'Onepager', price: 'ab 650 €', description: 'Klar strukturierte Website auf einer Seite.', featured: true },
  { title: 'Mehrseitige Website', price: 'ab 1.000 €', description: 'Für Unternehmen mit mehreren Inhalten.' }
];

export default function Pricing() {
  return (
    <section className="section-spacing" aria-labelledby="pricing-heading">
      <div className="section-container">
        <p className="section-label">Preise</p>
        <h2 id="pricing-heading" className="text-3xl">Preise im Überblick</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }} className={`card relative p-6 ${card.featured ? 'border-2 border-[var(--accent-purple)]' : ''}`}>
              {card.featured ? <span className="absolute -top-3 left-5 rounded-full bg-[var(--accent-purple)] px-3 py-1 text-xs text-[var(--text-primary)]">Beliebt</span> : null}
              <h3 className="text-xl">{card.title}</h3>
              <p className="mt-3 text-3xl text-[var(--text-primary)]">{card.price}</p>
              <p className="mt-2 text-[var(--text-secondary)]">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
