
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
          <h2 className="section-title mx-auto">About Me</h2>
          <p className="text-muted-foreground mt-6">
            I'm a dedicated full-stack developer with a passion for creating beautiful, 
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
            <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              I write clean, maintainable code with a focus on readability, performance, and best practices.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Stack</h3>
            <p className="text-muted-foreground">
              I specialize in React, TypeScript, and modern tools like Vite to build fast, responsive applications.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-muted-foreground">
              I develop and iterate quickly without sacrificing quality, delivering value on time, every time.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/40">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D" 
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
              With over 5 years of experience in web development, I've worked with startups and established companies to build everything from simple landing pages to complex web applications.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and experimenting with new technologies to stay at the forefront of web development. My approach combines technical excellence with a strong understanding of user experience and business needs.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
