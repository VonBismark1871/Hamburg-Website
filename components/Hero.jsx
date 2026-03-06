import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="section-container section-spacing pt-20 sm:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-accent"
          >
            Freiberuflicher Webentwickler · Hamburg
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl"
          >
            Moderne Webseiten für Hamburger Unternehmen
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-600"
          >
            Schnelle, mobil optimierte Webseiten, die lokalen Unternehmen helfen, mehr Kundschaft zu gewinnen.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Kostenlose Demo-Webseite anfordern
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
            >
              Beispiele ansehen
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card bg-gradient-to-br from-white to-slate-50"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Webdesign mit Fokus auf Ergebnisse</h2>
            <p className="text-slate-600">
              Ich erstelle klare, conversion-starke Webseiten für Restaurants, Geschäfte und lokale Dienstleister.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>✓ Schnelle Ladezeiten</li>
              <li>✓ Responsiv auf allen Geräten</li>
              <li>✓ Für lokale Sichtbarkeit optimiert</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
