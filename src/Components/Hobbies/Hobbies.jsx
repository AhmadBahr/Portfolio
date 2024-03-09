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
      subtitle: "Passionate about exploring immersive virtual worlds and mastering various gaming strategies."
    },
    {
      image: icon_3,
      title: "Fitness Enthusiast",
      subtitle: "Dedicated to maintaining a healthy lifestyle through regular exercise and physical activities."
    },
    {
      image: icon_4,
      title: "Avid Series Watcher",
      subtitle: "Enjoys binge-watching TV series and staying up-to-date with the latest episodes and plot twists."
    },
    {
      image: icon_5,
      title: "Podcast Enjoyer",
      subtitle: "Finds joy and relaxation in listening to a diverse range of podcasts, exploring different topics and perspectives."
    }
  ];

  return (
    <div id="Hobbies" className='Hobbies-container-wrap'> 
      <div className='Hobbies-title'>Hobbies</div>
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
