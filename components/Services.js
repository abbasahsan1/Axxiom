'use client';

import { useState, useEffect } from 'react';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobile, 
  FaRobot, 
  FaDocker
} from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Pre-load all content immediately
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Group services into logical categories
  const serviceCategories = {
    development: {
      title: 'Web Development',
      icon: <FaCode className="text-accent text-2xl" />,
      description: 'Modern web development solutions using the latest technologies and frameworks.',
      services: [
        { name: 'JavaScript', icon: <FaCode className="text-accent text-3xl" />, description: 'Frontend and backend JavaScript development for dynamic web applications.' },
        { name: 'React', icon: <FaCode className="text-accent text-3xl" />, description: 'Building interactive user interfaces with React.js.' },
        { name: 'Next.js', icon: <FaCode className="text-accent text-3xl" />, description: 'Server-side rendering and static site generation with Next.js.' },
      ]
    },
    backend: {
      title: 'Backend & API',
      icon: <FaServer className="text-accent text-2xl" />,
      description: 'Robust backend solutions and API integrations for your applications.',
      services: [
        { name: 'Node.js', icon: <FaServer className="text-accent text-3xl" />, description: 'Scalable server-side applications with Node.js.' },
        { name: 'API Integration', icon: <FaServer className="text-accent text-3xl" />, description: 'Seamless integration with third-party APIs and services.' },
        { name: 'DevOps', icon: <FaServer className="text-accent text-3xl" />, description: 'Continuous integration and deployment pipelines.' },
        { name: 'Docker', icon: <FaDocker className="text-accent text-3xl" />, description: 'Containerization for consistent development and deployment environments.' },
      ]
    },
    database: {
      title: 'Database Solutions',
      icon: <FaDatabase className="text-accent text-2xl" />,
      description: 'Efficient data storage and management solutions for your applications.',
      services: [
        { name: 'MongoDB', icon: <FaDatabase className="text-accent text-3xl" />, description: 'NoSQL database solutions for flexible data models.' },
        { name: 'Firebase', icon: <FaDatabase className="text-accent text-3xl" />, description: 'Real-time database and backend-as-a-service solutions.' },
        { name: 'SQL', icon: <FaDatabase className="text-accent text-3xl" />, description: 'Relational database design and optimization.' },
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: <FaMobile className="text-accent text-2xl" />,
      description: 'Cross-platform and native mobile application development.',
      services: [
        { name: 'Flutter', icon: <FaMobile className="text-accent text-3xl" />, description: 'Cross-platform mobile app development with Flutter.' },
        { name: 'Mobile App Development', icon: <FaMobile className="text-accent text-3xl" />, description: 'End-to-end mobile application development for iOS and Android.' },
        { name: 'Android App Development', icon: <FaMobile className="text-accent text-3xl" />, description: 'Native Android application development.' },
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: <FaRobot className="text-accent text-2xl" />,
      description: 'Intelligent solutions powered by machine learning and AI.',
      services: [
        { name: 'Machine Learning', icon: <FaRobot className="text-accent text-3xl" />, description: 'Custom machine learning models and algorithms.' },
        { name: 'Python', icon: <FaCode className="text-accent text-3xl" />, description: 'Python development for data science and AI applications.' },
      ]
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // No longer need toggleAccordion function as we're showing all content directly

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Services</h2>
        <p className="text-lg text-primary/70 max-w-3xl mx-auto">
          We offer a comprehensive range of software development services tailored for university projects, 
          assignments, semester projects, and final year projects (FYPs).
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
        {Object.entries(serviceCategories).map(([id, category]) => (
          <button
            key={id}
            className={`flex items-center px-6 py-3 font-medium transition-all ${activeTab === id ? 'text-accent border-b-2 border-accent' : 'text-primary/70 hover:text-accent'}`}
            onClick={() => handleTabClick(id)}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content - Optimized to load faster and display content directly */}
      <div className="mb-12">
        {Object.entries(serviceCategories).map(([id, category]) => (
          <div 
            key={id} 
            className={`${activeTab === id ? 'block' : 'hidden'} stagger-container reveal ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{transition: 'opacity 0.3s ease-in-out'}}
          >
            <div className="mb-6 text-center">
              <p className="text-lg text-primary/70 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {category.services.map((service, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-md transition-all stagger-item"
                >
                  <div className="flex items-start mb-3">
                    <div className="mr-4 mt-1">
                      {service.icon}
                    </div>
                    <h3 className="font-medium text-lg">{service.name}</h3>
                  </div>
                  <p className="text-primary/80 pl-12">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
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

export default Services;