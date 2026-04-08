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
    <header className="sticky top-0 z-40 h-[76px] border-b border-[color:var(--color-line-soft)] bg-[color:var(--color-bg-base)]/94 backdrop-blur">
      <div className="section-container flex h-full items-center justify-between gap-8">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition duration-200 ease-out ${
                item.label === 'Kontaktaufnahme'
                  ? 'inline-flex h-[42px] items-center rounded-full border border-[rgba(21,21,21,0.1)] bg-white/75 px-5 text-[15px] font-semibold text-[rgba(21,21,21,0.9)] hover:border-[rgba(21,21,21,0.18)] hover:bg-white'
                  : `text-[15px] font-medium ${
                      pathname === item.href
                        ? 'text-[rgba(21,21,21,0.96)]'
                        : 'text-[rgba(21,21,21,0.72)] hover:text-[rgba(21,21,21,0.96)]'
                    }`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-[color:var(--color-line-soft)] bg-[color:var(--color-bg-base)]/96 md:hidden">
        <div className="section-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? 'font-medium text-[rgba(21,21,21,0.96)]'
                  : 'font-normal text-[rgba(21,21,21,0.72)] hover:text-[rgba(21,21,21,0.96)]'
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
