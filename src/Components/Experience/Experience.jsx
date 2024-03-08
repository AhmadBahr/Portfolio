import React from 'react';
import './Experience.css';

const Experience = () => {
  const data = [
    {
      title: "IT Maintenance",
      company: "Ayoub Computers",
      duration: "2022-2023",
      responsibilities: [
        "Ensuring the continuous functionality and security of digital systems, including networks and hardware, within an organization."
      ]
    },
    {
      title: "In-Room Dining Services",
      company: "Kempinski Summerland Hotel & Resort",
      duration: "2017-2019",
      responsibilities: [
        "Focusing on providing hotel guests with convenient and high-quality meal options delivered directly to their rooms, enhancing their overall experience."
      ]
    },
    {
      title: "Junior FrontEnd Web Developer",
      company: "Quantum FinTech Leap ",
      duration: " 2023-Present",
      responsibilities: [
        "Developed scalable backend solutions using Node.js and MongoDB.",
        "Worked on optimizing database performance and query efficiency.",
        "Participated in code reviews and provided constructive feedback to team members."
      ]
    },
    {
      title: "Volunteer",
      company: "MUBS",
      duration: "2021-2022",
      responsibilities: [
        "Volunteered regularly assisting with event planning and coordination. Contributed to various initiatives, showcasing dedication to community engagement and teamwork.hh"
      ]
    }
  ];

  return (
    <div className='exp-container-wrap'>
      <div className='experience-title '>Experience</div>
    <div className="experience-container">
      {data.map((experience, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-box-title">{experience.title}</div>
          <div className="experience-company">{experience.company}</div>
          <span className="experience-duration">{experience.duration}</span>
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
