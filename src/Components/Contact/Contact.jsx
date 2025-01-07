import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CSSTransition } from 'react-transition-group';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleWriteMessage = () => {
    const whatsappNumber = '+96176978968';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20there!`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div id="contact" className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Contact</h2>
        <hr className="underline" />
        <p className="contact-text">Do not hesitate to contact me!</p>
        <button className="message-button" onClick={handleWriteMessage}>Write Message</button>
        <div className="social-links">
          <a href="https://github.com/AhmadBahr"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.youtube.com/channel/UCo_E8q-0x4ad-FKgKqP0fVQ"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://www.instagram.com/attotame"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/ahmad-bahr-064a98301/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.tiktok.com/@atto_toks"><FontAwesomeIcon icon={faTiktok} /></a>
          <a href="https://www.twitch.tv/atto_tame"><FontAwesomeIcon icon={faTwitch} /></a>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Contact;
