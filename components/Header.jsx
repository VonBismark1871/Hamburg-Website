import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-base)] ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="section-container flex items-center justify-between gap-6 py-3">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                item.label === 'Kontaktaufnahme'
                  ? 'primary-btn text-[13px]'
                  : `nav-link text-sm ${pathname === item.href ? 'font-medium text-[color:var(--text-primary)]' : 'font-normal text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'}`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-base)] md:hidden">
        <div className="section-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? 'font-medium text-[color:var(--text-primary)]'
                  : 'font-normal text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
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
