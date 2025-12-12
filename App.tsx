import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Prices from './components/Prices';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import PainPoints from './components/PainPoints';
import Blog from './components/Blog';
import Calculator from './components/Calculator';
import ContactForm from './components/ContactForm';
import LegalFooter from './components/LegalFooter';
import LiquidBackground from './components/LiquidBackground';
import CustomCursor from './components/CustomCursor';
import InfiniteMarquee from './components/InfiniteMarquee';
import ScrollProgress from './components/ScrollProgress';

// Futuristic Laser/Glow Separator
const SectionSeparator = () => (
  <div className="relative h-px w-full max-w-7xl mx-auto my-12 opacity-50">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    <div className="absolute inset-0 blur-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-orange-500 selection:text-white cursor-none">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Background Visuals */}
      <LiquidBackground />

      {/* Content */}
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Marquee adds dynamic break after hero */}
        <InfiniteMarquee />
        
        <Prices />
        
        <SectionSeparator />
        
        <PainPoints />
        
        <Services />
        
        <Portfolio />
        
        <SectionSeparator />
        
        <Blog />
        
        <Calculator />
        <ContactForm />
      </main>

      <LegalFooter />
    </div>
  );
}

export default App;