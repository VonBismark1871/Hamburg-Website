import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../SEOHead';
import Header from '../../Header';
import ReferenceStickyBackButton from '../../ReferenceStickyBackButton';
import InquiryCard from './InquiryCard';

export default function PropertyExposePage({ path, content }) {
  return (
    <>
      <SEOHead title={content.seoTitle} description={content.seoDescription} path={path} />
      <Header />
      <main className="bg-[#f6f3ee] pb-20 text-stone-900">
        <section className="section-container pt-10" aria-labelledby="expose-heading">
          <figure className="overflow-hidden rounded-[2rem]">
            <Image src={content.heroImage} alt={content.heroAlt} width={2000} height={1250} priority className="h-[540px] w-full object-cover" />
          </figure>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">{content.badge}</p>
              <h1 id="expose-heading" className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-3xl text-stone-700">{content.intro}</p>

              <dl className="mt-8 grid gap-4 rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6 sm:grid-cols-2">
                {content.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm text-stone-500">{label}</dt>
                    <dd className="text-base font-semibold text-stone-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <InquiryCard />
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="galerie-heading">
          <h2 id="galerie-heading" className="text-3xl font-semibold sm:text-4xl">
            Bildergalerie
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {content.gallery.map((image) => (
              <figure key={image.src + image.alt} className="overflow-hidden rounded-2xl border border-stone-300">
                <Image src={image.src} alt={image.alt} width={1400} height={1000} className="h-64 w-full object-cover" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="beschreibung-heading">
          <div className="grid gap-5">
            <article className="rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6">
              <h2 id="beschreibung-heading" className="text-2xl font-semibold">
                Objektbeschreibung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{content.description}</p>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6">
              <h2 className="text-2xl font-semibold">Ausstattung</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-700">
                {content.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6">
              <h2 className="text-2xl font-semibold">Lage</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{content.location}</p>
            </article>
            <article className="rounded-2xl border border-stone-300 bg-[var(--bg-card)] p-6">
              <h2 className="text-2xl font-semibold">Sonstiges</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{content.misc}</p>
            </article>
          </div>
        </section>

        <section className="section-container pt-14" aria-labelledby="standort-heading">
          <div className="rounded-2xl border border-stone-300 bg-[#ebe6de] p-6">
            <h2 id="standort-heading" className="text-2xl font-semibold">
              Standort in Hamburg
            </h2>
            <p className="mt-3 text-sm text-stone-700">{content.locationSummary}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/referenzen/immobilien-demo/objekte"
              className="inline-flex rounded-md border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-stone-100"
            >
              Weitere Objekte ansehen
            </Link>
            <Link
              href="/referenzen/immobilien-demo/kontakt"
              className="inline-flex rounded-md bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
            >
              Besichtigung vereinbaren
            </Link>
          </div>
        </section>
      </main>
      <ReferenceStickyBackButton />
    </>
  );
}
