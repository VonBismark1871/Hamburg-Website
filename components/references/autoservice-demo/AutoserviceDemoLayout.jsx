import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const R = '#E8321C';
const BG = '#080B10';
const PANEL = '#0D1421';
const TEXT = '#F0F4FA';
const MUTED = '#6B7D99';
const BARLOW = "'Barlow Condensed', sans-serif";
const GROTESK = "'Space Grotesk', sans-serif";

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
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <Head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css2?family=barlow-condensed:wght@700;800;900&family=space-grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ fontFamily: GROTESK, backgroundColor: BG, color: TEXT, overflowX: 'hidden' }}>
        <ReferenceStickyBackButton />

        {/* NAV — matches index.js exactly */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: 'blur(16px)', transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(8,11,16,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(232,50,28,0.18)' : '1px solid transparent',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/referenzen/autoservice-demo" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{
                width: 34, height: 34, background: R, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: BARLOW, fontWeight: 900, fontSize: 15, color: '#fff',
                clipPath: 'polygon(0 0,100% 0,100% 72%,86% 100%,0 100%)',
              }}>EW</div>
              <div>
                <div style={{ fontFamily: BARLOW, fontWeight: 800, fontSize: 17, color: TEXT, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.1 }}>Elbwerk</div>
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Kfz-Service</div>
              </div>
            </Link>

            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 4 }}>
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  color: isActive(href) ? TEXT : MUTED,
                  fontSize: 13,
                  fontWeight: isActive(href) ? 600 : 500,
                  padding: '8px 14px',
                  textDecoration: 'none',
                  backgroundColor: isActive(href) ? 'rgba(232,50,28,0.1)' : 'transparent',
                  border: isActive(href) ? '1px solid rgba(232,50,28,0.3)' : '1px solid transparent',
                  transition: 'color 0.2s, background-color 0.2s',
                }}
                  onMouseEnter={e => { if (!isActive(href)) e.currentTarget.style.color = TEXT; }}
                  onMouseLeave={e => { if (!isActive(href)) e.currentTarget.style.color = MUTED; }}
                >{label}</Link>
              ))}
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                background: R, color: '#fff', fontSize: 12, fontWeight: 700, padding: '10px 22px',
                textDecoration: 'none', marginLeft: 12, letterSpacing: '0.07em', textTransform: 'uppercase',
                clipPath: 'polygon(0 0,100% 0,100% 68%,93% 100%,0 100%)',
              }}>Termin anfragen</Link>
            </div>

            <button className="sm:hidden" onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: TEXT, fontSize: 22, padding: 4 }}
              aria-label="Menü">{menuOpen ? '✕' : '☰'}</button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                className="sm:hidden" style={{ background: PANEL, borderTop: '1px solid rgba(232,50,28,0.15)', overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navItems.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                      color: isActive(href) ? TEXT : MUTED, fontSize: 16, fontWeight: isActive(href) ? 700 : 600,
                      padding: '13px 0', textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>{label}</Link>
                  ))}
                  <Link href="/referenzen/autoservice-demo/kontakt" onClick={() => setMenuOpen(false)} style={{
                    background: R, color: '#fff', fontSize: 14, fontWeight: 700, padding: '14px', textAlign: 'center',
                    textDecoration: 'none', marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>Termin anfragen</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Spacer for fixed nav */}
        <div style={{ height: 66 }} />

        <main>{children}</main>

        {/* FOOTER — matches index.js */}
        <footer style={{ background: '#040609', borderTop: '1px solid rgba(232,50,28,0.1)', padding: '48px 24px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="grid sm:grid-cols-[1.5fr_1fr]" style={{ gap: 40, marginBottom: 36 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 30, height: 30, background: R, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: BARLOW, fontWeight: 900, fontSize: 13, color: '#fff', clipPath: 'polygon(0 0,100% 0,100% 68%,86% 100%,0 100%)' }}>EW</div>
                  <span style={{ fontFamily: BARLOW, fontWeight: 800, fontSize: 17, color: TEXT, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Elbwerk Kfz-Service</span>
                </div>
                <p style={{ color: 'rgba(107,125,153,0.55)', fontSize: 13, lineHeight: 1.9 }}>
                  Ausschläger Weg 62 · 20537 Hamburg<br />040 712 45 890 · service@elbwerk-kfz.de
                </p>
              </div>
              <div>
                <p style={{ color: R, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>Navigation</p>
                {[
                  { href: '/referenzen/autoservice-demo/leistungen', label: 'Alle Leistungen' },
                  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
                  { href: '/referenzen/autoservice-demo/kontakt', label: 'Termin anfragen' },
                ].map(({ href, label }) => (
                  <Link key={label} href={href} style={{ display: 'block', color: 'rgba(107,125,153,0.45)', fontSize: 13, textDecoration: 'none', marginBottom: 7 }}>{label}</Link>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <p style={{ color: 'rgba(42,53,72,0.7)', fontSize: 12 }}>© 2025 Elbwerk Kfz-Service · Hamburg</p>
              <p style={{ color: 'rgba(42,53,72,0.5)', fontSize: 12 }}>Demo-Website · Hamburg Websites</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
