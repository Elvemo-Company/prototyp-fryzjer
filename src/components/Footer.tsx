import React from 'react';
import { Scissors, Heart, Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-rich-black text-pearl-white relative overflow-hidden">
      {/* Dekoracyjne okręgi - mniej okręgów, lepsze rozmieszczenie */}
      <div className="hidden lg:block absolute top-1/4 -right-24 w-48 h-48 rounded-full border-4 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/4 -left-32 w-64 h-64 rounded-full border-6 border-pearl-white/10 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-dusty-mauve/20 z-0 animate-fade-in"></div>
      
             <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 relative z-10">
          {/* Logo & Description - ukryte na mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-dusty-mauve/20 p-3 rounded-full">
                <Scissors className="h-8 w-8 text-dusty-mauve" />
              </div>
              <span className="font-playfair text-3xl font-light tracking-wide">
                  Atelier Fryzur
              </span>
            </div>
            <p className="font-crimson text-pearl-white/80 leading-relaxed mb-10 text-lg max-w-lg">
              Twoje włosy, nasza pasja. Od ponad 10 lat tworzymy wyjątkowe stylizacje 
              w sercu Warszawy, łącząc tradycyjne rzemiosło z nowoczesnymi trendami.
            </p>
            <div className="flex items-center space-x-4 text-dusty-mauve">
              <Heart className="h-6 w-6" />
              <span className="font-crimson text-lg">Zaufało nam ponad 2000 klientek</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg lg:text-2xl font-medium mb-4 lg:mb-10 text-dusty-mauve">
              Menu
            </h3>
            <ul className="space-y-3 lg:space-y-5">
              {[
                { id: 'about', label: 'O nas' },
                { id: 'stylists', label: 'Zespół' },
                { id: 'services', label: 'Usługi' },
                { id: 'gallery', label: 'Galeria' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-crimson text-pearl-white/80 hover:text-dusty-mauve transition-colors duration-300 text-base lg:text-lg relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-dusty-mauve transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Social Media */}
          <div>
            <h3 className="font-playfair text-lg lg:text-2xl font-medium mb-4 lg:mb-10 text-dusty-mauve">
              Kontakt
            </h3>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-dusty-mauve" />
                <span className="font-crimson text-pearl-white/80 text-sm lg:text-lg">+48 791 779 784</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-dusty-mauve" />
                <span className="font-crimson text-pearl-white/80 text-sm lg:text-lg">atelierfryzurmm@interia.pl</span>
              </div>
              
              {/* Social Media */}
              <div className="pt-4 lg:pt-8">
                <p className="font-crimson text-pearl-white/60 mb-4 lg:mb-6 text-sm lg:text-lg">Śledź nas:</p>
                <div className="flex space-x-4 lg:space-x-6">
                  <a
                    href="#"
                    className="bg-pearl-white/10 hover:bg-dusty-mauve text-pearl-white hover:text-pearl-white p-3 lg:p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-pearl-white/10 hover:bg-dusty-mauve text-pearl-white hover:text-pearl-white p-3 lg:p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="h-5 w-5 lg:h-6 lg:w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Bottom Section */}
         <div className="border-t border-pearl-white/20 mt-8 lg:mt-20 pt-6 lg:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
            <p className="font-crimson text-pearl-white/60 text-lg">
              © 2025 Atelier Fryzur Mariola Michnowska. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center space-x-8 mt-8 lg:mt-0 text-pearl-white/60">
              <a href="#" className="hover:text-dusty-mauve transition-colors duration-300 font-crimson">
                Polityka prywatności
              </a>
              <span>|</span>
              <a href="#" className="hover:text-dusty-mauve transition-colors duration-300 font-crimson">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;