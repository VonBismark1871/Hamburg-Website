import Link from 'next/link';
import SEOHead from '../SEOHead';
import ReferenceBackButton from './ReferenceBackButton';

const palette = {
  dark: {
    page: 'bg-zinc-950 text-zinc-100',
    panel: 'border-zinc-700 bg-zinc-900/80',
    muted: 'text-zinc-300',
    primary: 'bg-[var(--bg-card)] text-zinc-900 hover:bg-zinc-200',
    secondary: 'border-zinc-500 text-zinc-100 hover:bg-zinc-800'
  },
  clean: {
    page: 'bg-sky-50 text-slate-800',
    panel: 'border-sky-100 bg-[var(--bg-card)]/95',
    muted: 'text-slate-600',
    primary: 'bg-sky-600 text-[var(--text-primary)] hover:bg-sky-700',
    secondary: 'border-slate-300 text-slate-700 hover:bg-slate-50'
  },
  calm: {
    page: 'bg-emerald-50 text-slate-800',
    panel: 'border-emerald-100 bg-[var(--bg-card)]/95',
    muted: 'text-slate-600',
    primary: 'bg-emerald-600 text-[var(--text-primary)] hover:bg-emerald-700',
    secondary: 'border-slate-300 text-slate-700 hover:bg-slate-50'
  },
  contrast: {
    page: 'bg-slate-100 text-slate-900',
    panel: 'border-slate-300 bg-[var(--bg-card)]',
    muted: 'text-slate-600',
    primary: 'bg-slate-900 text-[var(--text-primary)] hover:bg-black',
    secondary: 'border-slate-300 text-slate-700 hover:bg-slate-50'
  },
  premium: {
    page: 'bg-stone-100 text-stone-900',
    panel: 'border-stone-300 bg-[var(--bg-card)]/95',
    muted: 'text-stone-600',
    primary: 'bg-stone-900 text-[var(--text-primary)] hover:bg-black',
    secondary: 'border-stone-300 text-stone-800 hover:bg-stone-50'
  }
};

export default function ReferenceDemoTemplate({ title, description, path, business, highlights, tone = 'clean' }) {
  const styles = palette[tone] || palette.clean;

  return (
    <>
      <SEOHead title={`${title} – Demo`} description={description} path={path} />
      <div className={`min-h-screen ${styles.page}`}>
        <ReferenceBackButton />
        <main className="section-container py-16 sm:py-20">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">Beispielprojekt</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className={`mt-5 text-lg ${styles.muted}`}>{description}</p>
          </header>

          <section className="mt-10 grid gap-6 lg:grid-cols-3" aria-label="Projektinhalte">
            <article className={`rounded-[20px] border p-6 lg:col-span-2 ${styles.panel}`}>
              <h2 className="text-2xl font-semibold">{business}</h2>
              <p className={`mt-3 ${styles.muted}`}>
                Diese Demo zeigt eine mögliche Struktur für eine moderne Unternehmenswebsite. Inhalte, Farben und Bildwelt können individuell auf Ihr Unternehmen angepasst werden.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/kontakt" className={`rounded-[12px] px-5 py-2.5 text-sm font-semibold transition ${styles.primary}`}>
                  Projekt anfragen
                </Link>
                <Link href="/preise" className={`rounded-[12px] border px-5 py-2.5 text-sm font-semibold transition ${styles.secondary}`}>
                  Preise ansehen
                </Link>
              </div>
            </article>

            <aside className={`rounded-[20px] border p-6 ${styles.panel}`}>
              <h2 className="text-lg font-semibold">Highlights</h2>
              <ul className={`mt-4 space-y-2 text-sm ${styles.muted}`}>
                {highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
