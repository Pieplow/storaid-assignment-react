import React from "react";
import Button from './Button';
import DollarSign from "../assets/dollar-pricetile.svg";
import "./PriceTile.css";

const PriceTile = ({ title, price }) => {
  return (
    <div className="price-tile">
      <h4>{title}</h4>
      <div className="price">
        <img src={DollarSign} alt="Dollar Sign" />
        <span className="price-amount">{price}</span>
        <span className="price-period">/month</span>
      </div>
      <p className="description">
        Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.
      </p>

      <ul className="features">
        <li>Nam nec ipsum in dolor</li>
        <li>Fusce nec ligula ut arcu</li>
        <li>Aliquam pulvinar arcu in</li>
        <li>Duis gravida enim porta</li>
        <li>Etiam eget libero non ligula</li>
      </ul>

      <Button text="Rent Now"/>
    </div>
  );
};

export default PriceTile;