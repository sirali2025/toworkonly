import { useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Hosting from './components/Hosting';
import Integrations from './components/Integrations';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollSection from './components/ScrollSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Initialize GSAP and animations when component mounts
    // This allows for future scroll-triggered animations
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0e27]">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#2d2e4a]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(at 20% 50%, rgba(139, 0, 255, 0.08) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(0, 217, 255, 0.06) 0px, transparent 50%)',
          }}
        />
      </div>

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <ScrollSection id="home">
          <Hero />
        </ScrollSection>

        {/* Services Section */}
        <ScrollSection id="services" className="bg-gradient-to-b from-[#1a1f3a] to-[#2d2e4a]">
          <div className="max-w-7xl mx-auto px-6">
            <Services />
          </div>
        </ScrollSection>

        {/* Hosting Section */}
        <ScrollSection id="hosting" className="bg-gradient-to-b from-[#2d2e4a] to-[#1a1f3a]">
          <div className="max-w-7xl mx-auto px-6">
            <Hosting />
          </div>
        </ScrollSection>

        {/* Pricing Section */}
        <ScrollSection id="pricing" className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
          <div className="max-w-7xl mx-auto px-6">
            <Pricing />
          </div>
        </ScrollSection>

        {/* Integrations Section */}
        <ScrollSection
          id="integrations"
          className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <Integrations />
          </div>
        </ScrollSection>

        {/* Contact Section */}
        <ScrollSection id="contact" className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
          <div className="max-w-7xl mx-auto px-6">
            <Contact />
          </div>
        </ScrollSection>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

export default App;
