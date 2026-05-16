import { motion } from 'framer-motion';

const studioSystem = [
  {
    title: 'Strategie zuerst',
    text: 'Angebot, Zielgruppe, Seitenstruktur und CTA-Logik werden geklärt, bevor Layouts hübsch gemacht werden.'
  },
  {
    title: 'Design mit Branchengefühl',
    text: 'Restaurant, Praxis, Werkstatt oder Immobilienbüro brauchen unterschiedliche Dramaturgie, nicht dieselbe Karte mit anderer Farbe.'
  },
  {
    title: 'Technischer Standard',
    text: 'Next.js, statischer Export, saubere Komponenten, SEO-Metadaten und schnelle Seiten bilden die Grundlage.'
  },
  {
    title: 'Launch und Pflege',
    text: 'Veröffentlichung, Hosting, kleine Änderungen und spätere Erweiterungen bleiben nachvollziehbar statt chaotisch.'
  }
];

const qualitySignals = ['Core Web Vitals im Blick', 'Lokale SEO-Struktur', 'Saubere Übergabe', 'Responsive QA'];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Studio-System</p>
          <h2 id="features-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
            Nicht nur eine Website. Ein sauberer Verkaufs- und Technikrahmen.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Hamburg Websites verbindet Boutique-Design mit pragmatischer Umsetzung: schnell genug für kleine Betriebe,
            hochwertig genug für einen professionellen Studio-Eindruck.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {qualitySignals.map((signal) => (
              <span key={signal} className="reference-chip">
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {studioSystem.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="service-card"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">0{i + 1}</p>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
