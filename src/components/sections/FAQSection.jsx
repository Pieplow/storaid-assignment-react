import React from "react";
import { FAQ } from "../layout/FAQ";
import SectionText from "../../generics/SectionText";
import "./FAQSection.css"

function FAQSection() {
  return (
    <section className="faq-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-start">
          
          {/* Vänster kolumn */}
          <div className="col-lg-5 col-md-12">
            <SectionText
              label="FAQs"
              title="Frequently Asked Questions"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat ipsa optio illo explicabo suscipit quasi..."
            />
          </div>

          {/* Höger kolumn */}
          <div className="col-lg-7 col-md-12">
            <FAQ />
          </div>

        </div>
      </div>
    </section>

  );
}

export default FAQSection;

