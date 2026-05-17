import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEOHead from '../../components/SEOHead';
import ReferenceStickyBackButton from '../../components/ReferenceStickyBackButton';

const oldProblems = [
  'Unklare Startseite ohne klare Handlungsaufforderung.',
  'Leistungen waren nur als Fließtext beschrieben und schwer vergleichbar.',
  'Kontakt war erst im Footer sichtbar, auf Mobilgeräten kaum auffindbar.',
  'Keine erkennbare Priorisierung für lokale Suchanfragen.'
];

const newConceptPoints = [
  'Startseite mit klarer Value Proposition, sichtbarem CTA und kurzem Vertrauensbereich.',
  'Leistungsblöcke mit Nutzen-orientierten Überschriften statt interner Fachsprache.',
  'Kompakte Navigationsstruktur mit schnellen Wegen zu Kontakt und Angebot.',
  'Mobile-first Layout mit kurzen Absätzen, klaren Zwischenüberschriften und Fokus auf Lesbarkeit.'
];

const conversionPoints = [
  'Primärer CTA im Hero und wiederholt nach jedem wichtigen Inhaltsblock.',
  'Zweiter CTA für unverbindliche Erstberatung für Besucher mit höherem Informationsbedarf.',
  'Kontaktformular mit wenigen Feldern und klarer Erwartung: Rückmeldung innerhalb eines Werktags (als Prozesshinweis, kein Erfolgsversprechen).',
  'Sichtbare Kontaktoptionen (Telefon und Formular) ohne Scroll-Hürden.'
];

const seoBasics = [
  'Saubere Struktur mit einer H1 und logisch aufgebauten H2-Bereichen.',
  'Sprechende Seitentitel und Meta-Descriptions pro Unterseite.',
  'Lokale Relevanz durch präzise Ortsbezüge in Inhalten und Leistungsseiten.',
  'Interne Verlinkung zwischen Leistungen, FAQ und Kontaktseite.'
];

export default function RedesignBeispiel1Page() {
  return (
    <>
      <SEOHead
        title="Beispiel-Redesign für lokale Dienstleister"
        description="Ehrliches Vorher/Nachher-Beispiel einer Website-Überarbeitung: klare Struktur, bessere Nutzerführung, Conversion-Fokus und solide SEO-Basis."
        path="/referenzen/redesign-beispiel-1"
      />
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <ReferenceStickyBackButton />

        <main className="section-container py-12 sm:py-14">
          <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
            <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
              Beispiel-Redesign · Kein echter Kunde
            </p>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slateBlue sm:text-4xl">
              Beispiel-Redesign (kein Kunde)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Diese Seite zeigt ein <strong>ehrliches Vorher/Nachher-Szenario</strong> als Demo. Es handelt sich
              ausdrücklich <strong>nicht</strong> um ein reales Kundenprojekt. Ziel ist, transparent zu zeigen,
              wie ein strukturiertes Redesign inhaltlich und vertrieblich gedacht wird.
            </p>

            <section className="mt-10" aria-labelledby="ausgangslage-heading">
              <h2 id="ausgangslage-heading" className="text-2xl font-bold text-slateBlue">Ausgangslage</h2>
              <p className="mt-4 text-slate-700">
                Ausgangspunkt ist eine typische lokale Dienstleister-Website: veraltet im Aufbau, schwer scanbar auf
                dem Smartphone und ohne klare Führung zur Kontaktaufnahme. Inhalte waren vorhanden, aber nicht so
                aufbereitet, dass Interessenten schnell Entscheidungen treffen können.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="probleme-heading">
              <h2 id="probleme-heading" className="text-2xl font-bold text-slateBlue">Probleme der alten Seite</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {oldProblems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="konzept-heading">
              <h2 id="konzept-heading" className="text-2xl font-bold text-slateBlue">Neues Konzept</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {newConceptPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="conversion-heading">
              <h2 id="conversion-heading" className="text-2xl font-bold text-slateBlue">Conversion-Verbesserungen</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {conversionPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10" aria-labelledby="seo-heading">
              <h2 id="seo-heading" className="text-2xl font-bold text-slateBlue">SEO-Basis</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {seoBasics.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Wichtig: SEO-Basis schafft bessere Voraussetzungen, ersetzt aber keine fortlaufende Optimierung und gibt
                keine Garantie auf konkrete Rankings.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="demo-heading">
              <h2 id="demo-heading" className="text-2xl font-bold text-slateBlue">Demo-Abgrenzung</h2>
              <p className="mt-4 text-slate-700">
                Dieses Beispiel enthält <strong>keine echten Kundendaten, keine Umsatzversprechen, keine erfundenen
                Testimonials und keine Markenlogos</strong>. Es dient als nachvollziehbares Muster dafür, wie ein
                Redesign strategisch aufgebaut werden kann.
              </p>
            </section>

            <section className="mt-10" aria-labelledby="cta-heading">
              <h2 id="cta-heading" className="text-2xl font-bold text-slateBlue">CTA</h2>
              <p className="mt-4 text-slate-700">
                Wenn Sie möchten, übertragen wir dieses Vorgehen auf Ihre Branche und erstellen ein konkretes
                Redesign-Konzept für Ihre aktuelle Website.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/kontakt" className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
                  Redesign-Konzept anfragen
                </Link>
                <Link
                  href="/referenzen"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
                >
                  Weitere Demo-Beispiele ansehen
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
