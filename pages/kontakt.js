import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

export default function KontaktPage() {
  return (
    <>
      <SEOHead title="Kontakt – Website erstellen lassen in Hamburg" description="Kontaktieren Sie Hamburg Websites für eine kostenlose Demo-Webseite und ein unverbindliches Erstgespräch zur Website-Erstellung in Hamburg." path="/kontakt" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="kontakt-heading"><div className="section-container reveal-section"><h1 id="kontakt-heading" className="text-5xl"><span className="gradient-text">Kontakt</span> – Website erstellen lassen in Hamburg</h1></div></section>
        <Contact headingTag="h2" title="Schreiben Sie uns Ihr Website-Projekt" />
      </main>
      <Footer />
    </>
  );
}
