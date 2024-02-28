import React from 'react';
import './Hero.css';
import icon1 from '../../assets/icon_1.svg';
// import icon2 from '../../assets/icon2.svg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
      <img src={'icon2'} alt="Icon 2" className="hero-icon2" />
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight-text">Ahmad</span> <span className="highlight-text-bahr">Bahr</span>
          </h1>
          <p className="hero-description">FrontEnd Web Developer</p>
        </div>
       
      </div>
      <img src={icon1} alt="Icon" className="hero-icon" />
    </div>
  );
};

export default Hero;
