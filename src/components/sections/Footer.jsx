import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* LEFT SIDE */}
          <p className="mb-0">© 2025 StorAid - All rights reserved.</p>

          {/* RIGHT SIDE LINKS */}
          <div className="footer-links d-flex gap-4">
            <a href="/404" className="text-white text-decoration-none">
              Terms & Conditions
            </a>
            <a href="/404" className="text-white text-decoration-none">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
