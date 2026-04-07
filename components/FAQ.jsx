import { useState } from 'react';

export const faqItems = [
  { question: 'Wie lange dauert die Erstellung einer Website?', answerText: 'Die Erstellung einer typischen Unternehmenswebsite dauert in der Regel zwischen 7 und 14 Tagen. Der genaue Zeitraum hängt vom Umfang der Inhalte, der Seitenanzahl und den Feedbackschleifen ab.' },
  { question: 'Wie viel kostet eine Website?', answerText: 'Die meisten Projekte bewegen sich je nach Umfang zwischen etwa 400 € und 1.500 €. Eine genauere Übersicht über typische Projektbudgets finden Sie auf unserer Preisübersicht.' },
  { question: 'Ist die Demo wirklich kostenlos?', answerText: 'Ja. Sie erhalten eine unverbindliche Demo-Vorschau, damit Sie Stil, Struktur und Aufbau Ihrer möglichen Website sehen können, bevor Sie sich für eine Umsetzung entscheiden.' }
];

export default function FAQ({ items = faqItems }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-spacing-sm" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="section-intro max-w-[820px]">
          <p className="section-label">FAQ</p>
          <h2 id="faq-heading" className="display-title page-h2">Häufig gestellte Fragen</h2>
        </div>
        <div className="mt-10 max-w-[860px] divide-y divide-[var(--border-subtle)] rounded-[24px] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-8 py-2">
          {items.map((item, idx) => (
            <article key={item.question} className="py-6">
              <button className="flex w-full items-start justify-between gap-4 text-left" onClick={() => setOpen(open === idx ? -1 : idx)}>
                <span className="text-[24px] font-semibold leading-[1.3] text-[var(--text-primary)]">{item.question}</span>
                <span className={`mt-2 text-xl text-[var(--text-secondary)] transition duration-200 ${open === idx ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === idx ? '260px' : '0px' }}>
                <p className="max-w-[72ch] pt-5 text-[17px] leading-[1.7] text-[var(--text-secondary)]">{item.answerText}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
