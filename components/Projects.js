'use client';

import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  // Start with a safe default for server rendering (showing 3 projects)
  const [initialProjectCount, setInitialProjectCount] = useState(3);
  // Reference to the projects section container
  const projectsSectionRef = useRef(null);
  
  // Projects data array
  const projectItems = [
    // Karvaan Project
    {
      title: "Karvaan – Vehicle Management App",
      description: "Karvaan is a comprehensive vehicle management app designed to help vehicle owners track and manage various aspects of their vehicles, including maintenance, fuel consumption, expenses, and more.",
      repoUrl: "https://github.com/abbasahsan1/Karvaan/",
      tags: ["Flutter", "Dart", "Python", "TensorFlow", "MongoDB", "Maps API"],
      letter: "K"
    },
    // RAG-based Question Answering Chatbot
    {
      title: "RAG-based Question Answering Chatbot",
      description: "A Retrieval-Augmented Generation (RAG) chatbot that lets users upload a PDF, ask questions based on its contents, and get intelligent responses powered by Google's Gemini API. The project features a Python-Flask backend and a Next.js frontend with real-time chat and session management.",
      repoUrl: "https://github.com/JahanzebKhan796/RAG_QA_Chatbot",
      tags: ["Next.js", "Tailwind CSS", "Python", "Flask", "Google Gemini", "HuggingFace", "FAISS"],
      letter: "R"
    },
    // Purrfect Assistant – Smart Cat Care App
    {
      title: "Purrfect Assistant – Smart Cat Care App",
      description: "Purrfect Assistant is an all-in-one AI-powered mobile app crafted to help cat owners provide the best possible care for their feline companions. It offers personalized features such as diet tracking, symptom-based health assistance, training guides, GPS tracking, and much more—all wrapped in an intuitive, cat-parent–friendly UI.",
      tags: ["Flutter", "Python", "Node.js", "Gemini API", "Firebase", "AWS", "Traccar"],
      letter: "P",
      hasGithub: false
    },
    // Multiplayer Item-Grabbing 2D Game
    {
      title: "Multiplayer Item-Grabbing 2D Game",
      description: "This is a fast-paced, competitive 2D multiplayer game where two players race to grab the most items on screen. Built using C++, the game utilizes the SFML graphics library and pthread-based multithreading for smooth, concurrent gameplay.",
      repoUrl: "https://github.com/JahanzebKhan796/Multiplayer-ItemGrabbing-2D-Game?tab=readme-ov-file",
      tags: ["C++", "SFML", "pthread", "Ubuntu/Linux", "Multithreading"],
      letter: "M"
    },
    
    // Network Packet Sniffer Tool (replacing a placeholder)
    {
      title: "Network Packet Sniffer Tool",
      description: "A Python-based network packet sniffer tool designed to capture and analyze network traffic from both wired (Ethernet) and wireless (Wi-Fi) interfaces. It provides detailed packet analysis, including filtering capabilities and real-time statistics.",
      repoUrl: "https://github.com/abbasahsan1/Packetsniffer",
      tags: ["Python", "Scapy", "Linux", "Networking", "Packet Analysis"],
      letter: "N"
    },
    
    // TravelPlannerApp
    {
      title: "TravelPlannerApp",
      description: "TravelPlannerApp is an intuitive mobile application designed for travelers to plan their trips with ease. The app allows users to search and book hotels, explore various cities, and create personalized trip itineraries. It also provides recommendations for popular tourist destinations and activities, ensuring each trip is perfectly tailored to the user's interests. The app integrates Google Maps for navigation and uses Gemini AI to offer real-time, personalized suggestions for activities.",
      techStack: ["Kotlin", "Firebase Authentication", "Gemini API", "Maps API"],
      repoUrl: "https://github.com/Abdullahxfarooqui/travelplannerapp",
      liveUrl: "#",  // If there's no live URL, keep as "#" or remove if not required
      image: "/images/projects/travel-planner.jpg" // Update with actual image path if available
    }
  ];

  // Move window-dependent code to useEffect to prevent hydration mismatch
  useEffect(() => {
    // Update project count based on screen size after client-side hydration
    const updateProjectCount = () => {
      setInitialProjectCount(window.innerWidth < 768 ? 2 : 3);
    };
    
    // Initial check
    updateProjectCount();
    
    // Add resize listener
    window.addEventListener('resize', updateProjectCount);
    
    return () => {
      window.removeEventListener('resize', updateProjectCount);
    };
  }, []);  // State to preserve scroll position
  const [scrollPosition, setScrollPosition] = useState(null);
  
  // Effect to scroll after render if position is stored
  useEffect(() => {
    if (!showAllProjects && scrollPosition !== null) {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      setScrollPosition(null); // Reset after use
    }
  }, [showAllProjects, scrollPosition]);

  // Toggle function with reliable position saving
  const toggleShowAllProjects = () => {
    if (showAllProjects) {
      // We're about to collapse - save current position
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        // Save position of projects section in the page
        const sectionTop = projectsSection.getBoundingClientRect().top + window.scrollY;
        setScrollPosition(sectionTop);
      }
      
      // Update state to collapse
      setShowAllProjects(false);
    } else {
      // Simply expand
      setShowAllProjects(true);
    }
  };

  // Projects to display based on current state
  const displayedProjects = showAllProjects ? projectItems : projectItems.slice(0, initialProjectCount);
  return (
    <div id="projects-section" className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Projects</h2>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
          Browse our portfolio of successful university projects and assignments
          we've delivered for students across various disciplines.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display projects based on current state */}
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-all hover:shadow-md flex flex-col"
          >
            {/* Remove the aspect-video div entirely and use a colored top border instead */}
            <div className="h-2 bg-accent w-full"></div>
            
            <div className="p-5 flex-grow">
              <div className="mb-3">
                <h3 className="font-medium text-lg dark:text-dark-primary mb-2">{project.title}</h3>
                {project.repoUrl && project.repoUrl !== "#" && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#24292e] hover:bg-[#1d2125] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all transform hover:-translate-y-0.5 hover:shadow-md self-start"
                  >
                    <FaGithub className="text-lg" />
                    View on GitHub
                  </a>
                )}
              </div>
              <p className="text-primary/70 dark:text-dark-primary/70 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags && project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80"
                  >
                    {tag}
                  </span>
                ))}
                
                {/* If tags don't exist, show tech stack instead */}
                {(!project.tags && project.techStack) && project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))} 
      </div>

      {/* View All Projects toggle button - always visible */}      <div className="mt-10 text-center">
        <button 
          onClick={toggleShowAllProjects}
          className="projects-toggle-button group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all hover:-translate-y-1 hover:shadow-md"
          aria-label={showAllProjects ? "Show fewer projects" : "View all projects"}
        >
          {showAllProjects ? (
            <>
              Show Fewer Projects
              <FaChevronUp className="transition-transform group-hover:-translate-y-1" />
            </>
          ) : (
            <>
              View All Projects
              <FaChevronDown className="transition-transform group-hover:translate-y-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Projects;