import React from 'react';
import './About.css';
import { Transition } from 'react-transition-group';


export const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-header" data-aos="fade-up">About Me</h2>
      <div className='about-desc-wrap'>
        <p className="about-description" data-aos="fade-up">
          I'm Ahmad Bahr, a junior frontend developer passionate about creating user-friendly interfaces. Proficient in HTML, CSS, and JavaScript, I enjoy collaborating on projects that blend creativity with functionality. With a knack for problem-solving and a drive for continuous learning, I'm eager to contribute to dynamic teams and bring innovative ideas to life.
        </p>
      </div>
      <div className="about-details" data-aos="fade-up">
        <div className='about-deatils-cont'>
          <div className="column">
            <p><strong>Email:</strong> abahr431@gmail.com</p>
            <p><strong>Location:</strong> Beirut, LB</p>
            <p><strong>Blood Type:</strong>B+</p>
          </div>
          <div className="column" style={{ marginLeft: '1rem' }}>
            <p><strong>Nationality:</strong> Lebanese</p>
            <p><strong>Education:</strong> Computer & Applied Sciences</p>
            <p><strong>Degree:</strong> BSc. Level 6 Extended Diploma</p>
          </div>
        </div>
      </div>

      <div className="additional-info" data-aos="fade-up">
        <hr className='horizontal-line' />
        <div className="info-box">
          <div className="info-item">
            <p>4</p>
            <div className='info-item-text'>Months of Experience</div>
          </div>
          <div className="info-item">
            <p>10</p>
            <div className='info-item-text'>Completed Projects</div>
          </div>
          <div className="info-item">
            <p>0</p>
            <div className='info-item-text'>Satisfied Clients</div>
          </div>
        </div>
        <hr className='horizontal-line' />
      </div>
    </div>
  );
}
