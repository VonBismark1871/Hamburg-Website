import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website-Visitenkarte', priceFromEur: 400 },
  { name: 'Onepager', priceFromEur: 650 },
  { name: 'Mehrseitige Website', priceFromEur: 1000 }
];

const processSteps = [
  { title: 'Anfrage', text: 'Kurze Infos zu Ihrem Unternehmen und Ihrem Ziel.' },
  { title: 'Demo', text: 'Sie erhalten eine kostenlose Vorschau als erste Richtung.' },
  { title: 'Abstimmung', text: 'Wir schärfen Inhalte, Struktur und Design gemeinsam.' },
  { title: 'Livegang', text: 'Nach Freigabe veröffentlichen wir Ihre Website.' }
];

const pricingPreview = [
  { title: 'Demo-Vorschau', price: '0 €', text: 'Unverbindlicher erster Entwurf.' },
  { title: 'Onepager', price: 'ab 650 €', text: 'Klar strukturierte Website auf einer Seite.', featured: true },
  { title: 'Mehrseitige Website', price: 'ab 1.000 €', text: 'Für Unternehmen mit mehreren Inhalten.' }
];

const homepageFaqPreview = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'In vielen Fällen kann eine erste Version innerhalb weniger Tage erstellt werden. Der genaue Zeitrahmen hängt vom Umfang des Projekts ab.'
  },
  {
    question: 'Ist die erste Demo wirklich kostenlos?',
    answer:
      'Ja. Eine erste Demo zeigt, wie Struktur und Design Ihrer Website aussehen könnten, bevor eine vollständige Umsetzung beauftragt wird.'
  },
  {
    question: 'Kann eine bestehende Website überarbeitet werden?',
    answer:
      'Ja. Bestehende Websites können modernisiert, strukturell verbessert oder technisch neu umgesetzt werden.'
  },
  {
    question: 'Übernehmen Sie auch Hosting oder Pflege?',
    answer:
      'Auf Wunsch können Hosting sowie kleinere inhaltliche Anpassungen im Rahmen einer laufenden Websitepflege übernommen werden.'
  }
];

const introTags = ['Dienstleister', 'Praxen', 'Studios', 'Lokale Unternehmen', 'Kleine Betriebe'];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Hamburg Websites"
        description="Hamburg Websites – Moderne Webseiten für Hamburger Unternehmen mit klarer Struktur, lokaler SEO-Basis und überzeugender Nutzerführung."
        path="/"
        schema={[organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />

        <section className="section-container pb-16 pt-14 lg:pb-20 lg:pt-16" aria-labelledby="local-business-heading">
          <div className="section-intro">
            <p className="section-label">Leistungen</p>
            <h2 id="local-business-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              Für Unternehmen in Hamburg
            </h2>
            <p className="mt-5 max-w-[720px] text-lg leading-[1.6] text-[color:var(--color-ink-2)]">
              Wir entwickeln moderne Websites für lokale Unternehmen, die online professionell auftreten und neue Kunden
              erreichen möchten.
            </p>
            <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Geeignet für folgende Unternehmenstypen">
              {introTags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex h-8 items-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] px-3.5 text-xs font-medium text-[rgba(21,21,21,0.62)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Features />

        <section className="section-container pb-10 pt-16 lg:pt-24" aria-labelledby="references-intro-heading">
          <div className="section-intro">
            <p className="section-label">Referenzen</p>
            <h2 id="references-intro-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              Beispiele moderner Unternehmenswebsites
            </h2>
            <p className="mt-5 text-lg leading-[1.6] text-[color:var(--color-ink-2)]">
              Die folgenden Beispiele zeigen, wie eine strukturierte und moderne Website für verschiedene Unternehmen
              aussehen kann.
            </p>
          </div>
        </section>

        <Portfolio />

        <section className="section-container section-spacing-sm" aria-labelledby="process-preview-heading">
          <div className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card)] p-8 shadow-[0_10px_30px_rgba(20,20,20,0.04)] lg:p-8">
            <p className="section-label">Ablauf</p>
            <h2 id="process-preview-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              So läuft die Zusammenarbeit ab
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="relative rounded-[20px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(21,21,21,0.5)]">{`0${index + 1}`}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-ink)]">{step.title}</h3>
                  <p className="mt-2.5 text-base leading-[1.6] text-[color:var(--color-ink-2)]">{step.text}</p>
                </li>
              ))}
            </ol>
            <Link href="/ablauf" className="mt-8 inline-flex text-[15px] font-semibold text-[color:var(--color-accent)] transition hover:text-[color:var(--color-accent-hover)]">
              Ablauf ansehen
            </Link>
          </div>
        </section>

        <section className="section-container section-spacing-sm" aria-labelledby="pricing-preview-heading">
          <div className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card)] p-8 shadow-[0_10px_30px_rgba(20,20,20,0.04)]">
            <p className="section-label">Preise</p>
            <h2 id="pricing-preview-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              Preise im Überblick
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pricingPreview.map((item) => (
                <article
                  key={item.title}
                  className={`min-h-[180px] rounded-[20px] border p-7 ${
                    item.featured
                      ? 'border-[rgba(45,91,255,0.28)] bg-[rgba(45,91,255,0.06)]'
                      : 'border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)]'
                  }`}
                >
                  <h3 className="text-[18px] font-semibold text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-[48px] font-semibold leading-none tracking-[-0.02em] text-[color:var(--color-ink)]">{item.price}</p>
                  <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-ink-2)]">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-base text-[color:var(--color-ink-2)]">Weitere Pakete und laufende Betreuung auf der Preisübersicht.</p>
            <Link href="/preise" className="mt-6 inline-flex text-[15px] font-semibold text-[color:var(--color-accent)] transition hover:text-[color:var(--color-accent-hover)]">
              Alle Preise ansehen
            </Link>
          </div>
        </section>

        <section className="section-container section-spacing-sm" aria-labelledby="faq-preview-heading">
          <div className="max-w-[760px]">
            <p className="section-label">FAQ</p>
            <h2 id="faq-preview-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              Häufige Fragen
            </h2>
            <div className="mt-8 divide-y divide-[color:var(--color-line)] rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-bg-card)] px-6">
              {homepageFaqPreview.map((item) => (
                <article key={item.question} className="py-6">
                  <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-ink)] sm:text-[28px]">{item.question}</h3>
                  <p className="mt-3 text-[17px] leading-[1.7] text-[color:var(--color-ink-2)]">{item.answer}</p>
                </article>
              ))}
            </div>
            <Link href="/faq" className="mt-7 inline-flex text-[15px] font-semibold text-[color:var(--color-accent)] transition hover:text-[color:var(--color-accent-hover)]">
              Alle Fragen ansehen
            </Link>
          </div>
        </section>

        <section className="section-container pt-6" aria-labelledby="final-bridge-heading">
          <div className="section-intro">
            <p className="section-label">Zusammenarbeit</p>
            <h2 id="final-bridge-heading" className="mt-4 text-[40px] leading-[1.05] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[52px]">
              Klarer Ablauf, nachvollziehbare Preise
            </h2>
            <p className="mt-5 text-lg leading-[1.6] text-[color:var(--color-ink-2)]">
              Von der ersten Demo bis zur veröffentlichten Website bleibt jeder Schritt transparent und übersichtlich.
            </p>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="final-cta-heading">
          <div className="section-dark rounded-[28px] border border-white/10 px-10 pb-11 pt-10 text-white">
            <h2 id="final-cta-heading" className="max-w-[620px] text-[38px] leading-[1.05] tracking-[-0.015em] text-white sm:text-[48px]">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-5 max-w-[620px] text-lg leading-[1.55] text-[rgba(255,255,255,0.82)] sm:text-xl">
              Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="inline-flex h-14 items-center rounded-full border border-white bg-white px-7 text-[15px] font-semibold text-[color:var(--color-ink)] transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.92)]">
                Projekt anfragen
              </Link>
              <Link href="/preise" className="inline-flex h-14 items-center rounded-full border border-white/25 bg-transparent px-7 text-[15px] font-medium text-[rgba(255,255,255,0.88)] transition duration-200 ease-out hover:-translate-y-[1px] hover:border-white/45 hover:text-white">
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
