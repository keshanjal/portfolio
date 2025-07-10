/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { textVariant } from "../Utils/motion";

const Tech = () => {
  // Split technologies into two rows
  const middleIndex = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, middleIndex);
  const secondRow = technologies.slice(middleIndex);

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white overflow-hidden"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className={`${styles.sectionHeadText}`}>TECH STACK</h2>
        <p className="text-lg text-gray-400 mt-2">My Go-To Tools for Crafting Solutions</p>
      </motion.div>

      <div className="space-y-10">
        {/* First Row - left to right */}
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 justify-center"
        >
          {firstRow.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 rounded-xl bg-black/30 backdrop-blur-md
                hover:scale-110 transition-transform duration-300 shadow-lg w-32 h-32 justify-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain filter drop-shadow-md"
              />
              <span className="text-sm text-gray-200">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Second Row - right to left */}
        <motion.div
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 justify-center"
        >
          {secondRow.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 rounded-xl bg-black/30 backdrop-blur-md
                hover:scale-110 transition-transform duration-300 shadow-lg w-32 h-32 justify-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain filter drop-shadow-md"
              />
              <span className="text-sm text-gray-200">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
