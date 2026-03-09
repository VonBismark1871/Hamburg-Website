import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';

const featuredMenu = [
  {
    course: 'Vorspeise',
    name: 'Burrata · Ofentomaten · Basilikumöl',
    description: 'Cremige Burrata mit konfierten Datteltomaten, geröstetem Sauerteig und Zitronenzeste.',
    price: '14 €'
  },
  {
    course: 'Hauptgang',
    name: 'Lachsfilet auf Safran-Risotto',
    description: 'Sanft gebratenes Lachsfilet mit Safran-Risotto, Fenchel und Kräuter-Beurre-blanc.',
    price: '29 €'
  },
  {
    course: 'Signature',
    name: 'Rinderfilet mit Portwein-Jus',
    description: 'Rosa gegartes Rinderfilet, Rosmarinkartoffeln, saisonales Marktgemüse und Portwein-Jus.',
    price: '36 €'
  },
  {
    course: 'Dessert',
    name: 'Vanille-Panna-Cotta & Beeren',
    description: 'Feine Vanille-Panna-Cotta mit marinierten norddeutschen Beeren und knusprigem Mandelkrokant.',
    price: '10 €'
  }
];

const hospitalityReasons = [
  {
    title: 'Persönlicher Service',
    text: 'Aufmerksam, herzlich und mit Feingefühl für besondere Abende.'
  },
  {
    title: 'Saisonal & handwerklich',
    text: 'Eine kleine Karte mit klaren Aromen und hochwertigen Produkten.'
  },
  {
    title: 'Atmosphäre mit Ruhe',
    text: 'Warme Lichtstimmung und elegante Räume für Lunch und Dinner.'
  }
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Stilvoller Restaurantbereich mit warmer Beleuchtung und offenem Küchenblick',
    tall: false
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant eingedeckter Tisch mit Kerzenlicht in einem Hamburger Restaurant',
    tall: true
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurantbar mit warmen Farben und hochwertigen Materialien',
    tall: true
  },
  {
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fein angerichtetes Hauptgericht auf dunklem Keramikteller',
    tall: false
  }
];

function RestaurantDemoHero() {
  return (
    <section id="start" className="section-container pt-10 pb-14 sm:pt-14" aria-labelledby="hero-heading">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-end">
        <div className="rounded-[2rem] border border-[#d9c9ae] bg-[#efe1cb] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a3e]">Hafenblick Restaurant · Hamburg</p>
          <h1 id="hero-heading" className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#2f2a25] sm:text-5xl">
            Moderne Küche in warmem, elegantem Ambiente.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#4a4033] sm:text-lg">
            Eine atmosphärische Restaurant-Demo mit Fokus auf Reservierung, Genuss und Gastfreundschaft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#reservierung"
              className="inline-flex rounded-full bg-[#87613a] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#f8f2e8] transition hover:bg-[#6f4f2f]"
            >
              Tisch reservieren
            </Link>
            <Link
              href="#speisekarte"
              className="inline-flex rounded-full border border-[#6f5a3f]/50 bg-[#f4ead9] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#3c3229] transition hover:bg-[#ebdcc4]"
            >
              Menü entdecken
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_55px_-25px_rgba(60,43,24,0.45)]">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80"
            alt="Stimmungsvolles Restaurantinterieur mit warmen Holztönen und gedecktem Licht"
            width={1600}
            height={1180}
            className="h-[420px] w-full object-cover sm:h-[500px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function MenuPreviewSection() {
  return (
    <section id="speisekarte" className="section-container pb-16" aria-labelledby="menu-heading">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 id="menu-heading" className="text-3xl font-semibold tracking-tight text-[#2f2a25] sm:text-4xl">
            Menü-Highlights
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4f4236]">
            Eine kuratierte Auswahl aus vier Signature-Gerichten – saisonal abgestimmt und handwerklich präzise.
          </p>
          <Link
            href="#kontakt"
            className="mt-8 inline-flex rounded-full border border-[#6c5b40] bg-[#f2e5d0] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#3a3128] transition hover:bg-[#e8d5b7]"
          >
            Komplette Karte anfragen
          </Link>
        </div>
        <div className="space-y-4">
          {featuredMenu.map((dish) => (
            <article key={dish.name} className="rounded-2xl border border-[#d8c5a8] bg-[#fbf5ea] px-6 py-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f5d45]">{dish.course}</p>
                  <h3 className="mt-2 text-xl font-medium text-[#2f2a25]">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#574a3d]">{dish.description}</p>
                </div>
                <p className="text-lg font-semibold text-[#684b2d]">{dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantGallery() {
  return (
    <section id="galerie" className="section-container pb-16" aria-labelledby="gallery-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="gallery-heading" className="text-3xl font-semibold tracking-tight text-[#2f2a25] sm:text-4xl">
          Galerie & Stimmung
        </h2>
        <Link href="#reservierung" className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4f2f] hover:text-[#5d3f23]">
          Reservierung
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className={`${index === 0 ? 'sm:col-span-2' : ''} overflow-hidden rounded-[1.8rem]`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1300}
              height={image.tall ? 1100 : 780}
              className={`w-full object-cover ${index === 0 ? 'h-[390px] sm:h-[460px]' : image.tall ? 'h-[440px]' : 'h-[300px] sm:h-[440px]'}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function RestaurantContactBlock() {
  return (
    <section id="kontakt" className="section-container pb-16" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-[#2f2a25] sm:text-4xl">
        Standort & Kontakt
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#d8c5a8] bg-[#f6ecdb] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#665640]">Hafenblick Restaurant</p>
          <p className="mt-4 text-[#3b3229]">Hafenstraße 42, 20459 Hamburg</p>
          <p className="mt-2 text-[#3b3229]">Telefon: 040 / 123 45 67</p>
          <p className="mt-2 text-[#3b3229]">E-Mail: reservierung@hafenblick-demo.de</p>
          <p className="mt-6 text-sm text-[#5a4d40]">Mo–Fr: 12:00–15:00 & 17:30–23:00 · Sa/So: 13:00–23:00</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="tel:+49401234567" className="rounded-full bg-[#2f2a25] px-5 py-2.5 text-sm font-semibold text-[#f6ecdb] transition hover:bg-[#1f1b18]">
              Jetzt anrufen
            </Link>
            <Link href="mailto:reservierung@hafenblick-demo.de" className="rounded-full border border-[#5f4d37] px-5 py-2.5 text-sm font-semibold text-[#3b3229] transition hover:bg-[#ead9bf]">
              E-Mail senden
            </Link>
          </div>
        </article>

        <aside id="reservierung" className="rounded-3xl bg-[#2f2a25] p-7 text-[#f6ecdb]" aria-labelledby="reservation-heading">
          <h3 id="reservation-heading" className="text-2xl font-semibold">Reservierungsanfrage</h3>
          <p className="mt-3 text-sm text-[#e3d4be]">Kurz anfragen – wir bestätigen in der Regel innerhalb weniger Stunden.</p>
          <form className="mt-5 grid gap-3" aria-label="Reservierungsformular Vorschau">
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" className="rounded-2xl border border-[#8f7a5e] bg-[#423830] px-4 py-3 text-sm text-white placeholder:text-[#d7c7ad] focus:outline-none focus:ring-2 focus:ring-[#be9b6d]" />
            <label className="sr-only" htmlFor="date">Datum</label>
            <input id="date" type="text" placeholder="Datum & Uhrzeit" className="rounded-2xl border border-[#8f7a5e] bg-[#423830] px-4 py-3 text-sm text-white placeholder:text-[#d7c7ad] focus:outline-none focus:ring-2 focus:ring-[#be9b6d]" />
            <button type="button" className="mt-2 rounded-full bg-[#be9b6d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#2b241e] transition hover:bg-[#d0ad7f]">
              Anfrage senden
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}

function DemoProjectCTA() {
  return (
    <section className="section-container pb-14">
      <div className="rounded-2xl border border-[#d7c3a5] bg-[#f9f2e5] px-6 py-5 sm:px-8">
        <p className="text-sm text-[#4e4235]">
          Sie möchten eine ähnliche Website für Ihr Restaurant?{' '}
          <Link href="/kontakt" className="font-semibold text-[#6f4f2f] underline decoration-[#b9986c] underline-offset-4">
            Projekt anfragen
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function RestaurantDemoPage() {
  return (
    <>
      <SEOHead
        title="Restaurant Website Demo – Hamburg Websites"
        description="Beispiel einer modernen Restaurant-Website mit Reservierung, Speisekarte, Galerie und Kontaktbereich."
        path="/referenzen/restaurant-demo"
      />

      <div className="min-h-screen bg-[#fdf7ed] text-[#2f2a25]">
        <header className="sticky top-0 z-40 border-b border-[#dfcfb4]/70 bg-[#fbf4e8]/90 backdrop-blur">
          <div className="section-container flex h-20 items-center justify-between">
            <Link href="#start" className="text-xl font-semibold tracking-tight text-[#2f2a25]" aria-label="Zur Startsektion">
              Hafenblick Restaurant
            </Link>
            <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 md:flex">
              <Link href="#ueber-uns" className="text-sm font-medium text-[#4e4235] transition hover:text-[#6f4f2f]">Über uns</Link>
              <Link href="#speisekarte" className="text-sm font-medium text-[#4e4235] transition hover:text-[#6f4f2f]">Menü</Link>
              <Link href="#galerie" className="text-sm font-medium text-[#4e4235] transition hover:text-[#6f4f2f]">Galerie</Link>
              <Link href="#kontakt" className="text-sm font-medium text-[#4e4235] transition hover:text-[#6f4f2f]">Kontakt</Link>
              <Link href="#reservierung" className="rounded-full bg-[#2f2a25] px-5 py-2.5 text-sm font-semibold text-[#f3e6d4] transition hover:bg-[#1f1b18]">
                Reservierung
              </Link>
            </nav>
          </div>
        </header>

        <main>
          <RestaurantDemoHero />

          <section id="ueber-uns" className="section-container pb-16" aria-labelledby="about-heading">
            <div className="grid gap-7 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <figure className="overflow-hidden rounded-[1.8rem]">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80"
                  alt="Chef richtet ein Gericht in einer eleganten Restaurantküche an"
                  width={1400}
                  height={980}
                  className="h-[360px] w-full object-cover"
                />
              </figure>
              <div className="rounded-[1.8rem] border border-[#dbc9ad] bg-[#efe2cd] p-8 sm:p-10">
                <h2 id="about-heading" className="text-3xl font-semibold tracking-tight text-[#2f2a25] sm:text-4xl">Über das Restaurant</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#4f4236]">
                  Hafenblick steht für moderne, klare Küche mit hanseatischer Gelassenheit. Wir verbinden hochwertige Zutaten,
                  präzises Handwerk und persönlichen Service zu einem Abend, der in Erinnerung bleibt.
                </p>
              </div>
            </div>
          </section>

          <MenuPreviewSection />

          <section className="section-container pb-16" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-3xl font-semibold tracking-tight text-[#2f2a25] sm:text-4xl">
              Warum Gäste uns wählen
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {hospitalityReasons.map((reason) => (
                <article key={reason.title} className="rounded-2xl border border-[#d9c6a9] bg-[#f8efdf] p-6">
                  <h3 className="text-xl font-medium text-[#2f2a25]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#55493c]">{reason.text}</p>
                </article>
              ))}
            </div>
          </section>

          <RestaurantGallery />
          <RestaurantContactBlock />
          <DemoProjectCTA />
        </main>
      </div>
    </>
  );
}
