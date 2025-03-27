
import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-card relative overflow-hidden pt-16 pb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and info */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-display font-bold">
              Ismail<span className="text-primary">.dev</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
            Un développeur full-stack passionné spécialisé dans la création d’applications Web belles, 
            fonctionnelles et conviviales avec des technologies modernes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/ismail-jamai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:text-primary transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ismail-jamai-336571337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/IsmaailJamai?t=hyW4KCyzkCgaz18W07uYcw&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:text-primary transition-colors duration-300"
                aria-label="Twitter profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <a href="mailto:ismailjamaiwac2003@gmail.com" className="hover:text-primary transition-colors">
                ismailjamaiwac2003@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <a href="tel:+14155552671" className="hover:text-primary transition-colors">
                  +1 6 41 85 04 76
                </a>
              </li>
              <li className="text-muted-foreground">
                moroc, safi
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ismail Jamai. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
