import "./all-projects.scss";
import { projectData } from "../../assets/data";
import { addShake,removeShake } from "../../utils/utils";

const AllProjects = () => {
  console.log(projectData);
  return (
    <div className="all-projects">
      <h1 onMouseEnter={addShake} onMouseLeave={removeShake} >All Projects</h1>
      <div className="all-projects-container">
        {projectData.map((each) => {
          return (
            <div key={each.id} className="single-project">
              <div className="project-image-container">
                <span className="load" >{each.name}</span>
                <a href ={each.netlifyUrl}  className="project-link" target="blank">
                  <img
                    className="project-image"
                    src={each.imageUrl}
                    alt={each.name}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
