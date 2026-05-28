import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Reveal from '../components/ui/Reveal';
import { serviceSchema, breadcrumbSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Website-Visitenkarte', priceFromEur: 400 },
  { name: 'Onepager', priceFromEur: 650 },
  { name: 'Mehrseitige Website', priceFromEur: 1000 }
];

export default function PreisePage() {
  return (
    <>
      <SEOHead
        title="Preise für Website-Erstellung in Hamburg"
        description="Transparente Pakete für die Website-Erstellung in Hamburg: Onepager ab 400 €, Business-Websites ab 800 €. Kostenlose Demo vor Bezahlung, faire Festpreise."
        path="/preise"
        schema={[serviceSchema(serviceItems), breadcrumbSchema([{ name: 'Startseite', path: '/' }, { name: 'Preise', path: '/preise' }])]}
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="preise-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <p className="section-label">Preise</p>
            <AnimatedText as="h1" text="Transparente Preise für jedes Projekt" className="display-xl max-w-4xl" />
            <Reveal delay={0.2}>
              <p className="lead mt-6 max-w-3xl">
                Klar strukturierte Pakete, damit Sie Umfang, Abgrenzung und Investition sofort einordnen können –
                und jedes Projekt startet mit einer kostenlosen Demo.
              </p>
            </Reveal>
          </div>
        </section>

        <Pricing headingTag="h2" sectionId="preise-pakete" />

        <section className="section-container pb-20" aria-label="Preise Aktionen">
          <Reveal className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn"><span>Unverbindlich anfragen</span></Link>
            <Link href="/faq" className="secondary-btn">Fragen &amp; Antworten lesen</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
