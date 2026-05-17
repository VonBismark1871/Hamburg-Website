export const propertyFilters = ['Kauf', 'Hamburg', 'Exklusiv', 'Familiengeeignet', 'Kapitalanlage'];

export const propertyImageSets = {
  'penthouse-hamburg': {
    base: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    alt: 'Lichtdurchflutetes Penthouse-Wohnzimmer mit warmem Naturstein und grossen Fensterfronten'
  },
  'altbau-eppendorf': {
    base: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    alt: 'Eleganter Altbau-Wohnraum mit hohen Decken, Parkett und ruhiger Farbwelt'
  },
  'stadthaus-blankenese': {
    base: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    alt: 'Familienfreundliches Stadthaus mit heller Fassade, Terrasse und gepflegtem Garten'
  },
  'neubau-hafencity': {
    base: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
    alt: 'Moderne Neubauwohnung mit bodentiefen Fenstern und klarer Architektur'
  },
  'familienhaus-volksdorf': {
    base: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
    alt: 'Freistehendes Familienhaus mit Garten und ruhiger Wohnstrasse'
  },
  'anlage-altona': {
    base: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    alt: 'Helle Etagenwohnung mit kompaktem Grundriss und neutraler Einrichtung'
  }
};

export function propertyImage(id, width = 1600, quality = 82) {
  return `${propertyImageSets[id].base}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const properties = [
  {
    id: 'penthouse-hamburg',
    title: 'Exklusives Penthouse in Hamburg-Winterhude',
    district: 'Winterhude',
    type: 'Penthouse',
    area: '182 m²',
    rooms: '4 Zimmer',
    extra: 'Dachterrasse · Elbblick',
    price: '2.390.000 €',
    label: 'Exklusiv',
    angle: 'Designorientiertes Wohnen über den Dächern mit privater Terrasse.',
    image: propertyImage('penthouse-hamburg'),
    imageAlt: propertyImageSets['penthouse-hamburg'].alt,
    href: '/referenzen/immobilien-demo/objekte/penthouse-hamburg'
  },
  {
    id: 'altbau-eppendorf',
    title: 'Sanierte Altbauwohnung in Eppendorf',
    district: 'Eppendorf',
    type: 'Altbauwohnung',
    area: '128 m²',
    rooms: '3,5 Zimmer',
    extra: 'Stuckdetails · Balkon zum Innenhof',
    price: '1.180.000 €',
    label: 'Altbau',
    angle: 'Historischer Charakter trifft auf zeitgemässe Sanierung im Herzen Eppendorfs.',
    image: propertyImage('altbau-eppendorf'),
    imageAlt: propertyImageSets['altbau-eppendorf'].alt,
    href: '/referenzen/immobilien-demo/objekte/altbau-eppendorf'
  },
  {
    id: 'stadthaus-blankenese',
    title: 'Stadthaus mit Elbnähe und Garten in Blankenese',
    district: 'Blankenese',
    type: 'Stadthaus',
    area: '211 m²',
    rooms: '6 Zimmer',
    extra: 'Sonnengarten · Grundstück 420 m²',
    price: '2.150.000 €',
    label: 'Familiengeeignet',
    angle: 'Grosszügiges Familienlayout mit Garten und kurzen Wegen zur Elbe.',
    image: propertyImage('stadthaus-blankenese'),
    imageAlt: propertyImageSets['stadthaus-blankenese'].alt,
    href: '/referenzen/immobilien-demo/objekte/stadthaus-blankenese'
  },
  {
    id: 'neubau-hafencity',
    title: 'Neubauwohnung mit Wasserblick in HafenCity',
    district: 'HafenCity',
    type: 'Neubauwohnung',
    area: '96 m²',
    rooms: '3 Zimmer',
    extra: 'Loggia · Concierge · Wasserblick',
    price: '1.050.000 €',
    label: 'Neubau',
    angle: 'Urbaner Komfort in moderner Architektur mit maritimer Perspektive.',
    image: propertyImage('neubau-hafencity'),
    imageAlt: propertyImageSets['neubau-hafencity'].alt,
    href: '/referenzen/immobilien-demo/objekte/neubau-hafencity'
  },
  {
    id: 'familienhaus-volksdorf',
    title: 'Familienhaus in ruhiger Lage in Volksdorf',
    district: 'Volksdorf',
    type: 'Einfamilienhaus',
    area: '174 m²',
    rooms: '5 Zimmer',
    extra: 'Garten · Garage · familienfreundlich',
    price: '1.290.000 €',
    label: 'Familienhaus',
    angle: 'Viel Platz für den Alltag mit Kindern in gewachsener Nachbarschaft.',
    image: propertyImage('familienhaus-volksdorf'),
    imageAlt: propertyImageSets['familienhaus-volksdorf'].alt,
    href: '/referenzen/immobilien-demo/objekte/familienhaus-volksdorf'
  },
  {
    id: 'anlage-altona',
    title: 'Kapitalanlage mit langfristigem Mietvertrag in Altona',
    district: 'Altona',
    type: 'Etagenwohnung',
    area: '88 m²',
    rooms: '2,5 Zimmer',
    extra: 'Langfristiger Mietvertrag · solide Rendite',
    price: '695.000 €',
    label: 'Kapitalanlage',
    angle: 'Solides Investment mit stabiler Mieteinnahme und guter Vermietbarkeit.',
    image: propertyImage('anlage-altona'),
    imageAlt: propertyImageSets['anlage-altona'].alt,
    href: '/referenzen/immobilien-demo/objekte/anlage-altona'
  }
];

export const featuredPropertyIds = ['penthouse-hamburg', 'altbau-eppendorf', 'stadthaus-blankenese'];
