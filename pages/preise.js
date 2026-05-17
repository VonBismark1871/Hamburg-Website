import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';
import { serviceSchema } from '../lib/seo';

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
        description="Unsere transparenten Pakete für die Website-Erstellung in Hamburg – von der kostenlosen Demo bis zur Business-Webseite."
        path="/preise"
        schema={serviceSchema(serviceItems)}
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="preise-heading">
          <h1 id="preise-heading" className="text-4xl tracking-tight text-slateBlue sm:text-5xl">
            <span className="h1-accent-italic">Preise</span> für Website-Erstellung in Hamburg
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Unsere Pakete sind klar strukturiert, damit Sie Umfang, Abgrenzung und Investition sofort einordnen
            können.
          </p>
        </section>

        <Pricing headingTag="h2" sectionId="preise-pakete" />

        <section className="section-container pb-16" aria-label="Preise Aktionen">
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/kontakt" className="primary-btn">
              Unverbindlich anfragen
            </Link>
            <Link href="/faq" className="secondary-btn text-slateBlue">
              Fragen & Antworten lesen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
