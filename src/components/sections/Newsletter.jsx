import { useState } from 'react';
import React from 'react'
import Button from '../../generics/Button'
import SectionText from '../../generics/SectionText'
import "./Newsletter.css";

const Newsletter = () => {
  const [email,setEmail] = useState ('')
  const [error,setError] = useState ('')


  const isValidEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

  const handelChange = (e) => {
    const value = e.target.value;
    setEmail(value)
    setError(isValidEmail(value) ? '' : 'Invalid Email Adress')
  }
  
  const handelSubmit = (e) => {

  }



  return (
<section className="newsletter-section py-4">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-md-6">

        <SectionText
              label=""
              title="Subscribe Our Newsletter"
              text="Subscribe to our newsletter to receive early discount offers, updates and info."
            />
      </div>


      <div className="col-md-6">
        <form onSubmit>
          <input 
          type="email" 
          placeholder="Enter your email *" required 
          value={email}
          onChange={handelChange}
          />
          {error && <div className="error">{error}</div>}
          <Button label="Submit" />
        </form>
      </div>
    </div>
  </div>

</section>
  )
}

export default Newsletter
