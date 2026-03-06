import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'Schnell ladende Websites', text: 'Für Geschwindigkeit und flüssiges Surfen optimierte Seiten.' },
  { icon: '📱', title: 'Mobile-First-Design', text: 'Layouts, die auf Smartphone, Tablet und Desktop überzeugen.' },
  { icon: '🔎', title: 'SEO-optimiert', text: 'Strukturierte Inhalte für bessere lokale Auffindbarkeit.' },
  { icon: '🎨', title: 'Modernes Oberflächen-Design', text: 'Klares Design, das Vertrauen und Interaktion stärkt.' }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Das bekommst du
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature, i) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-xl">
              {feature.icon}
            </span>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-slate-600">{feature.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
