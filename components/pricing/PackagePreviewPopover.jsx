import { useId, useState } from 'react';

function VisitenkarteMockup() {
  return (
    <div className="rounded-lg p-2.5" style={{ border: '1px solid rgba(168,142,247,0.15)', background: 'linear-gradient(135deg, #1E1A2B, #16131F)' }}>
      <div className="flex items-center justify-between">
        <div className="h-2 w-10 rounded-full" style={{ background: 'rgba(168,142,247,0.3)' }} />
        <div className="h-1.5 w-6 rounded-full" style={{ background: 'rgba(168,142,247,0.15)' }} />
      </div>
      <div className="mt-2.5 h-7 rounded-md" style={{ background: 'rgba(124,58,237,0.15)' }} />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-4/5 rounded-full" style={{ background: 'rgba(168,142,247,0.2)' }} />
        <div className="h-1.5 w-2/3 rounded-full" style={{ background: 'rgba(168,142,247,0.15)' }} />
      </div>
      <div className="mt-3 rounded-md px-2 py-1.5" style={{ border: '1px solid rgba(168,142,247,0.12)', background: 'rgba(124,58,237,0.08)' }}>
        <div className="h-1.5 w-1/2 rounded-full" style={{ background: 'rgba(168,85,247,0.4)' }} />
      </div>
    </div>
  );
}

function OnepagerMockup() {
  return (
    <div className="rounded-lg p-2.5" style={{ border: '1px solid rgba(168,142,247,0.2)', background: 'linear-gradient(180deg, rgba(124,58,237,0.1) 0%, #16131F 100%)' }}>
      <div className="h-2 w-12 rounded-full" style={{ background: 'rgba(168,85,247,0.5)' }} />
      <div className="mt-2 h-8 rounded-md" style={{ background: 'rgba(124,58,237,0.18)' }} />
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-5 rounded" style={{ background: 'rgba(124,58,237,0.12)' }} />
        ))}
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full" style={{ background: 'rgba(168,142,247,0.18)' }} />
        <div className="h-1.5 w-5/6 rounded-full" style={{ background: 'rgba(168,142,247,0.14)' }} />
        <div className="h-1.5 w-4/6 rounded-full" style={{ background: 'rgba(168,142,247,0.12)' }} />
      </div>
      <div className="mt-2 h-5 rounded-md" style={{ background: 'rgba(124,58,237,0.2)' }} />
    </div>
  );
}

function MultipageMockup() {
  return (
    <div className="rounded-lg p-2.5" style={{ border: '1px solid rgba(168,142,247,0.25)', background: 'linear-gradient(180deg, rgba(124,58,237,0.12) 0%, #16131F 100%)' }}>
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-9 rounded-full" style={{ background: 'rgba(168,85,247,0.55)' }} />
        <div className="h-1.5 w-7 rounded-full" style={{ background: 'rgba(168,142,247,0.25)' }} />
        <div className="h-1.5 w-7 rounded-full" style={{ background: 'rgba(168,142,247,0.25)' }} />
        <div className="h-1.5 w-7 rounded-full" style={{ background: 'rgba(168,142,247,0.25)' }} />
      </div>
      <div className="mt-2 grid grid-cols-[1.2fr_0.8fr] gap-1.5">
        <div className="h-14 rounded-md" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,142,247,0.2)' }} />
        <div className="space-y-1.5 rounded-md p-1.5" style={{ background: 'rgba(124,58,237,0.1)' }}>
          <div className="h-2 rounded" style={{ background: 'rgba(168,85,247,0.35)' }} />
          <div className="h-2 rounded" style={{ background: 'rgba(168,142,247,0.25)' }} />
          <div className="h-2 rounded" style={{ background: 'rgba(168,142,247,0.2)' }} />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-4 rounded" style={{ background: 'rgba(124,58,237,0.15)' }} />
        ))}
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-2">
      <div className="rounded-lg p-2" style={{ border: '1px solid rgba(168,142,247,0.15)', background: 'linear-gradient(135deg, #1E1A2B, #16131F)' }}>
        <div className="h-2 w-10 rounded-full" style={{ background: 'rgba(168,142,247,0.3)' }} />
        <div className="mt-2 h-8 rounded" style={{ background: 'rgba(124,58,237,0.12)' }} />
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-4 rounded" style={{ background: 'rgba(124,58,237,0.12)' }} />
          <div className="h-4 rounded" style={{ background: 'rgba(124,58,237,0.12)' }} />
        </div>
      </div>
      <div className="rounded-lg p-2" style={{ border: '1px solid rgba(168,85,247,0.25)', background: 'rgba(124,58,237,0.1)' }}>
        <div className="h-2 w-10 rounded-full" style={{ background: 'rgba(168,85,247,0.5)' }} />
        <div className="mt-2 space-y-1.5">
          <div className="h-4 rounded" style={{ background: 'rgba(168,85,247,0.22)' }} />
          <div className="h-4 rounded" style={{ background: 'rgba(168,85,247,0.18)' }} />
          <div className="h-4 rounded" style={{ background: 'rgba(168,85,247,0.15)' }} />
        </div>
      </div>
    </div>
  );
}

function getMockupByType(type) {
  if (type === 'visitenkarte') return <VisitenkarteMockup />;
  if (type === 'onepager') return <OnepagerMockup />;
  if (type === 'multipage') return <MultipageMockup />;
  return <AdminMockup />;
}

export default function PackagePreviewPopover({ title, description, bullets, type = 'visitenkarte' }) {
  const [isOpen, setIsOpen] = useState(false);
  const previewId = useId();

  return (
    <div className="mt-5">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition"
        style={{
          border: '1px solid rgba(168,142,247,0.2)',
          background: 'rgba(124,58,237,0.08)',
          color: '#9690A8'
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={previewId}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; e.currentTarget.style.color = '#A855F7'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,142,247,0.2)'; e.currentTarget.style.color = '#9690A8'; }}
      >
        Beispiel anzeigen
        <span className={`text-[10px] transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" style={{ display: 'inline-block' }}>
          ▾
        </span>
      </button>

      <div
        id={previewId}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="rounded-2xl p-3" style={{ border: '1px solid rgba(168,142,247,0.15)', background: '#1E1A2B' }}>
            <div className="mb-3">{getMockupByType(type)}</div>
            <p className="text-xs leading-relaxed" style={{ color: '#9690A8' }}>{description}</p>
            {bullets?.length ? (
              <ul className="mt-2 space-y-1 text-xs" style={{ color: '#9690A8' }}>
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: '#7C3AED' }} aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <span className="sr-only">Vorschau für {title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
