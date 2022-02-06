import aboutus from "../img/aboutus.jpg";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
const AboutUsSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We are here to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe in
          sint commodi iste placeat vel, et dolor officia odio praesentium
          molestiae hic voluptatum minus quod?
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={aboutus} alt="About us" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutUsSection;
