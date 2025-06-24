import React from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Elegancka kobieta z piękną fryzurą"
          className="w-full h-full object-cover md:object-cover object-center"
          style={{
            objectPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-luxury-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 animate-fade-in-up w-full">
        {/* Mobile Title */}
        <h1 className="font-playfair text-4xl xs:text-5xl font-light text-pearl-white mb-8 leading-tight tracking-tight sm:hidden">
          Atelier Fryzur
          <span className="block font-extralight italic text-xl xs:text-2xl mt-1">Mariola Michnowska</span>
        </h1>
        {/* Desktop Title */}
        <h1 className="font-playfair text-hero font-light text-pearl-white mb-8 leading-none tracking-tight hidden sm:block">
          Atelier Fryzur
          <span className="block font-extralight italic">Mariola Michnowska</span>
        </h1>
        {/* Divider */}
        <div className="w-16 h-px bg-dusty-mauve mx-auto mb-6 sm:w-24 sm:mb-8 sm:block hidden"></div>
        {/* Mobile Divider */}
        <div className="w-12 h-px bg-dusty-mauve mx-auto mb-4 sm:hidden"></div>
        {/* Slogan */}
        <p className="font-crimson text-lg xs:text-xl text-pearl-white mb-6 max-w-xs xs:max-w-sm mx-auto font-light leading-snug sm:text-2xl sm:mb-12">
          Twoje włosy, nasza pasja
        </p>
         {/* Description */}
        <p className="font-crimson text-base xs:text-lg sm:text-xl text-pearl-white/95 mb-8 sm:mb-16 max-w-xs xs:max-w-md md:max-w-3xl mx-auto leading-normal md:text-center">
          <span className="md:inline-block md:w-auto">
            Odkryj wyjątkowe doświadczenie w naszym salonie, gdzie profesjonalizm spotyka się z elegancją
          </span>
        </p>
        {/* Przycisk mobilny */}
      <button
        onClick={scrollToContact}
        className="md:hidden group inline-flex items-center space-x-2 bg-pearl-white text-deep-burgundy border-2 border-pearl-white hover:bg-transparent hover:text-pearl-white px-6 py-3 font-crimson font-semibold text-base xs:text-lg rounded-full shadow-md transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pearl-white/60"
      >
        <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
        <span>Umów wizytę</span>
      </button>

      {/* Przycisk desktopowy */}
      <button 
        onClick={scrollToContact}
        className="hidden md:inline-flex group items-center space-x-4 bg-transparent border-2 border-pearl-white hover:bg-pearl-white hover:text-deep-burgundy text-pearl-white px-12 py-4 font-crimson font-semibold text-lg transition-all duration-500 transform hover:scale-105"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5 group-hover:scale-110 transition-transform duration-500"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        </svg>
        <span>Umów wizytę</span>
      </button>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce sm:bottom-12">
        <div className="w-5 h-10 border-2 border-pearl-white/80 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pearl-white/90 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;