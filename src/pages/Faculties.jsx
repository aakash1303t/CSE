import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import KarthikeyanCSE from "../assets/Karthikeyan-CSE.png";
import SrinivasanCSE from "../assets/Srinivasan.png";
import UmaCSE from "../assets/Uma-CSE.png";
import MuthumariCSE from "../assets/Muthumari-CSE.png";
import JananiCSE from "../assets/Janani-CSE.png";
import RajkumarCSE from "../assets/Rajkumar-CSE.png";
import KarthickCSE from "../assets/Karthick-CSE.png";
import AnbuCSE from "../assets/Anbu-CSE.png";
import SasikalaCSE from "../assets/Sasikala-CSE.png";
import VinothKumarImg from "../assets/VinothKumar-CSE.png";
import MariImg from "../assets/Mari.png";
import ramarImg from "../assets/Ramar.png";

// Faculty data
const facultiesData = {
  cse: [
    {
      name: "Dr.V.Sasikala ",
      designation: "Assistant Professor (Sl.Gr) & HoD (i/c)",
      email: "sasikala@autmdu.in",
      image: SasikalaCSE, // Replace with actual image imports
    },
    {
      name: "Dr.S.Srinivasan ",
      designation: "Professor",
      email: "srinivasan@autmdu.in",
      image: SrinivasanCSE, // Replace with actual image imports
    },
    {
      name: "Dr.M.Vinoth Kumar",
      designation: "Assistant Professor (Sl.Gr)",
      email: "vinothkumar@autmdu.in",
      image: VinothKumarImg,
    },
    {
      name: "Dr.A.Muthumari ",
      designation: "Assistant Professor",
      email: "muthumari@autmdu.in",
      image: MuthumariCSE,
    },
    {
      name: "Dr.E.Srie Vidhya Janani ",
      designation: "Assistant Professor",
      email: "srievidhyajanani@autmdu.in",
      image: JananiCSE,
    },
    {
      name: "Dr.P.Uma Maheswari",
      designation: "Assistant Professor (Sl.Gr)",
      email: "umamaheswari.p@autmdu.ac.in",
      image: UmaCSE,
    },
    {
      name: "Dr.K.Karthikeyan ",
      designation: "Assistant Professor(Sl.Gr)",
      email: "karthikeyan@autmdu.in",
      image: KarthikeyanCSE,
    },
    {
      name: "Dr.S.C.Rajkumar ",
      designation: "Teaching Fellow",
      email: "rajkumar@autmdu.in",
      image: RajkumarCSE,
    },
    {
      name: "Mr.KR.Karthick ",
      designation: "Teaching Fellow",
      email: "karthickkr@autmdu.in",
      image: KarthickCSE,
    },
    {
      name: "Mr.N.Ramar",
      designation: "Lab Technician(S.G)",
      email: "",
      image: ramarImg,
    },
    {
      name: "Mr.S.Periyasamy",
      designation: "Lab Attender(S.G)",
      email: "",
      image: MariImg,
    },
    {
      name: "S.Anbu Selvam",
      designation: "Professional Assistant   MCA.MBA(system)",
      email: "",
      image: AnbuCSE,
    },
  ],
};


// Faculty Card Component
const FacultyCard = ({ name, designation, email, image }) => {
  useEffect(() => {
    gsap.fromTo(
      `.faculty-card-${name}`, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [name]);

  return (
    <div
      className={`faculty-card faculty-card-${name} bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105`}
    >
      <img
        src={image}
        alt={name}
        className="w-32 h-36 border border-black object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{designation}</p>
      {email && (
        <p className="text-sm text-blue-600 mt-2">
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </p>
      )}
    </div>
  );
};

// Faculties Page Component
const FacultiesPage = () => {
  const categories = {
    "Head Of The Department": facultiesData.cse.filter((faculty) =>
      faculty.designation.includes("HoD")
    ),
    "Professors": facultiesData.cse.filter((faculty) =>
      faculty.designation.includes("Professor") && !faculty.designation.includes("Assistant Professor")
    ),
    "Assistant Professors": facultiesData.cse.filter(
      (faculty) =>
        faculty.designation.includes("Assistant Professor") &&
        !faculty.designation.includes("HoD") 
    ),
    "Teaching Fellow": facultiesData.cse.filter((faculty) =>
      faculty.designation.includes("Teaching Fellow")
    ),
    "Lab Staff": facultiesData.cse.filter(
      (faculty) =>
        faculty.designation.includes("Lab") ||
        faculty.designation.includes("Professional Assistant")
    ),
  };

  useEffect(() => {
    gsap.fromTo(
      ".faculties-page h1",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="faculties-page bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Faculties
        </h1>
        {/* Loop through categories */}
        {Object.entries(categories).map(([category, facultyList]) => (
          <div key={category} className="category mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              {category}
            </h2>
            <div
              className={`${
                category === "Head Of The Department" || category === "Professors" && facultyList.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              }`}
            >
              {facultyList.map((faculty, index) => (
                <FacultyCard key={index} {...faculty} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
