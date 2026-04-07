import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { referenceProjects } from '../data/references';

export default function Portfolio() {
  const projects = referenceProjects.slice(0, 3);
  return (
    <section className="section-spacing" aria-labelledby="portfolio-heading">
      <div className="section-container">
        <div className="section-intro">
          <p className="section-label">Referenzen</p>
          <h2 id="portfolio-heading" className="display-title page-h2">Beispiele moderner Unternehmenswebsites</h2>
          <p className="mt-5 text-[18px] text-[var(--text-secondary)]">Ausgewählte Demos mit realitätsnaher Struktur, klarer Nutzerführung und hochwertiger visueller Ausarbeitung.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article key={project.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className="card overflow-hidden">
              <div className="relative h-56 border-b border-[var(--border-subtle)] bg-[#ebe8e1]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-semibold">{project.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[var(--text-secondary)]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>
                <Link href={`/referenzen/${project.slug}`} className="secondary-btn mt-5 inline-flex h-[44px] px-5 text-[14px]">Demo ansehen</Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/referenzen" className="primary-btn primary-btn--blue">Weitere Referenzen ansehen</Link>
        </div>
      </div>
    </section>
  );
}
