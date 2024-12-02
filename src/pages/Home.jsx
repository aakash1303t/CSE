import { useEffect } from "react";
import { gsap } from "gsap";
import poster from "../assets/cse-banner.png"; // Replace with the path to your poster image
import hodImage from "../assets/hod.png"; // Replace with the path to your HOD image

const Home = () => {
  useEffect(() => {
    // Animation for the poster and description
    gsap.fromTo(
      ".poster",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".description",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );

    // Animation for the HOD card
    gsap.fromTo(
      ".hod-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-0">
      {/* Poster Section */}
      <div className="container mx-auto px-4">
        <div className="poster flex justify-center mb-8">
          <img
            src={poster}
            alt="Department Poster"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-3xl"
          />
        </div>

        {/* Description Section */}
        <div className="description text-center max-w-xl md:max-w-4xl mx-auto mb-16">
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
            The Computer Science and Engineering department is dedicated to
            imparting knowledge and skills in software development, data
            science, and computer systems. Our programs are tailored to meet
            the demands of the tech industry, with a focus on innovation and
            research.
          </p>
        </div>

        {/* HOD's Message Section */}
        <div className="hod-message container mx-auto px-4 md:px-8 mb-16">
          <div className="text-center mb-8">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 uppercase">
              HOD's Message
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-4xl mx-auto">
            {/* Card: Image and Details */}
            <div className="hod-card bg-white shadow-lg rounded-lg overflow-hidden p-8 flex flex-col items-center">
              <img
                src={hodImage}
                alt="HOD"
                className="w-32 md:w-48 h-auto rounded-md"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Dr. V. Sasikala
                </h3>
                <p className="text-sm text-gray-600">
                  HoD (i/c) & Assistant Professor (Sr.Gr)
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="uppercase text-base md:text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed">
                Welcome to the Department of Computer Science and Engineering.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
                We are committed to fostering innovation and excellence in
                education, research, and professional development. Our goal is
                to empower students to become the leaders of tomorrow in the
                ever-evolving field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
