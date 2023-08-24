import React from "react";
import style from "./Footer.module.css";
import linkedinIcon from ".././../assets/img/linkedin.svg";
import githubIcon from ".././../assets/img/github.svg";

const Footer = () => {
  return (
    <footer>
      <p>Copyright Kevin Mamani 2023</p>
      <div className={style.social}>
        <a href="https://github.com/KevinMCJ" target="_blank"><img src={githubIcon} alt="Github icon" /></a>
        <a href="https://www.linkedin.com/in/kevin-mamani-capuma-253507264/" target="_blank"><img src={linkedinIcon} alt="Linkedin icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;
