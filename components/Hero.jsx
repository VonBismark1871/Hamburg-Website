import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 }
};

const AUTO_ADVANCE_MS = 5200;
const MANUAL_PAUSE_MS = 4500;
const SLIDE_TRANSITION_SECONDS = 0.5;

const websitePreviews = [
  {
    id: 'restaurant',
    browserLabel: 'www.restaurant-hamburg.de',
    logo: 'Restaurant Hamburg',
    menu: ['Menü', 'Reservierung', 'Kontakt'],
    title: 'Modernes Restaurant in Hamburg',
    text: 'Frische Küche, stilvolles Ambiente und schnelle Reservierung.',
    cta: 'Tisch reservieren',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
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
    text: 'Präzise Schnitte, Bartpflege und klare Online-Terminführung.',
    cta: 'Termin buchen',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    cards: [
      { title: 'Stilvolle Schnitte', text: 'Looks für Alltag und Business.' },
      { title: 'Bartpflege', text: 'Konturen, Rasur und Pflege aus einer Hand.' },
      { title: 'Flexible Termine', text: 'Online buchbar, auch kurzfristig.' }
    ]
  },
  {
    id: 'autoservice',
    browserLabel: 'www.autoservice-hamburg.de',
    logo: 'Auto Service Hamburg',
    menu: ['Leistungen', 'Werkstatt', 'Kontakt'],
    title: 'Ihre Autowerkstatt in Hamburg',
    text: 'Schneller Service, faire Preise und verlässliche Reparaturen.',
    cta: 'Termin vereinbaren',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    cards: [
      { title: 'Inspektion & Service', text: 'Gründliche Checks nach Herstellervorgaben.' },
      { title: 'Kurze Standzeiten', text: 'Effiziente Abläufe für schnellere Übergabe.' },
      { title: 'Transparente Preise', text: 'Angebote ohne versteckte Kosten.' }
    ]
  }
];

function SitePreview({ site, isFirst }) {
  return (
    <article className="flex h-full w-full shrink-0 flex-col gap-4 bg-[color:var(--color-bg-card)] p-5 sm:p-6">
      <div className="flex items-center justify-between rounded-xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-xs text-[color:var(--color-ink-2)] sm:text-[13px]">
        <span className="font-semibold text-[color:var(--color-ink)]">{site.logo}</span>
        <div className="flex items-center gap-3 text-[rgba(21,21,21,0.6)]">
          {site.menu.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-[color:var(--color-line)] bg-white p-4 sm:grid-cols-[1.05fr_1fr] sm:items-center sm:p-5">
        <div className="space-y-3">
          <p className="max-w-[20ch] text-lg font-semibold leading-tight text-[color:var(--color-ink)]">{site.title}</p>
          <p className="text-sm leading-relaxed text-[color:var(--color-ink-2)]">{site.text}</p>
          <div className="inline-flex h-9 items-center rounded-full border border-[rgba(45,91,255,0.22)] bg-[rgba(45,91,255,0.08)] px-4 text-xs font-medium text-[color:var(--color-accent)]">
            {site.cta}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)]">
          <Image
            src={site.image}
            alt={site.title}
            fill
            className="object-cover"
            loading={isFirst ? 'eager' : 'lazy'}
            sizes="(max-width: 1024px) 100vw, 34vw"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {site.cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-[color:var(--color-line)] bg-white p-3.5">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">{card.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--color-ink-2)]">{card.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const autoplayTimeoutRef = useRef(null);
  const manualPauseUntilRef = useRef(0);

  const clearAutoplayTimeout = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      window.clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  }, []);

  const scheduleAutoplay = useCallback(() => {
    clearAutoplayTimeout();

    if (shouldReduceMotion || isHovered || !isTabVisible) {
      return;
    }

    const waitTime = Math.max(AUTO_ADVANCE_MS, manualPauseUntilRef.current - Date.now());

    autoplayTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % websitePreviews.length);
    }, waitTime);
  }, [clearAutoplayTimeout, isHovered, isTabVisible, shouldReduceMotion]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const updateVisibility = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };

    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);

    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    scheduleAutoplay();
    return () => clearAutoplayTimeout();
  }, [activeIndex, clearAutoplayTimeout, scheduleAutoplay]);

  const handleIndicatorClick = (index) => {
    if (index === activeIndex) {
      return;
    }

    clearAutoplayTimeout();
    setActiveIndex(index);
    manualPauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
  };

  return (
    <section className="hero pb-24 pt-16 text-white sm:pt-20" aria-labelledby="hero-heading">
      <div className="section-container relative">
        <span className="hero-watermark" aria-hidden="true">
          HAMBURG
        </span>
      </div>
      <div className="section-container grid items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:justify-between lg:gap-10">
        <div className="max-w-[560px] space-y-6 lg:space-y-7">
          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="max-w-[620px] text-[48px] leading-[1.02] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[72px]"
          >
            Websites für Hamburger Unternehmen, die messbar zu Anfragen führen
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-[560px] text-lg leading-[1.55] text-[rgba(255,255,255,0.82)] sm:text-xl"
          >
            Wir verbinden klare Nutzerführung, schnelle Technik und verständliche Inhalte, damit jede Seite eine
            konkrete Aufgabe im Vertriebsprozess erfüllt.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kontakt" className="inline-flex h-14 items-center rounded-full border border-white bg-white px-7 text-[15px] font-semibold text-[color:var(--color-ink)] transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.92)]">
              Fordern Sie eine kostenlose Demo-Webseite an
            </Link>
            <Link href="/#portfolio" className="inline-flex h-14 items-center rounded-full border border-white/25 bg-transparent px-7 text-[15px] font-medium text-[rgba(255,255,255,0.88)] transition duration-200 ease-out hover:-translate-y-[1px] hover:border-white/45 hover:text-white">
              Sehen Sie sich Beispiele an
            </Link>
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.42, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-[rgba(255,255,255,0.72)]"
          >
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/55" />Kostenlose Demo-Webseite</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/55" />Preisrange vor Projektstart</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/55" />Direkter Ansprechpartner</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto w-full max-w-[560px]"
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsHovered(true)}
            onBlurCapture={() => setIsHovered(false)}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[rgba(248,246,240,0.98)] shadow-[0_18px_44px_rgba(10,10,10,0.18)]"
          >
            <div className="flex items-center gap-2 border-b border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4CFC4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4CFC4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4CFC4]" />
              <div className="ml-3 flex h-8 flex-1 items-center rounded-full border border-[color:var(--color-line)] bg-white px-3 text-xs text-[rgba(21,21,21,0.5)]">
                {websitePreviews[activeIndex].browserLabel}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex will-change-transform"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={
                  shouldReduceMotion ? { duration: 0 } : { duration: SLIDE_TRANSITION_SECONDS, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {websitePreviews.map((site, index) => (
                  <SitePreview key={site.id} site={site} isFirst={index === 0} />
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-card-soft)] px-4 py-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-white px-3 py-2">
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
                      className={`h-2.5 rounded-full border transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] ${
                        isActive
                          ? 'w-6 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]'
                          : 'w-2.5 border-[rgba(21,21,21,0.2)] bg-[rgba(21,21,21,0.2)] hover:border-[rgba(21,21,21,0.34)] hover:bg-[rgba(21,21,21,0.34)]'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
