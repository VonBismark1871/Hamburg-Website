import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/#features', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' }
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-950/10 bg-white">
      <div className="section-container flex items-center justify-between gap-6 py-4">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isContact = item.label === 'Kontakt';
            const isActive = pathname === item.href || (item.href === '/#features' && pathname === '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isContact
                    ? 'rounded-full bg-lime-300 px-5 py-3 text-[13px] font-bold text-slate-950 shadow-[0_10px_28px_rgba(184,255,61,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white'
                    : `text-sm font-semibold transition ${
                        isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                      }`
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-slate-950/10 bg-white/96 md:hidden">
        <div className="section-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
          {navItems.map((item) => {
            const isContact = item.label === 'Kontakt';

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isContact
                    ? 'rounded-full bg-slate-950 px-3 py-2 text-sm font-bold text-white'
                    : 'text-sm font-semibold text-slate-600 transition hover:text-slate-950'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
