import React from "react";
import "./TestimonialCard.css";

import QuoteIcon from gener

const TestimonialCard = ({ review, logo }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        {logo && (
          <img
            src={logo}
            alt="Company logo"
            className="testimonial-logo"
          />
        )}
        <div className="stars">
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </div>
      </div>

      <p className="review-text">{review.text}</p>

      <div className="reviewer">
        <div className="avatar"></div>
        <div>
          <h5 className="reviewer-name">{review.name}</h5>
          <p className="reviewer-role">{review.role}</p>
        </div>
        <span className="quote-icon">❞</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
