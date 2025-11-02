import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "/.Logo.css"

const Logo = () => {
  return (
    <div className="logo py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-4 col-md-2 my-2">
            <img src="/images/Logoipsum-1.svg" alt="Logo 1" className="img-fluid brand-logo" />
               <div className="col-4 col-md-2 my-2">
            <img src="/images/Logoipsum-2.svg" alt="Logo 2" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src="/images/Logoipsum-3.svg" alt="Logo 3" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src="/images/Logoipsum-4.svg" alt="Logo 4" className="img-fluid brand-logo" />
          </div>
          <div className="col-4 col-md-2 my-2">
            <img src="/images/Logoipsum-5.svg" alt="Logo 5" className="img-fluid brand-logo" />
        </div>
        </div>
      </div>
    </div>
   </div>

     );
};

export default Logo;