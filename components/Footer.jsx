import Link from 'next/link';
import { LogoLink } from './Logo';

const navigationLinks = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' }
];

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutzerklärung' },
  { href: '/agb', label: 'AGB' }
];

const FooterLinkColumn = ({ title, links, ariaLabel }) => (
  <nav aria-label={ariaLabel} className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{title}</p>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-sm text-slate-600 transition hover:text-accent">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60" aria-label="Seitenfuß">
      <div className="section-container py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <section aria-label="Hamburg Websites">
            <LogoLink className="inline-flex" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen
              ausgerichtet.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:info@hamburgwebsites.de" className="transition hover:text-accent">
                  info@hamburgwebsites.de
                </a>
              </li>
              <li>Hamburg, Deutschland</li>
            </ul>
          </section>

          <FooterLinkColumn title="Navigation" links={navigationLinks} ariaLabel="Footer Navigation" />
          <FooterLinkColumn title="Rechtliches" links={legalLinks} ariaLabel="Footer Rechtliches" />
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500">
          <p>© 2026 Hamburg Websites. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
