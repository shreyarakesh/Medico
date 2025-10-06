import React from 'react';
import './BookingGuide.css';

const BookingGuide = () => {
  return (
    <div className="booking-guide">
      <h1 className="title">Booking Process Guide</h1>
      <h2 className="subtitle">Prescripto – Book a Doctor in Minutes</h2>
      <p className="intro">
        This guide walks you through the simple steps to book a doctor’s appointment on the Prescripto platform — <strong>no login or account required.</strong>
      </p>

      <ol className="steps">
        <li>
          <h3>Visit the Doctors Page</h3>
          <p>Go to the “All Doctors” section on the website. You’ll see a comprehensive list of doctors available on the platform.</p>
        </li>

        <li>
          <h3>Filter by Speciality <span className="optional">(Optional)</span></h3>
          <p>To narrow your search:</p>
          <ul>
            <li>Use the Speciality Filter to select fields like:</li>
            <li>General Physician</li>
            <li>Dermatologist</li>
            <li>Gynecologist</li>
            <li>Pediatrician</li>
            <li>And more</li>
          </ul>
        </li>

        <li>
          <h3>Check Doctor Availability</h3>
          <p>Once you see the filtered list:</p>
          <ul>
            <li>View each doctor’s available time slots</li>
            <li>You can also check:
              <ul>
                <li>Experience</li>
                <li>Consultation type (online or in-person)</li>
                <li>Languages spoken (if applicable)</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <h3>Select a Doctor</h3>
          <p>Click on a doctor card to open their profile page.</p>
          <p>You’ll see:</p>
          <ul>
            <li>Full profile and qualifications</li>
            <li>Available time slots for booking</li>
            <li>Consultation fees</li>
          </ul>
        </li>

        <li>
          <h3>Choose a Time Slot</h3>
          <p>On the doctor’s profile:</p>
          <ul>
            <li>Select your preferred date</li>
            <li>Pick an available time slot</li>
            <li>Click “Book Now” or “Proceed”</li>
          </ul>
        </li>

        <li>
          <h3>Enter Patient Details</h3>
          <p>Fill in a simple form with:</p>
          <ul>
            <li>Full name of the patient</li>
            <li>Mobile number or email</li>
            <li>Brief description of the health issue (optional)</li>
          </ul>
        </li>

        <li>
          <h3>Confirm Appointment</h3>
          <p>After filling in the form:</p>
          <ul>
            <li>Review appointment summary</li>
            <li>Click “Confirm Appointment”</li>
            <li>You will receive a confirmation via SMS or email</li>
          </ul>
        </li>
      </ol>

      <div className="done">
        ✅ <strong>Done!</strong> You’ve successfully booked your appointment without needing to log in or create an account.
      </div>
    </div>
  );
};

export default BookingGuide;
