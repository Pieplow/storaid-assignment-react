import React from 'react'
import Tile from '../../generics/Tile'
import SectionText from '../../generics/SectionText'
import OurServicesImage from "../../assets/Our-services-grey.png";


const OurServices = () => {
  return (
    <section className="OurServices-section">
    <div className="container">
       <SectionText
          label="Our Services"
          title="Specialized Storage for Every Special Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nisl nec dui tincidunt, vel dictum lorem gravida. Mauris sagittis orci eget gravida."
        />

        <div className="tile-column left">
            <Tile
              title="Diverse Unit Sizes"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
              borderColor="yellow"
            />
            <Tile
              title="Moving Assistance"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
            />
        </div>
        
        <div className="Our-services-image">
          <img src={OurServicesImage} alt="Our Services" className="img-fluid"/>
        </div>

         <div className="tile-column right">
            <Tile
              title="Vehicle Storage"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
            />
            <Tile
              title="Top-Notch Security"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
            />
          </div>
    </div>  
    </section>
      
  );
};

export default OurServices