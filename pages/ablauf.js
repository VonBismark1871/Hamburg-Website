import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const processSteps = [
  { number: '01', title: 'Anfrage', text: 'Sie schreiben uns kurz — Branche, ungefähres Ziel, ob Sie bereits eine Website haben. Kein ausformuliertes Briefing nötig.' },
  { number: '02', title: 'Kostenlose Demo-Website', text: 'Wir bauen eine erste Version Ihrer Website — ohne dass Sie dafür irgendetwas zahlen.' },
  { number: '03', title: 'Abstimmung', text: 'Sie prüfen die Demo und sagen uns, was passt und was nicht.' },
  { number: '04', title: 'Umsetzung', text: 'Auf Basis der Abstimmung bauen wir die vollständige Website — technisch sauber, schnell geladen, mobiloptimiert.' },
  { number: '05', title: 'Prüfung & Livegang', text: 'Sie erhalten die fertige Website zur Prüfung. Danach gehen wir live.' }
];

export default function AblaufPage() {
  return (
    <>
      <SEOHead title="Ablauf | Hamburg Websites" description="So läuft Ihr Website-Projekt ab: transparent von der Anfrage bis zum Livegang – inklusive kostenloser Demo-Website." path="/ablauf" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="ablauf-hero-heading"><div className="section-container"><h1 id="ablauf-hero-heading" className="text-5xl"><span className="gradient-text">So</span> läuft Ihr Projekt ab</h1></div></section>
        <section className="section-spacing bg-[var(--bg-surface)]"><div className="section-container"><ol className="grid gap-5 md:grid-cols-5">{processSteps.map((step, i) => <motion.li key={step.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.08,ease:'easeOut'}} viewport={{once:true,amount:0.2}} className="card group p-5"><span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-purple)] text-[var(--text-primary)] group-hover:animate-pulse">{step.number}</span><h3 className="text-lg">{step.title}</h3><p className="mt-2 text-sm">{step.text}</p></motion.li>)}</ol></div></section>
        <div className="section-container pb-24"><Link href="/kontakt" className="primary-btn">Zur Kontaktanfrage</Link></div>
      </main>
      <Footer />

      <style jsx>{`
        .pulse-dot {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 9999px;
          background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.65);
          animation: pulseDot 1.8s ease-out infinite;
        }

        .timeline-segment {
          width: 100%;
          padding: 0.75rem;
          transform-origin: left;
          transform: scaleX(0);
          opacity: 0.3;
          transition: transform 0.75s ease, opacity 0.45s ease;
          transition-delay: var(--segment-delay);
        }

        @media (min-width: 640px) {
          .timeline-segment {
            flex: 0 0 var(--segment-width);
            padding: 0.95rem 1rem;
          }
        }

        .timeline-segment.is-visible {
          transform: scaleX(1);
          opacity: 1;
        }

        .timeline-wrap {
          --line-progress: 0;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 1.1rem;
          top: 1.5rem;
          width: 2px;
          height: calc(100% - 3rem);
          background: rgba(99, 102, 241, 0.2);
          transform-origin: top;
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #818cf8 0%, #6366f1 100%);
          transform-origin: top;
          transform: scaleY(var(--line-progress));
          transition: transform 220ms linear;
        }

        .timeline-step {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          transition-delay: var(--step-delay);
        }

        .timeline-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .step-badge {
          display: inline-flex;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 9999px;
          border: 2px solid #cbd5e1;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #334155;
          background: var(--bg-card);
          transition: border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .timeline-step:hover .step-badge {
          color: #6366f1;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.14);
        }

        .timeline-details li {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .timeline-step.is-visible .timeline-details li {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-step.is-visible .timeline-details li:nth-child(1) {
          transition-delay: calc(var(--step-delay) + 80ms);
        }

        .timeline-step.is-visible .timeline-details li:nth-child(2) {
          transition-delay: calc(var(--step-delay) + 150ms);
        }

        .timeline-step.is-visible .timeline-details li:nth-child(3) {
          transition-delay: calc(var(--step-delay) + 220ms);
        }

        .chip {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          padding: 0.28rem 0.7rem;
          font-size: 0.75rem;
          line-height: 1.2;
          font-weight: 600;
        }

        .chip-sie {
          background: #dcfce7;
          color: #166534;
        }

        .chip-hw {
          background: #dbeafe;
          color: #1e3a8a;
        }

        .chip-team {
          background: #e2e8f0;
          color: #0f172a;
        }

        .chip-time {
          background: #fef9c3;
          color: #b45309;
        }

        @media (max-width: 639px) {
          .timeline-line {
            left: 1.05rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-dot,
          .timeline-step,
          .timeline-segment,
          .timeline-details li,
          .timeline-line::after {
            animation: none;
            transition: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes pulseDot {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.65);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
          }
        }
      `}</style>
    </>
  );
}
