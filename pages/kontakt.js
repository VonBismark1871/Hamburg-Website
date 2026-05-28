import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../lib/seo';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Reveal from '../components/ui/Reveal';

export default function KontaktPage() {
  return (
    <>
      <SEOHead
        title="Kontakt – Projekt anfragen"
        description="Kontaktieren Sie Hamburg Websites für eine kostenlose Demo-Richtung und ein unverbindliches Erstgespräch zu Umfang, Stil und Budget."
        path="/kontakt"
        schema={[
          { '@context': 'https://schema.org', '@type': 'ContactPage', url: 'https://hamburgwebsites.de/kontakt', name: 'Kontakt', inLanguage: 'de-DE' },
          breadcrumbSchema([{ name: 'Startseite', path: '/' }, { name: 'Kontakt', path: '/kontakt' }])
        ]}
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="kontakt-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <p className="section-label">Kontakt</p>
            <AnimatedText as="h1" text="Lassen Sie uns Ihr Projekt besprechen" className="display-xl max-w-4xl" />
            <Reveal delay={0.2}>
              <p className="lead mt-6 max-w-3xl">
                Nutzen Sie das Formular für Ihre Anfrage. Sie erhalten zeitnah einen konkreten Vorschlag für den
                nächsten Schritt – in der Regel innerhalb von 24 Stunden.
              </p>
            </Reveal>
          </div>
        </section>

        <Contact headingTag="h2" title="Kostenlose Demo anfragen" />

        <section className="section-container pb-20" aria-labelledby="kontakt-links-heading">
          <Reveal>
            <p className="section-label">Weitere Links</p>
            <h2 id="kontakt-links-heading" className="font-display text-2xl font-bold" style={{ color: 'var(--text)' }}>
              Weitere Informationen
            </h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/faq" className="secondary-btn">FAQ lesen</Link>
              <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
