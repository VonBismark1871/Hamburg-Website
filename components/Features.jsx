import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ZapIcon() {
  return (
    <IconBase>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </IconBase>
  );
}

function SmartphoneIcon() {
  return (
    <IconBase>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </IconBase>
  );
}

function SearchIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </IconBase>
  );
}

function LayoutIcon() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 20V10" />
    </IconBase>
  );
}

const features = [
  {
    icon: ZapIcon,
    title: 'Schnelle Ladezeiten',
    text: 'Kurze Ladezeiten sorgen für bessere Nutzererlebnisse und mehr Kontaktanfragen.'
  },
  {
    icon: SmartphoneIcon,
    title: 'Optimiert für alle Geräte',
    text: 'Ihre Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.'
  },
  {
    icon: SearchIcon,
    title: 'Für lokale Sichtbarkeit aufgebaut',
    text: 'Saubere Struktur und klare Inhalte helfen dabei, in Hamburg besser gefunden zu werden.',
    accent: true
  },
  {
    icon: LayoutIcon,
    title: 'Klares, modernes Design',
    text: 'Ein professioneller Auftritt stärkt Vertrauen und unterstützt Ihre Positionierung.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="rounded-3xl bg-slate-50/80 p-6 sm:p-8 lg:p-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="max-w-xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Leistungen</p>
            <h2 id="features-heading" className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Was eine moderne Website leisten sollte
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Eine gute Unternehmenswebsite überzeugt nicht nur optisch. Sie lädt schnell, funktioniert auf allen
              Geräten und hilft potenziellen Kunden, Ihr Unternehmen online zu finden.
            </p>
            <a
              href="#pricing"
              className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-700 transition hover:text-indigo-600"
            >
              Preise ansehen
            </a>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-2xl border bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    feature.accent
                      ? 'border-indigo-200/80 bg-indigo-50/40 shadow-md'
                      : 'border-slate-200'
                  }`}
                >
                  <span
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                      feature.accent
                        ? 'border-indigo-200 bg-white text-indigo-700'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{feature.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
