import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.card, .feature-item, .step, .price-card, .faq-item, .team-item, .promise-item')
      .forEach((element, index) => {
        element.style.transitionDelay = `${(index % 4) * 0.07}s`;
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="shortcut icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/hw-approved-icon-transparent-v1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
