import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Land job interviews <br />
          <span className="hero-highlight">10x faster</span>
        </h1>
        <p className="hero-subtitle">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </p>
        <button className="hero-button">
          Get Started →
        </button>
      </div>

      <div className="hero-image-container">
        <img src="src/assets/image.png" alt="E-Book" className="hero-image" />
        <p className="hero-image-caption">Download Free E-Book</p>
      </div>
    </section>
  );
};

export default HeroSection;
