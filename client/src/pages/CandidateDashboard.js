import React, { useState, useEffect } from 'react';
import authService from '../services/authService';
import './CandidateDashboard.css';

const CandidateDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage or service
    const userData = authService.getUser();
    setUser(userData);
  }, []);

  const recentApplications = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior React Developer',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-15',
      salary: '$120,000 - $150,000'
    },
    {
      id: 2,
      company: 'Innovation Labs',
      position: 'Full Stack Engineer',
      status: 'Under Review',
      appliedDate: '2024-01-12',
      salary: '$110,000 - $140,000'
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      status: 'Rejected',
      appliedDate: '2024-01-10',
      salary: '$90,000 - $120,000'
    }
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'React Developer',
      company: 'Digital Agency',
      location: 'San Francisco, CA',
      salary: '$100,000 - $130,000',
      match: 95
    },
    {
      id: 2,
      title: 'JavaScript Engineer',
      company: 'Tech Startup',
      location: 'Remote',
      salary: '$95,000 - $125,000',
      match: 88
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'interview scheduled': return '#28a745';
      case 'under review': return '#ffc107';
      case 'rejected': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="user-welcome">
              <h1>Welcome back, {user ? user.firstName : 'User'}!</h1>
              <p>Ready to find your next opportunity?</p>
            </div>
            <div className="profile-completion">
              <div className="completion-circle">
                <span>85%</span>
              </div>
              <div className="completion-text">
                <h4>Profile Complete</h4>
                <p>Add skills to improve matches</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-nav">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              📄 Applications
            </button>
            <button 
              className={`tab-button ${activeTab === 'recommendations' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommendations')}
            >
              🎯 Recommendations
            </button>
            <button 
              className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-content">
                    <h3>15</h3>
                    <p>Applications Sent</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👁️</div>
                  <div className="stat-content">
                    <h3>8</h3>
                    <p>Profile Views</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📞</div>
                  <div className="stat-content">
                    <h3>3</h3>
                    <p>Interviews</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-content">
                    <h3>12</h3>
                    <p>Job Matches</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-sections">
                <div className="section">
                  <h2>Recent Applications</h2>
                  <div className="applications-list">
                    {recentApplications.slice(0, 3).map(app => (
                      <div key={app.id} className="application-item">
                        <div className="application-info">
                          <h4>{app.position}</h4>
                          <p>{app.company}</p>
                          <span className="salary">{app.salary}</span>
                        </div>
                        <div className="application-status">
                          <span 
                            className="status-badge"
                            style={{ backgroundColor: getStatusColor(app.status) }}
                          >
                            {app.status}
                          </span>
                          <span className="applied-date">{app.appliedDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-btn">View All Applications</button>
                </div>

                <div className="section">
                  <h2>Recommended Jobs</h2>
                  <div className="recommendations-list">
                    {recommendedJobs.map(job => (
                      <div key={job.id} className="recommendation-item">
                        <div className="job-info">
                          <h4>{job.title}</h4>
                          <p>{job.company} • {job.location}</p>
                          <span className="salary">{job.salary}</span>
                        </div>
                        <div className="match-score">
                          <div className="match-circle">
                            <span>{job.match}%</span>
                          </div>
                          <button className="apply-btn">Apply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="applications-content">
              <div className="applications-header">
                <h2>My Applications</h2>
                <div className="filter-options">
                  <select className="filter-select">
                    <option>All Status</option>
                    <option>Under Review</option>
                    <option>Interview Scheduled</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
              <div className="applications-grid">
                {recentApplications.map(app => (
                  <div key={app.id} className="application-card">
                    <div className="card-header">
                      <h3>{app.position}</h3>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(app.status) }}
                      >
                        {app.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p className="company">{app.company}</p>
                      <p className="salary">{app.salary}</p>
                      <p className="applied-date">Applied: {app.appliedDate}</p>
                    </div>
                    <div className="card-actions">
                      <button className="action-btn secondary">View Details</button>
                      <button className="action-btn primary">Message HR</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="recommendations-content">
              <h2>Job Recommendations</h2>
              <p>Based on your profile and preferences</p>
              <div className="recommendations-grid">
                {recommendedJobs.map(job => (
                  <div key={job.id} className="job-recommendation-card">
                    <div className="match-indicator">
                      <span>{job.match}% Match</span>
                    </div>
                    <h3>{job.title}</h3>
                    <p className="company">{job.company}</p>
                    <p className="location">📍 {job.location}</p>
                    <p className="salary">💰 {job.salary}</p>
                    <div className="card-actions">
                      <button className="action-btn secondary">Save</button>
                      <button className="action-btn primary">Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="profile-content">
              <h2>Profile Settings</h2>
              <div className="profile-sections">
                <div className="profile-section">
                  <h3>Personal Information</h3>
                  <div className="form-grid">
                    <input type="text" placeholder="First Name" value={user ? user.firstName : ''}/>
                    <input type="text" placeholder="Last Name" value={user ? user.lastName : ''}/>
                    <input type="email" placeholder="Email" value={user ? user.email : ''}/>
                    <input type="tel" placeholder="Phone" />
                  </div>
                </div>
                <div className="profile-section">
                  <h3>Professional Summary</h3>
                  <textarea placeholder="Tell us about your experience and career goals..."></textarea>
                </div>
                <div className="profile-section">
                  <h3>Skills</h3>
                  <div className="skills-input">
                    <input type="text" placeholder="Add a skill..." />
                    <button className="add-skill-btn">Add</button>
                  </div>
                  <div className="skills-list">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Node.js</span>
                  </div>
                </div>
              </div>
              <button className="save-profile-btn">Save Changes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;