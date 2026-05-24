import Link from 'next/link';
import { motion } from 'framer-motion';

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.9"
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
    number: '01',
    title: 'Websites',
    text: 'Klare Unternehmensseiten, Relaunches und Landingpages mit Struktur, Design, SEO-Basis und Anfrageführung.',
    highlight: 'Ab 400 €'
  },
  {
    icon: VisibilityIcon,
    number: '02',
    title: 'SEO & Sichtbarkeit',
    text: 'Lokale Seitenstruktur, Google-Business-Logik, Inhalte und technische Grundlage für bessere Auffindbarkeit.',
    highlight: 'Lokal stark'
  },
  {
    icon: AutomationIcon,
    number: '03',
    title: 'Automatisierung',
    text: 'Formulare, Benachrichtigungen, einfache Workflows und interne Abläufe, die wiederkehrende Arbeit reduzieren.',
    highlight: 'Zeit sparen'
  },
  {
    icon: ToolsIcon,
    number: '04',
    title: 'Plugins & Tools',
    text: 'Kleine Webtools, Admin-Hilfen und Integrationen, wenn Standardfunktionen nicht ausreichen.',
    highlight: 'Maßgeschneidert'
  }
];

export default function Features() {
  return (
    <section
      className="section-container section-spacing"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="section-label">Leistungen</p>
          <h2
            id="features-heading"
            className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Vier klare Leistungen. Ein Anspruch.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-500">
          Sie können mit einer Website starten oder direkt eine konkrete SEO-, Automatisierungs- oder Tool-Aufgabe lösen. Die Leistungen funktionieren einzeln und lassen sich später sinnvoll verbinden.
        </p>
      </div>

      <div className="service-showcase mt-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="service-tile flex flex-col"
            >
              <div className="flex items-start justify-between">
                <span className="service-tile-icon">
                  <Icon />
                </span>
                <span
                  className="rounded-full border px-2.5 py-1 text-xs font-bold"
                  style={{
                    borderColor: 'rgba(184,255,47,0.4)',
                    background: 'rgba(184,255,47,0.1)',
                    color: '#3a5a00'
                  }}
                >
                  {service.highlight}
                </span>
              </div>

              <span
                className="mt-5 text-xs font-black tracking-widest"
                style={{ color: 'rgba(8,22,43,0.18)' }}
                aria-hidden="true"
              >
                {service.number}
              </span>
              <h3>{service.title}</h3>
              <p className="flex-1">{service.text}</p>
              <Link href="/kontakt" className="service-tile-link">
                Anfrage besprechen
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
