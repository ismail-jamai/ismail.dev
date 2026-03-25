
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  PUBLIC_KEY: "bB6CV14tZCdFtMOLo",
  SERVICE_ID: "service_i00xivp",
  TEMPLATE_ID: "template_wrcmap8",
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      limitRate: {
        throttle: 1000,
      },
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Ismail",
        to_email: "ismailjamaiwac2003@gmail.com",
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I will get back to you as soon as possible.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error: any) {
      toast({
        title: "Submission Error",
        description: "Something went wrong while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          <motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Have a visionary project in mind or just want to discuss the latest in tech? I'm always open to interesting collaborations and professional opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <motion.div 
              variants={fadeIn('right', 'spring', 0.2, 1)}
              className="lg:col-span-5 space-y-8"
            >
              <div className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 space-y-10 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Me</p>
                      <a href="mailto:ismailjamaiwac2003@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                        ismailjamaiwac2003@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Me</p>
                      <a href="tel:+212641850476" className="text-lg font-bold hover:text-secondary transition-colors">
                        +212 6 41 85 04 76
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Me</p>
                      <p className="text-lg font-bold">Safi, Morocco</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 text-center">Follow My Work</p>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: Github, url: 'https://github.com/ismail-jamai', color: 'hover:text-primary' },
                      { icon: Linkedin, url: 'https://www.linkedin.com/in/ismail-jamai-336571337/', color: 'hover:text-secondary' },
                      { icon: Twitter, url: 'https://twitter.com/ismail-jamai', color: 'hover:text-accent' }
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20 hover:-translate-y-1`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={fadeIn('left', 'spring', 0.3, 1)}
              className="lg:col-span-7"
            >
              <form 
                onSubmit={handleSubmit}
                className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest ml-4 text-muted-foreground">Full Name</label>
                    <Input 
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest ml-4 text-muted-foreground">Email Address</label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest ml-4 text-muted-foreground">Subject</label>
                  <Input 
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest ml-4 text-muted-foreground">Your Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[180px] rounded-3xl bg-white/5 border-white/10 focus:border-primary/50 transition-all resize-none p-6"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 group"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
