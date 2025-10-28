import React from "react";
import "./SectionText.css"; 

const SectionText = ({ label, title, text }) => (
  <div className="section-heading">
    {label && <p className="section-text_label">{label}</p>}
    <h2 className="section-text_title">{title}</h2>
    <p className="section-text_text">{text}</p>
  </div>
);

SectionText.defaultProps = {
  label: "Welcome To StorAid",
  title: "Space Simplified, Storage Perfected",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default SectionText;