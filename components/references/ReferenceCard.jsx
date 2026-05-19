import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const previewConfig = {
  bistro: {
    shell: 'from-[#1a1410] to-[#2d211a]',
    accent: 'bg-amber-500',
    label: 'Menu, mood, booking',
    meta: '18:30 · 2 Personen',
    isDark: true
  },
  salon: {
    shell: 'from-[#f8f5f0] to-[#efe9e0]',
    accent: 'bg-stone-800',
    label: 'Cut, color, care',
    meta: 'Balayage ab 120 €',
    isDark: false
  },
  dental: {
    shell: 'from-[#f0f7fa] to-[#e3f0f5]',
    accent: 'bg-cyan-600',
    label: 'Calm appointment flow',
    meta: 'Neue Patienten',
    isDark: false
  },
  physio: {
    shell: 'from-[#e8f5f0] to-[#d5ebe3]',
    accent: 'bg-teal-600',
    label: 'Back pain pathway',
    meta: 'Check · Treat · Recover',
    isDark: false
  },
  garage: {
    shell: 'from-[#0f1419] to-[#1a2332]',
    accent: 'bg-red-500',
    label: 'Diagnosis and service',
    meta: 'Inspection · Brakes',
    isDark: true
  },
  estate: {
    shell: 'from-[#f5f2eb] to-[#ebe5d8]',
    accent: 'bg-amber-700',
    label: 'One listing, one photo grade',
    meta: 'Expose · Hamburg',
    isDark: false
  }
};

function PreviewWindow({ project }) {
  const config = previewConfig[project.previewStyle] || previewConfig.bistro;
  const isDark = config.isDark;

  return (
    <div className={`relative min-h-[300px] overflow-hidden bg-gradient-to-br ${config.shell}`}>
      {/* Image */}
      <Image
        src={project.assetSet?.hero || project.image}
        alt={`${project.brandName} Vorschau`}
        width={1100}
        height={760}
        className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent' : 'bg-gradient-to-t from-white/90 via-white/40 to-transparent'}`} />
      
      {/* Browser Dots */}
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/15'}`} />
        <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
        <span className={`h-3 w-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/5'}`} />
      </div>
      
      {/* Meta Badge */}
      <span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${isDark ? 'bg-white/10 text-white border border-white/10' : 'bg-black/5 text-foreground border border-black/5'}`}>
        {config.meta}
      </span>
      
      {/* Bottom Content */}
      <div className="absolute inset-x-4 bottom-4">
        <div className={`rounded-2xl p-5 backdrop-blur-xl ${isDark ? 'bg-white/10 border border-white/10' : 'bg-white/80 border border-black/5 shadow-lg'}`}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-muted'}`}>
                {project.brandName}
              </p>
              <p className={`mt-1 text-lg font-semibold leading-tight ${isDark ? 'text-white' : 'text-foreground'}`}>
                {config.label}
              </p>
            </div>
            <span className={`h-12 w-12 shrink-0 rounded-full ${config.accent} shadow-lg`} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReferenceCard({ project }) {
  return (
    <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
      {/* Preview Image */}
      <Link href={`/referenzen/${project.slug}`} className="block overflow-hidden" aria-label={`${project.title} ansehen`}>
        <PreviewWindow project={project} />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {project.siteType}
          </span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
            {project.visualDirection}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>

        {/* Details */}
        <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">Ziel</p>
            <p className="text-sm text-foreground leading-relaxed">{project.industryGoal}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">Technologie</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 bg-gray-100 text-foreground text-xs font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-muted">{project.trustSignal}</p>
          <Link 
            href={`/referenzen/${project.slug}`} 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:gap-3 transition-all duration-300"
          >
            <span>{project.primaryAction}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
