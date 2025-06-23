import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Strona główna' },
    { id: 'about', label: 'O nas' },
    { id: 'stylists', label: 'Zespół' },
    { id: 'services', label: 'Usługi' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'location', label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled
        ? 'bg-pearl-white/95 backdrop-blur-lg shadow-elegant'
        : 'bg-transparent'}
      px-2 xs:px-4 sm:px-0
    `}>
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-3 xs:py-4 sm:py-6">
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            <div className={`p-2 xs:p-3 rounded-full ${isScrolled ? 'bg-deep-burgundy/10' : 'bg-pearl-white/20'}`}>
              <Scissors className={`h-5 w-5 xs:h-6 xs:w-6 ${isScrolled ? 'text-deep-burgundy' : 'text-pearl-white'}`} />
            </div>
            <span className={`font-playfair text-lg xs:text-xl sm:text-2xl font-light tracking-wide ${isScrolled ? 'text-rich-black' : 'text-pearl-white'}`}>
              <span className="block sm:inline">Atelier Fryzur</span>
              <span className="block sm:inline font-extralight italic"> Mariola Michnowska</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-crimson transition-all duration-300 font-medium text-lg relative group ${
                  isScrolled 
                    ? 'text-rich-black hover:text-deep-burgundy' 
                    : 'text-pearl-white hover:text-dusty-mauve'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-deep-burgundy' : 'bg-pearl-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-rich-black hover:text-deep-burgundy' 
                  : 'text-pearl-white hover:text-dusty-mauve'
              }`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-pearl-white/98 backdrop-blur-lg rounded-lg mt-4 p-6 shadow-luxury">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 font-crimson text-rich-black hover:text-deep-burgundy transition-colors duration-300 text-lg border-b border-dusty-mauve/50 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;