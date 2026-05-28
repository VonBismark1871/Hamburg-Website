export const siteUrl = 'https://hamburgwebsites.de';
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
  title: 'Hamburg Websites – Websites für unterschiedliche Ziele und Budgets',
  description:
    'Hamburg Websites entwickelt moderne, mobil optimierte Webseiten für unterschiedliche Ziele, Budgets und Stilrichtungen. Klar aufgebaut, schnell und passend zum Unternehmen.',
  siteName: 'Hamburg Websites',
  locale: 'de_DE',
  type: 'website'
};

export function getCanonical(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

function isPreviewHostname(hostname = '') {
  return hostname.endsWith('--deploy-preview.netlify.app') || hostname.endsWith('--branch.netlify.app') || hostname.includes('vercel.app');
}

export function isPreviewEnvironment() {
  const envContext =
    process.env.NEXT_PUBLIC_NETLIFY_CONTEXT ||
    process.env.CONTEXT ||
    process.env.NEXT_PUBLIC_VERCEL_ENV ||
    process.env.VERCEL_ENV;

  if (envContext === 'deploy-preview' || envContext === 'branch-deploy' || envContext === 'preview') {
    return true;
  }

  const deployUrl = process.env.NEXT_PUBLIC_DEPLOY_URL || process.env.DEPLOY_URL || process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL;

  if (deployUrl && isPreviewHostname(deployUrl.replace(/^https?:\/\//, ''))) {
    return true;
  }

  if (typeof window !== 'undefined') {
    return isPreviewHostname(window.location.hostname);
  }

  return false;
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
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#localbusiness`,
    name: businessNap.name,
    url: siteUrl,
    email: businessNap.email,
    telephone: businessNap.phone,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/brand/hw-approved-icon-transparent-v1.png`,
    description: 'Webdesign und Webentwicklung für kleine und mittelständische Unternehmen in Hamburg. Kostenlose Demo vor Bezahlung, direkte Betreuung durch den Inhaber, faire Preise ab 400 €.',
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.6547,
      longitude: 10.0368
    },
    address: {
      '@type': 'PostalAddress',
      ...businessNap.address
    },
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      { '@type': 'Country', name: 'Deutschland' }
    ],
    sameAs: [
      'https://www.google.com/maps?cid=7825297498295354421'
    ]
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
