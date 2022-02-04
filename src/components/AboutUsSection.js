import aboutus from "../img/aboutus.jpg";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
const AboutUsSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h1>We are here to make</h1>
          </Hide>
          <Hide>
            <h1>
              {" "}
              your <span>dreams</span>
            </h1>
          </Hide>
          <Hide>
            <h1>come true.</h1>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe in
          sint commodi iste placeat vel, et dolor officia odio praesentium
          molestiae hic voluptatum minus quod?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={aboutus} alt="About us" />
      </Image>
    </About>
  );
};

export default AboutUsSection;
