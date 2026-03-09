import Link from 'next/link';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ, { faqItems } from '../components/FAQ';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { faqSchema, serviceSchema } from '../lib/seo';

const relatedLinks = [
  { href: '/preise', label: 'Website-Pakete & Preise' },
  { href: '/faq', label: 'Alle Fragen ansehen' },
  { href: '/kontakt', label: 'Kontaktaufnahme' }
];


export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Hamburg Websites"
        description="Hamburg Websites – Moderne Webseiten für Hamburger Unternehmen mit klarer Struktur, lokaler SEO-Basis und überzeugender Nutzerführung."
        path="/"
        schema={[serviceSchema(), faqSchema(faqItems)]}
      />
      <Header />
      <main>
        <Hero />

        <section className="section-container section-spacing pb-8" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-3xl font-bold text-slateBlue">
            Webdesign & Webentwicklung in Hamburg für lokale Unternehmen
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
            Wir unterstützen Unternehmen in Hamburg bei der Erstellung schneller, mobil optimierter Webseiten mit
            klarer Struktur. Ziel ist eine professionelle Online-Präsenz, die Vertrauen schafft, bei Google indexierbar
            bleibt und Besucher zuverlässig in qualifizierte Anfragen überführt.
          </p>
        </section>

        <Features />
        <Portfolio />
        <Process />

        <Pricing cta={{ href: '/preise', label: 'Alle Pakete im Detail ansehen' }} />

        <AboutSection cta={{ href: '/ueber-uns', label: 'Mehr über Hamburg Websites' }} />

        <FAQ items={faqItems} />

        <section className="section-container pb-16" aria-labelledby="internal-links-heading">
          <h2 id="internal-links-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
            Weitere wichtige Inhalte
          </h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-accent underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
