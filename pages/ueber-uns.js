import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEOHead from '../components/SEOHead';

const principles = [
  {
    number: '01',
    title: 'Struktur vor Dekoration',
    text: 'Bevor das Design entsteht, steht die Logik der Seite. Welche Information braucht der Besucher wann — und was soll er danach tun?',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Direkter Kontakt, kein Ticketsystem',
    text: 'Sie sprechen mit der Person, die Ihre Website baut. Keine Weiterleitungen, keine Warteschleifen, keine Missverständnisse durch zwischengeschaltete Stellen.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Erst sehen, dann entscheiden',
    text: 'Daher die kostenlose Demo. Wir zeigen, wie Ihre Website aussehen könnte — bevor Sie irgendetwas beauftragen oder bezahlen.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Ehrliche Einschätzungen',
    text: 'Wenn ein einfacherer Ansatz besser passt, sagen wir das. Kein Upselling, keine Funktionen, die Sie nicht brauchen.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const studioBenefits = [
  {
    title: 'Volle Aufmerksamkeit',
    text: 'Ihr Projekt landet nicht in einer Warteschlange zwischen Großkunden.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Schnelle Entscheidungen',
    text: 'Keine internen Freigabeprozesse. Änderungen werden direkt umgesetzt.',
    color: 'from-primary to-primary-dark'
  },
  {
    title: 'Klare Verantwortung',
    text: 'Eine Person ist für Ihr Projekt verantwortlich — von Anfang bis Livegang.',
    color: 'from-accent to-orange-500'
  },
  {
    title: 'Fairer Preis',
    text: 'Kein Agenturaufschlag. Sie zahlen für die Leistung, nicht für das Büro.',
    color: 'from-green-500 to-emerald-600'
  }
];

const promises = [
  { text: 'Klare Rückmeldungen ohne Fachjargon', icon: '01' },
  { text: 'Realistische Zeitrahmen', icon: '02' },
  { text: 'Preisrange vor Projektstart', icon: '03' },
  { text: 'Saubere technische Umsetzung', icon: '04' },
  { text: 'Keine versteckten Kosten', icon: '05' },
  { text: 'Antwort innerhalb von 24 Stunden', icon: '06' }
];

export default function UeberUnsPage() {
  return (
    <>
      <SEOHead
        title="Über uns – Hamburg Websites"
        description="Hamburg Websites entwickelt Websites für unterschiedliche Ziele, Budgets und Stilrichtungen — mit Fokus auf Struktur, Klarheit und realistische Umsetzung."
        path="/ueber-uns"
      />
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                Über uns
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ein Ansprechpartner.{' '}
                <span className="text-accent">Viele Möglichkeiten.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Hamburg Websites arbeitet für Unternehmen, die eine passende Website brauchen: mal kompakt und lokal, mal stärker gestaltet, mal mit mehr Seiten oder Funktionen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Wofür wir stehen
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Viele Websites sehen gut aus — aber führen niemanden zur Anfrage. Wir bauen Seiten, die{' '}
                <span className="text-gradient">beides</span> können.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Work Principles */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Arbeitsweise
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Unsere <span className="text-gradient">Prinzipien</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary mb-2 block">{item.number}</span>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Small Studio */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Warum wir
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Warum ein <span className="text-gradient">kleines Studio?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioBenefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                  <h3 className="text-lg font-bold text-foreground mb-3 mt-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <svg className="w-16 h-16 text-white/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
                Hamburg Websites ist bewusst schlank aufgestellt: direkte Abstimmung, klare Entscheidungen und Websites, deren Umfang zum tatsächlichen Bedarf passt.
              </blockquote>
              <p className="text-white/60">
                — Hamburg Websites, gegründet für klare Webprojekte in Hamburg und darüber hinaus
              </p>
            </motion.div>
          </div>
        </section>

        {/* Promises */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Zusagen
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Unsere <span className="text-gradient">Versprechen</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {promises.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl"
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Klingt das nach der richtigen Zusammenarbeit?
                </h2>
                <p className="text-muted text-lg mb-8">
                  Schauen Sie sich unsere Referenzen an oder starten Sie direkt mit einer kostenlosen Demo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    Kostenlose Demo starten
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/referenzen" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-foreground font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Referenzen ansehen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
