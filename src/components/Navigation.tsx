import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
          }}
        >
          {/* Hair strand-like particles */}
          <div 
            className="w-0.5 h-8 bg-gradient-to-b from-pearl-white/40 via-dusty-mauve/30 to-transparent transform rotate-12 animate-float"
            style={{
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              transformOrigin: 'bottom',
            }}
          />
        </div>
      ))}
      
      {/* Floating scissors icons */}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={`scissors-${i}`}
          className="absolute opacity-8"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        >
          <Scissors 
            className="h-5 w-5 text-pearl-white transform"
            style={{
              animation: `float ${8 + Math.random() * 3}s ease-in-out infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
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

            {/* Mobile Menu Button with Morphing Animation */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-8 h-8 transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-rich-black hover:text-deep-burgundy' 
                    : 'text-pearl-white hover:text-dusty-mauve'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Menu 
                    className={`h-7 w-7 transform transition-all duration-500 ${
                      isOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`h-7 w-7 absolute transform transition-all duration-500 ${
                      isOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-800 ease-in-out ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            isOpen 
              ? 'bg-gradient-to-br from-deep-burgundy/95 via-dusty-mauve/90 to-pearl-white/95 backdrop-blur-xl scale-100' 
              : 'bg-transparent backdrop-blur-none scale-110'
          }`} />
          
          {/* Animated gradient overlay */}
          <div className={`absolute inset-0 transition-all duration-800 delay-100 ${
            isOpen 
              ? 'bg-gradient-to-tl from-dusty-mauve/30 via-transparent to-deep-burgundy/20 opacity-100' 
              : 'opacity-0'
          }`} />
          
          {/* Floating Particles */}
          <div className={`transition-all duration-500 delay-200 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            {isOpen && <FloatingParticles />}
          </div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-between p-6 pt-24">
          {/* Brand Name */}
          <div className={`text-center mb-8 transition-all duration-600 ease-in-out delay-200 ${
            isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
          }`}>
            <h1 className="font-playfair text-3xl font-light text-pearl-white mb-2">
              Atelier Fryzur
            </h1>
            <p className="font-playfair text-lg font-extralight italic text-pearl-white/80">
              Mariola Michnowska
            </p>
            <div className="w-16 h-px bg-pearl-white/60 mx-auto mt-4"></div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col justify-center space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className={`group transition-all duration-700 ease-in-out ${
                  isOpen 
                    ? 'opacity-100 transform translate-x-0 translate-y-0' 
                    : 'opacity-0 transform translate-y-1'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${300 + index * 120}ms` : '0ms' 
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-4 px-6 rounded-xl hover:bg-pearl-white/8 active:bg-pearl-white/15 transition-all duration-250 group relative overflow-hidden"
                >
                  <div className="flex items-center space-x-4">
                    {/* Number Prefix */}
                    <span className="font-crimson text-sm text-pearl-white/60 w-8 group-hover:text-pearl-white transition-all duration-250">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    
                    {/* Menu Item */}
                    <span className="font-crimson text-2xl font-light text-pearl-white group-hover:text-white transition-all duration-250 transform group-hover:translate-x-1">
                      {item.label}
                    </span>

                    {/* Decorative Scissors Icon */}
                    <div className={`ml-auto transform transition-all duration-300 ${
                      'opacity-0 scale-75 group-hover:opacity-80 group-hover:scale-100'
                    }`}>
                      <Scissors className="h-4 w-4 text-pearl-white/60 group-hover:text-pearl-white/80" />
                    </div>
                  </div>

                  {/* Animated Underline */}
                  <div className="absolute bottom-2 left-6 right-6 h-px bg-gradient-to-r from-pearl-white/30 to-dusty-mauve/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></div>
                </button>
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className={`text-center transition-all duration-600 ease-in-out delay-500 ${
            isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
          }`}>
            <p className="font-crimson text-pearl-white/80 text-sm mb-4">
              Połącz się z nami
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 rounded-full bg-pearl-white/10 hover:bg-pearl-white/15 transition-all duration-250 transform hover:scale-105 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-pearl-white group-hover:text-white transition-all duration-250" />
                  
                  {/* Simple Hover Ring */}
                  <div className="absolute inset-0 rounded-full border border-pearl-white/20 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-60 transition-all duration-400"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;