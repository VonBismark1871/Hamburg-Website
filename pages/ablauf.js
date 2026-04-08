import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const scheduleSegments = [
  { label: 'Anfrage', duration: '6–24 Stunden', weight: 9, tone: 'segment-1' },
  { label: 'Demo', duration: '1–3 Tage', weight: 15, tone: 'segment-2' },
  { label: 'Abstimmung', duration: '2–3 Tage', weight: 15, tone: 'segment-3' },
  { label: 'Umsetzung', duration: '5–10 Tage', weight: 43, tone: 'segment-4' },
  { label: 'Prüfung & Livegang', duration: '7 Tage Prüfphase', weight: 18, tone: 'segment-5' }
];

const processSteps = [
  {
    number: '01',
    title: 'Anfrage',
    actor: { label: 'Sie', className: 'meta-chip chip-sie' },
    duration: '6–24 Stunden',
    text:
      'Sie schreiben uns kurz — Branche, ungefähres Ziel, ob Sie bereits eine Website haben. Kein ausformuliertes Briefing nötig.',
    details: ['Kontaktformular, E-Mail oder Telefon', 'Rückmeldung in der Regel innerhalb von 24 Stunden']
  },
  {
    number: '02',
    title: 'Kostenlose Demo-Website',
    actor: { label: 'Hamburg Websites', className: 'meta-chip chip-hw' },
    duration: '1–3 Tage',
    text:
      'Wir bauen eine erste Version Ihrer Website — ohne dass Sie dafür irgendetwas zahlen. Sie sehen konkretes Design, Struktur und Ton, bevor Sie sich entscheiden.',
    details: ['Echte Inhalte statt Dummy-Text', 'Mobil optimiert und sofort einsehbar', 'Kein Risiko, keine Verpflichtung']
  },
  {
    number: '03',
    title: 'Abstimmung',
    actor: { label: 'Gemeinsam', className: 'meta-chip chip-team' },
    duration: '2–3 Tage',
    text:
      'Sie prüfen die Demo und sagen uns, was passt und was nicht. Wir besprechen Inhalte, Anpassungen und Struktur direkt — ohne Ticketsystem.',
    details: ['1–2 Korrekturschleifen inklusive', 'Direkter Kontakt mit der umsetzenden Person']
  },
  {
    number: '04',
    title: 'Umsetzung',
    actor: { label: 'Hamburg Websites', className: 'meta-chip chip-hw' },
    duration: '5–10 Tage',
    text:
      'Auf Basis der Abstimmung bauen wir die vollständige Website — technisch sauber, schnell geladen, mobiloptimiert und bereit für Suchmaschinen.',
    details: ['Performance-Optimierung und SEO-Basis', 'Kontaktformular, Öffnungszeiten und alle Seiten', 'Technische Einrichtung und Domain-Vorbereitung']
  },
  {
    number: '05',
    title: 'Prüfung & Livegang',
    actor: { label: 'Sie', className: 'meta-chip chip-sie' },
    duration: '7 Tage Prüfphase',
    text:
      'Sie erhalten die fertige Website zur Prüfung. Letzte kleine Änderungen können Sie innerhalb von 7 Tagen einbringen. Danach gehen wir live.',
    details: ['Veröffentlichung nach Ihrer Freigabe', 'Optionale Übergabe des Adminbereichs', 'Laufende Betreuung auf Wunsch möglich']
  }
];

export default function AblaufPage() {
  const timelineWrapRef = useRef(null);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    revealNodes.forEach((node) => observer.observe(node));

    const updateLineProgress = () => {
      if (!timelineWrapRef.current) return;
      const rect = timelineWrapRef.current.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.66;
      const rawProgress = (viewportPoint - rect.top) / rect.height;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      timelineWrapRef.current.style.setProperty('--line-progress', progress.toFixed(3));
    };

    updateLineProgress();
    window.addEventListener('scroll', updateLineProgress, { passive: true });
    window.addEventListener('resize', updateLineProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateLineProgress);
      window.removeEventListener('resize', updateLineProgress);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Ablauf | Hamburg Websites"
        description="So läuft Ihr Website-Projekt ab: transparent von der Anfrage bis zum Livegang – inklusive kostenloser Demo-Website."
        path="/ablauf"
      />
      <Header />
      <main>
        <section className="section-dark process-hero text-white" aria-labelledby="ablauf-hero-heading">
          <div className="section-container process-hero-grid">
            <div className="process-hero-content">
              <p className="hero-eyebrow">Hamburg Websites — Prozess</p>
              <h1 id="ablauf-hero-heading" className="mt-5 max-w-[600px] text-[56px] leading-[0.98] tracking-[-0.02em] sm:text-[68px] xl:text-[72px]">
                <span className="h1-accent-italic">So</span> läuft Ihr Projekt ab
              </h1>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.55] text-[rgba(255,255,255,0.82)] sm:text-[20px]">
                Von der ersten Nachricht bis zur veröffentlichten Website — transparent, klar und ohne unnötige Umwege.
              </p>
              <div className="mt-9 inline-flex flex-col gap-3.5">
                <span className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  Typischer Ablauf: 7–14 Werktage
                </span>
                <p className="max-w-[620px] text-[15px] leading-[1.5] text-[rgba(255,255,255,0.65)]">
                  Richtwert für einen typischen Onepager. Je nach Umfang und Rückmeldedauer kann der Ablauf schneller
                  oder länger sein.
                </p>
              </div>
            </div>

            <div className="hero-process-rhythm" aria-hidden="true">
              <div className="rhythm-line" />
              <div className="rhythm-steps">
                {['Anfrage', 'Demo', 'Abstimmung', 'Umsetzung', 'Livegang'].map((item, index) => (
                  <div key={item} className="rhythm-node" style={{ '--node-delay': `${index * 90}ms` }}>
                    <span className="rhythm-dot" />
                    <span className="rhythm-label">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-container -mt-8 pb-14 sm:-mt-10" aria-labelledby="zeitplan-heading">
          <div className="overview-shell" data-reveal>
            <div className="overview-head">
              <p className="section-label">Ablauf</p>
              <h2 id="zeitplan-heading" className="mt-3 text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[48px]">
                Zeitplan auf einen Blick
              </h2>
            </div>

            <div className="timeline-bar-wrap mt-7">
              <ul className="timeline-bar">
                {scheduleSegments.map((segment, index) => (
                  <li
                    key={segment.label}
                    data-reveal
                    style={{
                      '--segment-width': `${segment.weight}%`,
                      '--segment-delay': `${index * 70}ms`
                    }}
                    className={`timeline-segment ${segment.tone}`}
                  >
                    <p className="segment-title">{segment.label}</p>
                    <p className="segment-duration">{segment.duration}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-container pb-[88px]" aria-labelledby="prozess-timeline-heading">
          <div className="section-intro max-w-[860px]">
            <p className="section-label">Prozess</p>
            <h2 id="prozess-timeline-heading" className="mt-3 text-[36px] leading-[1.06] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[50px]">
              Ihr Projekt in fünf klaren Schritten
            </h2>
          </div>

          <div ref={timelineWrapRef} className="timeline-wrap mt-14">
            <span className="timeline-line" aria-hidden="true" />
            <ol className="space-y-9">
              {processSteps.map((step, index) => (
                <li
                  key={step.number}
                  data-reveal
                  style={{ '--step-delay': `${index * 90}ms` }}
                  className="timeline-step grid gap-4 sm:grid-cols-[118px_minmax(0,920px)] sm:gap-6"
                >
                  <div className="timeline-marker-wrap">
                    <span className="step-badge">{step.number}</span>
                  </div>

                  <article className="process-card">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={step.actor.className}>{step.actor.label}</span>
                      <span className="meta-chip chip-time">{step.duration}</span>
                    </div>
                    <h3 className="process-card-title">{step.title}</h3>
                    <p className="process-card-copy">{step.text}</p>
                    <ul className="timeline-details mt-6 space-y-3.5 text-[16px] leading-[1.6] text-[color:var(--color-ink-2)]">
                      {step.details.map((detail) => (
                        <li key={detail} className="detail-item">
                          <span className="detail-marker" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-container pb-20" aria-labelledby="ablauf-cta-heading">
          <div className="section-dark final-cta-panel rounded-[28px] border border-white/10 px-10 pb-11 pt-10 text-white sm:px-10 sm:pb-[44px] sm:pt-10">
            <h2 id="ablauf-cta-heading" className="max-w-[620px] text-[38px] leading-[1.05] tracking-[-0.015em] text-white sm:text-[48px]">
              Bereit für den ersten Schritt?
            </h2>
            <p className="mt-5 max-w-[620px] text-lg leading-[1.55] text-[rgba(255,255,255,0.82)] sm:text-xl">
              Schreiben Sie uns kurz — wir erstellen Ihre kostenlose Demo-Website und Sie sehen, wie Ihr Ergebnis
              aussehen könnte.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="inline-flex h-14 items-center rounded-full border border-white bg-white px-7 text-[15px] font-semibold text-[color:var(--color-ink)] transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.92)]">
                Zur Kontaktanfrage
              </Link>
              <Link
                href="/preise"
                className="inline-flex h-14 items-center rounded-full border border-white/25 bg-transparent px-7 text-[15px] font-medium text-[rgba(255,255,255,0.88)] transition duration-200 ease-out hover:-translate-y-[1px] hover:border-white/45 hover:text-white"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .process-hero {
          padding: 88px 0;
          background: linear-gradient(180deg, #131313 0%, #111111 100%);
        }

        .process-hero-grid {
          display: grid;
          gap: 2.25rem;
          align-items: center;
          grid-template-columns: minmax(0, 620px) minmax(0, 1fr);
        }

        .hero-eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 600;
          color: rgba(150, 173, 255, 0.9);
        }

        .status-pill {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          gap: 0.55rem;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.04);
          padding: 0 14px;
          font-size: 15px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #6ea588;
          box-shadow: 0 0 0 5px rgba(110, 165, 136, 0.15);
        }

        .hero-process-rhythm {
          position: relative;
          justify-self: end;
          width: min(440px, 100%);
          padding: 22px 18px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.02);
        }

        .rhythm-line {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 31px;
          height: 1px;
          background: linear-gradient(90deg, rgba(101, 123, 200, 0.28), rgba(101, 123, 200, 0.12));
        }

        .rhythm-steps {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.35rem;
        }

        .rhythm-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
          opacity: 0;
          transform: translateY(8px);
          animation: nodeIn 380ms ease forwards;
          animation-delay: var(--node-delay);
        }

        .rhythm-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: 2px solid rgba(149, 170, 246, 0.55);
          background: #111;
        }

        .rhythm-label {
          font-size: 12px;
          line-height: 1.2;
          color: rgba(255, 255, 255, 0.66);
          text-align: center;
        }

        .overview-shell {
          border-radius: 28px;
          border: 1px solid var(--color-line);
          background: var(--color-bg-card);
          padding: 28px;
          box-shadow: 0 12px 30px rgba(20, 20, 20, 0.04);
        }

        .timeline-bar-wrap {
          border-radius: 18px;
          border: 1px solid rgba(21, 21, 21, 0.08);
          overflow: hidden;
        }

        .timeline-bar {
          display: flex;
          flex-wrap: wrap;
          min-height: 84px;
        }

        .timeline-segment {
          width: 100%;
          padding: 0.9rem 0.9rem 0.85rem;
          transform-origin: left;
          transform: scaleX(0.96);
          opacity: 0;
          transition: opacity 240ms ease, transform 240ms ease;
          transition-delay: var(--segment-delay);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        .timeline-segment:last-child {
          border-right: 0;
        }

        .timeline-segment.is-visible {
          transform: scaleX(1);
          opacity: 1;
        }

        .segment-title {
          font-size: 15px;
          line-height: 1.2;
          font-weight: 600;
          color: #f8fbff;
        }

        .segment-duration {
          margin-top: 0.28rem;
          font-size: 12px;
          color: rgba(239, 246, 255, 0.8);
        }

        .segment-1 {
          background: #6f91dd;
        }

        .segment-2 {
          background: #5f83d3;
        }

        .segment-3 {
          background: #4f74c5;
        }

        .segment-4 {
          background: #4566ad;
        }

        .segment-5 {
          background: #3d5b96;
        }

        .timeline-wrap {
          --line-progress: 0;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 58px;
          top: 1rem;
          width: 2px;
          height: calc(100% - 2rem);
          background: rgba(98, 121, 178, 0.24);
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #768dc8 0%, #5973af 100%);
          transform-origin: top;
          transform: scaleY(var(--line-progress));
          transition: transform 220ms linear;
        }

        .timeline-step {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 220ms ease, transform 220ms ease;
          transition-delay: var(--step-delay);
        }

        .timeline-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-marker-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 0.2rem;
        }

        .step-badge {
          display: inline-flex;
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          border: 1px solid rgba(78, 102, 166, 0.35);
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #384f79;
          background: #f8f6f1;
          transition: border-color 220ms ease, color 220ms ease, background 220ms ease;
        }

        .timeline-step:hover .step-badge {
          border-color: rgba(73, 99, 170, 0.75);
          color: #2d4d90;
          background: #fcfbf9;
        }

        .process-card {
          border-radius: 24px;
          border: 1px solid var(--color-line);
          background: var(--color-bg-card);
          padding: 32px;
          box-shadow: 0 6px 16px rgba(20, 20, 20, 0.02);
        }

        .process-card-title {
          margin-top: 18px;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 650;
          color: var(--color-ink);
          max-width: 760px;
        }

        .process-card-copy {
          margin-top: 13px;
          max-width: 760px;
          font-size: 18px;
          line-height: 1.65;
          color: var(--color-ink-2);
        }

        .meta-chip {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          padding: 0.34rem 0.75rem;
          font-size: 13px;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0.01em;
          border: 1px solid transparent;
        }

        .chip-sie {
          background: rgba(112, 140, 212, 0.12);
          border-color: rgba(84, 112, 188, 0.18);
          color: #3d588f;
        }

        .chip-hw {
          background: rgba(89, 120, 197, 0.14);
          border-color: rgba(77, 106, 178, 0.2);
          color: #324b7f;
        }

        .chip-team {
          background: rgba(148, 163, 184, 0.16);
          border-color: rgba(100, 116, 139, 0.24);
          color: #3a485f;
        }

        .chip-time {
          background: rgba(194, 169, 96, 0.14);
          border-color: rgba(173, 145, 74, 0.22);
          color: #6f5a29;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
        }

        .detail-marker {
          width: 7px;
          height: 7px;
          margin-top: 0.5rem;
          border-radius: 9999px;
          background: rgba(76, 107, 181, 0.75);
          flex-shrink: 0;
        }

        .timeline-details li {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 220ms ease, transform 220ms ease;
        }

        .timeline-step.is-visible .timeline-details li {
          opacity: 1;
          transform: translateY(0);
        }

        .final-cta-panel {
          background: linear-gradient(180deg, #151515 0%, #111111 100%);
        }

        @media (min-width: 640px) {
          .timeline-segment {
            flex: 0 0 var(--segment-width);
            padding: 1rem 1rem 0.95rem;
          }
        }

        @media (max-width: 1023px) {
          .process-hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-process-rhythm {
            justify-self: start;
            margin-top: 0.8rem;
            width: min(520px, 100%);
          }
        }

        @media (max-width: 639px) {
          .process-hero {
            padding: 72px 0;
          }

          .timeline-wrap {
            padding-left: 0.15rem;
          }

          .timeline-line {
            left: 20px;
          }

          .timeline-step {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 0.9rem;
          }

          .timeline-marker-wrap {
            justify-content: flex-start;
          }

          .process-card {
            padding: 24px;
          }

          .overview-shell {
            padding: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-step,
          .timeline-segment,
          .timeline-details li,
          .timeline-line::after,
          .rhythm-node {
            animation: none;
            transition: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes nodeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
