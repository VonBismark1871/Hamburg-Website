import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const steps = [
  { title: 'Anfrage', text: 'Kurze Infos zu Ihrem Unternehmen und Ihrem Ziel.' },
  { title: 'Demo', text: 'Sie erhalten eine kostenlose Vorschau als erste Richtung.' },
  { title: 'Abstimmung', text: 'Wir schärfen Inhalte, Struktur und Design gemeinsam.' },
  { title: 'Livegang', text: 'Nach Freigabe veröffentlichen wir Ihre Website.' }
];

export default function HomePage() {
  return (
    <>
      <SEOHead title="Hamburg Websites" description="Hamburg Websites – Moderne Webseiten für Hamburger Unternehmen mit klarer Struktur, lokaler SEO-Basis und überzeugender Nutzerführung." path="/" />
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />

        <section className="section-spacing" aria-labelledby="process-heading">
          <div className="section-container">
            <p className="section-label">Ablauf</p>
            <h2 id="process-heading" className="text-3xl">So läuft die Zusammenarbeit ab</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-4">
              {steps.map((step, i) => (
                <motion.li key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }} className="card group relative p-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-purple)] text-[var(--text-primary)] transition group-hover:scale-110">{i + 1}</span>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{step.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <Pricing />
        <FAQ />

        <section className="section-container section-spacing pt-2" aria-labelledby="final-cta-heading">
          <div className="section-dark rounded-2xl border border-slate-800 p-8 text-white sm:p-10">
            <span className="glow-blob glow-blob--purple" aria-hidden="true" />
            <span className="glow-blob glow-blob--teal" aria-hidden="true" />
            <h2 id="final-cta-heading" className="text-3xl text-white">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="secondary-btn text-white"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
