
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { EXPERIENCE } from '@/constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="relative w-full max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent rounded-full" />

            <div className="space-y-12">
              {EXPERIENCE.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'spring', index * 0.2, 1)}
                  className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="hidden md:block w-[45%]" />
                  
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  
                  {/* Content Card */}
                  <div className="ml-8 md:ml-0 w-[90%] md:w-[45%] p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl group">
                    <span className="text-primary font-mono text-sm font-bold">{item.period}</span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-secondary font-medium text-sm">{item.company}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
