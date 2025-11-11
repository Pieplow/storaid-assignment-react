import React, { useState } from 'react';
import Button from '../../generics/Button';
import SectionText from '../../generics/SectionText';
import { sendSubscribe } from '../../services/api'
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(isValidEmail(value) ? '' : 'Invalid email address');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email before submitting");
     return;
  }

  setError('');
  setMessage('');
  setLoading(true);

  try {
    const response = await sendSubscribe({ email }); 
    setMessage(response.message || "You're now subscribed!");
    setEmail('');
  } catch (err) {
    setError('Subscription failed. Please try again later.');
  } finally {
    setLoading(false);
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
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address
                </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email *"
                required
                value={email}
                onChange={handleChange}
              />
       

              <Button label={loading ? "Submitting..." : "Submit"} 
              disabled={loading} />
              <div className="mt-3">
                    {error && <div role="alert" className="error text-danger">{error}</div>}
            {message && <div role="alert" className="text-success mt-2">{message}</div>}
             </div>
            </form>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
