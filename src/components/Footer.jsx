import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Address Section */}
        <div className="footer-panel">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p>NH-7 Kanyakumari National Highway,</p>
          <p>Keelakuilkudi Road,</p>
          <p>Madurai-625019, Tamilnadu.</p>
        </div>
        
        {/* Contact Us Section */}
        <div className="footer-panel">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Student Section: 0452-2555 544</p>
          <p>Email: <a href="mailto:aurcmcontact@autmdu.in" className="text-white hover:text-[#a41e21]">aurcmcontact@autmdu.in</a></p>
          <p>Placements: <a href="mailto:tpo_aurcm@autmdu.in" className="text-white hover:text-[#a41e21]">tpo_aurcm@autmdu.in</a></p>
        </div>

        {/* University Link Section */}
        <div className="footer-panel">
          <h3 className="text-lg font-semibold mb-4">University Link</h3>
          <p><a href="https://www.annauniv.edu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">www.annauniv.edu</a></p>
          <p><a href="https://coe1.annauniv.edu/home/students_corner.php" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">coe1.annauniv.edu</a></p>
          <p><a href="https://www.aukdc.edu.in/onlinefee/gotoAgree.htm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">www.aukdc.edu.in</a></p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-panel">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <p>
            <a href="https://www.ugc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">UGC</a> &nbsp;&nbsp;&nbsp;
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">AICTE</a>
          </p>
          <p>
            <a href="http://www.tndte.gov.in/site/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">DTE</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.education.gov.in/en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">MHRD</a>
          </p>
          <p><a href="https://www.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">Govt. of Tamilnadu</a></p>
          <p><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">Govt. of India</a></p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        Copyright © 2024 AURCM. All Rights Reserved | Maintained by <a href="/DeveloperTeam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a41e21]">Department Of Computer Science And Engineering</a>
      </div>
    </footer>
  );
};

export default Footer;
