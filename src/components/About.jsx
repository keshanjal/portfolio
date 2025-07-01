/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }
          }
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled Competitive Programmer and a proficient Android App Developer and MERN Stack Developer. My expertise spans both algorithmic problem-solving and Android Application development using Kotlin, full-stack web application development using MongoDB, Express.js, React.js, and Node.js. This dual proficiency equips me to tackle complex challenges with precision and create efficient, user-friendly web and app solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 cursor-pointer">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");