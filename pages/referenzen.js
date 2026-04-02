import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import { referenceProjects } from '../data/references';

const toneClasses = {
  warm: 'from-amber-100 via-orange-50 to-amber-50',
  dark: 'from-slate-800 via-slate-900 to-zinc-900',
  clean: 'from-cyan-50 via-sky-50 to-white',
  calm: 'from-emerald-50 via-teal-50 to-white',
  contrast: 'from-slate-200 via-white to-slate-100',
  premium: 'from-zinc-100 via-stone-50 to-white'
};

const portfolioSections = [
  {
    id: 'mehrseitige-websites',
    title: 'Mehrseitige Websites',
    description:
      'Beispiele für umfangreichere Websites mit mehreren Seiten, detaillierten Leistungsbereichen und erweiterten Inhalten.',
    siteType: 'Mehrseitig',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo']
  },
  {
    id: 'einfache-websites',
    title: 'Einfache Websites',
    description:
      'Beispiele für kompakte Unternehmenswebsites mit klarer Struktur und schneller Nutzerführung. Ideal für kleinere Betriebe oder lokale Dienstleistungen.',
    siteType: 'Onepager',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo']
  }
];

function ReferenceCard({ project, siteType }) {
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
        <span className="inline-flex w-fit rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
          {siteType}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-slateBlue">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Projekt-Highlights">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">{siteType === 'Onepager' ? 'Onepager' : 'Mehrseitige Website'}</p>
        <Link
          href={`/referenzen/${project.slug}`}
          className="mt-5 inline-flex secondary-btn text-sm text-slateBlue"
        >
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
        description="Beispiele moderner Websites für Restaurants, Friseursalons, Praxen, Werkstätten, Immobilien und weitere Unternehmen."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="section-container section-spacing pb-8" aria-labelledby="referenzen-heading">
          <h1 id="referenzen-heading" className="text-4xl tracking-tight text-slateBlue sm:text-5xl">
            <span className="h1-accent-italic">Referenzen</span> und Beispiel-Websites
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Diese Beispiele zeigen nicht nur Design, sondern vor allem klare Seitenstrukturen für konkrete Ziele wie
            Kontaktanfragen, Terminwünsche oder Leistungsanfragen.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-500">
            Jede Demo ist auf typische Entscheidungswege in der jeweiligen Branche ausgerichtet und wird für Ihr
            Projekt individuell angepasst.
          </p>
          <p className="mt-2 max-w-3xl text-sm text-slate-500">
            Alle gezeigten Referenzen sind als Demo-Beispiele gekennzeichnet und stellen keine verifizierten Kundenprojekte dar.
          </p>
        </section>

        <div className="section-container pb-16">
          {portfolioSections.map((section, index) => {
            const projects = section.projects
              .map((slug) => referenceProjects.find((project) => project.slug === slug))
              .filter(Boolean);

            return (
              <section
                key={section.id}
                aria-labelledby={`${section.id}-heading`}
                className={`${index === 0 ? '' : 'mt-16 pt-14'}`}
              >
                <p className="section-label">{section.siteType === 'Onepager' ? 'Einfache Websites' : 'Mehrseitige Websites'}</p>
                <h2 id={`${section.id}-heading`} className="text-2xl text-slateBlue sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-3xl text-slate-600">{section.description}</p>
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project) => (
                    <ReferenceCard key={project.slug} project={project} siteType={section.siteType} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="section-container pb-16" aria-labelledby="referenzen-cta-heading">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 id="referenzen-cta-heading" className="text-2xl font-bold text-slateBlue sm:text-3xl">
              Ihre Branche ist nicht dabei?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Wir entwickeln Websites für viele weitere Branchen – individuell, klar strukturiert und passend zu Ihrem Unternehmen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">
                Projekt anfragen
              </Link>
              <Link
                href="/preise"
                className="secondary-btn text-slateBlue"
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
