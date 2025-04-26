'use client';

import { useState, useRef, useEffect } from 'react';
import { FaTag, FaUniversity, FaChevronDown, FaChevronUp, FaGraduationCap, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Discount = () => {
  const [expandedRegions, setExpandedRegions] = useState(['Islamabad / ICT']);
  const [showAllUniversities, setShowAllUniversities] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState({});
  const allUniversitiesRef = useRef(null);
    const toggleRegion = (region) => {
    setExpandedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };
  const toggleAllUniversities = () => {
    const isMobile = window.innerWidth < 768;
    const buttonElement = document.getElementById('university-dropdown-btn');
    const currentPosition = buttonElement ? buttonElement.getBoundingClientRect().top : 0;
    
    // Save the current scroll position relative to the viewport
    const scrollPosition = currentPosition + window.scrollY - 20; // 20px offset for better positioning
    
    // Toggle the dropdown state
    setShowAllUniversities(prev => !prev);
    
    // If on mobile and we're closing the dropdown, scroll back to button position
    if (isMobile && showAllUniversities) {
      // Delay the scroll to ensure DOM updates
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };
  
  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUniversities(universities);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = {};
    
    Object.entries(universities).forEach(([region, uniList]) => {
      const matchingUnis = uniList.filter(uni => 
        uni.toLowerCase().includes(term)
      );
      
      if (matchingUnis.length > 0) {
        filtered[region] = matchingUnis;
      }
    });
    
    setFilteredUniversities(filtered);
  }, [searchTerm]);
  
  // Initialize filtered universities with all universities
  useEffect(() => {
    setFilteredUniversities(universities);
  }, []);
    // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (allUniversitiesRef.current && !allUniversitiesRef.current.contains(event.target)) {
        setShowAllUniversities(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    // Simple state for dropdown positioning
  const [isDropdownReady, setIsDropdownReady] = useState(false);
  
  useEffect(() => {
    if (showAllUniversities) {
      // Delay setting to true to ensure CSS transitions work properly
      setTimeout(() => {
        setIsDropdownReady(true);
      }, 10);
    } else {
      setIsDropdownReady(false);
    }
  }, [showAllUniversities]);
  // Universities data organized by region
  const universities = {
  'Islamabad / ICT': [
    'Allama Iqbal Open University (AIOU)', 'Bahria University (BU)', 'COMSATS University Islamabad (CUI)', 
    'Federal Urdu University of Arts, Science & Technology (FUUAST)', 'Foundation University Islamabad (FUI)', 
    'International Islamic University (IIUI)', 'National Defence University (NDU)', 
    'National University of Computer & Emerging Sciences (FAST-NUCES)', 
    'National University of Modern Languages (NUML)', 'National University of Sciences & Technology (NUST)', 
    'Pakistan Institute of Engineering & Applied Sciences (PIEAS)', 'Quaid-i-Azam University (QAU)', 
    'Riphah International University (RIU)', 'Sir Syed CASE Institute of Technology (SS-CASE-IT)', 
    'Virtual University of Pakistan (VU)', 'Air University (AU)', 
    'Capital University of Science & Technology (CUST)', 'Institute of Space Technology (IST)'
  ],
  'Punjab': [
    'Beaconhouse National University (BNU)', 'Beaconhouse School System (Higher Education Division)', 
    'COMSATS University Wah Campus (CUI Wah)', 'Forman Christian College University (FCCU)', 
    'Government College University, Faisalabad (GCUF)', 'Government College University, Lahore (GCU)', 
    'Institute of Management Sciences, Lahore (IMS)', 'Institute of Glass & Ceramics Technology (IPGT & RI)', 
    'Kinnaird College for Women University (KCWU)', 'King Edward Medical University (KEMU)', 'KEMU', 
    'Lahore College for Women University (LCWU)', 'Lahore School of Economics (LSE)', 
    'Lahore University of Management Sciences (LUMS)', 'National College of Arts (NCA)', 
    'National College of Business Administration & Economics (NCBA&E)', 
    'Pakistan Institute of Fashion & Design (PIFD)', 
    'Punjab College of Art & Design (PCAD)', 'Punjab Tianjin University of Technology (PTUT)', 
    'University of Central Punjab (UCP)', 'University of Education, Lahore (UE)', 
    'University of Engineering & Technology, Lahore (UET Lahore)', 'University of Health Sciences, Lahore (UHS)', 
    'University of Lahore (UOL)', 'University of Management & Technology, Lahore (UMT)', 
    'University of the Punjab (PU)', 'University of Veterinary & Animal Sciences (UVAS)'
  ],
  'Sindh': [
    'Baqai Medical University (BMU)', 'Dawood University of Engineering & Technology (DUET)', 
    'Dow University of Health Sciences (DUHS)', 'Hamdard University (HU)', 
    'Indus Valley School of Art & Architecture (IVS)', 'Institute of Business Administration, Karachi (IBA)', 
    'Isra University (IU)', 'Jinnah Sindh Medical University (JSMU)', 'KASB Institute of Technology (KASBIT)', 
    'NED University of Engineering & Technology (NEDUET)', 
    'Sir Syed University of Engineering & Technology (SSUET)', 
    'Sindh Madressatul Islam University (SMIU)', 'University of Karachi (UoK)', 
    'University of Sindh (UoS)'
  ],
  'Khyber Pakhtunkhwa': [
    'Abasyn University (AU)', 'Abbottabad University of Science & Technology (AUST)', 
    'City University of Science & Information Technology, Peshawar (CUSIT)', 'CECOS University (CECOS)', 
    'Gandhara University (GU)', 'Ghulam Ishaq Khan Institute of Engineering Sciences & Technology (GIKI)', 
    'Gomal University (GU)', 'Institute of Management Sciences, Peshawar (IMSciences)', 'Islamia College University (ICU)', 
    'IQRA National University (INU)', 'Khyber Medical University (KMU)', 
    'Kohat University of Science & Technology (KUST)', 
    'Sarhad University of Science & Information Technology (SUIT)', 
    'Shaheed Benazir Bhutto Women University (SBBWU)', 
    'University of Agriculture, Dera Ismail Khan (UAD)', 'University of Agriculture, Peshawar (UAP)', 
    'University of Engineering & Technology, Peshawar (UET Peshawar)', 'University of Peshawar (UoP)', 
    'Women University Swabi (WUS)', 'Qurtuba University, Dera Ismail Khan (QUDIK)'
  ],
  'Balochistan': [
    'Al-Hamd Islamic University (AIU)', 'Balochistan University of Engineering & Technology (BUET)', 
    'Balochistan University of Information Technology, Engineering & Management Sciences (BUITEMS)', 
    'Bolan University of Medical & Health Sciences (BUMHS)', 
    'Lasbela University of Agriculture, Water & Marine Sciences (LUAWMS)', 
    'Quetta Institute of Medical Sciences (QIMS)', 
    'Sardar Bahadur Khan Women\'s University (SBKWU)', 
    'University of Balochistan (UOB)', 'University of Gwadar (UoG)', 'University of Makran (UoM)', 
    'University of Turbat (UOT)'
  ],
  'Azad Jammu & Kashmir': [
    'Al-Khair University (AKU)', 'Mirpur University of Science & Technology (MUST)', 
    'University of Azad Jammu & Kashmir (UAJK)', 'University of Poonch, Rawalakot (UPR)'
  ],
  'Gilgit-Baltistan': [
    'Baltistan University (BU)', 'Karakoram International University (KIU)'
  ],
  'Turkey': [
    'Altinbas International University (AIU)', 'Halice University (HU)'
  ]
};


  return (
    <div className="container-custom py-12">
      <div className="bg-accent/10 rounded-xl p-6 md:p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent rounded-full opacity-10"></div>
        <div className="absolute top-1/3 left-0 w-24 h-24 bg-accent rounded-full opacity-5"></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-32 bg-accent rounded-full opacity-5"></div>
        
        <div className="relative z-10">
          {/* Header section */}
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center mb-4 bg-accent text-white p-4 rounded-full">
              <FaTag className="text-3xl" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-dark-primary">
              Exclusive 10% Student Discount
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl mb-6 text-primary/90 dark:text-dark-primary/90">
                We're pleased to offer an exclusive <span className="font-bold text-accent">10% project discount</span> to students enrolled at any of the following HEC-recognized Pakistani universities. Simply mention your institution when you reach out with your project request, and we'll apply your discount immediately.
              </p>
            </div>
          </div>            {/* University counter dropdown button */}          {/* University Toggle Section */}
          <div className="mb-8">
            <button 
              id="university-dropdown-btn"
              onClick={toggleAllUniversities}
              className="w-full max-w-2xl mx-auto bg-accent text-white px-6 py-3 rounded-full flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:bg-accent/90 transition-all duration-300 mb-4"
              aria-expanded={showAllUniversities}
              aria-controls="all-universities-section"
            >
              <FaGraduationCap className="text-xl sm:text-2xl flex-shrink-0" />
              <span className="font-bold text-base sm:text-lg">260+ HEC-Recognized Universities</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center ml-1 sm:ml-2 flex-shrink-0">
                {showAllUniversities ? 
                  <FaChevronUp className="text-xs sm:text-sm transition-transform" /> : 
                  <FaChevronDown className="text-xs sm:text-sm transition-transform" />
                }
              </div>
            </button>
            
            {/* In-page universities section */}
            <div 
              id="all-universities-section"
              className={`bg-background dark:bg-dark-secondary rounded-xl border border-accent/20 overflow-hidden transition-all duration-300 ${
                showAllUniversities ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {showAllUniversities && (
                <>
                  {/* Search header */}
                  <div className="sticky top-0 p-4 border-b border-accent/10 bg-accent/5 backdrop-blur-sm z-10">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search universities..."
                        className="w-full p-3 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-primary dark:text-dark-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      />
                      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-accent/70" />
                    </div>
                  </div>
                  
                  {/* University list content */}
                  <div className="p-4">
                    {Object.keys(filteredUniversities).length === 0 ? (
                      <p className="text-center py-6 text-primary/80 dark:text-dark-primary/80">
                        No universities match your search. Try a different keyword.
                      </p>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(filteredUniversities).map(([region, uniList]) => (
                          <div key={region} className="mb-4">
                            <h3 className="font-bold flex items-center gap-2 mb-2 pb-1 border-b border-accent/20">
                              <FaMapMarkerAlt className="text-accent" />
                              <span className="text-primary dark:text-dark-primary">{region}</span>
                              <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full ml-1">
                                {uniList.length}
                              </span>
                            </h3>
                            <ul className="space-y-1 pl-6">
                              {uniList.map((uni, index) => (
                                <li 
                                  key={index} 
                                  className="text-sm text-primary/80 dark:text-dark-primary/80 flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0"></div>
                                  {uni}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
            {/* Call to action */}
          <div className="text-center bg-background dark:bg-dark-secondary p-6 rounded-xl shadow-sm max-w-3xl mx-auto border border-accent/10">
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-dark-primary">Claim Your Student Discount Today</h3>
            <p className="text-lg mb-4">
              Whether you're at any of these <span className="font-bold">86 institutions</span>—or any of the <span className="font-bold text-accent">260+ HEC-recognized universities nationwide</span>—just let us know where you study, and we'll take care of the rest.
            </p>
            <div className="bg-accent/5 p-4 rounded-lg mb-4">
              <p className="text-primary/80 dark:text-dark-primary/80 text-sm">
                <span className="font-bold">How it works:</span> Mention your university when contacting us, and we'll automatically apply your 10% discount to your project quote.
              </p>
            </div>
            <p className="text-primary/70 dark:text-dark-primary/70">
              We look forward to delivering the innovative, high-impact solutions your projects deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;