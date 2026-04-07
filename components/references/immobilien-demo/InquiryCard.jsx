import Link from 'next/link';

export default function InquiryCard() {
  return (
    <aside className="space-y-5 rounded-[20px] bg-stone-50 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-6 lg:sticky lg:top-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Ansprechpartnerin</p>
      <div>
        <p className="text-xl font-semibold text-stone-900">Mara Petersen</p>
        <p className="text-sm text-stone-600">Senior Immobilienberaterin · Elbquartier Immobilien</p>
      </div>
      <dl className="space-y-2 text-sm text-stone-700">
        <div>
          <dt className="text-stone-500">Telefon</dt>
          <dd className="font-medium">040 9876 2301</dd>
        </div>
        <div>
          <dt className="text-stone-500">E-Mail</dt>
          <dd className="font-medium">beratung@elbquartier-immobilien.de</dd>
        </div>
      </dl>
      <div className="space-y-3 pt-3">
        <Link
          href="/referenzen/immobilien-demo/kontakt"
          className="inline-flex w-full items-center justify-center rounded-[12px] bg-stone-900 px-4 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
        >
          Exposé anfragen
        </Link>
        <Link
          href="/referenzen/immobilien-demo/kontakt"
          className="inline-flex w-full items-center justify-center rounded-[12px] border border-stone-900 px-4 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
        >
          Besichtigung vereinbaren
        </Link>
      </div>
    </aside>
  );
}
