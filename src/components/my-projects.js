import { Link } from "react-router-dom";
import "./my-projects.scss";
import FeaturedProject from "./featured-project";
import AllProjects from "./all-projects";
const MyProjects = () => {
  return (
    <div className="my-projects">
      <h2>Featured project</h2>
      <FeaturedProject />
      <AllProjects />

      {/* <Link to="/project">project Details</Link> */}
    </div>
  );
};

export default MyProjects;
