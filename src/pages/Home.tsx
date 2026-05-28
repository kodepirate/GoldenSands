import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '../sections/Navigation';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { About } from '../sections/About';
import { Restaurant } from '../sections/Restaurant';
import { Gallery } from '../sections/Gallery';
import { Testimonials } from '../sections/Testimonials';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { Preloader } from '../components/Preloader';
import { ScrollToTop } from '../components/ScrollToTop';
import { GrainOverlay } from '../components/GrainOverlay';
import { HeartCursor } from '../components/HeartCursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {/* Global Effects */}
      <GrainOverlay />
      <HeartCursor />

      <div
        className={`min-h-screen ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}
        style={{ backgroundColor: '#F7F3ED' }}
      >
        <Navigation />

        <main>
          <Hero isReady={!isLoading} />
          <Services />
          <About />
          <Restaurant />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
