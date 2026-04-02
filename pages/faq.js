import FAQ, { faqItems } from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function FaqPage() {
  return (
    <>
      <SEOHead title="FAQ – Website erstellen lassen in Hamburg" description="Antworten auf häufige Fragen zur Website-Erstellung in Hamburg: Dauer, Kosten, Hosting und Ablauf der Zusammenarbeit." path="/faq" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="faq-page-heading"><div className="section-container reveal-section"><h1 id="faq-page-heading" className="text-5xl"><span className="gradient-text">Häufig</span> gestellte Fragen zur Website-Erstellung</h1></div></section>
        <FAQ items={faqItems} />
      </main>
      <Footer />
    </>
  );
}
