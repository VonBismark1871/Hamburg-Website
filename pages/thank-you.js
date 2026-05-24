import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function ThankYouPage() {
  return (
    <>
      <SEOHead title="Danke für deine Anfrage" path="/thank-you" description="Bestätigung der gesendeten Kontaktanfrage." />
      <Header />
      <main className="section-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12"
          style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.15)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="text-3xl font-black"
            style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}
          >
            Danke für deine Anfrage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="mt-4 text-base leading-7"
            style={{ color: '#9690A8' }}
          >
            Deine Nachricht ist eingegangen. Ich melde mich zeitnah mit den nächsten Schritten für deine Website.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="mt-8"
          >
            <Link href="/" className="primary-btn">
              Zurück zur Startseite
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
