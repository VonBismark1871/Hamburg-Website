import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ScrollProgress from '../components/ui/ScrollProgress';
import '../styles/globals.css';

/* Legacy reveal for pages not yet migrated to the Reveal primitive. */
function useLegacyReveal(asPath) {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.card, .feature-item, .step, .price-card, .faq-item, .team-item, .promise-item'
    );
    if (!targets.length) return undefined;

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

    targets.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 0.07}s`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [asPath]);
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  useLegacyReveal(router.asPath);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @font-face {
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 500 700;
            font-display: swap;
            src: url('/fonts/space-grotesk.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400 700;
            font-display: swap;
            src: url('/fonts/inter.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}</style>
        <link rel="icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="shortcut icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/hw-approved-icon-transparent-v1.png" />
      </Head>
      {!router.asPath.startsWith('/referenzen/') && <ScrollProgress />}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          exit={reduce ? {} : { opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
