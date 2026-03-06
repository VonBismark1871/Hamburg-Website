import Head from 'next/head';
import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum</title>
      </Head>
      <main className="section-container section-spacing">
        <h1 className="text-4xl font-bold">Impressum</h1>
        <p className="mt-6 text-slate-600">Hier steht ein Platzhaltertext für rechtliche Anbieterkennzeichnungen.</p>
        <Link href="/" className="mt-6 inline-block text-accent">
          Zurück zur Startseite
        </Link>
      </main>
    </>
  );
}
