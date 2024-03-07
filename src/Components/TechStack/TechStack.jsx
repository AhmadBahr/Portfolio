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
        <div className="icon-item">
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <p className="icon-title">HTML5</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faCss3Alt} className="icon" />
          <p className="icon-title">CSS3</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faJs} className="icon" />
          <p className="icon-title">JavaScript</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faReact} className="icon" />
          <p className="icon-title">React</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faNodeJs} className="icon" />
          <p className="icon-title">Node.js</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faPython} className="icon" />
          <p className="icon-title">Python</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faAngular} className="icon" />
          <p className="icon-title">Angular</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faVuejs} className="icon" />
          <p className="icon-title">Vue.js</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faBootstrap} className="icon" />
          <p className="icon-title">Bootstrap</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faSass} className="icon" />
          <p className="icon-title">Sass</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faPhp} className="icon" />
          <p className="icon-title">PHP</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faGit} className="icon" />
          <p className="icon-title">Git</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faWordpress} className="icon" />
          <p className="icon-title">WordPress</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faJava} className="icon" />
          <p className="icon-title">Java</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faSwift} className="icon" />
          <p className="icon-title">Swift</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faDocker} className="icon" />
          <p className="icon-title">Docker</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faAws} className="icon" />
          <p className="icon-title">AWS</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          <p className="icon-title">Google Cloud</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faMicrosoft} className="icon" />
          <p className="icon-title">Microsoft Azure</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faLinux} className="icon" />
          <p className="icon-title">Linux</p>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <p className="icon-title">GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
