import { propertyImage, propertyImageSets } from './properties';

const galleries = {
  'penthouse-hamburg': [
    '/images/immobilien/penthouse-hamburg.jpg',
    '/images/immobilien/penthouse-gallery-2.jpg',
    '/images/immobilien/penthouse-gallery-3.jpg',
    '/images/immobilien/penthouse-gallery-4.jpg',
  ],
  'altbau-eppendorf': [
    '/images/immobilien/altbau-eppendorf.jpg',
    '/images/immobilien/altbau-gallery-2.jpg',
    '/images/immobilien/altbau-gallery-3.jpg',
    '/images/immobilien/altbau-gallery-4.jpg',
  ],
  'stadthaus-blankenese': [
    '/images/immobilien/stadthaus-blankenese.jpg',
    '/images/immobilien/stadthaus-gallery-2.jpg',
    '/images/immobilien/stadthaus-gallery-3.jpg',
    '/images/immobilien/stadthaus-gallery-4.jpg',
  ],
  'neubau-hafencity': [
    '/images/immobilien/neubau-hafencity.jpg',
    '/images/immobilien/neubau-gallery-2.jpg',
    '/images/immobilien/neubau-gallery-3.jpg',
    '/images/immobilien/neubau-gallery-4.jpg',
  ],
  'familienhaus-volksdorf': [
    '/images/immobilien/familienhaus-volksdorf.jpg',
    '/images/immobilien/familienhaus-gallery-2.jpg',
    '/images/immobilien/familienhaus-gallery-3.jpg',
    '/images/immobilien/familienhaus-gallery-4.jpg',
  ],
  'anlage-altona': [
    '/images/immobilien/anlage-altona.jpg',
    '/images/immobilien/anlage-gallery-2.jpg',
    '/images/immobilien/anlage-gallery-3.jpg',
    '/images/immobilien/anlage-gallery-4.jpg',
  ],
};

const galleryLabels = ['Hauptansicht', 'Wohnbereich', 'Weiterer Eindruck', 'Detail'];

function galleryFor(id, title) {
  return galleries[id].map((src, i) => ({
    src,
    alt: `${title}: ${galleryLabels[i]}`,
  }));
}

export const exposeData = {
  'penthouse-hamburg': {
    seoTitle: 'Exklusives Penthouse in Hamburg-Winterhude',
    seoDescription: 'Penthouse-Expose mit Dachterrasse, Elbblick und hochwertiger Ausstattung in Hamburg-Winterhude.',
    heroImage: propertyImage('penthouse-hamburg', 2200),
    heroAlt: propertyImageSets['penthouse-hamburg'].alt,
    badge: 'Kaufobjekt · Winterhude',
    title: 'Exklusives Penthouse in Hamburg-Winterhude',
    intro: 'Dieses lichtdurchflutete Penthouse verbindet klare Architektur, präzise Materialwahl und einen weitläufigen Außenbereich mit Blick über Winterhude bis zur Elbe.',
    facts: [['Kaufpreis', '2.390.000 €'], ['Wohnfläche', '182 m²'], ['Zimmer', '4'], ['Etage', '6. Obergeschoss'], ['Baujahr', '2018'], ['Energieausweis', 'Bedarfsausweis, 58 kWh/(m²*a)']],
    gallery: galleryFor('penthouse-hamburg', 'Penthouse Winterhude'),
    description: 'Der Grundriss ist auf repräsentatives Wohnen ausgelegt: ein weitläufiger Wohn- und Essbereich, raumhohe Verglasungen und direkte Zugänge zur Dachterrasse schaffen ein offenes Wohngefühl.',
    features: ['Aufzug mit direktem Zugang in die Wohnung', 'Offene Designküche mit hochwertigen Markengeräten', 'Kaminbereich und Smart-Home-Steuerung', 'Südwest-Dachterrasse mit Blick über Winterhude'],
    location: 'Ruhige Seitenstraße in Winterhude. Stadtpark, Alsterkanäle, Feinkostläden und Restaurants sind in wenigen Minuten erreichbar.',
    misc: 'Zwei Tiefgaragenstellplätze, ein separater Abstellraum sowie ein klimatisierter Weinschrank sind im Angebot enthalten.',
    locationSummary: 'Stadtparknähe · kurze Wege zur Alster · hervorragende Infrastruktur'
  },
  'altbau-eppendorf': {
    seoTitle: 'Sanierte Altbauwohnung in Eppendorf',
    seoDescription: 'Altbauwohnung in Eppendorf mit Stuckdetails, Balkon und hochwertiger Sanierung.',
    heroImage: propertyImage('altbau-eppendorf', 2200),
    heroAlt: propertyImageSets['altbau-eppendorf'].alt,
    badge: 'Kaufobjekt · Eppendorf',
    title: 'Sanierte Altbauwohnung in Eppendorf',
    intro: 'Klassische Altbauarchitektur, fein aufgearbeitete Details und ein ruhiger Innenhofbalkon machen dieses Objekt zu einer seltenen Gelegenheit in einem begehrten Hamburger Viertel.',
    facts: [['Kaufpreis', '1.180.000 €'], ['Wohnfläche', '128 m²'], ['Zimmer', '3,5'], ['Etage', '2. Obergeschoss'], ['Baujahr', '1908'], ['Energieausweis', 'Verbrauchsausweis, 91 kWh/(m²*a)']],
    gallery: galleryFor('altbau-eppendorf', 'Altbauwohnung Eppendorf'),
    description: 'Historische Elemente wie Stuck, Kassettentüren und Fischgrätparkett wurden erhalten und mit moderner Haustechnik kombiniert.',
    features: ['Original-Stuckprofile und aufgearbeitetes Parkett', 'Balkon zum begrünten Innenhof', 'Einbauküche mit Naturstein-Arbeitsplatte', 'Modernisiertes Bad mit freistehender Wanne'],
    location: 'Zentrale, aber ruhige Lage in Eppendorf mit kurzen Wegen zum Eppendorfer Baum, zur Alster und zum Universitätsklinikum.',
    misc: 'Die Wohnung ist bezugsfrei und eignet sich für Eigennutzer, die klassischen Hamburger Altbaucharme schätzen.',
    locationSummary: 'Eppendorfer Baum · Alsternähe · gewachsene Nachbarschaft'
  },
  'stadthaus-blankenese': {
    seoTitle: 'Stadthaus in Blankenese mit Garten',
    seoDescription: 'Grosszügiges Stadthaus in Blankenese mit Familiengrundriss, Garten und Elbnähe.',
    heroImage: propertyImage('stadthaus-blankenese', 2200),
    heroAlt: propertyImageSets['stadthaus-blankenese'].alt,
    badge: 'Kaufobjekt · Blankenese',
    title: 'Stadthaus mit Elbnähe und Garten in Blankenese',
    intro: 'Ein Haus für Familien, die grosszügige Räume, einen geschützten Garten und die Nähe zur Elbe in ihrem Alltag verbinden möchten.',
    facts: [['Kaufpreis', '2.150.000 €'], ['Wohnfläche', '211 m²'], ['Zimmer', '6'], ['Grundstück', '420 m²'], ['Baujahr', '2009'], ['Energieausweis', 'Bedarfsausweis, 71 kWh/(m²*a)']],
    gallery: galleryFor('stadthaus-blankenese', 'Stadthaus Blankenese'),
    description: 'Das Stadthaus überzeugt mit klar gegliedertem Familiengrundriss: offener Wohn-/Essbereich, mehrere Kinderzimmer und ein separater Elternbereich.',
    features: ['Südwest-Garten mit Terrasse', 'Vollunterkellerung mit Hobbyraum', 'Garage und zusätzlicher Stellplatz', 'Familienfreundliche Raumaufteilung'],
    location: 'Ruhige Wohnstraße in Blankenese mit kurzen Wegen zu Schulen, Kitas und zur Elbe.',
    misc: 'Ideal für Familien mit Platzbedarf und Wunsch nach einem geschützten Außenbereich.',
    locationSummary: 'Elbnähe · ruhige Wohnlage · gute Schul- und Kita-Struktur'
  },
  'neubau-hafencity': {
    seoTitle: 'Neubauwohnung mit Wasserblick in der HafenCity',
    seoDescription: 'Moderne Neubauwohnung in der HafenCity mit Loggia, Concierge und Blick aufs Wasser.',
    heroImage: propertyImage('neubau-hafencity', 2200),
    heroAlt: propertyImageSets['neubau-hafencity'].alt,
    badge: 'Kaufobjekt · HafenCity',
    title: 'Neubauwohnung mit Wasserblick in HafenCity',
    intro: 'Zeitgemässer Wohnkomfort, klare Architektur und eine Loggia mit Blick auf das Wasser prägen dieses urbane Neubauobjekt.',
    facts: [['Kaufpreis', '1.050.000 €'], ['Wohnfläche', '96 m²'], ['Zimmer', '3'], ['Etage', '5. Obergeschoss'], ['Baujahr', '2021'], ['Energieausweis', 'Bedarfsausweis, 44 kWh/(m²*a)']],
    gallery: galleryFor('neubau-hafencity', 'Neubauwohnung HafenCity'),
    description: 'Die Wohnung bietet einen offenen Wohn-/Essbereich mit Übergang zur Loggia. Die Ausstattung folgt einem reduzierten, hochwertigen Designkonzept.',
    features: ['Concierge-Service im Eingangsbereich', 'Loggia mit Wasserblick', 'Fußbodenheizung und kontrollierte Wohnraumlüftung', 'Barrierearmer Zugang'],
    location: 'Direkt in der HafenCity mit fußläufiger Nähe zu Elbe, Gastronomie, Kulturangeboten und U-Bahn-Anbindung.',
    misc: 'Ideal für urbane Käufer, die moderne Architektur und zentrale Wasserlage kombinieren möchten.',
    locationSummary: 'Maritime Lage · moderne Infrastruktur · urbanes Umfeld'
  },
  'familienhaus-volksdorf': {
    seoTitle: 'Familienhaus in Volksdorf mit Garten',
    seoDescription: 'Einfamilienhaus in Volksdorf mit Garten, Garage und familiengerechtem Grundriss.',
    heroImage: propertyImage('familienhaus-volksdorf', 2200),
    heroAlt: propertyImageSets['familienhaus-volksdorf'].alt,
    badge: 'Kaufobjekt · Volksdorf',
    title: 'Familienhaus in ruhiger Lage in Volksdorf',
    intro: 'Dieses Einfamilienhaus bietet den passenden Rahmen für den Familienalltag: grosszügige Zimmer, viel Stauraum und ein geschützter Garten.',
    facts: [['Kaufpreis', '1.290.000 €'], ['Wohnfläche', '174 m²'], ['Zimmer', '5'], ['Grundstück', '510 m²'], ['Baujahr', '2012'], ['Energieausweis', 'Bedarfsausweis, 64 kWh/(m²*a)']],
    gallery: galleryFor('familienhaus-volksdorf', 'Familienhaus Volksdorf'),
    description: 'Die Immobilie ist funktional und hochwertig geplant: offene Gemeinschaftsbereiche im Erdgeschoss, private Rückzugsräume im Obergeschoss sowie direkter Zugang in den Garten.',
    features: ['Familiengerechter Grundriss mit 5 Zimmern', 'Garten mit Terrasse', 'Garage plus Stellplatz', 'Abstell- und Hauswirtschaftsflächen'],
    location: 'Volksdorf bietet eine ruhige, grüne Umgebung mit sehr guter Nahversorgung, Schulen und Freizeitmöglichkeiten.',
    misc: 'Das Haus wird frei übergeben und eignet sich für Familien, die langfristig in einer stabilen Lage wohnen möchten.',
    locationSummary: 'Ruhige Wohnstraße · grüne Umgebung · familienorientierte Infrastruktur'
  },
  'anlage-altona': {
    seoTitle: 'Kapitalanlage in Altona mit Mietvertrag',
    seoDescription: 'Etagenwohnung in Altona als Kapitalanlage mit langfristigem Mietvertrag und stabiler Einnahme.',
    heroImage: propertyImage('anlage-altona', 2200),
    heroAlt: propertyImageSets['anlage-altona'].alt,
    badge: 'Kaufobjekt · Altona',
    title: 'Kapitalanlage mit langfristigem Mietvertrag in Altona',
    intro: 'Solide vermietete Etagenwohnung mit langfristigem Mietverhältnis und belastbarer Ertragsperspektive in nachgefragter Lage.',
    facts: [['Kaufpreis', '695.000 €'], ['Wohnfläche', '88 m²'], ['Zimmer', '2,5'], ['Etage', '3. Obergeschoss'], ['Baujahr', '2003'], ['Energieausweis', 'Verbrauchsausweis, 82 kWh/(m²*a)']],
    gallery: galleryFor('anlage-altona', 'Kapitalanlage Altona'),
    description: 'Die Wohnung ist seit mehreren Jahren zuverlässig vermietet. Der Schnitt ist effizient, die Nachfrage im Mikrostandort konstant hoch.',
    features: ['Langfristiger Mietvertrag mit guter Bonität', 'Stabile Mieteinnahme von 2.260 € monatlich', 'Zeitgemässer Gebäudezustand', 'Sehr gute Vermietbarkeit im Standortumfeld'],
    location: 'Gefragte Lage in Altona mit kurzen Wegen zu ÖPNV, Einkauf und Arbeitsstandorten.',
    misc: 'Detaillierte Miet- und Nebenkostenunterlagen stellen wir qualifizierten Kaufinteressenten auf Anfrage zur Verfügung.',
    locationSummary: 'Nachgefragte Mikrolage · starke Vermietbarkeit · solides Renditeprofil'
  }
};
