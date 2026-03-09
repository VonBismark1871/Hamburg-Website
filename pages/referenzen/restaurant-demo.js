import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';

const featuredDishes = [
  {
    name: 'Burrata mit Ofentomaten',
    description: 'Cremige Burrata, geschmorte Datteltomaten, Basilikumöl und geröstetes Sauerteigbrot.',
    price: '14 €',
    category: 'Vorspeise'
  },
  {
    name: 'Rote Bete Carpaccio',
    description: 'Fein gehobelte Rote Bete mit Ziegenkäse, Walnüssen und leichter Honig-Vinaigrette.',
    price: '13 €',
    category: 'Vorspeise'
  },
  {
    name: 'Gebratenes Lachsfilet',
    description: 'Auf cremigem Zitronen-Risotto mit jungem Blattspinat und Kräuterschaum.',
    price: '28 €',
    category: 'Hauptgericht'
  },
  {
    name: 'Rinderfilet & Rosmarinkartoffeln',
    description: 'Sous-vide gegart, mit Portwein-Jus, saisonalem Gemüse und Rosmarinkartoffeln.',
    price: '34 €',
    category: 'Hauptgericht'
  },
  {
    name: 'Hausgemachtes Tiramisu',
    description: 'Klassisch mit Espresso, Mascarpone und einem Hauch dunkler Schokolade.',
    price: '10 €',
    category: 'Dessert'
  },
  {
    name: 'Panna Cotta mit Beeren',
    description: 'Vanille-Panna-Cotta, mariniert mit norddeutschen Beeren und Minze.',
    price: '9 €',
    category: 'Dessert'
  }
];

const benefits = [
  {
    title: 'Frische Zutaten',
    text: 'Wir kochen saisonal mit ausgewählten Produkten von regionalen Partnern.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3c4.5 3 6 7 6 10a6 6 0 1 1-12 0c0-3 1.5-7 6-10Z" />
      </svg>
    )
  },
  {
    title: 'Stilvolles Ambiente',
    text: 'Modernes Interieur, warme Lichtstimmung und ein entspanntes urbanes Flair.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 4h12M8 4v6m8-6v6M6 10h12M7 20h10M9 10l-2 10m8-10 2 10" />
      </svg>
    )
  },
  {
    title: 'Zentrale Lage',
    text: 'Mitten in Hamburg, optimal erreichbar für Lunch, Dinner oder spontane Treffen.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    )
  },
  {
    title: 'Reservierung leicht gemacht',
    text: 'Schnelle Anfrage per Telefon oder Kontaktformular – auch für kleine Gruppen.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 2v4m8-4v4m-8 6h8m-8 4h5" />
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: 'Sehr angenehme Atmosphäre und hervorragend abgestimmte Gerichte. Wir kommen gerne wieder.',
    author: 'Nina K.'
  },
  {
    quote: 'Perfekte Adresse für ein Dinner in Hamburg – aufmerksamer Service und richtig gute Küche.',
    author: 'Patrick L.'
  },
  {
    quote: 'Modern, stilvoll und trotzdem entspannt. Besonders das Lachsfilet war ausgezeichnet.',
    author: 'Sarah M.'
  }
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modernes Restaurantinterieur mit warmem Licht'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant eingedeckter Tisch in einem Restaurant in Hamburg'
  },
  {
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Frisch angerichtetes Gourmetgericht auf dunklem Teller'
  },
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gäste genießen den Abend im stilvollen Restaurantambiente'
  }
];

export default function RestaurantDemoPage() {
  return (
    <>
      <SEOHead
        title="Restaurant Website Demo – Hamburg Websites"
        description="Demo einer modernen Restaurant-Website mit Reservierung, Speisekarte, Galerie und Kontaktbereich."
        path="/referenzen/restaurant-demo"
      />

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="section-container flex h-20 items-center justify-between">
          <Link href="#start" className="text-xl font-bold tracking-tight text-slateBlue" aria-label="Zur Startsektion">
            Hafenblick Restaurant
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
            <Link href="#start" className="text-sm font-medium text-slate-700 transition hover:text-accent">Start</Link>
            <Link href="#ueber-uns" className="text-sm font-medium text-slate-700 transition hover:text-accent">Über uns</Link>
            <Link href="#speisekarte" className="text-sm font-medium text-slate-700 transition hover:text-accent">Speisekarte</Link>
            <Link href="#galerie" className="text-sm font-medium text-slate-700 transition hover:text-accent">Galerie</Link>
            <Link href="#reservierung" className="text-sm font-medium text-slate-700 transition hover:text-accent">Reservierung</Link>
            <Link href="#kontakt" className="text-sm font-medium text-slate-700 transition hover:text-accent">Kontakt</Link>
            <Link href="#reservierung" className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Tisch reservieren
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="start" className="section-container section-spacing" aria-labelledby="hero-heading">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-accent/20 bg-indigo-50 px-3 py-1 text-sm font-medium text-accent">
                Urban Dining in Hamburg
              </p>
              <h1 id="hero-heading" className="mt-5 text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl">
                Modernes Restaurant in Hamburg
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-600">
                Frische Küche, stilvolles Ambiente und ein Ort für entspannte Abende im Herzen Hamburgs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#reservierung" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
                  Tisch reservieren
                </Link>
                <Link href="#speisekarte" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent">
                  Speisekarte ansehen
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
                alt="Stilvoller Restaurantbereich mit Blick auf offene Küche"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="ueber-uns" className="section-container pb-16" aria-labelledby="about-heading">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Über das Restaurant</h2>
            <p className="mt-5 max-w-4xl text-lg text-slate-600">
              Das Hafenblick Restaurant verbindet moderne Küche mit hanseatischer Gelassenheit. Unsere Gerichte stehen für
              Qualität, frische Zutaten und präzises Handwerk. Ob entspanntes Lunch, stilvolles Dinner oder ein kleiner
              Anlass mit Freunden – wir schaffen den passenden Rahmen für besondere Momente.
            </p>
          </div>
        </section>

        <section id="speisekarte" className="section-container pb-16" aria-labelledby="menu-heading">
          <h2 id="menu-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Speisekarte</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Eine kuratierte Auswahl aus Vorspeisen, Hauptgerichten und Desserts – saisonal inspiriert und mit Fokus auf Geschmack.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <article key={dish.name} className="card h-full bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{dish.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-slateBlue">{dish.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{dish.description}</p>
                <p className="mt-4 text-lg font-bold text-slateBlue">{dish.price}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="#reservierung" className="inline-flex rounded-xl bg-slateBlue px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              Komplette Speisekarte anfragen
            </Link>
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Warum Gäste uns wählen</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="inline-flex rounded-lg border border-accent/20 bg-indigo-50 p-3 text-accent">{benefit.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slateBlue">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reservierung" className="section-container pb-16" aria-labelledby="reservation-heading">
          <div className="rounded-3xl bg-slateBlue px-8 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-indigo-200">Reservierung</p>
            <h2 id="reservation-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Reservieren Sie Ihren Tisch</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Ob Abendessen zu zweit oder gemeinsamer Besuch mit Freunden – Reservierungen können schnell und unkompliziert angefragt werden.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#kontakt" className="rounded-xl bg-white px-6 py-3 font-semibold text-slateBlue transition hover:bg-slate-100">
                Jetzt reservieren
              </Link>
              <Link href="#kontakt" className="rounded-xl border border-white/50 px-6 py-3 font-semibold text-white transition hover:border-white">
                Kontakt aufnehmen
              </Link>
            </div>
            <p className="mt-6 text-slate-200">Telefon: 040 / 123 45 67 · Für Gruppen ab 8 Personen bitten wir um kurze Voranfrage.</p>
          </div>
        </section>

        <section id="galerie" className="section-container pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Galerie & Ambiente</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div key={image.src} className={`overflow-hidden rounded-2xl border border-slate-200 ${index === 0 ? 'sm:col-span-2' : ''}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={index === 0 ? 700 : 850}
                  className={`w-full object-cover ${index === 0 ? 'h-72 sm:h-96' : 'h-80'}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section-container pb-16" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Gästestimmen</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-slate-600">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-slateBlue">{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section-container pb-16" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight text-slateBlue sm:text-4xl">Standort, Öffnungszeiten & Kontakt</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-slateBlue">Adresse</h3>
              <p className="mt-2 text-slate-600">Hafenstraße 42, 20459 Hamburg</p>
              <h3 className="mt-6 text-xl font-semibold text-slateBlue">Öffnungszeiten</h3>
              <p className="mt-2 text-slate-600">Mo–Fr: 12:00–15:00 & 17:30–23:00</p>
              <p className="text-slate-600">Sa: 13:00–23:30 · So: 13:00–22:00</p>
              <h3 className="mt-6 text-xl font-semibold text-slateBlue">Kontakt</h3>
              <p className="mt-2 text-slate-600">Telefon: 040 / 123 45 67</p>
              <p className="text-slate-600">E-Mail: reservierung@hafenblick-demo.de</p>
              <h3 className="mt-6 text-xl font-semibold text-slateBlue">Reservierung</h3>
              <p className="mt-2 text-slate-600">Anfragen werden innerhalb weniger Stunden bestätigt.</p>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slateBlue">Kartenansicht (Platzhalter)</h3>
              <div className="mt-4 flex h-72 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500">
                Interaktive Karte kann hier integriert werden
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="section-container grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-slateBlue">Hafenblick Restaurant</p>
            <p className="mt-3 text-sm text-slate-600">Moderne Küche und stilvolles Ambiente im Herzen Hamburgs.</p>
          </div>
          <nav aria-label="Footer Navigation" className="grid gap-2 text-sm text-slate-600">
            <Link href="#start" className="transition hover:text-accent">Start</Link>
            <Link href="#speisekarte" className="transition hover:text-accent">Speisekarte</Link>
            <Link href="#galerie" className="transition hover:text-accent">Galerie</Link>
            <Link href="#kontakt" className="transition hover:text-accent">Kontakt</Link>
          </nav>
          <div className="text-sm text-slate-600">
            <p>Hafenstraße 42, 20459 Hamburg</p>
            <p className="mt-2">040 / 123 45 67</p>
            <p className="mt-2">reservierung@hafenblick-demo.de</p>
            <div className="mt-4 flex gap-4">
              <Link href="/impressum" className="transition hover:text-accent">Impressum</Link>
              <Link href="/datenschutz" className="transition hover:text-accent">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
