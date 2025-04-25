'use client';

import { useState } from 'react';
import { FaCode, FaDatabase, FaMobile, FaRobot, FaDocker, FaServer } from 'react-icons/fa';

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
  const [activeTab, setActiveTab] = useState('webdev');
  const [expandedMobile, setExpandedMobile] = useState(null); // Changed from 'webdev' to null

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMobileAccordion = (tabId) => {
    setExpandedMobile(expandedMobile === tabId ? null : tabId);
  };

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Services</h2>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
          We offer a comprehensive range of software development services tailored for university projects, 
          assignments, semester projects, and final year projects (FYPs).
        </p>
      </div>

      {/* Desktop Tab Navigation */}
      <div className="hidden md:flex flex-wrap justify-center mb-8 border-b border-gray-200 dark:border-gray-700">
        {Object.entries(serviceCategories).map(([id, category]) => (
          <button
            key={id}
            className={`flex items-center px-6 py-3 font-medium transition-all ${
              activeTab === id 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-primary/70 dark:text-dark-primary/70 hover:text-accent dark:hover:text-accent'
            }`}
            onClick={() => handleTabClick(id)}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden mb-8">
        {Object.entries(serviceCategories).map(([id, category]) => (
          <div key={id} className="mb-4">
            <button
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                expandedMobile === id 
                  ? 'bg-accent text-white' 
                  : 'bg-background dark:bg-dark-tertiary hover:bg-accent/10 dark:hover:bg-accent/5'
              }`}
              onClick={() => handleMobileAccordion(id)}
            >
              <div className="flex items-center">
                <span className="mr-3">{category.icon}</span>
                <span className="font-medium dark:text-dark-primary">{category.title}</span>
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${expandedMobile === id ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              expandedMobile === id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-4 bg-background/50 dark:bg-dark-background rounded-b-lg">
                <p className="text-primary/70 dark:text-dark-primary/70 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.services.map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white dark:bg-dark-secondary rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-accent/5 dark:bg-accent/10 p-2 rounded-lg">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-2 dark:text-dark-primary">{service.name}</h3>
                          <p className="text-primary/70 dark:text-dark-primary/70">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Desktop Services Grid */}
      <div className="hidden md:block">
        {Object.entries(serviceCategories)
          .filter(([id]) => id === activeTab)
          .map(([id, category]) => (
          <div key={id} className="animate-fadeIn">
            <div className="mb-6 text-center">
              {/* Remove the duplicated heading, keep only the description */}
              <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {category.services.map((service, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-dark-secondary hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start mb-3">
                    <div className="mr-4 mt-1">
                      {service.icon}
                    </div>
                    <h3 className="font-medium text-lg dark:text-dark-primary">{service.name}</h3>
                  </div>
                  <p className="text-primary/80 dark:text-dark-primary/80 pl-12">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Remove redundant CTA button - replaced by floating button */}
    </div>
  );
};

export default Services;