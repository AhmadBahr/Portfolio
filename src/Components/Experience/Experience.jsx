import React from 'react';
import './Experience.css';

const Experience = () => {
  
  return (
    <div className="experience-container">
      <h2 className="experience-header">Experience</h2>
      <div className="experience-item">
        <h3 className="experience-title"></h3>
        <p className="experience-company"></p>
        <p className="experience-duration"></p>
        <ul className="experience-responsibilities">
          <li>Developed responsive user interfaces using HTML, CSS, and JavaScript.</li>
          <li>Collaborated with backend developers to integrate frontend with backend systems.</li>
          <li>Implemented design mockups and wireframes into functional web applications.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3 className="experience-title"></h3>
        <p className="experience-company"></p>
        <p className="experience-duration"></p>
        <ul className="experience-responsibilities">
          <li>Assisted in the creation of wireframes, mockups, and prototypes.</li>
          <li>Conducted user research and gathered feedback for iterative design improvements.</li>
          <li>Collaborated with development team to ensure design feasibility and implementation.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
