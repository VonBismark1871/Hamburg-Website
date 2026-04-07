import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' }
];

const ctaItem = { href: '/kontakt', label: 'Kontakt' };

export default function Header() {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-[var(--border-subtle)] bg-[rgba(10,15,30,0.8)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between py-4">
        <LogoLink className="shrink-0" />
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm text-[var(--text-secondary)] transition after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent-purple-light)] after:transition-all hover:text-[var(--text-primary)] hover:after:w-full ${
                  pathname === item.href ? 'text-[var(--text-primary)]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={ctaItem.href} className="primary-btn">
            {ctaItem.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
