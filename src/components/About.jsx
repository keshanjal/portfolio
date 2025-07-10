// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// import { motion } from "framer-motion";
// import { styles } from "../style";
// import { SectionWrapper } from "../hoc";
// import { FaReact, FaNodeJs, FaDownload, FaDatabase,FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiFirebase, SiTailwindcss, SiMongodb } from "react-icons/si";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h3 className="text-secondary text-[17px] uppercase tracking-wider font-semibold">
//           INTRODUCTION
//         </h3>
//         <h2 className="text-white text-[40px] sm:text-[50px] font-extrabold mb-6">
//           Overview
//         </h2>

//         <div className="flex flex-col md:flex-row gap-10 items-start">
//           {/* Text Content */}
//           <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex-1">
//             <h3 className="text-[#60a5fa] text-[22px] font-bold uppercase">
//               ANJAL KESARWANI
//             </h3>
//             <p className="text-[17px] text-white/90 mt-3 leading-[1.6]">
//               I’m a Competitive Programmer, Android App Developer, and MERN Stack Developer.
//               Skilled in Kotlin, JavaScript, React, Node, MongoDB, and more. I tackle
//               complex problems with precision and deliver scalable, user-friendly
//               solutions across both mobile and web platforms.
//             </p>

//             <div className="mt-5 grid sm:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-white font-bold mb-1">Web Mastery</p>
//                 <p className="text-white/80 text-[15px]">
//                   HTML · CSS · React · Node.js · Tailwind · JavaScript · Redux
//                 </p>
//               </div>
//               <div>
//                 <p className="text-white font-bold mb-1">Android Mastery</p>
//                 <p className="text-white/80 text-[15px]">
//                   Kotlin · Firebase · XML · SQL · API · REST API
//                 </p>
//               </div>
//             </div>

//            <div className="mt-6 flex gap-4 flex-wrap">
//   <a
//     href="https://drive.google.com/file/d/1VVfC4XFgPWMGKYU9RimlxpMHZh_E5kmo/view?usp=sharing"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition"
//   >
//     <FaDownload /> View Resume
//   </a>

//   <a
//     href="https://github.com/keshanjal?tab=repositories"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition"
//   >
//     <FaGithub /> GitHub
//   </a>

//   <a
//     href="https://www.linkedin.com/in/anjal-kesarwani-685508221/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition"
//   >
//     <FaLinkedin /> LinkedIn
//   </a>
// </div>

//           </div>

//           {/* Animated Tech Icons */}
//           <div className="w-full md:w-2/5 flex flex-wrap justify-center items-center gap-6">
//             {[FaReact, FaNodeJs, SiFirebase, SiTailwindcss, SiMongodb, FaDatabase].map(
//               (Icon, index) => (
//                 <motion.div
//                   key={index}
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{
//                     duration: 2 + index,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                   }}
//                   className="text-white text-5xl bg-[#1a1a2e] p-4 rounded-full shadow-lg"
//                   title={Icon.name}
//                 >
//                   <Icon />
//                 </motion.div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(About, "about");





/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import {
  FaReact,
  FaNodeJs,
  FaDownload,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiCodio,
} from "react-icons/si";

const AboutEducation = () => {
  return (
    <section
      id="about-education"
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[40px] sm:text-[50px] font-extrabold mb-12 text-center">
          About & Education
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* === About Section === */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#60a5fa] text-[22px] font-bold uppercase mb-2">
                ANJAL KESARWANI
              </h3>
              <p className="text-[17px] text-white/90 leading-[1.6]">
                I’m a Competitive Programmer, Android App Developer, and MERN Stack
                Developer. Skilled in Kotlin, JavaScript, React, Node, MongoDB, and
                more. I tackle complex problems with precision and deliver scalable,
                user-friendly solutions across both mobile and web platforms.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-bold mb-1">Web Mastery</p>
                  <p className="text-white/80 text-[15px]">
                    HTML · CSS · React · Node.js · Tailwind · JavaScript · Redux
                  </p>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Android Mastery</p>
                  <p className="text-white/80 text-[15px]">
                    Kotlin · Firebase · XML · SQL · API · REST API
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Resume",
                    href: "https://drive.google.com/file/d/1VVfC4XFgPWMGKYU9RimlxpMHZh_E5kmo/view?usp=sharing",
                    icon: <FaDownload />,
                    bg: "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600",
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/keshanjal?tab=repositories",
                    icon: <FaGithub />,
                    bg: "bg-gradient-to-r from-gray-700 via-gray-800 to-black",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/anjal-kesarwani-685508221/",
                    icon: <FaLinkedin />,
                    bg: "bg-gradient-to-r from-blue-500 to-blue-800",
                  },
                  {
                    label: "Codilo",
                    href: "https://codolio.com/profile/anjal2003",
                    icon: <SiCodio />,
                    bg: "bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-700",
                  },
                ].map(({ label, href, icon, bg }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${bg} text-white flex items-center justify-center gap-3 py-4 px-8 rounded-xl shadow-lg transition duration-300 font-semibold text-lg tracking-wide`}
                  >
                    <span className="text-xl">{icon}</span> {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* === Minimal Icons Bottom === */}
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              {[
                FaReact,
                FaNodeJs,
                SiFirebase,
                SiTailwindcss,
                FaHtml5,
                FaJs,
              ].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-white text-[26px] sm:text-3xl bg-[#1a1a2e] p-3 rounded-full shadow-lg"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === Education Section === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-[28px] font-extrabold mb-8 tracking-wide"
            >
              <span className="text-[#60a5fa]">🎓 Education</span>
            </motion.h3>

            <div className="space-y-8">
              {[
                {
                  icon: "🎓",
                  institution: "Harcourt Butler Technical University",
                  course: "BTech in Computer Science & Engineering",
                  duration: "2021–2025",
                  location: "Kanpur, UP",
                },
                {
                  icon: "🧮",
                  institution: "IDCL Inter College Jasra",
                  course: "Intermediate (PCM)",
                  duration: "2018–2020",
                  location: "Prayagraj, UP",
                },
                {
                  icon: "🏫",
                  institution: "IDCL Inter College Jasra",
                  course: "High School",
                  duration: "2016–2018",
                  location: "Prayagraj, UP",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg transition hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-2 text-xl font-bold text-[#60a5fa]">
                    <span className="text-2xl">{edu.icon}</span>
                    {edu.institution}
                  </div>
                  <p className="text-white/90 text-sm sm:text-base">{edu.course}</p>
                  <div className="mt-2 flex justify-between text-sm text-white/60">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AboutEducation, "about-education");
