import Image from 'next/image';
import Link from 'next/link';

const previewConfig = {
  bistro: {
    shell: 'bg-[#271711] text-[#fff3e4]',
    panel: 'rounded-[1.4rem] border border-[#f3c39c]/35 bg-[#3a2116]/72',
    accent: 'bg-[#c9793f]',
    label: 'Menu, mood, booking',
    meta: '18:30 · 2 Personen'
  },
  salon: {
    shell: 'bg-[#f6efe7] text-[#2f2927]',
    panel: 'rounded-[2rem] border border-[#e7d6c8] bg-[#fffaf4]/86',
    accent: 'bg-[#2f2927]',
    label: 'Cut, color, care',
    meta: 'Balayage ab 120 €'
  },
  dental: {
    shell: 'bg-[#f4f9fb] text-[#17303a]',
    panel: 'rounded-2xl border border-[#c7e1e8] bg-white/88',
    accent: 'bg-[#1f6f86]',
    label: 'Calm appointment flow',
    meta: 'Neue Patienten'
  },
  physio: {
    shell: 'bg-[#edf7f3] text-[#1f3231]',
    panel: 'rounded-[2rem_0.9rem_2rem_0.9rem] border border-[#b9d7cf] bg-white/82',
    accent: 'bg-[#2f736b]',
    label: 'Back pain pathway',
    meta: 'Check · Treat · Recover'
  },
  garage: {
    shell: 'bg-[#101722] text-[#f3f5f7]',
    panel: 'rounded-lg border border-[#334257] bg-[#111926]/82',
    accent: 'bg-[#d64a3a]',
    label: 'Diagnosis and service',
    meta: 'Inspection · Brakes'
  },
  estate: {
    shell: 'bg-[#f6f3ee] text-[#211c17]',
    panel: 'rounded-md border border-[#d6c8b7] bg-white/86',
    accent: 'bg-[#8a6a43]',
    label: 'One listing, one photo grade',
    meta: 'Expose · Hamburg'
  }
};

function PreviewWindow({ project }) {
  const config = previewConfig[project.previewStyle] || previewConfig.bistro;

  return (
    <div className={`relative min-h-[260px] overflow-hidden ${config.shell}`}>
      <Image
        src={project.assetSet?.hero || project.image}
        alt={`${project.brandName} Vorschau`}
        width={1100}
        height={760}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/22 to-transparent" />
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/70" />
        <span className="h-2 w-2 rounded-full bg-white/45" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
      </div>
      <p className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
        {config.meta}
      </p>
      <div className={`absolute inset-x-4 bottom-4 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md ${config.panel}`}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">{project.brandName}</p>
            <strong className="mt-1 block text-lg leading-tight">{config.label}</strong>
          </div>
          <span className={`h-10 w-10 shrink-0 rounded-full ${config.accent}`} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default function ReferenceCard({ project }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] transition hover:-translate-y-1"
      style={{
        border: '1px solid rgba(168,142,247,0.14)',
        background: '#16131F',
        boxShadow: '0 22px 70px rgba(0,0,0,0.35)'
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,142,247,0.3)'; e.currentTarget.style.boxShadow = '0 32px 90px rgba(124,58,237,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,142,247,0.14)'; e.currentTarget.style.boxShadow = '0 22px 70px rgba(0,0,0,0.35)'; }}
    >
      <Link href={`/referenzen/${project.slug}`} className="block" aria-label={`${project.title} ansehen`}>
        <PreviewWindow project={project} />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="reference-format">{project.siteType}</span>
          <span className="reference-direction">{project.visualDirection}</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold leading-tight" style={{ color: '#ECEAF3' }}>{project.title}</h3>
        <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>{project.description}</p>

        <dl className="mt-5 grid gap-4 py-5" style={{ borderTop: '1px solid rgba(168,142,247,0.1)', borderBottom: '1px solid rgba(168,142,247,0.1)' }}>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: '#6B6480' }}>Ziel</dt>
            <dd className="mt-2 text-sm leading-6" style={{ color: '#9690A8' }}>{project.industryGoal}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: '#6B6480' }}>System</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="reference-chip">
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <p className="text-xs font-semibold leading-5" style={{ color: '#6B6480' }}>Demo-Konzept · ohne erfundene Ergebnisse</p>
          <Link
            href={`/referenzen/${project.slug}`}
            className="inline-flex shrink-0 rounded-full px-4 py-3 text-xs font-bold text-white transition"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}
          >
            {project.primaryAction}
          </Link>
        </div>
      </div>
    </article>
  );
}
