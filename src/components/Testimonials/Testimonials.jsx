import React from 'react';
import './Testimonials.css';
import { MdPlayArrow } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    videoLink: "#",
    arrowLink: "#",
  },
  {
    id: 2,
    text: "John switched industries completely with 5 amazing offers in just 3 months!",
    videoLink: "#",
    arrowLink: "#",
  },
  {
    id: 3,
    text: "Sophia landed her dream remote job with the help of our expert team!",
    videoLink: "#",
    arrowLink: "#",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What our clients have to say</h2>

      <div className="testimonials-cards">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-video">
              <a href={testimonial.videoLink} className="play-button" target="_blank" rel="noopener noreferrer">
                <MdPlayArrow size={30} color="white" />
              </a>
            </div>
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <a href={testimonial.arrowLink} className="arrow-button" target="_blank" rel="noopener noreferrer">
                <BsArrowUpRight size={18} color="#0047FF" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-buttons">
        <a href="#" className="secondary-button">More customer testimonials ↗</a>
        <a href="#" className="primary-button">Get Started →</a>
      </div>
    </section>
  );
};

export default Testimonials;
