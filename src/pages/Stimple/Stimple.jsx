import React, { useEffect } from "react";
import CaseStudyHeading from "../../components/CaseStudyHeading/CaseStudyHeading";
import PointList from "../../components/PointList/PointList";
import "./_Stimple.scss";
const Stimple = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="stimple-page-wrapper">
      <CaseStudyHeading caseNumber={2} case={"Stimple"} />
      <>
        <PointList title="The Challenge" index={1} lastItem={false}>
          <p>
            Ever since I have used the student-platform called “Ping Pong”, I
            found it to be more complicated than than it had to be.
          </p>
          <p>
            Although the second student-platform I currently use,“ITHS Distans”,
            had a much less cluttered functions and more pleasing aesthethic
            appearance, there were still some room for improvements according to
            the students who used it as well.
          </p>
          <p>
            This case study was inspired by the student platform called ping
            pong during a coding assignment in my frontend development
            education.
          </p>
          <p>
            We and others took the opportunity and coded the firstversion of the
            app.
          </p>
          <p>
            With 1 year later, I decided to practice and update Stimple by
            following a UX Process for better user-centered design.
          </p>
        </PointList>
        <PointList title="Discovery Phase" index={2} lastItem={false}>
          <p>
            We will conduct Interviews with 5 students who has not used or have
            used the platform.
            <br />
            This is to gather qualative data and discover problems and
            frustrations of both first time users and frequent users.
          </p>
          <ul style={{ lineHeight: "30px" }}>
            <li>
              Transcribe the interviews for codes and themes for later
              construction of survey questions.
            </li>
            <li>
              Create Quantitive and Qualitive Question surveys for students to
              find out more quantitive data along with more insights.
            </li>
            <li>
              Once the survey has gathered 30 answers we compile all the data
              into quantitive data to find a persona and situationas.
            </li>
          </ul>
        </PointList>
        <PointList title="Heauristic Evaluation" index={3} lastItem={false}>
          <p>
            Before the usability testing we conduct the Heuristic Evaluation in
            order to eliminate the obvious small problems.{" "}
          </p>
        </PointList>
        <PointList title="Usability Testing" index={4} lastItem={false}>
          <p>
            After the Heauristic evaluation, we conduct a strict structured Test
            Labb with a moderator, observator, and a test user that will preform
            scenarios with metrics applied to each of them.
          </p>
        </PointList>
        <PointList title="Define Phase " index={5} lastItem={false}>
          <p>
            We do multiple workshops together in order to find better solutions
            and design sketches to Stimple.
          </p>
          <p>
            Our objective is to have design suggestions for each “How might
            we’s”.
          </p>
        </PointList>
        <PointList title="Develope Phase" index={6} lastItem={false}>
          <p>
            With designsketches and solutions for each HMW’s we create a Design
            System in order to faster prototype the app together.
          </p>
          <ul style={{ lineHeight: "30px" }}>
            <li>After that we will create wireframes.</li>
            <li>Discuss which wireframes we will focus building from.</li>
            <li>Vote the best wireframes.</li>
          </ul>
          <p>With wireframes ready we create the first prototype.</p>
          <p>
            We preform a usability test on our prototype and contruct a customer
            journey in order to solve the pain points of the users.
          </p>
        </PointList>
        <PointList title="What I hope to learn" index={7} lastItem={true}>
          <p>
            I would really like learn how to do user research better.
            <br />I also hope to improve better as a moderator along with
            constructing a better usability test in this case study.
          </p>
          <p>
            Another thing I hope to become better at is the prototyping skills.
            <br />
            Having a Hi-Fi Design is important after all in order to showcase to
            a future client.
          </p>
        </PointList>
      </>
    </div>
  );
};

export default Stimple;
