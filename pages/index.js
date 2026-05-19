import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import KlareAnsprueche from '../components/KlareAnsprueche';
import { localBusinessSchema, organizationSchema, serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website-Visitenkarte', priceFromEur: 400 },
  { name: 'Onepager', priceFromEur: 650 },
  { name: 'Mehrseitige Website', priceFromEur: 1000 }
];

const processSteps = [
  { 
    title: 'Anfrage', 
    text: 'Sie schicken kurz Branche, Ziel und vorhandene Website oder Idee.',
    icon: 'message'
  },
  { 
    title: 'Demo', 
    text: 'Sie erhalten eine erste visuelle Richtung statt einer abstrakten Agenturpräsentation.',
    icon: 'eye'
  },
  { 
    title: 'Schärfung', 
    text: 'Struktur, Texte, Bilder und Kontaktpunkte werden gemeinsam verdichtet.',
    icon: 'edit'
  },
  { 
    title: 'Livegang', 
    text: 'Nach Freigabe geht die Website online und bleibt sauber erweiterbar.',
    icon: 'rocket'
  }
];

const pricingPreview = [
  { 
    title: 'Demo-Vorschau', 
    price: '0 €', 
    text: 'Unverbindlicher erster Entwurf für die Richtung.',
    featured: false
  },
  { 
    title: 'Onepager', 
    price: 'ab 650 €', 
    text: 'Kompakte Website mit starker Startseite und klarer Anfrageführung.',
    featured: true
  },
  { 
    title: 'Mehrseitige Website', 
    price: 'ab 1.000 €', 
    text: 'Für Unternehmen mit Leistungen, Referenzen, FAQ und Unterseiten.',
    featured: false
  }
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

function ProcessIcon({ type }) {
  const icons = {
    message: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />,
    eye: <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />,
    edit: <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />,
    rocket: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  };
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icons[type]}
    </svg>
  );
}

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
        <KlareAnsprueche />
        <Portfolio />

        {/* Process Section */}
        <section className="process-band section-spacing" aria-labelledby="process-preview-heading">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="section-label text-accent">Ablauf</p>
              <h2 id="process-preview-heading" className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Von der ersten Idee zur Website <span className="text-accent">ohne Agentur-Nebel.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
                Der Prozess bleibt bewusst kurz, sichtbar und nachvollziehbar. Sie sehen früh, wohin die Reise geht.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="process-step group">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent transition group-hover:bg-accent group-hover:text-bg-dark">
                      <ProcessIcon type={step.icon} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                      Schritt {index + 1}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{step.text}</p>
                </article>
              ))}
            </div>

            <Link 
              href="/ablauf" 
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              <span>Ablauf im Detail ansehen</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="section-container section-spacing" aria-labelledby="pricing-preview-heading">
          <div className="max-w-3xl">
            <p className="section-label">Preise</p>
            <h2 id="pricing-preview-heading" className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Transparente Einstiegspunkte für kleine und größere Vorhaben.
            </h2>
          </div>
          
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingPreview.map((item) => (
              <article 
                key={item.title} 
                className={`price-preview-card ${item.featured ? 'ring-2 ring-accent ring-offset-2' : ''}`}
              >
                {item.featured && (
                  <span className="mb-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    Beliebt
                  </span>
                )}
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className={`mt-4 text-3xl font-bold ${item.featured ? 'text-accent' : 'text-ink'}`}>
                  {item.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
              </article>
            ))}
          </div>
          
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/preise" className="primary-btn">
              Alle Preise ansehen
            </Link>
            <p className="text-sm text-ink-muted">Weitere Pakete und laufende Betreuung auf Anfrage.</p>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="bg-bg-muted section-spacing" aria-labelledby="faq-preview-heading">
          <div className="section-container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-label">FAQ</p>
                <h2 id="faq-preview-heading" className="text-3xl leading-tight text-ink sm:text-4xl">
                  Fragen, die vor dem Start wichtig sind.
                </h2>
                <Link 
                  href="/faq" 
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  <span>Alle Fragen ansehen</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                {homepageFaqPreview.map((item) => (
                  <article key={item.question} className="rounded-xl bg-bg-card border border-line p-5 transition hover:border-accent/30 hover:shadow-soft">
                    <h3 className="text-base font-semibold text-ink">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-container section-spacing" aria-labelledby="final-cta-heading">
          <div className="final-cta">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 id="final-cta-heading" className="max-w-2xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Bereit für eine Website, die zu Angebot, Stil und Budget passt?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
                  Fordern Sie eine kostenlose Demo-Vorschau an oder lassen Sie Ihr Projekt unverbindlich einschätzen.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/kontakt" className="primary-btn primary-btn-hero">
                  Projekt anfragen
                </Link>
                <Link href="/referenzen" className="secondary-btn secondary-btn-hero">
                  Referenzen ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
