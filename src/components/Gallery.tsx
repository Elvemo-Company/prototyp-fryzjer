import React from 'react';
import { Camera, Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      alt: "Elegancka koloryzacja blond",
      tall: true
    },
    {
      src: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Modne strzyżenie bob",
      tall: false
    },
    {
      src: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Stylizacja na szczególną okazję",
      tall: false
    },
    {
      src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      alt: "Naturalne fale",
      tall: true
    },
    {
      src: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Koloryzacja baleyage",
      tall: false
    },
    {
      src: "https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      alt: "Kreatywne upięcie",
      tall: true
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-dusty-mauve/40 via-pearl-white/90 to-dusty-mauve/40 relative overflow-hidden">
      {/* Dekoracyjne okręgi */}
      <div className="hidden lg:block absolute top-1/3 -left-24 w-64 h-64 rounded-full border-6 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 -right-20 w-48 h-48 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-display font-light mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-dusty-mauve mx-auto mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-large text-rich-black/80 max-w-3xl mx-auto leading-relaxed">
            Zobacz nasze najnowsze prace i zainspiruj się możliwościami, które oferujemy
          </p>
        </div>
        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-fade-in-up">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 break-inside-avoid bg-pearl-white/90 border border-dusty-mauve/20 rounded-3xl">
              <div className={`${image.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-3xl"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                  <div className="absolute bottom-6 left-6 right-6 text-pearl-white">
                    <div className="flex items-center justify-between">
                      <Camera className="h-6 w-6" />
                      <Instagram className="h-6 w-6 hover:text-dusty-mauve transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-6 bg-dusty-mauve/10 px-12 py-8 border border-dusty-mauve/20 rounded-2xl">
            <Instagram className="h-8 w-8 text-dusty-mauve" />
            <span className="font-playfair text-rich-black font-medium text-xl">
              Śledź nas na Instagramie: @studioelegance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;