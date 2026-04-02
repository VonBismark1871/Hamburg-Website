import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const processSteps = [
  { number: '01', title: 'Anfrage', text: 'Sie schreiben uns kurz — Branche, ungefähres Ziel, ob Sie bereits eine Website haben. Kein ausformuliertes Briefing nötig.' },
  { number: '02', title: 'Kostenlose Demo-Website', text: 'Wir bauen eine erste Version Ihrer Website — ohne dass Sie dafür irgendetwas zahlen.' },
  { number: '03', title: 'Abstimmung', text: 'Sie prüfen die Demo und sagen uns, was passt und was nicht.' },
  { number: '04', title: 'Umsetzung', text: 'Auf Basis der Abstimmung bauen wir die vollständige Website — technisch sauber, schnell geladen, mobiloptimiert.' },
  { number: '05', title: 'Prüfung & Livegang', text: 'Sie erhalten die fertige Website zur Prüfung. Danach gehen wir live.' }
];

export default function AblaufPage() {
  return (
    <>
      <SEOHead title="Ablauf | Hamburg Websites" description="So läuft Ihr Website-Projekt ab: transparent von der Anfrage bis zum Livegang – inklusive kostenloser Demo-Website." path="/ablauf" />
      <Header />
      <main>
        <section className="section-spacing" aria-labelledby="ablauf-hero-heading"><div className="section-container"><h1 id="ablauf-hero-heading" className="text-5xl"><span className="gradient-text">So</span> läuft Ihr Projekt ab</h1></div></section>
        <section className="section-spacing bg-[var(--bg-surface)]"><div className="section-container"><ol className="grid gap-5 md:grid-cols-5">{processSteps.map((step, i) => <motion.li key={step.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.08,ease:'easeOut'}} viewport={{once:true,amount:0.2}} className="card group p-5"><span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-purple)] text-[var(--text-primary)] group-hover:animate-pulse">{step.number}</span><h3 className="text-lg">{step.title}</h3><p className="mt-2 text-sm">{step.text}</p></motion.li>)}</ol></div></section>
        <div className="section-container pb-24"><Link href="/kontakt" className="primary-btn">Zur Kontaktanfrage</Link></div>
      </main>
      <Footer />
    </>
  );
}
