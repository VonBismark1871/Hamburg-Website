import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../lib/seo';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Marquee from '../components/ui/Marquee';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';

const principles = [
  { number: '01', title: 'Struktur vor Dekoration', text: 'Bevor das Design entsteht, steht die Logik der Seite. Welche Information braucht der Besucher wann — und was soll er danach tun?' },
  { number: '02', title: 'Direkter Kontakt, kein Ticketsystem', text: 'Sie sprechen mit der Person, die Ihre Website baut – ohne Weiterleitungen, ohne Warteschleifen. Eine Person ist von Anfang bis Livegang verantwortlich.' },
  { number: '03', title: 'Erst sehen, dann entscheiden', text: 'Daher die kostenlose Demo. Ich zeige, wie Ihre Website aussehen könnte — bevor Sie irgendetwas beauftragen oder bezahlen.' },
  { number: '04', title: 'Ehrliche Einschätzung', text: 'Wenn ein einfacherer Ansatz besser passt, sage ich das. Kein Upselling, keine Funktionen, die Sie nicht brauchen.' },
  { number: '05', title: 'Fairer Preis ohne Agentur-Aufschlag', text: 'Sie zahlen für die Leistung, nicht für ein großes Büro. Die Preisrange steht vor dem Projektstart fest.' }
];

const promises = [
  'Klare Rückmeldungen ohne Fachjargon',
  'Preisrange vor dem Projektstart',
  'Keine versteckten Kosten',
  'Antwort in der Regel innerhalb von 24 Stunden'
];

const marqueeItems = ['Struktur', 'Klarheit', 'Direkt', 'Ehrlich', 'Fair', 'Hamburg'];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über Hamburg Websites – Freelancer für Webdesign in Hamburg"
        description="Andrii Oleksiienko entwickelt Websites für kleine Unternehmen in Hamburg: Struktur, Klarheit, direkte Abstimmung und faire Preise — ohne Agentur-Overhead."
        path="/ueber-uns"
        schema={breadcrumbSchema([{ name: 'Startseite', path: '/' }, { name: 'Über uns', path: '/ueber-uns' }])}
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="ueber-uns-hero-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <p className="section-label">Über uns</p>
            <AnimatedText
              as="h1"
              text="Ein Ansprechpartner. Viele Website-Richtungen."
              className="display-xl max-w-4xl"
            />
            <Reveal delay={0.2}>
              <p className="lead mt-6 max-w-3xl">
                Hamburg Websites arbeitet für Unternehmen, die eine passende Website brauchen: mal kompakt und lokal,
                mal stärker gestaltet, mal mit mehr Seiten oder Funktionen.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="founder-heading">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <Reveal className="order-1">
              <figure className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-[2rem] opacity-55 blur-2xl"
                  style={{ background: 'var(--grad-brand)' }}
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border" style={{ borderColor: 'var(--line-2)' }}>
                  <Image
                    src="/brand/founder-portrait.jpg"
                    alt="Andrii Oleksiienko, Gründer und Webentwickler bei Hamburg Websites"
                    width={720}
                    height={900}
                    sizes="(max-width: 1024px) 80vw, 340px"
                    className="block h-full w-full object-cover"
                    priority
                  />
                  <figcaption
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{ background: 'linear-gradient(to top, rgba(8,7,13,0.92), rgba(8,7,13,0.35) 55%, transparent)' }}
                  >
                    <p className="font-display text-lg font-bold leading-tight" style={{ color: 'var(--text)' }}>
                      Andrii Oleksiienko
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--cyan-2)' }}>
                      Gründer &amp; Webentwickler · Hamburg
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>

            <div className="order-2">
              <p className="section-label">Ihr Ansprechpartner</p>
              <AnimatedText
                as="h2"
                text="Eine Person — von der ersten Idee bis zum Livegang."
                className="display-lg"
              />
              <RevealGroup className="mt-6 max-w-2xl space-y-5">
                <RevealItem as="p" className="lead">
                  Mein Name ist Andrii Oleksiienko. Ich entwickle Websites für kleine Unternehmen in Hamburg –
                  vom ersten Gespräch über die kostenlose Demo bis zum fertigen Livegang.
                </RevealItem>
                <RevealItem as="p" className="text-base leading-7" style={{ color: 'var(--muted)' }}>
                  Keine Weiterleitungen, kein Ticketsystem: Sie sprechen direkt mit der Person, die Ihre Website baut.
                  Das hält Entscheidungen kurz, Rückfragen unkompliziert und das Ergebnis nah an dem, was Sie wirklich brauchen.
                </RevealItem>
              </RevealGroup>
              <Reveal delay={0.15}>
                <Link href="/kontakt" className="mt-8 inline-flex items-center gap-2 font-medium" style={{ color: 'var(--cyan-2)' }}>
                  Direkt Kontakt aufnehmen
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-spacing" aria-labelledby="manifest-heading" style={{ background: 'var(--bg)' }}>
          <div className="section-container">
            <p className="section-label">Wofür ich stehe</p>
            <AnimatedText
              as="h2"
              text="Viele Websites sehen gut aus — aber führen niemanden zur Anfrage."
              className="display-lg max-w-5xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 font-display text-2xl font-bold sm:text-3xl" style={{ color: 'var(--text-soft)' }}>
                Ich baue Seiten, die <span className="gradient-text">beides</span> können.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="border-y py-7" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
          <Marquee items={marqueeItems} duration={32} />
        </div>

        <section className="section-container section-spacing" aria-labelledby="arbeitsweise-heading">
          <Reveal className="max-w-3xl">
            <p className="section-label">Arbeitsweise</p>
            <AnimatedText as="h2" text="So arbeite ich" className="display-lg" />
          </Reveal>
          <RevealGroup as="ol" className="mt-10 grid gap-5 lg:grid-cols-2">
            {principles.map((item) => (
              <RevealItem as="li" key={item.number} className="glass-card p-7 sm:p-8">
                <article className="grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <span className="stat-num" aria-hidden="true">{item.number}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl" style={{ color: 'var(--text)' }}>{item.title}</h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{item.text}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="band-violet section-spacing" aria-labelledby="einordnung-heading">
          <div className="section-container relative z-[2]">
            <p className="section-label">Eine kurze Einordnung</p>
            <Reveal>
              <blockquote id="einordnung-heading" className="max-w-4xl font-display text-2xl font-bold leading-snug sm:text-4xl" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                „Hamburg Websites ist neu gestartet und bewusst schlank aufgestellt: direkte Abstimmung, klare
                Entscheidungen — und Qualität, die Sie an echten Demos sehen statt an{' '}
                <span className="gradient-text">erfundenen Referenzen</span>.“
              </blockquote>
              <p className="mt-6 text-sm" style={{ color: 'var(--faint)' }}>— Hamburg Websites, gegründet für klare Webprojekte in Hamburg und darüber hinaus</p>
            </Reveal>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="zusagen-heading">
          <Reveal className="max-w-3xl">
            <p className="section-label">Zusagen</p>
            <AnimatedText as="h2" text="Meine Zusagen" className="display-lg" />
          </Reveal>
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {promises.map((item) => (
              <RevealItem as="article" key={item} className="glass-card flex items-start gap-3 p-6">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(34,211,238,0.14)', color: 'var(--cyan-2)' }}>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M3 8.5 6.5 12 13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-medium" style={{ color: 'var(--text-soft)' }}>{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="section-container pb-24" aria-labelledby="ueber-uns-cta-heading">
          <Reveal>
            <div className="cta-card p-8 sm:p-12">
              <h2 id="ueber-uns-cta-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Klingt das nach der richtigen Zusammenarbeit?
              </h2>
              <p className="lead mt-4 max-w-3xl">
                Schauen Sie sich meine Referenzen an oder starten Sie direkt mit einer kostenlosen Demo.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/kontakt" className="primary-btn"><span>Kostenlose Demo starten</span></Link>
                <Link href="/referenzen" className="secondary-btn">Referenzen ansehen</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
