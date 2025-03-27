
import React from 'react';
import { Code, Laptop, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full blur-3xl" />
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mx-auto">À propos de moi</h2>
          <p className="text-muted-foreground mt-6">
            Étudiant en développement web full stack, passionné par la création de sites web modernes.
             J’accorde une grande importance à l’accessibilité, au responsive design et à l’expérience utilisateur.
             'm a dedicated full-stack developer with a passion for creating beautiful, 
            functional web applications. With expertise in modern technologies 
            and a keen eye for design, I build solutions that delight users and solve real problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Code propre</h3>
            <p className="text-muted-foreground">
            J’écris du code propre et maintenable en mettant l’accent sur la lisibilité, les performances et les meilleures pratiques.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pile moderne</h3>
            <p className="text-muted-foreground">
            Je me spécialise dans React, laravel et les outils modernes comme Vite pour créer des applications rapides et réactives.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Livraison rapide</h3>
            <p className="text-muted-foreground">
            Je développe et itére rapidement sans sacrifier la qualité, en fournissant de la valeur à temps, à chaque fois.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/40">
              <img 
                src="/images/OUA_2067.jpg" 
                alt="About Ismail" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 border-2 border-primary rounded-2xl -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-primary/10 rounded-lg -z-10" />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
            Je maîtrise les technologies front-end (HTML, CSS, JavaScript, React) et back-end (Node.js, PHP, Laravel). 
            J’explore en profondeur les frameworks modernes et cherche à allier créativité,
             performance technique et expérience utilisateur optimisée dans chacun de mes projets..
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">Technologies maîtrisées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
