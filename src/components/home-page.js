import "./home-page.scss";
import photo from "../images/my profile photo.jpg";
import { addShake,removeShake } from "../utils/utils";
const MainPage = () => {

  return (
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
        <img className="profile-photo" src={photo} alt="Hiren Patel" />
      </div>
    </div>
  );
};
export default MainPage;
