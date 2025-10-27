import React from 'react';
import './SocialBar.css';
import phoneIcon from '../../assets/phone-icon.svg';
import emailIcon from '../../assets/e-mail-icon.svg';



function SocialBar() {
  return (
    <div className="social-bar">
      <div className="phone">
        <img src={phoneIcon} alt="contact by phone" />
        <span>+46 8 123 122 44</span>
      </div>
      <div className="email">
        <img src={emailIcon} alt="contact by email" />
        <span>contact@domain.com</span>
      </div>
    </div>
  );
}

export default SocialBar;