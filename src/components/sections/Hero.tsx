
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid-pattern overflow-hidden">
      {/* Background radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Professional Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-background/50 pointer-events-none" />
      
      {/* Dynamic Animated Blobs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/10 blur-[100px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" 
      />

      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center justify-between z-10"
      >
        {/* Text content */}
        <div className="w-full md:w-3/5 space-y-8">
          <motion.div variants={textVariant(0.1)} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors pr-2 border-r border-white/10">Available for Opportunities</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground pl-1">Based in Safi</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-4">
              ISMAIL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-emerald-400 font-display">
                JAMAI.
              </span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-foreground/80 uppercase">
              Digital Developer
            </h2>
          </motion.div>
          
          <motion.p 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Full Stack Developer specializing in <span className="text-foreground font-bold">React, Node.js, and Laravel</span>. 
            I build modern, scalable, and high-performance web applications using the latest technologies. 
            Focused on clean code, architecture, and real-world solutions.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              Work With Me
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-white/5 backdrop-blur-md border-white/10 transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
              <a href="/cv-ismail-jamai.pdf" download="Ismail_Jamai_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="flex space-x-6 pt-6"
          >
            {[
              { Icon: Github, href: "https://github.com/ismail-jamai", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ismail-jamai-336571337/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:ismailjamaiwac2003@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <a 
                key={label}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-2 flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={label}
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Hero Illustration / Visual */}
        <motion.div 
          variants={fadeIn('left', 'tween', 0.5, 1)}
          className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[8px] border-white/5 shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="/images/OUA_2067.jpg" 
                alt="Ismail Jamai" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Tech badges orbit */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 shadow-xl">
                <span className="text-xl font-bold text-primary">React</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 shadow-xl">
                <span className="text-xl font-bold text-blue-400">TS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full" 
          />
        </div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">Scroll</span>
      </motion.a>
    </section>
  );
};

export default Hero;
