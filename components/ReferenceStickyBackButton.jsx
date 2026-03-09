import Link from 'next/link';

export default function ReferenceStickyBackButton() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:translate-x-0">
      <Link
        href="/referenzen"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-700 shadow-lg shadow-slate-300/50 backdrop-blur transition hover:border-slate-400 hover:bg-white"
      >
        <span aria-hidden="true">←</span>
        Zur Referenzübersicht
      </Link>
    </div>
  );
}
