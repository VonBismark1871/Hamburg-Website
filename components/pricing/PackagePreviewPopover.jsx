import { useId, useState } from 'react';

function VisitenkarteMockup() {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2.5">
      <div className="flex items-center justify-between">
        <div className="h-2 w-10 rounded-full bg-slate-300/80" />
        <div className="h-1.5 w-6 rounded-full bg-slate-200" />
      </div>
      <div className="mt-2.5 h-7 rounded-md bg-slate-100" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-4/5 rounded-full bg-slate-200" />
        <div className="h-1.5 w-2/3 rounded-full bg-slate-200/85" />
      </div>
      <div className="mt-3 rounded-md border border-slate-200 bg-white px-2 py-1.5">
        <div className="h-1.5 w-1/2 rounded-full bg-slate-300/80" />
      </div>
    </div>
  );
}

function OnepagerMockup() {
  return (
    <div className="rounded-lg border border-blue-200/70 bg-gradient-to-b from-blue-50/70 to-white p-2.5">
      <div className="h-2 w-12 rounded-full bg-blue-300/70" />
      <div className="mt-2 h-8 rounded-md bg-blue-100" />
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-5 rounded bg-blue-100/70" />
        ))}
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-blue-200/80" />
        <div className="h-1.5 w-5/6 rounded-full bg-blue-200/70" />
        <div className="h-1.5 w-4/6 rounded-full bg-blue-200/70" />
      </div>
      <div className="mt-2 h-5 rounded-md bg-blue-200/80" />
    </div>
  );
}

function MultipageMockup() {
  return (
    <div className="rounded-lg border border-accent/25 bg-gradient-to-b from-accent/[0.08] to-white p-2.5">
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-9 rounded-full bg-accent/40" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
      </div>
      <div className="mt-2 grid grid-cols-[1.2fr_0.8fr] gap-1.5">
        <div className="h-14 rounded-md bg-white ring-1 ring-accent/20" />
        <div className="space-y-1.5 rounded-md bg-accent/[0.08] p-1.5">
          <div className="h-2 rounded bg-accent/25" />
          <div className="h-2 rounded bg-accent/20" />
          <div className="h-2 rounded bg-accent/20" />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-4 rounded bg-accent/15" />
        ))}
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-2">
      <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
        <div className="h-2 w-10 rounded-full bg-slate-300/80" />
        <div className="mt-2 h-8 rounded bg-slate-100" />
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
        </div>
      </div>
      <div className="rounded-lg border border-indigo-200/70 bg-indigo-50/70 p-2">
        <div className="h-2 w-10 rounded-full bg-indigo-300/80" />
        <div className="mt-2 space-y-1.5">
          <div className="h-4 rounded bg-indigo-200/80" />
          <div className="h-4 rounded bg-indigo-200/70" />
          <div className="h-4 rounded bg-indigo-200/70" />
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
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={previewId}
      >
        Beispiel anzeigen
        <span className={`text-[10px] transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          v
        </span>
      </button>

      <div
        id={previewId}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
            <div className="mb-3">{getMockupByType(type)}</div>
            <p className="text-xs leading-relaxed text-slate-600">{description}</p>
            {bullets?.length ? (
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <span className="sr-only">Vorschau fuer {title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
