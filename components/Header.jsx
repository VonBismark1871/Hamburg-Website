import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' }
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-[var(--border-soft)] bg-[rgba(245,243,238,0.94)] backdrop-blur-sm">
      <div className="section-container flex h-full items-center justify-between">
        <LogoLink className="shrink-0" />
        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-7" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium tracking-[0.01em] transition-colors duration-200 ${
                  pathname === item.href ? 'text-[rgba(21,21,21,0.96)]' : 'text-[rgba(21,21,21,0.72)] hover:text-[rgba(21,21,21,0.96)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/kontakt" className="inline-flex h-[42px] items-center rounded-full border border-[rgba(21,21,21,0.10)] bg-[rgba(255,255,255,0.78)] px-5 text-[15px] font-semibold text-[rgba(21,21,21,0.88)] transition duration-200 hover:-translate-y-px hover:border-[rgba(21,21,21,0.2)] hover:text-[rgba(21,21,21,0.98)]">
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}
