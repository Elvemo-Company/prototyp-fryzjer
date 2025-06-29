import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi */}
      <div className="hidden lg:block absolute top-1/4 -left-32 w-72 h-72 rounded-full border-8 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/4 -right-28 w-56 h-56 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 sm:mb-24 lg:mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-2xl xs:text-3xl sm:text-display font-light mb-4 sm:mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            O nas
          </h2>
          <div className="w-16 h-1 sm:w-24 bg-dusty-mauve mx-auto mb-4 md:mb-6 sm:mb-12 rounded-full animate-fade-in"></div>
          
          {/* Mobile compact intro text */}
          <p className="md:hidden font-crimson text-sm text-rich-black max-w-xs mx-auto leading-relaxed px-4">
            Atelier Fryzur Mariola Michnowska - rzemiosło spotyka nowoczesność. Ponad 10 lat doświadczenia w tworzeniu wyjątkowych stylizacji.
          </p>
          
          {/* Desktop intro text */}
          <p className="hidden md:block font-crimson text-base xs:text-lg sm:text-large text-rich-black max-w-xs xs:max-w-md sm:max-w-4xl mx-auto leading-relaxed">
            Atelier Fryzur Mariola Michnowska to miejsce, gdzie tradycyjne rzemiosło fryzjerskie spotyka się z nowoczesnymi trendami. Od ponad 10 lat tworzymy wyjątkowe stylizacje, które podkreślają naturalną piękność naszych klientek.
          </p>
        </div>

        {/* Mobile Compact Features - Icon Grid */}
        <div className="md:hidden animate-fade-in-up">
          {/* Icon Grid Layout */}
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-mauve to-dusty-mauve/80 rounded-full flex items-center justify-center mb-2 shadow-soft group-hover:scale-105 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="font-playfair text-xs font-semibold text-deep-burgundy">Profesjonalizm</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-mauve to-dusty-mauve/80 rounded-full flex items-center justify-center mb-2 shadow-soft group-hover:scale-105 transition-transform duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-playfair text-xs font-semibold text-deep-burgundy">Indywidualność</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-mauve to-dusty-mauve/80 rounded-full flex items-center justify-center mb-2 shadow-soft group-hover:scale-105 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="font-playfair text-xs font-semibold text-deep-burgundy">Atmosfera</span>
            </div>
          </div>
          
          {/* Compact descriptions below */}
          <div className="bg-pearl-white/50 rounded-xl p-4 mx-2">
            <div className="grid grid-cols-1 gap-3 text-center">
              <div className="border-b border-dusty-mauve/20 pb-2 last:border-b-0">
                <p className="font-crimson text-xs text-rich-black leading-relaxed">
                  <span className="font-semibold text-deep-burgundy">Profesjonalizm:</span> Doświadczeni styliści z międzynarodowymi certyfikatami
                </p>
              </div>
              <div className="border-b border-dusty-mauve/20 pb-2 last:border-b-0">
                <p className="font-crimson text-xs text-rich-black leading-relaxed">
                  <span className="font-semibold text-deep-burgundy">Indywidualność:</span> Stylizacje dostosowane do Twojej osobowości
                </p>
              </div>
              <div className="border-b border-dusty-mauve/20 pb-2 last:border-b-0">
                <p className="font-crimson text-xs text-rich-black leading-relaxed">
                  <span className="font-semibold text-deep-burgundy">Atmosfera:</span> Przytulne wnętrze i chwile relaksu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Features Grid - unchanged */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md sm:max-w-none mx-auto px-0 xs:px-2 animate-fade-in-up">
          <div
            className="text-center group bg-pearl-white/95 border border-dusty-mauve/30 rounded-2xl sm:rounded-3xl shadow-elegant p-6 xs:p-8 sm:p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up mx-auto"
            style={{ width: '359px', maxWidth: '100%' }}
          >
            <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 bg-dusty-mauve/10 rounded-full mb-6 xs:mb-8 mx-auto">
              <Award className="h-7 w-7 xs:h-9 xs:w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-lg xs:text-xl sm:text-section font-medium text-rich-black mb-4 xs:mb-6 text-center">
            Profesjonalizm
            </h3>
            <p className="font-crimson text-rich-black leading-relaxed text-sm xs:text-base lg:text-lg text-center px-2 xs:px-4">
              Nasz zespół składa się z doświadczonych stylistów z międzynarodowymi certyfikatami
            </p>
          </div>
          <div
            className="text-center group bg-pearl-white/95 border border-dusty-mauve/30 rounded-2xl sm:rounded-3xl shadow-elegant p-6 xs:p-8 sm:p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up mx-auto"
            style={{ width: '359px', maxWidth: '100%' }}
          >
            <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 bg-dusty-mauve/10 rounded-full mb-6 xs:mb-8 mx-auto">
              <Heart className="h-7 w-7 xs:h-9 xs:w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-lg xs:text-xl sm:text-section font-medium text-rich-black mb-4 xs:mb-6 text-center">
              Indywidualne podejście
            </h3>
            <p className="font-crimson text-rich-black leading-relaxed text-sm xs:text-base lg:text-lg text-center px-2 xs:px-4">
              Każda klientka jest dla nas wyjątkowa. Dostosowujemy stylizacje do osobowości i stylu życia
            </p>
          </div>
          <div
            className="text-center group bg-pearl-white/95 border border-dusty-mauve/30 rounded-2xl sm:rounded-3xl shadow-elegant p-6 xs:p-8 sm:p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up mx-auto"
            style={{ width: '359px', maxWidth: '100%' }}
          >
            <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 bg-dusty-mauve/10 rounded-full mb-6 xs:mb-8 mx-auto">
              <Users className="h-7 w-7 xs:h-9 xs:w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-lg xs:text-xl sm:text-section font-medium text-rich-black mb-4 xs:mb-6 text-center">
              Atmosfera
            </h3>
            <p className="font-crimson text-rich-black leading-relaxed text-sm xs:text-base lg:text-lg text-center px-2 xs:px-4">
              Przytulne wnętrze i przyjazna atmosfera sprawiają, że każda wizyta to chwila relaksu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;