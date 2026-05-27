import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';
import ReferenceStickyBackButton from '../../../components/ReferenceStickyBackButton';

const R = '#E8321C';
const BG = '#080B10';
const PANEL = '#0D1421';
const CARD = '#111827';
const TEXT = '#F0F4FA';
const MUTED = '#6B7D99';
const GOLD = '#C8A86B';
const BARLOW = "'Barlow Condensed', sans-serif";
const GROTESK = "'Space Grotesk', sans-serif";

const SVC = [
  { n: '01', t: 'Inspektion', d: 'Herstellergerechte Inspektionen mit digitaler Dokumentation und transparenter Ergebnisrückmeldung.', p: 'ab 89 €' },
  { n: '02', t: 'Ölwechsel', d: 'Markenöl, neuer Filter, fachgerechte Entsorgung — schnell und verständlich abgewickelt.', p: 'ab 59 €' },
  { n: '03', t: 'Bremsenservice', d: 'Prüfung und Austausch von Belägen, Scheiben und Bremsflüssigkeit für maximale Sicherheit.', p: 'ab 129 €' },
  { n: '04', t: 'Reifenwechsel', d: 'Saisonaler Service inkl. Sichtprüfung, Auswuchten und optionaler Einlagerung.', p: 'ab 25 €/Rad' },
  { n: '05', t: 'Fahrzeugdiagnose', d: 'Präzise Fehleranalyse mit modernen OBD-Geräten — Ursache ermitteln, bevor Kosten entstehen.', p: 'ab 49 €' },
  { n: '06', t: 'Klimaservice', d: 'Wartung, Dichtigkeitsprüfung und Neubefüllung für zuverlässiges Innenraumklima.', p: 'ab 79 €' },
  { n: '07', t: 'HU / AU Vorbereitung', d: 'Vorabprüfung und gezielte Mängelbehebung für eine reibungslose Hauptuntersuchung.', p: 'ab 39 €' },
  { n: '08', t: 'Allgemeine Reparaturen', d: 'Fahrwerk bis Elektrik — fachgerecht mit Originalteilen oder hochwertigen Alternativen.', p: 'auf Anfrage' },
];

const STEPS = [
  { n: '01', t: 'Annahme', d: 'Zustandscheck & Auftragserfassung' },
  { n: '02', t: 'Diagnose', d: 'Elektronische Fehleranalyse' },
  { n: '03', t: 'Freigabe', d: 'Kostenvoranschlag & Rückmeldung' },
  { n: '04', t: 'Reparatur', d: 'Fachgerechte Ausführung' },
  { n: '05', t: 'Übergabe', d: 'Protokoll & Schlüsselübergabe' },
];

const NAV = [
  { href: '/referenzen/autoservice-demo', label: 'Start' },
  { href: '/referenzen/autoservice-demo/leistungen', label: 'Leistungen' },
  { href: '/referenzen/autoservice-demo/inspektion', label: 'Inspektion' },
  { href: '/referenzen/autoservice-demo/kontakt', label: 'Kontakt' },
];

const inputSt = {
  width: '100%', padding: '13px 16px', fontSize: 14, borderRadius: 4,
  backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(232,50,28,0.2)',
  color: TEXT, outline: 'none', fontFamily: GROTESK, boxSizing: 'border-box',
};

const TICKER = Array(8).fill(['Inspektion', 'Ölwechsel', 'Bremsen', 'Diagnose', 'Reifenwechsel', 'Klima', 'HU / AU']).flat();

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1800, t0 = performance.now();
    const run = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(run); else setN(to);
    };
    requestAnimationFrame(run);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function AutoserviceDemoPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovSvc, setHovSvc] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <SEOHead
        title="Elbwerk Kfz-Service Hamburg — Werkstatt, Inspektion & Diagnose"
        description="Ihre Autowerkstatt in Hamburg. Inspektionen, Bremsenservice, Reifenwechsel, Diagnose und Reparaturen mit fairen Preisen."
        path="/referenzen/autoservice-demo"
        noIndex
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ReferenceStickyBackButton />

      <div style={{ fontFamily: GROTESK, backgroundColor: BG, color: TEXT, overflowX: 'hidden' }}>

        {/* NAV */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: 'blur(16px)', transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(8,11,16,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(232,50,28,0.18)' : '1px solid transparent',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/referenzen/autoservice-demo" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{
                width: 34, height: 34, background: R, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: BARLOW, fontWeight: 900, fontSize: 15, color: '#fff',
                clipPath: 'polygon(0 0,100% 0,100% 72%,86% 100%,0 100%)',
              }}>EW</div>
              <div>
                <div style={{ fontFamily: BARLOW, fontWeight: 800, fontSize: 17, color: TEXT, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.1 }}>Elbwerk</div>
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Kfz-Service</div>
              </div>
            </Link>
            <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 4 }}>
              {NAV.map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: MUTED, fontSize: 13, fontWeight: 500, padding: '8px 14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = TEXT}
                  onMouseLeave={e => e.currentTarget.style.color = MUTED}
                >{label}</Link>
              ))}
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                background: R, color: '#fff', fontSize: 12, fontWeight: 700, padding: '10px 22px',
                textDecoration: 'none', marginLeft: 12, letterSpacing: '0.07em', textTransform: 'uppercase',
                clipPath: 'polygon(0 0,100% 0,100% 68%,93% 100%,0 100%)',
              }}>Termin anfragen</Link>
            </div>
            <button className="sm:hidden" onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: TEXT, fontSize: 22, padding: 4 }}
              aria-label="Menü">{menuOpen ? '✕' : '☰'}</button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                className="sm:hidden" style={{ background: PANEL, borderTop: '1px solid rgba(232,50,28,0.15)', overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {NAV.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                      color: MUTED, fontSize: 16, fontWeight: 600, padding: '13px 0', textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>{label}</Link>
                  ))}
                  <Link href="/referenzen/autoservice-demo/kontakt" onClick={() => setMenuOpen(false)} style={{
                    background: R, color: '#fff', fontSize: 14, fontWeight: 700, padding: '14px', textAlign: 'center',
                    textDecoration: 'none', marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>Termin anfragen</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          <motion.div style={{ scale: heroScale, y: heroY, position: 'absolute', inset: 0 }}>
            <Image src="/images/autoservice/hero.jpg"
              alt="Elbwerk Kfz-Service Hamburg" fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(8,11,16,0.97) 0%,rgba(8,11,16,0.78) 45%,rgba(8,11,16,0.25) 100%)' }} />
          </motion.div>
          <div style={{ position: 'absolute', top: '-15%', left: '-8%', width: '45%', height: '55%', background: 'radial-gradient(ellipse,rgba(232,50,28,0.11) 0%,transparent 68%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '80px 24px 60px', width: '100%' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                style={{ height: 2, backgroundColor: R }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: R }}>Kfz-Service · Hamburg-Hammerbrook</span>
            </motion.div>

            {['Ihre', 'Werkstatt'].map((word, i) => (
              <div key={word} style={{ overflow: 'hidden' }}>
                <motion.div initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.95, delay: 0.3 + i * 0.15, ease: [0.16,1,0.3,1] }}
                  style={{ fontFamily: BARLOW, fontSize: 'clamp(68px,11vw,154px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.01em', textTransform: 'uppercase', color: i === 1 ? R : '#fff' }}>
                  {word}
                </motion.div>
              </div>
            ))}

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
              style={{ fontSize: 'clamp(14px,1.4vw,17px)', color: MUTED, maxWidth: 400, lineHeight: 1.7, marginTop: 24, marginBottom: 34 }}>
              Faire Preise, klare Kommunikation, erfahrene Kfz-Mechatroniker. Vom Ölwechsel bis zur Vollinspektion.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/referenzen/autoservice-demo/kontakt" style={{
                background: R, color: '#fff', fontWeight: 700, fontSize: 13, padding: '15px 32px',
                textDecoration: 'none', letterSpacing: '0.07em', textTransform: 'uppercase',
                clipPath: 'polygon(0 0,100% 0,100% 68%,94% 100%,0 100%)', transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Werkstatttermin anfragen
              </Link>
              <Link href="/referenzen/autoservice-demo/leistungen" style={{
                border: '1px solid rgba(255,255,255,0.2)', color: TEXT, fontWeight: 500, fontSize: 13,
                padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.04em', transition: 'border-color 0.2s,transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = R; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Alle Leistungen →
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden lg:block"
              style={{
                position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(13,20,33,0.88)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(232,50,28,0.28)', padding: '28px 30px', width: 210,
              }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: R, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>Schnell-Info</div>
              {[['Mo–Fr','07:30–18:00'],['Samstag','09:00–13:00'],['Telefon','040 712 45 890']].map(([l,v]) => (
                <div key={l} style={{ marginBottom: 13 }}>
                  <div style={{ fontSize: 10, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>{l}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: TEXT }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: 18, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                <Link href="/referenzen/autoservice-demo/kontakt" style={{
                  display: 'block', textAlign: 'center', background: R, color: '#fff',
                  fontSize: 11, fontWeight: 700, padding: '10px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>Termin →</Link>
              </div>
            </motion.div>
          </div>
          <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 72, background: BG, clipPath: 'polygon(0 100%,100% 0,100% 100%)' }} />
        </section>

        {/* TICKER */}
        <div style={{ borderTop: '1px solid rgba(232,50,28,0.14)', borderBottom: '1px solid rgba(232,50,28,0.14)', background: PANEL, overflow: 'hidden', padding: '13px 0' }}>
          <motion.div animate={{ x: ['0%','-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            style={{ display: 'flex', width: 'max-content' }}>
            {TICKER.map((t, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', whiteSpace: 'nowrap', color: i % 2 === 0 ? MUTED : 'rgba(240,244,250,0.3)' }}>
                {t}<span style={{ color: R, margin: '0 22px' }}>◆</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* STATS */}
        <section style={{ background: `linear-gradient(135deg,${PANEL} 0%,#101928 100%)`, padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
              {[{ to:20,suf:'+',l:'Jahre\nErfahrung',s:'In Hamburg seit 2004'},{to:3,suf:'k+',l:'Fahrzeuge\nbetreut',s:'Pro Jahr'},{to:48,suf:'h',l:'Ø Bearbei-\ntungszeit',s:'Standard-Service'},{to:100,suf:'%',l:'Kosten-\nvoranschlag',s:'Vor jedem Auftrag'}]
                .map(({ to, suf, l, s }, i) => (
                <motion.div key={l} initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:'-60px' }}
                  transition={{ duration:0.6,delay:i*0.1 }}
                  style={{ padding:'38px 28px', background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.06)', borderTop:`3px solid ${R}`, position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute',right:-8,top:-8, fontFamily:BARLOW, fontSize:110, fontWeight:900, color:'rgba(255,255,255,0.022)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>{to}</div>
                  <div style={{ fontFamily:BARLOW, fontSize:60, fontWeight:900, color:R, letterSpacing:'-0.02em', lineHeight:1, marginBottom:8 }}>
                    <Counter to={to} suffix={suf} />
                  </div>
                  <div style={{ fontSize:14,fontWeight:600,color:TEXT,lineHeight:1.3,marginBottom:5,whiteSpace:'pre-line' }}>{l}</div>
                  <div style={{ fontSize:11,color:MUTED }}>{s}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ maxWidth:1280, margin:'0 auto', padding:'96px 24px' }}>
          <motion.div initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:'-60px' }} transition={{ duration:0.6 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:16, marginBottom:52 }}>
              <div>
                <div style={{ fontSize:11,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:R,marginBottom:10 }}>Leistungen</div>
                <h2 style={{ fontFamily:BARLOW, fontSize:'clamp(42px,5vw,72px)', fontWeight:900, letterSpacing:'-0.01em', color:TEXT, lineHeight:0.92, textTransform:'uppercase' }}>
                  Unser<br /><span style={{ color:R }}>Service-Spektrum</span>
                </h2>
              </div>
              <Link href="/referenzen/autoservice-demo/leistungen" style={{ color:R, fontSize:13, fontWeight:600, textDecoration:'none' }}>Alle Leistungen →</Link>
            </div>
          </motion.div>

          {SVC.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity:0,x:-16 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true,margin:'-30px' }} transition={{ duration:0.45,delay:i*0.04 }}
              onMouseEnter={() => setHovSvc(i)} onMouseLeave={() => setHovSvc(null)}
              style={{
                display:'grid', gridTemplateColumns:'40px 1fr auto', gap:'0 20px', alignItems:'center',
                padding:'20px 16px', position:'relative', transition:'background 0.3s',
                background: hovSvc===i ? 'rgba(232,50,28,0.04)' : 'transparent',
                borderTop:`1px solid ${i===0 ? 'rgba(232,50,28,0.28)' : 'rgba(255,255,255,0.05)'}`,
                borderBottom: i===SVC.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
              <motion.div animate={{ width: hovSvc===i ? 3 : 0 }} transition={{ duration:0.22 }}
                style={{ position:'absolute', left:0, top:0, bottom:0, background:R }} />
              <span style={{ fontFamily:BARLOW, fontSize:17, fontWeight:900, color: hovSvc===i ? R : 'rgba(232,50,28,0.38)', letterSpacing:'0.04em', transition:'color 0.2s' }}>{s.n}</span>
              <div>
                <h3 style={{ fontSize:15, fontWeight:700, color:TEXT, marginBottom:3, textTransform:'uppercase', letterSpacing:'0.03em' }}>{s.t}</h3>
                <p style={{ fontSize:12.5, color:MUTED, lineHeight:1.5, maxWidth:520 }}>{s.d}</p>
              </div>
              <div style={{ fontFamily:BARLOW, fontSize:19, fontWeight:800, color: hovSvc===i ? GOLD : 'rgba(200,168,107,0.55)', whiteSpace:'nowrap', transition:'color 0.22s' }}>{s.p}</div>
            </motion.div>
          ))}
          <div style={{ marginTop:10, fontSize:11, color:'rgba(107,125,153,0.5)' }}>* Richtwertpreise · Kostenvoranschlag vor jedem Auftrag</div>
        </section>

        {/* CINEMATIC BREAK */}
        <section style={{ position:'relative', height:'clamp(300px,44vw,520px)', overflow:'hidden' }}>
          <Image src="/images/autoservice/elbwerk-cinematic.jpg"
            alt="Elbwerk Werkstatt" fill style={{ objectFit:'cover', objectPosition:'center 50%' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,rgba(8,11,16,0.94) 0%,rgba(8,11,16,0.55) 50%,rgba(8,11,16,0.2) 100%)' }} />
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', padding:'0 clamp(24px,7vw,120px)' }}>
            <motion.div initial={{ opacity:0,x:-28 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
              <div style={{ width:40, height:2, background:R, marginBottom:20 }} />
              <blockquote style={{ fontFamily:BARLOW, fontSize:'clamp(28px,4.5vw,58px)', fontWeight:900, color:'#fff', textTransform:'uppercase', lineHeight:1.0, maxWidth:620, letterSpacing:'-0.01em' }}>
                „Qualität entsteht<br /><span style={{ color:R }}>nicht durch Zufall."</span>
              </blockquote>
              <p style={{ fontSize:12, color:MUTED, marginTop:16, letterSpacing:'0.06em' }}>ELBWERK KFZ-SERVICE · HAMBURG SEIT 2004</p>
            </motion.div>
          </div>
          <div style={{ position:'absolute', top:-1, left:0, right:0, height:60, background:BG, clipPath:'polygon(0 0,100% 0,100% 0,0 100%)' }} />
          <div style={{ position:'absolute', bottom:-1, left:0, right:0, height:60, background:BG, clipPath:'polygon(0 100%,100% 0,100% 100%)' }} />
        </section>

        {/* PROCESS */}
        <section style={{ padding:'96px 24px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto' }}>
            <motion.div initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <div style={{ fontSize:11,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:R,marginBottom:10 }}>Ablauf</div>
              <h2 style={{ fontFamily:BARLOW, fontSize:'clamp(38px,5vw,66px)', fontWeight:900, textTransform:'uppercase', color:TEXT, letterSpacing:'-0.01em', lineHeight:0.92, marginBottom:60 }}>
                Von der Annahme<br /><span style={{ color:R }}>zur Übergabe</span>
              </h2>
            </motion.div>

            {/* Desktop */}
            <div className="hidden lg:flex" style={{ alignItems:'flex-start' }}>
              {STEPS.map((step, i) => (
                <div key={step.n} style={{ flex:1, position:'relative' }}>
                  {i < STEPS.length - 1 && (
                    <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
                      transition={{ duration:0.7,delay:i*0.14+0.3,ease:'easeOut' }}
                      style={{ position:'absolute', top:19, left:'50%', right:'-50%', height:1, background:`linear-gradient(90deg,${R},rgba(232,50,28,0.15))`, transformOrigin:'left', zIndex:0 }} />
                  )}
                  <motion.div initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
                    transition={{ duration:0.5,delay:i*0.1 }} style={{ position:'relative', zIndex:1, paddingRight:16 }}>
                    <div style={{
                      width:40, height:40, border:`2px solid ${i===0?R:'rgba(232,50,28,0.3)'}`,
                      background:i===0?R:PANEL, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18,
                      fontFamily:BARLOW, fontSize:15, fontWeight:900, color:i===0?'#fff':R,
                    }}>{step.n}</div>
                    <div style={{ fontSize:13,fontWeight:700,color:TEXT,textTransform:'uppercase',letterSpacing:'0.07em',marginBottom:6 }}>{step.t}</div>
                    <div style={{ fontSize:12,color:MUTED,lineHeight:1.55 }}>{step.d}</div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col lg:hidden">
              {STEPS.map((step, i) => (
                <motion.div key={step.n} initial={{ opacity:0,x:-16 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
                  transition={{ duration:0.45,delay:i*0.08 }}
                  style={{ display:'flex', gap:18, paddingBottom:i<STEPS.length-1?28:0, position:'relative' }}>
                  {i < STEPS.length - 1 && <div style={{ position:'absolute', left:19, top:42, bottom:0, width:1, background:'rgba(232,50,28,0.2)' }} />}
                  <div style={{ width:40,height:40,flexShrink:0, background:i===0?R:PANEL, border:`2px solid ${i===0?R:'rgba(232,50,28,0.28)'}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:BARLOW, fontSize:15, fontWeight:900, color:i===0?'#fff':R }}>{step.n}</div>
                  <div style={{ paddingTop:8 }}>
                    <div style={{ fontSize:13,fontWeight:700,color:TEXT,textTransform:'uppercase',letterSpacing:'0.07em',marginBottom:5 }}>{step.t}</div>
                    <div style={{ fontSize:12.5,color:MUTED,lineHeight:1.55 }}>{step.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.5,delay:0.5 }} style={{ marginTop:44 }}>
              <Link href="/referenzen/autoservice-demo/inspektion" style={{
                display:'inline-block', background:R, color:'#fff', fontWeight:700, fontSize:13,
                padding:'14px 28px', textDecoration:'none', letterSpacing:'0.07em', textTransform:'uppercase',
                clipPath:'polygon(0 0,100% 0,100% 68%,94% 100%,0 100%)',
              }}>Inspektion anfragen →</Link>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section style={{ background:PANEL, padding:'96px 24px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto' }}>
            <motion.div initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ marginBottom:36 }}>
              <div style={{ fontSize:11,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:R,marginBottom:10 }}>Einblicke</div>
              <h2 style={{ fontFamily:BARLOW, fontSize:'clamp(36px,4.5vw,62px)', fontWeight:900, textTransform:'uppercase', color:TEXT, letterSpacing:'-0.01em', lineHeight:0.92 }}>Die Werkstatt</h2>
            </motion.div>
            <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gridTemplateRows:'240px 240px', gap:3 }}>
              {[
                { src:'/images/autoservice/diagnose.jpg', alt:'Diagnosearbeiten', label:'Diagnose', span:2 },
                { src:'/images/autoservice/reparatur.jpg', alt:'Reparaturarbeiten', label:'Reparatur', span:1 },
                { src:'/images/autoservice/uebergabe.jpg', alt:'Fahrzeugübergabe', label:'Übergabe', span:1 },
              ].map((img, i) => (
                <motion.div key={img.src} initial={{ opacity:0,scale:0.97 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }}
                  transition={{ duration:0.55,delay:i*0.1 }}
                  whileHover={{ scale:1.02 }}
                  style={{ position:'relative', overflow:'hidden', gridRow:`span ${img.span}`, cursor:'pointer' }}>
                  <Image src={img.src}
                    alt={img.alt} fill style={{ objectFit:'cover', transition:'transform 0.7s ease' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(8,11,16,0.78) 0%,transparent 55%)' }} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                    <span style={{ fontSize:10,fontWeight:700,color:R,letterSpacing:'0.18em',textTransform:'uppercase' }}>{img.label}</span>
                    <div style={{ width:26,height:26,background:'rgba(232,50,28,0.85)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,color:'#fff',fontWeight:700 }}>↗</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section style={{ padding:'96px 24px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto' }}>
            <div className="grid lg:grid-cols-[1fr_1.1fr]" style={{ gap:3 }}>
              <motion.div initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
                style={{ background:PANEL, padding:'48px 40px', borderTop:`3px solid ${R}` }}>
                <div style={{ fontSize:11,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:R,marginBottom:14 }}>Kontakt & Anfahrt</div>
                <h2 style={{ fontFamily:BARLOW, fontSize:'clamp(34px,4vw,56px)', fontWeight:900, color:TEXT, textTransform:'uppercase', letterSpacing:'-0.01em', lineHeight:0.92, marginBottom:40 }}>
                  Werkstatt-<br /><span style={{ color:R }}>termin</span><br />anfragen
                </h2>
                {[['Mo – Fr','07:30 – 18:00 Uhr'],['Samstag','09:00 – 13:00 Uhr']].map(([l,v]) => (
                  <div key={l} style={{ display:'flex', justifyContent:'space-between', padding:'11px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize:13,color:MUTED }}>{l}</span>
                    <span style={{ fontSize:13,color:TEXT,fontWeight:600 }}>{v}</span>
                  </div>
                ))}
                <p style={{ color:MUTED, fontSize:13, lineHeight:1.9, marginTop:24, marginBottom:28 }}>
                  Ausschläger Weg 62<br />20537 Hamburg-Hammerbrook<br />040 712 45 890<br />service@elbwerk-kfz.de
                </p>
                {['Kostenvoranschlag vor Beginn','Rückmeldung bei jedem Schritt','Kurze Wartezeiten durch Terminplanung'].map(pt => (
                  <div key={pt} style={{ display:'flex', gap:11, alignItems:'flex-start', marginBottom:9 }}>
                    <div style={{ width:18,height:18,background:R,flexShrink:0,marginTop:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,color:'#fff',clipPath:'polygon(0 0,100% 0,100% 68%,86% 100%,0 100%)' }}>✓</div>
                    <span style={{ fontSize:13,color:MUTED,lineHeight:1.5 }}>{pt}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,delay:0.14 }}
                style={{ background:CARD, padding:'48px 40px', border:'1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ color:MUTED, fontSize:13, lineHeight:1.7, marginBottom:28 }}>Anfrage stellen — wir melden uns innerhalb von 24 Stunden und bestätigen Ihren Wunschtermin.</p>
                <form onSubmit={e => e.preventDefault()} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <div className="grid sm:grid-cols-2" style={{ gap:14 }}>
                    {[['name','Name','text','Ihr Name'],['phone','Telefon','tel','040 / ...']].map(([id,lbl,type,ph]) => (
                      <div key={id}>
                        <label htmlFor={id} style={{ fontSize:10,fontWeight:700,color:MUTED,letterSpacing:'0.14em',textTransform:'uppercase',display:'block',marginBottom:7 }}>{lbl}</label>
                        <input id={id} type={type} placeholder={ph} style={inputSt} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="service" style={{ fontSize:10,fontWeight:700,color:MUTED,letterSpacing:'0.14em',textTransform:'uppercase',display:'block',marginBottom:7 }}>Leistung</label>
                    <select id="service" style={{ ...inputSt, color:MUTED }}>
                      <option value="">Bitte auswählen…</option>
                      {SVC.map(s => <option key={s.n} value={s.t}>{s.t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="msg" style={{ fontSize:10,fontWeight:700,color:MUTED,letterSpacing:'0.14em',textTransform:'uppercase',display:'block',marginBottom:7 }}>Fahrzeug & Anliegen</label>
                    <textarea id="msg" rows={4} placeholder="Fahrzeugtyp, Kennzeichen, Problembeschreibung…" style={{ ...inputSt, resize:'vertical' }} />
                  </div>
                  <button type="submit" style={{
                    background:R, color:'#fff', fontWeight:700, fontSize:13, padding:'16px', border:'none',
                    cursor:'pointer', fontFamily:GROTESK, letterSpacing:'0.08em', textTransform:'uppercase',
                    clipPath:'polygon(0 0,100% 0,100% 68%,97% 100%,0 100%)', transition:'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                    Terminanfrage senden →
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background:'#040609', borderTop:'1px solid rgba(232,50,28,0.1)', padding:'48px 24px 32px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto' }}>
            <div className="grid sm:grid-cols-[1.5fr_1fr]" style={{ gap:40, marginBottom:36 }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                  <div style={{ width:30,height:30,background:R,display:'flex',alignItems:'center',justifyContent:'center', fontFamily:BARLOW,fontWeight:900,fontSize:13,color:'#fff',clipPath:'polygon(0 0,100% 0,100% 68%,86% 100%,0 100%)' }}>EW</div>
                  <span style={{ fontFamily:BARLOW,fontWeight:800,fontSize:17,color:TEXT,letterSpacing:'0.05em',textTransform:'uppercase' }}>Elbwerk Kfz-Service</span>
                </div>
                <p style={{ color:'rgba(107,125,153,0.55)',fontSize:13,lineHeight:1.9 }}>
                  Ausschläger Weg 62 · 20537 Hamburg<br />040 712 45 890 · service@elbwerk-kfz.de
                </p>
              </div>
              <div>
                <p style={{ color:R,fontSize:10,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase',marginBottom:12 }}>Navigation</p>
                {[{href:'/referenzen/autoservice-demo/leistungen',label:'Alle Leistungen'},{href:'/referenzen/autoservice-demo/inspektion',label:'Inspektion'},{href:'/referenzen/autoservice-demo/kontakt',label:'Termin anfragen'}].map(({ href, label }) => (
                  <Link key={label} href={href} style={{ display:'block',color:'rgba(107,125,153,0.45)',fontSize:13,textDecoration:'none',marginBottom:7 }}>{label}</Link>
                ))}
              </div>
            </div>
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.04)',paddingTop:18,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8 }}>
              <p style={{ color:'rgba(42,53,72,0.7)',fontSize:12 }}>© 2025 Elbwerk Kfz-Service · Hamburg</p>
              <p style={{ color:'rgba(42,53,72,0.5)',fontSize:12 }}>Demo-Website · Hamburg Websites</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
