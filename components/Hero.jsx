import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.38 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Kostenlose Demo-Website
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Keine Verpflichtung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Fertig in wenigen Tagen
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            Beispiel einer modernen Business-Website
          </p>
          <motion.div
            animate={floatAnimation}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14)' }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 via-white to-slate-50 shadow-2xl shadow-slate-300/40"
          >
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-red-200 bg-red-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-amber-200 bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-emerald-200 bg-emerald-300/90" />
              <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-slate-200/70 bg-white/90 px-3 text-xs text-slate-400 shadow-inner shadow-slate-200/70">
                www.hamburg-business.de
              </div>
            </div>

            <div className="space-y-5 bg-gradient-to-b from-white to-slate-50 p-5 shadow-inner shadow-slate-200/70 sm:p-6">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div className="h-3 w-24 rounded-full bg-slate-300" />
                <div className="flex gap-2">
                  <div className="h-2.5 w-10 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-10 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-10 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="grid gap-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-5 sm:grid-cols-2 sm:items-center">
                <div className="space-y-3">
                  <div className="h-3 w-16 rounded-full bg-indigo-200" />
                  <div className="h-4 w-40 rounded-full bg-slate-700/90" />
                  <div className="h-3 w-32 rounded-full bg-slate-300" />
                  <div className="inline-flex cursor-default rounded-lg border border-slate-200 bg-slate-100/90 px-4 py-2 text-xs font-medium text-slate-500 opacity-85 shadow-inner shadow-white/80 saturate-50">
                    Jetzt starten
                  </div>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm shadow-indigo-100/50">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-3 shadow-sm shadow-slate-200/50">
                  <div className="mb-2 h-3 w-14 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-10 rounded-full bg-indigo-200" />
                </div>
                <div className="rounded-xl border border-slate-200 p-3 shadow-sm shadow-slate-200/50">
                  <div className="mb-2 h-3 w-16 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-12 rounded-full bg-indigo-200" />
                </div>
                <div className="rounded-xl border border-slate-200 p-3 shadow-sm shadow-slate-200/50">
                  <div className="mb-2 h-3 w-12 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-8 rounded-full bg-indigo-200" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="pointer-events-none absolute left-3 top-16 hidden rounded-xl border border-slate-200 bg-white/95 px-3 py-2 shadow-lg shadow-slate-300/40 sm:block"
          >
            <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <span>⚡</span>
              <span>Fast loading</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="pointer-events-none absolute -right-1 top-40 hidden rounded-xl border border-slate-200 bg-white/95 px-3 py-2 shadow-lg shadow-slate-300/40 sm:block"
          >
            <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <span>📱</span>
              <span>Mobile optimized</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pointer-events-none absolute right-8 bottom-10 hidden rounded-xl border border-slate-200 bg-white/95 px-3 py-2 shadow-lg shadow-slate-300/40 sm:block"
          >
            <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <span>📈</span>
              <span>SEO optimized</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
