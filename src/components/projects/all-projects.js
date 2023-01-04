import "./all-projects.scss";
import { projectData } from "../../assets/data";

const AllProjects = () => {
  console.log(projectData);
  return (
    <div className="all-projects">
      <h1>All Projects</h1>
      <div className="all-projects-container">
        {projectData.map((each) => {
          return (
            <div key={each.id} className="single-project">
              <div className="project-image-container">
                <span className="load" ></span>
                <a href="#" className="project-link" target="blank">
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
