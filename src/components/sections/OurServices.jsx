import React from 'react'
import Tile from '../../generics/Tile'
import SectionText from '../../generics/SectionText'
import OurServicesImage from '../../assets/Our-services-grey.png'

const OurServices = () => {
  return (
    <section className="OurServices-section py-5">
      <div className="container">
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <SectionText
              label="Our Services"
              title="Specialized Storage for Every Special Item"
            />
          </div>
          <div className="col-md-6">
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada nisl nec dui tincidunt, vel dictum lorem gravida. Mauris sagittis orci eget gravida.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 d-flex flex-column gap-3">
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

          <div className="col-md-4 text-center">
            <img
              src={OurServicesImage}
              alt="Our Services"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-4 d-flex flex-column gap-3">
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
      </div>
    </section>
  )
}

export default OurServices
