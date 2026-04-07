import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const VIEWPORT_MARGIN = 12;
const POPOVER_WIDTH = 288;
const DESKTOP_GAP = 10;
const MOBILE_GAP = 8;

function VisitenkarteMockup() {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-[var(--bg-card)] p-2.5">
      <div className="flex items-center justify-between">
        <div className="h-2 w-10 rounded-full bg-slate-300/80" />
        <div className="h-1.5 w-6 rounded-full bg-slate-200" />
      </div>
      <div className="mt-2.5 h-7 rounded-md bg-slate-100" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-4/5 rounded-full bg-slate-200" />
        <div className="h-1.5 w-2/3 rounded-full bg-slate-200/85" />
      </div>
      <div className="mt-3 rounded-md border border-slate-200 bg-[var(--bg-card)] px-2 py-1.5">
        <div className="h-1.5 w-1/2 rounded-full bg-slate-300/80" />
      </div>
    </div>
  );
}

function OnepagerMockup() {
  return (
    <div className="rounded-lg border border-blue-200/70 bg-gradient-to-b from-blue-50/70 to-[var(--bg-card)] p-2.5">
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
    <div className="rounded-lg border border-accent/25 bg-gradient-to-b from-accent/[0.08] to-[var(--bg-card)] p-2.5">
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-9 rounded-full bg-accent/40" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
        <div className="h-1.5 w-7 rounded-full bg-accent/20" />
      </div>
      <div className="mt-2 grid grid-cols-[1.2fr_0.8fr] gap-1.5">
        <div className="h-14 rounded-md bg-[var(--bg-card)] ring-1 ring-accent/20" />
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
      <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-[var(--bg-card)] p-2">
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
  const [position, setPosition] = useState({ top: 0, left: 0, placement: 'bottom' });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen) return;

    function updatePosition() {
      const triggerRect = buttonRef.current?.getBoundingClientRect();
      const popoverRect = popoverRef.current?.getBoundingClientRect();
      if (!triggerRect || !popoverRect) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isMobile = viewportWidth < 640;
      const gap = isMobile ? MOBILE_GAP : DESKTOP_GAP;
      const safeWidth = Math.min(POPOVER_WIDTH, viewportWidth - VIEWPORT_MARGIN * 2);
      const availableBelow = viewportHeight - triggerRect.bottom - VIEWPORT_MARGIN;
      const availableAbove = triggerRect.top - VIEWPORT_MARGIN;
      const placement = availableBelow >= popoverRect.height + gap || availableBelow >= availableAbove ? 'bottom' : 'top';

      let left = triggerRect.left;
      const maxLeft = viewportWidth - safeWidth - VIEWPORT_MARGIN;
      if (left > maxLeft) left = maxLeft;
      if (left < VIEWPORT_MARGIN) left = VIEWPORT_MARGIN;

      let top = placement === 'bottom' ? triggerRect.bottom + gap : triggerRect.top - popoverRect.height - gap;
      const maxTop = viewportHeight - popoverRect.height - VIEWPORT_MARGIN;
      if (top > maxTop) top = Math.max(VIEWPORT_MARGIN, maxTop);
      if (top < VIEWPORT_MARGIN) top = VIEWPORT_MARGIN;

      setPosition({ top, left, placement });
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    function onDocumentClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) setIsOpen(false);
    }

    function onEsc(event) {
      if (event.key === 'Escape') setIsOpen(false);
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
      className="mt-5 inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[var(--bg-card)] px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Beispiel anzeigen
      </button>

      <div
        ref={popoverRef}
        className={`fixed z-40 w-[min(18rem,calc(100vw-1.5rem))] rounded-xl border border-slate-200 bg-[var(--bg-card)] p-3 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.5)] transition duration-150 ${
          isOpen
            ? `pointer-events-auto visible opacity-100 ${position.placement === 'bottom' ? 'translate-y-0' : 'translate-y-0'}`
            : 'pointer-events-none invisible -translate-y-1 opacity-0'
        }`}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
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
        <span className="sr-only">Vorschau für {title}</span>
      </div>
    </div>
  );
}
