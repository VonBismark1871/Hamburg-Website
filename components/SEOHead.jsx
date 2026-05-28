import Head from 'next/head';
import { defaultSeo, getCanonical, isPreviewEnvironment, siteUrl } from '../lib/seo';

const OG_IMAGE = `${siteUrl}/og-image.jpg`;

export default function SEOHead({ title, description, path = '/', schema, noIndex = false }) {
  const pageTitle = title
    ? title === defaultSeo.siteName
      ? title
      : `${title} | ${defaultSeo.siteName}`
    : defaultSeo.title;
  const pageDescription = description || defaultSeo.description;
  const canonical = getCanonical(path);
  const shouldNoIndex = noIndex || isPreviewEnvironment();

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {shouldNoIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={defaultSeo.type} />
      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:locale" content={defaultSeo.locale} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {schema
        ? Array.isArray(schema)
          ? schema.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)
          : <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        : null}
    </Head>
  );
}
