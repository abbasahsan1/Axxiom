'use client';

import { FaArrowRight } from 'react-icons/fa';
import { useCallback } from 'react';

const Hero = () => {
  // Add a scroll handler function
  const handleSmoothScroll = useCallback((e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-32">
        <div className="md:w-1/2">          <h1 className="heading-xl mb-6 animate-fade-in">
            Your Expert<br/> 
            <span className="text-accent">Development Partner</span><br/>
            for Software Projects
          </h1>
          
          <p className="text-lg text-primary/70 dark:text-dark-primary/70 mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
            Specialized in delivering high-quality software solutions for businesses and organizations 
            of all sizes, from students to startups to enterprise-level applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {/* Enhanced Services button */}
            <a 
              href="#services" 
              onClick={handleSmoothScroll}
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
              {/* Code Editor Graphic - Now more rectangular */}                <div className="bg-[#1E1E1E] dark:bg-[#121212] rounded-lg overflow-hidden border border-gray-700 w-full">
                {/* Editor Top Bar */}
                <div className="bg-[#252526] dark:bg-[#1E1E1E] p-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 mx-auto">business-solution.js</div>
                </div>
                
                {/* Code Content - Added more lines to make it more rectangular */}                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-blue-400">import</span>
                    <span className="text-white mx-1">React</span>
                    <span className="text-blue-400">from</span>
                    <span className="text-green-400 ml-1">'react'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-blue-400">import</span>
                    <span className="text-white mx-1">&#123;</span>
                    <span className="text-white">useState</span>
                    <span className="text-white">&#125;</span>
                    <span className="text-blue-400">from</span>
                    <span className="text-green-400 ml-1">'react'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-white"></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="text-gray-400">// Business Solution Component</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">5</span>
                    <span className="text-blue-400">const</span>
                    <span className="text-yellow-300 ml-1">BusinessSolution</span>
                    <span className="text-white ml-1">=</span>
                    <span className="text-purple-400 ml-1">() ={">"}</span>
                    <span className="text-white ml-1">&#123;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">6</span>
                    <span className="text-white ml-4"></span>
                    <span className="text-blue-400">const</span>
                    <span className="text-white ml-1">[</span>
                    <span className="text-orange-300">isComplete</span>
                    <span className="text-white">,</span>
                    <span className="text-orange-300 ml-1">setIsComplete</span>
                    <span className="text-white">]</span>
                    <span className="text-white ml-1">=</span>
                    <span className="text-yellow-300 ml-1">useState</span>
                    <span className="text-white">(</span>
                    <span className="text-blue-400">false</span>
                    <span className="text-white">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">7</span>
                    <span className="text-white ml-4"></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">8</span>
                    <span className="text-white ml-4">return (</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">9</span>
                    <span className="text-white ml-8">&lt;</span>
                    <span className="text-orange-400">div</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">10</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-orange-400">h1</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-gray-300">Axiom Solutions</span>
                    <span className="text-white">&lt;/</span>
                    <span className="text-orange-400">h1</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">11</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-orange-400">p</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-gray-300"> Project Status:</span>
                    <span className="text-white">&lt;/</span>
                    <span className="text-orange-400">p</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">12</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-orange-400">button</span>
                    <span className="text-white">&gt;</span>
                    <span className="text-gray-300">Complete Project</span>
                    <span className="text-white">&lt;/</span>
                    <span className="text-orange-400">button</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">13</span>
                    <span className="text-white ml-8">&lt;/</span>
                    <span className="text-orange-400">div</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">14</span>
                    <span className="text-white ml-4">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">15</span>
                    <span className="text-white">&#125;;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">16</span>
                    <span className="text-white"></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">17</span>
                    <span className="text-blue-400">export</span>
                    <span className="text-blue-400 ml-1">default</span>
                    <span className="text-yellow-300 ml-1">StudentProject</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="bg-[#007ACC] dark:bg-[#007ACC] text-white text-xs p-1 flex justify-between items-center">
                  <div>Ready</div>
                  <div className="flex items-center">
                    <span className="mr-3">JavaScript</span>
                    <span>UTF-8</span>
                  </div>
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