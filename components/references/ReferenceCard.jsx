import Image from 'next/image';
import Link from 'next/link';

const toneClasses = {
  warm: 'from-[#ece5d7] via-[#f5f0e6] to-[#faf8f2]',
  dark: 'from-[#d8d6d1] via-[#ece9e2] to-[#f7f5ef]',
  clean: 'from-[#e5edf7] via-[#f1f5fb] to-[#fafbfd]',
  calm: 'from-[#e5ece8] via-[#f2f5f2] to-[#fafbfa]',
  contrast: 'from-[#e5e3de] via-[#f3f1ed] to-[#faf9f6]',
  premium: 'from-[#e7e2d9] via-[#f3efe7] to-[#fbf9f4]'
};

export default function ReferenceCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card)] shadow-[0_10px_30px_rgba(20,20,20,0.04)] transition duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(21,21,21,0.14)]">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${toneClasses[project.tone] || toneClasses.calm}`}>
        <Image
          src={project.image}
          alt={`${project.title} Vorschau`}
          width={900}
          height={560}
          className="h-full w-full object-cover object-top transition duration-300 ease-out group-hover:scale-[1.015]"
        />
      </div>
      <div className="p-7">
        <h3 className="text-[20px] font-semibold leading-tight text-[color:var(--color-ink)]">{project.title}</h3>
        <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-ink-2)]">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Projekt-Highlights">
          {project.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[rgba(21,21,21,0.62)]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={`/referenzen/${project.slug}`}
          className="mt-6 inline-flex h-11 items-center rounded-full border border-[rgba(21,21,21,0.14)] px-5 text-sm font-semibold text-[color:var(--color-ink)] transition duration-200 ease-out hover:border-[rgba(21,21,21,0.26)] hover:bg-[color:var(--color-bg-card-soft)]"
        >
          Demo ansehen
        </Link>
      </div>
    </article>
  );
}
