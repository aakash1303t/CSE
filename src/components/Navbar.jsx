import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/clg-logo.png"; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleFacilityClick = () => {
    setIsFacilitiesOpen(false); // Close the facilities dropdown when a link is clicked
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="College Logo" href="/" className="w-12 h-12 mr-3" />
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            <span className="block md:hidden">Dept. of CSE</span>
            <span className="hidden md:block">
              Department of Computer Science and Engineering
            </span>
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } z-50 md:hidden`}
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        >
          <div
            className={`fixed right-0 top-0 bg-white w-64 h-full shadow-lg transform transition-all duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center mt-10">
              <Link
                to="/"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick} // Close the menu
              >
                Home
              </Link>
              <Link
                to="/faculties"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick} // Close the menu
              >
                Faculties
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsFacilitiesOpen(!isFacilitiesOpen)}
                  className="block py-2 text-gray-800 hover:text-blue-600"
                >
                  Facilities
                </button>
                {isFacilitiesOpen && (
                  <div className="flex flex-col mt-2">
                    <Link
                      to="/computerlab1"
                      className="block py-2 text-gray-800 hover:text-blue-600"
                      onClick={() => {
                        handleLinkClick(); // Close menu
                        handleFacilityClick(); // Close facilities dropdown
                      }}
                    >
                      Computer Lab - 1
                    </Link>
                    <Link
                      to="/computerlab2"
                      className="block py-2 text-gray-800 hover:text-blue-600"
                      onClick={() => {
                        handleLinkClick(); // Close menu
                        handleFacilityClick(); // Close facilities dropdown
                      }}
                    >
                      Computer Lab - 2
                    </Link>
                    <Link
                      to="/computerlab3"
                      className="block py-2 text-gray-800 hover:text-blue-600"
                      onClick={() => {
                        handleLinkClick(); // Close menu
                        handleFacilityClick(); // Close facilities dropdown
                      }}
                    >
                      Computer Lab - 3
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/students"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick} // Close the menu
              >
                Students
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="md:flex md:items-center md:space-x-6 hidden">
          <Link
            to="/"
            className="block py-2 text-gray-800 hover:text-blue-600 md:py-0"
          >
            Home
          </Link>
          <Link
            to="/faculties"
            className="block py-2 text-gray-800 hover:text-blue-600 md:py-0"
          >
            Faculties
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsFacilitiesOpen(!isFacilitiesOpen)}
              className="block py-2 text-gray-800 hover:text-blue-600 md:py-0"
            >
              Facilities
            </button>
            {isFacilitiesOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-48">
                <Link
                  to="/computerlab1"
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                  onClick={handleFacilityClick} // Close the facilities dropdown
                >
                  Computer Lab - 1
                </Link>
                <Link
                  to="/computerlab2"
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                  onClick={handleFacilityClick} // Close the facilities dropdown
                >
                  Computer Lab - 2
                </Link>
                <Link
                  to="/computerlab3"
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                  onClick={handleFacilityClick} // Close the facilities dropdown
                >
                  Computer Lab - 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/students"
            className="block py-2 text-gray-800 hover:text-blue-600 md:py-0"
          >
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
