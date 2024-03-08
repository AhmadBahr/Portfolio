import React from 'react';
import './Hobbies.css';
import icon_2 from '../../assets/icon_2.svg';
import icon_3 from '../../assets/icon_3.svg';
import icon_4 from '../../assets/icon_4.svg';
import icon_5 from '../../assets/icon_5.png';

const Hobbies = () => {
  const data = [
    {
      image: icon_2,
      title: "Gaming",
      subtitle: "Ensuring the continuous functionality and security of digital systems, including networks and hardware, within an organization.",
    },
    {
      image: icon_3,
      title: "Fitness Enthusiast",
      subtitle: "Focusing on providing hotel guests with convenient and high-quality meal options delivered directly to their rooms, enhancing their overall experience.",
    },
    {
      image: icon_4,
      title: "Fitness Enthusiast",
      subtitle: "Developed scalable backend solutions using Node.js and MongoDB. Worked on optimizing database performance and query efficiency. Participated in code reviews and provided constructive feedback to team members.",
    },
    {
      image: icon_5,
      title: "Podcast Enjoyer",
      subtitle: "Volunteered regularly assisting with event planning and coordination. Contributed to various initiatives, showcasing dedication to community engagement and teamwork.",
    }
  ];

  return (
    <div className='Hobbies-container-wrap'>
      <div className='Hobbies-title'>Skills</div>
      <div className="Hobbies-container">
        {data.map((hobby, index) => (
          <div className="Hobbies-item" key={index}>
            <div className="Hobby-box">
              <img src={hobby.image} alt={hobby.title} className="Hobbies-image" />
            </div>
            <div className="Hobbies-box-title">{hobby.title}</div>
            <div className="Hobbies-subtitle">{hobby.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
