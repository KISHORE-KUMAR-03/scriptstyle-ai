
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center items-center px-6 md:px-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto z-10 flex flex-col items-center md:flex-row md:justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Kishore Kumar</span>
          </h1>
          <div className="inline-block mb-6">
            <div className="px-4 py-2 glass-effect rounded-full">
              <span className="text-xl md:text-2xl">UX/UI Designer & Software Engineer</span>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0 text-gray-300">
            A passionate designer focused on user-friendly web experiences, always exploring new ways to improve digital interfaces.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              asChild
              className="text-md px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <a href="#portfolio">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-md px-8 py-6 border-white/20 hover:bg-white/10 transition-all"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/20 to-transparent blur-xl"></div>
            <div className="relative h-72 w-72 rounded-full overflow-hidden border-4 border-white/10">
              <img 
                src="https://i.postimg.cc/WzBgYx58/Whats-App-Image-2025-05-02-at-09-32-53-330d2ce4.jpg" 
                alt="Kishore Kumar profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
