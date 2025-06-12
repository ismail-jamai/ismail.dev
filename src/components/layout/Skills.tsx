import React, { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  FileCode2, 
  LayoutGrid, 
  Braces, 
  Hammer, 
  Globe2, 
  Github, 
  Server, 
  Terminal
} from 'lucide-react';
import SkillBadge from '../ui/SkillBadge';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the section is visible, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
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

  const frontendSkills = [
    { name: 'React', icon: <Braces className="w-5 h-5" />, level: 9 },
    { name: 'TypeScript', icon: <FileCode2 className="w-5 h-5" />, level: 8 },
    { name: 'JavaScript', icon: <Code2 className="w-5 h-5" />, level: 9 },
    { name: 'HTML & CSS', icon: <LayoutGrid className="w-5 h-5" />, level: 9 },
    { name: 'Tailwind CSS', icon: <LayoutGrid className="w-5 h-5" />, level: 9 },
    { name: 'Next.js', icon: <Globe2 className="w-5 h-5" />, level: 8 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', icon: <Server className="w-5 h-5" />, level: 8 },
    { name: 'Express', icon: <Server className="w-5 h-5" />, level: 8 },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, level: 7 },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" />, level: 7 },
    { name: 'REST API', icon: <Globe2 className="w-5 h-5" />, level: 9 },
    { name: 'GraphQL', icon: <Braces className="w-5 h-5" />, level: 7 },
  ];
  
  const toolsSkills = [
    { name: 'Git & GitHub', icon: <Github className="w-5 h-5" />, level: 9 },
    { name: 'VS Code', icon: <Code2 className="w-5 h-5" />, level: 9 },
    { name: 'Webpack', icon: <Hammer className="w-5 h-5" />, level: 7 },
    { name: 'Vite', icon: <Hammer className="w-5 h-5" />, level: 8 },
    { name: 'Docker', icon: <Terminal className="w-5 h-5" />, level: 6 },
    { name: 'CI/CD', icon: <Terminal className="w-5 h-5" />, level: 6 },
  ];
  
  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="text-muted-foreground mt-6">
            J'ai travaillé avec une variété de technologies sur l'ensemble de la pile,
            en me concentrant sur des frameworks et des outils JavaScript
            modernes qui permettent de créer des applications rapides,
            réactives et conviviales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Frontend */}
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            
            <div className="grid gap-4">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SkillBadge 
                    name={skill.name} 
                    icon={skill.icon} 
                    level={skill.level}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend */}
          <div 
            className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            
            <div className="grid gap-4">
              {backendSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SkillBadge 
                    name={skill.name} 
                    icon={skill.icon} 
                    level={skill.level}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div 
            className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Hammer className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Tools & Others</h3>
            </div>
            
            <div className="grid gap-4">
              {toolsSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SkillBadge 
                    name={skill.name} 
                    icon={skill.icon} 
                    level={skill.level}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
