import Link from 'next/link';
import { motion } from 'framer-motion';
import ReferenceCard from './references/ReferenceCard';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'friseursalon-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

const proofPoints = [
  { label: 'Branchen', value: 'Gastro, Praxen, Service' },
  { label: 'Umfang', value: 'Onepager bis Mehrseiter' },
  { label: 'Stil', value: 'Minimal bis editorial' }
];

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-label">Gute Referenzen</p>
          <motion.h2
            id="portfolio-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl text-3xl leading-tight text-slate-950 sm:text-5xl"
          >
            Beispiele für unterschiedliche Branchen, Budgets und Stilrichtungen.
          </motion.h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Manche Seiten müssen nur schnell erklären und Kontakt ermöglichen. Andere brauchen mehr Tiefe, Bildsprache
            oder Funktionen. Die Beispiele zeigen diesen Spielraum.
          </p>
        </div>

        <div className="proof-panel">
          {proofPoints.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((demo, index) => (
          <motion.div
            key={demo.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <ReferenceCard project={demo} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href="/referenzen" className="primary-btn inline-flex">
          Weitere Referenzen ansehen
        </Link>
        <Link href="/kontakt" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
          Ähnliches Projekt anfragen
        </Link>
      </div>
    </section>
  );
}
