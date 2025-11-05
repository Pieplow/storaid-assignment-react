import React from "react";
import Button from "../../generics/Button";
import SectionText from "../../generics/SectionText";



import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="AboutUs-section">
      <div className="content">
      

        <div className="green-box">
          <SectionText label="" title="12+" text="Years of Experience" />
          <SectionText label="" title="150K+" text="Satisfied Clients" />
          <SectionText label="" title="35+" text="Warehouses" />
        </div>

        <SectionText
          label="About Us"
          title="Delivering Excellence"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, veniam quam rem quas rerum quod itaque suscipit qui ea aspernatur aliquid tempora excepturi vitae. Omnis nostrum similique fuga dignissimos cum!"
        />

        <div className="contact-row">
          <Button text="Get Started" />
          <div className="phone">
            <icon name="phone" />
            <span>+46 70 123 45 67</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
