import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Button from "./components/Button/Button";
import CaseCard from "./components/Card/CaseCard";
import CardData from "./data/CardData.json";
import { BiDownArrow } from "react-icons/bi";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="home-page-wrapper">
      <section className="initial-view">
        <div className="information-container">
          <div className="introduction-box">
            <h1>Hello! I am Angelic</h1>
            <h3>UX designer</h3>
            <p>
              A passionate UX Designer, Researcher and Digital designer
              Enthusiast with slight frontend developing experience. Although my
              MAIN KIT is: UX, Digital Design and UX writing.
            </p>
            <div className="button-group">
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
              <Button variants="outlined">Contact me</Button>
            </div>
          </div>

          <div className="image-section">
            <img
              src="./cv-assets/cvpic.svg"
              alt="profile"
              height={350}
              width={350}
            ></img>
          </div>
        </div>
        <div className="scroll-to-explore">
          <span>Scroll To Explore</span>
          <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <BiDownArrow />
          </IconContext.Provider>
        </div>
      </section>
      <section className="case-study-container">
        <Container>
          <Row>
            {CardData.map((e) => {
              return (
                <Col xs key={e.title} className="row">
                  <CaseCard
                    title={e.title}
                    description={e.description}
                    to={e.to}
                    image={e.img}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
