import React from 'react';
import './Navbar.css'; 
import Ahmad_CV from '../../assets/AhmadBahr_CurriculumVitae.pdf'; // Import your PDF file

const Navbar = () => {
  const handleDownloadResume = () => {
    window.location.href = Ahmad_CV;
  };

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a href={Ahmad_CV} download="AhmadBahr_Curriculum.pdf">
        <button className="resume-button" onClick={handleDownloadResume}>Resume</button>
      </a>
    </div>
  );
}

export default Navbar;
