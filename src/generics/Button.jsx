import React from 'react';
import './Button.css';

function Button({ label = 'Book Now', onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;