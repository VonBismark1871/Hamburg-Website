import Link from 'next/link';
import SEOHead from '../../SEOHead';
import ReferenceBackButton from '../ReferenceBackButton';
import Header from '../../Header';

const navItems = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt & Termin' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' }
];

export default function AutoserviceDemoLayout({ title, description, path, children }) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} noIndex />
      <div className="min-h-screen bg-[#f3f5f7] text-[#1a2028]">
        <Header />
        <div className="section-container pt-8">
          <ReferenceBackButton href="/referenzen" label="Zurück zu den Referenzen" />
        </div>

        <header className="border-y border-[#c5ccd6] bg-[#111926] text-[#e9eef6]">
          <div className="section-container flex flex-wrap items-center justify-between gap-4 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#95a3b8]">Kfz-Service in Hamburg</p>
              <p className="mt-1 text-xl font-semibold">Elbwerk Kfz-Service</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-[#2c3a4d] px-3 py-2 transition hover:border-[#b8453c] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}
