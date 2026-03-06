import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'Fast loading websites', text: 'Optimized pages for speed and smooth browsing.' },
  { icon: '📱', title: 'Mobile-first design', text: 'Layouts that look great on phones, tablets and desktop.' },
  { icon: '🔎', title: 'SEO optimized', text: 'Structured content to improve local discoverability.' },
  { icon: '🎨', title: 'Modern UI design', text: 'Clean visuals that build trust and engagement.' }
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
        What you get
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
