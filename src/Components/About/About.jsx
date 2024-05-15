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
          I am Ahmad Bahr, a dedicated Frontend Web Developer committed to
          crafting seamless and intuitive user experiences. Equipped with a
          strong proficiency in HTML, CSS, and JavaScript, I thrive on
          collaborating with cross-functional teams to deliver projects that
          seamlessly blend creativity with functionality. With a robust
          problem-solving aptitude and a relentless pursuit of knowledge, I
          approach every challenge with an unwavering dedication to excellence.
          I am deeply passionate about staying abreast of emerging technologies
          and industry trends, continuously refining my skill set to remain at
          the forefront of innovation. Driven by a relentless pursuit of
          excellence, I am poised to contribute my expertise to dynamic teams,
          leveraging my unique blend of technical prowess and creative vision to
          bring transformative ideas to fruition.{" "}
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
          </div>
          <div className="column" style={{ marginLeft: "1rem" }}>
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
            <p>4</p>
            <div className="info-item-text">1 Year(s) of Experience</div>
          </div>
          <div className="info-item">
            <p>10</p>
            <div className="info-item-text">Completed Projects</div>
          </div>
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};
