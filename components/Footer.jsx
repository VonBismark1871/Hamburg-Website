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
    <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: 'rgba(150,144,168,0.4)' }}>{title}</p>
    <ul className="space-y-2.5">
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
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--line)',
        background: 'linear-gradient(180deg, #0c0a16 0%, var(--bg) 100%)'
      }}
      aria-label="Seitenfuß"
    >
      <div className="section-container py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <section aria-label="Hamburg Websites">
            <LogoLink className="inline-flex" compact />
            <p className="mt-5 max-w-xs text-sm leading-7" style={{ color: 'rgba(150,144,168,0.7)' }}>
              Moderne Websites für Unternehmen in Hamburg – klar strukturiert, hochwertig gestaltet und auf Anfragen ausgerichtet.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm" style={{ color: 'rgba(150,144,168,0.7)' }}>
              <li>
                <a
                  href="mailto:info@hamburgwebsites.de"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 opacity-60" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="2" y="5" width="16" height="12" rx="2" />
                    <path d="m2 7 8 5 8-5" />
                  </svg>
                  info@hamburgwebsites.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+4916096297897"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 opacity-60" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M6.5 3.5A11.5 11.5 0 0 1 16.5 13.5c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1.22a1.5 1.5 0 0 0-.95-1.4l-1.3-.5a1.5 1.5 0 0 0-1.72.5l-.18.24A9.5 9.5 0 0 1 4.4 7.7l.24-.18a1.5 1.5 0 0 0 .5-1.72l-.5-1.3A1.5 1.5 0 0 0 3.22 3.5H2A1.5 1.5 0 0 0 .5 5c0 .28.02.56.06.83" />
                  </svg>
                  +49 160 96297897
                </a>
              </li>
              <li style={{ color: 'rgba(150,144,168,0.4)' }}>Hamburg, Deutschland</li>
            </ul>
          </section>

          <FooterLinkColumn title="Navigation" links={navigationLinks} ariaLabel="Footer Navigation" />
          <FooterLinkColumn title="Rechtliches" links={legalLinks} ariaLabel="Footer Rechtliches" />
        </div>

        <div className="mt-12 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderTop: '1px solid rgba(168,142,247,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(150,144,168,0.3)' }}>© 2026 Hamburg Websites. Alle Rechte vorbehalten.</p>
          <p className="text-xs" style={{ color: 'rgba(150,144,168,0.22)' }}>
            Handgemacht in Hamburg.{' '}
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#7C3AED,#22D3EE)',
                boxShadow: '0 0 0 3px rgba(34,211,238,0.18)',
                verticalAlign: 'middle',
                marginLeft: 4
              }}
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
