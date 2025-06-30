import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const handleHomeNavigation = () => {
    setMenu('home');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <Link to='/' onClick={handleHomeNavigation}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link
          to='/'
          onClick={handleHomeNavigation}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => { setMenu("menu"); setIsMobileMenuOpen(false); }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href='#app-download'
          onClick={() => { setMenu("mobile-app"); setIsMobileMenuOpen(false); }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          WhyChooseUs
        </a>
        <a
          href='#footer'
          onClick={() => { setMenu("contact-us"); setIsMobileMenuOpen(false); }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </div>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" /><p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" /><p>Logout</p>
              </li>
            </ul>
          </div>
        )}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
