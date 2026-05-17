import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import ReferenceCard from '../components/references/ReferenceCard';
import { referenceProjects } from '../data/references';

const toneClasses = {
  warm: 'from-amber-100 via-orange-50 to-amber-50',
  dark: 'from-stone-800 via-zinc-900 to-neutral-950',
  clean: 'from-cyan-50 via-sky-50 to-white',
  calm: 'from-emerald-50 via-teal-50 to-white',
  contrast: 'from-slate-200 via-white to-slate-100',
  premium: 'from-zinc-100 via-stone-50 to-white'
};

const portfolioSections = [
  {
    id: 'onepager',
    title: 'Kompakte Premium-Onepager',
    description:
      'Drei schnelle Einstiege, die trotzdem wie eigenständige Marken wirken: Restaurant, Salon und Zahnarztpraxis.',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo']
  },
  {
    id: 'multi-page',
    title: 'Mehrseitige Branchen-Systeme',
    description:
      'Drei komplexere Konzepte mit Inhaltslogik, Unterseiten, Objektlisten oder Service-Funnels: Physio, Werkstatt und Immobilien.',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo']
  }
];

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Konzept-Referenzen - Hamburg Websites"
        description="Sechs eigenständige Website-Konzepte für Restaurant, Salon, Zahnarztpraxis, Physiotherapie, Kfz-Service und Immobilien."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-10" aria-labelledby="referenzen-heading">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-label">Konzept-Galerie</p>
              <h1 id="referenzen-heading" className="max-w-4xl text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-7xl">
                Sechs Websites. Sechs Branchen. Keine austauschbaren Karten.
              </h1>
            </div>
            <div className="max-w-2xl lg:pb-2">
              <p className="text-lg leading-8 text-slate-600">
                Jeder Referenzbereich folgt einer eigenen Branchenlogik: andere Bildwelt, andere CTA-Priorität, andere
                Informationsarchitektur. Die Übersicht zeigt deshalb nicht dieselbe Browsergrafik sechsmal, sondern sechs
                eigenständige Projektstarts.
              </p>
              <p className="mt-5 rounded-2xl border border-slate-950/10 bg-white/80 p-5 text-sm leading-7 text-slate-600">
                Besonders wichtig: Bilder sind als passende Serien gedacht. Immobilien-Exposés nutzen pro Objekt eine
                konsistente Bildquelle, statt verschiedene Gebäude in einer Galerie zu mischen.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container pb-12" aria-label="Studio Kriterien">
          <div className="grid gap-4 md:grid-cols-3">
            {['Nischenspezifische UX', 'Eigene visuelle Sprache', 'Passende Bildserien'].map((item) => (
              <div key={item} className="proof-panel">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Redesign Standard</p>
                <p className="text-xl font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-container pb-20">
          {portfolioSections.map((section, index) => {
            const projects = section.projects
              .map((slug) => referenceProjects.find((project) => project.slug === slug))
              .filter(Boolean);

            return (
              <section key={section.id} aria-labelledby={`${section.id}-heading`} className={index === 0 ? '' : 'mt-20'}>
                <div className="mb-8 max-w-3xl">
                  <p className="section-label">{index === 0 ? 'Schneller Einstieg' : 'Mehr Tiefe'}</p>
                  <h2 id={`${section.id}-heading`} className="text-3xl text-slate-950 sm:text-5xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{section.description}</p>
                </div>
                <div className="grid gap-7 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ReferenceCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="section-container pb-16" aria-labelledby="referenzen-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="referenzen-cta-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              Nicht jede Website muss gleich groß sein.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Die Konzept-Vorschau zeigt früh, ob Stil, Struktur und Investition zusammenpassen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Projekt anfragen
              </Link>
              <Link href="/preise" className="secondary-btn text-slateBlue">
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
