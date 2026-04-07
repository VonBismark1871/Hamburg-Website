import { motion } from 'framer-motion';

function FeatureIcon({ type }) {
  const baseProps = {
    className: 'h-5 w-5 text-[var(--text-primary)]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  if (type === 'speed') return <svg {...baseProps}><path d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /><path d="m12 13 4-4" /></svg>;
  if (type === 'mobile') return <svg {...baseProps}><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>;
  if (type === 'search') return <svg {...baseProps}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>;
  return <svg {...baseProps}><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="8" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /><rect x="13" y="13" width="8" height="8" rx="2" /></svg>;
}

const features = [
  { icon: 'speed', title: 'Schnelle Ladezeiten', text: 'Kurze Ladezeiten verbessern Nutzererlebnis und Conversion.' },
  { icon: 'mobile', title: 'Mobil optimiert', text: 'Ihre Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.' },
  { icon: 'search', title: 'Lokale Sichtbarkeit', text: 'Klare Struktur und Inhalte helfen, in Hamburg besser gefunden zu werden.' },
  { icon: 'grid', title: 'Premium Auftritt', text: 'Ein klares Design stärkt Vertrauen und Professionalität.' }
];

export default function Features() {
  return (
    <section className="section-spacing" aria-labelledby="features-heading">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className="section-intro">
          <p className="section-label">Leistungen</p>
          <h2 id="features-heading" className="display-title page-h2">Was eine moderne Website leisten sollte</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, i) => (
            <motion.article key={feature.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className="card card-soft min-h-[220px] p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="mt-[22px] text-[20px] font-semibold text-[var(--text-primary)]">{feature.title}</h3>
              <p className="mt-3 max-w-[30ch] text-[16px] leading-[1.6] text-[var(--text-secondary)]">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
