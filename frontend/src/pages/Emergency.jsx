import React from 'react';
import './Emergency.css';

const Emergency = () => {
  return (
    <div className="emergency-container">
      <h1 className="title">Emergency Contacts & Support Information</h1>
      <h2 className="subtitle">Prescripto – We’re Here for You Anytime</h2>
      <p className="intro">
        This document provides essential contact information for immediate support and emergency services available through the Prescripto platform.
      </p>

      <ol className="sections">
        <li>
          <h3>Medical Emergency Support</h3>
          <p className="warning">⚠️ In case of a medical emergency, please contact your local emergency number immediately.</p>
          <p><em>Prescripto is not a substitute for emergency medical services.</em></p>
        </li>

        <li>
          <h3>Customer Support</h3>
          <p>For any assistance regarding doctor appointments, cancellations, or technical issues, reach out to our customer care team:</p>
          <ul className="contact-list">
            <li>📞 Phone: <a href="tel:+919876543210">+91-9876543210</a></li>
            <li>📧 Email: <a href="mailto:support@prescripto.com">support@prescripto.com</a></li>
            <li>🕐 Support Hours: 9:00 AM to 8:00 PM IST (Monday to Saturday)</li>
          </ul>
        </li>

        <li>
          <h3>Chat Support <span className="coming-soon">(Coming Soon)</span></h3>
          <p>You will soon be able to chat live with our support agents directly from the website for faster help.</p>
        </li>

        <li>
          <h3>Feedback & Escalation</h3>
          <p>If you are not satisfied with our services or have any complaints, write to us at:</p>
          <p className="feedback-email">📬 <a href="mailto:feedback@prescripto.com">feedback@prescripto.com</a></p>
          <p>We value your input and will respond within 24-48 business hours.</p>
        </li>

        <li>
          <h3>Clinic-Specific Contact <span className="optional">(if applicable)</span></h3>
          <p>If your appointment is with a specific clinic, contact details will be provided in your appointment confirmation message/email.</p>
        </li>
      </ol>

      <div className="closing-note">
        🛡️ <strong>Your health and safety are our priority.</strong> Don’t hesitate to reach out when in need.
      </div>
    </div>
  );
};

export default Emergency;
