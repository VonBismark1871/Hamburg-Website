import Link from 'next/link';

export default function ReferenceBackButton({ href = '/referenzen', label = 'Zur Übersicht' }) {
  return (
    <Link
      href={href}
      className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-semibold text-slateBlue shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
      aria-label={label}
    >
      <span aria-hidden="true">←</span>
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">Übersicht</span>
    </Link>
  );
}
