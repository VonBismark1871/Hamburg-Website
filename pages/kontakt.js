import Link from 'next/link';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function KontaktPage() {
  return (
    <>
      <SEOHead
        title="Kontakt – Website-Projekt in Hamburg besprechen"
        description="Kontaktieren Sie Hamburg Websites für eine kostenlose Demo-Richtung und ein unverbindliches Erstgespräch zu Umfang, Stil und Budget."
        path="/kontakt"
      />
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Kontakt
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Lassen Sie uns Ihr{' '}
                <span className="text-gradient">Projekt besprechen</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Nutzen Sie das Formular für Ihre Anfrage. Wir melden uns zeitnah mit einem konkreten Vorschlag für den nächsten Schritt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact headingTag="h2" title="Schreiben Sie uns Ihr Website-Projekt" />

        {/* Additional Links Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Weitere Informationen
              </h2>
              <p className="text-muted mb-8 max-w-xl mx-auto">
                Bevor Sie uns kontaktieren, finden Sie vielleicht schon Antworten auf Ihre Fragen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/faq" 
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold text-foreground">FAQ lesen</span>
                    <span className="text-sm text-muted">Häufige Fragen</span>
                  </div>
                </Link>
                <Link 
                  href="/preise" 
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold text-foreground">Preise ansehen</span>
                    <span className="text-sm text-muted">Transparente Pakete</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
