import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const previews = [
  { key: 'restaurant', title: 'Restaurant', image: '/demo-images/restaurant.svg' },
  { key: 'barbershop', title: 'Barbershop', image: '/demo-images/barbershop.svg' },
  { key: 'autoservice', title: 'Auto Service', image: '/demo-images/local-service.svg' }
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 }
};

export default function Hero() {
  return (
    <section className="section-spacing relative overflow-hidden" aria-labelledby="hero-heading">
      <span className="glow-blob -left-40 -top-40" aria-hidden="true" />
      <span className="glow-blob -bottom-52 right-[-120px]" style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.16) 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-2">
        <motion.div {...reveal} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-glow-purple)] px-4 py-1.5 text-sm text-[var(--text-primary)]">
            <span className="pulse-dot" /> Hamburger Webstudio
          </div>
          <h1 id="hero-heading" className="text-4xl sm:text-5xl">
            Websites für Hamburger Unternehmen mit <span className="gradient-text">klarer Struktur</span> und messbarer Wirkung
          </h1>
          <p className="max-w-xl text-lg text-[var(--text-secondary)]">Wir verbinden klare Nutzerführung, schnelle Technik und verständliche Inhalte, damit jede Seite eine konkrete Aufgabe im Vertriebsprozess erfüllt.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="primary-btn">Projekt anfragen</Link>
            <Link href="/referenzen" className="secondary-btn">Referenzen ansehen</Link>
          </div>
          <ul className="grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-3">
            {['Klarer Projektablauf', 'SEO-Basis inklusive', 'Mobile First umgesetzt'].map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-glow-green)] text-[var(--accent-green)]">✓</span>{item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-primary)]">
            <span>40+ Projekte</span><span className="h-4 w-px bg-[var(--border-subtle)]" /><span>3–5 Tage bis Demo</span><span className="h-4 w-px bg-[var(--border-subtle)]" /><span>ab 650€</span>
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

    return () => {
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    scheduleAutoplay();
    return () => {
      clearAutoplayTimeout();
    };
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
    <section className="hero py-16 text-white sm:py-20">
      <span className="glow-blob glow-blob--purple" aria-hidden="true" />
      <span className="glow-blob glow-blob--teal" aria-hidden="true" />
      <div className="section-container relative">
        <span className="hero-watermark" aria-hidden="true">
          HAMBURG
        </span>
      </div>
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl tracking-tight text-white sm:text-5xl"
          >
            <span className="gradient-text">Websites</span> für Hamburger Unternehmen, die messbar zu Anfragen
            führen
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-200"
          >
            Wir verbinden klare Nutzerführung, schnelle Technik und verständliche Inhalte, damit jede Seite eine
            konkrete Aufgabe im Vertriebsprozess erfüllt.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/kontakt"
              className="primary-btn"
            >
              Fordern Sie eine kostenlose Demo-Webseite an
            </Link>
            <Link
              href="/#portfolio"
              className="secondary-btn text-white"
            >
              Sehen Sie sich Beispiele an
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.38 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300"
          >
            <span className="floating-tag inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Kostenlose Demo-Webseite
            </span>
            <span className="floating-tag inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Preisrange vor Projektstart
            </span>
            <span className="floating-tag inline-flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Direkter Ansprechpartner statt Ticketschleife
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
            animate={shouldReduceMotion ? undefined : floatAnimation}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14)' }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsHovered(true)}
            onBlurCapture={() => setIsHovered(false)}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 via-white to-slate-50 shadow-2xl shadow-slate-900/30"
          >
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-red-200 bg-red-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-amber-200 bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full border border-emerald-200 bg-emerald-300/90" />
              <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-slate-200/70 bg-white/90 px-3 text-xs text-slate-400 shadow-inner shadow-slate-200/70">
                {websitePreviews[activeIndex].browserLabel}
              </div>
            </div>

        <motion.div {...reveal} className="relative">
          <div className="card overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] bg-[#0f172a] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="carousel-track flex w-[200%]" style={{ animation: 'slide 15s linear infinite' }}>
              {[...previews, ...previews].map((p, idx) => (
                <div key={`${p.key}-${idx}`} className="relative h-[320px] w-full border-r border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                  <Image src={p.image} alt={p.title} fill className="object-cover opacity-90" />
                </div>
              ))}
            </div>
          </div>
          <div className="float-tag absolute -left-8 top-6 rounded-full border border-emerald-400/50 bg-[var(--bg-surface)] px-4 py-2 text-sm text-emerald-300">⚡ PageSpeed 98/100</div>
          <div className="float-tag absolute -bottom-6 right-0 rounded-full border border-indigo-400/50 bg-[var(--bg-surface)] px-4 py-2 text-sm text-indigo-200">🚀 Livegang in 3–5 Tagen</div>
        </motion.div>
      </div>
      <style jsx>{`@keyframes slide{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
