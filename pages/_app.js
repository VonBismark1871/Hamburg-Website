import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand/favicon-hw-approved-v1.png?v=20260311c" type="image/png" />
        <link rel="shortcut icon" href="/brand/favicon-hw-approved-v1.png?v=20260311c" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/favicon-hw-approved-v1.png?v=20260311c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
