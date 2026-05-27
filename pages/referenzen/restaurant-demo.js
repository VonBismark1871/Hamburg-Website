import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import ReferenceBackButton from '../../components/references/ReferenceBackButton';

const palette = {
  ink: '#14100b',
  deeper: '#0e0b07',
  panel: '#1f1810',
  panel2: '#251d14',
  gold: '#c9a36a',
  goldBright: '#e6c690',
  cream: '#f4e9d6',
  muted: '#b09a7e',
  mutedDim: '#8a755c',
  line: 'rgba(201,163,106,0.16)',
  lineStrong: 'rgba(201,163,106,0.32)'
};

const displayFont = "'Playfair Display', Georgia, 'Times New Roman', serif";
const accentFont = "'Cormorant Garamond', Georgia, serif";
const bodyFont = "'DM Sans', system-ui, sans-serif";

const ease = [0.22, 1, 0.36, 1];

const navLinks = [
  { href: '#kueche', label: 'Küche' },
  { href: '#empfehlungen', label: 'Empfehlungen' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#reservierung', label: 'Reservierung' }
];

const pillars = [
  { label: 'Saisonal', text: 'Karten, die dem Markt folgen — nicht umgekehrt.' },
  { label: 'Regional', text: 'Produkte von Höfen und Fischern aus dem Hamburger Umland.' },
  { label: 'Handgemacht', text: 'Pasta, Fonds und Desserts entstehen täglich frisch im Haus.' }
];

const signatures = [
  {
    name: 'Rinderfilet mit Trüffeljus',
    description: 'Zart gebratenes Filet, geröstete Rosmarinkartoffeln und ein dunkler Trüffeljus.',
    price: '29 €',
    tag: 'Empfehlung des Hauses',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Tagliatelle mit Burrata',
    description: 'Frische hausgemachte Tagliatelle, cremige Burrata, sonnengereifte Tomaten und Basilikumöl.',
    price: '18 €',
    tag: 'Vegetarisch',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Grauburgunder & Vorspeisen',
    description: 'Eine Auswahl der Saison, begleitet von einem trockenen, mineralischen Weißwein.',
    price: '24 €',
    tag: 'Zum Teilen',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80'
  }
];

const menuCategories = [
  {
    category: 'Vorspeisen',
    items: [
      { name: 'Burrata mit Tomaten und Basilikum', description: 'Cremige Burrata, bunte Tomaten, kaltgepresstes Olivenöl, Basilikum.', price: '12 €', image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80' },
      { name: 'Rindercarpaccio mit Parmesan', description: 'Hauchdünnes Rindfleisch, Rucola, Zitrone und gehobelter Parmesan.', price: '14 €', image: 'https://images.unsplash.com/photo-1544025162-d76538971491?auto=format&fit=crop&w=600&q=80' },
      { name: 'Gebratene Garnelen mit Kräutern', description: 'In Knoblauch und Petersilie geschwenkt, mit leichter Zitronennote.', price: '15 €', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    category: 'Hauptgerichte',
    items: [
      { name: 'Gebratenes Lachsfilet mit Gemüse', description: 'Auf der Haut gebraten, saisonales Marktgemüse, Kräuterbutter.', price: '24 €', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
      { name: 'Rinderfilet mit Rosmarinkartoffeln', description: 'Zartes Rinderfilet, geröstete Rosmarinkartoffeln, dunkler Jus.', price: '29 €', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hausgemachte Pasta mit Trüffel', description: 'Frische Pasta, cremige Trüffelsauce, Parmesan, schwarzer Pfeffer.', price: '19 €', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Klassisch geschichtet mit Espresso, Mascarpone und Kakao.', price: '9 €', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
      { name: 'Zitronentarte', description: 'Mürber Boden, frische Zitronencreme, karamellisierte Meringue.', price: '8 €', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=600&q=80' },
      { name: 'Schokoladenmousse', description: 'Luftige Mousse aus dunkler Schokolade mit marinierten Beeren.', price: '9 €', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    category: 'Weine & Getränke',
    items: [
      { name: 'Grauburgunder, trocken (0,2 l)', description: 'Fruchtig-mineralisch, passend zu Fisch und Vorspeisen.', price: '8 €', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80' },
      { name: 'Hausgemachte Limonade', description: 'Zitrone, Minze und Soda, frisch serviert auf Eis.', price: '6 €', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80', alt: 'Warm beleuchteter Esstisch mit Weingläsern im Abendlicht', span: 'lg:col-span-2 lg:row-span-2', h: 'h-[280px] lg:h-full' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80', alt: 'Gedeckter Tisch mit mehreren Tellern', span: '', h: 'h-[200px] lg:h-[244px]' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80', alt: 'Modern angerichtetes Gericht auf hellem Teller', span: '', h: 'h-[200px] lg:h-[244px]' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=80', alt: 'Stimmungsvolles Restaurant-Interieur', span: 'lg:col-span-2', h: 'h-[200px] lg:h-[244px]' }
];

function Reveal({ children, delay = 0, y = 28, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ children }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase" style={{ color: palette.gold, letterSpacing: '0.32em' }}>
      <span style={{ width: 28, height: 1, background: palette.lineStrong }} aria-hidden="true" />
      {children}
    </span>
  );
}

function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled ? 'rgba(14,11,7,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? palette.line : 'transparent'}`
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#start" className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-wide" style={{ fontFamily: displayFont, color: palette.cream }}>Hafenblick</span>
          <span className="text-[10px] uppercase" style={{ letterSpacing: '0.34em', color: palette.gold }}>Bistro · Hamburg</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: palette.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = palette.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = palette.muted)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#reservierung" className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5" style={{ background: palette.gold, color: palette.deeper }}>
            Reservieren
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{ border: `1px solid ${palette.lineStrong}`, color: palette.cream }}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden"
          style={{ background: 'rgba(14,11,7,0.96)', borderTop: `1px solid ${palette.line}` }}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm" style={{ color: palette.cream }}>
                {link.label}
              </Link>
            ))}
            <Link href="#reservierung" onClick={() => setOpen(false)} className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold" style={{ background: palette.gold, color: palette.deeper }}>
              Tisch reservieren
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="start" className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '640px', height: '100svh' }}>
      <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=80"
          alt="Stimmungsvoll beleuchteter Gastraum des Hafenblick Bistro am Abend"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,11,7,0.96) 4%, rgba(14,11,7,0.45) 45%, rgba(14,11,7,0.72) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, rgba(14,11,7,0.55) 100%)' }} />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}>
          <Kicker>Restaurant · Hamburg Neustadt</Kicker>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-6 text-5xl leading-[1.05] sm:text-7xl"
          style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}
        >
          Wo der Abend
          <br />
          <span style={{ fontStyle: 'italic', color: palette.goldBright }}>Geschmack</span> bekommt
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mx-auto mt-6 max-w-xl leading-relaxed"
          style={{ color: palette.muted, fontFamily: accentFont, fontSize: '1.3rem' }}
        >
          Frische, saisonale Küche, ausgesuchte Weine und ein warm beleuchteter Gastraum im Herzen Hamburgs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#reservierung" className="rounded-full px-8 py-4 text-sm font-semibold uppercase transition hover:-translate-y-0.5" style={{ background: palette.gold, color: palette.deeper, letterSpacing: '0.1em' }}>
            Tisch reservieren
          </Link>
          <Link href="#speisekarte" className="rounded-full px-8 py-4 text-sm font-semibold uppercase transition hover:-translate-y-0.5" style={{ border: `1px solid ${palette.lineStrong}`, color: palette.cream, letterSpacing: '0.1em' }}>
            Speisekarte
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.8 }, y: { delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-xs uppercase"
        style={{ color: palette.muted, letterSpacing: '0.3em' }}
      >
        Scrollen
      </motion.div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="kueche" className="px-5 py-24 sm:px-8 sm:py-32" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80"
              alt="Küchenchef finalisiert ein detailreich angerichtetes Gericht"
              width={1200}
              height={1400}
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs uppercase" style={{ background: 'rgba(14,11,7,0.7)', color: palette.gold, letterSpacing: '0.2em', backdropFilter: 'blur(8px)' }}>
              Unsere Küche · täglich frisch
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <Kicker>Die Philosophie</Kicker>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}>
              Klare Aromen, ehrliche Produkte
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: palette.muted }}>
              Im Hafenblick verbinden wir moderne europäische Küche mit Zutaten aus der Region. Was auf den Teller kommt,
              entscheidet die Saison — und die Handschrift unseres Küchenchefs.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3" style={{ background: palette.line }}>
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={0.1 + i * 0.1}>
                <div className="h-full p-6" style={{ background: palette.panel }}>
                  <p className="text-2xl" style={{ fontFamily: displayFont, color: palette.goldBright }}>{pillar.label}</p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.mutedDim }}>{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Signatures() {
  return (
    <section id="empfehlungen" className="px-5 py-20 sm:px-8 sm:py-28" style={{ background: palette.deeper, scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Kicker>Signature Dishes</Kicker>
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}>
            Empfehlungen des Hauses
          </h2>
          <p className="mx-auto mt-5 max-w-xl" style={{ color: palette.muted, fontFamily: accentFont, fontSize: '1.25rem' }}>
            Gerichte, für die unsere Gäste wiederkommen — sorgfältig komponiert und schön angerichtet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {signatures.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="group h-full overflow-hidden rounded-[1.6rem]"
                style={{ background: palette.panel, border: `1px solid ${palette.line}` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image src={dish.image} alt={dish.name} width={1000} height={750} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase" style={{ background: 'rgba(14,11,7,0.78)', color: palette.gold, letterSpacing: '0.16em', backdropFilter: 'blur(6px)' }}>
                    {dish.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl" style={{ fontFamily: displayFont, color: palette.cream }}>{dish.name}</h3>
                    <span className="whitespace-nowrap text-lg font-semibold" style={{ color: palette.goldBright }}>{dish.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.mutedDim }}>{dish.description}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuGrid() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
      {menuCategories.map((section, i) => (
        <Reveal key={section.category} delay={(i % 2) * 0.1}>
          <div>
            <h3 className="pb-4 text-sm font-semibold uppercase" style={{ color: palette.gold, letterSpacing: '0.28em', borderBottom: `1px solid ${palette.line}` }}>
              {section.category}
            </h3>
            <ul className="mt-6 space-y-7">
              {section.items.map((dish) => (
                <li
                  key={dish.name}
                  className="group relative cursor-default"
                  onMouseEnter={() => dish.image && setActive(dish.name)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="transition-colors duration-200"
                      style={{
                        fontFamily: accentFont,
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        color: active === dish.name ? palette.goldBright : palette.cream
                      }}
                    >
                      {dish.name}
                    </span>
                    <span className="min-w-[18px] flex-1 translate-y-[-3px]" style={{ borderBottom: `1px dotted ${palette.lineStrong}` }} aria-hidden="true" />
                    <span className="whitespace-nowrap text-base font-semibold" style={{ color: palette.goldBright }}>{dish.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: palette.mutedDim }}>{dish.description}</p>

                  {dish.image && (
                    <motion.div
                      initial={false}
                      animate={active === dish.name ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 8 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="pointer-events-none absolute right-0 top-0 z-50 hidden md:block"
                      style={{ width: 220, marginTop: -12 }}
                      aria-hidden="true"
                    >
                      <div className="overflow-hidden rounded-xl shadow-2xl" style={{ border: `1px solid ${palette.lineStrong}` }}>
                        <div className="relative h-36 w-full">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                            sizes="220px"
                          />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,11,7,0.55) 0%, transparent 60%)' }} />
                        </div>
                        <div className="px-3 py-2" style={{ background: palette.panel }}>
                          <p className="truncate text-xs font-semibold" style={{ color: palette.cream }}>{dish.name}</p>
                          <p className="text-xs" style={{ color: palette.gold }}>{dish.price}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Menu() {
  return (
    <section id="speisekarte" className="px-5 py-24 sm:px-8 sm:py-32" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Kicker>À la carte</Kicker>
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}>
            Speisekarte
          </h2>
          <p className="mt-4 text-sm" style={{ color: palette.mutedDim }}>
            Eine Auswahl aus unserer aktuellen Abendkarte. Saisonale Gerichte wechseln je nach Marktangebot.
          </p>
        </Reveal>

        <MenuGrid />
      </div>
    </section>
  );
}

function Ambiance() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80" alt="Warmes Restaurant-Interieur im Abendlicht" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(14,11,7,0.8)' }} />
      </div>
      <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-3xl leading-relaxed sm:text-4xl" style={{ fontFamily: displayFont, fontStyle: 'italic', color: palette.cream, fontWeight: 500 }}>
          „Ein Abend im Hafenblick ist kein schnelles Essen — es ist ein Platz, an dem man bleiben möchte.“
        </p>
        <p className="mt-6 text-xs uppercase" style={{ color: palette.gold, letterSpacing: '0.3em' }}>
          Gastraum · Bar · Terrasse
        </p>
      </Reveal>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galerie" className="px-5 py-24 sm:px-8 sm:py-32" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>Eindrücke</Kicker>
          <h2 className="mt-5 text-4xl sm:text-5xl" style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}>
            Aus dem Restaurant
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08} className={img.span}>
              <figure className="group h-full overflow-hidden rounded-[1.4rem]">
                <div className={`relative ${img.h}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-[1100ms] group-hover:scale-110" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(to top, rgba(14,11,7,0.6), transparent)' }} />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section id="reservierung" className="px-5 py-24 sm:px-8 sm:py-32" style={{ background: palette.deeper, scrollMarginTop: 80 }}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <Kicker>Reservierung</Kicker>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: displayFont, color: palette.cream, fontWeight: 600 }}>
              Reservieren Sie Ihren Tisch
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: palette.muted }}>
              Ob Dinner zu zweit oder ein Abend mit Freunden — wir halten Ihren Platz gerne bereit.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs uppercase" style={{ color: palette.gold, letterSpacing: '0.24em' }}>Öffnungszeiten</dt>
                <dd className="mt-2 text-sm leading-7" style={{ color: palette.muted }}>Mo–Fr · 12:00–15:00 &amp; 17:30–23:00<br />Sa &amp; So · 13:00–23:00</dd>
              </div>
              <div>
                <dt className="text-xs uppercase" style={{ color: palette.gold, letterSpacing: '0.24em' }}>Adresse</dt>
                <dd className="mt-2 text-sm leading-7" style={{ color: palette.muted }}>Hafenstraße 42 · 20459 Hamburg</dd>
              </div>
              <div>
                <dt className="text-xs uppercase" style={{ color: palette.gold, letterSpacing: '0.24em' }}>Kontakt</dt>
                <dd className="mt-2 text-sm leading-7" style={{ color: palette.muted }}>040 / 123 45 67<br />reservierung@hafenblick-demo.de</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form className="rounded-[1.8rem] p-7 sm:p-9" style={{ background: palette.panel, border: `1px solid ${palette.line}` }} onSubmit={(e) => e.preventDefault()}>
            <p className="text-xl" style={{ fontFamily: displayFont, color: palette.cream }}>Tischanfrage</p>
            <p className="mt-1 text-xs" style={{ color: palette.mutedDim }}>Demo-Formular · ohne Datenübertragung</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name"><input type="text" placeholder="Ihr Name" style={inputStyle} className="reservation-input" /></Field>
              <Field label="Personen"><input type="number" min="1" defaultValue="2" style={inputStyle} className="reservation-input" /></Field>
              <Field label="Datum"><input type="date" style={inputStyle} className="reservation-input" /></Field>
              <Field label="Uhrzeit"><input type="time" defaultValue="19:30" style={inputStyle} className="reservation-input" /></Field>
            </div>
            <div className="mt-4">
              <Field label="Anmerkung"><textarea rows={2} placeholder="Allergien, Anlass, Wünsche …" style={inputStyle} className="reservation-input" /></Field>
            </div>

            <button type="submit" className="mt-6 w-full rounded-full py-4 text-sm font-semibold uppercase transition hover:-translate-y-0.5" style={{ background: palette.gold, color: palette.deeper, letterSpacing: '0.12em' }}>
              Reservierung anfragen
            </button>
            <p className="mt-4 text-center text-xs" style={{ color: palette.mutedDim }}>
              Lieber telefonisch?{' '}
              <Link href="tel:+49401234567" className="underline underline-offset-4" style={{ color: palette.gold }}>040 / 123 45 67</Link>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  borderRadius: '0.75rem',
  background: palette.deeper,
  border: `1px solid ${palette.line}`,
  color: palette.cream,
  padding: '0.75rem 0.9rem',
  fontSize: '0.9rem',
  fontFamily: bodyFont
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase" style={{ color: palette.mutedDim, letterSpacing: '0.16em' }}>{label}</span>
      {children}
    </label>
  );
}

function Foot() {
  return (
    <footer className="px-5 py-12 sm:px-8" style={{ borderTop: `1px solid ${palette.line}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg" style={{ fontFamily: displayFont, color: palette.cream }}>Hafenblick Bistro</p>
          <p className="mt-1 text-xs uppercase" style={{ color: palette.gold, letterSpacing: '0.24em' }}>Hamburg Neustadt</p>
        </div>
        <p className="text-xs" style={{ color: palette.mutedDim }}>Demo-Konzept von Hamburg Websites · ohne erfundene Kundenergebnisse</p>
      </div>
    </footer>
  );
}

export default function RestaurantDemoPage() {
  return (
    <>
      <SEOHead
        title="Hafenblick Bistro Hamburg"
        description="Cinematic Bistro-Onepager in Hamburg: saisonale Küche, Signature-Gerichte, Speisekarte, Galerie und Reservierung in warmer Abendstimmung."
        path="/referenzen/restaurant-demo"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ background: palette.ink, color: palette.cream, fontFamily: bodyFont, scrollBehavior: 'smooth' }}>
        <ReferenceBackButton />
        <TopNav />
        <main>
          <Hero />
          <Philosophy />
          <Signatures />
          <Menu />
          <Ambiance />
          <Gallery />
          <Reservation />
        </main>
        <Foot />
      </div>

      <style jsx>{`
        .reservation-input::placeholder {
          color: ${palette.mutedDim};
        }
        .reservation-input:focus {
          outline: none;
          border-color: ${palette.lineStrong};
        }
      `}</style>
    </>
  );
}
