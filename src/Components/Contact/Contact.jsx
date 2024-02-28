import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <hr className="underline" />
      <p className="contact-text">I am currently seeking employment or project offers.</p>
      <p className="contact-text">Do not hesitate to contact me!</p>
      <button className="message-button">Write Message</button>
      <div className="social-links">
        <a href="https://github.com/AhmadBahr"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.youtube.com/channel/UCo_E8q-0x4ad-FKgKqP0fVQ"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://www.instagram.com/attotame"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="link-to-your-linkedin-profile"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.tiktok.com/@atto_toks"><FontAwesomeIcon icon={faTiktok} /></a>
      </div>
    </div>
  );
};

export default Contact;
