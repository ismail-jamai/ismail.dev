
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Skills from '../components/layout/Skills';
import Projects from '../components/layout/Projects';
import Contact from '../components/layout/Contact';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Applying dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen dark:bg-background antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
