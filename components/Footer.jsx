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
    <footer className="mt-16 border-t border-[rgba(255,255,255,0.08)] bg-[var(--bg-dark)] text-white" aria-label="Seitenfuß">
      <div className="section-container pt-[72px]">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-5">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.72)]">Hamburg Websites</h2>
            <LogoLink compact className="inline-flex" />
            <p className="max-w-[40ch] text-[16px] leading-[1.7] text-[rgba(255,255,255,0.72)]">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen ausgerichtet.
            </p>
          </div>
          <nav className="space-y-5" aria-label="Footer Navigation">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.8)]">Navigation</h2>
            <ul className="space-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.href}><Link className="footer-link text-[16px]" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="space-y-5">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.8)]">Kontakt</h2>
            <ul className="space-y-3.5 text-[16px] text-[rgba(255,255,255,0.72)]">
              <li><a className="footer-link" href="mailto:info@hamburgwebsites.de">info@hamburgwebsites.de</a></li>
              <li>Hamburg, Deutschland</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[rgba(255,255,255,0.1)] py-6 text-[14px] text-[rgba(255,255,255,0.54)]">
          © {new Date().getFullYear()} Hamburg Websites. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
