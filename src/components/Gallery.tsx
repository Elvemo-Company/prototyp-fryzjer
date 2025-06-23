import React from 'react';

// Import obrazów galerii
import galery1 from '../assets/galery1.jpg';
import galery2 from '../assets/galery2.jpg';
import galery3 from '../assets/galery3.jpg';
import galery4 from '../assets/galery4.jpg';
import galery5 from '../assets/galery5.jpg';
import galery6 from '../assets/galery6.jpg';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: galery1,
      alt: "Elegancka koloryzacja i stylizacja",
      tall: true
    },
    {
      src: galery2,
      alt: "Modne strzyżenie bob",
      tall: false
    },
    {
      src: galery3,
      alt: "Stylizacja na szczególną okazję",
      tall: false
    },
    {
      src: galery4,
      alt: "Naturalne fale i koloryzacja",
      tall: true
    },
    {
      src: galery5,
      alt: "Koloryzacja baleyage",
      tall: false
    },
    {
      src: galery6,
      alt: "Kreatywne upięcie",
      tall: true
    }
  ];

  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi - więcej okręgów */}
      <div className="hidden lg:block absolute top-1/3 -left-24 w-64 h-64 rounded-full border-6 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 -right-20 w-48 h-48 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-dusty-mauve/20 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-20 left-20 w-36 h-36 rounded-full border-3 border-pearl-white/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-1/2 left-1/6 w-24 h-24 rounded-full border-2 border-deep-burgundy/15 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/6 right-1/6 w-28 h-28 rounded-full border-2 border-dusty-mauve/25 z-0 animate-fade-in"></div>
      
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
            <div 
              key={index} 
              className="group relative overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 break-inside-avoid bg-pearl-white/90 border border-dusty-mauve/20 rounded-3xl"
            >
              <div className={`${image.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-3xl"
                />
                {/* Hover Overlay - różowy efekt */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-6 bg-dusty-mauve/10 px-12 py-8 border border-dusty-mauve/20 rounded-2xl">
            <svg className="w-8 h-8 text-dusty-mauve" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-playfair text-rich-black font-medium text-xl">
              Śledź nas na Instagramie: @Atelier_Fryzur_Mariola_Michnowska
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;