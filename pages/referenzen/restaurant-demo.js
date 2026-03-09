import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import ReferenceBackButton from '../../components/references/ReferenceBackButton';

const featuredDishes = [
  {
    name: 'Steinbutt · Fenchel · Zitronenbutter',
    description: 'Sanft gegarter Steinbutt mit geschmortem Fenchel, Kartoffelcreme und frischer Zitronenbutter.',
    price: '34 €',
    image:
      'https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fein angerichtetes Fischgericht mit Fenchel auf dunklem Teller'
  },
  {
    name: 'Geschmorte Rote Bete · Burrata · Haselnuss',
    description: 'Warme Rote Bete aus dem Ofen mit cremiger Burrata, gerösteten Haselnüssen und Kräutern.',
    price: '16 €',
    image:
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vorspeise mit Roter Bete und Burrata in modernem Restaurantstil'
  },
  {
    name: 'Tagliatelle · Pilze · Thymianjus',
    description: 'Hausgemachte Tagliatelle mit sautierten Waldpilzen, Parmesan und feiner Thymiannote.',
    price: '22 €',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pasta-Teller mit Pilzen und Kräutern in warmem Licht'
  },
  {
    name: 'Schokoladenmousse · Birne · Mandel',
    description: 'Luftige Mousse au Chocolat mit pochierter Birne und knusprigem Mandelkrokant.',
    price: '12 €',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dessert mit Schokoladenmousse und Birne auf Keramikteller'
  }
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
    alt: 'Restaurantbar mit warmen Naturmaterialien und stimmungsvoller Beleuchtung'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gedeckter Tisch mit Kerzenlicht in elegantem Hamburger Restaurant'
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chef beim finalen Anrichten eines Tellers in offener Küche'
  }
];

const reasons = ['Frische Küche', 'Stilvolles Ambiente', 'Einfache Reservierung'];

const testimonials = [
  {
    quote: 'Ein ruhiger, schöner Abend mit exzellenter Küche. Besonders die saisonalen Gerichte waren hervorragend.',
    author: 'Julia M., Hamburg'
  },
  {
    quote: 'Unkomplizierte Reservierung, aufmerksamer Service und ein Ambiente, in dem man gern länger bleibt.',
    author: 'Leon & Mara'
  },
  {
    quote: 'Modern, herzlich und kulinarisch auf den Punkt. Genau die Art Restaurant, die wir gesucht haben.',
    author: 'Tobias R.'
  }
];

function RestaurantHero() {
  return (
    <section id="start" className="section-container pb-16 pt-8 sm:pt-10" aria-labelledby="hero-heading">
      <p className="text-sm text-[#6a5e50]">Beispiel einer möglichen Restaurant-Website</p>
      <div className="mt-4 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <figure className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
            alt="Modernes Restaurantinterieur mit gedeckten Tischen und warmer Abendstimmung"
            width={1800}
            height={1300}
            className="h-[520px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201a16]/80 via-[#201a16]/30 to-transparent" />
          <div className="absolute bottom-0 p-8 text-[#f7efe4] sm:p-10">
            <h1 id="hero-heading" className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Modernes Restaurant in Hamburg
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#f1e5d7] sm:text-lg">
              Saisonale Küche, ruhige Atmosphäre und ein Abend, der sich leicht und besonders anfühlt.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#reservierung"
                className="inline-flex rounded-md bg-[#c67b4a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b36b3c]"
              >
                Tisch reservieren
              </Link>
              <Link
                href="#speisekarte"
                className="inline-flex rounded-md border border-[#f1ddc7] bg-transparent px-6 py-3 text-sm font-semibold text-[#f7efe4] transition hover:bg-[#f7efe4]/15"
              >
                Speisekarte ansehen
              </Link>
            </div>
          </div>
        </figure>
        <aside className="grid gap-5 rounded-[2rem] bg-[#efe5d7] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#2a2420]">Küche mit hanseatischer Ruhe</h2>
          <p className="text-[#4d4339]">
            Im Hafenblick verbinden wir regionale Produkte mit moderner Leichtigkeit. Der Fokus liegt auf klaren Aromen,
            guter Gastlichkeit und einer entspannten Abendstimmung.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80"
            alt="Ansprechend angerichtetes Hauptgericht in modernem Restaurant"
            width={1200}
            height={900}
            className="h-56 w-full rounded-2xl object-cover"
          />
        </aside>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="speisekarte" className="section-container pb-16" aria-labelledby="menu-heading">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <h2 id="menu-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
          Kuratierte Menüvorschau
        </h2>
        <p className="max-w-lg text-sm text-[#635749]">Vier ausgewählte Gerichte als Eindruck der Karte.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredDishes.map((dish) => (
          <article key={dish.name} className="overflow-hidden rounded-[1.5rem] bg-[#f7f0e6]">
            <Image src={dish.image} alt={dish.alt} width={1200} height={900} className="h-52 w-full object-cover" />
            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#2a2420]">{dish.name}</h3>
                <p className="text-sm font-semibold text-[#7e5132]">{dish.price}</p>
              </div>
              <p className="text-sm leading-relaxed text-[#544a40]">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AtmosphereGallery() {
  return (
    <section id="galerie" className="section-container pb-16" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
        Atmosphäre im Haus
      </h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <figure className="overflow-hidden rounded-[1.8rem]">
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            width={1600}
            height={1100}
            className="h-[430px] w-full object-cover"
          />
        </figure>
        <div className="grid gap-4">
          {galleryImages.slice(1).map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-[1.6rem]">
              <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-[207px] w-full object-cover" />
            </figure>
          ))}
        </div>
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

      <div className="min-h-screen bg-[#f3ece2] text-[#2a2420]">
        <ReferenceBackButton />

        <main>
          <RestaurantHero />
          <MenuPreview />
          <AtmosphereGallery />

          <section className="section-container pb-16" aria-labelledby="reasons-heading">
            <h2 id="reasons-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
              Warum Gäste dieses Restaurant wählen
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {reasons.map((reason) => (
                <article key={reason} className="rounded-2xl border border-[#d8c7b4] bg-[#f7efe4] p-5">
                  <h3 className="text-lg font-medium text-[#3a312b]">{reason}</h3>
                </article>
              ))}
            </div>
          </section>

          <section id="reservierung" className="section-container pb-16" aria-labelledby="reservation-heading">
            <div className="grid gap-5 rounded-[2rem] bg-[#2e2a27] p-8 text-[#f6eee2] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 id="reservation-heading" className="text-3xl font-semibold sm:text-4xl">
                  Reservieren Sie Ihren Tisch
                </h2>
                <p className="mt-3 max-w-xl text-[#dfd1c0]">
                  Für Lunch, Dinner oder einen besonderen Anlass. Wir bestätigen Ihre Anfrage zeitnah.
                </p>
              </div>
              <Link
                href="tel:+49401234567"
                className="inline-flex h-fit rounded-md bg-[#c67b4a] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b36b3c]"
              >
                Jetzt reservieren
              </Link>
            </div>
          </section>

          <section className="section-container pb-16" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
              Stimmen unserer Gäste
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="rounded-2xl bg-[#f8f1e7] p-6">
                  <p className="text-sm leading-relaxed text-[#4f453b]">“{testimonial.quote}”</p>
                  <cite className="mt-4 block text-sm font-semibold not-italic text-[#7a4f30]">{testimonial.author}</cite>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="kontakt" className="section-container pb-16" aria-labelledby="contact-heading">
            <div className="grid gap-6 border-y border-[#d8c9b7] py-8 lg:grid-cols-2">
              <div>
                <h2 id="contact-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
                  Standort & Öffnungszeiten
                </h2>
                <p className="mt-4 text-[#4f453b]">Hafenstraße 42, 20459 Hamburg</p>
                <p className="mt-1 text-[#4f453b]">Mo–Fr: 12:00–15:00 & 17:30–23:00</p>
                <p className="mt-1 text-[#4f453b]">Sa/So: 13:00–23:00</p>
              </div>
              <div className="space-y-3 text-[#4f453b]">
                <p>Telefon: 040 / 123 45 67</p>
                <p>E-Mail: reservierung@hafenblick-demo.de</p>
                <div className="pt-2">
                  <Link href="mailto:reservierung@hafenblick-demo.de" className="text-sm font-semibold text-[#7a4f30] underline underline-offset-4">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="section-container pb-14">
            <div className="rounded-2xl bg-[#efe4d6] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[#433a31]">Sie möchten eine ähnliche Website für Ihr Restaurant?</p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
                <Link href="/kontakt" className="rounded-md bg-[#2e2a27] px-5 py-2.5 text-sm font-semibold text-[#f6eee2]">
                  Eigene Demo anfragen
                </Link>
                <Link href="/#preise" className="rounded-md border border-[#3e3530] px-5 py-2.5 text-sm font-semibold text-[#3e3530]">
                  Preise ansehen
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
