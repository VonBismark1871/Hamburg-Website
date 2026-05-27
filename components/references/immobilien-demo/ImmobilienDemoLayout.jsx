import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const navLinks = [
  { href: '/referenzen/immobilien-demo', label: 'Start' },
  { href: '/referenzen/immobilien-demo/objekte', label: 'Objekte' },
  { href: '/referenzen/immobilien-demo/kontakt', label: 'Kontakt' },
];

export default function ImmobilienDemoLayout({ title, description, path, children }) {
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

  function isActive(href) {
    if (href === '/referenzen/immobilien-demo') {
      return router.pathname === '/referenzen/immobilien-demo';
    }
    return router.pathname.startsWith(href);
  }

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path={path}
        noIndex
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ backgroundColor: '#F5F1EA', color: '#0F0D0A', minHeight: '100vh' }}>

        {/* ── FIXED NAV ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(245,241,234,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(184,154,114,0.2)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto', padding: '0 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72,
          }}>
            {/* Logo */}
            <Link href="/referenzen/immobilien-demo" style={{ textDecoration: 'none' }}>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 19, fontWeight: 400, letterSpacing: '0.02em',
                  color: '#0F0D0A',
                  transition: 'color 0.4s',
                }}>
                  Elbquartier
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 400, letterSpacing: '0.05em',
                  color: '#7B6D60',
                }}>
                  Immobilien
                </span>
                <span style={{
                  display: 'inline-block', width: 5, height: 5,
                  backgroundColor: '#B89A72', borderRadius: '50%',
                  marginLeft: 2, marginBottom: 3,
                }} />
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 32 }}>
              {navLinks.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <Link key={href} href={href} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: active ? '#B89A72' : '#7B6D60',
                    fontSize: 13, fontWeight: active ? 500 : 400, textDecoration: 'none',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    borderBottom: active ? '1px solid #B89A72' : '1px solid transparent',
                    paddingBottom: 2,
                    transition: 'color 0.3s, border-color 0.3s',
                  }}>
                    {label}
                  </Link>
                );
              })}
              <Link href="/referenzen/immobilien-demo/kontakt" style={{
                fontFamily: "'DM Sans', sans-serif",
                backgroundColor: '#0F0D0A',
                border: '1px solid #0F0D0A',
                color: '#F5F1EA',
                fontSize: 12, fontWeight: 600, padding: '9px 22px',
                textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}>
                Kontakt aufnehmen
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                backgroundColor: 'transparent', border: 'none', cursor: 'pointer',
                color: '#0F0D0A', fontSize: 22, lineHeight: 1, padding: 4,
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
                  backgroundColor: '#FAF8F4',
                  borderTop: '1px solid rgba(184,154,114,0.2)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '16px 32px 28px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#0F0D0A', fontSize: 16, fontWeight: 500,
                      padding: '13px 0', textDecoration: 'none',
                      borderBottom: '1px solid rgba(184,154,114,0.15)',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>
                      {label}
                    </Link>
                  ))}
                  <Link href="/referenzen/immobilien-demo/kontakt" onClick={() => setMenuOpen(false)} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: '#0F0D0A', color: '#F5F1EA',
                    fontSize: 13, fontWeight: 700, padding: '13px 20px',
                    textDecoration: 'none', textAlign: 'center', marginTop: 16,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    Kontakt aufnehmen
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Spacer so content isn't hidden under fixed nav */}
        <div style={{ height: 72 }} />

        {children}
      </div>
    </>
  );
}
