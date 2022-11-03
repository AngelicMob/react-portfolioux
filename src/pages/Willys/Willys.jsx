import React, { useEffect } from "react";
import CaseStudyHeading from "../../components/CaseStudyHeading/CaseStudyHeading";
import PointList from "../../components/PointList/PointList";
import "./_Willys.scss";
const Willys = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imgBaseUrl = "./cv-assets/willys/";
  return (
    <div className="willys-page-wrapper">
      <CaseStudyHeading caseNumber={1} case={"Willys.se"} />
      <PointList title="The Challenge" index={1} lastItem={false}>
        <p>
          Our challenge as the design team was to make Willys.se the leading
          grocery shopping online for students between 20-30 years old.
        </p>
        <p>
          The project consisted of knowing our users by interviewing students
          that fit into the target audience in order to form a persona.
        </p>
      </PointList>
      <PointList title="Empathize" index={2} lastItem={false}>
        <p>
          The first stage involved a quantitive research via surveys that
          consisted of multiple questions.
        </p>
        <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
          Quantative data:
        </p>
        <p style={{ marginTop: "3px" }}>
          Total of 32 Questions that was important for the persona making.
        </p>

        <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
          Qualitive data:{" "}
        </p>
        <p style={{ marginTop: "3px" }}>
          which consisted of interviewing 4 students to discover the needs and
          frustrations of our users.
        </p>
      </PointList>
      <PointList title="What we discovered" index={3} lastItem={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <p style={{ width: "40%" }}>
            We had to narrow down top 3 most important informations of our
            users.
          </p>
          <img
            style={{ width: "60%" }}
            src={imgBaseUrl + "discovery-picture.svg"}
            hei
          />
        </div>
      </PointList>
      <PointList title="Testing" index={4} lastItem={false}>
        <p>
          In order to know what problems there were in the already existing
          website of Willys.se we planned and conducted a usability test.
        </p>
        <p>
          We identified many problems on the webite each scenario we tested
          with, but had to focus down to top 5 usability problems.
        </p>
        <p>
          The Hi Fidelity Design was based out of solving the usability issues
          we discovered.
        </p>
      </PointList>
      <PointList title="Results " index={5} lastItem={false}>
        <div style={{ display: "flex" }}>
          <img src={imgBaseUrl + "willyssc1.svg"} />
          <img src={imgBaseUrl + "willyssc2.svg"} />
        </div>

        <img src={imgBaseUrl + "willyssc3.svg"} />
      </PointList>
      <PointList title="What I could improve" index={6} lastItem={false}>
        <ul style={{ lineHeight: "30px" }}>
          <li>
            Having a better scenarios to test - The scenarios we tested could
            have been much more well constructed in general.{" "}
          </li>
          <li>
            Preform a workshop for better solutions before designing the first
            prototype.
          </li>
          <li>
            Have a test account available, more realiditc testing - The
            challenge for me was this lack of testing ground. Would have really
            wanted to preform a better usability test.
          </li>
        </ul>
      </PointList>
      <PointList title="What I learned" index={7} lastItem={true}>
        <p>
          This case study really taught me how to conduct real usability testing
          and also how I would like to do it more efficiently.
        </p>
        <p>
          One more important learning was the importance of choosing what top 5
          problems to focus designing a solution for in the first place, since
          it really affects the overall UX in the design.
        </p>
      </PointList>
    </div>
  );
};

export default Willys;
