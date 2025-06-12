import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Redux, and Node.js with complete payment integration.',
      image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'calculations',
      description: 'Créez une calculatrice interactive avec HTML, CSS et JavaScript, incluant des animations et un design réactif. Implémentez les opérations de base (+, -, *, /) et la prise en charge des entrées clavier. 🚀',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D',
      tags: ['HTML', 'javaScript', 'css', ],
      githubUrl: 'https://github.com/ismail-jamai/calculations.git',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Réservation Terrain',
      description: 'Application web de réservation de terrains de sport. Permet aux utilisateurs de réserver des terrains, gérer leurs réservations et visualiser les disponibilités en temps réel.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/ismail-jamai/R-servation-terrain.git',
      liveUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A minimalist portfolio website for a photographer featuring image galleries and contact forms.',
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww',
      tags: ['React', 'Framer Motion', 'Styled Components'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for tracking and analyzing social media metrics across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D',
      tags: ['React', 'Chart.js', 'Node.js', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];
  
  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 right-0 h-1/5 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-1/3 h-1/5 bg-gradient-to-r from-secondary/5 to-primary/5 blur-3xl" />
      
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="section-title mx-auto">Projets en vedette</h2>
          <p className="text-muted-foreground mt-6">
            Voici quelques-uns de mes projets récents. 
            Chacun d'entre eux présentait des défis et des 
            opportunités uniques pour créer des solutions élégantes en utilisant les technologies Web modernes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <Button 
            className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-transform duration-300"
          >
            <span>View All Projects</span>
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
