import PointList from "../../components/PointList/PointList"
import React from 'react'
import './_Timata.scss'
const Timata = () => {
    return(
       <div className="page-wrapper">
        <PointList title="The Challenge" index={1} lastItem={false}>
        <p style={{ paddingRight: "20px", lineHeight: "28px" }}>
          This project was very exciting and fun to really create a design
          system, atoms, molecules, organisms of an app. <br /> To apply design
          system into the prototypes was really great practice as a UX-Designer
          for me. By using auto layout, components and reuseable components, the
          practice would prove very benefitial in creating a reuseable design
          system for other designers in the team.
        </p>
      </PointList>       
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
          This case study was inspired by the student platform called ping pong
          during a coding assignment in my frontend development education.
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
          This case study was inspired by the student platform called ping pong
          during a coding assignment in my frontend development education.
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
       </div>
   
       
    )
}

export default Timata