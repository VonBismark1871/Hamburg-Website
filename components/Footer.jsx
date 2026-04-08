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
  <nav aria-label={ariaLabel} className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/78">{title}</p>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="footer-link text-base">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131313]" aria-label="Seitenfuß">
      <div className="section-container pb-10 pt-[72px] sm:pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
          <section aria-label="Hamburg Websites" className="max-w-sm">
            <LogoLink className="inline-flex" compact />
            <p className="mt-5 text-base leading-relaxed text-white/62">
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen
              ausgerichtet.
            </p>
            <ul className="mt-6 space-y-2.5 text-base text-white/62">
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

        <div className="mt-12 border-t border-white/12 pt-6 text-sm text-white/42">
          <p>© 2026 Hamburg Websites. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
