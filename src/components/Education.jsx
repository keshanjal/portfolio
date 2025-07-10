// import React from "react";

// const educationData = [
//   {
//     institution: "Harcourt Butler Technical University",
//     course: "BTech Computer Science & Engineering",
//     duration: "2021–25",
//     location: "Kanpur, UP",
//     type: "college",
//   },
//   {
//     institution: "Government School",
//     course: "Intermediate & High School",
//     duration: "2016–19",
//     location: "Prayagraj, UP",
//     type: "school",
//   },
// ];

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
//     >
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
//         My Education
//       </h2>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Timeline line */}
//         <div className="absolute top-0 left-5 w-1 h-full bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-full z-0" />

//         {/* Cards */}
//         <div className="space-y-16 z-10 relative">
//           {educationData.map((edu, index) => (
//             <div key={index} className="relative flex items-start">
//               {/* Dot perfectly centered on the timeline & card */}
//               <div className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-full border-2 border-white z-10" />

//               {/* Card Content */}
//               <div className="ml-10 w-full bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-105">
//                 <h3 className="text-xl sm:text-2xl font-bold text-white">
//                   {edu.institution}
//                 </h3>
//                 <p className="text-white/80 text-sm sm:text-base mt-1">
//                   {edu.course}
//                 </p>
//                 <div className="flex justify-between items-center mt-4 text-sm sm:text-base text-gray-300">
//                   <span>{edu.duration}</span>
//                   <span>{edu.location}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
