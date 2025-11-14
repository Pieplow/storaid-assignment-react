import React, { useEffect, useState } from "react";
import { getTestimonials } from "../../services/api";
import TestimonialCard from "../../generics/TestimonialCard";
import SectionText from "../../generics/SectionText"; 
import "./TestimonialSection.css";


const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error loading testimonials:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <SectionText
              label="Testimonials"
              title="What Our Customers Say"
              text="See how our customers describe their experience with us — in their own words."
            />
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {testimonials.length > 0 ? (
            testimonials.slice(0, 3).map((review, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <TestimonialCard review={review} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">Loading testimonials...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
