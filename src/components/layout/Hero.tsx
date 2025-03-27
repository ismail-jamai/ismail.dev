
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const bounds = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      
      const moveX = (mouseX - centerX) / 50;
      const moveY = (mouseY - centerY) / 50;
      
      const layers = containerRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer: Element, i) => {
        const depth = (i + 1) / 5;
        if (layer instanceof HTMLElement) {
          layer.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid-pattern overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/80" />
      
      {/* Animated blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-3xl rounded-full animate-pulse-slow parallax-layer" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 blur-3xl rounded-full animate-float parallax-layer" />
      
      <div ref={containerRef} className="container max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <div className="flex flex-col relative parallax-layer">
            <AnimatedText 
              text="Bonjour, je suis" 
              tag="h2"
              className="text-lg md:text-xl text-muted-foreground"
            />
            
            <AnimatedText 
              text="Ismail Jamai" 
              tag="h1"
              className="text-4xl md:text-6xl font-bold mt-2"
              delay={800}
            />
            
            <div className="h-1.5 w-24 bg-primary mt-3 rounded-full" />
          </div>
          
          <AnimatedText 
            text="passionné par la création d'expériences web élégantes, intuitives et fonctionnelles"
            tag="h3"
            className="text-xl md:text-2xl font-medium text-muted-foreground"
            delay={1400}
          />
          
          <AnimatedText
            text="Je crée des expériences web élégantes, intuitives et performantes avec une attention méticuleuse aux détails."
            tag="p"
            className="max-w-lg text-muted-foreground"
            delay={2000}
          />
          
          <div className="flex space-x-4 pt-4">
            <a 
              href="https://github.com/ismail-jamai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ismail-jamai-336571337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="ismailjamaiwac2003@gmail.com" 
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Email contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Profile image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center parallax-layer">
          <div className="relative">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-xl z-10">
              <img 
                src="/images/OUA_2067.jpg" 
                alt="Ismail Jamai" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/80 blur-sm animate-pulse-slow" />
            <div className="absolute -bottom-6 -right-2 w-16 h-16 rounded-full bg-secondary/80 blur-sm animate-float" />
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 rounded-full bg-accent/80 blur-sm animate-pulse-slow" />
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Faites défiler</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
