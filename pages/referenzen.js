import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { referenceProjects } from '../data/references';

const portfolioSections = [
  {
    id: 'multi-page',
    title: 'Mehrseitige Studio-Konzepte',
    description:
      'Für Unternehmen mit erklärungsbedürftigen Leistungen, lokalen Landingpages, Objektseiten oder mehreren Kontaktwegen.',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo']
  },
  {
    id: 'onepager',
    title: 'Kompakte Premium-Onepager',
    description:
      'Für schnelle Markteintritte, Relaunches und kleinere Betriebe, die trotzdem hochwertig und klar wirken müssen.',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo']
  }
];

function ReferenceCard({ project }) {
  return (
    <article className="reference-card group">
      <Link href={`/referenzen/${project.slug}`} className="block" aria-label={`${project.title} ansehen`}>
        <div className="reference-card-image">
          <Image
            src={project.image}
            alt={`${project.title} Vorschau`}
            width={920}
            height={620}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </Link>
      <div className="reference-card-body">
        <div className="flex flex-wrap items-center gap-2">
          <span className="reference-format">{project.format}</span>
          <span className="reference-direction">{project.visualDirection}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

        <dl className="mt-5 grid gap-4 border-t border-slate-950/10 pt-5">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Ziel</dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">{project.conceptFocus}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">System</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.technicalFocus.slice(0, 3).map((item) => (
                <span key={item} className="reference-chip">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <Link href={`/referenzen/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-slate-950 underline-offset-4 hover:underline">
          Konzept ansehen
        </Link>
      </div>
    </article>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Konzept-Referenzen - Hamburg Websites"
        description="Demo-Konzepte moderner Websites für Restaurants, Salons, Praxen, Werkstätten, Immobilien und lokale Unternehmen."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-10" aria-labelledby="referenzen-heading">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 id="referenzen-heading" className="max-w-4xl text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-7xl">
                Konzept-Galerie für Websites, die nach Studio aussehen.
              </h1>
            </div>
            <div className="max-w-2xl lg:pb-2">
              <p className="text-lg leading-8 text-slate-600">
                Diese Arbeiten sind bewusst als Demo-Konzepte gekennzeichnet. Sie zeigen, wie Hamburg Websites Design,
                Nutzerführung, SEO-Struktur und technische Pflegefähigkeit für verschiedene Branchen denkt.
              </p>
              <p className="mt-5 rounded-2xl border border-slate-950/10 bg-white/80 p-5 text-sm leading-7 text-slate-600">
                Keine künstlichen Kundenlogos, keine erfundenen Erfolgszahlen. Stattdessen: konkrete Struktur, sichtbare
                Designrichtung und nachvollziehbare technische Entscheidungen.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container pb-12" aria-label="Studio Kriterien">
          <div className="grid gap-4 md:grid-cols-3">
            {['Conversion-Logik', 'Technische Basis', 'Individuelle Bildsprache'].map((item) => (
              <div key={item} className="proof-panel">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Case Standard</p>
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
                  <p className="section-label">{index === 0 ? 'Komplexere Projekte' : 'Schneller Einstieg'}</p>
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

        <section className="section-container pb-20" aria-labelledby="referenzen-cta-heading">
          <div className="final-cta">
            <h2 id="referenzen-cta-heading" className="max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
              Ihre Branche ist nicht dabei? Dann bauen wir die erste Richtung als Konzept.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Die kostenlose Konzept-Vorschau zeigt früh, ob Stil, Struktur und Investition zusammenpassen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn primary-btn-hero">
                Konzept anfragen
              </Link>
              <Link href="/preise" className="secondary-btn secondary-btn-hero">
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
