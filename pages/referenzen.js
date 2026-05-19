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
    title: 'Kompakte Premium-Onepager',
    description:
      'Drei schnelle Einstiege, die trotzdem wie eigenständige Marken wirken: Restaurant, Salon und Zahnarztpraxis.',
    projects: ['restaurant-demo', 'friseursalon-demo', 'zahnarzt-demo'],
    accent: 'primary'
  },
  {
    id: 'multi-page',
    title: 'Mehrseitige Branchen-Systeme',
    description:
      'Drei komplexere Konzepte mit Inhaltslogik, Unterseiten, Objektlisten oder Service-Funnels: Physio, Werkstatt und Immobilien.',
    projects: ['physio-demo', 'autoservice-demo', 'immobilien-demo'],
    accent: 'accent'
  }
];

const standards = [
  {
    title: 'Nischenspezifische UX',
    description: 'Jede Branche hat ihre eigenen Anforderungen an Navigation und Nutzerführung.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Eigene visuelle Sprache',
    description: 'Keine Templates — jedes Projekt bekommt seinen individuellen Look.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Passende Bildserien',
    description: 'Konsistente Bildsprache statt zusammengewürfelter Stock-Fotos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
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
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Konzept-Galerie
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Sechs Websites.{' '}
                  <span className="text-gradient">Sechs Branchen.</span>{' '}
                  Keine austauschbaren Karten.
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted leading-relaxed">
                  Jeder Referenzbereich folgt einer eigenen Branchenlogik: andere Bildwelt, andere CTA-Priorität, andere Informationsarchitektur.
                </p>
                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-foreground">Besonders wichtig:</strong> Bilder sind als passende Serien gedacht. Immobilien-Exposés nutzen pro Objekt eine konsistente Bildquelle, statt verschiedene Gebäude in einer Galerie zu mischen.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {standards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-muted/30 rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section className="py-24">
          <div className="container-custom">
            {portfolioSections.map((section, sectionIndex) => {
              const projects = section.projects
                .map((slug) => referenceProjects.find((project) => project.slug === slug))
                .filter(Boolean);

              return (
                <div key={section.id} className={sectionIndex === 0 ? '' : 'mt-24'}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                  >
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                      section.accent === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {sectionIndex === 0 ? 'Schneller Einstieg' : 'Mehr Tiefe'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <p className="text-lg text-muted max-w-2xl">
                      {section.description}
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                      >
                        <ReferenceCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-8 md:p-16"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nicht jede Website muss gleich groß sein.
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Die Konzept-Vorschau zeigt früh, ob Stil, Struktur und Investition zusammenpassen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Projekt anfragen
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/preise" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
