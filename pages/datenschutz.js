import Head from 'next/head';
import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung</title>
      </Head>
      <main className="section-container section-spacing">
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
        <p className="mt-6 text-slate-600">Hier steht ein Platzhaltertext zur Verarbeitung personenbezogener Daten.</p>
        <Link href="/" className="mt-6 inline-block text-accent">
          Zurück zur Startseite
        </Link>
      </main>
    </>
  );
}
