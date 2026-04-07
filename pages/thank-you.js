import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function ThankYouPage() {
  return (
    <>
      <SEOHead title="Danke für deine Anfrage" path="/thank-you" description="Bestätigung der gesendeten Kontaktanfrage." />
      <Header />
      <main className="section-spacing"><div className="section-container"><div className="card mx-auto max-w-2xl p-8 text-center"><h1 className="text-3xl">Danke für deine Anfrage.</h1><p className="mt-4">Deine Nachricht ist eingegangen. Ich melde mich zeitnah mit den nächsten Schritten für deine Website.</p><Link href="/" className="secondary-btn mt-6 inline-flex">Zurück zur Startseite</Link></div></div></main>
      <Footer />
    </>
  );
}
