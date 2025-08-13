
import React, { useState } from 'react';
import './ApplicationTracking.css';

const ApplicationTracking = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const applications = [
    {
      id: 1,
      jobTitle: 'Senior React Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      appliedDate: '2024-01-20',
      status: 'interview_scheduled',
      stage: 'Technical Interview',
      salary: '$120,000 - $150,000',
      nextStep: 'Technical interview on Jan 25, 2024 at 2:00 PM',
      progress: 75,
      recruiterContact: 'Sarah Johnson'
    },
    {
      id: 2,
      jobTitle: 'Full Stack Engineer',
      company: 'Innovation Labs',
      location: 'Remote',
      appliedDate: '2024-01-18',
      status: 'under_review',
      stage: 'Resume Review',
      salary: '$110,000 - $140,000',
      nextStep: 'Waiting for initial screening call',
      progress: 25,
      recruiterContact: 'Mike Chen'
    },
    {
      id: 3,
      jobTitle: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      appliedDate: '2024-01-15',
      status: 'rejected',
      stage: 'Application Rejected',
      salary: '$90,000 - $120,000',
      nextStep: 'Application was not selected for this position',
      progress: 0,
      recruiterContact: 'Emily Davis'
    },
    {
      id: 4,
      jobTitle: 'React Native Developer',
      company: 'MobileFirst Inc',
      location: 'Austin, TX',
      appliedDate: '2024-01-22',
      status: 'offer_received',
      stage: 'Offer Negotiation',
      salary: '$105,000 - $130,000',
      nextStep: 'Review offer package and respond by Jan 26',
      progress: 90,
      recruiterContact: 'Alex Rodriguez'
    },
    {
      id: 5,
      jobTitle: 'JavaScript Engineer',
      company: 'WebDev Corp',
      location: 'Seattle, WA',
      appliedDate: '2024-01-12',
      status: 'applied',
      stage: 'Application Submitted',
      salary: '$95,000 - $125,000',
      nextStep: 'Application submitted successfully',
      progress: 10,
      recruiterContact: 'Lisa Wong'
    }
  ];

  const getStatusConfig = (status) => {
    const configs = {
      applied: { color: '#6c757d', label: 'Applied', icon: '📄' },
      under_review: { color: '#ffc107', label: 'Under Review', icon: '👁️' },
      interview_scheduled: { color: '#17a2b8', label: 'Interview Scheduled', icon: '📅' },
      offer_received: { color: '#28a745', label: 'Offer Received', icon: '🎉' },
      rejected: { color: '#dc3545', label: 'Rejected', icon: '❌' }
    };
    return configs[status] || configs.applied;
  };

  const filteredApplications = applications.filter(app => {
    if (selectedFilter === 'all') return true;
    return app.status === selectedFilter;
  });

  const getFilterCount = (status) => {
    if (status === 'all') return applications.length;
    return applications.filter(app => app.status === status).length;
  };

  return (
    <div className="application-tracking">
      <div className="tracking-header">
        <div className="container">
          <h1>Application Tracking</h1>
          <p>Monitor your job applications and stay on top of your opportunities</p>
        </div>
      </div>

      <div className="tracking-content">
        <div className="container">
          <div className="tracking-stats">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>{applications.length}</h3>
                <p>Total Applications</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👁️</div>
              <div className="stat-content">
                <h3>{getFilterCount('under_review')}</h3>
                <p>Under Review</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-content">
                <h3>{getFilterCount('interview_scheduled')}</h3>
                <p>Interviews</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎉</div>
              <div className="stat-content">
                <h3>{getFilterCount('offer_received')}</h3>
                <p>Offers</p>
              </div>
            </div>
          </div>

          <div className="tracking-filters">
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                All ({getFilterCount('all')})
              </button>
              <button 
                className={`filter-tab ${selectedFilter === 'applied' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('applied')}
              >
                Applied ({getFilterCount('applied')})
              </button>
              <button 
                className={`filter-tab ${selectedFilter === 'under_review' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('under_review')}
              >
                Under Review ({getFilterCount('under_review')})
              </button>
              <button 
                className={`filter-tab ${selectedFilter === 'interview_scheduled' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('interview_scheduled')}
              >
                Interviews ({getFilterCount('interview_scheduled')})
              </button>
              <button 
                className={`filter-tab ${selectedFilter === 'offer_received' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('offer_received')}
              >
                Offers ({getFilterCount('offer_received')})
              </button>
            </div>
            <div className="sort-options">
              <select className="sort-select">
                <option>Sort by Date Applied</option>
                <option>Sort by Company</option>
                <option>Sort by Status</option>
                <option>Sort by Salary</option>
              </select>
            </div>
          </div>

          <div className="applications-list">
            {filteredApplications.map(app => {
              const statusConfig = getStatusConfig(app.status);
              return (
                <div key={app.id} className="application-card">
                  <div className="card-header">
                    <div className="job-info">
                      <h3>{app.jobTitle}</h3>
                      <p className="company">{app.company} • {app.location}</p>
                      <p className="salary">{app.salary}</p>
                    </div>
                    <div className="status-info">
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: statusConfig.color }}
                      >
                        {statusConfig.icon} {statusConfig.label}
                      </span>
                      <p className="applied-date">Applied: {app.appliedDate}</p>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span className="current-stage">{app.stage}</span>
                      <span className="progress-percentage">{app.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${app.progress}%`,
                          backgroundColor: statusConfig.color 
                        }}
                      ></div>
                    </div>
                    <div className="progress-stages">
                      <div className={`stage ${app.progress >= 10 ? 'completed' : ''}`}>
                        <div className="stage-dot"></div>
                        <span>Applied</span>
                      </div>
                      <div className={`stage ${app.progress >= 25 ? 'completed' : ''}`}>
                        <div className="stage-dot"></div>
                        <span>Review</span>
                      </div>
                      <div className={`stage ${app.progress >= 50 ? 'completed' : ''}`}>
                        <div className="stage-dot"></div>
                        <span>Interview</span>
                      </div>
                      <div className={`stage ${app.progress >= 75 ? 'completed' : ''}`}>
                        <div className="stage-dot"></div>
                        <span>Decision</span>
                      </div>
                      <div className={`stage ${app.progress >= 100 ? 'completed' : ''}`}>
                        <div className="stage-dot"></div>
                        <span>Offer</span>
                      </div>
                    </div>
                  </div>

                  <div className="next-step">
                    <h4>Next Step:</h4>
                    <p>{app.nextStep}</p>
                  </div>

                  <div className="card-footer">
                    <div className="recruiter-info">
                      <span>👤 Recruiter: {app.recruiterContact}</span>
                    </div>
                    <div className="action-buttons">
                      <button className="action-btn secondary">View Details</button>
                      <button className="action-btn secondary">Send Follow-up</button>
                      <button className="action-btn primary">Contact Recruiter</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredApplications.length === 0 && (
            <div className="no-applications">
              <div className="no-applications-icon">📭</div>
              <h3>No applications found</h3>
              <p>No applications match your current filter selection.</p>
              <button className="browse-jobs-btn">Browse Jobs</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracking;