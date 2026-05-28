export const propertyFilters = ['Kauf', 'Hamburg', 'Exklusiv', 'Familiengeeignet', 'Kapitalanlage'];

export const propertyImageSets = {
  'penthouse-hamburg': {
    base: '/images/immobilien/penthouse-hamburg.jpg',
    alt: 'Lichtdurchflutetes Penthouse-Wohnzimmer mit warmem Naturstein und grossen Fensterfronten'
  },
  'altbau-eppendorf': {
    base: '/images/immobilien/altbau-eppendorf.jpg',
    alt: 'Heller Altbau-Wohnraum mit hohen Decken, warmem Naturlicht und elegantem Parkett'
  },
  'stadthaus-blankenese': {
    base: '/images/immobilien/stadthaus-blankenese.jpg',
    alt: 'Stadthaus mit üppigem Garten, grüner Außenanlage und privatem Rückzugsort'
  },
  'neubau-hafencity': {
    base: '/images/immobilien/neubau-hafencity.jpg',
    alt: 'Moderne Neubauwohnung mit klarer Architektur und hochwertiger Ausstattung'
  },
  'familienhaus-volksdorf': {
    base: '/images/immobilien/familienhaus-volksdorf.jpg',
    alt: 'Freistehendes Familienhaus in naturnaher Lage mit weitläufigem Grünbereich'
  },
  'anlage-altona': {
    base: '/images/immobilien/anlage-altona.jpg',
    alt: 'Exklusives Objekt in Hamburger Bestlage — solides Investment mit Renditepotenzial'
  }
};

export function propertyImage(id) {
  return propertyImageSets[id]?.base ?? propertyImageSets['penthouse-hamburg'].base;
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
