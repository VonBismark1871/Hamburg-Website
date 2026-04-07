import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] shadow-[0_30px_80px_-48px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:shadow-[0_38px_90px_-45px_rgba(0,0,0,0.45)]">
      <figure className="relative overflow-hidden">
        <Image
          src={property.image}
          alt={property.imageAlt || `${property.type} in ${property.district} in Hamburg`}
          width={1500}
          height={1000}
          className="h-64 w-full object-cover"
        />
        {property.label && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--bg-card)]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-stone-800">
            {property.label}
          </span>
        )}
      </figure>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">{property.district}</p>
          <h3 className="mt-2 text-xl font-semibold leading-tight text-stone-900">{property.title}</h3>
          <p className="mt-2 text-sm text-stone-600">{property.angle}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-stone-700">
          <div>
            <dt className="text-stone-500">Objektart</dt>
            <dd className="font-medium">{property.type}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Wohnfläche</dt>
            <dd className="font-medium">{property.area}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Zimmer</dt>
            <dd className="font-medium">{property.rooms}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Details</dt>
            <dd className="font-medium">{property.extra}</dd>
          </div>
        </dl>

        <div className="flex items-center justify-between gap-4 border-t border-stone-200 pt-4">
          <p className="text-lg font-semibold text-stone-900">{property.price}</p>
          <Link
            href={property.href}
            className="inline-flex items-center rounded-[12px] border border-stone-800 px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
          >
            Zum Exposé
          </Link>
        </div>
      </div>
    </article>
  );
}
