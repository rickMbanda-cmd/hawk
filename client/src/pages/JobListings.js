
import React, { useState } from 'react';
import './JobListings.css';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      category: 'technology',
      salary: '$120,000 - $150,000',
      description: 'We are looking for an experienced React developer to join our growing team.',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Full-time',
      category: 'design',
      salary: '$80,000 - $100,000',
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'Growth Inc',
      location: 'Remote',
      type: 'Full-time',
      category: 'marketing',
      salary: '$70,000 - $90,000',
      description: 'Lead our marketing campaigns and drive customer acquisition.',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Boston, MA',
      type: 'Contract',
      category: 'technology',
      salary: '$100,000 - $130,000',
      description: 'Analyze complex datasets and provide actionable insights.',
      posted: '1 week ago'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'remote', label: 'Remote' },
    { value: 'san-francisco', label: 'San Francisco' },
    { value: 'new-york', label: 'New York' },
    { value: 'boston', label: 'Boston' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
                           job.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="job-listings">
      <div className="job-header">
        <div className="container">
          <h1>Find Your Perfect Job</h1>
          <p>Discover opportunities that match your skills and career goals</p>
        </div>
      </div>

      <div className="job-filters">
        <div className="container">
          <div className="filters-grid">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-select"
            >
              {locations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="job-results">
        <div className="container">
          <div className="results-header">
            <h2>{filteredJobs.length} Jobs Found</h2>
          </div>
          
          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                
                <div className="job-company">
                  <span className="company-name">{job.company}</span>
                  <span className="job-location">📍 {job.location}</span>
                </div>
                
                <div className="job-salary">
                  <span className="salary-range">{job.salary}</span>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-card-footer">
                  <span className="job-posted">{job.posted}</span>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No jobs found</h3>
              <p>Try adjusting your search criteria or browse all available positions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;