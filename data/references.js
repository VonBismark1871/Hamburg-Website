export const referenceProjects = [
  {
    slug: 'restaurant-demo',
    title: 'Restaurant Website',
    description: 'Atmosphaerischer Gastro-Auftritt mit Reservierung, Speisekarte, Galerie und klarer Abendstimmung.',
    image: '/demo-images/restaurant.svg',
    tags: ['Reservierung', 'Speisekarte', 'Galerie'],
    siteType: 'Onepager',
    goal: 'Tischreservierungen und Vertrauen vor dem ersten Besuch',
    complexity: 'Kompakt',
    styleLabel: 'Warm, bildstark, genussorientiert',
    tone: 'warm'
  },
  {
    slug: 'friseursalon-demo',
    title: 'Friseursalon Website',
    description: 'Stilvolle Salon-Praesenz mit Leistungen, Lookbook, Team und klarer Terminanfuehrung.',
    image: '/demo-images/barbershop.svg',
    tags: ['Terminbuchung', 'Leistungen', 'Lookbook'],
    siteType: 'Onepager',
    goal: 'Terminanfragen und schnelle Orientierung im Angebot',
    complexity: 'Kompakt bis mittel',
    styleLabel: 'Editorial, ruhig, persoenlich',
    tone: 'dark'
  },
  {
    slug: 'zahnarzt-demo',
    title: 'Zahnarztpraxis Website',
    description: 'Ruhige Praxis-Website fuer Vertrauen, Leistungsdarstellung, Team und einfache Terminanfragen.',
    image: '/demo-images/zahnarzt.svg',
    tags: ['Leistungen', 'Team', 'Termin anfragen'],
    siteType: 'Onepager',
    goal: 'Vertrauen schaffen und neue Patientinnen und Patienten fuehren',
    complexity: 'Mittel',
    styleLabel: 'Hell, medizinisch, vertrauensbildend',
    tone: 'clean'
  },
  {
    slug: 'physio-demo',
    title: 'Physiotherapie Website',
    description: 'Mehrseitiges Health-Konzept mit Behandlungsinfos, Beschwerdeseiten und Terminbereich.',
    image: '/demo-images/physio.svg',
    tags: ['Behandlungen', 'Beschwerdeseiten', 'Kontakt'],
    siteType: 'Mehrseitig',
    goal: 'Behandlungen erklaeren und Terminwege vereinfachen',
    complexity: 'Erweitert',
    styleLabel: 'Sanft, klar, gesundheitsorientiert',
    tone: 'calm'
  },
  {
    slug: 'autoservice-demo',
    title: 'Auto Service Website',
    description: 'Strukturierte Werkstatt-Website mit starken Leistungsseiten und direkter Anfragefuehrung.',
    image: '/demo-images/local-service.svg',
    tags: ['Leistungen', 'Werkstatt', 'Anfrage'],
    siteType: 'Mehrseitig',
    goal: 'Serviceanfragen, Inspektionen und Telefonkontakte ausloesen',
    complexity: 'Erweitert',
    styleLabel: 'Kontrastreich, robust, praktisch',
    tone: 'contrast'
  },
  {
    slug: 'immobilien-demo',
    title: 'Immobilienmakler Website',
    description: 'Editoriale Immobilienpraesentation mit Objektuebersicht, Expose-Seiten und Anfragefluss.',
    image: '/demo-images/immobilien.svg',
    tags: ['Objekte', 'Anfrage', 'Expose'],
    siteType: 'Mehrseitig',
    goal: 'Objekte hochwertig zeigen und qualifizierte Anfragen sammeln',
    complexity: 'Fortgeschritten',
    styleLabel: 'Editorial, hochwertig, objektfokussiert',
    tone: 'premium'
  }
];

export function getReferenceBySlug(slug) {
  return referenceProjects.find((project) => project.slug === slug);
}
