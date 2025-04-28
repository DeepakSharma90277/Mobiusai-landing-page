import React from 'react';
import './AdvancePlanCard.css';

const AdvancePlanCard = ({
  title = "Advance",
  subtitle = "Top-tier support for serious job hunters:",
  features = [],
  price = "$150",
  billingCycle = "/week",
  buttonText = "Get Started",
  onButtonClick,
}) => {
  return (
    <div className="advance-card">
      <div className="advance-content">
        <div className="advance-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <ul className="advance-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="advance-footer">
        <div className="advance-price">
          <span>{price}</span><span className="advance-week">{billingCycle}</span>
        </div>
        <button className="advance-button" onClick={onButtonClick}>
          {buttonText} →
        </button>
      </div>
    </div>
  );
};

export default AdvancePlanCard;
