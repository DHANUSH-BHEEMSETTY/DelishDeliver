import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer-container'>
        <div className="footer-left">
          <img src={assets.logo} alt="DelishDeliver Logo" className='footer-logo' />
          <p>DelishDeliver makes food ordering quick and easy. Enjoy your favorite meals delivered right to your door.</p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Get in Touch</h3>
          <ul>
            <li>+91 7989107910</li>
            <li>DelishDeliver@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2024 DelishDeliver | All rights reserved.</p>
    </footer>
  )
}

export default Footer
