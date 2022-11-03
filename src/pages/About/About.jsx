import React from "react";
import Button from "../../components/Button/Button";
import "./About.scss";
const About = () => {
  const IntroText =
    "Hi!, \n I am Angelic AnderssonA \n UX designer based in Gothenburg, Sweden";

  const WhyUXText =
    "My entry point within IT started with programming. , The education programs I’ve attended came with 6 month period of internship. During my internship I’ve come to a discovery of what I really wanted to focus within the IT. UX! \n Yes, I started to understand more during my first intership and second intership what UX really is, the more I wanted to pursue a carrier that was much more about user centered design and visual elements rather than logical and functional, and that the design has meaning and purpose and thus my turning point. \n \n\n  I fell in love with the process of discovery, empthazy phases to get to know the real problems and provide solutions to them. It’s real fun to me when the designs you create actually solve problems. And I am very interested to become better at this User research part.";

  return (
    <div className="about-page-wrapper">
      <section
        className="about-section"
        style={{ backgroundImage: "url(/cv-assets/about/gtb.png)" }}
      >
        <div className="intro-text">
          <p>{IntroText}</p>
        </div>
      </section>

      <section className="why-ux-section">
        <div className="why-ux-container">
          <h3>Why a UX Designer?</h3>
          <p style={{  }}>{WhyUXText}</p>
        </div>
      </section>

      <section
        className="outside-work-section"
        style={{ backgroundImage: "url(/cv-assets/about/aboutFooter.png)" }}
      >
        <div className="about-me-card">
          <div className="left-text">
            <h3>Outside Work</h3>
            <p>
              As a person I am very curious, enthusiastic, love taking long
              walks in the forests, maybe enjoy a nice coffee and freshly baked
              pasteries.{" "}
            </p>
            <p>
              Along of other things I do is cooking, gaming both online & single
              player games and writing my book.
            </p>
            <p>
              World building, character creation is also one of my many
              interests and fascinations! Hence my book writing interest.
            </p>
            <p>
              I am also very fascinated by art and how you can create things out
              of your mind. Anything out of fantasies into art you can look at,
              it’s a beautiful thing.
            </p>
            <Button variants="primary">
              <a
                href="/pdf/CV-en.pdf"
                download
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Download CV
              </a>
            </Button>
          </div>
          <div className="right">
            <img
              src="./cv-assets/cvpic.svg"
              alt="profile"
              height={350}
              width={350}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
