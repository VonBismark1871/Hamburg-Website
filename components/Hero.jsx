import Image from 'next/image';
import { useEffect, useState } from 'react';
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

const AUTO_ADVANCE_MS = 4500;
const MANUAL_PAUSE_MS = 4500;

const websitePreviews = [
  {
    id: 'restaurant',
    browserLabel: 'www.restaurant-hamburg.de',
    logo: 'Restaurant Hamburg',
    menu: ['Menü', 'Reservierung', 'Kontakt'],
    title: 'Modernes Restaurant in Hamburg',
    text: 'Frische Küche, stilvolles Ambiente und einfache Reservierung.',
    cta: 'Tisch reservieren',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    cards: [
      { title: 'Frische Zutaten', text: 'Regional ausgewählt und täglich vorbereitet.' },
      { title: 'Stilvolles Ambiente', text: 'Modernes Interieur für entspannte Abende.' },
      { title: 'Online Reservierung', text: 'In wenigen Klicks den perfekten Tisch sichern.' }
    ]
  },
  {
    id: 'barbershop',
    browserLabel: 'www.barbershop-hamburg.de',
    logo: 'Barbershop Hamburg',
    menu: ['Start', 'Leistungen', 'Termin', 'Kontakt'],
    title: 'Moderner Barbershop in Hamburg',
    text: 'Professionelle Haarschnitte, Bartpflege und entspannte Atmosphäre.',
    cta: 'Termin buchen',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    cards: [
      { title: 'Stilvolle Schnitte', text: 'Präzise Looks für Alltag und Business.' },
      { title: 'Bartpflege', text: 'Konturen, Rasur und Pflege aus einer Hand.' },
      { title: 'Flexible Termine', text: 'Online buchbar, auch kurzfristig verfügbar.' }
    ]
  },
  {
    id: 'autoservice',
    browserLabel: 'www.autoservice-hamburg.de',
    logo: 'Auto Service Hamburg',
    menu: ['Leistungen', 'Werkstatt', 'Kontakt'],
    title: 'Ihre Autowerkstatt in Hamburg',
    text: 'Schneller Service, faire Preise und zuverlässige Reparaturen.',
    cta: 'Termin vereinbaren',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    cards: [
      { title: 'Inspektion & Service', text: 'Gründliche Checks nach Herstellervorgaben.' },
      { title: 'Schnelle Reparaturen', text: 'Kurze Standzeiten dank effizienter Abläufe.' },
      { title: 'Faire Preise', text: 'Transparente Angebote ohne versteckte Kosten.' }
    ]
  }
];

function RestaurantPreview({ site, isActive, isFirst }) {
  return (
    <article className="flex h-full w-full shrink-0 flex-col space-y-4 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-5 shadow-inner shadow-slate-200/70 sm:p-6">
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
          <div className="inline-flex rounded-lg border border-indigo-100 bg-indigo-100/70 px-4 py-2 text-xs font-medium text-indigo-500">
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
        {site.cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
            <p className="text-sm font-medium text-slate-700">{card.title}</p>
            <p className="mt-1 text-xs text-slate-500">{card.text}</p>
          </div>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{isActive ? `Aktive Vorschau: ${site.title}` : undefined}</p>
    </article>
  );
}

function BarbershopPreview({ site, isFirst }) {
  return (
    <article className="flex h-full w-full shrink-0 flex-col space-y-4 bg-gradient-to-b from-white via-slate-50/40 to-slate-100/40 p-5 shadow-inner shadow-slate-200/70 sm:p-6">
      <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs text-slate-600 shadow-sm shadow-slate-200/60 sm:text-sm">
        <span className="font-semibold text-slate-700">{site.logo}</span>
        <div className="flex items-center gap-2.5 text-slate-500">
          {site.menu.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
        <div className="space-y-2">
          <p className="max-w-[18ch] text-base font-semibold leading-tight text-slate-800 sm:text-lg">{site.title}</p>
          <p className="text-sm text-slate-500">{site.text}</p>
          <div className="inline-flex rounded-lg border border-indigo-100 bg-indigo-100/70 px-4 py-2 text-xs font-medium text-indigo-500">
            {site.cta}
          </div>
        </div>
        <div className="relative aspect-[5/3] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
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

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50 sm:col-span-2">
          <p className="text-sm font-medium text-slate-700">{site.cards[0].title}</p>
          <p className="mt-1 text-xs text-slate-500">{site.cards[0].text}</p>
        </div>
        {site.cards.slice(1).map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
            <p className="text-sm font-medium text-slate-700">{card.title}</p>
            <p className="mt-1 text-xs text-slate-500">{card.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function AutoServicePreview({ site, isFirst }) {
  return (
    <article className="flex h-full w-full shrink-0 flex-col space-y-4 bg-gradient-to-b from-white via-slate-50/45 to-slate-100/45 p-5 shadow-inner shadow-slate-200/70 sm:p-6">
      <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs text-slate-600 shadow-sm shadow-slate-200/60 sm:text-sm">
        <span className="font-semibold text-slate-700">{site.logo}</span>
        <div className="flex items-center gap-3 text-slate-500">
          {site.menu.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60">
        <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr] sm:items-end">
          <div className="space-y-3">
            <p className="text-lg font-semibold leading-tight text-slate-800">{site.title}</p>
            <p className="max-w-[40ch] text-sm text-slate-500">{site.text}</p>
            <div className="inline-flex rounded-lg border border-indigo-100 bg-indigo-100/70 px-4 py-2 text-xs font-medium text-indigo-500">
              {site.cta}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-right text-xs text-slate-500">
            Mo–Fr 08:00–18:00
          </div>
        </div>
        <div className="relative aspect-[21/8] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
          <Image
            src={site.image}
            alt={site.title}
            fill
            className="object-cover"
            loading={isFirst ? 'eager' : 'lazy'}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.15fr_1fr_0.85fr]">
        {site.cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
            <p className="text-sm font-medium text-slate-700">{card.title}</p>
            <p className="mt-1 text-xs text-slate-500">{card.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function SitePreview({ site, isActive, isFirst }) {
  if (site.id === 'barbershop') {
    return <BarbershopPreview site={site} isFirst={isFirst} />;
  }

  if (site.id === 'autoservice') {
    return <AutoServicePreview site={site} isFirst={isFirst} />;
  }

  return <RestaurantPreview site={site} isActive={isActive} isFirst={isFirst} />;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resumeAutoplayAt, setResumeAutoplayAt] = useState(0);

  useEffect(() => {
    let intervalId;
    let resumeTimeoutId;

    const startAutoplay = () => {
      intervalId = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % websitePreviews.length);
      }, AUTO_ADVANCE_MS);
    };

    const remainingPause = Math.max(0, resumeAutoplayAt - Date.now());

    if (remainingPause > 0) {
      resumeTimeoutId = window.setTimeout(startAutoplay, remainingPause);
    } else {
      startAutoplay();
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (resumeTimeoutId) {
        window.clearTimeout(resumeTimeoutId);
      }
    };
  }, [resumeAutoplayAt]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setResumeAutoplayAt(Date.now() + MANUAL_PAUSE_MS);
  };

  return (
    <section className="section-container section-spacing pt-12 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
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
            Schnelle, mobil optimierte Webseiten, die lokale Unternehmen dabei unterstützen,
            mehr qualifizierte Anfragen zu gewinnen.
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
              Fordern Sie eine kostenlose Demo-Webseite an
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
            >
              Sehen Sie sich Beispiele an
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
              <span className="text-emerald-500">✓</span> Kostenlose Demo-Webseite
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Unverbindliches Erstgespräch
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Umsetzung in wenigen Tagen
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-2xl"
        >
          <motion.div
            animate={floatAnimation}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14)' }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 via-white to-slate-50 shadow-2xl shadow-slate-300/40"
          >
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-red-200 bg-red-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-amber-200 bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-emerald-200 bg-emerald-300/90" />
              <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-slate-200/70 bg-white/90 px-3 text-xs text-slate-400 shadow-inner shadow-slate-200/70">
                {websitePreviews[activeIndex].browserLabel}
              </div>
            </div>

            <div className="relative h-[30rem] overflow-hidden sm:h-[32rem] lg:h-[34rem]">
              <motion.div
                className="flex h-full"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {websitePreviews.map((site, index) => (
                  <SitePreview key={site.id} site={site} isActive={index === activeIndex} isFirst={index === 0} />
                ))}
              </motion.div>

              <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
                <div className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-slate-300/90 bg-white/90 px-3 py-2 shadow-md shadow-slate-300/40 backdrop-blur">
                  {websitePreviews.map((site, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={site.id}
                        type="button"
                        aria-label={`Zu ${site.logo} wechseln`}
                        aria-current={isActive ? 'true' : 'false'}
                        aria-pressed={isActive}
                        onClick={() => handleIndicatorClick(index)}
                        className={`h-3.5 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${
                          isActive
                            ? 'w-8 border-indigo-300 bg-indigo-500 shadow-sm shadow-indigo-300/60'
                            : 'w-3.5 border-slate-300 bg-slate-300/90 hover:border-slate-400 hover:bg-slate-400/80'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
