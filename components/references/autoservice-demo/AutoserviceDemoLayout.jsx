import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const navItems = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt' },
];

export default function AutoserviceDemoLayout({ title, description, path, children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: '#0D1117', color: '#EEF3FA' }}>
        <ReferenceStickyBackButton />

        {/* Fixed nav */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(13,17,23,0.97)' : '#161D2A',
          borderBottom: scrolled
            ? '1px solid rgba(232,50,28,0.2)'
            : '1px solid rgba(255,255,255,0.07)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}>
          <div style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}>
            {/* Logo */}
            <Link href="/referenzen/autoservice-demo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 28,
                height: 28,
                backgroundColor: '#E8321C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 700,
                color: '#FFFFFF',
                flexShrink: 0,
              }}>
                E
              </div>
              <div>
                <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk</span>
                <span style={{ color: '#7A8EA8', fontWeight: 400, fontSize: 13, marginLeft: 6 }}>Kfz-Service</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden sm:flex">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  color: isActive(href) ? '#EEF3FA' : '#B0BECF',
                  fontSize: 13,
                  fontWeight: isActive(href) ? 600 : 500,
                  padding: '7px 14px',
                  textDecoration: 'none',
                  backgroundColor: isActive(href) ? 'rgba(232,50,28,0.12)' : 'transparent',
                  border: isActive(href) ? '1px solid rgba(232,50,28,0.35)' : '1px solid transparent',
                  transition: 'all 0.18s ease',
                }}>
                  {label}
                </Link>
              ))}
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                backgroundColor: '#E8321C',
                color: '#FFFFFF',
                fontSize: 13,
                fontWeight: 700,
                padding: '9px 20px',
                textDecoration: 'none',
                marginLeft: 8,
                letterSpacing: '0.01em',
                flexShrink: 0,
              }}>
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
                color: '#EEF3FA',
                fontSize: 22,
                lineHeight: 1,
                padding: 4,
              }}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile menu overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="sm:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  backgroundColor: '#161D2A',
                  borderTop: '1px solid rgba(232,50,28,0.15)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navItems.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        color: isActive(href) ? '#EEF3FA' : '#B0BECF',
                        fontSize: 16,
                        fontWeight: isActive(href) ? 700 : 600,
                        padding: '13px 0',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        backgroundColor: isActive(href) ? 'rgba(232,50,28,0.08)' : 'transparent',
                        paddingLeft: isActive(href) ? 10 : 0,
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/referenzen/autoservice-demo/kontakt"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      backgroundColor: '#E8321C',
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontWeight: 700,
                      padding: '13px 20px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      marginTop: 14,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Termin anfragen
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Spacer so content isn't hidden under fixed nav */}
        <div style={{ height: 64 }} />

        <main>{children}</main>
      </div>
    </>
  );
}
