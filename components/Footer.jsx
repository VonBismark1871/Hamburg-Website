import Link from 'next/link';

const navigationLinks = [
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' }
];

const serviceLinks = [
  { href: '/preise#website-visitenkarte', label: 'Website-Visitenkarte' },
  { href: '/preise#onepager', label: 'Onepager' },
  { href: '/preise#mehrseitige-website', label: 'Mehrseitige Website' },
  { href: '/preise#website-mit-adminbereich', label: 'Website mit Adminbereich' },
  { href: '/preise#websitepflege-hosting', label: 'Websitepflege & Hosting' }
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
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-labelledby="footer-cta-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Kostenlose Erstberatung</p>
          <h2 id="footer-cta-heading" className="mt-3 text-2xl font-bold text-slateBlue sm:text-3xl">
            Bereit für Ihre neue Website?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Fordern Sie eine kostenlose Demo-Vorschau für Ihr Unternehmen an.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/kontakt"
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Projekt anfragen
            </Link>
            <Link
              href="/preise"
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
            >
              Preise ansehen
            </Link>
          </div>
        </section>

        <div className="mt-10 grid gap-10 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <section aria-labelledby="footer-brand-heading">
            <h2 id="footer-brand-heading" className="text-lg font-semibold text-slateBlue">
              Hamburg Websites
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Moderne Websites für Unternehmen in Hamburg – mit klarer Struktur, direkter Abstimmung und einem
              nachvollziehbaren Projektablauf.
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
          <FooterLinkColumn title="Leistungen" links={serviceLinks} ariaLabel="Footer Leistungen" />
          <FooterLinkColumn title="Rechtliches" links={legalLinks} ariaLabel="Footer Rechtliches" />
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500">
          <p>© 2026 Hamburg Websites. Alle Rechte vorbehalten.</p>
          <p className="mt-1">Hamburg, Deutschland</p>
        </div>
      </div>
    </footer>
  );
}
