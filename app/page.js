'use client';

import { useState, useEffect, useContext } from 'react';
import ScrollAnimations from '../components/ScrollAnimations';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Discount from '../components/Discount';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode } = useContext(ThemeContext);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header activeSection={activeSection} />
      
      <section id="home" className="dark:bg-dark-background">
        <Hero />
      </section>
      
      <section id="services" className="section-padding bg-tertiary dark:bg-dark-tertiary">
        <div className="stagger-container reveal">
          <Services />
        </div>
      </section>
      
      {/* Keep the discount section as it already has dark mode implemented */}
      <section id="discount" className="section-padding">
        <div className="reveal">
          <Discount />
        </div>
      </section>
      
      <section id="projects" className="section-padding bg-tertiary dark:bg-dark-tertiary">
        <div className="stagger-container reveal">
          <Projects />
        </div>
      </section>
      
      {/* Keep the contact section as it already has dark mode implemented */}
      <section id="contact" className="section-padding">
        <div className="reveal">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}