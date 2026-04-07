import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const previews = [
  { key: 'restaurant', title: 'Restaurant', image: '/demo-images/restaurant.svg' },
  { key: 'barbershop', title: 'Barbershop', image: '/demo-images/barbershop.svg' },
  { key: 'autoservice', title: 'Auto Service', image: '/demo-images/local-service.svg' }
];

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.15 }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 dark-section" aria-labelledby="hero-heading">
      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:justify-between">
        <motion.div {...reveal} className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text-on-dark-muted)]">
            <span className="trust-dot" /> Hamburger Webstudio
          </div>
          <h1 id="hero-heading" className="display-title page-h1 max-w-[620px] text-[var(--text-on-dark)]">
            Websites für Hamburger Unternehmen mit klarer Struktur und messbarer Wirkung
          </h1>
          <p className="max-w-[560px] text-[20px] leading-[1.55] text-[var(--text-on-dark-secondary)]">
            Wir verbinden klare Nutzerführung, schnelle Technik und verständliche Inhalte, damit jede Seite eine konkrete Aufgabe im Vertriebsprozess erfüllt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn primary-btn--light h-14 px-7">Projekt anfragen</Link>
            <Link href="/referenzen" className="secondary-btn secondary-btn--dark h-14 px-7">Referenzen ansehen</Link>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-[var(--text-on-dark-muted)]">
            {['Klarer Projektablauf', 'SEO-Basis inklusive', 'Mobile First umgesetzt'].map((item) => (
              <li key={item} className="inline-flex items-center gap-2.5"><span className="trust-dot" />{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal} className="relative lg:justify-self-end">
          <div className="overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.02)]">
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.12)] px-5 py-3 text-xs tracking-[0.08em] text-[rgba(255,255,255,0.6)]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.3)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.2)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.16)]" />
              </div>
              DEMO-VORSCHAU
            </div>
            <div className="carousel-track flex w-[200%]" style={{ animation: 'slide 24s ease-in-out infinite' }}>
              {[...previews, ...previews].map((p, idx) => (
                <div key={`${p.key}-${idx}`} className="relative h-[340px] w-full border-r border-[rgba(255,255,255,0.08)] bg-[#0f0f0f]">
                  <Image src={p.image} alt={p.title} fill className="object-cover opacity-[0.96]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -left-6 top-6 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(17,17,17,0.7)] px-4 py-2 text-xs tracking-[0.08em] text-[rgba(255,255,255,0.84)]">
            PageSpeed 98/100
          </div>
        </motion.div>
      </div>
      <style jsx>{`@keyframes slide{0%,14%{transform:translateX(0)}86%,100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
