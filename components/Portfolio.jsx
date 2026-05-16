import Link from 'next/link';
import { motion } from 'framer-motion';
import ReferenceCard from './references/ReferenceCard';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'friseursalon-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">Konzept-Galerie</p>
          <h2 id="portfolio-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
            Branchenbeispiele als Studio-Cases, nicht als Fake-Kundenlogos.
          </h2>
        </motion.div>
        <p className="text-base leading-8 text-slate-600">
          Die Demos zeigen Struktur, Stilrichtung und technische Denkweise. Sie sind bewusst als Konzept-Referenzen
          markiert und werden für echte Projekte individuell angepasst.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((demo, i) => (
          <motion.div
            key={demo.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <ReferenceCard project={demo} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href="/referenzen" className="primary-btn inline-flex">
          Konzept-Galerie ansehen
        </Link>
        <p className="text-sm text-slate-500">Onepager, mehrseitige Websites und branchenspezifische Landingpages.</p>
      </div>
    </section>
  );
}
