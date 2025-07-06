// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    institution: "Harcourt Butler Technical University",
    course: "BTech Computer Science & Engineering",
    duration: "2021–25",
    location: "Kanpur, UP",
  },
  {
    institution: "Government School",
    course: "Intermediate & High School",
    duration: "2016–19",
    location: "Prayagraj, UP",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        My Education
      </h2>
      <div className="flex flex-col gap-8 items-center px-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-fuchsia-700 to-purple-800 rounded-2xl w-full max-w-4xl p-6 md:p-8 flex justify-between items-center shadow-[0_0_15px_#a020f0] hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold">{edu.institution}</h3>
              <p className="text-gray-200 mt-1">{edu.course}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">{edu.duration}</p>
              <p className="text-gray-400">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

// This component displays the education section with a gradient background and hover effects.
// It maps through the educationData array to create cards for each educational entry.