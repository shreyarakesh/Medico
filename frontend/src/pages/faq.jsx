import React from 'react';
import './faq.css'; // Optional if you want custom styles

const FAQs = () => {
  return (
    <div className="faq-container">
      <h1>FAQs for Doctor Appointment Bot</h1>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <p><strong>Q1: How do I book an appointment?</strong></p>
          <p>A1: You can book an appointment by selecting a doctor and choosing an available date and time slot.</p>
        </div>
        <div className="faq-item">
          <p><strong>Q2: Can I cancel or reschedule my appointment?</strong></p>
          <p>A2: Yes, you can cancel or reschedule your appointment from your profile dashboard.</p>
        </div>
        <div className="faq-item">
          <p><strong>Q3: What are the payment options?</strong></p>
          <p>A3: We accept credit cards, debit cards, and digital wallets like PayPal and Apple Pay.</p>
        </div>
      </section>

      <section className="faq-section">
        <h2>Conversational Flow: Booking Appointment</h2>
        <div className="chat-flow">
          <p><strong>User:</strong> I want to book an appointment.</p>
          <p><strong>Bot:</strong> Sure! Which specialty are you looking for?</p>
          <p><strong>User:</strong> Dermatologist</p>
          <p><strong>Bot:</strong> Great! Here are some available dermatologists: Dr. Smith, Dr. Lee. Which one would you like?</p>
          <p><strong>User:</strong> Dr. Smith</p>
          <p><strong>Bot:</strong> What date would you like to book your appointment?</p>
          <p><strong>User:</strong> June 20</p>
          <p><strong>Bot:</strong> You have selected June 20 with Dr. Smith. Confirm? (Yes/No)</p>
          <p><strong>User:</strong> Yes</p>
          <p><strong>Bot:</strong> Your appointment is confirmed. See you then!</p>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
