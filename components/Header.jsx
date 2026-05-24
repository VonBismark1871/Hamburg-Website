import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LogoLink } from './Logo';

const navItems = [
  { href: '/#features', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/ueber-uns', label: 'Über uns' }
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-200"
      style={{
        background: scrolled ? 'rgba(11,10,18,0.88)' : 'rgba(11,10,18,0.7)',
        borderBottom: '1px solid rgba(168,142,247,0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none'
      }}
    >
      <div className="section-container flex items-center justify-between gap-6 py-3.5">
        <LogoLink className="shrink-0" />

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/#features' && pathname === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-white bg-white/8'
                    : 'text-white/55 hover:bg-white/5 hover:text-white/90'
                }`}
                style={isActive ? { background: 'rgba(124,58,237,0.18)', color: '#A855F7' } : {}}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-white transition md:inline-flex"
            style={{
              background: 'linear-gradient(135deg,#7C3AED,#A855F7)',
              boxShadow: '0 4px 20px rgba(124,58,237,0.4)'
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.6)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = ''; }}
          >
            Kontakt
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 transition hover:text-white/90 md:hidden"
            style={{ border: '1px solid rgba(168,142,247,0.2)', background: 'rgba(124,58,237,0.08)' }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: '1px solid rgba(168,142,247,0.1)', background: 'rgba(11,10,18,0.96)', backdropFilter: 'blur(20px)' }}
          aria-label="Mobile Navigation"
        >
          <nav className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(168,142,247,0.1)' }}>
              <Link
                href="/kontakt"
                className="flex items-center justify-center rounded-full py-3 text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}
                onClick={() => setMobileOpen(false)}
              >
                Kostenlose Demo anfragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
