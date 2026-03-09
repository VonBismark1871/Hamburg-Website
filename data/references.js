export const referenceProjects = [
  {
    slug: 'restaurant-demo',
    title: 'Restaurant Website',
    description: 'Atmosphärische Restaurant-Website mit Fokus auf Reservierungen, Speisekarte und visuelle Stimmung.',
    image: '/demo-images/restaurant.svg',
    tags: ['Reservierung', 'Speisekarte', 'Galerie'],
    tone: 'warm'
  },
  {
    slug: 'barbershop-demo',
    title: 'Barbershop Website',
    description: 'Urbaner Auftritt mit klarer Terminbuchung, Leistungsübersicht und markanter Bildsprache.',
    image: '/demo-images/barbershop.svg',
    tags: ['Terminbuchung', 'Leistungen', 'Kontakt'],
    tone: 'dark'
  },
  {
    slug: 'zahnarzt-demo',
    title: 'Zahnarztpraxis Website',
    description: 'Helle Praxis-Website für Vertrauen, Leistungsdarstellung und einfache Terminanfragen.',
    image: '/demo-images/zahnarzt.svg',
    tags: ['Leistungen', 'Team', 'Termin anfragen'],
    tone: 'clean'
  },
  {
    slug: 'physio-demo',
    title: 'Physiotherapie Website',
    description: 'Ruhiges, modernes Praxiskonzept mit klaren Behandlungsinfos und Kontaktpunkten.',
    image: '/demo-images/physio.svg',
    tags: ['Behandlungen', 'Praxisinfos', 'Kontakt'],
    tone: 'calm'
  },
  {
    slug: 'autoservice-demo',
    title: 'Auto Service Website',
    description: 'Strukturierte Werkstatt-Website mit starken Leistungsblöcken und direkter Anfrageführung.',
    image: '/demo-images/local-service.svg',
    tags: ['Leistungen', 'Werkstatt', 'Anfrage'],
    tone: 'contrast'
  },
  {
    slug: 'immobilien-demo',
    title: 'Immobilienmakler Website',
    description: 'Editorial geprägte Immobilienpräsentation mit Objektfokus, Exposé und Kontakt.',
    image: '/demo-images/immobilien.svg',
    tags: ['Objekte', 'Anfrage', 'Exposé'],
    tone: 'premium'
  }
];

export function getReferenceBySlug(slug) {
  return referenceProjects.find((project) => project.slug === slug);
}
