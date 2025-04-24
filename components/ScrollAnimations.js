'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const staggerContainers = document.querySelectorAll('.stagger-container');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
      
      staggerContainers.forEach(container => {
        const windowHeight = window.innerHeight;
        const containerTop = container.getBoundingClientRect().top;
        const containerVisible = 150;
        
        if (containerTop < windowHeight - containerVisible) {
          const staggerItems = container.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('active');
            }, 100 * index);
          });
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);
  
  return null;
};

export default ScrollAnimations;