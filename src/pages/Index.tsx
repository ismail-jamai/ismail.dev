
import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';

// Lazy load sections for performance
const About = lazy(() => import('../components/sections/About'));
const Experience = lazy(() => import('../components/sections/Experience'));
const Education = lazy(() => import('../components/sections/Education'));
const Services = lazy(() => import('../components/sections/Services'));
const TechStack = lazy(() => import('../components/sections/TechStack'));
const Projects = lazy(() => import('../components/sections/Projects'));
const Contact = lazy(() => import('../components/sections/Contact'));

// Loading component for Suspense
const SectionLoader = () => (
  <div className="w-full h-[50vh] flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useEffect(() => {
    // Force dark mode for premium look
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="min-h-screen dark:bg-background antialiased selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Experience />
        <Education />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
};

export default Index;
