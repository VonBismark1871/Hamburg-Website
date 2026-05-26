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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="shortcut icon" href="/brand/hw-approved-icon-transparent-v1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/hw-approved-icon-transparent-v1.png" />
      </Head>
      <ScrollProgress />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          exit={reduce ? {} : { opacity: 0, y: -10 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
