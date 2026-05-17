import Link from 'next/link';
import SEOHead from '../../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../../components/ReferenceStickyBackButton';

export default function ImmobilienKontaktPage() {
  return (
    <>
      <SEOHead
        title="Kontakt für Immobilienanfragen"
        description="Kontaktseite von Elbquartier Immobilien für Bewertung, Besichtigung und Beratung."
        path="/referenzen/immobilien-demo/kontakt"
      />
      <main className="bg-[#f6f3ee] pb-20 pt-10 text-stone-900">
        <section className="section-container max-w-4xl" aria-labelledby="kontakt-heading">
          <h1 id="kontakt-heading" className="text-4xl font-semibold sm:text-5xl">
            Beratung & Bewertung anfragen
          </h1>
          <p className="mt-4 text-stone-700">
            Senden Sie uns eine kurze Nachricht zur Immobilie, zur gewünschten Besichtigung oder zur Bewertung Ihres
            Objekts. Wir melden uns persönlich zurück.
          </p>
          <div className="mt-8 rounded-2xl border border-stone-300 bg-white p-6">
            <p className="font-semibold">Elbquartier Immobilien</p>
            <p className="mt-2 text-sm text-stone-700">Telefon: 040 9876 2301 · E-Mail: beratung@elbquartier-immobilien.de</p>
            <div className="mt-5">
              <Link
                href="/referenzen/immobilien-demo/objekte"
                className="inline-flex rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
              >
                Zu den Objekten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ReferenceStickyBackButton />
    </>
  );
}
