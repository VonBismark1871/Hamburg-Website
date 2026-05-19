import { motion } from 'framer-motion';

const ansprueche = [
  {
    icon: 'design',
    iconColor: 'teal',
    title: 'Überzeugendes Design',
    text: 'Ein Design, das im Gedächtnis bleibt, Ihre Marke und Werte widerspiegelt und gleichzeitig ein angenehmes Benutzererlebnis bietet.'
  },
  {
    icon: 'target',
    iconColor: 'coral',
    title: 'Zielgruppenorientiert',
    text: 'Es ist essenziell, die Herausforderungen und Wünsche der Zielgruppe zu kennen und entsprechend darauf einzugehen.'
  },
  {
    icon: 'chart',
    iconColor: 'amber',
    title: 'Optimiert für Konversion',
    text: 'Der Hauptzweck Ihrer Website, die Besucher zu einer Handlung zu führen, wird systematisch verfolgt.'
  },
  {
    icon: 'message',
    iconColor: 'blue',
    title: 'Exakte Botschaft',
    text: 'Angebote und Informationen werden klar und leicht verständlich vermittelt, sodass sie die Ziele Ihrer Website unterstützen.'
  },
  {
    icon: 'psychology',
    iconColor: 'purple',
    title: 'Psychologische Führung',
    text: 'Die Struktur und Darstellung der Inhalte folgt psychologischen Erkenntnissen und Best Practices.'
  },
  {
    icon: 'shield',
    iconColor: 'green',
    title: 'Vertrauensaufbau',
    text: 'Gestaltung, Ausführung und Beweise wie Rezensionen und Referenzen untermauern Ihre Kompetenz und schaffen Vertrauen.'
  }
];

function AnspruchIcon({ type, colorClass }) {
  const iconMap = {
    design: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    target: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    chart: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    message: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    psychology: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    shield: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  };

  return (
    <span className={`anspruch-icon anspruch-icon--${colorClass}`}>
      {iconMap[type]}
    </span>
  );
}

export default function KlareAnsprueche() {
  return (
    <section className="bg-bg-muted section-spacing" aria-labelledby="ansprueche-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">Klare Ansprüche</p>
          <h2 id="ansprueche-heading" className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Die Erstellung visuell ansprechender Websites ist nur der <span className="text-accent">Anfang.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Eine wirkungsvolle Website bietet Ihnen und Ihrer Zielgruppe weit mehr als das. 
            Sechs Prinzipien, die jedes Projekt leiten.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ansprueche.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="anspruch-card"
            >
              <AnspruchIcon type={item.icon} colorClass={item.iconColor} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
