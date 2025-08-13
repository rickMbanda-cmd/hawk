import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import JobListings from '../pages/JobListings';
import CandidateDashboard from '../pages/CandidateDashboard';
import EmployerDashboard from '../pages/EmployerDashboard';
import CompanyProfile from '../pages/CompanyProfile';
import ApplicationTracking from '../pages/ApplicationTracking';
import Billing from '../pages/Billing';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivacyPolicy from '../pages/Legal/PrivacyPolicy.tsx';
import TermsOfService from '../pages/Legal/TermsOfService.tsx';
import AdminPanel from '../pages/AdminPanel';

const AppRoutes = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/applications" element={<ApplicationTracking />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;