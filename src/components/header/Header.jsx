import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mark Novikov</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <div className="cta">
          <a href={CV} className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>

      <div className="header__info">
        <HeaderSocials />

        <div className="ME">
          <img src={ME} alt="Me" />
        </div>
        <div className="header__scroll-down">
          <span className="scroll-down">
            <a href="#contact">Scroll Down</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
