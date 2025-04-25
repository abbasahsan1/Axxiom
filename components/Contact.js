'use client';

import { useState, useRef } from 'react';
import { FaEnvelope, FaWhatsapp, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  // No need for formData state as Formspree will handle the form data

  const handleSubmit = (e) => {
    // Don't prevent default - allow form to submit to Formspree
    // But we can still update our UI
    setFormStatus({ 
      submitting: true,
      submitted: false,
      error: false,
      message: '' 
    });
    
    // Formspree will handle the actual submission
    // We just intercept it to show the loading state
    // The page will redirect back after submission via Formspree
    
    // If you want to prevent the redirect, you could use:
    // e.preventDefault();
    // And then use fetch to submit the form programmatically
    // But the simpler approach is to let Formspree handle it
  };

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Get in Touch</h2>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-2xl mx-auto">
          Have questions about your project needs? Contact us using any of the methods below, and we'll get back to you promptly.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Options - Now Left Side */}
        <div className="bg-accent/5 dark:bg-accent/10 rounded-lg order-1 p-8 md:p-10">
          <h3 className="heading-sm mb-8">Contact Options</h3>
          
          <div className="space-y-8">
            {/* Email Contact */}
            <div className="flex items-start gap-5 pb-8 border-b border-accent/10">
              <div className="bg-accent/10 p-3.5 rounded-full flex-shrink-0">
                <FaEnvelope className="text-accent text-xl" />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-lg mb-3">Email Us</h4>
                
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-medium text-primary/60 dark:text-dark-primary/60 mb-1">General Inquiries:</p>
                    <a 
                      href="mailto:axixomsoftware+info@gmail.com" 
                      className="text-primary/80 dark:text-dark-primary/80 hover:text-accent transition-colors break-words"
                    >
                      axixomsoftware+info@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-primary/60 dark:text-dark-primary/60 mb-1">Support:</p>
                    <a 
                      href="mailto:axixomsoftware+support@gmail.com" 
                      className="text-primary/80 dark:text-dark-primary/80 hover:text-accent transition-colors break-words"
                    >
                      axixomsoftware+support@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-primary/60 dark:text-dark-primary/60 mb-1">Projects:</p>
                    <a 
                      href="mailto:axixomsoftware+projects@gmail.com" 
                      className="text-primary/80 dark:text-dark-primary/80 hover:text-accent transition-colors break-words"
                    >
                      axixomsoftware+projects@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Contact */}
            <div className="flex items-start gap-5">
              <div className="bg-accent/10 p-3.5 rounded-full flex-shrink-0">
                <FaWhatsapp className="text-accent text-xl" />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-lg mb-3">WhatsApp</h4>
                <a 
                  href="https://wa.me/923350014063" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary/80 dark:text-dark-primary/80 hover:text-accent transition-colors text-lg"
                >
                  +92 335 0014063
                </a>
                <p className="text-sm text-primary/60 dark:text-dark-primary/60 mt-2 mb-4">
                  Available 9am-6pm (Monday-Friday)
                </p>
                
                {/* WhatsApp Button - Centered on mobile, regular alignment on desktop */}
                <div className="flex justify-center md:block">
                  <a 
                    href="https://wa.me/923350014063" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2.5 px-4 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Send a Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Send Us a Message Form - Right Side */}
        <div className="bg-background dark:bg-dark-secondary rounded-lg shadow-sm p-8 md:p-10 order-2">
          <h3 className="heading-sm mb-8">Send Us a Message</h3>
          
          <div 
            id="form-success" 
            style={{ display: 'none' }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-md p-6 flex items-start gap-4"
          >
            <FaCheck className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0 text-xl" />
            <p className="text-green-700 dark:text-green-400">
              Your message has been sent! We'll get back to you soon.
            </p>
          </div>
          
          <form 
              id="contact-form"
              action="https://formspree.io/f/movdvqzk"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden field for redirect */}
              <input type="hidden" name="_next" value="https://axiomsoftware.com/?submitted=true#contact" />
              
              {/* Hidden field for email destination */}
              <input type="hidden" name="_replyto" value="axixomsoftware+form@gmail.com" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-dark-primary/90">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-primary dark:text-dark-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-dark-primary/90">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-primary dark:text-dark-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 dark:text-dark-primary/90">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-primary dark:text-dark-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-dark-primary/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-primary dark:text-dark-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-y"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center"
                >
                  Send Message
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;