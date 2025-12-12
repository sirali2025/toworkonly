import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'why-us', 'services', 'pricing', 'hosting', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'hosting', label: 'Hosting' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md shadow-lg py-4 border-b border-[#FF00FB]/30'
          : 'bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-sm shadow-md py-4 border-b border-[#FF00FB]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/ChatGPT_Image_22_oct._2025__15_51_16-removebg-preview.png"
              alt="AKS for AI"
              className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-black group-hover:gradient-text transition-all duration-300">
              AKS for AI
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="gradient-button px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-[#FF00FB]/50 transition-all duration-300"
            >
              Get Started
            </button>
          </nav>

          <button
            className="lg:hidden p-2 text-black hover:bg-[#FF00FB]/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left nav-link py-2 ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
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
