import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Starter Präsenz', priceFromEur: 400 },
  { name: 'Business Onepager', priceFromEur: 650 },
  { name: 'Studio Website', priceFromEur: 1000 }
];

const technicalStandards = [
  {
    title: 'Performance',
    text: 'Schlanke Seiten, statische Auslieferung und bewusste Bildgrößen statt unnötiger Plugin-Last.'
  },
  {
    title: 'SEO Grundlage',
    text: 'Saubere Titles, Descriptions, Canonicals, lokale Struktur und klare Überschriften von Anfang an.'
  },
  {
    title: 'Wartbarkeit',
    text: 'Wiederverwendbare Komponenten und klare Inhaltsbereiche, damit spätere Änderungen nicht chaotisch werden.'
  }
];

const processSteps = [
  { title: 'Anfrage', text: 'Branche, Ziel, bestehende Website und gewünschter Start werden kurz eingeordnet.' },
  { title: 'Konzept', text: 'Sie erhalten eine kostenlose Richtung für Stil, Struktur und sinnvollen Umfang.' },
  { title: 'Ausbau', text: 'Design, Inhalte, SEO, Formular, Performance und responsive Verhalten werden sauber umgesetzt.' },
  { title: 'Livegang', text: 'Nach Freigabe geht die Website online und kann weiter gepflegt oder erweitert werden.' }
];

const pricingPreview = [
  { title: 'Konzept-Vorschau', price: '0 €', text: 'Erste Richtung für Stil, Struktur und Preisrange.' },
  { title: 'Business Onepager', price: 'ab 650 €', text: 'Hochwertige Einzelseite mit klarer Anfrageführung.' },
  { title: 'Studio Website', price: 'ab 1.000 €', text: 'Mehrseitiger Auftritt mit Struktur, SEO und Ausbaupotenzial.' }
];

const homepageFaqPreview = [
  {
    question: 'Ist die Konzept-Vorschau ein fertiger MVP?',
    answer:
      'Nein. Sie ist eine konkrete Entscheidungsgrundlage: visuelle Richtung, sinnvoller Umfang und Preisrange, bevor ein vollständiges Projekt startet.'
  },
  {
    question: 'Kann der Einstieg trotzdem günstig bleiben?',
    answer:
      'Ja. Starter und Onepager bleiben bewusst schlank. Der hochwertige Eindruck entsteht durch klare Struktur, gutes Design und saubere Umsetzung.'
  },
  {
    question: 'Was unterscheidet das von einem Baukasten?',
    answer:
      'Die Website wird nicht aus generischen Sektionen zusammengesetzt. Angebot, Nutzerführung, technische Struktur und spätere Pflege werden projektbezogen gedacht.'
  },
  {
    question: 'Übernehmen Sie auch Pflege und Hosting?',
    answer:
      'Auf Wunsch können Hosting, technische Betreuung und kleinere laufende Inhaltsänderungen in einem Pflegepaket übernommen werden.'
  }
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Hamburg Websites"
        description="Hamburg Websites erstellt hochwertige, schnelle und SEO-fähige Websites für lokale Unternehmen in Hamburg - von kostenloser Konzept-Vorschau bis mehrseitiger Studio-Website."
        path="/"
        schema={[organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />
        <Features />

        <Portfolio />

        <section className="section-container section-spacing" aria-labelledby="technical-heading">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-label">Technischer Standard</p>
              <h2 id="technical-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
                Premium darf nicht nur im Screenshot gut aussehen.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Ein professioneller Webauftritt braucht auch unter der Oberfläche Ordnung: Ladezeit, SEO, klare
                Komponenten, saubere Formulare und eine Struktur, die später erweiterbar bleibt.
              </p>
            </div>
            <div className="grid gap-4">
              {technicalStandards.map((item, index) => (
                <article key={item.title} className="standard-row">
                  <span className="standard-index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-band section-spacing" aria-labelledby="process-preview-heading">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="section-label text-white/50">Ablauf</p>
              <h2 id="process-preview-heading" className="text-3xl leading-tight text-white sm:text-5xl">
                Kurzer Einstieg, klare Entscheidungen, sauberer Ausbau.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Der Prozess ist bewusst sichtbar. Sie sollen früh verstehen, was sinnvoll ist, was es kostet und wie die
                Website später weitergeführt werden kann.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="process-step">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Schritt {index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{step.text}</p>
                </li>
              ))}
            </ol>

            <Link href="/ablauf" className="mt-8 inline-flex text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">
              Ablauf ansehen
            </Link>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
          <div className="max-w-3xl">
            <p className="section-label">Preise</p>
            <h2 id="pricing-preview-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
              Transparente Einstiegspunkte ohne billigen Eindruck.
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {pricingPreview.map((item) => (
              <article key={item.title} className="price-preview-card">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-5 text-4xl font-semibold text-slate-950">{item.price}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/preise" className="primary-btn inline-flex">
              Alle Preise ansehen
            </Link>
            <p className="text-sm text-slate-500">Pflege, Hosting und individuelle Funktionen können ergänzt werden.</p>
          </div>
        </section>

        <section className="section-container section-spacing pt-4" aria-labelledby="faq-preview-heading">
          <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-label">FAQ</p>
              <h2 id="faq-preview-heading" className="text-3xl leading-tight text-slate-950 sm:text-4xl">
                Fragen, die vor dem Start wichtig sind.
              </h2>
              <Link href="/faq" className="mt-6 inline-flex text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
                Alle Fragen ansehen
              </Link>
            </div>
            <div className="divide-y divide-slate-950/10">
              {homepageFaqPreview.map((item) => (
                <article key={item.question} className="py-5 first:pt-0">
                  <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container section-spacing pt-4" aria-labelledby="final-cta-heading">
          <div className="final-cta">
            <div>
              <h2 id="final-cta-heading" className="max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
                Bereit für eine Website, die hochwertig wirkt und klar verkauft?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Fordern Sie eine kostenlose Konzept-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn primary-btn-hero">
                Projekt anfragen
              </Link>
              <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
