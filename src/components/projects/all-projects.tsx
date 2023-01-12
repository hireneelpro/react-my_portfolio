import "./all-projects.scss";
// import { projectData } from "../../assets/data";
import { addShake, removeShake } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectProjects } from "../../redux-store/projects/projects-selector";
export type Project = {
  id: number;
  name: string;
  imageUrl: string;
  netlifyUrl: string;
};

const AllProjects = () => {
  const allProjects = useSelector(selectProjects);
  console.log(allProjects);
  const projectData = allProjects[0].data;
  return (
    <div className="all-projects">
      <h1 onMouseEnter={addShake} onMouseLeave={removeShake}>
        All Projects
      </h1>
      <div className="all-projects-container">
        {projectData.map((each: Project) => {
          return (
            <div key={each.id} className="single-project">
              <div className="project-image-container">
                <span className="load">{each.name}</span>
                <a
                  href={each.netlifyUrl}
                  className="project-link"
                  target="blank"
                >
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
