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

const serviceCategories = {
  webdev: {
    icon: <FaCode className="text-accent text-xl" />,
    title: 'Web Development',
    description: 'Modern web development solutions using React.js and Next.js frameworks for your academic projects.',
    services: [
      {
        icon: <FaCode className="text-accent text-2xl" />,
        name: 'React.js Development',
        description: 'Interactive web applications using React.js with component-based architecture and state management.'
      },
      {
        icon: <FaCode className="text-accent text-2xl" />,
        name: 'Next.js Development',
        description: 'Server-side rendered React applications with Next.js for optimal performance and SEO.'
      },
      {
        icon: <FaCode className="text-accent text-2xl" />,
        name: 'Node.js Development',
        description: 'Scalable server-side applications using Node.js with Express.js for building robust web APIs and services.'
      }
    ]
  },
  backend: {
    icon: <FaServer className="text-accent text-xl" />,
    title: 'Backend Development',
    description: 'Robust backend solutions using Node.js and API integration for your server-side requirements.',
    services: [
      {
        icon: <FaServer className="text-accent text-2xl" />,
        name: 'Node.js Development',
        description: 'Scalable backend services using Node.js with Express.js framework and RESTful architecture.'
      },
      {
        icon: <FaServer className="text-accent text-2xl" />,
        name: 'API Integration',
        description: 'Custom API development and third-party API integration with comprehensive documentation.'
      }
    ]
  },
  database: {
    icon: <FaDatabase className="text-accent text-xl" />,
    title: 'Database Management',
    description: 'Comprehensive database solutions using SQL, MongoDB, and Firebase for your data management needs.',
    services: [
      {
        icon: <FaDatabase className="text-accent text-2xl" />,
        name: 'SQL & MongoDB Development',
        description: 'Database design and implementation using SQL and MongoDB with proper schema optimization.'
      },
      {
        icon: <FaDatabase className="text-accent text-2xl" />,
        name: 'Firebase Integration',
        description: 'Real-time database implementation with Firebase, including authentication and cloud functions.'
      }
    ]
  },
  mobile: {
    icon: <FaMobile className="text-accent text-xl" />,
    title: 'Mobile Development',
    description: 'Cross-platform and native Android mobile application development using Flutter and Android SDK.',
    services: [
      {
        icon: <FaMobile className="text-accent text-2xl" />,
        name: 'Flutter Development',
        description: 'Cross-platform mobile applications using Flutter framework with beautiful UI and smooth performance.'
      },
      {
        icon: <FaMobile className="text-accent text-2xl" />,
        name: 'Android Development',
        description: 'Native Android applications using Android SDK and Kotlin/Java with material design principles.'
      }
    ]
  },
  advanced: {
    icon: <FaRobot className="text-accent text-xl" />,
    title: 'Advanced Technologies',
    description: 'Cutting-edge solutions in Python, Machine Learning, and DevOps for complex project requirements.',
    services: [
      {
        icon: <FaRobot className="text-accent text-2xl" />,
        name: 'Python & Machine Learning',
        description: 'Python applications with machine learning capabilities using popular ML libraries and frameworks.'
      },
      {
        icon: <FaDocker className="text-accent text-2xl" />,
        name: 'Docker & DevOps',
        description: 'Container solutions using Docker with DevOps practices for automated deployment workflows.'
      }
    ]
  }
};


const Services = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isLoaded, setIsLoaded] = useState(false);
  const [tabContentVisible, setTabContentVisible] = useState(true);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setTabContentVisible(true); // Ensure content is visible when tab changes
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
            className={`${activeTab === id ? 'block' : 'hidden'} ${tabContentVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{transition: 'opacity 0.3s ease-in-out'}}
          >
            <div className="mb-6 text-center">
              <p className="text-lg text-primary/70 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
              {category.services.map((service, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-md transition-all"
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