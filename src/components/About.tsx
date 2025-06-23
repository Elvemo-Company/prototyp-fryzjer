import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-dusty-mauve/40 via-pearl-white/90 to-dusty-mauve/60 relative overflow-hidden">
      {/* Dekoracyjne okręgi */}
      <div className="hidden lg:block absolute top-1/4 -left-32 w-72 h-72 rounded-full border-8 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/4 -right-28 w-56 h-56 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-display font-light mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            O nas
          </h2>
          <div className="w-24 h-1 bg-dusty-mauve mx-auto mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-large text-rich-black/80 max-w-4xl mx-auto leading-relaxed">
            Studio Fryzur Elegance to miejsce, gdzie tradycyjne rzemiosło fryzjerskie spotyka się z nowoczesnymi trendami. Od ponad 10 lat tworzymy wyjątkowe stylizacje, które podkreślają naturalną piękność naszych klientek.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-none mx-auto px-2 animate-fade-in-up">
          <div className="text-center group bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center justify-center w-20 h-20 bg-dusty-mauve/10 rounded-full mb-8 mx-auto">
              <Award className="h-9 w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-section font-medium text-rich-black mb-6 text-center">
              Profesjonalizm
            </h3>
            <p className="font-crimson text-rich-black/70 leading-relaxed text-base text-center px-4">
              Nasz zespół składa się z doświadczonych stylistów z międzynarodowymi certyfikatami
            </p>
          </div>
          <div className="text-center group bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center justify-center w-20 h-20 bg-dusty-mauve/10 rounded-full mb-8 mx-auto">
              <Heart className="h-9 w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-section font-medium text-rich-black mb-6">
              Indywidualne podejście
            </h3>
            <p className="font-crimson text-rich-black/70 leading-relaxed text-base text-center px-4">
              Każda klientka jest dla nas wyjątkowa. Dostosowujemy stylizacje do osobowości i stylu życia
            </p>
          </div>
          <div className="text-center group bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant p-10 hover:shadow-luxury transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center justify-center w-20 h-20 bg-dusty-mauve/10 rounded-full mb-8 mx-auto">
              <Users className="h-9 w-9 text-dusty-mauve" />
            </div>
            <h3 className="font-playfair text-section font-medium text-rich-black mb-6">
              Atmosfera
            </h3>
            <p className="font-crimson text-rich-black/70 leading-relaxed text-base text-center px-4">
              Przytulne wnętrze i przyjazna atmosfera sprawiają, że każda wizyta to chwila relaksu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;