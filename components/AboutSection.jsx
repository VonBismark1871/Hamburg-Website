import Link from 'next/link';

export default function AboutSection({ headingTag = 'h2', title = 'Über uns', cta }) {
  const Heading = headingTag;

  return (
    <section className="section-container pb-16" aria-labelledby="about-heading">
      <div
        className="grid gap-6 rounded-2xl p-6 sm:grid-cols-3"
        style={{ background: '#16131F', border: '1px solid rgba(168,142,247,0.12)' }}
      >
        <div>
          <Heading id="about-heading" className="text-xl font-semibold" style={{ color: '#ECEAF3' }}>
            {title}
          </Heading>
          <p className="mt-3 text-sm leading-7" style={{ color: '#9690A8' }}>
            Hamburg Websites unterstützt Unternehmen mit Webauftritten, die zu Ziel, Umfang und Budget passen.
          </p>
          {cta ? (
            <Link href={cta.href} className="mt-4 inline-flex text-sm font-semibold transition" style={{ color: '#A855F7' }}>
              {cta.label}
            </Link>
          ) : null}
        </div>
        <div>
          <h3 className="font-semibold" style={{ color: '#ECEAF3' }}>Klare Projektstruktur</h3>
          <p className="mt-2 text-sm leading-7" style={{ color: '#9690A8' }}>
            Von der Seitenstruktur bis zur Live-Schaltung erhalten Sie einen nachvollziehbaren Ablauf.
          </p>
        </div>
        <div>
          <h3 className="font-semibold" style={{ color: '#ECEAF3' }}>Passender Umfang</h3>
          <p className="mt-2 text-sm leading-7" style={{ color: '#9690A8' }}>
            Vom schlanken Einstieg bis zu erweiterten Seiten wird nur umgesetzt, was wirklich hilft.
          </p>
        </div>
      </div>
    </section>
  );
}
