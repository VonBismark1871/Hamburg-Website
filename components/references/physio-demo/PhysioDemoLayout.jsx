import Link from 'next/link';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';

const navItems = [
  { href: '/referenzen/physio-demo', label: 'Startseite' },
  { href: '/referenzen/physio-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/physio-demo/kontakt', label: 'Kontakt & Termin' },
  { href: '/referenzen/physio-demo/rueckenschmerzen', label: 'Rückenschmerzen' },
];

export default function PhysioDemoLayout({ title, description, path, children }) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div
        style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
        className="min-h-screen bg-[#F4FAF6] text-[#0A1B11]"
      >
        <ReferenceStickyBackButton />

        <header style={{ backgroundColor: '#0C2318', borderBottom: '1px solid rgba(50,184,119,0.15)' }}>
          <div className="section-container py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#32B877' }} />
                <div>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 17, letterSpacing: '-0.015em' }}>Elbbalance</span>
                  <span style={{ color: '#6DD4A4', fontWeight: 400, fontSize: 14, marginLeft: 6 }}>Physiotherapie</span>
                </div>
              </div>
              <nav className="flex flex-wrap gap-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500,
                      padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
                      border: '1px solid rgba(50,184,119,0.2)',
                      backgroundColor: 'rgba(50,184,119,0.06)',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/referenzen/physio-demo/kontakt"
                  style={{
                    backgroundColor: '#E87A38', color: '#FFFFFF',
                    fontSize: 13, fontWeight: 700, padding: '8px 18px',
                    borderRadius: 22, textDecoration: 'none',
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
