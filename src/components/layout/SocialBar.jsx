import React from 'react';

import {Link } from 'react-router-dom';
import './SocialBar.css';
import phoneIcon from '../../assets/phone-icon.svg';
import emailIcon from '../../assets/e-mail-icon.svg';

import FacebookIcon from "../../assets/Facebook.png";
import HumbleIcon from "../../assets/Humble.png";  
import InstagramIcon from "../../assets/Instagram.png";
import YoutubeIcon from "../../assets/Youtube.png";


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
        
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt="Facebook" />
      </a>

      <a href="https://humblebundle.com" target="_blank" rel="noopener noreferrer">
        <img src={HumbleIcon} alt="Humble" />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" />
      </a>

      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={YoutubeIcon} alt="YouTube" />
      </a>
    </div>
      
    </div>
  );
}

export default SocialBar;