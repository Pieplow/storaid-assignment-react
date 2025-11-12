import React from "react";
import ContactForm from "../../generics/ContactForm";
import SectionText from "../../generics/SectionText";
import greyImageBooking from "../../assets/grey-image-booking.svg";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">

         
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start h-100">
            <SectionText
              label="Get in Touch"
              title="Get Personalized Assistance – Contact Us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"
            />

            <img
              src={greyImageBooking}
              alt="Booking illustration"
              className="img-fluid mt-4 booking-image h-100"
              width="664"
              height="337"
              loading="lazy"
            />
          </div>

       
          <div className="col-md-6 h-100">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
