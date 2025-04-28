import React from 'react';
import './Footer.css';
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="src/assets/Logo.png" alt="MobuisEngine Logo" className="footer-logo" />
        </div>
      </div>
      <div className="footer-info">
          <div className="info-item">
            <h4>Address</h4>
            <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
          </div>

          <div className="info-item">
            <h4>Email</h4>
            <p><a href="mailto:finance@mobuisengine.ae">finance@mobuisengine.ae</a></p>
          </div>

          <div className="info-item">
            <h4>Telephone</h4>
            <p><a href="tel:6508896026">650-889-6026</a></p>
          </div>

          <div className="info-item">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      <div className="footer-bottom">
        <p>© 2023 Mobuisservices LLC</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
