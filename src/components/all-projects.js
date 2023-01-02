import "./all-projects.scss"
import { projectData } from "../assets/data"

const AllProjects = () => {

    console.log(projectData);
    return (
        <div className="all-projects" >
            <h2>All Projects</h2>
            <div className="all-projects-container" >{projectData.map((each) => {
                return (
                    <div key={each.id} className="single-project">
                        <img className="project-image" src={each.imageUrl} alt={each.name}/>
                    </div>
                )

            })
            
            
            }</div>

        </div>
    )
}

export default AllProjects