
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { TECH_STACK } from '@/constants';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Tech Ecosystem</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(TECH_STACK).map(([category, skills], catIndex) => (
              <motion.div 
                key={category}
                variants={fadeIn('up', 'spring', catIndex * 0.2, 1)}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary/80 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-2 group cursor-default"
                    >
                      <span className="text-sm font-bold group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
