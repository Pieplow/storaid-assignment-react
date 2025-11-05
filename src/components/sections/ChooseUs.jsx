import React from 'react'
import SectionText from '../../generics/SectionText'
import OurServicesImage from '../../assets/Our-services-grey.png'
import Lock from '../../assets/Lock.svg'
import Clock from '../../assets/Clock.svg'

import "./ChooseUs.css"

const ChooseUs = () => {
  return (
    <section className="chooseus py-5">
      <div className="container">
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <SectionText
              label="Our Services"
              title="Specialized Storage for Every Special Item"
              text=""
            />
          </div>
          <div className="col-md-6">
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
              ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <div className="d-flex align-items-start">
                  <img
                    src={Lock}
                    alt="Security icon"
                    className="me-3"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h3>Security and Safety</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                    </p>
                  </div>
                </div>
              </li>
              <li >
                <div className="d-flex align-items-start">
                  <img
                    src={Lock}
                    alt="Flexible icon"
                    className="me-3"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h3>Flexible and Affordable</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                    </p>
                  </div>
                </div>
              </li>
              <li >
                <div className="d-flex align-items-start">
                  <img
                    src={Lock}
                    alt="Clean icon"
                    className="me-3"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h3>Clean and Well-Maintained Facilities</h3>
                    <p >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <img
                    src={Clock}
                    alt="Access icon"
                    className="me-3"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h3>24/7 and Convenient Access</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                      elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={OurServicesImage}
              alt="Our Services"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
