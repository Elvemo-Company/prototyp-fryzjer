import React, { useState, useRef } from 'react';

// Import obrazów galerii
import galery1 from '../assets/galery1.jpg';
import galery2 from '../assets/galery2.jpg';
import galery3 from '../assets/galery3.jpg';
import galery4 from '../assets/galery4.jpg';
import galery5 from '../assets/galery5.jpg';
import galery6 from '../assets/galery6.jpg';

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      const scrollLeft = carouselRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  const goToPrevSlide = () => {
    const newSlide = currentSlide > 0 ? currentSlide - 1 : galleryImages.length - 1;
    scrollToSlide(newSlide);
  };

  const goToNextSlide = () => {
    const newSlide = currentSlide < galleryImages.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newSlide);
  };

  return (
    <section id="gallery" className="py-12 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi - więcej okręgów */}
      <div className="hidden lg:block absolute top-1/3 -left-24 w-64 h-64 rounded-full border-6 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 -right-20 w-48 h-48 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-dusty-mauve/20 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-20 left-20 w-36 h-36 rounded-full border-3 border-pearl-white/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-1/2 left-1/6 w-24 h-24 rounded-full border-2 border-deep-burgundy/15 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/6 right-1/6 w-28 h-28 rounded-full border-2 border-dusty-mauve/25 z-0 animate-fade-in"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 xs:mb-14 sm:mb-20 lg:mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-2xl xs:text-3xl sm:text-display font-light mb-4 sm:mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-dusty-mauve bg-clip-text text-transparent">
            Galeria
          </h2>
          <div className="w-16 h-1 sm:w-24 bg-dusty-mauve mx-auto mb-6 sm:mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-base xs:text-lg sm:text-large text-rich-black/80 max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            Zobacz nasze najnowsze prace i zainspiruj się możliwościami, które oferujemy
          </p>
        </div>

        {/* Mobile Carousel (md:hidden) */}
        <div className="md:hidden relative animate-fade-in-up">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory carousel-container space-x-4 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onScroll={handleScroll}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="flex-none w-full snap-center gallery-slide"
              >
                <div className="group relative overflow-hidden shadow-elegant md:hover:shadow-luxury transition-all duration-500 bg-pearl-white/90 border border-dusty-mauve/20 rounded-3xl mx-1">
                  <div className="aspect-[4/5]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover md:transition-transform md:duration-700 md:group-hover:scale-110 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`dot-indicator w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-dusty-mauve shadow-lg active'
                    : 'bg-dusty-mauve/30 hover:bg-dusty-mauve/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Masonry Gallery Grid (hidden on mobile) */}
        <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-fade-in-up">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden shadow-elegant md:hover:shadow-luxury transition-all duration-500 break-inside-avoid bg-pearl-white/90 border border-dusty-mauve/20 rounded-3xl"
            >
              <div className={`${image.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover md:transition-transform md:duration-700 md:group-hover:scale-110 rounded-3xl"
                />
                {/* Hover Overlay - różowy efekt */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 rounded-3xl">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-20 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-dusty-mauve/10 px-6 md:px-12 py-6 md:py-8 border border-dusty-mauve/20 rounded-2xl mx-4 md:mx-0">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-dusty-mauve flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="text-center md:text-left">
              <span className="font-playfair text-rich-black font-medium text-lg md:text-xl block md:inline">
                Śledź nas na Instagramie:
              </span>
              <span className="font-playfair text-dusty-mauve font-medium text-base md:text-lg block md:inline md:ml-2">
                @Atelier_Fryzur_Mariola_Michnowska
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;