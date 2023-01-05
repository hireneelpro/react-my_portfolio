import "./my-projects.scss";
import FeaturedProject from "./featured-project";
import AllProjects from "./all-projects";
import { addShake,removeShake } from "../../utils/utils";
const MyProjects = () => {
  return (
    <div className="my-projects">
      <h1 onMouseEnter ={addShake} onMouseOut ={removeShake} >Featured project</h1>
      <FeaturedProject />
      <AllProjects />

      {/* <Link to="/project">project Details</Link> */}
    </div>
  );
};

export default MyProjects;
