import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AuroraBackground from '../components/ui/AuroraBackground';

export default function ThankYouPage() {
  return (
    <>
      <SEOHead title="Danke für deine Anfrage" path="/thank-you" description="Bestätigung der gesendeten Kontaktanfrage." noIndex />
      <Header />
      <main className="band-violet">
        <AuroraBackground grid grain={false} />
        <div className="section-container relative z-[2] section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="cta-card mx-auto max-w-2xl p-8 text-center sm:p-12"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: 'var(--grad-violet)', boxShadow: '0 0 50px rgba(124,58,237,0.5)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="font-display text-3xl font-bold"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Danke für deine Anfrage.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
              className="mx-auto mt-4 max-w-md text-base leading-7"
              style={{ color: 'var(--muted)' }}
            >
              Deine Nachricht ist eingegangen. Ich melde mich zeitnah – in der Regel innerhalb von 24 Stunden – mit den
              nächsten Schritten für deine Website.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link href="/" className="primary-btn"><span>Zurück zur Startseite</span></Link>
              <Link href="/referenzen" className="secondary-btn">Referenzen ansehen</Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
