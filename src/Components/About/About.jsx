import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-header" data-aos="fade-up">
        About Me
      </h2>
      <div className="about-desc-wrap">
        <p className="about-description" data-aos="fade-up">
        I am Ahmad Bahr, a Frontend Web Developer with a year of hands-on experience in building seamless digital experiences. I have a strong foundation in web development technologies, including HTML, CSS, and JavaScript frameworks. I am skilled in creating innovative solutions and integrating various tools to enhance application functionality. My passion for innovation drives me to stay ahead of industry trends, and I thrive in collaborative environments. I welcome the opportunity to discuss how my skills and experience can contribute to your projects.        </p>
      </div>
      <div className="about-details" data-aos="fade-up">
        <div className="about-deatils-cont">
          <div className="column">
            <div className="email-container">
              <p>
                <strong>Email:</strong> ahmadbah.r@outlook.com{" "}
              </p>
            </div>
            <p>
              <strong>Education:</strong> Computer & Applied Sciences
            </p>
            <p>
              <strong>Degree:</strong> BSc. Level 6 Extended Diploma
            </p>
          </div>
        </div>
      </div>

      <div className="additional-info" data-aos="fade-up">
        <hr className="horizontal-line" />
        <div className="info-box">
          <div className="info-item">
            <p>1</p>
            <div className="info-item-text">Year of Experience</div>
          </div>
          <div className="info-item">
            <p>18</p>
            <div className="info-item-text">Completed Projects</div>
          </div>
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};
