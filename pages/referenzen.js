import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import ReferenceCard from '../components/references/ReferenceCard';
import AuroraBackground from '../components/ui/AuroraBackground';
import AnimatedText from '../components/ui/AnimatedText';
import Marquee from '../components/ui/Marquee';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
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

const criteria = [
  { k: '01', t: 'Nischenspezifische UX', d: 'Jede Branche bekommt eigene Nutzerführung und CTA-Priorität.' },
  { k: '02', t: 'Eigene visuelle Sprache', d: 'Andere Bildwelt, Typografie und Farbstimmung pro Konzept.' },
  { k: '03', t: 'Passende Bildserien', d: 'Konsistente Fotologik statt zusammengewürfelter Stockbilder.' }
];

const marqueeItems = ['Restaurant', 'Friseursalon', 'Zahnarztpraxis', 'Physiotherapie', 'Kfz-Service', 'Immobilien'];

export default function ReferenzenPage() {
  return (
    <>
      <SEOHead
        title="Konzept-Referenzen"
        description="Sechs eigenständige Website-Konzepte für Restaurant, Salon, Zahnarztpraxis, Physiotherapie, Kfz-Service und Immobilien – jede Branche mit eigener Bildwelt und UX."
        path="/referenzen"
      />
      <Header />
      <main>
        <section className="band-violet" aria-labelledby="referenzen-heading">
          <AuroraBackground grid grain={false} />
          <div className="section-container relative z-[2] py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-label">Konzept-Galerie</p>
                <AnimatedText
                  as="h1"
                  text="Sechs Branchen. Sechs eigenständige Websites."
                  className="display-xl max-w-4xl"
                />
              </div>
              <Reveal delay={0.2} className="max-w-2xl lg:pb-2">
                <p className="lead">
                  Jeder Referenzbereich folgt einer eigenen Branchenlogik: andere Bildwelt, andere CTA-Priorität, andere
                  Informationsarchitektur – keine austauschbaren Karten.
                </p>
                <p className="mt-5 rounded-2xl p-5 text-sm leading-7" style={{ border: '1px solid var(--line)', background: 'rgba(255,255,255,0.02)', color: 'var(--muted)' }}>
                  Bilder sind als passende Serien gedacht. Immobilien-Exposés nutzen pro Objekt eine konsistente
                  Bildquelle, statt verschiedene Gebäude in einer Galerie zu mischen.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="border-y py-7" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
          <Marquee items={marqueeItems} duration={36} />
        </div>

        <section className="section-container section-spacing" aria-label="Studio Kriterien">
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {criteria.map((item) => (
              <RevealItem as="article" key={item.t} className="glass-card p-7">
                <span className="font-display text-sm font-bold tracking-[0.2em]" style={{ color: 'var(--cyan-2)' }}>{item.k}</span>
                <h2 className="mt-4 font-display text-xl font-bold" style={{ color: 'var(--text)' }}>{item.t}</h2>
                <p className="mt-2 text-sm leading-7" style={{ color: 'var(--muted)' }}>{item.d}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <div className="section-container pb-20">
          {portfolioSections.map((section, index) => {
            const projects = section.projects
              .map((slug) => referenceProjects.find((project) => project.slug === slug))
              .filter(Boolean);

            return (
              <section key={section.id} aria-labelledby={`${section.id}-heading`} className={index === 0 ? '' : 'mt-24'}>
                <Reveal className="mb-10 max-w-3xl">
                  <p className="section-label">{section.label}</p>
                  <AnimatedText as="h2" text={section.title} className="display-lg" />
                  <p className="lead mt-4">{section.description}</p>
                </Reveal>
                <RevealGroup className="grid gap-7 lg:grid-cols-3">
                  {projects.map((project) => (
                    <RevealItem key={project.slug}>
                      <ReferenceCard project={project} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            );
          })}
        </div>

        <section className="section-container pb-24" aria-labelledby="referenzen-cta-heading">
          <Reveal>
            <div className="cta-card p-8 sm:p-12">
              <h2 id="referenzen-cta-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Nicht jede Website muss gleich groß sein.
              </h2>
              <p className="lead mt-5 max-w-2xl">
                Die Konzept-Vorschau zeigt früh, ob Stil, Struktur und Investition zusammenpassen.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/kontakt" className="primary-btn"><span>Projekt anfragen</span></Link>
                <Link href="/preise" className="secondary-btn">Preise ansehen</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
