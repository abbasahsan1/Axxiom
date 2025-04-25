'use client';

import { useState } from 'react';
import { FaUniversity, FaTag, FaCopy, FaCheck } from 'react-icons/fa';

const Discount = () => {
  // State to track which code has been copied
  const [copiedCode, setCopiedCode] = useState(null);
  
  // Discount codes data
  const discountCodes = [
    { university: 'CUST', code: 'CUST10' },
    { university: 'Bahria', code: 'BAHRIA10' },
    { university: 'Air', code: 'AIR10' }
  ];
  
  // Function to handle copying code to clipboard
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(err => console.error('Failed to copy code: ', err));
  };

  return (
    <div className="container-custom">
      <div className="bg-accent/10 rounded-lg p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-10"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <span className="bg-accent text-white text-xl font-bold p-3 rounded-full">
              <FaTag className="text-2xl" />
            </span>
          </div>
          
          <h2 className="heading-lg mb-3 text-center">
            Special 10% Discount
          </h2>
          
          <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
            We're offering an exclusive <span className="font-bold">10% discount</span> for students from 
            <span className="text-accent font-bold"> CUST, Bahria, and Air universities</span>. 
            Simply use one of these promo codes when contacting us.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {discountCodes.map((item, index) => (
              <div 
                key={index}
                className="bg-background dark:bg-dark-secondary p-5 rounded-lg shadow-sm hover-lift transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-accent/10 rounded-full p-3 mb-2">
                    <FaUniversity className="text-accent text-2xl" />
                  </div>
                  <h3 className="font-medium text-lg mb-1 dark:text-dark-primary">{item.university}</h3>
                  
                  {/* Prominently display the promo code */}
                  <div className="w-full mt-2 mb-3">
                    <div className="bg-accent/5 dark:bg-accent/10 flex items-center justify-between rounded-md px-3 py-2 border border-accent/20">
                      <span className="font-mono font-bold text-accent tracking-wider">{item.code}</span>
                      <button 
                        onClick={() => handleCopyCode(item.code)}
                        className="text-primary/70 dark:text-dark-primary/70 hover:text-accent transition-colors focus:outline-none"
                        aria-label={`Copy ${item.code} code`}
                      >
                        {copiedCode === item.code ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaCopy />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Display copy status */}
                  <div className="h-5">
                    {copiedCode === item.code && (
                      <span className="text-green-600 dark:text-green-400 text-xs font-medium animate-fade-in">
                        Copied to clipboard!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-primary/70 dark:text-dark-primary/70 text-sm">
              Mention your code when submitting your project request or during initial consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;