import React from 'react';
import './AppDownload.css';
import { FaBolt, FaStar, FaShieldAlt, FaTags, FaLeaf, FaHeadset } from 'react-icons/fa';


const AppDownload = () => {
  return (
    <div className="why-choose-us" id="app-download">
      <h2>Why Choose Us</h2>
      <p className="why-subtext">We deliver not just food, but an experience you’ll love.</p>

      <div className="features-grid">
        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Super Fast Delivery</h3>
          <p>We get your food to you hot and fresh in record time.</p>
        </div>

        <div className="feature-card">
          <FaStar className="feature-icon" />
          <h3>Top-rated Restaurants</h3>
          <p>Choose from the best local and premium eateries around you.</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>Your transactions are protected with industry-grade encryption.</p>
        </div>

        <div className="feature-card">
          <FaTags className="feature-icon" />
          <h3>Best Deals</h3>
          <p>Enjoy discounts, cashbacks, and combo offers every time you order.</p>
        </div>
        <div className="feature-card">
  <FaLeaf className="feature-icon" />
  <h3>Fresh Ingredients</h3>
  <p>We partner with kitchens that use fresh, locally sourced ingredients daily.</p>
</div>

<div className="feature-card">
  <FaHeadset className="feature-icon" />
  <h3>24/7 Support</h3>
  <p>Our customer support team is always ready to assist you — day or night.</p>
</div>

      </div>
    </div>
  );
};

export default AppDownload;
