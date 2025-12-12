import { Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 mb-6 group text-left">
              <img
                src="/ChatGPT_Image_22_oct._2025__15_51_16-removebg-preview.png"
                alt="AKS for AI"
                className="h-10 w-10 object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold group-hover:text-[#FF00FB] transition-colors duration-300">
                AKS for AI
              </span>
            </button>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through intelligent automation and AI-powered solutions. Your strategic partner for sustainable growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:aks.ai.strategic.partner@gmail.com"
                className="social-icon group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {['Sales & Marketing', 'Customer Support', 'Content Creation', 'Business Insights'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection('services')} className="hover:text-[#FF00FB] transition-colors duration-300 text-left">
                      {item}
                    </button>
                  </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('hosting')} className="hover:text-[#FF00FB] transition-colors duration-300 text-left">
                  Hosting Options
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#FF00FB] transition-colors duration-300 text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-[#FF00FB] transition-colors duration-300 text-left">
                  Pricing Models
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#FF00FB] transition-colors duration-300 text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 AKS for AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with AI-powered excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
