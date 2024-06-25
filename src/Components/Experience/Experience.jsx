import React from 'react';
import './Experience.css';

const Experience = () => {
  const data = [
    {
      title: "IT Maintenance",
      company: "Ayoub Computers",
      duration: "2022 - 2023",
      responsibilities: [
        "Ensured functionality and security of digital systems and hardware.",
        "Performed continuous maintenance to uphold system reliability.",
        "Addressed technical issues promptly to minimize disruptions."
      ]
    },
    {
      title: "Junior FrontEnd Web Developer",
      company: "Quantum FinTech Leap ",
      duration: "  2023 - Present",
      responsibilities: [
        "Created responsive web interfaces using HTML, CSS, and JavaScript.",
        "Integrated frontend with backend APIs for seamless data flow.",
        "Optimized website performance and collaborated with design teams."
      ]
    },
    {
      title: "Volunteer",
      company: "MUBS",
      duration:  " 2021 - 2022",
      responsibilities: [
        "Regularly volunteer for event planning and coordination.",
        "Contribute to various initiatives, demonstrating dedication to community engagement.",
        "Collaborate effectively with team members to achieve common goals."
      ]
    }
  ];

  return (
    <div id="experience" className='exp-container-wrap' data-aos="zoom-in">
      <div className='experience-title'>Experience</div>
      <div className="experience-container">
        {data.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-box-title">{experience.title}</div>
            <div className="experience-details">
              <div className="experience-company">{experience.company}</div>
              <span className="experience-duration"> / {experience.duration}</span>
            </div>
            <ul className="experience-responsibilities">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
