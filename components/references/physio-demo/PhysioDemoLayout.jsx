import Link from 'next/link';
import SEOHead from '../../SEOHead';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';
import Header from '../../Header';

const navItems = [
  { href: '/referenzen/physio-demo', label: 'Startseite' },
  { href: '/referenzen/physio-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/physio-demo/kontakt', label: 'Kontakt & Termin' },
  { href: '/referenzen/physio-demo/rueckenschmerzen', label: 'Rückenschmerzen' }
];

export default function PhysioDemoLayout({ title, description, path, children }) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div className="min-h-screen bg-[#f3f7f5] text-[#1f3231]">
        <Header />
        <ReferenceStickyBackButton />

        <header className="border-b border-[#d8e4df] bg-[#f7fbf9]/95 backdrop-blur">
          <div className="section-container py-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#5f7774]">Physiotherapie in Hamburg</p>
                <p className="mt-1 text-2xl font-semibold text-[#284a46]">Praxis Elbbalance Physiotherapie</p>
              </div>
              <nav className="flex flex-wrap gap-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[#c4d8d3] bg-white/80 px-4 py-2 font-medium text-[#355955] transition hover:border-[#8fb0ab] hover:bg-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}
