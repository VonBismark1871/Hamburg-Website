import Link from 'next/link';

export default function ReferenceProjectCTA({ title, text, primaryLabel = 'Eigene Demo anfragen', primaryHref = '/kontakt', secondaryLabel = 'Preise ansehen', secondaryHref = '/preise', className = '' }) {
  return (
    <section className={`section-container pb-14 ${className}`.trim()} aria-labelledby="reference-cta-heading">
      <div className="rounded-3xl border border-[#d8d3cb] bg-[#f8f5f1] px-6 py-8 sm:px-8 sm:py-10">
        <h2 id="reference-cta-heading" className="text-2xl font-semibold tracking-tight text-[#2f2a29] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#57504b]">{text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex rounded-2xl bg-[#2f2a29] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[#1f1a1a]"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex rounded-2xl border border-[#b8b0a6] bg-[var(--bg-card)] px-6 py-3 text-sm font-semibold text-[#2f2a29] transition hover:border-[#8f867c]"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
