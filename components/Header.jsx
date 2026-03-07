import Link from 'next/link';

const navItems = [
  { href: '#features', label: 'Leistungen' },
  { href: '#process', label: 'Ablauf' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slateBlue sm:text-base">
          Webentwickler Hamburg
        </Link>
        <nav aria-label="Hauptnavigation" className="flex flex-wrap items-center justify-end gap-4 text-sm text-slate-600 sm:gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
