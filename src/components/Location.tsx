import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  // Skrócone godziny otwarcia
  const openingHours = [
    { day: "Poniedziałek - Piątek", hours: "9:00 - 18:00" },
    { day: "Sobota", hours: "9:00 - 16:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  const openGoogleMaps = () => {
    const address = "ul. Piękna 15, 00-001 Warszawa";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="location" className="py-32 bg-gradient-to-br from-dusty-mauve/40 via-pearl-white/90 to-deep-burgundy/20 relative overflow-hidden">
      {/* Dekoracyjne okręgi bliżej środka */}
      <div className="hidden lg:block absolute top-1/4 left-1/4 w-72 h-72 rounded-full border-8 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-display font-light mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-pearl-white bg-clip-text text-transparent">
            Lokalizacja <span className="text-dusty-mauve">i Kontakt</span>
          </h2>
          <div className="w-24 h-1 bg-dusty-mauve mx-auto mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-large text-rich-black/80 max-w-3xl mx-auto leading-relaxed">
            Znajdź nas w centrum Warszawy i umów się na wizytę już dziś
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Map Section */}
          <div className="order-2 lg:order-1 animate-slide-in-left flex flex-col gap-8">
            <div className="bg-pearl-white/90 shadow-luxury overflow-hidden rounded-3xl border-2 border-dusty-mauve/30 relative">
              {/* Dekoracyjny gradient za mapą */}
              <div className="absolute inset-0 bg-gradient-to-br from-dusty-mauve/10 via-pearl-white/60 to-deep-burgundy/10 pointer-events-none z-0"></div>
              {/* Google Maps Embed */}
              <div className="h-96 w-full relative z-10">
                <iframe
                  title="Mapa Studio Fryzur Elegance"
                  src="https://www.google.com/maps?q=ul.+Piękna+15,+00-001+Warszawa&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-3xl"
                ></iframe>
              </div>
              <div className="flex justify-center py-6">
                <button
                  onClick={openGoogleMaps}
                  className="inline-flex items-center space-x-3 bg-deep-burgundy hover:bg-dusty-mauve text-pearl-white px-10 py-4 font-playfair font-semibold text-lg transition-all duration-300 shadow-luxury hover:shadow-elegant transform hover:scale-105 rounded-xl tracking-wide"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Otwórz w Google Maps</span>
                </button>
              </div>
            </div>
            {/* Social Media pod mapą, 2 kolumny */}
            <div className="bg-pearl-white/90 shadow-elegant p-8 rounded-2xl border border-dusty-mauve/30">
              <h3 className="font-playfair text-2xl font-medium text-rich-black mb-8 text-center">
                Śledź nas
              </h3>
              <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
                <a
                  href="#"
                  className="flex flex-col items-center justify-center bg-dusty-mauve/10 hover:bg-dusty-mauve hover:text-pearl-white p-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-elegant"
                >
                  <Instagram className="h-8 w-8 mb-2" />
                  <span className="font-crimson text-dusty-mauve text-lg">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center bg-dusty-mauve/10 hover:bg-dusty-mauve hover:text-pearl-white p-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-elegant"
                >
                  <Facebook className="h-8 w-8 mb-2" />
                  <span className="font-crimson text-dusty-mauve text-lg">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          {/* Contact & Hours */}
          <div className="order-1 lg:order-2 space-y-12 animate-slide-in-right">
            {/* Contact Info */}
            <div className="bg-pearl-white/90 shadow-elegant p-12 rounded-3xl border border-dusty-mauve/30">
              <h3 className="font-playfair text-3xl font-medium text-rich-black mb-12 text-center flex items-center justify-center gap-4">
                <MapPin className="h-8 w-8 text-dusty-mauve" />
                Kontakt
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-dusty-mauve/10 p-5 rounded-full">
                    <Phone className="h-7 w-7 text-dusty-mauve" />
                  </div>
                  <div>
                    <p className="font-playfair font-medium text-rich-black text-xl mb-1">Telefon</p>
                    <p className="font-crimson text-rich-black/70 text-lg">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-dusty-mauve/10 p-5 rounded-full">
                    <Mail className="h-7 w-7 text-dusty-mauve" />
                  </div>
                  <div>
                    <p className="font-playfair font-medium text-rich-black text-xl mb-1">Email</p>
                    <p className="font-crimson text-rich-black/70 text-lg">kontakt@studioelegance.pl</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-dusty-mauve/10 p-5 rounded-full">
                    <MapPin className="h-7 w-7 text-dusty-mauve" />
                  </div>
                  <div>
                    <p className="font-playfair font-medium text-rich-black text-xl mb-1">Adres</p>
                    <p className="font-crimson text-rich-black/70 text-lg">ul. Piękna 15, 00-001 Warszawa</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Opening Hours */}
            <div className="bg-pearl-white/90 shadow-elegant p-12 rounded-3xl border border-dusty-mauve/30">
              <h3 className="font-playfair text-3xl font-medium text-rich-black mb-12 text-center flex items-center justify-center">
                <Clock className="h-8 w-8 text-dusty-mauve mr-4" />
                Godziny otwarcia
              </h3>
              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-4 px-6 transition-colors duration-300 rounded-xl ${
                      item.day === "Niedziela" 
                        ? "bg-red-50 text-red-600 border border-red-200" 
                        : index % 2 === 0 
                          ? "bg-dusty-mauve/10" 
                          : "bg-pearl-white/80"
                    }`}
                  >
                    <span className="font-crimson font-medium text-lg">{item.day}</span>
                    <span className="font-playfair font-semibold text-lg">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;