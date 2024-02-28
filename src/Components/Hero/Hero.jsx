import React, { useEffect } from 'react';
import './Hero.css';
import icon1 from '../../assets/icon_1.svg';
// import icon2 from '../../assets/icon2.svg'; 

const Hero = () => {
  useEffect(() => {
    const elementEl = document.querySelector('.highlight-text-blink');
    typeWriter(elementEl);
  }, []);

  function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
      setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 8000);
  }

  return (
    <div className="hero-container">
      <div className="hero-content">
      <img src={'icon2'} alt="Icon" className="hero-icon2" /> 
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight-text-blink">Ahmad Bahr</span>
          </h1>
          <p className="hero-description">FrontEnd Web Developer</p>
        </div>
      </div>
      <img src={icon1} alt="Icon" className="hero-icon" />
    </div>
  );
};

export default Hero;
