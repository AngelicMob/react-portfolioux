import PointList from "../../components/PointList/PointList";
import React, { useEffect } from "react";
import "./_Timata.scss";
import CaseStudyHeading from "../../components/CaseStudyHeading/CaseStudyHeading";

const Timata = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imgBaseUrl = "./cv-assets/timata/";
  return (
    <div className="page-wrapper">
      <CaseStudyHeading caseNumber={3} case={"Timata"} />
      <PointList
        title="Heuristic Evaluation & Research"
        index={1}
        lastItem={false}
      >
        <div style={{ display: "flex", marginBottom: "-90px" }}>
          <p style={{ lineHeight: "28px" }}>
            After we decided to stick with the tabatta app idea, we decided to
            do research on the top 2 competitors. <br />
            Mainly focused on the top 1 which was: <br />
            <b>Tabata Timer app.</b>
            <br />
            We preformed a heuristic evaluation on how usable the current design
            of the competitor was and found many problems.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "20px",
            }}
          >
            <img src={imgBaseUrl + "before.svg"} style={{ height: "70%" }} />
          </div>
        </div>
      </PointList>
      <PointList title="LOFI Sketches" index={2} lastItem={false}>
        <div style={{ display: "flex" }}>
          <p style={{ width: "50%", lineHeight: "28px" }}>
            We started to brainstorm the different functions by designing for
            each functions. <br />
            We voted on the best sketch we wanted to progress with.
          </p>
          <img style={{ width: "50%" }} src={imgBaseUrl + "Lofi.svg"} />
        </div>
      </PointList>
      <PointList title="Moodboards" index={3} lastItem={false}>
        <p style={{ lineHeight: "28px" }}>
          Me and the team designed different moodboards, but then went along
          with the one we agreed fit best for the app. Which was the{" "}
          <b>Dark mode pop.</b>
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={imgBaseUrl + "mb-1.svg"} height={450} width={500} />
          <div style={{ borderBottom: "1px solid #125a59" }}>
            <h3 style={{ margin: "0px" }}>vs</h3>
          </div>
          <img src={imgBaseUrl + "mb-2.svg"} height={450} width={500} />
        </div>
      </PointList>
      <PointList title="HIFI Sketches" index={4} lastItem={false}>
        <div style={{ display: "flex" }}>
          <p style={{ lineHeight: "28px" }}>
            We started to create the typohraphy, spacing and atomic, molecule
            and organism details of the finished prototypes.
          </p>
          <img src={imgBaseUrl + "result-start.svg"} height={350} width={400} />
        </div>
      </PointList>
      <PointList title="Design System & Typography" index={5} lastItem={false}>
        <p style={{ lineHeight: "28px" }}>
          We started to create the typohraphy, spacing and atomic, molecule and
          organism details of the finished prototypes.
        </p>
        <img src={imgBaseUrl + "design-system.svg"} />
      </PointList>
      <PointList title="Define Phase " index={6} lastItem={true}>
        <p style={{ paddingRight: "20px", lineHeight: "28px" }}>
          This project was very exciting and fun to really create a design
          system, atoms, molecules, organisms of an app. <br /> To apply design
          system into the prototypes was really great practice as a UX-Designer
          for me. By using auto layout, components and reuseable components, the
          practice would prove very benefitial in creating a reuseable design
          system for other designers in the team.
        </p>
      </PointList>
    </div>
  );
};

export default Timata;
