import Link from 'next/link';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const navItems = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt & Termin' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
];

export default function AutoserviceDemoLayout({ title, description, path, children }) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div
        style={{ fontFamily: "'Space Grotesk', 'DM Sans', sans-serif", backgroundColor: '#0D1117', color: '#EEF3FA' }}
      >
        <ReferenceStickyBackButton />

        <header style={{ backgroundColor: '#161D2A', borderBottom: '1px solid rgba(232,50,28,0.15)' }}>
          <div className="section-container py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 26, height: 26, backgroundColor: '#E8321C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>
                  E
                </div>
                <span style={{ color: '#EEF3FA', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Elbwerk</span>
                <span style={{ color: '#7A8EA8', fontSize: 13, marginLeft: 2 }}>Kfz-Service</span>
              </div>
              <nav className="flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: '#B0BECF', fontSize: 12, fontWeight: 500,
                      padding: '7px 14px', textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/referenzen/autoservice-demo/kontakt"
                  style={{
                    backgroundColor: '#E8321C', color: '#FFFFFF',
                    fontSize: 12, fontWeight: 700, padding: '8px 18px',
                    textDecoration: 'none', letterSpacing: '0.03em',
                  }}
                >
                  Termin anfragen
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}
