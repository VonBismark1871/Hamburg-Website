import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'physio-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="portfolio-heading"
          className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
        >
          Referenzen aus unterschiedlichen Branchen
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Die Beispiele zeigen Stil, Struktur und technische Richtung fuer typische kleine Unternehmen. Sie sind
          bewusst als Demos formuliert: klar pruefbar, ohne erfundene Kundenergebnisse.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="reference-preview-card"
          >
            <Link href={`/referenzen/${project.slug}`} className="block" aria-label={`${project.title} ansehen`}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.assetSet?.hero || project.image}
                  alt={`${project.title} Vorschau`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-6">
              <p className="text-xs font-bold uppercase text-blue-700">{project.format}</p>
              <h3 className="mt-3 text-xl font-bold leading-tight text-slate-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.conceptFocus}</p>
              <Link href={`/referenzen/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Projekt ansehen
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/referenzen" className="secondary-btn">
          Weitere Referenzen ansehen
        </Link>
      </div>
    </section>
  );
}
