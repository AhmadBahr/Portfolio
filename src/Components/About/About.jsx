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
        I am Ahmad Bahr, a Frontend Web Developer with experience delivering impactful solutions across diverse projects. I excel at transforming ideas into functional systems, prioritizing user experience and performance optimization. Driven by a passion for problem-solving and continuous learning, I adapt to evolving technologies and thrive in collaborative environments. I look forward to contributing to innovative projects and growing alongside dynamic teams.</p>
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
            <p>2</p>
            <div className="info-item-text">Year of Experience</div>
          </div>
          <div className="info-item">
            <p>20</p>
            <div className="info-item-text">Completed Projects</div>
          </div>
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};
