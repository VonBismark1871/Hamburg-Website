import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Anfrage',
    text: 'Sie senden uns die wichtigsten Infos zu Unternehmen, Zielgruppe und gewünschtem Ergebnis (z. B. mehr Anfragen).'
  },
  {
    title: 'Kostenlose Demo-Website',
    text: 'Auf Basis Ihrer Angaben erstellen wir eine erste Demo-Website, damit Sie Struktur, Nutzerführung und Positionierung früh bewerten können.'
  },
  {
    title: 'Abstimmung',
    text: 'Sie geben Feedback zu Inhalten, Seitenzielen und Prioritäten. Daraus entsteht der verbindliche Umsetzungsrahmen.'
  },
  {
    title: 'Umsetzung',
    text: 'Nach der Abstimmung setzen wir die Website technisch sauber um und bauen nur Funktionen ein, die im Alltag wirklich nutzbar sind.'
  },
  {
    title: 'Prüfung und Livegang',
    text: 'Nach der finalen Prüfung geht die Website live. Danach schauen wir zuerst auf Anfragequalität und Nutzerpfade.'
  }
];

export default function Process() {
  return (
    <section className="section-container section-spacing" id="process" aria-labelledby="process-heading">
      <motion.h2
        id="process-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold text-slateBlue"
      >
        So läuft die Zusammenarbeit ab
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600"
      >
        Von der ersten Anfrage bis zum Livegang bleibt der Ablauf klar, nachvollziehbar und auf konkrete Vertriebsziele
        ausgerichtet.
      </motion.p>

      <div className="relative mt-12">
        <div className="absolute bottom-4 left-5 top-4 w-px bg-slate-200 md:hidden" aria-hidden="true" />
        <div className="absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 bg-slate-200 md:block" aria-hidden="true" />

        <ol className="grid gap-6 md:grid-cols-5 md:gap-5">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="relative pl-14 md:pl-0"
            >
              <div className="card relative h-full border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md md:flex md:min-h-[210px] md:flex-col md:items-start">
                <span className="absolute -left-3 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white md:-top-5 md:left-5">
                  {index + 1}
                </span>

                {index < steps.length - 1 && (
                  <span
                    className="absolute left-9 top-10 h-px w-4 bg-accent/70 md:-right-5 md:left-auto md:top-1/2 md:w-5"
                    aria-hidden="true"
                  />
                )}

                <h3 className="mt-6 text-lg font-semibold text-slateBlue md:mt-4">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Eine erste Demo-Website erhalten Sie in der Regel innerhalb weniger Tage.
      </p>
    </section>
  );
}
