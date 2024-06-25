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
          I am Ahmad Bahr, with experience in Frontend Web Development, I
          specialize in crafting seamless digital experiences. My ability spans
          HTML5, CSS3, and JavaScript frameworks like React.js, complemented by
          ability in SQL databases such as MongoDB and backend languages like C#
          ASP.net MVC Core Web API. Throughout my career, I have led
          transformative projects from revitalizing legacy systems to launching
          innovative web applications that consistently exceed client
          expectations. I am enthusiastic about staying ahead of industry trends
          and fostering collaborative partnerships. I welcome the opportunity to
          discuss how my skills can contribute to your projects.{" "}
        </p>
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
            <p>14</p>
            <div className="info-item-text">Completed Projects</div>
          </div>
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};
