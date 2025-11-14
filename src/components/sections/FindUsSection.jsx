import React from "react";

import MainImage from "../../assets/MainImage.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import Email from "../../assets/email.svg";
import Pin from "../../assets/pin.svg";
import FacebookIcon from "../../assets/Facebook.png";
import InstagramIcon from "../../assets/Instagram.png";
import YoutubeIcon from "../../assets/Youtube.png";

import "./FindUsSection.css"


export default function FindUsSection() {
return (
<div className="contact-wrapper d-flex">
{/* LEFT SIDE IMAGE */}
<div className="left-section">
<img src={MainImage} alt="Silhouette" className="left-image" />
</div>


{/* RIGHT SIDE CONTENT */}
<div className="right-section p-5">
<h2 className="section-title">Find Us On:</h2>
<p className="section-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>


<div className="info-group">
<div className="info-item">
<img src={PhoneIcon} className="info-icon" alt="Phone" />
<span>+46 10 123 12 44</span>
</div>


<div className="info-item">
<img src={Email} className="info-icon" alt="Email" />
<span>contact@domain.com</span>
</div>


<div className="info-item">
<img src={Pin} className="info-icon" alt="Location" />
<span>Klarabergsviadukten 90, Stockholm</span>
</div>
</div>


<h5 className="social-title">Our Social Media</h5>
<div className="social-line"></div>


<div className="social-icons d-flex gap-3 mt-2">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
<img src={FacebookIcon} alt="Facebook" className="social-icon" />
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
<img src={InstagramIcon} alt="Instagram" className="social-icon" />
</a>
<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
<img src={YoutubeIcon} alt="YouTube" className="social-icon" />
</a>
</div>
</div>
</div>
);
}