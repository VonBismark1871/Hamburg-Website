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
      <motion.h2
        id="portfolio-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold text-slateBlue"
      >
        Referenzen im Überblick
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((demo, i) => (
          <motion.div
            key={demo.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <ReferenceCard project={demo} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/referenzen" className="inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
          Weitere Referenzen ansehen
        </Link>
      </div>
    </section>
  );
}
