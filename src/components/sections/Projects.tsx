
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import ProjectCard from '../ui/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { PROJECTS } from '@/constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 right-0 h-1/5 bg-gradient-to-r from-primary/5 to-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-1/3 h-1/5 bg-gradient-to-r from-secondary/5 to-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Featured Applications</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              A curated selection of high-performance digital solutions, each solved through innovative architecture and precise execution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.github}
                liveUrl={project.demo}
                fullStack={project.fullStack}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            variants={fadeIn('up', 'spring', 0.5, 1)}
            className="text-center"
          >
            <Button 
              size="lg"
              className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20 font-bold"
            >
              <span>View All Projects</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
