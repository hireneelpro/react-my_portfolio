
import "./skills.scss"
const Skills = () => {
    return (
      <div className="skills">
        <h1>
          Skills & <br />
          Experience
            </h1>
            
            {/* ===== skills text ===== */}
        <p className="skills-text">
          The beggining of my journey as a web developer started before 2 years
          as a hobby. My son was studying software engineering and just by
          curiosity I started learning some of web developement fundamentals and
          languages.
          <br />
          <br />
          Today I am confidently create successful responsive websites that are
          fast, easy to use and built with best practices. The main area of my
          expertise is front-end development, HTML,CSS,JS,REACT,building small
          and medium web apps ,features,animations and coding interactive
          layouts.
          <br />
          <br />
          I have hands on experience to work with CONTAXT,REDUX, REDUX-THUNG,
          FIREBASE, FIRESTORE,PERSISTOR STORE etc. <br />
          <br />
          Apart from web developement, I have worked as a Electronic
          Technologists for 20 years in various small to large organisations and
          have excellent technical, communication and leadership qualities that
          are my valuable assets to be a successful software developer. Visit my{" "}
          <a
            href="https://www.linkedin.com/in/hiren-patel-86889525b/"
            target="blank"
          >
            LinkedIn Profile
          </a>{" "}
          for more details.
            </p>
            {/* ===== skill range ===== */}

            <div className="skills-range" >
                <div className="range-container">
                    <div className="range-value"></div>
                </div>
            </div>
      </div>
    );
}
export default Skills