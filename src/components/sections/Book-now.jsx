import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Book-now.css";
import SectionText from '../../generics/SectionText';
import Button from '../../generics/Button';

function BookNow() {
  return (
    <section className="book-now-section text-center py-5 d-flex flex-column justify-content-center align-items-center">
    
      <SectionText
        label=""
        title="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />
        <Button label="Book Now" className="btn-hover-dark" />
    
    </section>
  );
}

export default BookNow;























