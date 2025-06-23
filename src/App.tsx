import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stylists from './components/Stylists';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-lato">
      <Navigation />
      <Hero />
      <About />
      <Stylists />
      <Services />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;