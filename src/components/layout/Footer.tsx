
import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-background relative overflow-hidden pt-24 pb-12 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-3xl font-black tracking-tighter">
              ISMAIL<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Crafting high-performance digital solutions with a focus on clean architecture and premium user experiences. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, url: 'https://github.com/ismail-jamai' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/ismail-jamai-336571337/' },
                { icon: Twitter, url: 'https://twitter.com/ismail-jamai' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Matrix */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Ecosystem</h3>
            <ul className="space-y-4">
              {['About', 'Experience', 'Services', 'Tech', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-lg font-bold hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-3 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Matrix */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Office</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:ismailjamaiwac2003@gmail.com" className="text-lg font-bold group-hover:text-primary transition-colors">
                  ismailjamaiwac2003@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg font-bold">Safi, Morocco</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
            © {new Date().getFullYear()} ISMAIL JAMAI — ENGINEERED FOR EXCELLENCE
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all duration-500">
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
