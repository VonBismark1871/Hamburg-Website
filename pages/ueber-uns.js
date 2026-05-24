import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const principles = [
  {
    number: '1',
    title: 'Struktur vor Dekoration',
    text: 'Bevor das Design entsteht, steht die Logik der Seite. Welche Information braucht der Besucher wann — und was soll er danach tun?'
  },
  {
    number: '2',
    title: 'Direkter Kontakt, kein Ticketsystem',
    text: 'Sie sprechen mit der Person, die Ihre Website baut. Keine Weiterleitungen, keine Warteschleifen, keine Missverständnisse durch zwischengeschaltete Stellen.'
  },
  {
    number: '3',
    title: 'Erst sehen, dann entscheiden',
    text: 'Daher die kostenlose Demo. Wir zeigen, wie Ihre Website aussehen könnte — bevor Sie irgendetwas beauftragen oder bezahlen.'
  },
  {
    number: '4',
    title: 'Ehrliche Einschätzungen',
    text: 'Wenn ein einfacherer Ansatz besser passt, sagen wir das. Kein Upselling, keine Funktionen, die Sie nicht brauchen.'
  }
];

const studioBenefits = [
  { title: 'Volle Aufmerksamkeit', text: 'Ihr Projekt landet nicht in einer Warteschlange zwischen Großkunden.' },
  { title: 'Schnelle Entscheidungen', text: 'Keine internen Freigabeprozesse. Änderungen werden direkt umgesetzt.' },
  { title: 'Klare Verantwortung', text: 'Eine Person ist für Ihr Projekt verantwortlich — von Anfang bis Livegang.' },
  { title: 'Fairer Preis', text: 'Kein Agenturaufschlag. Sie zahlen für die Leistung, nicht für das Büro.' }
];

const promises = [
  'Klare Rückmeldungen ohne Fachjargon',
  'Realistische Zeitrahmen',
  'Preisrange vor Projektstart',
  'Saubere technische Umsetzung',
  'Keine versteckten Kosten',
  'Antwort innerhalb von 24 Stunden'
];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über uns – Hamburg Websites"
        description="Hamburg Websites entwickelt Websites für unterschiedliche Ziele, Budgets und Stilrichtungen — mit Fokus auf Struktur, Klarheit und realistische Umsetzung."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section
          className="py-20 sm:py-24"
          aria-labelledby="ueber-uns-hero-heading"
          style={{
            background: 'linear-gradient(135deg, #0B0A12 0%, #16131F 60%, #1a152b 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 50% at 80% 40%, rgba(124,58,237,0.15) 0%, transparent 65%)',
              pointerEvents: 'none'
            }}
          />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <p className="section-label">Über uns</p>
            <h1
              id="ueber-uns-hero-heading"
              className="max-w-4xl font-black"
              style={{ color: '#ECEAF3', letterSpacing: '-0.03em', fontSize: 'clamp(2rem,5vw,3.5rem)' }}
            >
              Ein Ansprechpartner.{' '}
              <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Viele mögliche Website-Richtungen.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg" style={{ color: '#9690A8' }}>
              Hamburg Websites arbeitet für Unternehmen, die eine passende Website brauchen: mal kompakt und lokal,
              mal stärker gestaltet, mal mit mehr Seiten oder Funktionen.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16" aria-labelledby="manifest-heading">
          <div className="section-container">
            <p className="section-label">Wofür wir stehen</p>
            <motion.h2
              id="manifest-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-4 max-w-5xl text-3xl font-black sm:text-4xl lg:text-5xl"
              style={{ color: '#ECEAF3', letterSpacing: '-0.03em' }}
            >
              Viele Websites sehen gut aus — aber führen niemanden zur Anfrage. Wir bauen Seiten, die{' '}
              <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                beides
              </span>{' '}
              können.
            </motion.h2>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="arbeitsweise-heading">
          <p className="section-label">Arbeitsweise</p>
          <h2 id="arbeitsweise-heading" className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: '#ECEAF3' }}>
            Arbeitsweise
          </h2>
          <ol className="mt-10 space-y-7">
            {principles.map((item, index) => (
              <motion.li
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl p-6 sm:p-7"
                style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
              >
                <article className="grid gap-4 sm:grid-cols-[70px_minmax(0,1fr)] sm:gap-6">
                  <span
                    className="text-6xl font-black leading-none sm:text-7xl"
                    style={{ color: 'rgba(124,58,237,0.2)' }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: '#ECEAF3' }}>{item.title}</h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>{item.text}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="section-container pb-16 sm:pb-20" aria-labelledby="studio-vorteile-heading">
          <p className="section-label">Warum wir</p>
          <h2 id="studio-vorteile-heading" className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: '#ECEAF3' }}>
            Warum ein kleines Studio?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {studioBenefits.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl p-6"
                style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
              >
                <h3 className="text-xl font-semibold" style={{ color: '#ECEAF3' }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          className="py-16 sm:py-20"
          aria-labelledby="einordnung-heading"
          style={{ background: 'linear-gradient(135deg, #16131F 0%, #1E1A2B 100%)' }}
        >
          <div className="section-container">
            <p className="section-label">Eine kurze Einordnung</p>
            <blockquote className="mt-5 max-w-4xl text-2xl italic sm:text-3xl" style={{ color: '#ECEAF3' }}>
              Hamburg Websites ist bewusst schlank aufgestellt: direkte Abstimmung, klare Entscheidungen und Websites,
              deren Umfang zum tatsächlichen Bedarf passt.
            </blockquote>
            <p className="mt-6 text-sm" style={{ color: '#6B6480' }}>— Hamburg Websites, gegründet für klare Webprojekte in Hamburg und darüber hinaus</p>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="zusagen-heading">
          <p className="section-label">Zusagen</p>
          <h2 id="zusagen-heading" className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: '#ECEAF3' }}>
            Unsere Zusagen
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Zusagen von Hamburg Websites">
            {promises.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-5"
                style={{ border: '1px solid rgba(168,142,247,0.12)', background: '#16131F' }}
              >
                <p className="flex items-start gap-3 font-medium" style={{ color: '#ECEAF3' }}>
                  <span style={{ marginTop: 2, color: '#A855F7' }} aria-hidden="true">✓</span>
                  <span>{item}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="section-container pb-16 sm:pb-20" aria-labelledby="ueber-uns-cta-heading">
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 100%)',
              border: '1px solid rgba(168,142,247,0.2)'
            }}
          >
            <h2 id="ueber-uns-cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
              Klingt das nach der richtigen Zusammenarbeit?
            </h2>
            <p className="mt-4 max-w-3xl" style={{ color: '#9690A8' }}>
              Schauen Sie sich unsere Referenzen an oder starten Sie direkt mit einer kostenlosen Demo.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">Kostenlose Demo starten</Link>
              <Link href="/referenzen" className="secondary-btn">Referenzen ansehen</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
