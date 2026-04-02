import Link from 'next/link';
import SEOHead from '../../../../components/SEOHead';
import Header from '../../../../components/Header';
import ReferenceStickyBackButton from '../../../../components/ReferenceStickyBackButton';
import FilterChips from '../../../../components/references/immobilien-demo/FilterChips';
import PropertyCard from '../../../../components/references/immobilien-demo/PropertyCard';
import { properties, propertyFilters } from '../../../../components/references/immobilien-demo/properties';

export default function ImmobilienObjektePage() {
  return (
    <>
      <SEOHead
        title="Aktuelle Immobilienangebote – Demo"
        description="Beispiel einer Objektübersicht für eine moderne Immobilienmakler-Website."
        path="/referenzen/immobilien-demo/objekte"
      />
      <Header />
      <main className="bg-[#f6f3ee] pb-20 pt-10 text-stone-900">
        <section className="section-container" aria-labelledby="objekte-heading">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Elbquartier Immobilien · Hamburg</p>
          <h1 id="objekte-heading" className="mt-3 text-4xl font-semibold sm:text-5xl">
            Aktuelle Immobilienangebote
          </h1>
          <p className="mt-4 max-w-3xl text-stone-700">
            Entdecken Sie sechs klar differenzierte Immobilien in Hamburg – von der Altbauwohnung in Eppendorf über das Stadthaus in Blankenese bis zur Kapitalanlage in Altona. Jedes Exposé ist individuell aufgebaut und direkt verlinkt.
          </p>

          <div className="mt-8">
            <FilterChips filters={propertyFilters} />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6">
            <h2 className="text-2xl font-semibold">Sie möchten ein ähnliches Objekt verkaufen?</h2>
            <p className="mt-3 text-sm text-stone-700">
              Unsere Vermarktung verbindet lokale Marktkenntnis mit hochwertiger Präsentation – digital, strukturiert
              und persönlich begleitet.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/referenzen/immobilien-demo/kontakt"
                className="inline-flex rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
              >
                Bewertung anfragen
              </Link>
              <Link
                href="/referenzen/immobilien-demo"
                className="inline-flex rounded-md border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ReferenceStickyBackButton />
    </>
  );
}
