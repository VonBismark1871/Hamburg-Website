import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
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
    id: 'kompakte-websites',
    title: 'Kompakte Websites',
    description:
      'Beispiele für klare Einstiegsseiten: überschaubarer Umfang, schnelle Orientierung und ein sichtbarer nächster Schritt.',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo']
  },
  {
    id: 'erweiterte-websites',
    title: 'Erweiterte Websites',
    description:
      'Beispiele für Projekte mit mehreren Inhaltsbereichen, Unterseiten, Objektlisten oder stärkerer funktionaler Führung.',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo']
  }
];

function ReferenceCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${toneClasses[project.tone] || toneClasses.calm}`}>
        <Image
          src={project.image}
          alt={`${project.title} Vorschau`}
          width={900}
          height={560}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-accent">
            {project.siteType}
          </span>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {project.complexity}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slateBlue">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Ziel</dt>
            <dd className="mt-1 text-slate-700">{project.goal}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Stil</dt>
            <dd className="mt-1 text-slate-700">{project.styleLabel}</dd>
          </div>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Projekt-Highlights">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </li>
          ))}
        </ul>
        <Link href={`/referenzen/${project.slug}`} className="mt-5 inline-flex secondary-btn text-sm text-slateBlue">
          Demo ansehen
        </Link>
      </div>
    </article>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Referenzen – Hamburg Websites"
        description="Beispiele moderner Websites für unterschiedliche Branchen, Ziele, Budgets und Stilrichtungen."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-8" aria-labelledby="referenzen-heading">
          <h1 id="referenzen-heading" className="text-4xl tracking-tight text-slateBlue sm:text-5xl">
            <span className="h1-accent-italic">Referenzen</span> für unterschiedliche Ziele und Budgets
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Die Beispiele zeigen verschiedene Richtungen: vom kompakten lokalen Auftritt bis zur mehrseitigen Website
            mit Objektlisten, Beschwerdeseiten oder stärkeren Kontaktwegen.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-500">
            Auf dieser Übersicht sind die Ziele und Rahmenbedingungen bewusst sichtbar. Die einzelnen Demos öffnen sich
            danach wie eigenständige Beispielprojekte.
          </p>
          <p className="mt-2 max-w-3xl text-sm text-slate-500">
            Alle gezeigten Referenzen sind Demo-Beispiele und keine verifizierten Kundenprojekte.
          </p>
        </section>

        <div className="section-container pb-16">
          {portfolioSections.map((section, index) => {
            const projects = section.projects
              .map((slug) => referenceProjects.find((project) => project.slug === slug))
              .filter(Boolean);

            return (
              <section key={section.id} aria-labelledby={`${section.id}-heading`} className={`${index === 0 ? '' : 'mt-16 pt-14'}`}>
                <p className="section-label">{section.title}</p>
                <h2 id={`${section.id}-heading`} className="text-2xl text-slateBlue sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-3xl text-slate-600">{section.description}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            <p className="mt-4 max-w-2xl text-slate-600">
              Manche Projekte brauchen nur eine klare Startseite. Andere brauchen mehrere Seiten, Funktionen oder einen
              stärkeren visuellen Auftritt. Entscheidend ist, dass Umfang, Stil und Budget zusammenpassen.
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
