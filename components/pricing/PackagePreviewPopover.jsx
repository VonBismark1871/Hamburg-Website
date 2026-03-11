import { useEffect, useRef, useState } from 'react';

function WebsiteMockup() {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2">
      <div className="h-2 w-10 rounded-full bg-slate-200" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-slate-200/90" />
        <div className="h-1.5 w-5/6 rounded-full bg-slate-200/80" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-8 rounded-md bg-slate-100" />
        ))}
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="grid grid-cols-[1.4fr_1fr] gap-2">
      <WebsiteMockup />
      <div className="rounded-lg border border-indigo-200/70 bg-indigo-50/70 p-2">
        <div className="h-2 w-12 rounded-full bg-indigo-200" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-indigo-200/90" />
          <div className="h-1.5 w-4/5 rounded-full bg-indigo-200/80" />
          <div className="h-1.5 w-3/5 rounded-full bg-indigo-200/80" />
        </div>
        <div className="mt-2.5 h-4 rounded bg-indigo-200/90" />
      </div>
    </div>
  );
}

export default function PackagePreviewPopover({ title, description, bullets, type = 'website' }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function onDocumentClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function onEsc(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', onDocumentClick);
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('pointerdown', onDocumentClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="group relative mt-5 inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Beispiel anzeigen
      </button>

      <div
        className={`absolute left-0 top-full z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.5)] transition duration-150 ${
          isOpen ? 'pointer-events-auto visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="mb-3">{type === 'admin' ? <AdminMockup /> : <WebsiteMockup />}</div>
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
        <span className="sr-only">Vorschau für {title}</span>
      </div>
    </div>
  );
}
