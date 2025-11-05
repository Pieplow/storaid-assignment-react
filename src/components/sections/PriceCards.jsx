import React from "react";
import PriceTile from "../../generics/PriceTile";
import SectionText from "../../generics/SectionText";
import "./PriceCards.css";

const PriceCards = () => {
  return (
    <section className="section-PriceCards">
        <div className="container my-5">
    <SectionText  
    label="Pricing plan"
    title="Find the Perfect Plan for Your Storage Needs"
    text=""
    />
    
      <div className="row justify-content-center g-4">
        <div className="col-md-3 d-flex justify-content-center">
          <PriceTile title="Small Unit" price="50" />
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <PriceTile title="Medium Unit" price="100" />
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <PriceTile title="Large Unit" price="150" />
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <PriceTile title="Executive Unit" price="200" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default PriceCards

