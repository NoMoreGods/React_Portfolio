import React from "react";
import { BsTelegram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://t.me/Mark_Nmg_Novikov">
        <BsTelegram />
      </a>
      <a href="https://github.com/NoMoreGods">
        <ImGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
