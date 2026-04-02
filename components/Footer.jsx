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
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">{title}</p>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="footer-link text-sm">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]" aria-label="Seitenfuß">
      <div className="section-container py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <section aria-label="Hamburg Websites">
            <LogoLink className="inline-flex" compact />
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-[color:var(--text-secondary)]">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen
              ausgerichtet.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-light text-[color:var(--text-secondary)]">
              <li>
                <a href="mailto:info@hamburgwebsites.de" className="footer-link">
                  info@hamburgwebsites.de
                </a>
              </li>
              <li>Hamburg, Deutschland</li>
            </ul>
          </section>

          <FooterLinkColumn title="Navigation" links={navigationLinks} ariaLabel="Footer Navigation" />
          <FooterLinkColumn title="Rechtliches" links={legalLinks} ariaLabel="Footer Rechtliches" />
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-xs text-[color:var(--text-muted)]">
          <p>© 2026 Hamburg Websites. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
