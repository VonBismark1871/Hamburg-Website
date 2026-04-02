import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const team = ['HW', 'AK', 'LS'];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead title="Über uns – Hamburg Websites" description="Hamburg Websites ist ein spezialisiertes Webstudio für lokale Unternehmen — mit Fokus auf Struktur, Klarheit und messbare Ergebnisse." path="/ueber-uns" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="ueber-uns-hero-heading"><div className="section-container"><h1 id="ueber-uns-hero-heading" className="text-5xl"><span className="gradient-text">Ein</span> Studio. Ein Ansprechpartner. Klare Arbeit.</h1><p className="mt-5 max-w-3xl text-lg">Hamburg Websites ist ein spezialisiertes Webstudio für lokale Unternehmen — mit dem Fokus auf das, was wirklich zählt: Struktur, Klarheit und messbare Ergebnisse.</p></div></section>
        <section className="section-spacing bg-[var(--bg-surface)]"><div className="section-container"><p className="section-label">Team</p><h2 className="text-3xl">Team</h2><div className="mt-6 flex gap-4">{team.map((initials, i)=><div key={initials} className={`flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-subtle)] font-semibold ${i%2===0?'text-[var(--accent-purple-light)]':'text-[var(--accent-green)]'} bg-[var(--bg-card)]`}>{initials}</div>)}</div></div></section>
        <div className="section-container section-spacing"><Link href="/kontakt" className="primary-btn">Kostenlose Demo starten</Link></div>
      </main>
      <Footer />
    </>
  );
}
