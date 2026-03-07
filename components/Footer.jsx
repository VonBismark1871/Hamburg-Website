import Link from 'next/link';

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutzerklärung' },
  { href: '/agb', label: 'AGB' }
];

const pageLinks = [
  { href: '/kontakt', label: 'Kontaktaufnahme' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#features', label: 'Webdesign Leistungen' },
  { href: '/preise', label: 'Preise' },
  { href: '/ueber-uns', label: 'Über uns' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="section-container grid gap-8 text-sm text-slate-600 sm:grid-cols-2">
        <div>
          <p className="font-medium text-slate-700">Hamburg Websites</p>
          <p className="mt-2 max-w-md">
            Moderne Unternehmenswebseiten mit klarem Fokus auf mobile Nutzbarkeit, SEO und Conversion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <nav aria-label="Wichtige Seiten" className="space-y-2">
            <p className="font-medium text-slate-700">Wichtige Seiten</p>
            {pageLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <nav aria-label="Rechtliche Seiten" className="space-y-2">
            <p className="font-medium text-slate-700">Rechtliches</p>
            {legalLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
