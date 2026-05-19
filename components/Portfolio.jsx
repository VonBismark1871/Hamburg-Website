import Link from 'next/link';
import { motion } from 'framer-motion';
import ReferenceCard from './references/ReferenceCard';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'friseursalon-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

const proofPoints = [
  { label: 'Branchen', value: 'Gastro, Praxen, Service', icon: 'building' },
  { label: 'Umfang', value: 'Onepager bis Mehrseiter', icon: 'layers' },
  { label: 'Stil', value: 'Minimal bis editorial', icon: 'palette' }
];

function ProofIcon({ type }) {
  const icons = {
    building: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />,
    layers: <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />,
    palette: <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
  };

  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icons[type]}
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="section-label">Referenzen</p>
          <motion.h2
            id="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Beispiele für unterschiedliche <span className="text-accent">Branchen</span> und Stilrichtungen.
          </motion.h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            Manche Seiten müssen nur schnell erklären und Kontakt ermöglichen. Andere brauchen mehr Tiefe, Bildsprache
            oder Funktionen. Die Beispiele zeigen diesen Spielraum.
          </p>
        </div>

        {/* Proof Points */}
        <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-full border border-line bg-bg-card px-4 py-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ProofIcon type={item.icon} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{item.label}</p>
                <p className="text-sm font-medium text-ink">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homepageProjects.map((demo, index) => (
          <motion.div
            key={demo.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ReferenceCard project={demo} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap items-center gap-5">
        <Link href="/referenzen" className="primary-btn">
          Weitere Referenzen ansehen
        </Link>
        <Link 
          href="/kontakt" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          <span>Ähnliches Projekt anfragen</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
