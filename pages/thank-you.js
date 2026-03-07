import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function ThankYouPage() {
  return (
    <>
      <SEOHead title="Danke für deine Anfrage" path="/thank-you" description="Bestätigung der gesendeten Kontaktanfrage." />
      <Header />
      <main className="section-container section-spacing">
        <div className="mx-auto max-w-2xl rounded-2xl bg-slate-50 p-8 text-center shadow-soft">
          <h1 className="text-3xl font-bold">Danke für deine Anfrage.</h1>
          <p className="mt-4 text-slate-700">
            Deine Nachricht ist eingegangen. Ich melde mich zeitnah mit den nächsten Schritten für deine Website.
          </p>
          <Link href="/" className="mt-6 inline-block font-medium text-accent underline-offset-4 hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
