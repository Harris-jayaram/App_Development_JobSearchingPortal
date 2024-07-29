import React from 'react';
import "../../Assest/css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../Assest/Img/Shigoto1.png'; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <div className="contact">
            <span className="icon">&#128100;</span> CONTACT US
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>
          <div className="content-info">
            This job portal website is designed, developed, and maintained by the Job Portal Team.
          </div>
          <div className="links">
            <a href="#about">About Us</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="copyright-info">
            &copy; 2024 Job Portal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
