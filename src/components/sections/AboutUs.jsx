import React from "react";
import GreyImage from "../../assets/grey-image.png";
import Button from "../../generics/Button";
import SectionText from "../../generics/SectionText";
import Tile from "../../generics/Tile";
import PhoneIcon from "../../assets/PhoneIcon.svg";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="AboutUs-section container py-5">
      <div className="row align-items-center">
     
        <div className="col-md-6 text-center position-relative">
          <img src={GreyImage} alt="Grey" className="img-fluid mb-4" />

          <div className="green-box d-flex justify-content-center align-items-start gap-4 rounded mt-3 mx-auto">
            <SectionText label="" title="12+" text="Years of Experience" />
            <SectionText label="" title="150K+" text="Satisfied Clients" />
            <SectionText label="" title="35+" text="Warehouses" />
          </div>
        </div>

        
        <div className="col-md-6">
            <div className="section-text-right">
          <SectionText
            label="About Us"
            title="Delivering Excellence"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, veniam quam rem quas rerum quod itaque suscipit qui ea aspernatur aliquid tempora excepturi vitae. Omnis nostrum similique fuga dignissimos cum!"
          />
          </div>
          <div className="tiles d-flex justify-content-between align-items-start gap-4 ">
            <Tile title="Mission"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            <Tile 
            title="Vision"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            </div>
            
          <div className="d-flex align-items-center gap-5 mt-4 pt-3">
            <Button text="Discover More" />
            <div className="d-flex align-items-center gap-4 phone">
              <div className="phone-icon-wrapper">
                    <img src={PhoneIcon} alt="Phone Icon" className="phone-icon" />
              </div>

              <div className="d-flex flex-column">
                    <span className="phone-label">More information</span>
                    <span className="phone-number">+46 70 123 45 67</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
