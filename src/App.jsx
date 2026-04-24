import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ToolsMarquee from './components/ToolsMarquee';
import VisionBanner from './components/VisionBanner';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Engagements from './components/Engagements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow-cyan"></div>
      <div className="bg-glow-orange"></div>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <ToolsMarquee />
        <VisionBanner />
        <Services />
        <WhyMe />
        <Projects />
        <Engagements />
        <Contact />
      </main>

      <Footer />
      <ThemeToggle />
      <SpeedInsights />
    </>
  );
}

export default App;
