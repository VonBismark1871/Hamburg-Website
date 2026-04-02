import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontaktaufnahme' }
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[color:var(--color-bg-base)]/95 backdrop-blur">
      <div className="section-container flex items-center justify-between gap-6 py-3">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                item.label === 'Kontaktaufnahme'
                  ? 'rounded-[100px] border border-slate-200 px-4 py-1.5 text-[13px] font-normal text-slate-700 hover:border-accent hover:bg-accent hover:text-white'
                  : `text-sm font-normal ${
                      pathname === item.href ? 'font-medium text-slate-900' : 'text-slate-500 hover:text-slate-900'
                    }`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-slate-200/70 bg-[color:var(--color-bg-base)]/95 md:hidden">
        <div className="section-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href ? 'font-medium text-slate-900' : 'font-normal text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
