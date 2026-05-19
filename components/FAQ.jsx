'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const faqItems = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answerText:
      'Die Erstellung einer typischen Unternehmenswebsite dauert in der Regel zwischen 7 und 14 Tagen. Der genaue Zeitraum hängt vom Umfang der Inhalte, der Seitenanzahl und den Feedbackschleifen ab.'
  },
  {
    question: 'Wie viel kostet eine Website?',
    answerText:
      'Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über typische Projektbudgets finden Sie auf unserer Preisübersicht.',
    answer: (
      <>
        Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über
        typische Projektbudgets finden Sie auf unserer{' '}
        <Link href="/preise" className="font-semibold text-primary hover:underline underline-offset-4">
          Preisübersicht
        </Link>
        .
      </>
    )
  },
  {
    question: 'Ist die Demo wirklich kostenlos?',
    answerText:
      'Ja. Sie erhalten eine unverbindliche Demo-Vorschau, damit Sie Stil, Struktur und Aufbau Ihrer möglichen Website sehen können, bevor Sie sich für eine Umsetzung entscheiden.'
  },
  {
    question: 'Wie viele Änderungen sind im Preis enthalten?',
    answerText:
      'Je nach Paket sind ein bis zwei Korrekturschleifen enthalten. Nach Fertigstellung erhalten Sie außerdem eine Prüfungsphase von bis zu 7 Tagen, in der kleinere Anpassungen vorgenommen werden können.'
  },
  {
    question: 'Was passiert nach der Fertigstellung der Website?',
    answerText:
      'Nach der Veröffentlichung können Sie Ihre Website selbst verwalten oder optional eine laufende Betreuung buchen. Mehr Informationen dazu finden Sie im Bereich Websitepflege und Hosting.',
    answer: (
      <>
        Nach der Veröffentlichung können Sie Ihre Website selbst verwalten oder optional eine laufende Betreuung
        buchen. Mehr Informationen dazu finden Sie im Bereich{' '}
        <Link href="/preise" className="font-semibold text-primary hover:underline underline-offset-4">
          Websitepflege und Hosting
        </Link>
        .
      </>
    )
  },
  {
    question: 'Bieten Sie Hosting und technische Betreuung an?',
    answerText:
      'Ja. Auf Wunsch übernehmen wir Hosting, technische Betreuung sowie kleinere Inhaltsanpassungen im Rahmen einer monatlichen Websitepflege.'
  },
  {
    question: 'Können bestehende Websites überarbeitet werden?',
    answerText:
      'Ja. Bestehende Websites können modernisiert, strukturell verbessert und für mobile Geräte sowie Suchmaschinen optimiert werden.'
  },
  {
    question: 'Benötige ich eigene Texte und Bilder?',
    answerText:
      'Idealerweise stellen Sie Texte und Bilder bereit. Falls nötig unterstützen wir jedoch bei Struktur, Formulierung und Bildauswahl.'
  },
  {
    question: 'Kann meine Website später erweitert werden?',
    answerText:
      'Ja. Websites werden so aufgebaut, dass sie später um zusätzliche Seiten, Inhalte oder Funktionen erweitert werden können.'
  }
];

const FAQItem = ({ question, answer, answerText, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className={`w-full text-left transition-all duration-300 ${
          isOpen 
            ? 'bg-primary rounded-2xl shadow-lg shadow-primary/10' 
            : 'bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-foreground'}`}>
              {question}
            </span>
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-white/20' : 'bg-primary/5'
            }`}>
              <svg 
                className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'text-white rotate-180' : 'text-primary'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-white/90 leading-relaxed">
                  {answer ?? answerText}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
};

export default function FAQ({
  headingTag = 'h2',
  title = 'Häufig gestellte Fragen',
  intro = 'Hier finden Sie Antworten auf typische Fragen zur Planung, Erstellung und Betreuung Ihrer neuen Unternehmenswebsite.',
  sectionId = 'faq',
  items = faqItems,
  showFinalCta = true
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const Heading = headingTag;

  return (
    <section className="py-24 bg-muted/30" id={sectionId} aria-labelledby="faq-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <Heading id="faq-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title.includes('Fragen') ? (
              <>Häufig gestellte <span className="text-gradient">Fragen</span></>
            ) : (
              title
            )}
          </Heading>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              answerText={item.answerText}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {showFinalCta && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Haben Sie noch Fragen?
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-xl">
                  Wenn Ihre Frage hier nicht beantwortet wurde, können Sie uns gerne direkt kontaktieren. 
                  Wir geben Ihnen eine klare Einschätzung für Ihr Projekt.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Projekt anfragen
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/preise"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
