import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Passionate about connecting talent with opportunity. 10+ years in HR tech.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Full-stack developer with expertise in AI and machine learning systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '👩‍🎨',
      description: 'Award-winning UX designer focused on creating inclusive user experiences.'
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      image: '👨‍💼',
      description: 'Expert in building relationships between companies and top talent.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Purpose-Driven',
      description: 'We believe everyone deserves meaningful work that aligns with their values and goals.'
    },
    {
      icon: '🤝',
      title: 'Inclusive',
      description: 'We champion diversity and create opportunities for underrepresented communities.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to revolutionize the job search experience.'
    },
    {
      icon: '💡',
      title: 'Transparency',
      description: 'We believe in honest communication and clear expectations throughout the process.'
    }
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Pioneering the Future of Work</h1>
            <p>
              We're on a mission to transform how people find meaningful careers and how companies 
              discover exceptional talent. Founded in 2020, Harper & Whitman Global Solutions has helped thousands of 
              professionals take the next step in their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Harper & Whitman Global Solutions was born from a simple observation: the traditional job search process 
                was broken. Job seekers spent countless hours applying to positions that weren't 
                the right fit, while employers struggled to find qualified candidates.
              </p>
              <p>
                We set out to create a platform that would use smart matching algorithms, 
                comprehensive company insights, and streamlined application processes to 
                make job searching more efficient and effective for everyone involved.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <h3>50,000+</h3>
                  <p>Successful Matches</p>
                </div>
                <div className="stat">
                  <h3>5,000+</h3>
                  <p>Partner Companies</p>
                </div>
                <div className="stat">
                  <h3>95%</h3>
                  <p>User Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">📈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-cta">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>
            Ready to be part of the future of work? Whether you're looking for your next opportunity 
            or want to find amazing talent for your company, we're here to help.
          </p>
          <div className="cta-buttons">
            <a href="/jobs" className="btn btn-primary">Find Jobs</a>
            <a href="/contact" className="btn btn-secondary">Partner With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;