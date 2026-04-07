import { motion } from 'framer-motion';

function FeatureIcon({ type }) {
  const baseProps = {
    className: 'h-7 w-7 text-[var(--accent-purple-light)]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  if (type === 'speed') {
    return (
      <svg {...baseProps}>
        <path d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
        <path d="m12 13 4-4" />
      </svg>
    );
  }

  if (type === 'mobile') {
    return (
      <svg {...baseProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    );
  }

  if (type === 'search') {
    return (
      <svg {...baseProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

const features = [
  { icon: 'speed', title: 'Schnelle Ladezeiten', text: 'Kurze Ladezeiten verbessern Nutzererlebnis und Conversion.' },
  { icon: 'mobile', title: 'Mobil optimiert', text: 'Ihre Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.' },
  { icon: 'search', title: 'Lokale Sichtbarkeit', text: 'Klare Struktur und Inhalte helfen, in Hamburg besser gefunden zu werden.' },
  { icon: 'grid', title: 'Premium Auftritt', text: 'Ein klares Design stärkt Vertrauen und Professionalität.' }
];

export default function Features() {
  return (
    <section className="section-spacing bg-[var(--bg-surface)]" aria-labelledby="features-heading">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">Leistungen</p>
          <h2 id="features-heading" className="text-3xl">Was eine moderne Website leisten sollte</h2>
        </motion.div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.article key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }} className="card p-6">
              <FeatureIcon type={feature.icon} />
              <h3 className="mt-3 text-xl">{feature.title}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
