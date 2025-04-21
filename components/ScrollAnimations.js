'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      // Animate reveal elements
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('active');
        }
      });

      // Animate staggered items with delay
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach((container) => {
        if (isInViewport(container)) {
          const items = container.querySelectorAll('.stagger-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('active');
            }, 100 * index); // 100ms delay between each item
          });
        }
      });
    };

    // Run once on load
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimations;