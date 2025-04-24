'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background dark:bg-dark-background shadow-md py-2' 
          : 'bg-transparent dark:bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover-lift transition-transform">
            <span className="text-accent font-bold text-3xl mr-2">*</span>
            <span className="font-serif font-bold text-2xl dark:text-dark-primary">Axiom</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#home" 
            className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="#services" 
            className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            href="#projects" 
            className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Contact
          </Link>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-tertiary dark:hover:bg-dark-tertiary/30 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-accent text-xl" />
            ) : (
              <FaMoon className="text-primary text-xl" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-tertiary dark:hover:bg-dark-tertiary/30 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-accent text-xl" />
            ) : (
              <FaMoon className="text-primary text-xl" />
            )}
          </button>
          
          <button 
            className="text-primary dark:text-dark-primary focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background dark:bg-dark-background shadow-md py-4">
          <nav className="flex flex-col space-y-4 container-custom">
            <Link 
              href="#home" 
              className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="font-medium hover:text-accent dark:text-dark-primary dark:hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;