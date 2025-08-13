import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <div className="footer-logo">
              <img src="/whitlog.png" alt="Harper & Whitman" className="footer-logo-img" />
              Harper & Whitman Global Solutions
            </div>
            <p className="footer-description">
              Connecting exceptional talent with innovative companies worldwide. 
              Your career journey starts here.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📧</a>
            </div>
          </div>

        <div className="footer-section">
          <h4>For Job Seekers</h4>
          <ul className="footer-links">
            <li><Link to="/jobs">Browse Jobs</Link></li>
            <li><Link to="/candidate-dashboard">My Dashboard</Link></li>
            <li><Link to="/applications">Track Applications</Link></li>
            <li><Link to="/register">Create Account</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Employers</h4>
          <ul className="footer-links">
            <li><Link to="/employer-dashboard">Post Jobs</Link></li>
            <li><Link to="/company-profile">Company Profile</Link></li>
            <li><Link to="/billing">Pricing Plans</Link></li>
            <li><Link to="/contact">Partner With Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Harper & Whitman Global Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;