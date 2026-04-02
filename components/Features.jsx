import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'Schnelle Ladezeiten', text: 'Kurze Ladezeiten verbessern Nutzererlebnis und Conversion.' },
  { icon: '📱', title: 'Mobil optimiert', text: 'Ihre Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.' },
  { icon: '🔎', title: 'Lokale Sichtbarkeit', text: 'Klare Struktur und Inhalte helfen, in Hamburg besser gefunden zu werden.' },
  { icon: '🧩', title: 'Premium Auftritt', text: 'Ein klares Design stärkt Vertrauen und Professionalität.' }
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
              <p className="text-2xl">{feature.icon}</p>
              <h3 className="mt-3 text-xl">{feature.title}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
