import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';

const linkClassName =
  'text-[color:var(--accent-purple-light)] underline-offset-4 transition-colors hover:text-[color:var(--text-primary)] hover:underline';

export default function LegalLayout({
  headingId,
  title,
  intro,
  lead,
  headerAddon,
  children,
  navLinks = [],
  navLabel = 'Weiterführende Links',
}) {
  return (
    <>
      <Header />
      <main className="section-container section-spacing" aria-labelledby={headingId}>
        <div className="mx-auto max-w-3xl">
          <header className="border-b border-[color:var(--border-subtle)] pb-8">
            <h1 id={headingId} className="text-4xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-5xl">
              {title}
            </h1>
            {intro ? <p className="mt-6 text-base leading-8 text-[color:var(--text-secondary)]">{intro}</p> : null}
            {lead ? <p className="mt-3 text-base font-medium leading-8 text-[color:var(--text-primary)]">{lead}</p> : null}
            {headerAddon ? <div className="mt-8">{headerAddon}</div> : null}
          </header>

          <article className="mt-10 space-y-10 text-base leading-8 text-[color:var(--text-secondary)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[color:var(--text-primary)] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-[color:var(--accent-purple-light)] [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-[color:var(--text-primary)] [&_a:hover]:underline">
            {children}
          </article>

          {navLinks.length > 0 ? (
            <nav
              className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[color:var(--border-subtle)] pt-8"
              aria-label={navLabel}
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
