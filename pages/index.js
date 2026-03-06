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
        <title>Freelance Web Developer Hamburg</title>
        <meta
          name="description"
          content="Modern websites for Hamburg businesses. Fast, mobile-first and optimized to attract local customers."
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
