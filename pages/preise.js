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
          <h1 id="preise-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Preise für Website-Erstellung in Hamburg
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Unsere Pakete sind klar strukturiert, damit Sie Umfang, Abgrenzung und Investition sofort einordnen
            können.
          </p>
        </section>

        <Pricing headingTag="h2" sectionId="preise-pakete" />

        <section className="section-container pb-16" aria-labelledby="preise-info-heading">
          <h2 id="preise-info-heading" className="text-2xl font-bold text-slateBlue">
            Was ist in jedem Paket enthalten?
          </h2>
          <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
            <p>
              Alle Pakete beinhalten eine mobil optimierte Umsetzung, eine klare Seitenstruktur und eine saubere
              technische Basis für gute Indexierbarkeit.
            </p>
            <p>
              Zusätzlich sehen Sie pro Paket klar, was inklusive ist, was nicht enthalten ist und welche
              Zusatzleistungen bei Bedarf ergänzt werden können.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
              Unverbindlich anfragen
            </Link>
            <Link href="/faq" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
              Fragen & Antworten lesen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
