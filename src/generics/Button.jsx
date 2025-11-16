import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ label = "Book Now", type = "button", onClick, disabled, className= "" }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (type === "submit") {
      if (onClick) onClick(e);
      return;
    }

    navigate("/booking");

    if (onClick) onClick(e);
  };

  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
