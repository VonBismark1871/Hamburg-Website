import { useEffect } from 'react';
import Link from 'next/link';
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
  {
    title: 'Volle Aufmerksamkeit',
    text: 'Ihr Projekt landet nicht in einer Warteschlange zwischen Großkunden.'
  },
  {
    title: 'Schnelle Entscheidungen',
    text: 'Keine internen Freigabeprozesse. Änderungen werden direkt umgesetzt.'
  },
  {
    title: 'Klare Verantwortung',
    text: 'Eine Person ist für Ihr Projekt verantwortlich — von Anfang bis Livegang.'
  },
  {
    title: 'Fairer Preis',
    text: 'Kein Agenturaufschlag. Sie zahlen für die Leistung, nicht für das Büro.'
  }
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
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll('[data-reveal-group]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );

    groups.forEach((group) => {
      const stagger = Number(group.getAttribute('data-stagger') || 0);
      const items = Array.from(group.querySelectorAll('[data-reveal-item]'));

      if (items.length === 0) {
        group.style.setProperty('--reveal-delay', '0ms');
        observer.observe(group);
        return;
      }

      items.forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${index * stagger}ms`);
        observer.observe(item);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Über uns – Hamburg Websites"
        description="Hamburg Websites ist ein spezialisiertes Webstudio für lokale Unternehmen — mit Fokus auf Struktur, Klarheit und messbare Ergebnisse."
        path="/ueber-uns"
      />
      <Header />
      <main>
        <section className="bg-slateBlue py-20 text-white sm:py-24" aria-labelledby="ueber-uns-hero-heading">
          <div className="section-container">
            <h1 id="ueber-uns-hero-heading" className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ein Studio. Ein Ansprechpartner. Klare Arbeit.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-slate-200 sm:text-lg">
              Hamburg Websites ist ein spezialisiertes Webstudio für lokale Unternehmen — mit dem Fokus auf das, was wirklich zählt: Struktur, Klarheit und messbare Ergebnisse.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-14 sm:py-16" data-reveal-group aria-labelledby="manifest-heading">
          <div className="section-container reveal-item" data-reveal-item>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Wofür wir stehen</p>
            <h2 id="manifest-heading" className="mt-4 max-w-5xl text-3xl font-serif text-slateBlue sm:text-4xl lg:text-5xl">
              Viele Websites sehen gut aus — aber führen niemanden zur Anfrage. Wir bauen Seiten, die{' '}
              <span className="text-accent">beides</span> können.
            </h2>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="arbeitsweise-heading">
          <h2 id="arbeitsweise-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
            Arbeitsweise
          </h2>
          <ol className="mt-10 space-y-7" data-reveal-group data-stagger="80">
            {principles.map((item) => (
              <li key={item.number} className="reveal-item rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7" data-reveal-item>
                <article className="grid gap-4 sm:grid-cols-[70px_minmax(0,1fr)] sm:gap-6">
                  <span className="text-6xl font-extrabold leading-none text-slate-200 sm:text-7xl" aria-hidden="true">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-slateBlue">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.text}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-container pb-16 sm:pb-20" aria-labelledby="studio-vorteile-heading">
          <h2 id="studio-vorteile-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
            Warum ein kleines Studio?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2" data-reveal-group data-stagger="70">
            {studioBenefits.map((item) => (
              <article key={item.title} className="reveal-item rounded-2xl border border-slate-200 bg-white p-6 shadow-soft" data-reveal-item>
                <h3 className="text-xl font-semibold text-slateBlue">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slateBlue py-16 text-white sm:py-20" aria-labelledby="einordnung-heading">
          <div className="section-container">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">Eine kurze Einordnung</p>
            <blockquote className="mt-5 max-w-4xl text-2xl italic text-slate-100 sm:text-3xl">
              Hamburg Websites ist kein Team von zwanzig Leuten — und das ist Absicht. Spezialisierung auf lokale Unternehmenswebsites bedeutet: kein Streuverlust, keine Projekte, die nicht passen.
            </blockquote>
            <p className="mt-6 text-sm text-slate-300">— Hamburg Websites, gegründet mit dem Fokus auf den Hamburger Mittelstand</p>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="zusagen-heading">
          <h2 id="zusagen-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
            Unsere Zusagen
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group data-stagger="60" aria-label="Zusagen von Hamburg Websites">
            {promises.map((item) => (
              <li key={item} className="reveal-item rounded-xl border border-slate-200 bg-white p-5 shadow-soft" data-reveal-item>
                <p className="flex items-start gap-3 font-medium text-slateBlue">
                  <span className="mt-[2px] text-accent" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-container pb-16 sm:pb-20" aria-labelledby="ueber-uns-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="ueber-uns-cta-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">
              Klingt das nach der richtigen Zusammenarbeit?
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Schauen Sie sich unsere Referenzen an oder starten Sie direkt mit einer kostenlosen Demo.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
                Kostenlose Demo starten
              </Link>
              <Link
                href="/referenzen"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
              >
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .reveal-item {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          transition-delay: var(--reveal-delay, 0ms);
        }

        .reveal-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
