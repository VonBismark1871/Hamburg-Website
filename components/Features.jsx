import Link from 'next/link';
import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
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
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M7 13h5" />
      <path d="M7 16h8" />
    </IconBase>
  );
}

function VisibilityIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
      <path d="M8.5 11h5" />
      <path d="M11 8.5v5" />
    </IconBase>
  );
}

function AutomationIcon() {
  return (
    <IconBase>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
      <path d="M10 7h4.5A2.5 2.5 0 0 1 17 9.5V14" />
      <path d="M14 17H9.5A2.5 2.5 0 0 1 7 14.5V10" />
    </IconBase>
  );
}

function ToolsIcon() {
  return (
    <IconBase>
      <path d="m14.5 5 4.5 4.5-9.5 9.5H5v-4.5L14.5 5Z" />
      <path d="m13 6.5 4.5 4.5" />
      <path d="M4 21h16" />
    </IconBase>
  );
}

const services = [
  {
    icon: WebsiteIcon,
    title: 'Websites',
    text: 'Klare Unternehmensseiten, Relaunches und Landingpages mit Struktur, Design, SEO-Basis und Anfrageführung.'
  },
  {
    icon: VisibilityIcon,
    title: 'SEO & Sichtbarkeit',
    text: 'Lokale Seitenstruktur, Google-Business-Logik, Inhalte und technische Grundlage für bessere Auffindbarkeit.'
  },
  {
    icon: AutomationIcon,
    title: 'Automatisierung',
    text: 'Formulare, Benachrichtigungen, einfache Workflows und interne Abläufe, die wiederkehrende Arbeit reduzieren.'
  },
  {
    icon: ToolsIcon,
    title: 'Plugins & Tools',
    text: 'Kleine Webtools, Admin-Hilfen und Integrationen, wenn Standardfunktionen nicht ausreichen.'
  }
];

export default function Features() {
  return (
    <section className="section-container section-spacing" id="features" aria-labelledby="features-heading">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-label">Leistungen</p>
          <h2 id="features-heading" className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Vier klare Leistungen. Ein sauberer technischer Anspruch.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-600">
          Sie können mit einer Website starten oder direkt eine konkrete SEO-, Automatisierungs- oder Tool-Aufgabe
          lösen. Die Leistungen funktionieren einzeln und lassen sich später sinnvoll verbinden.
        </p>
      </div>

      <div className="service-showcase mt-10">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="service-tile"
            >
              <span className="service-tile-icon">
                <Icon />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/kontakt" className="service-tile-link">
                Anfrage besprechen
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
