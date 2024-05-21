import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faJava,
  faGit,
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
import chakraIcon from "../../assets/chakraui-svgrepo-com.svg";
import tailwindIcon from "../../assets/tailwind.svg"; 
import reduxIcon from "../../assets/redux-fill-svgrepo-com.svg"; 
import jqueryIcon from "../../assets/jqueryy.png";

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
          <FontAwesomeIcon icon={faJava} title="Java" className="icon" />
          <FontAwesomeIcon icon={faGit} title="Git" className="icon" />
          <FontAwesomeIcon icon={faLinux} title="Linux" className="icon" />
          <FontAwesomeIcon icon={faMicrosoft} title="Microsoft" className="icon" />
          <img src={slack} alt="Slack" title="Slack" className="icon" />         
          <img src={jira} alt="Jira" title="Jira" className="icon" />
          <img src={jqueryIcon} alt="jQuery" title="jQuery" className="icon jQueryIcon" />
          <img src={chakraIcon} alt="Chakra UI" title="Chakra UI" className="icon chakraIcon" />
          <img src={reduxIcon} alt="Redux" title="Redux" className="icon reduxIcon" />
        </div>
        <div className="icon-column fade-left" data-aos="fade-left">
          <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" className="icon" />
          <FontAwesomeIcon icon={faSass} title="Sass" className="icon" />
          <img src={photoshop} alt="Photoshop" title="Photoshop" className="icon" />          
          <FontAwesomeIcon icon={faFigma} title="Figma" className="icon" />
          <FontAwesomeIcon icon={faGithub} title="GitHub" className="icon" />
          <img src={jest} alt="Jest" title="Jest" className="Jesticon" />
          <img src={postman} alt="Postman" title="Postman" className="postmanicon" />
          <img src={sql} alt="SQL" title="SQL" className="icon" />
          <img src={mongo} alt="MongoDB" title="MongoDB" className="icon" />
          <img src={illustrator} alt="Adobe Illustrator" title="Adobe Illustrator" className="icon" />
          <img src={postgres} alt="PostgreSQL" title="PostgreSQL" className="icon" />
          <img src={expressjs} alt="Express.js" title="Express.js" className="icon" />
          <img src={git} alt="Git" title="Git" className="icon" />
          <img src={babel} alt="Babel" title="Babel" className="icon" />
          <img src={tailwindIcon} alt="Tailwind CSS" title="Tailwind CSS" className="icon tailwindIcon" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
