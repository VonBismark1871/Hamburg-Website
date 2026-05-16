import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';
import { serviceSchema } from '../lib/seo';

const serviceItems = [
  { name: 'Starter Präsenz', priceFromEur: 400 },
  { name: 'Business Onepager', priceFromEur: 650 },
  { name: 'Studio Website', priceFromEur: 1000 }
];

export default function PreisePage() {
  return (
    <>
      <SEOHead
        title="Preise für Boutique-Websites in Hamburg"
        description="Transparente Website-Pakete für Hamburg: kostenlose Konzept-Vorschau, Starter-Präsenz, Business Onepager, Studio Website und CMS-Ausbau."
        path="/preise"
        schema={serviceSchema(serviceItems)}
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="preise-heading">
          <h1 id="preise-heading" className="text-4xl tracking-tight text-slate-950 sm:text-6xl">
            <span className="h1-accent-italic">Preise</span> für Boutique-Websites in Hamburg
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Schneller Einstieg, hochwertiger Auftritt und technische Qualität müssen sich nicht widersprechen. Die
            Pakete zeigen, welcher Umfang für welchen Start sinnvoll ist.
          </p>
        </section>

        <Pricing headingTag="h2" sectionId="preise-pakete" />

        <section className="section-container pb-16" aria-label="Preise Aktionen">
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn">
              Projekt einschätzen lassen
            </Link>
            <Link href="/faq" className="secondary-btn text-slate-950">
              Fragen & Antworten lesen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
