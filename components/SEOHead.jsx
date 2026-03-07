import Head from 'next/head';
import { defaultSeo, getCanonical } from '../lib/seo';

export default function SEOHead({ title, description, path = '/', schema }) {
  const pageTitle = title
    ? title === defaultSeo.siteName
      ? title
      : `${title} | ${defaultSeo.siteName}`
    : defaultSeo.title;
  const pageDescription = description || defaultSeo.description;
  const canonical = getCanonical(path);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={defaultSeo.type} />
      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:locale" content={defaultSeo.locale} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
    </Head>
  );
}
