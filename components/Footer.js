'use client';

import Link from 'next/link';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary dark:bg-dark-tertiary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 hover-lift">
              <span className="text-accent font-bold text-3xl mr-2">*</span>
              <span className="font-serif font-bold text-2xl">Axxiom</span>
            </div>
              <p className="text-white/70 mb-4">
              Your trusted development partner for professional software solutions, 
              business applications, and enterprise-level projects.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#home" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a 
                  href="mailto:axixomsoftware+info@gmail.com" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  axixomsoftware+info@gmail.com
                </a>
              </li>              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-accent" />
                <a 
                  href="https://wa.me/923288521430" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  +92 328 8521430
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Axxiom Software. All rights reserved.</p>
          <p className="mt-2">
            <Link 
              href="#" 
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            {' '} | {' '}
            <Link 
              href="#" 
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;