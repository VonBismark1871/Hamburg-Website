import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="section-container flex flex-col items-start justify-between gap-6 text-sm text-slate-600 sm:flex-row sm:items-center">
        <p>Unabhängiger Webentwickler mit Sitz in Hamburg.</p>
        <nav className="flex gap-6">
          <Link href="/impressum" className="transition hover:text-accent">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-accent">
            Datenschutzerklärung
          </Link>
          <Link href="/agb" className="transition hover:text-accent">
            AGB
          </Link>
        </nav>
      </div>
    </footer>
  );
}
