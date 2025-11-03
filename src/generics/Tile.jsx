import React from "react";
import "./Tile.css";


const Tile = ({ title, text }) => (
  <div className="tile">
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

export default Tile;