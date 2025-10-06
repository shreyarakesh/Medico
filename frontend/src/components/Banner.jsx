import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="banner">
      {/* Left Content */}
      <div className="banner__content">
        <h1 className="banner__heading">Your Health, Our Priority</h1>
        <h2 className="banner__subheading">
          Book Appointments Instantly with Verified Medical Experts
        </h2>
        <button className="banner__button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="banner__image-wrapper">
        <img
          src={assets.appointment_img}
          alt="Doctor appointment illustration"
          className="banner__image"
        />
      </div>
    </section>
  );
};

export default Banner;
