import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../lib/seo';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';

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
  hw: { background: 'rgba(124,58,237,0.14)', color: 'var(--violet-2)', border: '1px solid var(--line-2)' },
  team: { background: 'rgba(34,211,238,0.1)', color: 'var(--cyan-2)', border: '1px solid rgba(34,211,238,0.25)' }
};

function Timeline() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%']
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="v-timeline mt-12">
      <span className="v-timeline-rail" aria-hidden="true" style={{ height: 'calc(100% - 24px)' }} />
      <motion.span
        className="v-timeline-fill"
        aria-hidden="true"
        style={{ height: 'calc(100% - 24px)', scaleY: reduce ? 1 : scaleY }}
      />
      <RevealGroup as="ol" className="space-y-6">
        {processSteps.map((step) => (
          <RevealItem as="li" key={step.number} className="grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
            <div className="relative z-[2] sm:pt-1">
              <span className="v-node">{step.number}</span>
            </div>
            <article className="glass-card p-6 sm:p-7">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={actorStyles[step.actorType]}>
                  {step.actor}
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}>
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>{step.title}</h3>
              <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{step.text}</p>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span style={{ marginTop: 2, color: 'var(--cyan-2)' }} aria-hidden="true">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

export default function AblaufPage() {
  return (
    <>
      <SEOHead
        title="Ablauf"
        description="So läuft Ihr Website-Projekt ab: transparent von der Anfrage über die kostenlose Demo bis zum Livegang – klare Schritte, direkte Abstimmung, kein Agentur-Overhead."
        path="/ablauf"
        schema={breadcrumbSchema([{ name: 'Startseite', path: '/' }, { name: 'Ablauf', path: '/ablauf' }])}
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="ablauf-hero-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <p className="section-label">Hamburg Websites — Prozess</p>
            <AnimatedText as="h1" text="So läuft Ihr Projekt ab" className="display-xl max-w-3xl" />
            <Reveal delay={0.2}>
              <p className="lead mt-6 max-w-3xl">
                Von der ersten Nachricht bis zur veröffentlichten Website — transparent, klar und ohne unnötige Umwege.
              </p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ border: '1px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.08)', color: '#34D399' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: '#34D399', boxShadow: '0 0 0 4px rgba(52,211,153,0.18)' }} aria-hidden="true" />
                Typischer Ablauf: 7–14 Werktage
              </span>
            </Reveal>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="zeitplan-heading">
          <Reveal className="glass-card p-6 sm:p-8">
            <p className="section-label">Zeitplan</p>
            <h2 id="zeitplan-heading" className="font-display text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text)' }}>
              Zeitplan auf einen Blick
            </h2>
            <div className="mt-6 flex flex-col overflow-hidden rounded-2xl sm:flex-row" style={{ border: '1px solid var(--line)' }}>
              {scheduleSegments.map((segment, i) => (
                <motion.div
                  key={segment.label}
                  className="px-4 py-4"
                  style={{ flex: `0 0 ${segment.weight}%`, background: i % 2 ? 'rgba(34,211,238,0.07)' : 'rgba(124,58,237,0.1)', borderRight: '1px solid var(--line)' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{segment.label}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{segment.duration}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section-container pb-8" aria-labelledby="prozess-timeline-heading">
          <Reveal>
            <p className="section-label">Prozess</p>
            <AnimatedText as="h2" text="Ihr Projekt in fünf klaren Schritten" className="display-lg" />
          </Reveal>
          <Timeline />
        </section>

        <section className="section-container section-spacing" aria-labelledby="ablauf-cta-heading">
          <Reveal>
            <div className="cta-card p-8 sm:p-12">
              <h2 id="ablauf-cta-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Bereit für den ersten Schritt?
              </h2>
              <p className="lead mt-4 max-w-2xl">
                Schreiben Sie uns kurz — wir erstellen Ihre kostenlose Demo-Website und Sie sehen, wie Ihr Ergebnis
                aussehen könnte.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/kontakt" className="primary-btn"><span>Zur Kontaktanfrage</span></Link>
                <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
