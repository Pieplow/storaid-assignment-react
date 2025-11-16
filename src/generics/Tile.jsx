import React from "react";
import "./Tile.css";

const Tile = ({ title, text }) => (
  <a 
    href="/404" 
    className="tile tile-link"
    aria-label={`${title}. ${text}. Read more.`}
  >
    <h4>{title}</h4>
    <p>{text}</p>
  </a>
);

export default Tile;