import styled from "styled-components";
import { Link } from "react-router-dom";
import aboutus from "../img/aboutus.jpg";
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} initial="hidden" animate="show"></Frame1>
        <Frame2 variants={slider} initial="hidden" animate="show"></Frame2>
        <Frame3 variants={slider} initial="hidden" animate="show"></Frame3>
        <Frame4 variants={slider} initial="hidden" animate="show"></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/ourwork/1">
          <Hide>
            <motion.img variants={photoAnim} src={aboutus} />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/ourwork/2">
          <Hide>
            <motion.img variants={photoAnim} src={aboutus} />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/ourwork/3">
          <Hide>
            <motion.img variants={photoAnim} src={aboutus} />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
