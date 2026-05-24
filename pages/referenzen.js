import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import ReferenceCard from '../components/references/ReferenceCard';
import { referenceProjects } from '../data/references';

const portfolioSections = [
  {
    id: 'onepager',
    label: 'Schneller Einstieg',
    title: 'Kompakte Premium-Onepager',
    description:
      'Drei schnelle Einstiege, die trotzdem wie eigenständige Marken wirken: Restaurant, Salon und Zahnarztpraxis.',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo']
  },
  {
    id: 'multi-page',
    label: 'Mehr Tiefe',
    title: 'Mehrseitige Branchen-Systeme',
    description:
      'Drei komplexere Konzepte mit Inhaltslogik, Unterseiten, Objektlisten oder Service-Funnels: Physio, Werkstatt und Immobilien.',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo']
  }
];

const criteria = ['Nischenspezifische UX', 'Eigene visuelle Sprache', 'Passende Bildserien'];

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
        <section
          className="section-container section-spacing pb-10"
          aria-labelledby="referenzen-heading"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-label">Konzept-Galerie</p>
              <h1
                id="referenzen-heading"
                className="max-w-4xl text-5xl leading-[0.96] font-black sm:text-7xl"
                style={{ letterSpacing: '-0.03em', color: '#ECEAF3' }}
              >
                Sechs Websites. Sechs Branchen. Keine austauschbaren Karten.
              </h1>
            </div>
            <div className="max-w-2xl lg:pb-2">
              <p className="text-lg leading-8" style={{ color: '#9690A8' }}>
                Jeder Referenzbereich folgt einer eigenen Branchenlogik: andere Bildwelt, andere CTA-Priorität, andere
                Informationsarchitektur. Die Übersicht zeigt deshalb nicht dieselbe Browsergrafik sechsmal, sondern sechs
                eigenständige Projektstarts.
              </p>
              <p
                className="mt-5 rounded-2xl p-5 text-sm leading-7"
                style={{ border: '1px solid rgba(168,142,247,0.12)', background: '#16131F', color: '#9690A8' }}
              >
                Besonders wichtig: Bilder sind als passende Serien gedacht. Immobilien-Exposés nutzen pro Objekt eine
                konsistente Bildquelle, statt verschiedene Gebäude in einer Galerie zu mischen.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container pb-12" aria-label="Studio Kriterien">
          <div className="grid gap-4 md:grid-cols-3">
            {criteria.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="proof-panel"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: '#6B6480' }}>Redesign Standard</p>
                <p className="text-xl font-semibold" style={{ color: '#ECEAF3' }}>{item}</p>
              </motion.div>
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
                  <p className="section-label">{section.label}</p>
                  <h2 id={`${section.id}-heading`} className="text-3xl font-black sm:text-5xl" style={{ color: '#ECEAF3', letterSpacing: '-0.03em' }}>
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8" style={{ color: '#9690A8' }}>{section.description}</p>
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
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 100%)',
              border: '1px solid rgba(168,142,247,0.2)'
            }}
          >
            <h2 id="referenzen-cta-heading" className="text-2xl font-bold sm:text-3xl" style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}>
              Nicht jede Website muss gleich groß sein.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: '#9690A8' }}>
              Die Konzept-Vorschau zeigt früh, ob Stil, Struktur und Investition zusammenpassen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/kontakt" className="primary-btn">Projekt anfragen</Link>
              <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
