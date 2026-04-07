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
    text: 'Kurze Ladezeiten verbessern Nutzererlebnis und Conversion.'
  },
  {
    icon: SmartphoneIcon,
    title: 'Mobil optimiert',
    text: 'Ihre Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.'
  },
  {
    icon: SearchIcon,
    title: 'Lokale Sichtbarkeit',
    text: 'Klare Struktur und Inhalte helfen, in Hamburg besser gefunden zu werden.'
  },
  {
    icon: LayoutIcon,
    title: 'Premium Auftritt',
    text: 'Ein klares Design stärkt Vertrauen und Professionalität.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="rounded-3xl bg-slate-50/80 p-6 sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="section-label">Leistungen</p>
          <h2 id="features-heading" className="text-3xl leading-tight text-slate-900 sm:text-4xl">
            Was eine moderne Website leisten sollte
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Klar aufgebaut, schnell geladen und auf Anfragen ausgerichtet – damit Besucher zu Kunden werden.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card"
              >
                <span
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700"
                >
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
