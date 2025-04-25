'use client';

import { FaTag, FaUniversity } from 'react-icons/fa';

const Discount = () => {
  return (
    <div className="container-custom">
      <div className="bg-accent/10 rounded-lg p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-10"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <span className="bg-accent text-white text-xl font-bold p-3 rounded-full">
              <FaTag className="text-2xl" />
            </span>
          </div>
          
          <h2 className="heading-lg mb-4">
            Special 10% Discount
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              We're offering an exclusive <span className="font-bold">10% discount</span> for students from 
              <span className="text-accent font-bold"> CUST, Bahria, and Air universities</span>. 
              Simply mention your university when contacting us for your project request.
            </p>
            
            <div className="bg-background dark:bg-dark-secondary p-6 rounded-lg shadow-sm inline-flex items-center mb-4">
              <div className="bg-accent/10 rounded-full p-3 mr-4">
                <FaUniversity className="text-accent text-2xl" />
              </div>
              <p className="text-primary/80 dark:text-dark-primary/80 font-medium text-lg">
                Students from mentioned universities qualify automatically
              </p>
            </div>
          </div>
          
          <p className="text-primary/70 dark:text-dark-primary/70 text-sm mt-4">
            Mention your university affiliation during initial consultation to apply your discount.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;