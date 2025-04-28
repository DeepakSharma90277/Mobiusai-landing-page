import React from 'react';
import './HowItWorksSection.css';

const steps = [
  {
    number: '1',
    title: 'Submit Intake Form',
  },
  {
    number: '2',
    title: 'We do the search and curation for list of jobs',
  },
  {
    number: '3',
    title: 'You approve, we do the tedious part (applying)',
  },
  {
    number: '4',
    title: 'You get the interviews',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How we work?</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-circle">{step.number}</div>
            <div className="step-line" />
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
