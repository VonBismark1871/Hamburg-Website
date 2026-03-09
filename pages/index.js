import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { serviceSchema } from '../lib/seo';

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

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Hamburg Websites"
        description="Hamburg Websites – Moderne Webseiten für Hamburger Unternehmen mit klarer Struktur, lokaler SEO-Basis und überzeugender Nutzerführung."
        path="/"
        schema={[serviceSchema()]}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />

        <section className="section-container section-spacing" aria-labelledby="process-preview-heading">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <h2 id="process-preview-heading" className="text-3xl font-bold text-slateBlue">
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
            <h2 id="pricing-preview-heading" className="text-3xl font-bold text-slateBlue">
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

        <section className="section-container section-spacing pt-2" aria-labelledby="final-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="final-cta-heading" className="text-3xl font-bold text-slateBlue">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
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
