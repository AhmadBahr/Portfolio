import React, { useEffect } from 'react';
import './Hero.css';
import icon1 from '../../assets/icon_1.svg';
import ahmad_pic from '../../assets/ahmad_pic.png'; 

const Hero = () => {
  useEffect(() => {
    const elementEl = document.querySelector('.highlight-text-blink');
    typeWriter(elementEl);
  }, []);

  function typeWriter(el) {
    const text = el.getAttribute('data-text');
    let i = 0;

    const typeEffect = () => {
      if (i < text.length) {
        el.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typeEffect, 95);
      } else {
        setTimeout(resetText, 8000);
      }
    };

    const resetText = () => {
      el.innerHTML = ''; 
      i = 0;
      typeWriter(el); 
    };

    typeEffect();
  }

  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={ahmad_pic} alt="Ahmad Bahr" className="hero-icon2" />
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight-text-blink" data-text="Ahmad Bahr">Ahmad Bahr</span>
          </h1>
          <p className="hero-description">Frontend Web Developer</p>
        </div>
      </div>
      <img src={icon1} alt="Icon" className="hero-icon" />
    </div>
  );
};

export default Hero;
