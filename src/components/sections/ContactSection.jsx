import React from "react";
import ContactForm from "../../generics/ContactForm";
import SectionText from "../../generics/SectionText";
import greyImageBooking from "./../assets/grey-image-contact.svg";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <div className="section-text-left">
            <SectionText
              label="Get in Touch"
              title="Get Personalized Assistance – Contact Us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>

          <img
            src={greyImageBooking}
            alt="Booking illustration"
            className="img-fluid mt-4 booking-image"
            loading="lazy"
          />
        </div>

        <div className="col-md-6">
          <div className="section-text-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
