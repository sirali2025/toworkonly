import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, motion, useSpring } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load heavy sections
const Services = lazy(() => import('./sections/Services'));
const Pricing = lazy(() => import('./sections/Pricing'));
const Hosting = lazy(() => import('./components/Hosting'));
const Integrations = lazy(() => import('./components/Integrations'));
const WhyUs = lazy(() => import('./sections/WhyUs'));
const Contact = lazy(() => import('./sections/Contact'));
const About = lazy(() => import('./sections/About'));
const Agentic = lazy(() => import('./sections/Agentic'));

gsap.registerPlugin(ScrollTrigger);

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Performance optimization: ScrollTrigger batching/refresh
    ScrollTrigger.config({ limitCallbacks: true });
    
    // Refresh ScrollTrigger on resize
    const handleResize = () => {
        ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white relative selection:bg-orange-200 selection:text-orange-900">
        {/* Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 origin-left z-[100]"
          style={{ scaleX }}
        />

        <Header />
        
        <main>
          <div id="home">
            <Hero />
          </div>
          
          <Suspense fallback={<LoadingSpinner />}>
            <About />
            <Agentic />
            <Services />
            <Pricing />
            <WhyUs />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
