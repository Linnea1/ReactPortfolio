import skills from "../data/skills.json";
import skillsImage from "../assets/images/skills.png";
import "./About.css";
const programming = skills.programming;
const frameworks = skills.frameworks;
const tools = skills.tools;
const styling = skills.styling;

const print = (array) => array.map((a) => <div key={a}>{a}</div>);

function About() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>What I do</h1>
        <div className="about-image-mobile">
          <img src={skillsImage} alt="Skills" />
        </div>
        <div className="about">
          <div className="about-text">
            <p>
              Here are some of the skills I have acquired through my projects
              and experiences. Some of these skills come from my studies in web
              development at Malmö University, others from work experience, and
              some are self-taught. I am always eager to learn more and improve
              my abilities.
            </p>
            <div className="skills-container">
              <div>
                <h2>Programming Languages</h2>
                <div>{print(programming)}</div>
              </div>
              <div>
                <h2>Frameworks & Libraries</h2>
                <div> {print(frameworks)}</div>
              </div>
              <div>
                <h2>Tools & Platforms</h2>
                <div>{print(tools)}</div>
              </div>
              <div>
                <h2>Styling & Design</h2>
                <div> {print(styling)}</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={skillsImage} alt="Skills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
