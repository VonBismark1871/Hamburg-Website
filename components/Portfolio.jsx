import Image from 'next/image';
import { motion } from 'framer-motion';

const demos = [
  { title: 'Demo-Webseite Restaurant', image: '/demo-images/restaurant.svg' },
  { title: 'Demo-Webseite Barbershop', image: '/demo-images/barbershop.svg' },
  { title: 'Demo-Webseite Lokaler Service', image: '/demo-images/local-service.svg' }
];

export default function Portfolio() {
  return (
    <section className="section-container section-spacing" id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 text-3xl font-bold"
      >
        Demo-Beispiele
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3">
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
              <h3 className="mb-4 text-xl font-semibold">{demo.title}</h3>
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent">
                Demo ansehen
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
