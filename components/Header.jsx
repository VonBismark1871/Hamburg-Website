import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/#features', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Anfragen' }
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-950/10 bg-[#f7f8f3]/88 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between gap-6 py-4">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                item.label === 'Anfragen'
                  ? 'rounded-full bg-slate-950 px-4 py-2 text-[13px] font-semibold text-white hover:bg-cyan-400 hover:text-slate-950'
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

      <nav aria-label="Mobile Navigation" className="border-t border-slate-950/10 bg-[#f7f8f3]/95 md:hidden">
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
