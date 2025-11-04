import React from 'react'
import Tile from '../../generics/Tile'
import SectionText from '../../generics/SectionText'
import OurServicesImage from '../../assets/Our-services-grey.png'
import "./OurServices.css"

const OurServices = () => {
  return (
    <section className="OurServices-section py-5">
      <div className="container">
        <div className="row mb-6 align-items-start">
          <div className="col-md-6">
            <SectionText
              label="Our Services"
              title="Specialized Storage for Every Special Item"
              text=""
            />
          </div>
          <div className="col-md-6">
            <p className="section-paragraph mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 d-flex flex-column gap-3">
            <Tile
              title="Diverse Unit Sizes"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.."
              borderColor="yellow"
            />
            <Tile
              title="Moving Assistance"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.."
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
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
            <Tile
              title="Top-Notch Security"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
