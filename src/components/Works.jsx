/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from "../Utils/motion"
import GradientSpheres from "../components/GradientSpheres";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, link, deploy_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400
        }}
        className="bg-black/40 backdrop-blur-lg border border-white/10 p-5 rounded-2xl sm:w-[360px] w-full shadow-xl"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl object-cover" />
          <div className="absolute inset-0 gap-1 flex justify-end m-3">
            <div
              onClick={() => window.open(deploy_link, "_blank")}
              className="bg-gradient-to-br from-purple-600 to-fuchsia-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition"
            >
              <img src={link} alt="link" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-br from-purple-600 to-fuchsia-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] md:text-[24px]">{name}</h3>
          <p className="mt-2 text-white/80 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white overflow-hidden"
    >
      <div className="opacity-60 absolute inset-0 z-0">
        <GradientSpheres sphere1Class="gradient-sphere sphere-1" sphere2Class="gradient-sphere sphere-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={`${styles.sectionSubText} text-purple-300 text-center`}>My work</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 text-center text-white/80 text-[17px] max-w-3xl mx-auto leading-[30px]"
        >
          These projects reflect my journey and skills across Android development & full-stack development. Each one demonstrates my ability to create responsive, dynamic, and interactive applications.
        </motion.p>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
