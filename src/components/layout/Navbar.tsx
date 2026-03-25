
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Tech', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <nav className={cn(
          'flex items-center justify-between p-2 pl-6 pr-2 rounded-full border transition-all duration-500',
          isScrolled 
            ? 'bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]' 
            : 'bg-transparent border-transparent'
        )}>
          {/* Logo */}
          <a href="#home" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            ISMAIL<span className="text-primary text-2xl">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300',
                  activeSection === item.href.substring(1) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                )}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className={cn(
                'ml-4 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2',
                activeSection === 'contact'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground'
              )}
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-foreground text-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-50 md:hidden p-8 rounded-[2.5rem] bg-background/95 backdrop-blur-3xl border border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-2xl font-black uppercase tracking-tighter py-2 border-b border-white/5 transition-colors',
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
