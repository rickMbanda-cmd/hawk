
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/whitlog.png" alt="Harper & Whitman Global Solutions" className="nav-logo-img" />
          <span className="nav-logo-text">Harper & Whitman</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`} onClick={() => setIsMenuOpen(false)}>
            Jobs
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="nav-auth">
            <Link to="/login" className="nav-link login-btn" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="nav-link register-btn" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;