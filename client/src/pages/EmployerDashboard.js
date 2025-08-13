import React, { useState, useEffect } from 'react';
import authService from '../services/authService';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage or service
    const userData = authService.getUser();
    setUser(userData);
  }, []);

  const jobPostings = [
    {
      id: 1,
      title: 'Senior React Developer',
      status: 'Active',
      applications: 24,
      views: 156,
      postedDate: '2024-01-15',
      salary: '$120,000 - $150,000'
    },
    {
      id: 2,
      title: 'Product Manager',
      status: 'Draft',
      applications: 0,
      views: 0,
      postedDate: '2024-01-18',
      salary: '$140,000 - $170,000'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      status: 'Expired',
      applications: 18,
      views: 89,
      postedDate: '2024-01-01',
      salary: '$80,000 - $110,000'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      candidateName: 'Sarah Johnson',
      position: 'Senior React Developer',
      experience: '5 years',
      score: 95,
      appliedDate: '2024-01-20'
    },
    {
      id: 2,
      candidateName: 'Michael Chen',
      position: 'Senior React Developer',
      experience: '7 years',
      score: 88,
      appliedDate: '2024-01-19'
    },
    {
      id: 3,
      candidateName: 'Emily Davis',
      position: 'UI/UX Designer',
      experience: '4 years',
      score: 92,
      appliedDate: '2024-01-18'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return '#28a745';
      case 'draft': return '#ffc107';
      case 'expired': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#28a745';
    if (score >= 80) return '#ffc107';
    return '#dc3545';
  };

  return (
    <div className="employer-dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="company-welcome">
              <h1>Welcome back, {user ? user.companyName || user.firstName : 'Company'}!</h1>
              <p>Manage your hiring pipeline and find the best talent</p>
            </div>
            <div className="quick-actions">
              <button className="action-btn primary">Post New Job</button>
              <button className="action-btn secondary">View Analytics</button>
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
              className={`tab-button ${activeTab === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveTab('jobs')}
            >
              💼 Job Postings
            </button>
            <button 
              className={`tab-button ${activeTab === 'candidates' ? 'active' : ''}`}
              onClick={() => setActiveTab('candidates')}
            >
              👥 Candidates
            </button>
            <button 
              className={`tab-button ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              📈 Analytics
            </button>
            <button 
              className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
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
                  <div className="stat-icon">💼</div>
                  <div className="stat-content">
                    <h3>12</h3>
                    <p>Active Jobs</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <h3>156</h3>
                    <p>Total Applications</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👁️</div>
                  <div className="stat-content">
                    <h3>2,341</h3>
                    <p>Profile Views</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-content">
                    <h3>8</h3>
                    <p>Hires This Month</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-sections">
                <div className="section">
                  <h2>Recent Job Postings</h2>
                  <div className="jobs-list">
                    {jobPostings.slice(0, 3).map(job => (
                      <div key={job.id} className="job-item">
                        <div className="job-info">
                          <h4>{job.title}</h4>
                          <p>{job.salary}</p>
                          <span className="job-stats">{job.applications} applications • {job.views} views</span>
                        </div>
                        <div className="job-status">
                          <span 
                            className="status-badge"
                            style={{ backgroundColor: getStatusColor(job.status) }}
                          >
                            {job.status}
                          </span>
                          <span className="posted-date">{job.postedDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-btn">View All Jobs</button>
                </div>

                <div className="section">
                  <h2>Top Candidates</h2>
                  <div className="candidates-list">
                    {recentApplications.map(candidate => (
                      <div key={candidate.id} className="candidate-item">
                        <div className="candidate-info">
                          <h4>{candidate.candidateName}</h4>
                          <p>{candidate.position}</p>
                          <span className="experience">{candidate.experience} experience</span>
                        </div>
                        <div className="candidate-score">
                          <div 
                            className="score-circle"
                            style={{ borderColor: getScoreColor(candidate.score) }}
                          >
                            <span style={{ color: getScoreColor(candidate.score) }}>
                              {candidate.score}%
                            </span>
                          </div>
                          <button className="review-btn">Review</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="jobs-content">
              <div className="jobs-header">
                <h2>Job Postings Management</h2>
                <div className="job-actions">
                  <button className="action-btn primary">Post New Job</button>
                  <select className="filter-select">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Expired</option>
                  </select>
                </div>
              </div>
              <div className="jobs-grid">
                {jobPostings.map(job => (
                  <div key={job.id} className="job-card">
                    <div className="card-header">
                      <h3>{job.title}</h3>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(job.status) }}
                      >
                        {job.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p className="salary">{job.salary}</p>
                      <p className="job-stats">{job.applications} applications • {job.views} views</p>
                      <p className="posted-date">Posted: {job.postedDate}</p>
                    </div>
                    <div className="card-actions">
                      <button className="action-btn secondary">Edit</button>
                      <button className="action-btn primary">View Applications</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="candidates-content">
              <h2>Candidate Pipeline</h2>
              <div className="pipeline-filters">
                <select className="filter-select">
                  <option>All Positions</option>
                  <option>Senior React Developer</option>
                  <option>Product Manager</option>
                  <option>UI/UX Designer</option>
                </select>
                <select className="filter-select">
                  <option>All Stages</option>
                  <option>Applied</option>
                  <option>Screening</option>
                  <option>Interview</option>
                  <option>Offer</option>
                </select>
              </div>
              <div className="candidates-grid">
                {recentApplications.map(candidate => (
                  <div key={candidate.id} className="candidate-card">
                    <div className="candidate-avatar">
                      {candidate.candidateName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="candidate-details">
                      <h3>{candidate.candidateName}</h3>
                      <p>{candidate.position}</p>
                      <p className="experience">{candidate.experience} experience</p>
                      <div className="match-score">
                        <span>Match: </span>
                        <span 
                          className="score"
                          style={{ color: getScoreColor(candidate.score) }}
                        >
                          {candidate.score}%
                        </span>
                      </div>
                    </div>
                    <div className="candidate-actions">
                      <button className="action-btn secondary">View Profile</button>
                      <button className="action-btn primary">Schedule Interview</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="analytics-content">
              <h2>Recruitment Analytics</h2>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Application Trends</h3>
                  <div className="chart-placeholder">
                    📊 Chart showing application trends over time
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Source Performance</h3>
                  <div className="source-stats">
                    <div className="source-item">
                      <span>Harper & Whitman Platform</span>
                      <span className="percentage">65%</span>
                    </div>
                    <div className="source-item">
                      <span>Employee Referrals</span>
                      <span className="percentage">20%</span>
                    </div>
                    <div className="source-item">
                      <span>Social Media</span>
                      <span className="percentage">15%</span>
                    </div>
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Time to Hire</h3>
                  <div className="time-stats">
                    <div className="time-metric">
                      <span className="metric-value">18</span>
                      <span className="metric-label">Average Days</span>
                    </div>
                    <div className="time-metric">
                      <span className="metric-value">12</span>
                      <span className="metric-label">Best Case</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <h2>Company Settings</h2>
              <div className="settings-sections">
                <div className="settings-section">
                  <h3>Company Information</h3>
                  <div className="form-grid">
                    <input type="text" placeholder="Company Name" defaultValue="TechCorp Solutions" />
                    <input type="text" placeholder="Industry" defaultValue="Technology" />
                    <input type="text" placeholder="Company Size" defaultValue="100-500 employees" />
                    <input type="text" placeholder="Website" defaultValue="www.techcorp.com" />
                  </div>
                </div>
                <div className="settings-section">
                  <h3>Notification Preferences</h3>
                  <div className="notification-options">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Email notifications for new applications</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Weekly analytics reports</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>SMS notifications for urgent updates</span>
                    </label>
                  </div>
                </div>
                <div className="settings-section">
                  <h3>Hiring Preferences</h3>
                  <div className="form-grid">
                    <select>
                      <option>Remote Work Policy</option>
                      <option>Fully Remote</option>
                      <option>Hybrid</option>
                      <option>On-site Only</option>
                    </select>
                    <select>
                      <option>Preferred Experience Level</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="save-settings-btn">Save Changes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;