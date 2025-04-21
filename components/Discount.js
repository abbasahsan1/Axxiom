'use client';

import { FaUniversity, FaTag } from 'react-icons/fa';

const Discount = () => {
  return (
    <div className="container-custom">
      <div className="bg-accent/10 rounded-lg p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-10"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-accent text-white text-xl font-bold p-3 rounded-full">
              <FaTag className="text-2xl" />
            </span>
          </div>
          
          <h2 className="heading-lg mb-4">
            Special 10% Discount
          </h2>
          
          <p className="text-lg mb-6">
            We're offering an exclusive <span className="font-bold">10% discount</span> for students from 
            <span className="text-accent font-bold"> CUST, BAHRIA, and AIR universities</span>. 
            Simply mention your university when contacting us or use the promo code when submitting your project request.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background p-6 rounded-lg shadow-sm hover-lift stagger-item">
              <FaUniversity className="text-accent text-3xl mb-3 mx-auto" />
              <h3 className="font-medium mb-2">CUST</h3>
              <p className="text-primary/70 text-sm">Use code: CUST10</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm hover-lift stagger-item">
              <FaUniversity className="text-accent text-3xl mb-3 mx-auto" />
              <h3 className="font-medium mb-2">BAHRIA</h3>
              <p className="text-primary/70 text-sm">Use code: BAHRIA10</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm hover-lift stagger-item">
              <FaUniversity className="text-accent text-3xl mb-3 mx-auto" />
              <h3 className="font-medium mb-2">AIR</h3>
              <p className="text-primary/70 text-sm">Use code: AIR10</p>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center justify-center"
          >
            Contact Us for Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discount;