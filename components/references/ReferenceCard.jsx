import Image from 'next/image';
import Link from 'next/link';

const previewConfig = {
  bistro: {
    shell: 'bg-gradient-to-br from-[#1a1410] to-[#2d211a]',
    accent: 'bg-amber-500',
    label: 'Menu, mood, booking',
    meta: '18:30 · 2 Personen'
  },
  salon: {
    shell: 'bg-gradient-to-br from-[#f8f5f0] to-[#efe9e0]',
    accent: 'bg-stone-800',
    label: 'Cut, color, care',
    meta: 'Balayage ab 120 €'
  },
  dental: {
    shell: 'bg-gradient-to-br from-[#f0f7fa] to-[#e3f0f5]',
    accent: 'bg-cyan-600',
    label: 'Calm appointment flow',
    meta: 'Neue Patienten'
  },
  physio: {
    shell: 'bg-gradient-to-br from-[#e8f5f0] to-[#d5ebe3]',
    accent: 'bg-teal-600',
    label: 'Back pain pathway',
    meta: 'Check · Treat · Recover'
  },
  garage: {
    shell: 'bg-gradient-to-br from-[#0f1419] to-[#1a2332]',
    accent: 'bg-red-500',
    label: 'Diagnosis and service',
    meta: 'Inspection · Brakes'
  },
  estate: {
    shell: 'bg-gradient-to-br from-[#f5f2eb] to-[#ebe5d8]',
    accent: 'bg-amber-700',
    label: 'One listing, one photo grade',
    meta: 'Expose · Hamburg'
  }
};

function PreviewWindow({ project }) {
  const config = previewConfig[project.previewStyle] || previewConfig.bistro;
  const isDark = ['bistro', 'garage'].includes(project.previewStyle);

  return (
    <div className={`relative min-h-[280px] overflow-hidden ${config.shell}`}>
      {/* Image */}
      <Image
        src={project.assetSet?.hero || project.image}
        alt={`${project.brandName} Vorschau`}
        width={1100}
        height={760}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent' : 'bg-gradient-to-t from-white/90 via-white/40 to-transparent'}`} />
      
      {/* Browser Dots */}
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className={`h-2.5 w-2.5 rounded-full ${isDark ? 'bg-white/40' : 'bg-black/20'}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${isDark ? 'bg-white/25' : 'bg-black/10'}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${isDark ? 'bg-white/15' : 'bg-black/5'}`} />
      </div>
      
      {/* Meta Badge */}
      <span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-ink'}`}>
        {config.meta}
      </span>
      
      {/* Bottom Content */}
      <div className="absolute inset-x-4 bottom-4">
        <div className={`rounded-xl p-4 backdrop-blur-md ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/80 border border-black/5 shadow-lg'}`}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-ink-muted'}`}>
                {project.brandName}
              </p>
              <p className={`mt-1 text-lg font-semibold leading-tight ${isDark ? 'text-white' : 'text-ink'}`}>
                {config.label}
              </p>
            </div>
            <span className={`h-10 w-10 shrink-0 rounded-full ${config.accent}`} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReferenceCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-large">
      {/* Preview Image */}
      <Link href={`/referenzen/${project.slug}`} className="block overflow-hidden" aria-label={`${project.title} ansehen`}>
        <PreviewWindow project={project} />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="reference-format">{project.siteType}</span>
          <span className="reference-direction">{project.visualDirection}</span>
        </div>

        {/* Title & Description */}
        <h3 className="mt-4 text-xl font-semibold leading-tight text-ink group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{project.description}</p>

        {/* Details */}
        <dl className="mt-5 grid gap-4 border-y border-line py-5">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Ziel</dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink-secondary">{project.industryGoal}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Technologie</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="reference-chip">
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <p className="text-xs font-medium text-ink-muted">{project.trustSignal}</p>
          <Link 
            href={`/referenzen/${project.slug}`} 
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent hover:text-bg-dark hover:gap-3"
          >
            <span>{project.primaryAction}</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
