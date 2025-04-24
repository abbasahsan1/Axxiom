'use client';

import { useState, useRef } from 'react';
import { FaEnvelope, FaWhatsapp, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    requestDocumentation: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      ...formStatus,
      submitting: true,
      error: false,
      message: ''
    });

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
      const userId = 'YOUR_EMAILJS_USER_ID';
      
      await emailjs.sendForm(serviceId, templateId, formRef.current, userId);
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
        requestDocumentation: false
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again or contact us directly.'
      });
    }
  };

  return (
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-lg mb-6 dark:text-dark-primary">Get In Touch</h2>
          <p className="text-lg text-primary/70 dark:text-dark-primary/70 mb-8">
            Have a project in mind? Need help with your university assignment or FYP? 
            We're here to help you bring your ideas to life. Contact us today to discuss your project requirements.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-full">
                <FaEnvelope className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-medium mb-1 dark:text-dark-primary">Email Us</h3>
                <p className="text-primary/70 dark:text-dark-primary/70">info@axiomsoftware.com</p>
                <p className="text-sm text-primary/60 dark:text-dark-primary/60 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-full">
                <FaWhatsapp className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-medium mb-1 dark:text-dark-primary">WhatsApp</h3>
                <p className="text-primary/70 dark:text-dark-primary/70">+92 300 1234567</p>
                <p className="text-sm text-primary/60 dark:text-dark-primary/60 mt-1">Available 9am-6pm (Mon-Fri)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-background dark:bg-dark-tertiary rounded-lg shadow-sm p-6 md:p-8">
          <h3 className="heading-sm mb-6 dark:text-dark-primary">Send Us a Message</h3>
          
          {formStatus.submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <p className="text-green-700">{formStatus.message}</p>
            </div>
          ) : formStatus.error ? (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
              <FaExclamationTriangle className="text-red-500 mt-1 flex-shrink-0" />
              <p className="text-red-700">{formStatus.message}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-dark-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary dark:border-dark-tertiary dark:bg-dark-background dark:text-dark-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-dark-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary dark:border-dark-tertiary dark:bg-dark-background dark:text-dark-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-1 dark:text-dark-primary">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary dark:border-dark-tertiary dark:bg-dark-background dark:text-dark-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="Assignment">Assignment</option>
                  <option value="Semester Project">Semester Project</option>
                  <option value="FYP">Final Year Project (FYP)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-dark-primary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-secondary dark:border-dark-tertiary dark:bg-dark-background dark:text-dark-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Tell us about your project requirements"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="requestDocumentation"
                  name="requestDocumentation"
                  checked={formData.requestDocumentation}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="requestDocumentation" className="text-sm text-primary/70 dark:text-dark-primary/70">
                  I would like to request documentation for my project
                </label>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                {!formStatus.submitting && <FaEnvelope />}
              </button>
              
              <p className="text-xs text-primary/60 text-center mt-4">
                Alternatively, you can contact us directly via WhatsApp or email.
              </p>
            </form>
          )}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          Need immediate assistance? Contact us on WhatsApp
        </p>
        <a 
          href="https://wa.me/923001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center gap-2 mt-4"
        >
          <FaWhatsapp />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;