// src/pages/Pricing.js
import { useRouter } from 'next/router';
import React from 'react';

export default function PricingPage() {
  const router = useRouter();
  
  return (
    <div className="container-custom py-16">
      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Our Pricing</h1>
        <p className="text-lg text-primary/70 dark:text-dark-primary/70 max-w-3xl mx-auto">
          Affordable pricing plans for university students and academic projects.
        </p>
      </div>
      
      {/* Pricing content will be implemented here */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-background dark:bg-dark-secondary rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 flex flex-col">
          <div className="mb-4">
            <span className="text-sm font-medium text-accent">Basic</span>
            <h2 className="text-3xl font-bold mt-2">PKR 7,500</h2>
            <p className="text-primary/70 dark:text-dark-primary/70 mt-2">
              For simple programming assignments and small projects
            </p>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Simple programming tasks
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Basic documentation
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              1 revision
            </li>
          </ul>
          
          <button className="mt-auto bg-accent/10 hover:bg-accent/20 text-accent font-medium py-2 px-4 rounded-md transition-all w-full">
            Contact Us
          </button>
        </div>
        
        {/* Placeholder for more pricing tiers */}
      </div>
    </div>
  );
}
