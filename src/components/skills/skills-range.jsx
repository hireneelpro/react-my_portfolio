import "./skills-range.scss";
import { skillsData } from "../../assets/skill-data";
import { useEffect, useState } from "react";

const SkillsRange = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadSkills();
    window.addEventListener("scroll", loadSkills);

    return () => {
      window.removeEventListener("scroll", loadSkills);
    };
  }, []);

  //===== Load ======//
  const loadSkills = () => {
    // console.log("load success");
    const skillsRange = document.querySelector(".skills-range");
    const skillsRangeBottom = skillsRange.getBoundingClientRect().bottom;
    // console.log(skillsRangeBottom);

    if (skillsRangeBottom < 1000) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  };

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
                className={isLoaded ? "load value-achieved" : "value-achieved "}
              ></div>
            </div>
          </div>
        );
      })}

      {/* */}
    </div>
  );
};

export default SkillsRange;
