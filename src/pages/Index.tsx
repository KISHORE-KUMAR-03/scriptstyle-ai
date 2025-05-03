
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="section-padding animate-on-scroll opacity-0">
          <About />
        </section>
        
        <section id="portfolio" className="section-padding animate-on-scroll opacity-0">
          <Portfolio />
        </section>
        
        <section id="services" className="section-padding animate-on-scroll opacity-0">
          <Services />
        </section>
        
        <section id="contact" className="section-padding animate-on-scroll opacity-0">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
