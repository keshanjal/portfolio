/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../Utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <motion.div
      variants={fadeIn(direction, "spring", index * 0.4, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <VerticalTimelineElement
        position={direction} // 👈 Sets left or right side
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[22px] md:text-[24px] font-bold">
            {experience.title}
          </h3>
          <p className="text-secondary text-[14px] md:text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-white/90 text-[14px] md:text-[15px] tracking-wide leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="work"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
    >
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className={`${styles.sectionSubText} text-center text-purple-400`}>
          What I have Done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
