import Link from 'next/link';
import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
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

function WebsiteIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 13h5" />
      <path d="M7 16h9" />
    </IconBase>
  );
}

function VisibilityIcon() {
  return (
    <IconBase>
      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
      <path d="M5 21h14" />
    </IconBase>
  );
}

function AutomationIcon() {
  return (
    <IconBase>
      <rect x="9" y="3" width="6" height="5" rx="1.2" />
      <rect x="4" y="16" width="6" height="5" rx="1.2" />
      <rect x="14" y="16" width="6" height="5" rx="1.2" />
      <path d="M12 8v4" />
      <path d="M7 16v-4h10v4" />
    </IconBase>
  );
}

function ToolsIcon() {
  return (
    <IconBase>
      <path d="M9.8 4.2a3.2 3.2 0 0 1 4.4 4.4L8.6 14.2a2.2 2.2 0 0 0-.6 1.5V19h3.3a2.2 2.2 0 0 0 1.5-.6l5.6-5.6a3.2 3.2 0 0 1 1.4 4.4" />
      <path d="M3 21h18" />
      <path d="M6 18l-2-2" />
    </IconBase>
  );
}

const services = [
  {
    icon: WebsiteIcon,
    title: 'Website',
    text: 'Ein professioneller Auftritt, der Vertrauen schafft und neue Kunden anspricht.'
  },
  {
    icon: VisibilityIcon,
    title: 'Sichtbarkeit',
    text: 'Lokale SEO, Google-Business-Logik und Inhalte, die in Hamburg gefunden werden.'
  },
  {
    icon: AutomationIcon,
    title: 'Automatisierung',
    text: 'Ablaeufe vereinfachen, Anfragen strukturieren und Zeit im Alltag sparen.'
  },
  {
    icon: ToolsIcon,
    title: 'Tools',
    text: 'Eigene Plugins und kleine Systeme, die Prozesse weiter staerken und verbinden.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="features-heading" className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
          Ein klarer Weg vom Webauftritt zum digitalen System
        </h2>
      </div>

      <div className="offer-ladder mt-11">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="offer-step"
            >
              <div className="offer-step-top">
                <span className="offer-step-number">{String(index + 1).padStart(2, '0')}</span>
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/kontakt" className="offer-step-link">
                Mehr erfahren
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
