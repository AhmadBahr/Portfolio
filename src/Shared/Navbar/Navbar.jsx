import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import Ahmad_CV from '../../assets/Ahmad Bahr_ Résumé.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenResume = () => {
    window.open(Ahmad_CV, '_blank');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
        <ScrollLink to="hobbies" smooth={true} duration={500}>Hobbies</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
      </div>

      <button className="resume-button" onClick={handleOpenResume}>Resume</button>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink>
          <ScrollLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</ScrollLink>
          <ScrollLink to="hobbies" smooth={true} duration={500} onClick={toggleMenu}>Hobbies</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink>
          <button className="resume-button" onClick={() => { handleOpenResume(); toggleMenu(); }}>Resume</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
