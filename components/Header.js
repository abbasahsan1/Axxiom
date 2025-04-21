'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover-lift transition-transform">
            <span className="text-accent font-bold text-3xl mr-2">*</span>
            <span className="font-serif font-bold text-2xl">Axiom</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#home" 
            className="font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="#services" 
            className="font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            href="#projects" 
            className="font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md py-4">
          <nav className="flex flex-col space-y-4 container-custom">
            <Link 
              href="#home" 
              className="font-medium hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="font-medium hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              className="font-medium hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="font-medium hover:text-accent transition-colors"
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