import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
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
    text: 'Ein hochwertiges Design stärkt Vertrauen und Professionalität.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.42 }}
        className="section-intro"
      >
        <p className="section-label">Leistungen</p>
        <h2 id="features-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
          Was eine moderne Website leisten sollte
        </h2>
        <p className="mt-5 text-lg leading-[1.6] text-[color:var(--color-ink-2)]">
          Klar aufgebaut, schnell geladen und auf Anfragen ausgerichtet – damit Besucher zu Kunden werden.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.36, delay: i * 0.06 }}
              className="min-h-[220px] rounded-[20px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card)] p-7 transition duration-200 ease-out hover:-translate-y-[1px] hover:border-[rgba(21,21,21,0.14)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] text-[color:var(--color-ink)]">
                <Icon />
              </span>
              <h3 className="mt-[22px] text-[20px] font-semibold leading-tight text-[color:var(--color-ink)]">{feature.title}</h3>
              <p className="mt-3 max-w-[30ch] text-base leading-[1.6] text-[color:var(--color-ink-2)]">{feature.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
