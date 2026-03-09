import Link from 'next/link';

const navItems = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontaktaufnahme' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-container flex items-center justify-between gap-6 py-3">
        <Link href="/" className="text-base font-semibold tracking-wide text-slateBlue sm:text-lg">
          Hamburg Websites
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-medium transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-slate-200/70 bg-white/95 md:hidden">
        <div className="section-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-medium transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
