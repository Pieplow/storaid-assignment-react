import React from 'react';
import './SectionText.css';

const SectionText = ({ label, title, text }) => (
  <div className="section-heading">
    {label && <p className="section-text_label">{label}</p>}
    <h2 className="section-text_title">{title}</h2>
    <p className="section-text_text">{text}</p>
  </div>
);

SectionHeading.defaultProps = {
  label: "Welcome To StorAid",
  title: "Space Simplified, Storage Perfected",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.",
};

export default SectionText;