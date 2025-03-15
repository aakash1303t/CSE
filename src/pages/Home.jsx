import { useEffect } from "react";
import { gsap } from "gsap";
import poster from "../assets/cse-banner.png"; // Replace with the path to your poster image
import hodImage from "../assets/hodbg.jpg"; // Using the uploaded HOD image

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
          <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
            The Department of Computer Science and Engineering was established in 2018, initially admitting 60 students into its undergraduate program. The department's key strengths include outstanding student enrolment, a highly qualified and dedicated faculty, excellent supporting staff, well-placed and academically recognized alumni, and state-of-the-art facilities.
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

          {/* Image for HOD */}
          <div className="flex justify-center mb-6">
            <img
              src={hodImage}
              alt="HOD"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>

          {/* Message Content */}
          <div className="text-center md:text-left max-w-4xl mx-auto">
            <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
              As the Head of the Department, I am honoured to lead a vibrant and forward-thinking team committed to excellence in teaching, research, and innovation. Since our inception in 2018, we have worked tirelessly to create a strong academic environment that fosters the growth of our students, preparing them to be future leaders in the rapidly changing world of technology.
            </p>
            <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
              Our department is dedicated to delivering a top-notch education, blending solid theoretical knowledge with hands-on practical experience. We are fortunate to have a highly skilled and passionate faculty, a dedicated support team, and state-of-the-art facilities that ensure an enriching learning journey. Our academic programs are designed to equip students with the skills necessary to tackle tomorrow’s challenges, ranging from software development and artificial intelligence to cybersecurity and data science.
            </p>
            <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
              We take great pride in fostering a collaborative and research-driven culture, where both students and faculty engage in exploring cutting-edge advancements in computer science and engineering. We also maintain strong connections with industry partners, offering our students valuable opportunities for internships, projects, and career advancement.
            </p>
            <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
              I encourage all students to make the most of the resources at their disposal, participate in extracurricular activities, and strive for excellence in both their academic and personal growth. Together, we will continue to build on the strong foundation of our department and achieve even greater success in the future.
            </p>
            <p className="text-base text-justify md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed mt-4">
              I eagerly look forward to seeing all of you contribute to the promising future of our department and the broader field of Computer Science and Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
