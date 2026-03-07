const siteUrl = 'https://hamburg-webentwickler.de';

export const defaultSeo = {
  title: 'Freiberuflicher Webentwickler Hamburg',
  description:
    'Moderne, mobile-optimierte Webseiten für Unternehmen in Hamburg. SEO-freundlich aufgebaut für bessere Sichtbarkeit und mehr Anfragen.',
  siteName: 'Webentwickler Hamburg',
  locale: 'de_DE',
  type: 'website'
};

export function getCanonical(path = '/') {
  return `${siteUrl}${path}`;
}

export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Freiberuflicher Webentwickler Hamburg',
    areaServed: 'Hamburg',
    url: siteUrl,
    serviceType: 'Webdesign und Webentwicklung',
    description: defaultSeo.description
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
        text: item.answer
      }
    }))
  };
}
