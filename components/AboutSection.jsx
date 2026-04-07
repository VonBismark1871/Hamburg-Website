import Link from 'next/link';

export default function AboutSection({ headingTag = 'h2', title = 'Über uns', cta }) {
  const Heading = headingTag;

  return (
    <section className="section-container pb-16" aria-labelledby="about-heading">
      <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-3">
        <div>
          <Heading id="about-heading" className="text-xl font-semibold text-slateBlue">
            {title}
          </Heading>
          <p className="mt-3 text-slate-600">
            Hamburg Websites unterstützt lokale Unternehmen mit einem klar strukturierten, verlässlichen Webauftritt.
          </p>
          {cta ? (
            <Link href={cta.href} className="mt-4 inline-flex text-sm font-semibold text-indigo-700 transition hover:text-indigo-600">
              {cta.label}
            </Link>
          ) : null}
        </div>
        <div>
          <h3 className="font-semibold text-slateBlue">Klare Projektstruktur</h3>
          <p className="mt-2 text-slate-600">
            Von der Seitenstruktur bis zur Live-Schaltung erhalten Sie einen nachvollziehbaren Ablauf.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slateBlue">Fokus auf lokale Sichtbarkeit</h3>
          <p className="mt-2 text-slate-600">
            Inhalte und Seitentitel werden auf relevante Suchanfragen in Hamburg abgestimmt.
          </p>
        </div>
      </div>
    </section>
  );
}
