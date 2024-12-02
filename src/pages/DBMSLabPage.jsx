import React from 'react';

// Images for the DBMS Lab
import dbmsLabImg1 from '../assets/Python-lab-1.png';
import dbmsLabImg2 from '../assets/Python-lab-2.png';
import dbmsLabImg3 from '../assets/Python-lab-3.png';

const DBMSLabPage = () => {
  return (
    <div className="dbms-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">DBMS Lab</h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          The DBMS Lab focuses on practical exposure to database management systems,
          providing students with the skills to manage and manipulate large datasets. 
          The lab includes hands-on exercises with the latest DBMS software.
        </p>

        {/* Gallery Section */}
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={dbmsLabImg1}
            alt="DBMS Lab Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={dbmsLabImg2}
            alt="DBMS Lab Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={dbmsLabImg3}
            alt="DBMS Lab Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DBMSLabPage;
