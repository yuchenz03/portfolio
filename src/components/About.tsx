import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/About.scss";
import abouticon from "../assets/images/abouticon.png";
import skillsicon from "../assets/images/skillsicon.png";
import campusicon from "../assets/images/campusicon.png";

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Hi, I'm Yuchen!</h1>
        <div className="skills-grid">
          <div className="skill">
            <img src={abouticon} alt="About Icon" className="skill-icon" />
            <h3>About me</h3>
            <p>
              Welcome to my page! My name is Yuchen Zhou, and I'm a sophomore
              studying <b>Computer Science</b> with a concentration in{" "}
              <b>Human-Computer Interaction</b> at Carnegie Mellon University. I
              grew up in Dubai, and I'm currently based in Pittsburgh while
              atttending CMU. During my free time, I'll often be playing
              volleyball or frisbee, exploring new cafes, or hanging out with
              friends. I'm always excited to meet with new people, so feel free
              to reach out and connect via email or LinkedIn!
            </p>
            {/* maybe put picture here later on? */}
          </div>

          <div className="skill">
            <img src={campusicon} alt="Campus Icon" className="skill-icon" />
            <h3>Campus Leadership and Involvement</h3>
            <p>
              I'm proud to be playing an active role in my campus community
              through various leadership positions and involvements! Some of my
              current roles include being the <b>Head of External Outreach</b>{" "}
              at Scottylabs (CMU's premier technology club!), a backstroker on
              the <b>Varsity Swim Team</b>, and an <b>Orientation Counselor</b>{" "}
              for incoming first-year students.
            </p>
          </div>

          <div className="skill">
            <img src={skillsicon} alt="Skills Icon" className="skill-icon" />
            <h3>Skills and Interests</h3>
            <p>
              I'm passionate about building projects that take advantage of
              rapidly innovating technologies to reinvent solutions to existing
              problems or address emerging challenges, especially within the
              domains of sports, healthcare, and education. Some technologies
              that I've been recently exploring are LLMs and the React
              development ecosystem, and I'm working on learning C++!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
