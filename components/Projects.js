'use client';

import { FaGithub } from 'react-icons/fa';

// Assuming there's a Projects component, add dark mode classes
const Projects = () => {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Projects</h2>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
          Browse our portfolio of successful university projects and assignments
          we've delivered for students across various disciplines.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Karvaan Project - Updated with accurate information */}
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-all hover:shadow-md">
          <div className="aspect-video bg-tertiary dark:bg-dark-tertiary flex items-center justify-center relative">
            <span className="text-4xl text-accent">K</span>
          </div>
          <div className="p-5">
            <div className="flex flex-col mb-3">
              <h3 className="font-medium text-lg dark:text-dark-primary mb-2">Karvaan – Vehicle Management App</h3>
              <a 
                href="https://github.com/abbasahsan1/Karvaan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#24292e] hover:bg-[#1d2125] text-white px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:-translate-y-0.5 hover:shadow-md self-start"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </div>
            <p className="text-primary/70 dark:text-dark-primary/70 mb-3">
              Karvaan is a comprehensive vehicle management app designed to help vehicle owners track and manage various aspects of their vehicles, including maintenance, fuel consumption, expenses, and more.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                Flutter
              </span>
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                Dart
              </span>
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                Python
              </span>
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                TensorFlow
              </span>
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                MongoDB
              </span>
              <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                Maps API
              </span>
            </div>
          </div>
        </div>

        {/* Remaining placeholder projects */}
        {[2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item}
            className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-all hover:shadow-md"
          >
            <div className="aspect-video bg-tertiary dark:bg-dark-tertiary flex items-center justify-center">
              <span className="text-4xl text-accent">*</span>
            </div>
            <div className="p-5">
              <h3 className="font-medium text-lg mb-2 dark:text-dark-primary">Project Title {item}</h3>
              <p className="text-primary/70 dark:text-dark-primary/70 mb-3">
                Brief description of the project and the technologies used in its development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                  React
                </span>
                <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                  Node.js
                </span>
                <span className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;