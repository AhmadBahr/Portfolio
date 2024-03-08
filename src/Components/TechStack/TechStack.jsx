import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs,
  faPython,
  faAngular,
  faVuejs,
  faBootstrap,
  faSass,
  faPhp,
  faGit,
  faWordpress,
  faJava,
  faSwift,
  faDocker,
  faAws,
  faGoogle,
  faMicrosoft,
  faLinux,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import './TechStack.css';

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-header">Tech Stack</h2>
      <p className="tech-stack-subtitle">Technologies I've Been Working With</p>
      <div className="icon-container">
        <div className="icon-item" title="HTML5">
          <FontAwesomeIcon icon={faHtml5} className="icon" />
        </div>
        <div className="icon-item" title="CSS3">
          <FontAwesomeIcon icon={faCss3Alt} className="icon" />
        </div>
        <div className="icon-item" title="JavaScript">
          <FontAwesomeIcon icon={faJs} className="icon" />
        </div>
        <div className="icon-item" title="React">
          <FontAwesomeIcon icon={faReact} className="icon" />
        </div>
        <div className="icon-item" title="Node.js">
          <FontAwesomeIcon icon={faNodeJs} className="icon" />
        </div>
        <div className="icon-item" title="Python">
          <FontAwesomeIcon icon={faPython} className="icon" />
        </div>
        <div className="icon-item" title="Angular">
          <FontAwesomeIcon icon={faAngular} className="icon" />
        </div>
        <div className="icon-item" title="Vue.js">
          <FontAwesomeIcon icon={faVuejs} className="icon" />
        </div>
        <div className="icon-item" title="Bootstrap">
          <FontAwesomeIcon icon={faBootstrap} className="icon" />
        </div>
        <div className="icon-item" title="Sass">
          <FontAwesomeIcon icon={faSass} className="icon" />
        </div>
        <div className="icon-item" title="PHP">
          <FontAwesomeIcon icon={faPhp} className="icon" />
        </div>
        <div className="icon-item" title="Git">
          <FontAwesomeIcon icon={faGit} className="icon" />
        </div>
        <div className="icon-item" title="WordPress">
          <FontAwesomeIcon icon={faWordpress} className="icon" />
        </div>
        <div className="icon-item" title="Java">
          <FontAwesomeIcon icon={faJava} className="icon" />
        </div>
        <div className="icon-item" title="Swift">
          <FontAwesomeIcon icon={faSwift} className="icon" />
        </div>
        <div className="icon-item" title="Docker">
          <FontAwesomeIcon icon={faDocker} className="icon" />
        </div>
        <div className="icon-item" title="AWS">
          <FontAwesomeIcon icon={faAws} className="icon" />
        </div>
        <div className="icon-item" title="Google Cloud">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
        </div>
        <div className="icon-item" title="Microsoft Azure">
          <FontAwesomeIcon icon={faMicrosoft} className="icon" />
        </div>
        <div className="icon-item" title="Linux">
          <FontAwesomeIcon icon={faLinux} className="icon" />
        </div>
        <div className="icon-item" title="GitHub">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
