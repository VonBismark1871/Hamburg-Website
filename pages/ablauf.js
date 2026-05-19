import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const scheduleSegments = [
  { label: 'Anfrage', duration: '6–24 Stunden', weight: 8, color: 'from-primary to-primary' },
  { label: 'Demo', duration: '1–3 Tage', weight: 14, color: 'from-primary to-primary-dark' },
  { label: 'Abstimmung', duration: '2–3 Tage', weight: 14, color: 'from-primary-dark to-accent' },
  { label: 'Umsetzung', duration: '5–10 Tage', weight: 46, color: 'from-accent to-accent' },
  { label: 'Prüfung & Livegang', duration: '7 Tage Prüfphase', weight: 18, color: 'from-accent to-primary' }
];

const processSteps = [
  {
    number: '01',
    title: 'Anfrage',
    actor: { label: 'Sie', type: 'client' },
    duration: '6–24 Stunden',
    text:
      'Sie schreiben uns kurz — Branche, ungefähres Ziel, ob Sie bereits eine Website haben. Kein ausformuliertes Briefing nötig.',
    details: ['Kontaktformular, E-Mail oder Telefon', 'Wir melden uns i. d. R. innerhalb von 24 h zurück'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Kostenlose Demo-Website',
    actor: { label: 'Hamburg Websites', type: 'team' },
    duration: '1–3 Tage',
    text:
      'Wir bauen eine erste Version Ihrer Website — ohne dass Sie dafür irgendetwas zahlen. Sie sehen konkretes Design, Struktur und Ton, bevor Sie sich entscheiden.',
    details: ['Echte Inhalte, kein Dummy-Text', 'Mobil optimiert und sofort einsehbar', 'Kein Risiko, keine Verpflichtung'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Abstimmung',
    actor: { label: 'Gemeinsam', type: 'both' },
    duration: '2–3 Tage',
    text:
      'Sie prüfen die Demo und sagen uns, was passt und was nicht. Wir besprechen Inhalte, Anpassungen, Struktur — direkt, ohne Ticketsystem.',
    details: ['1–2 Korrekturschleifen inklusive', 'Sie sprechen direkt mit der Person, die umsetzt'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Umsetzung',
    actor: { label: 'Hamburg Websites', type: 'team' },
    duration: '5–10 Tage',
    text:
      'Auf Basis der Abstimmung bauen wir die vollständige Website — technisch sauber, schnell geladen, mobiloptimiert, bereit für Suchmaschinen.',
    details: ['Performance-Optimierung & SEO-Basis', 'Kontaktformular, Öffnungszeiten, alle Seiten', 'Technische Einrichtung & Domain-Vorbereitung'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: '05',
    title: 'Prüfung & Livegang',
    actor: { label: 'Sie', type: 'client' },
    duration: '7 Tage Prüfphase',
    text:
      'Sie erhalten die fertige Website zur Prüfung. Letzte kleine Änderungen können Sie innerhalb von 7 Tagen einbringen. Danach gehen wir live.',
    details: ['Veröffentlichung nach Ihrer Freigabe', 'Optionale Übergabe des Adminbereichs', 'Laufende Betreuung auf Wunsch möglich'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const getActorStyle = (type) => {
  switch (type) {
    case 'client':
      return 'bg-green-100 text-green-700';
    case 'team':
      return 'bg-primary/10 text-primary';
    case 'both':
      return 'bg-accent/10 text-accent';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function AblaufPage() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const updateLineProgress = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.6;
      const rawProgress = (viewportPoint - rect.top) / rect.height;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      timelineRef.current.style.setProperty('--line-progress', progress.toFixed(3));
    };

    updateLineProgress();
    window.addEventListener('scroll', updateLineProgress, { passive: true });
    window.addEventListener('resize', updateLineProgress);

    return () => {
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
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                Hamburg Websites — Prozess
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                So läuft Ihr{' '}
                <span className="text-accent">Projekt</span> ab
              </h1>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                Von der ersten Nachricht bis zur veröffentlichten Website — transparent, klar und ohne unnötige Umwege.
              </p>
              
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <span className="text-white font-medium">Typischer Ablauf: 7–14 Werktage</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="py-16 -mt-8 relative z-10">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Zeitplan auf einen Blick</h2>
              </div>
              
              <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden">
                {scheduleSegments.map((segment, index) => (
                  <motion.div
                    key={segment.label}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ flex: `${segment.weight} 0 0` }}
                    className={`bg-gradient-to-r ${segment.color} p-4 sm:p-5 origin-left`}
                  >
                    <p className="font-semibold text-white text-sm sm:text-base">{segment.label}</p>
                    <p className="text-xs text-white/80 mt-1">{segment.duration}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Prozess
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ihr Projekt in <span className="text-gradient">fünf Schritten</span>
              </h2>
            </motion.div>

            <div ref={timelineRef} className="relative timeline-container">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2">
                <div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent transition-transform duration-200 origin-top"
                  style={{ transform: 'scaleY(var(--line-progress, 0))', height: '100%' }}
                />
              </div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? '' : 'md:direction-rtl'
                    }`}
                  >
                    {/* Step Number Circle (center) */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-primary items-center justify-center shadow-lg z-10">
                      <span className="text-xl font-bold text-primary">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:col-start-2'}`}>
                      <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow ${
                        index % 2 === 0 ? '' : 'md:direction-ltr'
                      }`}>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActorStyle(step.actor.type)}`}>
                            {step.actor.label}
                          </span>
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                            {step.duration}
                          </span>
                        </div>
                        
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        
                        <p className="text-muted leading-relaxed mb-6">{step.text}</p>
                        
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex} 
                              className={`flex items-start gap-2 text-sm text-muted ${
                                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                              }`}
                            >
                              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-8 md:p-16 text-center"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bereit für den ersten Schritt?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Schreiben Sie uns kurz — wir erstellen Ihre kostenlose Demo-Website und Sie sehen, wie Ihr Ergebnis aussehen könnte.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Zur Kontaktanfrage
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/preise" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .timeline-container {
          --line-progress: 0;
        }
        
        @media (max-width: 767px) {
          .direction-rtl,
          .direction-ltr {
            direction: ltr;
          }
        }
        
        @media (min-width: 768px) {
          .md\\:direction-rtl {
            direction: rtl;
          }
          .md\\:direction-ltr {
            direction: ltr;
          }
        }
      `}</style>
    </>
  );
}
