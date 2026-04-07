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
      { threshold: 0.15 }
    );

    const revealTargets = [
      ...document.querySelectorAll('.card, .feature-item, .step, .price-card, .faq-item, .team-item, .promise-item, .reveal-up')
    ];

    document.querySelectorAll('section > *').forEach((element) => {
      if (!element.classList.contains('reveal-up')) {
        element.classList.add('reveal-up');
      }
      revealTargets.push(element);
    });

    revealTargets.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 6) * 0.08}s`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
