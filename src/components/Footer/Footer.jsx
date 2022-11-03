import "./_Footer.scss";
import React from "react";
import { IoLogoLinkedin, IoMdRocket } from "react-icons/io";
import { IconContext } from "react-icons";
const Footer = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer">
      <ul className="content">
        <li></li>
        <li>
          <div className="center-content">
            {" "}
            <IconContext.Provider
              value={{ className: "shared-class", size: 40, color: "white" }}
            >
              <IoLogoLinkedin />
            </IconContext.Provider>
          </div>
          <p>connect with me</p>
        </li>
        <li onClick={scrollToTop} className="vibrate-1">
          <IconContext.Provider
            value={{ className: "shared-class", size: 40, color: "white" }}
          >
            <IoMdRocket />
          </IconContext.Provider>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
