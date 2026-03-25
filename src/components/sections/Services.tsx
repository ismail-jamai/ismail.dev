
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { SERVICES } from '@/constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">My Services</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Delivering high-quality, tailored solutions to help your business grow and stand out in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.15, 1)}
                  className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
