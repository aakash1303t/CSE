import React from 'react';

// Images for the Python Lab
import pythonLabImg1 from '../assets/Python-lab-1.png';
import pythonLabImg2 from '../assets/Python-lab-2.png';
import pythonLabImg3 from '../assets/Python-lab-3.png';

const PythonLabPage = () => {
  return (
    <div className="python-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Python Lab</h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          The Python Lab is dedicated to learning Python programming language. 
          It offers a variety of exercises and challenges that help students 
          build strong programming skills. The lab is equipped with the latest 
          tools for coding and development.
        </p>

        {/* Gallery Section */}
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={pythonLabImg1}
            alt="Python Lab Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={pythonLabImg2}
            alt="Python Lab Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={pythonLabImg3}
            alt="Python Lab Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PythonLabPage;
