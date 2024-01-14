import React from "react";
import "./footer.css";
import { BsTelegram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__loge">
        NmG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/Mark_Nmg_Novikov">
          <BsTelegram />
        </a>
        <a href="https://github.com/NoMoreGods">
          <ImGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NmG. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
