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

function LayoutIcon() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 13h6" />
      <path d="M7 17h8" />
    </IconBase>
  );
}

function SparkIcon() {
  return (
    <IconBase>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
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

function SpeedIcon() {
  return (
    <IconBase>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14l4-5" />
      <path d="M4 19h16" />
    </IconBase>
  );
}

function PenIcon() {
  return (
    <IconBase>
      <path d="m12 20 8-8-4-4-8 8-2 6 6-2Z" />
      <path d="m14 6 4 4" />
    </IconBase>
  );
}

function ShieldIcon() {
  return (
    <IconBase>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}

const services = [
  {
    icon: LayoutIcon,
    title: 'Webdesign & Relaunch',
    text: 'Ein Auftritt, der zu Branche, Budget und Anspruch passt und Ihr Angebot ohne Umwege erklärt.'
  },
  {
    icon: SparkIcon,
    title: 'Kompakte Websites',
    text: 'Schlanke Seiten für klare Angebote, lokale Sichtbarkeit oder einen professionellen Einstieg.'
  },
  {
    icon: SearchIcon,
    title: 'Lokale SEO-Struktur',
    text: 'Saubere Seitenarchitektur, lokale Signale und Inhalte, die zu Hamburg und Ihrer Branche passen.'
  },
  {
    icon: SpeedIcon,
    title: 'Performance',
    text: 'Schnelle Ladezeiten, stabile Darstellung und ein technisches Fundament für langfristige Pflege.'
  },
  {
    icon: PenIcon,
    title: 'Individuelle Erweiterungen',
    text: 'Zusätzliche Bereiche, Formulare, Buchungswege oder Inhalte werden genau dort ergänzt, wo sie Nutzen bringen.'
  },
  {
    icon: ShieldIcon,
    title: 'Pflege & Sicherheit',
    text: 'Auf Wunsch mit laufender Betreuung, kleinen Anpassungen und verlässlichen Updates nach dem Launch.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="lg:sticky lg:top-28"
        >
          <p className="section-label">Dienstleistungen</p>
          <h2 id="features-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
            Alles, was eine Website passend, nutzbar und erweiterbar macht.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
            Nicht jedes Projekt braucht denselben Umfang. Struktur, Stil, Geschwindigkeit und Kontaktführung werden so
            kombiniert, dass sie zum Unternehmen passen.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="service-card group"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07110f] text-lime-200 transition group-hover:bg-cyan-300 group-hover:text-[#07110f]">
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
