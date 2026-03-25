
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Code, Laptop, Zap, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-20"
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-4">The Developer</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am <span className="text-foreground font-bold">Ismail Jamai</span>, a Full-Stack Developer trained at <span className="text-primary font-bold">ISTA NTIC Safi</span>. My professional journey includes a significant internship at <span className="text-primary font-bold">OCP Group</span>, where I honed my skills in building robust, industrial-grade applications using React, Node.js, and Laravel.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn('right', 'spring', 0.2, 1)}
              className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clean Architecture</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I write scalable, maintainable code focusing on readability, performance, and industrial-grade best practices.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 'spring', 0.3, 1)}
              className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Laptop className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Ecosystem</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Specializing in React, TypeScript, and Laravel, I leverage modern tooling to build responsive and robust applications.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('left', 'spring', 0.4, 1)}
              className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid Execution</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Committed to delivering high-value solutions at pace, ensuring quality and performance at every stage of development.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10">
            <motion.div 
              variants={fadeIn('right', 'spring', 0.5, 1)}
              className="relative group"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 z-10 shadow-2xl">
                <img 
                  src="/images/OUA_2067.jpg" 
                  alt="Ismail Jamai Presentation" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-[3rem] -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0" />
            </motion.div>
            
            <motion.div 
              variants={fadeIn('left', 'spring', 0.6, 1)}
              className="space-y-8"
            >
              <h3 className="text-3xl font-black">My Engineering Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe that great engineering is the intersection of logic and aesthetics. My journey has been defined by a relentless pursuit of mastering both frontend and backend technologies, allowing me to build comprehensive solutions that are as powerful as they are beautiful.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Clean Architecture Enthusiast',
                  'Framer Motion & Animations',
                  'Performance Optimization',
                  'Scalable Backend Design'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-bold text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Languages</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span>Arabe</span>
                      <span className="text-primary">90%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span>Français</span>
                      <span className="text-primary">40%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-10">
                <div className="space-y-2">
                  <p className="text-4xl font-black text-primary">05+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Premier Projects</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-primary">08+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Core Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
