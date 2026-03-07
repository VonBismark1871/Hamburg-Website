import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ, { faqItems } from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { faqSchema, serviceSchema } from '../lib/seo';

const relatedLinks = [
  { href: '/#portfolio', label: 'Demo-Webseiten Beispiele' },
  { href: '/#pricing', label: 'Website-Pakete & Preise' },
  { href: '/#contact', label: 'Kostenlose Erstberatung' }
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Webentwickler Hamburg für moderne Unternehmenswebsites"
        description="Freiberuflicher Webentwickler aus Hamburg. Mobile-First Webseiten, lokale SEO-Struktur und klare Conversion-Elemente für mehr Anfragen."
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
            Ich unterstütze Selbstständige und kleine Unternehmen in Hamburg bei der Erstellung von schnellen,
            mobil optimierten Webseiten mit klarer Struktur. Ziel ist eine professionelle Online-Präsenz, die
            Vertrauen aufbaut, bei Google indexierbar ist und Besucher zuverlässig zu Anfragen führt.
          </p>
        </section>

        <Features />
        <Portfolio />
        <Process />

        <section className="section-container pb-16" aria-labelledby="service-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 id="service-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              So ist jede Website für SEO und Nutzerführung aufgebaut
            </h2>
            <div className="mt-6 grid gap-4 text-slate-600 sm:grid-cols-2">
              <p>
                Jede Seite erhält eine klare H1-Struktur, thematische Abschnitte, interne Links und eine
                mobilfreundliche Darstellung. Dadurch bleiben Inhalte auf allen Geräten lesbar und crawlbar.
              </p>
              <p>
                Zusätzlich integriere ich Conversion-Bausteine wie Vertrauenssignale, strukturierte Leistungen,
                Handlungsaufforderungen und FAQ-Blöcke, damit Besucher schneller Entscheidungen treffen können.
              </p>
            </div>
          </div>
        </section>

        <Pricing />

        <section className="section-container pb-16" aria-labelledby="trust-heading">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-3">
            <div>
              <h2 id="trust-heading" className="text-xl font-semibold text-slateBlue">
                Warum Unternehmen mir vertrauen
              </h2>
              <p className="mt-3 text-slate-600">Direkte Kommunikation, transparente Schritte und klare Ergebnisse.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slateBlue">Klare Projektstruktur</h3>
              <p className="mt-2 text-slate-600">Von der Seitenstruktur bis zur Live-Schaltung erhältst du einen nachvollziehbaren Ablauf.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slateBlue">Fokus auf lokale Sichtbarkeit</h3>
              <p className="mt-2 text-slate-600">Inhalte und Seitentitel werden auf relevante Suchanfragen in Hamburg abgestimmt.</p>
            </div>
          </div>
        </section>

        <FAQ />

        <section className="section-container pb-16" aria-labelledby="internal-links-heading">
          <h2 id="internal-links-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
            Weitere wichtige Inhalte
          </h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-medium text-accent underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
