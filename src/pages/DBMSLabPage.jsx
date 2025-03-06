import React from 'react';

// Images for the DBMS Lab
import dbmsLabImg1 from '../assets/dbms-lab-1.jpg';
import dbmsLabImg2 from '../assets/dbms-lab-2.jpg';
import dbmsLabImg3 from '../assets/dbms-lab-3.jpg';

const DBMSLabPage = () => {
  return (
    <div className="dbms-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Computer Lab - III (DBMS Lab)</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Location: Room No. S-21 (Second Floor)</h1>
        
        {/* Description Section */}
        <p className="text-lg text-justify text-gray-700 mb-8 ">
        The Computer Lab - III consists of a cluster of 51 computer systems installed with open source software as PostgreSQL and MySQL. It is equipped with state-of-the-art technologies to develop knowledge about database design and implementation using various DBMS application software.  The laboratory is established in line with the engineering curriculum to familiarize the student community with advancements in Data Mining and Warehousing. The DBMS laboratory enables students to learn and manage quantitative and complex data with a dedicated workstation and programming tools which are required for transactional and analytical database systems design. The laboratory focuses on the development of information infrastructures and data management systems for efficiently and securely managing large volumes of data. In particular, it is actively working on both the traditional database paradigm and new opportunities for crossover and collaboration between data management and other fields in computer science.
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Gallery</h1>
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
