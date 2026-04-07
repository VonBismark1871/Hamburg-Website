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
  { title: 'Onepager', price: 'ab 650 €', text: 'Klar strukturierte Website auf einer Seite.' },
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
  },
  {
    question: 'Wie läuft ein typisches Projekt ab?',
    answer:
      'Der Ablauf umfasst in der Regel eine Anfrage, eine Demo-Vorschau, eine kurze Abstimmung und anschließend die Umsetzung der Website.'
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

        <section className="section-container pt-6" aria-labelledby="local-business-heading">
          <div className="max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="section-label">Leistungen</p>
            <h2 id="local-business-heading" className="text-2xl text-slateBlue sm:text-3xl">
              Für Unternehmen in Hamburg
            </h2>
            <p className="mt-3 text-slate-600">
              Wir entwickeln moderne Websites für lokale Unternehmen, die online professionell auftreten und neue Kunden
              erreichen möchten.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Geeignet für folgende Unternehmenstypen">
              {introTags.map((tag) => (
                <li key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Features />

        <section className="section-container pt-2" aria-labelledby="references-intro-heading">
          <div className="max-w-3xl">
            <p className="section-label">Referenzen</p>
            <h2 id="references-intro-heading" className="text-2xl text-slateBlue sm:text-3xl">
              Beispiele moderner Unternehmenswebsites
            </h2>
            <p className="mt-3 text-slate-600">
              Die folgenden Beispiele zeigen, wie eine strukturierte und moderne Website für verschiedene Unternehmen
              aussehen kann.
            </p>
          </div>
        </section>

        <Portfolio />

        <section className="section-container section-spacing" aria-labelledby="process-preview-heading">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <p className="section-label">Ablauf</p>
            <h2 id="process-preview-heading" className="text-3xl text-slateBlue">
              So läuft die Zusammenarbeit ab
            </h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Schritt {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slateBlue">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/ablauf"
              className="mt-6 inline-flex text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
            >
              Ablauf ansehen
            </Link>
          </div>
        </section>

        <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <p className="section-label">Preise</p>
            <h2 id="pricing-preview-heading" className="text-3xl text-slateBlue">
              Preise im Überblick
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pricingPreview.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <h3 className="text-lg font-semibold text-slateBlue">{item.title}</h3>
                  <p className="mt-3 text-3xl font-bold text-slateBlue">{item.price}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">Weitere Pakete und laufende Betreuung auf der Preisübersicht.</p>
            <Link
              href="/preise"
              className="mt-5 inline-flex text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
            >
              Alle Preise ansehen
            </Link>
          </div>
        </section>

        <section className="section-container section-spacing pt-2" aria-labelledby="faq-preview-heading">
          <div className="max-w-4xl">
            <p className="section-label">FAQ</p>
            <h2 id="faq-preview-heading" className="text-2xl text-slateBlue sm:text-3xl">
              Häufige Fragen
            </h2>
            <div className="mt-6 space-y-4">
              {homepageFaqPreview.map((item) => (
                <article key={item.question} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-base font-semibold text-slateBlue">{item.question}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
            <Link
              href="/faq"
              className="mt-6 inline-flex text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
            >
              Alle Fragen ansehen
            </Link>
          </div>
        </section>

        <section className="section-container pt-2" aria-labelledby="final-bridge-heading">
          <div className="max-w-3xl">
            <p className="section-label">Zusammenarbeit</p>
            <h2 id="final-bridge-heading" className="text-2xl text-slateBlue sm:text-3xl">
              Klarer Ablauf, nachvollziehbare Preise
            </h2>
            <p className="mt-3 text-slate-600">
              Von der ersten Demo bis zur veröffentlichten Website bleibt jeder Schritt transparent und übersichtlich.
            </p>
          </div>
        </section>

        <section className="section-container section-spacing pt-2" aria-labelledby="final-cta-heading">
          <div className="section-dark rounded-2xl border border-slate-800 p-8 text-white sm:p-10">
            <h2 id="final-cta-heading" className="text-3xl text-white">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="secondary-btn text-white"
              >
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
