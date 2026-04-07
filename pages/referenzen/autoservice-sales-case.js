import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const goals = [
  'Mehr qualifizierte Anfragen über Website und Telefon',
  'Bessere Sichtbarkeit für lokale Suchanfragen in Hamburg',
  'Klare Darstellung von Leistungen für schnellere Entscheidungen',
  'Professioneller Eindruck gegenüber Neu- und Bestandskunden'
];

const implementationPoints = [
  'Startseite mit Leistungsspektrum, Vorteilen und schnellen Kontaktoptionen',
  'Leistungsseiten für Inspektion, HU/AU-Vorbereitung, Reifenservice und Klimaservice',
  'Über-uns-Bereich mit Team, Werkstattprofil und vertrauensbildender Kommunikation',
  'Kontaktseite mit Formular, Telefonnummer, Öffnungszeiten und Standort'
];

const seoPoints = [
  'Saubere H1–H3-Struktur und klare Seitenhierarchie',
  'Aussagekräftige Seitentitel und Meta-Descriptions',
  'Lokale Keyword-Ausrichtung, z. B. „Kfz-Werkstatt Hamburg“',
  'Interne Verlinkung zwischen Leistungen und Kontakt',
  'Schlanke Seitenstruktur als Basis für gute Nutzererfahrung'
];

const conversionPoints = [
  'Sichtbare CTA-Buttons im oberen Seitenbereich',
  'Klickbare Telefonnummer auf Mobilgeräten',
  'Kurzes, verständliches Kontaktformular',
  'FAQ-Element zur Reduktion typischer Rückfragen'
];

const contentModules = [
  'Leistungs-Teaser mit klarem Kundennutzen',
  'Checklisten wie „Was mitbringen zur Inspektion?“',
  'Kurze Prozessdarstellung „So läuft ein Termin ab“',
  'Lokaler Bezug zu Hamburger Stadtteilen',
  'FAQ zu Terminen, Dauer, Ersatzfahrzeug und Kostenrahmen'
];

export default function AutoServiceSalesCasePage() {
  return (
    <>
      <SEOHead
        title="Auto Service Website (Demo) – Sales Case Study"
        description="Demo einer Kfz-Werkstatt-Website für Hamburg: klare Struktur, lokale SEO-Basis und starke CTAs – ehrlich ohne Ranking- oder Erfolgsversprechen."
        path="/referenzen/autoservice-sales-case"
      />
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <ReferenceStickyBackButton />

        <main className="section-container py-12 sm:py-14">
          <article className="mx-auto max-w-4xl rounded-[32px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-6 shadow-soft sm:p-10">
            <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
              Demo Case Study · Kein echter Kundenauftrag
            </p>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slateBlue sm:text-4xl">
              Auto Service Website (Demo) – Sales Case Study
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Dieses Projekt ist ein <strong>konzeptionelles Demo-Beispiel</strong> für eine mögliche Website einer Kfz-Werkstatt in Hamburg.
              Es zeigt Ansatz, Struktur und Conversion-Logik – <strong>ohne reale Kundendaten, ohne Referenzlogos und ohne garantierte Ergebnisse</strong>.
            </p>

            <section className="mt-10" aria-labelledby="ziel-heading">
              <h2 id="ziel-heading" className="text-2xl font-bold text-slateBlue">Ziel (Business Outcome)</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {goals.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="umsetzung-heading">
              <h2 id="umsetzung-heading" className="text-2xl font-bold text-slateBlue">Umsetzung (Struktur, Design, UX)</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {implementationPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-500">
                UX-Fokus: mobile-first, kurze Wege zur Anfrage, klare Überschriften und gut scanbare Inhalte.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="seo-heading">
              <h2 id="seo-heading" className="text-2xl font-bold text-slateBlue">SEO-Basis (ohne Ranking-Versprechen)</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {seoPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-[20px] bg-slate-100 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] px-4 py-3 text-sm text-slate-700">
                Hinweis: Diese Maßnahmen verbessern die Ausgangslage, garantieren jedoch keine bestimmten Rankings.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="conversion-heading">
              <h2 id="conversion-heading" className="text-2xl font-bold text-slateBlue">Conversion-Elemente</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {conversionPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="content-heading">
              <h2 id="content-heading" className="text-2xl font-bold text-slateBlue">Content-Bausteine</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {contentModules.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="scope-heading">
              <h2 id="scope-heading" className="text-2xl font-bold text-slateBlue">Lieferumfang (Demo)</h2>
              <p className="mt-4 text-slate-700">
                Enthalten sind eine beispielhafte Seitenstruktur, Mustertexte für Leistungs- und Kontaktseiten, CTA-Vorschläge
                sowie eine grundlegende Onpage-SEO-Struktur.
              </p>
              <p className="mt-4 rounded-[20px] bg-amber-50 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] px-4 py-3 text-sm font-medium text-amber-900">
                Abgrenzung: Keine echten Kundenkennzahlen, keine Referenzlogos, keine Leistungsversprechen mit garantierten Ergebnissen.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="cta-heading">
              <h2 id="cta-heading" className="text-2xl font-bold text-slateBlue">Passende nächste Schritte</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/kontakt" className="rounded-[20px] bg-accent px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-indigo-500">
                  Kostenlose Demo anfragen
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] px-6 py-3 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
                >
                  Unverbindliches Website-Konzept erhalten
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] px-6 py-3 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
                >
                  15-Minuten Erstgespräch buchen
                </Link>
              </div>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
