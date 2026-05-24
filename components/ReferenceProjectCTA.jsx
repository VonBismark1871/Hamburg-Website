import Link from 'next/link';

export default function ReferenceProjectCTA({ title, text, primaryLabel = 'Anfrage senden', primaryHref = '/kontakt', secondaryLabel = 'Details ansehen', secondaryHref = '/preise', className = '' }) {
  return (
    <section className={`section-container pb-14 ${className}`.trim()} aria-labelledby="reference-cta-heading">
      <div
        className="rounded-3xl px-6 py-8 sm:px-8 sm:py-10"
        style={{
          background: 'linear-gradient(135deg, #16131F 0%, #1E1A2B 100%)',
          border: '1px solid rgba(168,142,247,0.15)',
          boxShadow: '0 20px 60px rgba(124,58,237,0.1)'
        }}
      >
        <h2
          id="reference-cta-heading"
          className="text-2xl font-black tracking-tight sm:text-3xl"
          style={{ color: '#ECEAF3', letterSpacing: '-0.02em' }}
        >
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: '#9690A8' }}>{text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={primaryHref} className="primary-btn">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="secondary-btn">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
