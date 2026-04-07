import Link from 'next/link';
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
        <div className="section-intro">
          <p className="section-label">Preise</p>
          <h2 id="pricing-heading" className="display-title page-h2">Preise im Überblick</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article key={card.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className={`card card-soft relative min-h-[180px] p-7 ${card.featured ? 'border-[rgba(45,91,255,0.45)] bg-[#f8f9ff]' : ''}`}>
              {card.featured ? <span className="absolute right-6 top-6 rounded-full border border-[rgba(45,91,255,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Beliebt</span> : null}
              <h3 className="text-[18px] font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <p className="mt-4 text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none text-[var(--text-primary)]">{card.price}</p>
              <p className="mt-3 text-[16px] leading-[1.6] text-[var(--text-secondary)]">{card.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/preise" className="secondary-btn">Alle Preise ansehen</Link>
        </div>
      </div>
    </section>
  );
}
