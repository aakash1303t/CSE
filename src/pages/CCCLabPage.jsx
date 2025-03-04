import React from 'react';

// Images for the CCC Lab
import cccLabImg1 from '../assets/python-lab-1.jpg';
import cccLabImg2 from '../assets/python-lab-2.jpg';
import cccLabImg3 from '../assets/python-lab-3.jpg';

const CCCLabPage = () => {
  return (
    <div className="ccc-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Computer Lab - I</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Location: Room No. S-45 (Second Floor)</h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-8 ">
        Computer Programming Lab is a hands-on project and assignment-based learning space where students will gain strong practical and technical skills in various programming languages including C, Python and Java, UNIX/Linux: shell, tools, utilities and programming environments, user interfaces, and software engineering principles. The laboratory hosts around 30 computer systems with uninterrupted power supply and Wi-Fi facility. The interactive board hosted in this laboratory helps Faculty in handling interactive sessions and hands-on training in this lab will give the students an opportunity to learn and better understand of the basic concepts and constructs of computer programming as well as advanced methodology concepts like Deep learning, Big Data Technologies, Artificial Intelligence, Computational Intelligence, etc. The major objectives of the laboratory are to introduce students to the basic knowledge of programming fundamentals of different programming languages like C, Python, and Java etc. as well as advanced programming concepts required for cutting edge programming needs towards Machine Learning, Deep Learning, Big Data, Artificial Intelligence, etc. 
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Gallery</h1>
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
