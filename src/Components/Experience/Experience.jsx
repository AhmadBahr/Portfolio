import React from 'react';
import './Experience.css';

const Experience = () => {
  const data = [
    {
      title: "IT Maintenance Specialist",
      company: "Ayoub Computers",
      duration: "2022 - 2023",
      responsibilities: [
        "Ensured the functionality and security of 50+ digital systems and hardware by performing regular diagnostics and updates.",
        "Reduced system downtime by 20% through proactive maintenance and prompt troubleshooting.",
        "Resolved 100+ technical support requests with an average resolution time of under 45 minutes."
      ]
    },
    {
      title: "Frontend Web Developer",
      company: "Quantum FinTech Leap",
      duration: "2023 - 2024",
      responsibilities: [
        "Developed and maintained 10+ responsive web interfaces using HTML, CSS, and JavaScript, improving user engagement by 15%.",
        "Collaborated with backend developers to integrate APIs, enhancing data consistency across web applications.",
        "Reduced page load times by 25% through code optimization and implementation of modern frontend practices."
      ]
    },
    {
      title: "Volunteer - Event Planner & Coordinator",
      company: "MUBS",
      duration: "2021 - 2022",
      responsibilities: [
        "Organized 5+ community events, each attended by 100+ participants, fostering engagement and outreach.",
        "Contributed to event logistics and coordination, reducing setup times by 10% through efficient planning.",
        "Secured resources and partnerships, increasing support for events by 10% compared to previous years."
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
