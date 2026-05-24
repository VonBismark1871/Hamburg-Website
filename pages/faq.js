import FAQ, { faqItems } from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { faqSchema } from '../lib/seo';

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title="FAQ – Website-Projekte in Hamburg"
        description="Antworten auf häufige Fragen zur Website-Erstellung in Hamburg: Dauer, Kosten, Hosting und Ablauf der Zusammenarbeit."
        path="/faq"
        schema={faqSchema(faqItems)}
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="faq-page-heading">
          <p className="section-label">FAQ</p>
          <h1
            id="faq-page-heading"
            className="text-4xl font-black tracking-tight sm:text-5xl"
            style={{ color: '#ECEAF3', letterSpacing: '-0.03em' }}
          >
            Häufig gestellte Fragen zur Website-Erstellung
          </h1>
          <p className="mt-5 max-w-3xl text-lg" style={{ color: '#9690A8' }}>
            Hier finden Sie kompakte Antworten zu typischen Fragen rund um Planung, Umsetzung und Betrieb Ihrer neuen
            Unternehmenswebsite.
          </p>
        </section>

        <FAQ headingTag="h2" sectionId="faq-content" items={faqItems} />
      </main>
      <Footer />
    </>
  );
}
