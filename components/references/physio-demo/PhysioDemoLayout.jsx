import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const navItems = [
  { href: '/referenzen/physio-demo', label: 'Start' },
  { href: '/referenzen/physio-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/physio-demo/rueckenschmerzen', label: 'Rückenschmerzen' },
  { href: '/referenzen/physio-demo/kontakt', label: 'Kontakt' },
];

export default function PhysioDemoLayout({ title, description, path, children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === '/referenzen/physio-demo') {
      return router.pathname === '/referenzen/physio-demo';
    }
    return router.pathname === href || router.pathname.startsWith(href);
  };

  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
          backgroundColor: '#081510',
          color: '#EEF6F2',
          minHeight: '100vh',
        }}
      >
        <ReferenceStickyBackButton />

        {/* Fixed nav */}
        <nav
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: scrolled ? 'rgba(8,21,16,0.97)' : '#0C2318',
            borderBottom: scrolled
              ? '1px solid rgba(50,184,119,0.18)'
              : '1px solid transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 68,
            }}
          >
            {/* Logo */}
            <Link
              href="/referenzen/physio-demo"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  backgroundColor: '#32B877',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: '-0.015em',
                }}
              >
                Elbbalance
              </span>
              <span
                style={{
                  color: '#6DD4A4',
                  fontWeight: 400,
                  fontSize: 14,
                  marginLeft: 2,
                }}
              >
                Physiotherapie
              </span>
            </Link>

            {/* Desktop nav */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
              className="hidden sm:flex"
            >
              {navItems.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      color: active ? '#32B877' : 'rgba(255,255,255,0.72)',
                      fontSize: 13,
                      fontWeight: active ? 700 : 500,
                      padding: '7px 14px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      backgroundColor: active ? 'rgba(50,184,119,0.12)' : 'transparent',
                      border: active
                        ? '1px solid rgba(50,184,119,0.3)'
                        : '1px solid transparent',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/referenzen/physio-demo/kontakt"
                style={{
                  backgroundColor: '#E87A38',
                  color: '#FFFFFF',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: '8px 18px',
                  borderRadius: 22,
                  textDecoration: 'none',
                  marginLeft: 10,
                }}
              >
                Termin anfragen
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: 22,
                lineHeight: 1,
                padding: 4,
              }}
              aria-label="Menü öffnen"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="sm:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  backgroundColor: 'rgba(8,21,16,0.98)',
                  borderTop: '1px solid rgba(50,184,119,0.15)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '16px 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  {navItems.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        color: isActive(href) ? '#32B877' : 'rgba(255,255,255,0.8)',
                        fontSize: 16,
                        fontWeight: 600,
                        padding: '13px 0',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(50,184,119,0.1)',
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/referenzen/physio-demo/kontakt"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      backgroundColor: '#E87A38',
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontWeight: 700,
                      padding: '13px 20px',
                      borderRadius: 30,
                      textDecoration: 'none',
                      textAlign: 'center',
                      marginTop: 14,
                    }}
                  >
                    Termin anfragen
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Spacer for fixed nav */}
        <div style={{ height: 68 }} />

        <main>{children}</main>
      </div>
    </>
  );
}
