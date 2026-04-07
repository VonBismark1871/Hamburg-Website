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

const localFocusItems = ['Dienstleister', 'Praxen', 'Gastronomie', 'Handwerk', 'B2B-Unternehmen'];

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

        <section className="section-spacing-sm" aria-labelledby="hamburg-focus-heading">
          <div className="section-container">
            <div className="section-intro max-w-[720px]">
              <p className="section-label">Regionaler Fokus</p>
              <h2 id="hamburg-focus-heading" className="display-title page-h2">Für Unternehmen in Hamburg</h2>
              <p className="mt-5 text-[18px] text-[var(--text-secondary)]">Wir gestalten Websites für lokale Unternehmen, die professionell auftreten und gleichzeitig klar auf Anfragen und Vertrauen einzahlen sollen.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {localFocusItems.map((item) => (
                <span key={item} className="inline-flex h-8 items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 text-[13px] font-medium text-[var(--text-muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Features />
        <Portfolio />

        <section className="section-spacing" aria-labelledby="process-heading">
          <div className="section-container">
            <div className="card p-8 md:p-10">
              <div className="section-intro max-w-[760px]">
                <p className="section-label">Ablauf</p>
                <h2 id="process-heading" className="display-title page-h2">So läuft die Zusammenarbeit ab</h2>
              </div>
              <ol className="mt-10 grid gap-5 md:grid-cols-4">
                {steps.map((step, i) => (
                  <motion.li key={step.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} className="card-soft relative border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
                    <span className="mb-4 inline-flex h-8 items-center rounded-full border border-[rgba(45,91,255,0.2)] bg-[rgba(45,91,255,0.08)] px-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent-blue)]">Schritt {i + 1}</span>
                    <h3 className="text-[20px] font-semibold text-[var(--text-primary)]">{step.title}</h3>
                    <p className="mt-2 text-[16px] leading-[1.6] text-[var(--text-secondary)]">{step.text}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />

        <section className="section-spacing" aria-labelledby="final-cta-heading">
          <div className="section-container">
            <div className="dark-section overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] px-10 pb-11 pt-10">
              <h2 id="final-cta-heading" className="display-title text-[clamp(2.2rem,4.7vw,3rem)] leading-[1.05] text-[var(--text-on-dark)]">Bereit für Ihre neue Website?</h2>
              <p className="mt-5 max-w-[620px] text-[20px] leading-[1.55] text-[var(--text-on-dark-secondary)]">Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/kontakt" className="primary-btn primary-btn--light h-14 px-7">Projekt anfragen</Link>
                <Link href="/preise" className="secondary-btn secondary-btn--dark h-14 px-7">Preise ansehen</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
