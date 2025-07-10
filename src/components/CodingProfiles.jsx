// import React from "react";
// import { motion } from "framer-motion";
// import codechefLogo from "../assets/codechef.png";
// import leetcodeLogo from "../assets/leetcode.png";
// import gfgLogo from "../assets/geeksforgeeks.png";
// import codeforcesLogo from "../assets/codeforces.png";

// // Profiles list
// const profiles = [
//   {
//     name: "LeetCode",
//     logo: leetcodeLogo,
//     link: "https://leetcode.com/u/anjal_2/"
//   },
//   {
//     name: "CodeChef",
//     logo: codechefLogo,
//     link: "https://www.codechef.com/users/anjal_05"
//   },
//   {
//     name: "GeeksforGeeks",
//     logo: gfgLogo,
//     link: "https://www.geeksforgeeks.org/user/anjalkesarwaniinfo/"
//   },
//   {
//     name: "CodeForces",
//     logo: codeforcesLogo,
//     link: "https://codeforces.com/profile/Satyan_veshi"
//   },
// ];

// const fadeInUp = (index) => ({
//   initial: { opacity: 0, y: 50 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay: index * 0.2 },
//   viewport: { once: true }
// });

// const CodingProfiles = () => {
//   return (
//     <section
//       id="profiles"
//       className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
//     >
//       <motion.h2
//         className="text-4xl md:text-5xl font-extrabold text-center mb-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         My Coding Profiles
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
//         {profiles.map((profile, index) => (
//           <motion.a
//             key={profile.name}
//             href={profile.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group transform transition-transform duration-300 hover:scale-110"
//             {...fadeInUp(index)}
//           >
//             <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg group-hover:shadow-[0_0_25px_#a855f7] bg-black/30 backdrop-blur-md flex items-center justify-center p-4 transition-shadow">
//               <img
//                 src={profile.logo}
//                 alt={profile.name}
//                 className="w-full h-full object-contain group-hover:brightness-125"
//               />
//             </div>
//             <p className="mt-4 text-center text-lg font-semibold text-white group-hover:text-purple-400 transition">
//               {profile.name}
//             </p>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CodingProfiles;
