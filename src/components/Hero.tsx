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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-gradient"></div>
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gold-accent opacity-60"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gold-accent opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in-up">
        <h1 className="font-playfair text-hero font-light text-pearl-white mb-8 leading-none tracking-tight">
          Studio Fryzur
          <span className="block font-extralight italic">Elegance</span>
        </h1>
        
        <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
        
        <p className="font-crimson text-2xl text-pearl-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Twoje włosy, nasza pasja
        </p>
        
        <p className="font-crimson text-xl text-pearl-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
          Odkryj wyjątkowe doświadczenie w naszym salonie, gdzie profesjonalizm spotyka się z elegancją
        </p>

        <button
          onClick={scrollToContact}
          className="group inline-flex items-center space-x-4 bg-transparent border-2 border-pearl-white hover:bg-pearl-white hover:text-deep-burgundy text-pearl-white px-12 py-4 font-crimson font-semibold text-lg transition-all duration-500 transform hover:scale-105"
        >
          <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          <span>Umów wizytę</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-pearl-white/60 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-pearl-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;