
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { EDUCATION } from '@/constants';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Academic Background</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'spring', index * 0.2, 1)}
                className="relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-2xl group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <p className="text-lg font-medium text-secondary mt-1">{edu.school}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <MapPin className="w-4 h-4" />
                          Safi, Morocco
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-8 text-muted-foreground leading-relaxed text-lg border-l-2 border-primary/20 pl-6 italic">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
