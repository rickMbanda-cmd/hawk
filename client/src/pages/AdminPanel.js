
import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const adminStats = {
    totalUsers: 1542,
    activeJobs: 89,
    applications: 3240,
    companies: 156
  };

  const recentActivity = [
    { id: 1, action: 'New user registration', user: 'john.doe@email.com', time: '2 minutes ago' },
    { id: 2, action: 'Job posting created', company: 'Tech Corp', time: '15 minutes ago' },
    { id: 3, action: 'Application submitted', job: 'Senior Developer', time: '1 hour ago' },
    { id: 4, action: 'Company profile updated', company: 'Innovation Inc', time: '2 hours ago' }
  ];

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <div className="admin-header-content">
          <img src="/whitlog.png" alt="Harper & Whitman" className="admin-logo" />
          <div>
            <h1>Admin Control Panel</h1>
            <p>Harper & Whitman Global Solutions</p>
          </div>
        </div>
        <button className="admin-logout-btn">Logout</button>
      </div>

      <div className="admin-nav">
        <button 
          className={`admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Users
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          💼 Jobs
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'companies' ? 'active' : ''}`}
          onClick={() => setActiveTab('companies')}
        >
          🏢 Companies
        </button>
        <button 
          className={`admin-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'dashboard' && (
          <div className="admin-dashboard">
            <div className="admin-stats">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>{adminStats.totalUsers}</h3>
                  <p>Total Users</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💼</div>
                <div className="stat-info">
                  <h3>{adminStats.activeJobs}</h3>
                  <p>Active Jobs</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📋</div>
                <div className="stat-info">
                  <h3>{adminStats.applications}</h3>
                  <p>Applications</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-info">
                  <h3>{adminStats.companies}</h3>
                  <p>Companies</p>
                </div>
              </div>
            </div>

            <div className="admin-sections">
              <div className="admin-section">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-info">
                        <p className="activity-action">{activity.action}</p>
                        <p className="activity-detail">
                          {activity.user && activity.user}
                          {activity.company && activity.company}
                          {activity.job && activity.job}
                        </p>
                      </div>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-section">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="quick-action-btn">📧 Send Notifications</button>
                  <button className="quick-action-btn">📊 Generate Report</button>
                  <button className="quick-action-btn">🔄 Sync Database</button>
                  <button className="quick-action-btn">🧹 Clean Temp Files</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="admin-users">
            <h2>User Management</h2>
            <p>User management features coming soon...</p>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="admin-jobs">
            <h2>Job Management</h2>
            <p>Job management features coming soon...</p>
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="admin-companies">
            <h2>Company Management</h2>
            <p>Company management features coming soon...</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="admin-settings">
            <h2>System Settings</h2>
            <p>System settings coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;