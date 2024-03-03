import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About Me</h2>
      <p className="about-description">
        I'm Ahmad Bahr, a junior frontend developer passionate about creating user-friendly interfaces. Proficient in HTML, CSS, and JavaScript, I enjoy collaborating on projects that blend creativity with functionality. With a knack for problem-solving and a drive for continuous learning, I'm eager to contribute to dynamic teams and bring innovative ideas to life.
      </p>
      <div className="about-details">
        <div className="column">
          <p><strong>Email:</strong> ahmad@example.com</p>
          <p><strong>Location:</strong> Your City, Your Country</p>
          <p><strong>Age:</strong> 25</p>
          <p><strong>GPA:</strong> 3.8</p>
        </div>
        <div className="column">
          <p><strong>Nationality:</strong> Your Nationality</p>
          <p><strong>Education:</strong> Bachelor of Science in Computer Science</p>
          <p><strong>Degree:</strong> Bachelor's</p>
        </div>
      </div>
      <div className="additional-info">
        <div className="info-box">
          <div className="info-item">
          <p>4</p>
          <p><strong>Months of Experience</strong></p>
          
          </div>
          <div className="info-item">
            <p>10</p>
            <p><strong>Completed Projects</strong></p>
          </div>
          <div className="info-item">
            <p>0</p>
            <p><strong>Satisfied Clients</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
