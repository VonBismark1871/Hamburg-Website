import { motion } from 'framer-motion';
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
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Häufig gestellte{' '}
                <span className="text-gradient">Fragen</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Hier finden Sie kompakte Antworten zu typischen Fragen rund um Planung, Umsetzung und Betrieb Ihrer neuen Unternehmenswebsite.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQ 
          headingTag="h2" 
          sectionId="faq-content" 
          items={faqItems}
          title="Alle Fragen im Überblick"
          intro="Von der ersten Idee bis zur fertigen Website – wir beantworten Ihre wichtigsten Fragen."
        />
      </main>
      <Footer />
    </>
  );
}
