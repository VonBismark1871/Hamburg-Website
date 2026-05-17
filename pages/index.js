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

const standards = [
  {
    title: 'Klarer Anspruch',
    text: 'Jede Sektion bekommt eine Aufgabe: Vertrauen aufbauen, Leistung erklären oder Kontakt auslösen.'
  },
  {
    title: 'Starke Referenzen',
    text: 'Demos zeigen verschiedene Branchen, Budgets und Stilrichtungen statt nur eine einzige Website-Schablone.'
  },
  {
    title: 'Saubere Technik',
    text: 'Responsive Umsetzung, schnelle Ladezeiten und ein Fundament, das später nicht bei jeder Änderung bricht.'
  }
];

const processSteps = [
  { title: 'Anfrage', text: 'Sie schicken kurz Branche, Ziel und vorhandene Website oder Idee.' },
  { title: 'Demo', text: 'Sie erhalten eine erste visuelle Richtung statt einer abstrakten Agenturpräsentation.' },
  { title: 'Schärfung', text: 'Struktur, Texte, Bilder und Kontaktpunkte werden gemeinsam verdichtet.' },
  { title: 'Livegang', text: 'Nach Freigabe geht die Website online und bleibt sauber erweiterbar.' }
];

const pricingPreview = [
  { title: 'Demo-Vorschau', price: '0 €', text: 'Unverbindlicher erster Entwurf für die Richtung.' },
  { title: 'Onepager', price: 'ab 650 €', text: 'Kompakte Website mit starker Startseite und klarer Anfrageführung.' },
  { title: 'Mehrseitige Website', price: 'ab 1.000 €', text: 'Für Unternehmen mit Leistungen, Referenzen, FAQ und Unterseiten.' }
];

const homepageFaqPreview = [
  {
    question: 'Wie schnell sehe ich eine erste Richtung?',
    answer:
      'In vielen Fällen kann eine erste Demo kurzfristig vorbereitet werden. Der genaue Zeitrahmen hängt von Umfang und vorhandenen Inhalten ab.'
  },
  {
    question: 'Ist die Demo wirklich kostenlos?',
    answer:
      'Ja. Die Demo dient als konkrete Entscheidungsgrundlage, bevor aus der Idee ein vollständiges Website-Projekt wird.'
  },
  {
    question: 'Kann eine bestehende Website modernisiert werden?',
    answer:
      'Ja. Ein Relaunch kann Design, Struktur, Texte, Performance und Anfrageführung verbessern, ohne unnötig alles aufzublähen.'
  },
  {
    question: 'Passt das nur für Hamburg?',
    answer:
      'Der Fokus liegt auf Hamburg und lokalen Unternehmen. Die Struktur funktioniert aber auch für Unternehmen aus anderen Städten.'
  }
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Hamburg Websites"
        description="Hamburg Websites - moderne Webseiten für unterschiedliche Ziele, Budgets und Stilrichtungen mit klarer Struktur und überzeugender Nutzerführung."
        path="/"
        schema={[organizationSchema(), localBusinessSchema(), serviceSchema(serviceItems)]}
      />
      <Header />
      <main>
        <Hero />
        <Features />

        <section className="section-container section-spacing" aria-labelledby="standards-heading">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-label">Klare Ansprüche</p>
              <h2 id="standards-heading" className="text-3xl leading-tight text-slate-950 sm:text-5xl">
                Modern heißt nicht immer groß. Modern heißt passend, verständlich und erweiterbar.
              </h2>
            </div>
            <div className="grid gap-4">
              {standards.map((item, index) => (
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

        <Portfolio />

        <section className="process-band section-spacing" aria-labelledby="process-preview-heading">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="section-label text-white/50">Ablauf</p>
              <h2 id="process-preview-heading" className="text-3xl leading-tight text-white sm:text-5xl">
                Von der ersten Idee zur Website ohne Agentur-Nebel.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Der Prozess bleibt bewusst kurz, sichtbar und nachvollziehbar. Sie sehen früh, wohin die Reise geht.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="process-step">
                  <p className="text-xs font-semibold uppercase text-cyan-200">Schritt {index + 1}</p>
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
              Transparente Einstiegspunkte für kleine und größere Vorhaben.
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
            <p className="text-sm text-slate-500">Weitere Pakete und laufende Betreuung auf Anfrage.</p>
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
              <h2 id="final-cta-heading" className="max-w-2xl text-3xl leading-tight text-white sm:text-5xl">
              Bereit für eine Website, die zu Angebot, Stil und Budget passt?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
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
