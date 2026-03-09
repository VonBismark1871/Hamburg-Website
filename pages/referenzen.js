import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const projects = [
  {
    title: 'Restaurant Website Demo',
    description:
      'Modernes Webdesign für Gastronomiebetriebe mit klarer Struktur, Online-Reservierung und mobil optimierter Darstellung.',
    image: '/demo-images/restaurant.svg'
  },
  {
    title: 'Friseursalon Website Demo',
    description:
      'Elegantes Website-Beispiel für moderne Friseursalons mit Leistungsbereich, Teamsektion und Termin-CTA.',
    image: '/demo-images/barbershop.svg'
  },
  {
    title: 'Auto Service Website',
    description:
      'Klare Website-Struktur für Werkstätten mit Leistungsübersicht, Kontaktmöglichkeiten und lokaler Auffindbarkeit.',
    image: '/demo-images/local-service.svg'
  }
];

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Referenzen – Hamburg Websites"
        description="Beispiele moderner Websites für Restaurants, Barbershops, Praxen, Werkstätten, Immobilien und weitere Unternehmen."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-6" aria-labelledby="referenzen-heading">
          <h1 id="referenzen-heading" className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
            Referenzen und Beispiel-Websites
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Hier finden Sie Beispiele moderner Unternehmenswebsites, die zeigen, wie Design, Struktur und Nutzerführung in unterschiedlichen Branchen umgesetzt werden können.
          </p>
        </section>

        <section className="section-container pb-16" aria-labelledby="projekt-grid-heading">
          <h2 id="projekt-grid-heading" className="text-2xl font-bold text-slateBlue">
            Projektbeispiele
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="card overflow-hidden p-0">
                <Image src={project.image} alt={project.title} width={700} height={450} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slateBlue">{project.title}</h3>
                  <p className="mt-3 text-slate-600">{project.description}</p>
                  <Link
                    href={
                      project.title === 'Restaurant Website Demo'
                        ? '/referenzen/restaurant-demo'
                        : project.title === 'Friseursalon Website Demo'
                          ? '/referenzen/friseursalon-demo'
                          : '/kontakt'
                    }
                    className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
                  >
                    Demo ansehen
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="referenzen-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="referenzen-cta-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              Ihre Website könnte hier stehen
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Wir erstellen moderne Websites für lokale Unternehmen in Hamburg und Umgebung.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
