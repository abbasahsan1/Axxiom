'use client';

import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectsRef = useRef(null);
  // Start with a safe default for server rendering (showing 3 projects)
  const [initialProjectCount, setInitialProjectCount] = useState(3);
  
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
    
    // Remaining placeholder project
    {
      title: "Project Title 6",
      description: "Brief description of the project and the technologies used in its development.",
      repoUrl: "#",
      tags: ["React", "Node.js", "MongoDB"],
      letter: "*"
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
  }, []);

  const toggleShowAllProjects = () => {
    // Don't allow toggling during animation
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Toggle with animation
    const container = projectsRef.current;
    
    if (showAllProjects) {
      // Animation for collapsing
      const projectItems = container.querySelectorAll('.project-item');
      
      // Hide the items that will be removed with staggered delay
      projectItems.forEach((item, index) => {
        if (index >= initialProjectCount) {
          const delay = (projectItems.length - index) * 60; // Stagger from end
          setTimeout(() => {
            item.classList.add('opacity-0', 'translate-y-4');
          }, delay);
        }
      });
      
      // After items are faded out, change state to trigger re-render
      setTimeout(() => {
        setShowAllProjects(false);
        setIsAnimating(false);
      }, (projectItems.length - initialProjectCount) * 60 + 300);
    } else {
      // Animation for expanding
      setShowAllProjects(true);
      
      // After re-render with all items, animate them in
      setTimeout(() => {
        const newItems = container.querySelectorAll('.project-item');
        newItems.forEach((item, index) => {
          if (index >= initialProjectCount) {
            item.classList.add('opacity-0', 'translate-y-4');
            
            // Stagger the appearance
            const delay = (index - initialProjectCount + 1) * 60;
            setTimeout(() => {
              item.classList.remove('opacity-0', 'translate-y-4');
            }, delay);
          }
        });
        
        setTimeout(() => {
          setIsAnimating(false);
        }, (projectItems.length - initialProjectCount) * 60 + 300);
      }, 50);
    }
  };

  // Projects to display based on current state
  const displayedProjects = showAllProjects ? projectItems : projectItems.slice(0, initialProjectCount);

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Our Projects</h2>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
          Browse our portfolio of successful university projects and assignments
          we've delivered for students across various disciplines.
        </p>
      </div>
      
      <div 
        ref={projectsRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
      >
        {/* Display projects based on current state */}
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className={`project-item bg-white dark:bg-dark-secondary rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col ${index >= initialProjectCount ? "transition-opacity duration-300 ease-in-out" : ""}`}
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
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-tertiary dark:bg-dark-tertiary px-2 py-1 rounded text-primary/80 dark:text-dark-primary/80"
                  >
                    {tag}
                  </span>
                ))} 
              </div>
            </div>
          </div>
        ))} 
      </div>

      {/* View All Projects toggle button - always visible */}
      <div className="mt-10 text-center">
        <button 
          onClick={toggleShowAllProjects}
          disabled={isAnimating}
          className={`group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all hover:-translate-y-1 hover:shadow-md ${isAnimating ? 'opacity-80 cursor-not-allowed' : ''}`}
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