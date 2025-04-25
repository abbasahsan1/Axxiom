'use client';

import { useState, useEffect } from 'react';
import { FaEnvelope, FaAngleUp } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const [showFullButton, setShowFullButton] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if contact section is visible
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0;
        setIsContactSectionVisible(isVisible);
      }
      
      // Handle scroll direction for collapsing/expanding button
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 300) {
        // Scrolling down - collapse to icon only
        setShowFullButton(false);
      } else if (st < lastScrollTop || st < 300) {
        // Scrolling up or near top - show full button
        setShowFullButton(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isContactSectionVisible) {
    return null;
  }

  return (
    <button 
      onClick={scrollToContact}
      className={`fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg flex items-center transition-all hover:transform hover:-translate-y-1 ${
        showFullButton ? 'gap-2 py-3 px-5' : 'p-3'
      }`}
      aria-label="Contact Us"
    >
      <FaEnvelope />
      {showFullButton && <span className="font-medium">Contact Us</span>}
    </button>
  );
};

export default FloatingContactButton;
