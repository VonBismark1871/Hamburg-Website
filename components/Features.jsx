import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
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
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
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
      <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </IconBase>
  );
}

function PenIcon() {
  return (
    <IconBase>
      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />
    </IconBase>
  );
}

function ShieldIcon() {
  return (
    <IconBase>
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </IconBase>
  );
}

const services = [
  {
    icon: LayoutIcon,
    title: 'Webdesign & Relaunch',
    text: 'Ein Auftritt, der zu Branche, Budget und Anspruch passt und Ihr Angebot ohne Umwege erklärt.',
    color: 'teal'
  },
  {
    icon: SparkIcon,
    title: 'Kompakte Websites',
    text: 'Schlanke Seiten für klare Angebote, lokale Sichtbarkeit oder einen professionellen Einstieg.',
    color: 'amber'
  },
  {
    icon: SearchIcon,
    title: 'Lokale SEO-Struktur',
    text: 'Saubere Seitenarchitektur, lokale Signale und Inhalte, die zu Hamburg und Ihrer Branche passen.',
    color: 'coral'
  },
  {
    icon: SpeedIcon,
    title: 'Performance',
    text: 'Schnelle Ladezeiten, stabile Darstellung und ein technisches Fundament für langfristige Pflege.',
    color: 'purple'
  },
  {
    icon: PenIcon,
    title: 'Individuelle Erweiterungen',
    text: 'Zusätzliche Bereiche, Formulare, Buchungswege oder Inhalte werden genau dort ergänzt, wo sie Nutzen bringen.',
    color: 'blue'
  },
  {
    icon: ShieldIcon,
    title: 'Pflege & Sicherheit',
    text: 'Auf Wunsch mit laufender Betreuung, kleinen Anpassungen und verlässlichen Updates nach dem Launch.',
    color: 'green'
  }
];

const iconColorMap = {
  teal: 'bg-gradient-to-br from-accent/20 to-primary/10 text-accent group-hover:from-accent group-hover:to-accent group-hover:text-bg-dark',
  amber: 'bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 group-hover:from-amber-500 group-hover:to-amber-400 group-hover:text-white',
  coral: 'bg-gradient-to-br from-coral-light to-red-50 text-coral group-hover:from-coral group-hover:to-red-400 group-hover:text-white',
  purple: 'bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 group-hover:from-purple-500 group-hover:to-purple-400 group-hover:text-white',
  blue: 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 group-hover:from-blue-500 group-hover:to-blue-400 group-hover:text-white',
  green: 'bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 group-hover:from-emerald-500 group-hover:to-emerald-400 group-hover:text-white'
};

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left Column - Sticky Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-28"
        >
          <p className="section-label">Leistungen</p>
          <h2 id="features-heading" className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Alles, was eine Website <span className="text-accent">passend</span> und erweiterbar macht.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Nicht jedes Projekt braucht denselben Umfang. Struktur, Stil, Geschwindigkeit und Kontaktführung werden so
            kombiniert, dass sie zum Unternehmen passen.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-base bg-gradient-to-br from-primary to-primary-light text-xs font-bold text-white"
                >
                  {['HW', 'AB', 'MK', 'JS'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-muted">
              <span className="font-semibold text-ink">50+ Projekte</span> erfolgreich umgesetzt
            </p>
          </div>
        </motion.div>

        {/* Right Column - Service Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="service-card group"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${iconColorMap[service.color]}`}>
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
