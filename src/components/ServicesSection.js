import services from "../img/services.jpg";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <>
      <Services>
        <Image>
          <img src={services} alt="services" width={250} />
        </Image>
        <ServicesDescription>
          <h2>
            High <span>qualities</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Clock</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphram</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Money</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </ServicesDescription>
      </Services>
    </>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 100%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  width: 20vh;
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    padding: 1rem;
    background-color: white;
    color: black;
  }
`;

const ServicesDescription = styled(Description)`
  padding-left: 5rem;
  padding-right: 0;
  @media (max-width: 1200px) {
    padding-left: 0rem;
  }
`;

export default ServicesSection;
