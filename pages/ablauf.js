import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const scheduleSegments = [
  { label: 'Anfrage', duration: '6–24 Stunden', weight: 8 },
  { label: 'Demo', duration: '1–3 Tage', weight: 14 },
  { label: 'Abstimmung', duration: '2–3 Tage', weight: 14 },
  { label: 'Umsetzung', duration: '5–10 Tage', weight: 46 },
  { label: 'Prüfung & Livegang', duration: '7 Tage Prüfphase', weight: 18 }
];

const processSteps = [
  {
    number: '01',
    title: 'Anfrage',
    actor: 'Sie',
    actorType: 'sie',
    duration: '6–24 Stunden',
    text: 'Sie schreiben uns kurz — Branche, ungefähres Ziel, ob Sie bereits eine Website haben. Kein ausformuliertes Briefing nötig.',
    details: ['Kontaktformular, E-Mail oder Telefon', 'Wir melden uns i. d. R. innerhalb von 24 h zurück']
  },
  {
    number: '02',
    title: 'Kostenlose Demo-Website',
    actor: 'Hamburg Websites',
    actorType: 'hw',
    duration: '1–3 Tage',
    text: 'Wir bauen eine erste Version Ihrer Website — ohne dass Sie dafür irgendetwas zahlen. Sie sehen konkretes Design, Struktur und Ton, bevor Sie sich entscheiden.',
    details: ['Echte Inhalte, kein Dummy-Text', 'Mobil optimiert und sofort einsehbar', 'Kein Risiko, keine Verpflichtung']
  },
  {
    number: '03',
    title: 'Abstimmung',
    actor: 'Gemeinsam',
    actorType: 'team',
    duration: '2–3 Tage',
    text: 'Sie prüfen die Demo und sagen uns, was passt und was nicht. Wir besprechen Inhalte, Anpassungen, Struktur — direkt, ohne Ticketsystem.',
    details: ['1–2 Korrekturschleifen inklusive', 'Sie sprechen direkt mit der Person, die umsetzt']
  },
  {
    number: '04',
    title: 'Umsetzung',
    actor: 'Hamburg Websites',
    actorType: 'hw',
    duration: '5–10 Tage',
    text: 'Auf Basis der Abstimmung bauen wir die vollständige Website — technisch sauber, schnell geladen, mobiloptimiert, bereit für Suchmaschinen.',
    details: ['Performance-Optimierung & SEO-Basis', 'Kontaktformular, Öffnungszeiten, alle Seiten', 'Technische Einrichtung & Domain-Vorbereitung']
  },
  {
    number: '05',
    title: 'Prüfung & Livegang',
    actor: 'Sie',
    actorType: 'sie',
    duration: '7 Tage Prüfphase',
    text: 'Sie erhalten die fertige Website zur Prüfung. Letzte kleine Änderungen können Sie innerhalb von 7 Tagen einbringen. Danach gehen wir live.',
    details: ['Veröffentlichung nach Ihrer Freigabe', 'Optionale Übergabe des Adminbereichs', 'Laufende Betreuung auf Wunsch möglich']
  }
];

const actorStyles = {
  sie: { background: 'rgba(52,211,153,0.12)', color: '#34D399', border: '1px solid rgba(52,211,153,0.25)' },
  hw: { background: 'rgba(124,58,237,0.12)', color: '#A855F7', border: '1px solid rgba(168,142,247,0.25)' },
  team: { background: 'rgba(150,144,168,0.1)', color: '#9690A8', border: '1px solid rgba(150,144,168,0.2)' }
};

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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    revealNodes.forEach((node) => observer.observe(node));

    const updateLineProgress = () => {
      if (!timelineWrapRef.current) return;
      const rect = timelineWrapRef.current.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.7;
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
        <section className="section-dark py-20 sm:py-24" aria-labelledby="ablauf-hero-heading" style={{ background: 'linear-gradient(135deg, #0B0A12 0%, #16131F 60%, #1a152b 100%)' }}>
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <p className="section-label">Hamburg Websites — Prozess</p>
            <h1
              id="ablauf-hero-heading"
              className="mt-4 max-w-3xl font-black"
              style={{ color: '#ECEAF3', letterSpacing: '-0.03em', fontSize: 'clamp(2rem,5vw,3.5rem)' }}
            >
              So läuft Ihr Projekt ab
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-lg" style={{ color: '#9690A8' }}>
              Von der ersten Nachricht bis zur veröffentlichten Website — transparent, klar und ohne unnötige Umwege.
            </p>
            <div className="mt-8 inline-flex flex-col gap-3">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ border: '1px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.08)', color: '#34D399' }}
              >
                <span className="pulse-dot" aria-hidden="true" />
                Typischer Ablauf: 7–14 Werktage
              </span>
              <p className="max-w-2xl text-sm italic" style={{ color: '#6B6480' }}>
                Richtwert für einen typischen Onepager. Je nach Umfang und Rückmeldedauer kann der Ablauf schneller oder länger sein.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container -mt-10 pb-8 sm:-mt-12" aria-labelledby="zeitplan-heading">
          <div
            className="rounded-3xl p-6 sm:p-8"
            style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
            data-reveal
          >
            <p className="section-label">Ablauf</p>
            <h2 id="zeitplan-heading" className="text-2xl font-black sm:text-3xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
              Zeitplan auf einen Blick
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(168,142,247,0.12)' }}>
              <ul className="flex min-h-16 flex-wrap sm:flex-nowrap">
                {scheduleSegments.map((segment, index) => (
                  <li
                    key={segment.label}
                    data-reveal
                    style={{
                      '--segment-width': `${segment.weight}%`,
                      '--segment-delay': `${index * 90}ms`
                    }}
                    className="timeline-segment"
                  >
                    <p className="font-semibold text-white text-sm">{segment.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(236,234,243,0.6)' }}>{segment.duration}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-container section-spacing pt-8" aria-labelledby="prozess-timeline-heading">
          <p className="section-label">Prozess</p>
          <h2 id="prozess-timeline-heading" className="text-2xl font-black sm:text-3xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
            Ihr Projekt in fünf klaren Schritten
          </h2>

          <div ref={timelineWrapRef} className="timeline-wrap mt-10">
            <span className="timeline-line" aria-hidden="true" />
            <ol className="space-y-8 sm:space-y-10">
              {processSteps.map((step, index) => (
                <li
                  key={step.number}
                  data-reveal
                  style={{ '--step-delay': `${index * 100}ms` }}
                  className="timeline-step grid gap-4 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-8"
                >
                  <div className="relative z-[1] sm:pt-1">
                    <span className="step-badge">{step.number}</span>
                  </div>
                  <article
                    className="rounded-2xl p-6 sm:p-7"
                    style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
                  >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                        style={actorStyles[step.actorType]}
                      >
                        {step.actor}
                      </span>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold" style={{ color: '#ECEAF3' }}>{step.title}</h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>{step.text}</p>
                    <ul className="timeline-details mt-4 space-y-2 text-sm" style={{ color: '#9690A8' }}>
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span style={{ marginTop: 2, color: '#A855F7' }} aria-hidden="true">→</span>
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

        <section className="section-container pb-16 sm:pb-20" aria-labelledby="ablauf-cta-heading">
          <div
            className="rounded-3xl p-8 sm:p-10 lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 100%)',
              border: '1px solid rgba(168,142,247,0.2)'
            }}
          >
            <h2 id="ablauf-cta-heading" className="text-3xl font-bold sm:text-4xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
              Bereit für den ersten Schritt?
            </h2>
            <p className="mt-4 max-w-2xl" style={{ color: '#9690A8' }}>
              Schreiben Sie uns kurz — wir erstellen Ihre kostenlose Demo-Website und Sie sehen, wie Ihr Ergebnis aussehen könnte.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">Zur Kontaktanfrage</Link>
              <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .pulse-dot {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 9999px;
          background: #34D399;
          box-shadow: 0 0 0 0 rgba(52,211,153,0.65);
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
          background: linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15));
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
          background: rgba(168,142,247,0.15);
          transform-origin: top;
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #7C3AED 0%, #A855F7 100%);
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
          border: 2px solid rgba(168,142,247,0.25);
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #9690A8;
          background: #16131F;
          transition: border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .timeline-step:hover .step-badge {
          color: #A855F7;
          border-color: #7C3AED;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.2);
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
          0% { box-shadow: 0 0 0 0 rgba(52,211,153,0.65); }
          70% { box-shadow: 0 0 0 10px rgba(52,211,153,0); }
          100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); }
        }
      `}</style>
    </>
  );
}
