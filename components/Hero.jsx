import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const previews = [
  { key: 'restaurant', title: 'Restaurant', image: '/demo-images/restaurant.svg' },
  { key: 'barbershop', title: 'Barbershop', image: '/demo-images/barbershop.svg' },
  { key: 'autoservice', title: 'Auto Service', image: '/demo-images/local-service.svg' }
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 }
};

export default function Hero() {
  return (
    <section className="section-spacing relative overflow-hidden" aria-labelledby="hero-heading">
      <span className="glow-blob -left-40 -top-40" aria-hidden="true" />
      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-2">
        <motion.div {...reveal} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-glow-purple)] px-4 py-1.5 text-sm text-[var(--text-primary)]">
            <span className="pulse-dot" /> Hamburger Webstudio
          </div>
          <h1 id="hero-heading" className="text-4xl sm:text-5xl">
            Websites für Hamburger Unternehmen mit <span className="gradient-text">klarer Struktur</span> und messbarer Wirkung
          </h1>
          <p className="max-w-xl text-lg text-[var(--text-secondary)]">Wir verbinden klare Nutzerführung, schnelle Technik und verständliche Inhalte, damit jede Seite eine konkrete Aufgabe im Vertriebsprozess erfüllt.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="primary-btn">Projekt anfragen</Link>
            <Link href="/referenzen" className="secondary-btn">Referenzen ansehen</Link>
          </div>
          <ul className="grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-3">
            {['Klarer Projektablauf', 'SEO-Basis inklusive', 'Mobile First umgesetzt'].map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-glow-green)] text-[var(--accent-green)]">✓</span>{item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-primary)]">
            <span>40+ Projekte</span><span className="h-4 w-px bg-[var(--border-subtle)]" /><span>3–5 Tage bis Demo</span><span className="h-4 w-px bg-[var(--border-subtle)]" /><span>ab 650€</span>
          </div>
        </motion.div>

        <motion.div {...reveal} className="relative">
          <div className="card overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] bg-[#0f172a] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="carousel-track flex w-[200%]" style={{ animation: 'slide 24s ease-in-out infinite' }}>
              {[...previews, ...previews].map((p, idx) => (
                <div key={`${p.key}-${idx}`} className="relative h-[320px] w-full border-r border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                  <Image src={p.image} alt={p.title} fill className="object-cover opacity-90" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -left-8 top-6 rounded-full border border-emerald-400/50 bg-[var(--bg-surface)] px-4 py-2 text-sm text-emerald-300">⚡ PageSpeed 98/100</div>
        </motion.div>
      </div>
      <style jsx>{`@keyframes slide{0%,14%{transform:translateX(0)}86%,100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
