const siteUrl = 'https://hamburgwebsites.de';
const defaultPriceCurrency = 'EUR';

const businessNap = {
  name: 'Hamburg Websites',
  email: 'info@hamburgwebsites.de',
  phone: '+49 160 96297897',
  address: {
    streetAddress: 'Stadtbahnstraße 36',
    postalCode: '22393',
    addressLocality: 'Hamburg',
    addressCountry: 'DE'
  }
};

export const defaultSeo = {
  title: 'Hamburg Websites – Moderne Webseiten für Hamburger Unternehmen',
  description:
    'Hamburg Websites erstellt moderne, mobil optimierte Webseiten für Unternehmen in Hamburg. SEO-freundlich aufgebaut für bessere Sichtbarkeit und mehr Anfragen.',
  siteName: 'Hamburg Websites',
  locale: 'de_DE',
  type: 'website'
};

export function getCanonical(path = '/') {
  return `${siteUrl}${path}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: businessNap.name,
    url: siteUrl,
    email: businessNap.email,
    telephone: businessNap.phone
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: businessNap.name,
    url: siteUrl,
    email: businessNap.email,
    telephone: businessNap.phone,
    address: {
      '@type': 'PostalAddress',
      ...businessNap.address
    },
    areaServed: {
      '@type': 'City',
      name: 'Hamburg'
    }
  };
}

export function serviceSchema(services = []) {
  const catalogItems = services.map((service) => ({
    '@type': 'Service',
    name: service.name,
    provider: { '@id': `${siteUrl}#organization` },
    areaServed: { '@type': 'City', name: 'Hamburg' },
    ...(typeof service.priceFromEur === 'number'
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: defaultPriceCurrency,
            price: service.priceFromEur
          }
        }
      : {})
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webdesign und Webentwicklung für Unternehmen in Hamburg',
    provider: { '@id': `${siteUrl}#organization` },
    areaServed: { '@type': 'City', name: 'Hamburg' },
    url: siteUrl,
    serviceType: 'Webdesign und Webentwicklung',
    description: defaultSeo.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen',
      itemListElement: catalogItems
    }
  };
}

export function faqSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerText || (typeof item.answer === 'string' ? item.answer : '')
      }
    }))
  };
}
