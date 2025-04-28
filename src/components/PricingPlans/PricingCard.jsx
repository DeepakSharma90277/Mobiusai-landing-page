import React from 'react';

const PricingCard = ({ title, price, period, features, buttonText, badge }) => {
  return (
    <div className="pricing-card">
      <div className="card-header">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <div className="card-price">
        <span className="price">${price}</span>
        <span className="period">/{period}</span>
      </div>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="checkmark">✔️</span> {feature}
          </li>
        ))}
      </ul>
      <button className="get-started-btn">{buttonText}</button>
    </div>
  );
};

export default PricingCard;
