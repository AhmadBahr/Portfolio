import React, { useEffect } from 'react';
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
} from '@fortawesome/free-brands-svg-icons';
import './TechStack.css';

const TechStack = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, []);

  return (
<div id="tech-stack" className="tech-stack-container"> 
  <h2 className="tech-stack-header">Tech Stack</h2>
  <p className="tech-stack-subtitle">Technologies I've Been Working With</p>
  <div className="icon-row">
    <div className="icon-column" data-aos="fade-right">
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
    </div>
    <div className="icon-column" data-aos="fade-left">
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
    </div>
  </div>
</div>

  );
}

export default TechStack;
