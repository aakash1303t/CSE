import React from 'react';

// Images for the Python Lab
import pythonLabImg1 from '../assets/Python-lab-1.png';
import pythonLabImg2 from '../assets/Python-lab-2.png';
import pythonLabImg3 from '../assets/Python-lab-3.png';

const PythonLabPage = () => {
  return (
    <div className="python-lab-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Computer Lab - II </h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Location: Room No. S-30 (Second Floor)</h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-4">
          The Common Computer Centre of our Institution was established for students to get an opportunity to develop their skills according to the global needs and international standards. The laboratory has high-end computing and network resources for academic and research. The students and staff have access to software tools and systems to execute real-life projects. The Computer Centre in the campus hosts around 70 desktop computers along with a dedicated server and workstation for use of students and staff.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The Computer Laboratory supports ACER i5 core Nodes and routers connected through switches and uninterrupted power supply. In addition,  Internet facilities supported by quality software based on curriculum and global requirements, allowing the students not only to develop their skills but also to access the internet for communication. The Institution provides access to the internet to its students through a 200Mbps Internet facility with an interactive platform for sharing resources and building academic communities among students and staff members.
        </p>
        <p className="text-lg text-gray-700 mb-8">
        The Wi-Fi facility is available inside the laboratory for the benefit of UG and  Ph.D. students to use their own laptops. The centre remains open from morning 9.00 am to 5.00 pm on all working days. The Common Computer Centre provides video-conferencing facility for conducting job placements for students in core companies and also supports the online test being conducted by the companies. Since its inception Computer Lab - II (CCC) is being maintained by the Department of Computer Science and Engineering
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">Gallery</h1>
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
