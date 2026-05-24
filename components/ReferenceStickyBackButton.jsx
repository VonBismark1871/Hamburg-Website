import Link from 'next/link';

export default function ReferenceStickyBackButton() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:translate-x-0">
      <Link
        href="/referenzen"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.08em] transition"
        style={{
          background: 'rgba(11,10,18,0.85)',
          border: '1px solid rgba(168,142,247,0.25)',
          color: '#9690A8',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#A855F7'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#9690A8'; e.currentTarget.style.borderColor = 'rgba(168,142,247,0.25)'; }}
      >
        <span aria-hidden="true">←</span>
        Zur Übersicht
      </Link>
    </div>
  );
}
