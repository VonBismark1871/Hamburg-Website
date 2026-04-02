import Footer from '../components/Footer';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import SEOHead from '../components/SEOHead';

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead title="Referenzen – Hamburg Websites" description="Beispiele moderner Websites für Restaurants, Friseursalons, Praxen, Werkstätten, Immobilien und weitere Unternehmen." path="/referenzen" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="referenzen-heading"><div className="section-container reveal-section"><h1 id="referenzen-heading" className="text-5xl"><span className="gradient-text">Referenzen</span> und Beispiel-Websites</h1><p className="mt-5 max-w-3xl text-lg">Diese Beispiele zeigen nicht nur Design, sondern vor allem klare Seitenstrukturen für konkrete Ziele wie Kontaktanfragen, Terminwünsche oder Leistungsanfragen.</p></div></section>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
