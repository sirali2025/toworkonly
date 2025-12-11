import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollToSection } from '../hooks/useSmoothScroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'services', 'hosting', 'pricing', 'integrations', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'hosting', label: 'Hosting' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-[#0a0e27]/95 to-[#1a1f3a]/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20 py-3'
          : 'bg-gradient-to-b from-[#0a0e27]/80 to-[#1a1f3a]/70 backdrop-blur-sm shadow-md border-b border-cyan-500/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/ChatGPT_Image_22_oct._2025__15_51_16-removebg-preview.png"
              alt="AKS for AI"
              className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-all duration-300">
              AKS for AI
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started
            </button>
          </nav>

          <button
            className="lg:hidden p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`block w-full text-left nav-link py-2 ${
                  activeSection === id ? 'active' : ''
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg block text-center"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
