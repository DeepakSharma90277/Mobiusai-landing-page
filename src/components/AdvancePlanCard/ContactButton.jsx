import React from 'react';
import './ContactButton.css';

const ContactButton = () => {
  return (
    <div className="contact-card">
      <div className="contact-left">
        <p>STILL HAVE <br /> DOUBTS?</p>
      </div>
      <div className="contact-center">
        <h2>Contact us</h2>
      </div>
      <div className="contact-right">
        <button className="contact-button">
          ➔
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
