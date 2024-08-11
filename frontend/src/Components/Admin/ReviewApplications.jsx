import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './ReviewApplications.css';
import logo from '../../Assest/Img/Shigoto1.png'; // Updated logo path
import { Modal } from 'react-bootstrap'; // Added react-bootstrap for modal

const ReviewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    // Fetch applications from local storage
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApplications);
  }, []);

  const updateStatus = (index, status) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = status;
    setApplications(updatedApplications);

    // Update local storage with new status
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="review-applications-container">
      <Sidebar />
      <div className="review-applications-content">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" />
        </div>
        <h1>Review Applications</h1>

        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search by name or job title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="applications-list">
          {filteredApplications.map((app, index) => (
            <div
              key={index}
              className="application-card"
              onClick={() => setSelectedApplication({ ...app, index })}
            >
              <h3>{app.name}</h3>
              <p><strong>Applied for:</strong> {app.jobTitle}</p>
              <p><strong>Status:</strong> {app.status}</p>
              <p><strong>Date Applied:</strong> {app.dateApplied}</p>
            </div>
          ))}
        </div>

        {selectedApplication && (
          <Modal show={true} onHide={() => setSelectedApplication(null)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Application Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>{selectedApplication.name}</h3>
              <p><strong>Applied for:</strong> {selectedApplication.jobTitle}</p>
              <p><strong>Email:</strong> {selectedApplication.email}</p>
              <p><strong>Status:</strong> {selectedApplication.status}</p>
              <p><strong>Date Applied:</strong> {selectedApplication.dateApplied}</p>
              <p><strong>Resume:</strong> <a href={selectedApplication.resume} download>Download</a></p>
              <p><strong>Cover Letter:</strong> {selectedApplication.coverLetter}</p>

              <div className="status-buttons">
                {selectedApplication.status !== 'Reviewed' && (
                  <button onClick={() => updateStatus(selectedApplication.index, 'Reviewed')}>Mark as Reviewed</button>
                )}
                {selectedApplication.status !== 'Rejected' && (
                  <button onClick={() => updateStatus(selectedApplication.index, 'Rejected')}>Reject</button>
                )}
                {selectedApplication.status !== 'Ongoing' && (
                  <button onClick={() => updateStatus(selectedApplication.index, 'Ongoing')}>Mark as Ongoing</button>
                )}
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
      </div>
  );
};

export default ReviewApplications;

