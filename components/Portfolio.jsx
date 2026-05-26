import Image from 'next/image';
import Link from 'next/link';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { getReferenceBySlug } from '../data/references';

const homepageProjects = ['restaurant-demo', 'physio-demo', 'autoservice-demo']
  .map((slug) => getReferenceBySlug(slug))
  .filter(Boolean);

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label" style={{ justifyContent: 'center' }}>Referenzen</p>
        <h2 id="portfolio-heading" style={{ color: 'var(--text)' }}>
          Referenzen aus<br />unterschiedlichen Branchen
        </h2>
        <p className="mx-auto mt-5 max-w-2xl" style={{ color: 'var(--muted)', fontSize: 'var(--text-lead)', lineHeight: 1.7 }}>
          Die Beispiele zeigen Stil, Struktur und technische Richtung für typische kleine Unternehmen.
          Sie sind bewusst als Demos formuliert: klar prüfbar, ohne erfundene Kundenergebnisse.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {homepageProjects.map((project) => (
          <RevealItem as="article" key={project.slug} className="reference-preview-card group">
            <Link href={`/referenzen/${project.slug}`} className="block" aria-label={`${project.title} ansehen`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.assetSet?.hero || project.image}
                  alt={`${project.title} Vorschau`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(8,7,13,0.85) 100%)' }}
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur"
                  style={{ background: 'rgba(8,7,13,0.6)', color: 'var(--cyan-2)', border: '1px solid rgba(34,211,238,0.3)' }}
                >
                  {project.format}
                </span>
              </div>
            </Link>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold leading-tight" style={{ color: 'var(--text)' }}>{project.title}</h3>
              <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{project.conceptFocus}</p>
              <Link
                href={`/referenzen/${project.slug}`}
                className="tile-link mt-5"
              >
                Projekt ansehen
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12 flex justify-center" delay={0.1}>
        <Link href="/referenzen" className="secondary-btn">Weitere Referenzen ansehen</Link>
      </Reveal>
    </section>
  );
}
