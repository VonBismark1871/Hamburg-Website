import { useState } from 'react';

export const faqItems = [
  { question: 'Wie lange dauert die Erstellung einer Website?', answerText: 'Die Erstellung einer typischen Unternehmenswebsite dauert in der Regel zwischen 7 und 14 Tagen. Der genaue Zeitraum hängt vom Umfang der Inhalte, der Seitenanzahl und den Feedbackschleifen ab.' },
  { question: 'Wie viel kostet eine Website?', answerText: 'Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über typische Projektbudgets finden Sie auf unserer Preisübersicht.' },
  { question: 'Ist die Demo wirklich kostenlos?', answerText: 'Ja. Sie erhalten eine unverbindliche Demo-Vorschau, damit Sie Stil, Struktur und Aufbau Ihrer möglichen Website sehen können, bevor Sie sich für eine Umsetzung entscheiden.' }
];

export default function FAQ({ items = faqItems }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section-spacing bg-[var(--bg-surface)]" aria-labelledby="faq-heading">
      <div className="section-container">
        <p className="section-label">FAQ</p>
        <h2 id="faq-heading" className="text-3xl">Häufig gestellte Fragen</h2>
        <div className="mt-8 space-y-3">
          {items.map((item, idx) => (
            <article key={item.question} className="card overflow-hidden px-5 py-4">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen(open === idx ? -1 : idx)}>
                <span className="text-[var(--text-primary)]">{item.question}</span>
                <span className={`transition ${open === idx ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              <div className="transition-all duration-300" style={{ maxHeight: open === idx ? '220px' : '0px', overflow: 'hidden' }}>
                <p className="pt-3 text-[var(--text-secondary)]">{item.answerText}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
