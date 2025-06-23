import React from 'react';
import { Scissors, Palette, Star } from 'lucide-react';
import fryzjerka1 from '../assets/fryzjerka1.png';
import fryzjerka2 from '../assets/fryzjerka2.png';
import fryzjerka3 from '../assets/fryzjerka3.png';

const Stylists: React.FC = () => {
  const stylists = [
    {
      name: "Fryzjerka 1",
      specialization: "Koloryzacja i refleksy",
      bio: "Specjalistka od koloryzacji z 15-letnim doświadczeniem. Uwielbia tworzyć naturalne, ale efektowne przejścia kolorów.",
      image: fryzjerka1,
      icon: <Palette className="h-6 w-6" />
    },
    {
      name: "Fryzjerka 2",
      specialization: "Strzyżenie i stylizacja",
      bio: "Artystka fryzjerstwa, która potrafi idealnie dopasować strzyżenie do kształtu twarzy. Specjalizuje się w modnych cięciach.",
      image: fryzjerka2,
      icon: <Scissors className="h-6 w-6" />
    },
    {
      name: "Fryzjerka 3",
      specialization: "Pielęgnacja i regeneracja",
      bio: "Ekspertka w dziedzinie pielęgnacji włosów. Specjalizuje się w zabiegach regenerujących i keratynowych.",
      image: fryzjerka3,
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <section id="stylists" className="py-16 xs:py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi */}
      <div className="hidden lg:block absolute top-1/3 -right-32 w-64 h-64 rounded-full border-8 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 -left-40 w-80 h-80 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-2xl xs:text-3xl sm:text-display font-light mb-4 sm:mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            Poznaj nasze fryzjerki
          </h2>
          <div className="w-16 h-1 sm:w-24 bg-dusty-mauve mx-auto mb-6 sm:mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-base xs:text-lg sm:text-large text-rich-black/80 max-w-xs xs:max-w-md sm:max-w-4xl mx-auto leading-relaxed">
            Nasz zespół to pasjonaci, którzy każdego dnia tworzą wyjątkowe stylizacje
          </p>
        </div>
        {/* Stylists Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-16 animate-fade-in-up">
          {stylists.map((stylist, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform overflow-hidden lg:hover:scale-105">
                {/* Large Portrait */}
                <div className="relative overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-64 object-cover transition-transform duration-700 lg:group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-dusty-mauve/10 text-dusty-mauve p-2 rounded-full">
                      {stylist.icon}
                    </div>
                    <span className="font-crimson text-dusty-mauve text-lg font-medium">
                      {stylist.specialization}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-medium text-rich-black mb-4">
                    {stylist.name}
                  </h3>
                  <div className="w-12 h-px bg-dusty-mauve mb-6"></div>
                  <p className="font-crimson text-rich-black/70 leading-relaxed">
                    {stylist.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Stylists Carousel - Mobile */}
        <div className="lg:hidden">
          <div
            className="flex overflow-x-auto space-x-5 pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {stylists.map((stylist, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 xs:w-80 max-w-xs bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant transition-all duration-500 transform overflow-hidden snap-center"
                style={{ marginRight: index === stylists.length - 1 ? 0 : undefined }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-dusty-mauve/10 text-dusty-mauve p-2 rounded-full">
                      {stylist.icon}
                    </div>
                    <span className="font-crimson text-dusty-mauve text-base font-medium">
                      {stylist.specialization}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-rich-black mb-3">
                    {stylist.name}
                  </h3>
                  <div className="w-10 h-px bg-dusty-mauve mb-4"></div>
                  <p className="font-crimson text-rich-black/70 leading-relaxed text-sm">
                    {stylist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Optional: Dots indicator */}
          {/*
          <div className="flex justify-center mt-2 space-x-2">
            {stylists.map((_, idx) => (
              <span key={idx} className="w-2 h-2 rounded-full bg-dusty-mauve/40 inline-block"></span>
            ))}
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Stylists;