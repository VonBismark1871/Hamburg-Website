import Link from 'next/link';
import { motion } from 'framer-motion';
import ReferenceCard from './references/ReferenceCard';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'friseursalon-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

export default function Portfolio() {
  return (
    <section className="section-container section-spacing-sm" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="section-intro">
        <p className="section-label">Referenzen</p>
        <motion.h2
          id="portfolio-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]"
        >
          Referenzen im Überblick
        </motion.h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((demo, i) => (
          <motion.div
            key={demo.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <ReferenceCard project={demo} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/referenzen" className="primary-btn inline-flex items-center">
          Weitere Referenzen ansehen
        </Link>
      </div>
    </section>
  );
}
