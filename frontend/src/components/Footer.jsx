import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import hospitalLogo from './download-1.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">

        {/* Left Section */}
        <div className="footer-section footer-left">
          <img className="footer-logo" src={hospitalLogo} alt="Medico Logo" />
          <p className="footer-desc">
            Medico is your trusted partner in digital healthcare. We help you connect with certified doctors, book appointments, and manage your health—all in one place.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <p className="footer-title">COMPANY</p>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <p className="footer-title">CONTACT</p>
          <ul className="footer-contact">
            <li>+91-9876543210</li>
            <li>support@medico.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-copyright">
          &copy; 2024 Medico.com — All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
