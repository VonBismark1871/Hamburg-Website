import Link from 'next/link';
import FAQ, { faqItems } from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { faqSchema } from '../lib/seo';

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title="FAQ – Website erstellen lassen in Hamburg"
        description="Antworten auf häufige Fragen zur Website-Erstellung in Hamburg: Dauer, Kosten, Hosting und Ablauf der Zusammenarbeit."
        path="/faq"
        schema={faqSchema(faqItems)}
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="faq-page-heading">
          <h1 id="faq-page-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Häufig gestellte Fragen zur Website-Erstellung
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Hier finden Sie kompakte Antworten zu typischen Fragen rund um Planung, Umsetzung und Betrieb Ihrer neuen
            Unternehmenswebsite.
          </p>
        </section>

        <FAQ headingTag="h2" sectionId="faq-content" items={faqItems} />

        <section className="section-container pb-16" aria-labelledby="faq-next-heading">
          <h2 id="faq-next-heading" className="text-2xl font-bold text-slateBlue">
            Nächster Schritt
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Wenn Ihre Frage hier nicht dabei ist, können Sie uns direkt schreiben. Wir melden uns mit einer klaren,
            verständlichen Empfehlung für Ihr Projekt.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
              Kontakt aufnehmen
            </Link>
            <Link href="/preise" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
              Preise ansehen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
