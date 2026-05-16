import Link from 'next/link';
import { getReferenceBySlug } from '../../data/references';

function MiniList({ title, items }) {
  return (
    <div className="case-mini-list">
      <p className="case-mini-title">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConceptCaseBlock({ slug, compact = false }) {
  const project = getReferenceBySlug(slug);

  if (!project) {
    return null;
  }

  return (
    <section className="section-container pb-12" aria-labelledby={`${slug}-case-heading`}>
      <div className="concept-case">
        <div className="concept-case-intro">
          <p className="section-label">Studio Case Concept</p>
          <h2 id={`${slug}-case-heading`} className="text-3xl leading-tight text-slate-950 sm:text-4xl">
            {project.title}: nicht nur Look, sondern Struktur.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{project.conceptFocus}</p>
          <p className="mt-4 rounded-xl border border-slate-950/10 bg-white/70 px-4 py-3 text-sm leading-6 text-slate-600">
            Dieses Beispiel ist ein Demo-Konzept von Hamburg Websites. Es zeigt Design, Informationsarchitektur und
            technische Denkweise, aber keine verifizierte Kundenreferenz.
          </p>
          {!compact ? (
            <Link href="/kontakt" className="mt-6 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              Ähnliches Konzept anfragen
            </Link>
          ) : null}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <MiniList title="UX Struktur" items={project.uxStructure} />
          <MiniList title="Technischer Fokus" items={project.technicalFocus} />
          <div className="case-mini-list">
            <p className="case-mini-title">Visuelle Richtung</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{project.visualDirection}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{project.format}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
