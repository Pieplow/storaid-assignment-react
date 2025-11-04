import React from 'react'
import Button from '../../generics/Button'
import SectionText from '../../generics/SectionText'
import "./Newsletter.css";

const Newsletter = () => {
  return (
<section className="newsletter-section py-4">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-md-6">
        <h2>Subscribe Our Newsletter</h2>
        <p>Subscribe to our newsletter to receive early discount offers, updates and info.</p>
      </div>
      <div className="col-md-6">
        <form>
          <input type="email" placeholder="Enter your email *" required />
          <Button label="Submit" />
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Newsletter
