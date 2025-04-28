import React from 'react';
import './ResumeBuildingSection.css'; // Make sure to import the CSS file

const ResumeBuildingSection = () => {
  return (
    <section className="resume-building-section">
      <div className="resume-building-header">
        <h2 className="resume-building-title">
          Resume Building & Coaching
        </h2>
        <p className="resume-building-description">
          Let’s talk about where you’re headed — and how your resume can get you there.{' '}
          <a href="#">Schedule a call to get started.</a>
        </p>
      </div>
    </section>
  );
};

export default ResumeBuildingSection;
