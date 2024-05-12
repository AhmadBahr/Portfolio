import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faGit,
  faDocker,
  faLinux,
  faMicrosoft,
  faBootstrap,
  faSass,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./TechStack.css";
import photoshop from "../../assets/icons8-photoshop.svg";
import illustrator from "../../assets/icons8-illustrator.svg";
import jest from "../../assets/icons8-jest-can-collect-code-coverage-information-from-entire-projects-24.png";
import postman from "../../assets/icons8-postman-is-the-only-complete-api-development-environment-24.png";
import sql from "../../assets/icons8-sql-50.png";
import mongo from "../../assets/icons8-database-50.png";
import postgres from "../../assets/postgresql.svg";
import expressjs from "../../assets/expressjs.svg";
import git from "../../assets/git.svg";
import babel from "../../assets/babel.svg";
import slack from "../../assets/slack.svg";
import jira from "../../assets/jira.svg";


const TechStack = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <div id="tech-stack" className="tech-stack-container">
      <h2 className="tech-stack-header">Tech Stack</h2>
      <p className="tech-stack-subtitle">Technologies I've Been Working With</p>
      <div className="icon-row">
        <div className="icon-column fade-right" data-aos="fade-right">
          <FontAwesomeIcon icon={faHtml5} title="HTML" className="icon" />
          <FontAwesomeIcon icon={faCss3Alt} title="CSS" className="icon" />
          <FontAwesomeIcon icon={faJs} title="JavaScript" className="icon" />
          <FontAwesomeIcon icon={faReact} title="React" className="icon" />
          <FontAwesomeIcon icon={faNodeJs} title="Node.js" className="icon" />
          <FontAwesomeIcon icon={faPython} title="Python" className="icon" />
          <FontAwesomeIcon icon={faJava} title="Java" className="icon" />
          <FontAwesomeIcon icon={faGit} title="Git" className="icon" />
          <FontAwesomeIcon icon={faDocker} title="Docker" className="icon" />
          <FontAwesomeIcon icon={faLinux} title="Linux" className="icon" />
          <FontAwesomeIcon icon={faMicrosoft} title="Microsoft" className="icon" />
          <img src={slack} alt="Slack" title="Slack" className="icon" />         
          <img src={jira} alt="Jira" title="Jira" className="icon" />
          <svg width="64px" height="64px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z" stroke="#ffffff" stroke-linejoin="round"></path> </g></svg>        </div>
          <div className="icon-column fade-left" data-aos="fade-left">
          <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" className="icon" />
          <FontAwesomeIcon icon={faSass} title="Sass" className="icon" />
          <img src={photoshop} alt="Photoshop" title="Photoshop" className="icon" />          
          <FontAwesomeIcon icon={faFigma} title="Figma" className="icon" />
          <FontAwesomeIcon icon={faGithub} title="GitHub" className="icon" />
          <img src={jest} alt="Jest" title="Jest" className="icon" />
          <img src={postman} alt="Postman" title="Postman" className="icon" />
          <img src={sql} alt="SQL" title="SQL" className="icon" />
          <img src={mongo} alt="MongoDB" title="MongoDB" className="icon" />
          <img src={illustrator} alt="Adobe Illustrator" title="Adobe Illustrator" className="icon" />
          <img src={postgres} alt="PostgreSQL" title="PostgreSQL" className="icon" />
          <img src={expressjs} alt="Express.js" title="Express.js" className="icon" />
          <img src={git} alt="Git" title="Git" className="icon" />
          <img src={babel} alt="Babel" title="Babel" className="icon" />

        </div>
      </div>
    </div>
  );
};

export default TechStack;
