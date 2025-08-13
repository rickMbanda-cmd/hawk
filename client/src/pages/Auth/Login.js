import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await authService.login({ email: formData.email, password: formData.password });
      console.log('Login successful:', response);
      
      // Redirect based on user role
      if (response.user.role === 'candidate') {
        navigate('/candidate-dashboard');
      } else if (response.user.role === 'employer') {
        navigate('/employer-dashboard');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data?.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/whitlog.png" alt="Harper & Whitman" className="auth-logo" />
            <h1>Welcome Back</h1>
            <p>Sign in to Harper & Whitman Global Solutions</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <p className="error-message">{error}</p>}
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
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <button type="button" className="social-button google">
              <span className="social-icon">🔍</span>
              Continue with Google
            </button>

            <button type="button" className="social-button linkedin">
              <span className="social-icon">💼</span>
              Continue with LinkedIn
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;