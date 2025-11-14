import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Logo.css"

import logo1 from "../../assets/Logoipsum-1.svg";
import logo2 from "../../assets/Logoipsum-2.svg";
import logo3 from "../../assets/Logoipsum-3.svg";
import logo4 from "../../assets/Logoipsum-4.svg";
import logo5 from "../../assets/Logoipsum-5.svg";

const Logo = () => {
  return (
    <div className="logo py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-4 col-md-2 my-2">
            <img src={logo1} alt="Logo 1" className="img-fluid brand-logo" />
            </div>
               <div className="col-4 col-md-2 my-2">
            <img src={logo2} alt="Logo 2" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src={logo3} alt="Logo 3" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src={logo4} alt="Logo 4" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src={logo5} alt="Logo 5" className="img-fluid brand-logo" />
        </div>
        </div>
      </div>
    </div>
   

     );
};

export default Logo;