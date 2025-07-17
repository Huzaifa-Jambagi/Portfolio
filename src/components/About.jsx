import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     I’m a software developer who’s passionate about crafting clean, efficient code.
     I am proficient in Node.js, React.js, MongoDB, and Java DSA, 
     and I have been working on a range of MERN stack projects focused on building scalable web solutions      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");