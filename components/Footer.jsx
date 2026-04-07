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

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]" aria-label="Seitenfuß">
      <div className="section-container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">Hamburg Websites</h2>
            <LogoLink compact className="inline-flex" />
            <p className="text-sm text-[color:color-mix(in_srgb,var(--text-primary)_80%,white)]">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen ausgerichtet.
            </p>
          </div>
          <nav className="space-y-4" aria-label="Footer Navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">Navigation</h2>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}><Link className="footer-link" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">Kontakt</h2>
            <ul className="space-y-2.5 text-sm text-[color:color-mix(in_srgb,var(--text-primary)_78%,white)]">
              <li><a className="footer-link" href="mailto:info@hamburgwebsites.de">info@hamburgwebsites.de</a></li>
              <li>Hamburg, Deutschland</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
