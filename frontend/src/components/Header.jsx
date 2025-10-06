import React from 'react';
import { assets } from '../assets/assets';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">

      {/* --------- Header Left --------- */}
      <div className="header-left">
        <p className="header-title">
          Find and Book <br /> Trusted Medical Experts
        </p>

        <div className="header-info">
          <img className="group-profiles" src={assets.group_profiles} alt="User profiles" />
          <p>
            Browse verified doctors across multiple specialties and <br className="line-break" />
            book appointments with ease and confidence.
          </p>
        </div>

        <a href="#speciality" className="book-btn">
          Book Now <img className="arrow-icon" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="header-right">
        <img className="header-image" src={assets.header_img} alt="Doctor consultation illustration" />
      </div>

    </div>
  );
};

export default Header;
