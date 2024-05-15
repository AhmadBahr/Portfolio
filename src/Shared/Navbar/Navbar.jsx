import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'; 
import Ahmad_CV from '../../assets/AhmadBahr_ Curriculum Vitae.pdf'; 

const Navbar = () => {
  const handleOpenResume = () => {
    window.open(Ahmad_CV, '_blank');
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
        <ScrollLink to="Hobbies" smooth={true} duration={500}>Hobbies</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink> 
      </div>
    
      <a href="#" onClick={handleOpenResume}>
        <button className="resume-button">Resume</button>
      </a>
    </div>
  );
}

export default Navbar;
