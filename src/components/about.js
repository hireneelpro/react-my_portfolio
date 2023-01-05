import "./about.scss";
import { addShake,removeShake } from "../utils/utils";

const About = () => {
  return (
    <div className="about ">
      <h1 onMouseEnter={addShake} onMouseLeave={removeShake}>
        Me, Myself & i
      </h1>
      <div className="about-text">
        <p>
          I am a freelance Front End Web Developer located in Toronto, Canada. I
          am passionate about web development, UI effects, animation and
          creating intuititive, dynamic user experiences.
          <br />
          <br />
          Well-organised person, problem solver, communicative and high
          attention to details. Capable of continuous learning from senior
          developers with minimum help and guidance. Eager to tackle more
          complex problems , working and applying skills in larger development
          team .
          <br />
          <br />
          Love technology, outdoor activities, gardening and yoga. A family
          person and father of a software engineer son, who is my Guru also.
        </p>
      </div>
      <div className="pattern"></div>
    </div>
  );
};

export default About;
