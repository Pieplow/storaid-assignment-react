import React from "react";
import "./SectionText.css"; 

export default function SectionText({
  label = "Welcome To StorAid",
  title = "Space Simplified, Storage Perfected",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <div className="section-text">
      {label && <p className="section-text_label">{label}</p>}
      <h2 className="section-text_title">{title}</h2>
      <p className="section-text_text">{text}</p>
    </div>
  );
}

export default SectionText;