import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const demos = [
  {
    title: 'Restaurant Website',
    description: 'Moderne Speisekarten-Struktur mit klarer Nutzerführung zur Reservierungsanfrage.',
    image: '/demo-images/restaurant.svg'
  },
  {
    title: 'Barbershop Website',
    description: 'Kompakter Auftritt mit Leistungen, Öffnungszeiten und direktem Kontakt.',
    image: '/demo-images/barbershop.svg'
  },
  {
    title: 'Auto Service Website',
    description: 'Vertrauensstarker Serviceauftritt mit klaren Angebotsblöcken und Anfragefokus.',
    image: '/demo-images/local-service.svg'
  }
];

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio" aria-labelledby="portfolio-heading">
      <motion.h2
        id="portfolio-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold text-slateBlue"
      >
        Referenzen im Überblick
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {demos.map((demo, i) => (
          <motion.article
            key={demo.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="card overflow-hidden p-0"
          >
            <Image src={demo.image} alt={demo.title} width={700} height={450} className="h-52 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slateBlue">{demo.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{demo.description}</p>
              <Link
                href="/referenzen"
                className="mt-4 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent"
              >
                Projekt ansehen
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      <Link href="/referenzen" className="mt-8 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline">
        Alle Referenzen ansehen
      </Link>
    </section>
  );
}
