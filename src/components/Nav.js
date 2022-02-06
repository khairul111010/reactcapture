import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/ourwork">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/ourwork" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contactus">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactus" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  h1 {
    font-family: "Lobster", cursive;
    padding-bottom: 0.5rem;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -70%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
