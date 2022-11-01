import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import CaseCard from "./components/Card/CaseCard";

function App() {
  return (
    <div className="home-page-wrapper">
      <section className="initial-view">
                  <div className="information-container">
                    <div>
                      <div className="introduction-box">
                        <h1>Hello! I am Angelic</h1>
                        <h3>UX desigenr</h3>
                        <p>
                          A passionate UX Designer, Researcher and Digital designer
                          Enthusiast with slight frontend developing experience. Although
                          my MAIN KIT is: UX, Digital Design and UX writing.
                        </p>
                        <div className="button-grouip">
                          <button>View my CV</button>
                          <button>Contact me</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./cv-assets/cvpic.svg" alt="profile"></img>
                    </div>
                  </div>
        <div className="scroll-to-explore">
          <p>Sroll to explore</p>
          <p>___Icon down___</p>
        </div>
      </section>
      <section>
       
        <Container>
      <Row>
        <Col xs={{ order: 'last' }}><CaseCard/></Col>
        <Col xs><CaseCard/></Col>
        <Col xs={{ order: 'first' }}><CaseCard/></Col>
      </Row>
    </Container>
        
       
       
      </section>
    </div>
  );
}

export default App;
