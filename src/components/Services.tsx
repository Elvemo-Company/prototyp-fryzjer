import React, { useState } from 'react';
import { Scissors, Palette, Wind, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      category: "Strzyżenie damskie",
      icon: <Scissors className="h-8 w-8" />,
      services: [
        { name: "Strzyżenie + modelowanie", price: "80-120 PLN" },
        { name: "Strzyżenie grzywki", price: "30 PLN" },
        { name: "Strzyżenie z myciem", price: "100-140 PLN" },
        { name: "Konsultacja stylisty", price: "50 PLN" }
      ]
    },
    {
      category: "Koloryzacja",
      icon: <Palette className="h-8 w-8" />,
      services: [
        { name: "Koloryzacja całości", price: "200-400 PLN" },
        { name: "Refleksy/pasemka", price: "250-350 PLN" },
        { name: "Baleyage/Ombre", price: "300-500 PLN" },
        { name: "Tuszowanie siwizny", price: "150-200 PLN" }
      ]
    },
    {
      category: "Modelowanie",
      icon: <Wind className="h-8 w-8" />,
      services: [
        { name: "Modelowanie + stylizacja", price: "60-80 PLN" },
        { name: "Lokowanie", price: "80-100 PLN" },
        { name: "Prostowanie", price: "70-90 PLN" },
        { name: "Upięcie okolicznościowe", price: "120-180 PLN" }
      ]
    },
    {
      category: "Pielęgnacja",
      icon: <Sparkles className="h-8 w-8" />,
      services: [
        { name: "Keratynowe prostowanie", price: "400-600 PLN" },
        { name: "Botox do włosów", price: "250-350 PLN" },
        { name: "Regeneracja Olaplex", price: "200-280 PLN" },
        { name: "Maska proteinowa", price: "80-120 PLN" }
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi - więcej okręgów + dodatkowe duże kółko na górze po lewej */}
      <div className="hidden lg:block absolute top-1/4 -left-28 w-56 h-56 rounded-full border-6 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/4 -right-36 w-72 h-72 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-16 right-16 w-32 h-32 rounded-full border-2 border-dusty-mauve/20 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-16 left-16 w-40 h-40 rounded-full border-3 border-pearl-white/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-1/2 right-1/6 w-24 h-24 rounded-full border-2 border-deep-burgundy/15 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-1/6 w-28 h-28 rounded-full border-2 border-dusty-mauve/25 z-0 animate-fade-in"></div>
      
      {/* Dodatkowe duże kółko na górze po lewej */}
      <div className="hidden lg:block absolute top-16 -left-20 w-64 h-64 rounded-full border-5 border-pearl-white/40 z-0 animate-fade-in"></div>
      
      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 xs:mb-14 sm:mb-20 lg:mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-2xl xs:text-3xl sm:text-display font-light mb-4 sm:mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            Usługi i Cennik
          </h2>
          <div className="w-16 h-1 sm:w-24 bg-dusty-mauve mx-auto mb-6 sm:mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-base xs:text-lg sm:text-large text-rich-black/80 max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            Oferujemy pełen zakres profesjonalnych usług fryzjerskich w konkurencyjnych cenach
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
          {services.map((category, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Mobile Accordion */}
              <div className="block lg:hidden">
                <button
                  className={`w-full flex items-center justify-between bg-deep-burgundy/50 border border-dusty-mauve/30 shadow-elegant px-5 py-4 focus:outline-none transition-all duration-300 touch-manipulation rounded-2xl ${openIndex === index ? 'rounded-b-none' : ''}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`services-panel-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-pearl-white/20 p-3 rounded-full text-pearl-white">{category.icon}</span>
                    <span className="font-playfair text-lg font-medium text-pearl-white">{category.category}</span>
                  </div>
                  <span className="ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-pearl-white transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-pearl-white transition-transform duration-300" />
                    )}
                  </span>
                </button>
                <div
                  id={`services-panel-${index}`}
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                  }}
                >
                  <div className="space-y-2 px-5 py-2 bg-pearl-white/90 rounded-b-2xl">
                    {/* Zmniejszony padding py-2 */}
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className={`flex justify-between items-center py-3 px-3 rounded-xl transition-colors duration-300 text-left ${
                          serviceIndex % 2 === 0 ? 'bg-pearl-white/80' : 'bg-dusty-mauve/10'
                        } hover:bg-dusty-mauve/20`}
                        style={{ boxShadow: '0 1px 4px 0 rgba(80, 40, 60, 0.04)' }}
                      >
                        <span className="font-crimson text-rich-black font-medium text-base xs:text-lg">
                          {service.name}
                        </span>
                        <span className="font-playfair text-dusty-mauve font-semibold text-base xs:text-lg">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Desktop Card (unchanged) */}
              <div className="hidden lg:block">
                <div className="bg-pearl-white/90 border border-dusty-mauve/30 rounded-3xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-deep-burgundy/50 p-8 rounded-t-3xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-pearl-white/20 p-4 rounded-full">
                        <div className="text-pearl-white">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="font-playfair text-2xl font-medium text-pearl-white">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  {/* Services List */}
                  <div className="p-8">
                    <div className="space-y-6">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className={`flex justify-between items-center py-4 px-6 transition-colors duration-300 rounded-xl ${
                            serviceIndex % 2 === 0 ? 'bg-pearl-white/80' : 'bg-dusty-mauve/10'
                          } hover:bg-dusty-mauve/20`}
                        >
                          <span className="font-crimson text-rich-black font-medium text-lg">
                            {service.name}
                          </span>
                          <span className="font-playfair text-dusty-mauve font-semibold text-xl">
                            {service.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="font-crimson text-base xs:text-lg sm:text-large text-rich-black/80 max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Ceny mogą się różnić w zależności od długości i typu włosów
          </p>
          <div className="inline-flex items-center space-x-4 bg-dusty-mauve/10 px-12 py-6 border border-dusty-mauve/20">
            <Sparkles className="h-6 w-6 text-deep-burgundy" />
            <span className="font-playfair text-deep-burgundy font-medium text-xl">
              Konsultacja zawsze bezpłatna
            </span>
            <Sparkles className="h-6 w-6 text-deep-burgundy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

/*
  Add to global CSS (e.g. index.css or a new file imported in App):
  @media (min-width: 1024px) {
    .mobile-accordion { display: none; }
    .desktop-cards { display: block; }
  }
  @media (max-width: 1023px) {
    .mobile-accordion { display: block; }
    .desktop-cards { display: none; }
  }
*/