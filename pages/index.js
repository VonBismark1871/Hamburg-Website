import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Freiberuflicher Webentwickler Hamburg</title>
        <meta
          name="description"
          content="Moderne Webseiten für Hamburger Unternehmen. Schnell, mobil optimiert und darauf ausgelegt, lokale Kundschaft zu gewinnen."
        />
      </Head>
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
