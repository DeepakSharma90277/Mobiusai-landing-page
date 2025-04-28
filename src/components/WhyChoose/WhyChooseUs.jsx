import React from 'react';
import './WhyChooseUs.css';
import { FaHandshake, FaUser, FaStar } from 'react-icons/fa';

const whyChooseData = [
  {
    id: 1,
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
    icon: <FaHandshake size={30} />,
  },
  {
    id: 2,
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path.",
    icon: <FaUser size={30} />,
  },
  {
    id: 3,
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    icon: <FaStar size={30} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="cards-container">
        {whyChooseData.map((item) => (
          <div className="choose-card" key={item.id}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
