import React from "react";

import MainImage from "../../assets/MainImage.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import Email from "../../assets/email.svg";
import Pin from "../../assets/pin.svg";
import FacebookIcon from "../../assets/Facebook.png";
import InstagramIcon from "../../assets/Instagram.png";
import YoutubeIcon from "../../assets/Youtube.png";

import "./FindUsSection.css";

export default function FindUsSection() {
  return (
    <div className="findus-wrapper container-fluid px-0">
      <div className="row g-0">

        {/* Left Image */}
        <div className="col-md-4 image-section d-flex align-items-center justify-content-center">
          <img src={MainImage} alt="Silhouette" className="main-image img-fluid" />
        </div>

        {/* Center Content */}
        <div className="col-md-4 content-section p-5">
          <h3 className="fw-bold mb-3">Find Us On:</h3>

          <p className="description mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="contact-list d-flex flex-column gap-4">

            <div className="contact-item d-flex align-items-start gap-3">
              <img src={PhoneIcon} className="contact-icon" alt="Phone" />
              <div>
                <div className="item-title fw-bold">Call Center</div>
                <div className="item-text">+46 10 123 12 44</div>
              </div>
            </div>

            <div className="contact-item d-flex align-items-start gap-3">
              <img src={Email} className="contact-icon" alt="Email" />
              <div>
                <div className="item-title fw-bold">Email Address</div>
                <div className="item-text">contact@domain.com</div>
              </div>
            </div>

            <div className="contact-item d-flex align-items-start gap-3">
              <img src={Pin} className="contact-icon" alt="Location" />
              <div>
                <div className="item-title fw-bold">Location</div>
                <div className="item-text">Klarabergsviadukten 90, Stockholm</div>
              </div>
            </div>

          </div>

          <div className="social-section mt-5">
            <div className="fw-bold">Our Social Media</div>
            <div className="social-line"></div>

            <div className="social-icons d-flex gap-3 mt-2">
              <img src={FacebookIcon} className="social-icon" alt="Facebook" />
              <img src={InstagramIcon} className="social-icon" alt="Instagram" />
              <img src={YoutubeIcon} className="social-icon" alt="YouTube" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-md-4 right-panel"></div>
      </div>
    </div>
  );
}
