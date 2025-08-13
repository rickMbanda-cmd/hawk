
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'candidate',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Here you would normally make an API call to register the user
    console.log('Register submitted:', formData);
    
    // Redirect based on user type
    if (formData.userType === 'candidate') {
      navigate('/candidate-dashboard');
    } else if (formData.userType === 'employer') {
      navigate('/employer-dashboard');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card register-card">
          <div className="auth-header">
            <img src="/whitlog.png" alt="Harper & Whitman" className="auth-logo" />
            <h1>Join Harper & Whitman</h1>
            <p>Create your account and start your journey</p>
          </div>

          <div className="user-type-selector">
            <label className={`user-type-option ${formData.userType === 'candidate' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="candidate"
                checked={formData.userType === 'candidate'}
                onChange={handleChange}
              />
              <div className="user-type-content">
                <span className="user-type-icon">👤</span>
                <div>
                  <h3>Job Seeker</h3>
                  <p>Find your dream job</p>
                </div>
              </div>
            </label>

            <label className={`user-type-option ${formData.userType === 'employer' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="employer"
                checked={formData.userType === 'employer'}
                onChange={handleChange}
              />
              <div className="user-type-content">
                <span className="user-type-icon">🏢</span>
                <div>
                  <h3>Employer</h3>
                  <p>Find top talent</p>
                </div>
              </div>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Sign in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;