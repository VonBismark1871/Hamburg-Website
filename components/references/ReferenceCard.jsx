import Image from 'next/image';
import Link from 'next/link';

const toneClasses = {
  warm: 'from-amber-100 via-orange-50 to-amber-50',
  dark: 'from-slate-800 via-slate-900 to-zinc-900',
  clean: 'from-cyan-50 via-sky-50 to-[var(--bg-card)]',
  calm: 'from-emerald-50 via-teal-50 to-[var(--bg-card)]',
  contrast: 'from-slate-200 via-[var(--bg-card)] to-slate-100',
  premium: 'from-zinc-100 via-stone-50 to-[var(--bg-card)]'
};

export default function ReferenceCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-[var(--bg-card)] shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${toneClasses[project.tone] || toneClasses.calm}`}>
        <Image
          src={project.image}
          alt={`${project.title} Vorschau`}
          width={900}
          height={560}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slateBlue">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Projekt-Highlights">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={`/referenzen/${project.slug}`}
          className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
        >
          Demo ansehen
        </Link>
      </div>
    </article>
  );
}
