'use client';

import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-32">
        <div className="md:w-1/2">
          <h1 className="heading-xl mb-6 animate-fade-in">
            Your Expert<br/> 
            <span className="text-accent">Development Partner</span><br/>
            for University Projects
          </h1>
          
          <p className="text-lg text-primary/70 dark:text-dark-primary/70 mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
            Specialized in helping students excel with professional software development services 
            for assignments, semester projects, and final year projects (FYPs).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {/* Enhanced Services button */}
            <a 
              href="#services" 
              className="group bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>Our Services</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-10"></div>
            <div className="bg-tertiary dark:bg-dark-tertiary p-8 rounded-lg shadow-lg">
              <div className="aspect-video bg-primary/5 dark:bg-dark-primary/5 rounded flex items-center justify-center">
                <span className="text-6xl text-accent">*</span>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="h-4 bg-primary/10 dark:bg-dark-primary/10 rounded w-3/4"></div>
                <div className="h-4 bg-primary/10 dark:bg-dark-primary/10 rounded w-1/2"></div>
                <div className="h-4 bg-primary/10 dark:bg-dark-primary/10 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;