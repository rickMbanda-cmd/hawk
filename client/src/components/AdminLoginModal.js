
import React, { useState, useEffect } from 'react';
import './AdminLoginModal.css';

const AdminLoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    accessCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate admin login
    setTimeout(() => {
      console.log('Admin login attempt:', formData);
      setIsLoading(false);
      // Add your admin authentication logic here
      onClose();
    }, 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="admin-modal-overlay" onClick={handleOverlayClick}>
      <div className="admin-modal">
        <div className="admin-modal-header">
          <div className="admin-modal-icon">🔐</div>
          <h2>Admin Access</h2>
          <button className="admin-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-form-group">
            <label htmlFor="username">Admin Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter admin username"
              required
              autoComplete="off"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter admin password"
              required
              autoComplete="off"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="accessCode">Security Access Code</label>
            <input
              type="password"
              id="accessCode"
              name="accessCode"
              value={formData.accessCode}
              onChange={handleChange}
              placeholder="Enter 6-digit access code"
              required
              autoComplete="off"
              maxLength="6"
            />
          </div>

          <button 
            type="submit" 
            className="admin-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Authenticating...
              </>
            ) : (
              'Access Admin Panel'
            )}
          </button>
        </form>

        <div className="admin-warning">
          ⚠️ Unauthorized access is strictly prohibited and monitored.
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;