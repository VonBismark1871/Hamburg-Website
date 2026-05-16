export const referenceProjects = [
  {
    slug: 'restaurant-demo',
    title: 'Restaurant Website',
    description: 'Atmosphärische Restaurant-Website mit Fokus auf Reservierungen, Speisekarte und visuelle Stimmung.',
    image: '/demo-images/restaurant.svg',
    tags: ['Reservierung', 'Speisekarte', 'Galerie'],
    tone: 'warm',
    format: 'Onepager',
    conceptFocus: 'Mehr Reservierungsanfragen durch klare Genuss-Story und schnelle Kontaktwege.',
    uxStructure: ['Hero mit zwei CTAs', 'Speisekarte', 'Atmosphäre', 'Reservierung', 'Kontakt'],
    technicalFocus: ['Local SEO Struktur', 'Bildpriorisierung', 'Mobile CTA-Führung'],
    visualDirection: 'Warm, kontrastreich, bildgeführt'
  },
  {
    slug: 'friseursalon-demo',
    title: 'Friseursalon Website',
    description: 'Moderne Salon-Website mit Terminbuchung, Leistungsübersicht und stilvoller Bildsprache.',
    image: '/demo-images/barbershop.svg',
    tags: ['Terminbuchung', 'Leistungen', 'Kontakt'],
    tone: 'dark',
    format: 'Onepager',
    conceptFocus: 'Aus einem austauschbaren Salon wird eine beratungsstarke lokale Marke.',
    uxStructure: ['Hero', 'Beliebte Leistungen', 'Lookbook', 'Team', 'Termin', 'Kontakt'],
    technicalFocus: ['Responsive Galerie', 'Formularrouting', 'Performance-Bildgrößen'],
    visualDirection: 'Soft premium, editorial, warm-neutral'
  },
  {
    slug: 'zahnarzt-demo',
    title: 'Zahnarztpraxis Website',
    description: 'Helle Praxis-Website für Vertrauen, Leistungsdarstellung und einfache Terminanfragen.',
    image: '/demo-images/zahnarzt.svg',
    tags: ['Leistungen', 'Team', 'Termin anfragen'],
    tone: 'clean',
    format: 'Onepager',
    conceptFocus: 'Angst und Unsicherheit reduzieren, Terminentscheidung erleichtern.',
    uxStructure: ['Praxisversprechen', 'Leistungen', 'Termin', 'Praxisräume', 'Team', 'Kontakt'],
    technicalFocus: ['Schema-fähige Inhalte', 'Accessibility Basics', 'Klare Heading-Hierarchie'],
    visualDirection: 'Hell, medizinisch, ruhig'
  },
  {
    slug: 'physio-demo',
    title: 'Physiotherapie Website',
    description: 'Ruhiges, modernes Praxiskonzept mit klaren Behandlungsinfos und Kontaktpunkten.',
    image: '/demo-images/physio.svg',
    tags: ['Behandlungen', 'Praxisinfos', 'Kontakt'],
    tone: 'calm',
    format: 'Mehrseitig',
    conceptFocus: 'Patienten finden schneller die passende Behandlung und den nächsten Schritt.',
    uxStructure: ['Startseite', 'Leistungen', 'Kontakt', 'Rückenschmerzen Landingpage'],
    technicalFocus: ['Interne Verlinkung', 'SEO Landingpage', 'Wiederverwendbares Layout'],
    visualDirection: 'Ruhig, therapeutisch, grünlich'
  },
  {
    slug: 'autoservice-demo',
    title: 'Auto Service Website',
    description: 'Strukturierte Werkstatt-Website mit starken Leistungsblöcken und direkter Anfrageführung.',
    image: '/demo-images/local-service.svg',
    tags: ['Leistungen', 'Werkstatt', 'Anfrage'],
    tone: 'contrast',
    format: 'Mehrseitig',
    conceptFocus: 'Komplexe Werkstattleistungen werden verständlich und anfrageorientiert sortiert.',
    uxStructure: ['Startseite', 'Leistungen', 'Inspektion Landingpage', 'Kontakt'],
    technicalFocus: ['Service-Seitenstruktur', 'CTA-Konsistenz', 'Statische Performance'],
    visualDirection: 'Kontrastreich, robust, präzise'
  },
  {
    slug: 'immobilien-demo',
    title: 'Immobilienmakler Website',
    description: 'Editorial geprägte Immobilienpräsentation mit Objektfokus, Exposé und Kontakt.',
    image: '/demo-images/immobilien.svg',
    tags: ['Objekte', 'Anfrage', 'Exposé'],
    tone: 'premium',
    format: 'Mehrseitig',
    conceptFocus: 'Hochwertige Vermarktung sichtbar machen, bevor ein Eigentümer Kontakt aufnimmt.',
    uxStructure: ['Startseite', 'Objektübersicht', 'Exposés', 'Kontakt/Bewertung'],
    technicalFocus: ['Filterbare Datenstruktur', 'Objekt-Templates', 'SEO-fähige Exposé-Seiten'],
    visualDirection: 'Editorial, ruhig, premium'
  }
];

export function getReferenceBySlug(slug) {
  return referenceProjects.find((project) => project.slug === slug);
}
