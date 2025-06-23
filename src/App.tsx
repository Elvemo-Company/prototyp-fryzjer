import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stylists from './components/Stylists';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

// Minimalistyczny separator
const SectionSeparator: React.FC = () => (
  <div className="py-2">
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-0.5 bg-dusty-mauve/50"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="font-lato bg-gradient-to-br from-dusty-mauve/70 via-pearl-white/95 to-dusty-mauve/70 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SectionSeparator />
      <Stylists />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <Gallery />
      <SectionSeparator />
      <Location />
      <Footer />
    </div>
  );
}

export default App;