import React from "react";
import PriceTile from "../../generics/PriceTile";

const PriceCards = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <PriceTile title="Small Unit" price="50" />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <PriceTile title="Medium Unit" price="100" />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <PriceTile title="Large Unit" price="150" />
        </div>
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
          <PriceTile title="Executive Unit" price="200" />
        </div>
      </div>
    </div>
  );
};

export default PriceCards

