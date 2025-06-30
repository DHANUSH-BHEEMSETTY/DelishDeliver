import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const audio = new Audio('/scooter-zoom.mp3');
    audio.volume = 0.6; // Optional: set volume lower
    const playAudio = () => {
      audio.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    };

    // Trigger once when DOM is ready
    window.addEventListener('DOMContentLoaded', playAudio);

    // Cleanup event on unmount
    return () => {
      window.removeEventListener('DOMContentLoaded', playAudio);
    };
  }, []);

  return (
    <div className="header" id="home">
      <div className="buildings"></div>
      <div className="scooter">
        <img src="/scooter_rider.png" alt="Delivery Rider" />
        <div className="dust-trail"></div>
      </div>
      <div className="header-contents">
        <h2>Your Favorite Food in Minutes</h2>
        <p>Delicious Food | Comfort Menu</p>
        <button className="pulse-btn">Order Now!!</button>
      </div>
    </div>
  );
};

export default Header;
