'use client';

import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="heading-xl text-primary animate-fade-in">
              Axiom Software - Your Development Partner for University Projects & More
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-primary/80 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Special 10% discount for CUST, Bahria, and Air university students!
            </h2>
            
            <p className="text-lg text-primary/70 animate-slide-up" style={{animationDelay: '0.4s'}}>
              We offer a wide range of software development services, focusing on university projects, 
              assignments, semester projects, and final year projects (FYPs).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <a 
                href="#contact" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Send Us an Email
              </a>
              
              <a 
                href="#services" 
                className="btn-secondary flex items-center justify-center"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-10"></div>
              <div className="bg-tertiary p-8 rounded-lg shadow-lg">
                <div className="aspect-video bg-primary/5 rounded flex items-center justify-center">
                  <span className="text-6xl text-accent">*</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                  <div className="h-4 bg-primary/10 rounded w-1/2"></div>
                  <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;