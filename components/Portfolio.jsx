import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { referenceProjects } from '../data/references';

export default function Portfolio() {
  const projects = referenceProjects.slice(0, 3);
  return (
    <section className="section-spacing" aria-labelledby="portfolio-heading">
      <div className="section-container">
        <p className="section-label">Referenzen</p>
        <h2 id="portfolio-heading" className="text-3xl">Beispiele moderner Unternehmenswebsites</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article key={project.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className="card overflow-hidden">
              <div className="relative h-52">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">{project.tags.slice(0,3).map((tag) => <span key={tag} className="rounded-full bg-[rgba(99,102,241,0.15)] px-3 py-1 text-xs text-[#A5B4FC]">{tag}</span>)}</div>
                <Link href={`/referenzen/${project.slug}`} className="secondary-btn mt-4 inline-flex">Demo ansehen</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
