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
    const address = "ul. Łodygowa 3, Warsaw, Poland, 03-687";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const makePhoneCall = () => {
    window.location.href = 'tel:+48791779784';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:atelierfryzurmm@interia.pl';
  };

  return (
    <section id="location" className="py-12 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dekoracyjne okręgi - większe kółka z odpowiednimi odległościami */}
      <div className="hidden lg:block absolute top-20 -left-20 w-72 h-72 rounded-full border-8 border-dusty-mauve/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-20 -right-20 w-56 h-56 rounded-full border-4 border-deep-burgundy/10 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute top-1/2 -left-8 w-40 h-40 rounded-full border-3 border-pearl-white/30 z-0 animate-fade-in"></div>
      <div className="hidden lg:block absolute bottom-1/3 -right-8 w-32 h-32 rounded-full border-2 border-dusty-mauve/20 z-0 animate-fade-in"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 xs:mb-14 sm:mb-20 lg:mb-28 animate-fade-in-up">
          <h2 className="font-playfair text-2xl xs:text-3xl sm:text-display font-light mb-4 sm:mb-8 tracking-tight bg-gradient-to-r from-dusty-mauve via-deep-burgundy to-pearl-white bg-clip-text text-transparent">
            Lokalizacja <span className="text-dusty-mauve">i Kontakt</span>
          </h2>
          <div className="w-16 h-1 sm:w-24 bg-dusty-mauve mx-auto mb-6 sm:mb-12 rounded-full animate-fade-in"></div>
          <p className="font-crimson text-base xs:text-lg sm:text-large text-rich-black max-w-xs xs:max-w-md sm:max-w-3xl mx-auto leading-relaxed">
            Znajdź nas w Warszawie i umów się na wizytę już dziś
          </p>
        </div>

        {/* Mobile Layout (max-width: 768px) */}
        <div className="md:hidden space-y-6 mobile-entrance">
          {/* Compact Map & Contact Combined */}
          <div className="bg-pearl-white/90 shadow-luxury rounded-3xl border border-dusty-mauve/20 overflow-hidden">
            {/* Map Section */}
            <div className="relative">
              <div className="h-64 w-full">
                <iframe
                  title="Mapa Studio Fryzur Elegance"
                  src="https://www.google.com/maps?q=ul.+Łodygowa+3,+Warsaw,+Poland,+03-687&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Navigation Button */}
            <div className="px-6 pt-4 pb-2">
              <button
                onClick={openGoogleMaps}
                className="w-full bg-dusty-mauve hover:bg-dusty-mauve/80 text-pearl-white py-3 rounded-xl shadow-elegant transition-all duration-300 flex items-center justify-center space-x-2 font-medium touch-target"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Otwórz w Google Maps</span>
              </button>
            </div>
            
            {/* Contact Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 mobile-entrance contact-item-1">
                <div className="bg-dusty-mauve/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-dusty-mauve" />
                </div>
                <div className="flex-1">
                  <p className="font-playfair font-medium text-rich-black text-lg">ul. Łodygowa 3</p>
                  <p className="font-crimson text-rich-black text-sm">03-687 Warszawa</p>
                </div>
              </div>
              
              <button 
                onClick={makePhoneCall}
                className="flex items-center space-x-4 w-full text-left p-2 rounded-xl hover:bg-dusty-mauve/5 transition-all duration-300 mobile-entrance contact-item-2 touch-target"
              >
                <div className="bg-dusty-mauve/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-dusty-mauve" />
                </div>
                <div className="flex-1">
                  <p className="font-playfair font-medium text-rich-black text-lg">+48 791 779 784</p>
                  <p className="font-crimson text-rich-black text-sm">Kliknij aby zadzwonić</p>
                </div>
              </button>
              
              <button 
                onClick={sendEmail}
                className="flex items-center space-x-4 w-full text-left p-2 rounded-xl hover:bg-dusty-mauve/5 transition-all duration-300 mobile-entrance contact-item-3 touch-target"
              >
                <div className="bg-dusty-mauve/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-dusty-mauve" />
                </div>
                <div className="flex-1">
                  <p className="font-playfair font-medium text-rich-black text-lg break-all">atelierfryzurmm@interia.pl</p>
                  <p className="font-crimson text-rich-black text-sm">Wyślij email</p>
                </div>
              </button>
            </div>
          </div>

          {/* Always Visible Opening Hours */}
          <div className="bg-pearl-white/90 shadow-elegant rounded-2xl border border-dusty-mauve/20 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-dusty-mauve/10 p-3 rounded-full">
                <Clock className="h-5 w-5 text-dusty-mauve" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium text-rich-black">Godziny otwarcia</h3>
                <p className="font-crimson text-rich-black text-sm">Poniedziałek - Sobota</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-300 mobile-entrance ${
                    item.day === "Niedziela" 
                      ? "bg-red-50 text-red-600 border border-red-200" 
                      : "bg-dusty-mauve/5 hover:bg-dusty-mauve/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-crimson font-medium text-sm">{item.day}</span>
                  <span className="font-playfair font-semibold text-sm">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-pearl-white/90 shadow-elegant rounded-2xl border border-dusty-mauve/20 p-6">
            <h3 className="font-playfair text-xl font-medium text-rich-black mb-4 text-center">
              Śledź nas
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl shadow-elegant hover:scale-105 transition-all duration-300 touch-target"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-crimson text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl shadow-elegant hover:scale-105 transition-all duration-300 touch-target"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-crimson text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:grid lg:grid-cols-2 gap-20">
          {/* Map Section */}
          <div className="order-2 lg:order-1 animate-slide-in-left flex flex-col gap-8">
            <div className="bg-pearl-white/90 shadow-luxury overflow-hidden rounded-3xl border-2 border-dusty-mauve/30 relative">
              {/* Dekoracyjny gradient za mapą */}
              <div className="absolute inset-0 bg-gradient-to-br from-dusty-mauve/10 via-pearl-white/60 to-deep-burgundy/10 pointer-events-none z-0"></div>
              {/* Google Maps Embed */}
              <div className="h-96 w-full relative z-10">
                <iframe
                  title="Mapa Studio Fryzur Elegance"
                  src="https://www.google.com/maps?q=ul.+Łodygowa+3,+Warsaw,+Poland,+03-687&output=embed"
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
                  className="inline-flex items-center space-x-3 bg-dusty-mauve hover:bg-dusty-mauve/80 text-pearl-white px-10 py-4 font-playfair font-semibold text-lg transition-all duration-300 shadow-luxury hover:shadow-elegant transform hover:scale-105 rounded-xl tracking-wide"
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
                  className="flex flex-col items-center justify-center bg-dusty-mauve/10 hover:bg-dusty-mauve hover:text-pearl-white text-dusty-mauve p-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-elegant"
                >
                  <Instagram className="h-8 w-8 mb-2" />
                  <span className="font-crimson text-lg">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center bg-dusty-mauve/10 hover:bg-dusty-mauve hover:text-pearl-white text-dusty-mauve p-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-elegant"
                >
                  <Facebook className="h-8 w-8 mb-2" />
                  <span className="font-crimson text-lg">Facebook</span>
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
                    <p className="font-crimson text-rich-black/70 text-lg">+48 791 779 784</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-dusty-mauve/10 p-5 rounded-full">
                    <Mail className="h-7 w-7 text-dusty-mauve" />
                  </div>
                  <div>
                    <p className="font-playfair font-medium text-rich-black text-xl mb-1">Email</p>
                    <p className="font-crimson text-rich-black/70 text-lg">atelierfryzurmm@interia.pl</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-dusty-mauve/10 p-5 rounded-full">
                    <MapPin className="h-7 w-7 text-dusty-mauve" />
                  </div>
                  <div>
                    <p className="font-playfair font-medium text-rich-black text-xl mb-1">Adres</p>
                    <p className="font-crimson text-rich-black/70 text-lg">ul. Łodygowa 3, 03-687 Warszawa</p>
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