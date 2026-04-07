import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';

export default function PreisePage() {
  return (
    <>
      <SEOHead title="Preise für Website-Erstellung in Hamburg" description="Unsere transparenten Pakete für die Website-Erstellung in Hamburg – von der kostenlosen Demo bis zur Business-Webseite." path="/preise" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="preise-heading"><div className="section-container reveal-section"><h1 id="preise-heading" className="text-5xl"><span className="gradient-text">Preise</span> für Website-Erstellung in Hamburg</h1><p className="mt-5 max-w-3xl text-lg">Unsere Pakete sind klar strukturiert, damit Sie Umfang, Abgrenzung und Investition sofort einordnen können.</p></div></section>
        <Pricing />
        <div className="section-container pb-24"><Link href="/kontakt" className="primary-btn">Unverbindlich anfragen</Link></div>
      </main>
      <Footer />
    </>
  );
}
