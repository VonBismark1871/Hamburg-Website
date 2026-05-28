import FAQ, { faqItems } from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Reveal from '../components/ui/Reveal';
import { faqSchema } from '../lib/seo';

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title="FAQ – Website-Projekte in Hamburg"
        description="Antworten auf häufige Fragen zur Website-Erstellung in Hamburg: Dauer, Kosten, Hosting, Ablauf und was nach dem Livegang passiert."
        path="/faq"
        schema={faqSchema(faqItems)}
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="faq-page-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <p className="section-label">FAQ</p>
            <AnimatedText as="h1" text="Häufige Fragen zur Website-Erstellung" className="display-xl max-w-4xl" />
            <Reveal delay={0.2}>
              <p className="lead mt-6 max-w-3xl">
                Kompakte Antworten zu typischen Fragen rund um Planung, Umsetzung und Betrieb Ihrer neuen
                Unternehmenswebsite.
              </p>
            </Reveal>
          </div>
        </section>

        <FAQ headingTag="h2" sectionId="faq-content" items={faqItems} />
      </main>
      <Footer />
    </>
  );
}
