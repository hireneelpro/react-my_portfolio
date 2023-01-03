import "./skills-range.scss"
import { skillsData } from "../../assets/skill-data";

const SkillsRange = () => {
    
    return (
      <div className="skills-range">
        {skillsData.map((each) => {
          return (
            <div key={each.id} className="single-skill">
              <h5 className="skill-name">{each.skillName}</h5>
              <div className="value">
                <div
                  style={{
                    width: `${each.skillAchieved}%`,
                    backgroundColor: each.color,
                  }}
                  className="value-achieved"
                ></div>
              </div>
            </div>
          );
        })}

        {/* */}
      </div>
    );
}





export default SkillsRange