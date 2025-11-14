import React from "react";
import "./TestimonialCard.css";
import "./TestimonialCard.css";

import QuoteIcon from '../assets/quote-icon.svg'



const TestimonialCard = ({ review }) => {
  return (
    <div className="testimonial-card bg-white rounded-3 shadow-sm p-4">
      {/* Rating */}
      <div className="stars text-success mb-3">
        {"★".repeat(review.rating || 4)}
        {"☆".repeat(5 - (review.rating || 4))}
      </div>

      {/* Review text */}
      <p className="text-secondary mb-4">{review.comment}</p>

      {/* Reviewer info */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={review.avatarUrl}
            alt={review.name}
            className="avatar rounded-circle bg-light me-3"
            width="50"
            height="50"
          />
          <div>
            <h6 className="fw-bold mb-0 text-dark">{review.name}</h6>
            <small className="text-muted">{review.companyName}</small>
          </div>
        </div>

        {/* Quote icon */}
        <img
          src={QuoteIcon}
          alt="quote icon"
          className="quote-icon"
          width="30"
          height="30"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;