
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your <span className="highlight">Dream Career</span>
          </h1>
          <p className="hero-subtitle">
            Connect with top employers and discover opportunities that match your skills and ambitions
          </p>
          <div className="hero-buttons">
            <Link to="/jobs" className="btn btn-primary">
              Browse Jobs
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">💼</div>
          <div className="floating-card card-2">🚀</div>
          <div className="floating-card card-3">⭐</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Harper & Whitman?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Targeted Matching</h3>
              <p>Our AI-powered system matches you with jobs that perfectly fit your skills and preferences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Applications</h3>
              <p>Apply to multiple positions with one click using our streamlined application process</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>Monitor your application status and get insights into your job search performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Active Job Listings</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Companies Hiring</p>
            </div>
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Successful Placements</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of professionals who found their perfect job through Pioneer</p>
          <Link to="/register" className="btn btn-primary btn-large">
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;