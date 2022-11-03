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
           
          </div>
          <a className="linkedIn-link"
            href="https://www.linkedin.com/in/angelic-andersson-20a522192/"
            target="blank"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
            }}
          >
             <IconContext.Provider
              value={{ className: "shared-class", size: 40, color: "white"}}
            >
              <IoLogoLinkedin />
            </IconContext.Provider>
            <span style={{marginLeft: "10px"}}>Connect with me</span>
          </a>
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
