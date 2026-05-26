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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,7,13,0.72)' : 'rgba(8,7,13,0.3)',
        borderBottom: `1px solid ${scrolled ? 'rgba(168,142,247,0.16)' : 'rgba(168,142,247,0.06)'}`,
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: scrolled ? '0 8px 40px -12px rgba(0,0,0,0.6)' : 'none'
      }}
    >
      <div className="section-container flex items-center justify-between gap-6 py-3.5">
        <LogoLink className="shrink-0" />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/#features' && pathname === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                style={{ color: isActive ? 'var(--cyan-2)' : 'rgba(201,196,218,0.62)' }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(201,196,218,0.62)'; }}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 16, right: 16, bottom: 4, height: 2,
                      borderRadius: 999,
                      background: 'linear-gradient(90deg, var(--violet-2), var(--cyan))'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden md:inline-flex primary-btn"
            style={{ minHeight: 42, padding: '11px 22px', fontSize: 14 }}
          >
            <span>Demo anfragen</span>
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            style={{ border: '1px solid var(--line-2)', background: 'rgba(124,58,237,0.1)', color: 'var(--text-soft)' }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: '1px solid var(--line)', background: 'rgba(8,7,13,0.97)', backdropFilter: 'blur(20px)' }}
          aria-label="Mobile Navigation"
        >
          <nav className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-medium transition"
                style={{ color: 'var(--text-soft)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--line)' }}>
              <Link
                href="/kontakt"
                className="primary-btn w-full"
                onClick={() => setMobileOpen(false)}
              >
                <span>Kostenlose Demo anfragen</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
