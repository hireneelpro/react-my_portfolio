import trends from "../../images/trends.png";
import "./featured-project.scss";

const FeaturedProject = () => {
  return (
    <div>
      <p className="project-name"> Project : trends clothing store</p>
      <div className="project">
        {/* ===== project image ===== */}
        <div className="project-image-container">
          <a href="https://trendstore.netlify.app/" target="blank">
            <img src={trends} alt="project:clothing store" />
          </a>
        </div>

        {/* ===== project details ===== */}

        <div className="project-details">
          <p className="project-text">
            {" "}
            This project is a modern online clothing store. It uses most of all
            the necessary features required to built a fully working modern
            website. This project is also deployed on netlify . Please click on
            image to see full project .
          </p>
          <div className="skill-btn-container">
            <button className="btn skill-btn">Html5</button>
            <button className="btn skill-btn">scss</button>
            <button className="btn skill-btn">javascript</button>
            <button className="btn skill-btn">react</button>
            <button className="btn skill-btn">firebase</button>
            <button className="btn skill-btn">firestore</button>
            <button className="btn skill-btn">redux</button>
            <button className="btn skill-btn">netlify</button>
            <button className="btn skill-btn">redux-thung</button>
            <button className="btn skill-btn">stripe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
