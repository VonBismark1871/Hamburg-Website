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
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <LogoLink compact className="inline-flex" />
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen ausgerichtet.
            </p>
          </div>
          <nav>
            <p className="text-sm text-[var(--text-primary)]">Navigation</p>
            <ul className="mt-3 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}><Link className="footer-link" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm text-[var(--text-primary)]">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
              <li><a className="footer-link" href="mailto:info@hamburgwebsites.de">info@hamburgwebsites.de</a></li>
              <li>Hamburg, Deutschland</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
