import React from 'react';

// Images for the CCC Lab
import cccLabImg1 from '../assets/Python-lab-1.png';
import cccLabImg2 from '../assets/Python-lab-2.png';
import cccLabImg3 from '../assets/Python-lab-3.png';

const CCCLabPage = () => {
  return (
    <div className="ccc-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">CCC Lab</h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          The CCC Lab provides students with hands-on experience in computer
          systems, programming, and various software tools. The lab is equipped
          with modern machines and software for a comprehensive learning experience.
        </p>

        {/* Gallery Section */}
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={cccLabImg1}
            alt="CCC Lab Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={cccLabImg2}
            alt="CCC Lab Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={cccLabImg3}
            alt="CCC Lab Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CCCLabPage;
