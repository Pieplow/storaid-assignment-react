import React, { useState } from 'react';
import Button from '../../generics/Button';
import SectionText from '../../generics/SectionText';
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(isValidEmail(value) ? '' : 'Invalid email address');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email before submitting");
    } else {
      setError('');
      alert("Email Submitted: " + email);
      setEmail('');
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email *"
                required
                value={email}
                onChange={handleChange}
              />
              {error && <div className="error text-danger">{error}</div>}
              <Button label="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
