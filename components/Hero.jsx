import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

const websitePreviews = [
  {
    type: 'Restaurant',
    browserLabel: 'www.restaurant-hamburg.de',
    title: 'Modernes Restaurant in Hamburg',
    logo: 'Restaurant Hamburg',
    menu: ['Menü', 'Reservierung', 'Kontakt'],
    text: 'Frische Küche und stilvolles Ambiente.',
    cta: 'Tisch reservieren',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    type: 'Barbershop',
    browserLabel: 'www.barbershop-hamburg.de',
    title: 'Moderner Barbershop in Hamburg',
    logo: 'Barbershop Hamburg',
    menu: ['Start', 'Leistungen', 'Termin', 'Kontakt'],
    text: 'Professionelle Haarschnitte und Bartpflege.',
    cta: 'Termin buchen',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    type: 'Auto Service',
    browserLabel: 'www.auto-service-hamburg.de',
    title: 'Ihre Autowerkstatt in Hamburg',
    logo: 'Auto Service Hamburg',
    menu: ['Start', 'Services', 'Werkstatt', 'Kontakt'],
    text: 'Schneller und zuverlässiger Autoservice.',
    cta: 'Termin vereinbaren',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80'
  }
];

function SitePreview({ site, isFirst }) {
  return (
    <article className="w-full shrink-0 space-y-4 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-5 shadow-inner shadow-slate-200/70 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{site.type} Website</p>
      <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs text-slate-600 shadow-sm shadow-slate-200/60 sm:text-sm">
        <span className="font-semibold text-slate-700">{site.logo}</span>
        <div className="flex items-center gap-3 text-slate-500">
          {site.menu.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60 sm:grid-cols-2 sm:items-center">
        <div className="space-y-3">
          <p className="text-lg font-semibold leading-tight text-slate-800">{site.title}</p>
          <p className="text-sm text-slate-500">{site.text}</p>
          <div className="inline-flex cursor-default rounded-lg border border-indigo-100 bg-indigo-100/70 px-4 py-2 text-xs font-medium text-indigo-500">
            {site.cta}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
          <Image
            src={site.image}
            alt={site.title}
            fill
            className="object-cover"
            loading={isFirst ? 'eager' : 'lazy'}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
          <p className="text-sm font-medium text-slate-700">Modernes Design</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
          <p className="text-sm font-medium text-slate-700">Mobile optimiert</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
          <p className="text-sm font-medium text-slate-700">Lokale Sichtbarkeit</p>
        </div>
      </div>
    </article>
  );
}

export default function Hero() {
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);

  return (
    <section className="section-container section-spacing pt-20 sm:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-accent"
          >
            Freiberuflicher Webentwickler · Hamburg
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl"
          >
            Moderne Webseiten für Hamburger Unternehmen
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-600"
          >
            Schnelle, mobil optimierte Webseiten, die lokalen Unternehmen helfen, mehr Kundschaft zu gewinnen.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Kostenlose Demo-Webseite anfordern
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
            >
              Beispiele ansehen
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.38 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Kostenlose Demo-Website
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Keine Verpflichtung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Fertig in wenigen Tagen
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-2xl"
        >
          <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            Beispiele moderner Business-Websites
          </p>
          <motion.div
            animate={floatAnimation}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14)' }}
            transition={{ duration: 0.25 }}
            onHoverStart={() => setIsHoveringPreview(true)}
            onHoverEnd={() => setIsHoveringPreview(false)}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 via-white to-slate-50 shadow-2xl shadow-slate-300/40"
          >
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-red-200 bg-red-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-amber-200 bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-emerald-200 bg-emerald-300/90" />
              <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-slate-200/70 bg-white/90 px-3 text-xs text-slate-400 shadow-inner shadow-slate-200/70">
                {isHoveringPreview ? 'www.business-websites-hamburg.de' : websitePreviews[0].browserLabel}
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={
                  isHoveringPreview
                    ? { x: ['0%', '-100%', '-200%', '0%'] }
                    : { x: '0%' }
                }
                transition={
                  isHoveringPreview
                    ? {
                        duration: 18,
                        times: [0, 0.33, 0.66, 1],
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }
                    : { duration: 0.5, ease: 'easeOut' }
                }
              >
                {websitePreviews.map((site, index) => (
                  <SitePreview key={site.logo} site={site} isFirst={index === 0} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
