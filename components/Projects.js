'use client';

import { FaCode, FaMobile, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Student Attendance Tracking App',
      description: 'Developed a mobile application for tracking student attendance with real-time updates and reporting features.',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      icon: <FaMobile className="text-accent text-3xl" />
    },
    {
      title: 'E-Learning Platform',
      description: 'Created a comprehensive e-learning platform with course management, video lectures, and assessment tools.',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
      icon: <FaCode className="text-accent text-3xl" />
    },
    {
      title: 'University Database System',
      description: 'Designed and implemented a database system for managing university resources, students, and faculty information.',
      technologies: ['SQL', 'Python', 'Docker'],
      icon: <FaDatabase className="text-accent text-3xl" />
    }
  ];

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Previous Projects</h2>
        <p className="text-lg text-primary/70 max-w-3xl mx-auto">
          Take a look at some of our recent projects for university students. 
          These showcase our expertise and commitment to delivering high-quality solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-background rounded-lg shadow-sm overflow-hidden hover-lift stagger-item"
          >
            <div className="bg-primary/5 p-8 flex justify-center">
              {project.icon}
            </div>
            
            <div className="p-6">
              <h3 className="heading-sm mb-3">{project.title}</h3>
              
              <p className="text-primary/70 mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-tertiary text-primary/80 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-primary/70 italic mb-6">More projects will be added soon.</p>
        <a 
          href="#contact" 
          className="btn-primary inline-flex items-center justify-center"
        >
          Contact Us for Your Project
        </a>
      </div>
    </div>
  );
};

export default Projects;