import "./home-page.scss";
import photo from "../images/my profile photo.jpg";
import { addShake, removeShake } from "../utils/utils";
import About from "./about";
import Contact from "./contact-form";
import Skills from "./skills/skills";
import MyProjects from "./projects/my-projects";
const MainPage = () => {
  return (
    <div className="home-page">
      <div className="main-page">
        <h1
          onMouseEnter={addShake}
          onMouseLeave={removeShake}
          className="main-page-heading"
        >
          Hi,
          <br />I am{" "}
          <span style={{ color: "white" }} className="logo">
            H
          </span>
          iren <br /> Web Developer
        </h1>
        <h5 style={{ color: "white" }}>
          I believe in giving my best in whatever I perform
        </h5>
        <div className="image-container">
          <img
            className="profile-photo"
            src={require("../images/my profile photo.jpg")}
            alt="Hiren Patel"
          />
        </div>

      </div>
      {/* ===================== */}
      {/* <span className="scroll-here">scroll-here</span> */}
      <About />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
};
export default MainPage;
