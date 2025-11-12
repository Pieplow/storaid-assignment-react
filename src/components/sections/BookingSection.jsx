import React from "react";
import BookingForm from "../../generics/BookingForm";
import SectionText from "../../generics/SectionText";
import greyImageBooking from "../../assets/grey-image-booking.svg";

import "./BookingSection.css";

const BookingSection = () => {
  return (
    <section className="Booking-section py-5">
      <div className="container">
        <div className="row align-items-center">

         
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-center text-md-start">
            <div className="section-text-wrapper">
                <SectionText
                label="Get in Touch"
                title="Get Personalized Assistance – Contact Us"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
            </div>
            <div className="booking-image-wrapper">
            <img
                src={greyImageBooking}
                alt="Booking illustration"
                className="img-fluid mt-4 booking-image"
                width="664"
                height="337"
                loading="lazy"
            />
            </div>
            </div> 
          <div className="col-md-6 h-100">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;