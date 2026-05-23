import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import ReferenceBackButton from '../../components/references/ReferenceBackButton';

const chefRecommendations = [
  {
    name: 'Rinderfilet mit Trüffeljus',
    price: '29 €'
  },
  {
    name: 'Hausgemachte Tagliatelle mit Burrata',
    price: '18 €'
  }
];

const menuCategories = [
  {
    category: 'Vorspeisen',
    items: [
      {
        name: 'Burrata mit Tomaten und Basilikum',
        description: 'Cremige Burrata, bunte Tomaten, kaltgepresstes Olivenöl und Basilikum.',
        price: '12 €'
      },
      {
        name: 'Rindercarpaccio mit Parmesan',
        description: 'Hauchdünn geschnittenes Rindfleisch mit Rucola, Zitrone und gehobeltem Parmesan.',
        price: '14 €'
      },
      {
        name: 'Gebratene Garnelen mit Kräutern',
        description: 'In Knoblauch und Petersilie geschwenkte Garnelen mit leichter Zitronennote.',
        price: '15 €'
      }
    ]
  },
  {
    category: 'Hauptgerichte',
    items: [
      {
        name: 'Gebratenes Lachsfilet mit Gemüse',
        description: 'Auf der Haut gebratenes Lachsfilet mit saisonalem Marktgemüse und Kräuterbutter.',
        price: '24 €'
      },
      {
        name: 'Rinderfilet mit Rosmarinkartoffeln',
        description: 'Zartes Rinderfilet, geröstete Rosmarinkartoffeln und dunkler Jus.',
        price: '29 €'
      },
      {
        name: 'Hausgemachte Pasta mit Trüffel',
        description: 'Frische Pasta mit cremiger Trüffelsauce, Parmesan und schwarzem Pfeffer.',
        price: '19 €'
      }
    ]
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        description: 'Klassisch geschichtet mit Espresso, Mascarpone und feinem Kakaopulver.',
        price: '9 €'
      },
      {
        name: 'Zitronentarte',
        description: 'Mürber Boden, frische Zitronencreme und leicht karamellisierte Meringue.',
        price: '8 €'
      },
      {
        name: 'Schokoladenmousse',
        description: 'Luftige Mousse aus dunkler Schokolade mit marinierten Beeren.',
        price: '9 €'
      }
    ]
  },
  {
    category: 'Getränke',
    items: [
      {
        name: 'Hausgemachte Limonade',
        description: 'Zitrone, Minze und Soda, frisch serviert auf Eis.',
        price: '6 €'
      },
      {
        name: 'Grauburgunder, trocken (0,2 l)',
        description: 'Fruchtig-mineralischer Weißwein, passend zu Fisch und Vorspeisen.',
        price: '8 €'
      }
    ]
  }
];

function RestaurantHero() {
  return (
    <section id="start" className="section-container pb-12 pt-8 sm:pt-10" aria-labelledby="hero-heading">
      <p className="text-sm text-[#6a5e50]">Hafenblick Bistro · Hamburg Neustadt</p>
      <div className="mt-4 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
        <figure className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_-40px_rgba(33,22,13,0.8)]">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1900&q=80"
            alt="Fein angerichtete Gerichte und Weingläser auf einem warm beleuchteten Restauranttisch"
            width={1800}
            height={1300}
            className="h-[560px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201a16]/80 via-[#201a16]/30 to-transparent" />
          <div className="absolute bottom-0 p-8 text-[#f7efe4] sm:p-10">
            <h1 id="hero-heading" className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Modernes Restaurant in Hamburg
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#f1e5d7] sm:text-lg">
              Frische Küche, stilvolles Ambiente und entspannte Abende im Herzen Hamburgs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#reservierung"
                className="inline-flex rounded-md bg-[#c67b4a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b36b3c]"
              >
                Jetzt reservieren
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
          <h2 className="text-2xl font-semibold text-[#2a2420]">Abende mit Geschmack und Atmosphäre</h2>
          <p className="text-[#4d4339]">
            Im Hafenblick trifft moderne Küche auf aufmerksamen Service. Unser Gastraum ist ruhig, warm beleuchtet und
            ideal für Dinner zu zweit oder gesellige Runden.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80"
            alt="Chef finalisiert ein detailreich angerichtetes Hauptgericht in der Restaurantküche"
            width={1200}
            height={900}
            className="h-56 w-full rounded-2xl object-cover"
          />
        </aside>
      </div>
    </section>
  );
}

function TrustBlock() {
  return (
    <section className="section-container pb-14" aria-label="Bewertungen">
      <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#d9c7b4] bg-[#f8f1e7] px-5 py-3 text-sm text-[#4f453b] sm:gap-4">
        <span className="tracking-[0.12em] text-[#b27141]" aria-hidden="true">
          ★★★★★
        </span>
        <p className="font-medium">Konzept-Fokus: Reservierung, Speisekarte und Atmosphäre</p>
        <p className="text-[#6b5e4f]">Aktuelle Eindrücke aus Küche, Gastraum und Abendservice.</p>
      </div>
    </section>
  );
}

function KitchenStory() {
  return (
    <section className="section-container pb-16" aria-labelledby="kitchen-heading">
      <div className="grid gap-6 rounded-[2rem] bg-[#efe3d4] p-7 lg:grid-cols-[1fr_1.1fr] lg:items-center sm:p-10">
        <figure className="overflow-hidden rounded-[1.5rem]">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80"
            alt="Mehrere Teller mit modern angerichteten Speisen auf einem Restauranttisch"
            width={1400}
            height={1000}
            className="h-72 w-full object-cover"
          />
        </figure>
        <div>
          <h2 id="kitchen-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
            Unsere Küche
          </h2>
          <p className="mt-4 text-[#4f453b]">
            Unsere Küche verbindet moderne europäische Gerichte mit frischen Zutaten aus der Region. Im Mittelpunkt
            stehen klare Aromen, saisonale Produkte und eine Atmosphäre, in der man entspannt genießen kann.
          </p>

          <div className="mt-6 rounded-2xl border border-[#d7c1ab] bg-[#f7efe4] p-5">
            <h3 className="text-xl font-semibold text-[#2f2721]">Unser Küchenchef</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#544a40]">
              Mit einer klaren, saisonalen Handschrift bringt unser Küchenchef moderne europäische Gerichte und frische
              Produkte aus der Region auf den Teller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="speisekarte" className="section-container pb-16" aria-labelledby="menu-heading">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <h2 id="menu-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
          Speisekarte
        </h2>
        <p className="max-w-lg text-sm text-[#635749]">Eine Auswahl aus unserer aktuellen Abendkarte.</p>
      </div>

      <article className="mb-6 rounded-[1.4rem] border border-[#d8c7b4] bg-[#f7eee2] p-6">
        <h3 className="text-xl font-semibold text-[#2f2721]">Empfehlung des Küchenchefs</h3>
        <ul className="mt-4 space-y-3">
          {chefRecommendations.map((dish) => (
            <li key={dish.name} className="flex items-start justify-between gap-3 border-b border-[#dac8b6]/70 pb-3 last:border-b-0 last:pb-0">
              <p className="font-medium text-[#2f2721]">{dish.name}</p>
              <p className="whitespace-nowrap text-sm font-semibold text-[#7e5132]">{dish.price}</p>
            </li>
          ))}
        </ul>
      </article>

      <div className="grid gap-5 lg:grid-cols-2">
        {menuCategories.map((section) => (
          <article key={section.category} className="rounded-[1.5rem] bg-[#f8f1e7] p-6">
            <h3 className="text-2xl font-semibold text-[#2f2721]">{section.category}</h3>
            <ul className="mt-4 space-y-4">
              {section.items.map((dish) => (
                <li key={dish.name} className="border-b border-[#d8c7b4]/70 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium text-[#2f2721]">{dish.name}</p>
                    <p className="whitespace-nowrap text-sm font-semibold text-[#7e5132]">{dish.price}</p>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#544a40]">{dish.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-5 text-sm text-[#635749]">Saisonale Gerichte wechseln regelmäßig je nach Marktangebot.</p>
    </section>
  );
}

function AtmosphereGallery() {
  return (
    <section id="galerie" className="section-container pb-12" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="text-3xl font-semibold text-[#2a2420] sm:text-4xl">
        Eindrücke aus dem Restaurant
      </h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <figure className="overflow-hidden rounded-[1.8rem]">
          <Image
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=80"
            alt="Ansprechend angerichtete Hauptspeise mit Beilagen auf einem Restauranttisch"
            width={1800}
            height={1200}
            className="h-[520px] w-full object-cover"
          />
        </figure>
        <div className="grid gap-4">
          <figure className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Gedeckter Esstisch mit mehreren Tellern und Weingläsern im Abendlicht"
              width={1200}
              height={900}
              className="h-[252px] w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80"
              alt="Servierter Rotwein neben kleinen Vorspeisentellern in stilvollem Ambiente"
              width={1200}
              height={900}
              className="h-[252px] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default function RestaurantDemoPage() {
  return (
    <>
      <SEOHead
        title="Hafenblick Bistro Hamburg"
        description="Modernes Bistro in Hamburg mit Speisekarte, Galerie, Reservierung und warmem Abendambiente."
        path="/referenzen/restaurant-demo"
      />

      <div className="min-h-screen bg-[#f3ece2] text-[#2a2420]">
        <ReferenceBackButton />

        <main>
          <RestaurantHero />
          <TrustBlock />
          <KitchenStory />
          <MenuPreview />
          <AtmosphereGallery />

          <section className="section-container pb-12" aria-label="Atmosphäre Hinweis">
            <p className="rounded-2xl bg-[#efe4d6] px-6 py-4 text-[#4f453b]">
              Genießen Sie moderne Küche in entspannter Atmosphäre mit Blick auf den Hafen.
            </p>
          </section>

          <section id="reservierung" className="section-container pb-16" aria-labelledby="reservation-heading">
            <div className="grid gap-5 rounded-[2rem] bg-[#2e2a27] p-8 text-[#f6eee2] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.8)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 id="reservation-heading" className="text-3xl font-semibold sm:text-4xl">
                  Reservieren Sie Ihren Tisch
                </h2>
                <p className="mt-3 max-w-xl text-[#dfd1c0]">
                  Ob Dinner zu zweit oder ein gemeinsamer Abend mit Freunden – wir freuen uns auf Ihre Reservierung.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="mailto:reservierung@hafenblick-demo.de"
                  className="inline-flex h-fit rounded-md bg-[#c67b4a] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b36b3c]"
                >
                  Jetzt reservieren
                </Link>
                <Link
                  href="tel:+49401234567"
                  className="inline-flex h-fit rounded-md border border-[#d9c7b3] px-7 py-3 text-sm font-semibold text-[#f6eee2] transition hover:bg-[#f6eee2]/10"
                >
                  Telefonisch reservieren
                </Link>
              </div>
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
                  <Link
                    href="mailto:reservierung@hafenblick-demo.de"
                    className="text-sm font-semibold text-[#7a4f30] underline underline-offset-4"
                  >
                    Reservierung per E-Mail
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="section-container pb-14">
            <div className="rounded-2xl bg-[#efe4d6] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[#433a31]">Reservierungen, Menüfragen und private Abende</p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
                <Link href="#reservierung" className="rounded-md bg-[#2e2a27] px-5 py-2.5 text-sm font-semibold text-[#f6eee2]">
                  Tisch reservieren
                </Link>
                <Link href="#speisekarte" className="rounded-md border border-[#3e3530] px-5 py-2.5 text-sm font-semibold text-[#3e3530]">
                  Menü ansehen
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
