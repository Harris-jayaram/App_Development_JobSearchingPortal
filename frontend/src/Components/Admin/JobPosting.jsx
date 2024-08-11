import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../Assest/css/JobPosting.css';
import logo from "../../Assest/Img/Shigoto1.png";

const JobPosting = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    location: '',
    companyName: '',
    salaryRange: '',
    jobType: 'Full-time',
    postingDate: new Date(),
    benefits: '',
    jobLevel: 'Entry Level',
    user: { id: 1 } // Assuming user ID is 1 for example
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleDateChange = (date) => {
    setJobDetails({ ...jobDetails, postingDate: date });
  };

  const addJob = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setJobs([...jobs, data]);
      setJobDetails({
        title: '',
        description: '',
        location: '',
        companyName: '',
        salaryRange: '',
        jobType: 'Full-time',
        postingDate: new Date(),
        benefits: '',
        jobLevel: 'Entry Level',
        user: { id: 1 }
      });
      toast.success('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error('Error posting job. Please try again.');
    }
  };

  const deleteJob = (id) => {
    fetch(`http://localhost:8080/api/job/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setJobs(jobs.filter(job => job.id !== id));
        toast.info('Job deleted.');
      })
      .catch(error => {
        console.error('There was an error deleting the job!', error);
        toast.error('Error deleting job. Please try again.');
      });
  };

  const fetchJobs = () => {
    fetch('http://localhost:8080/api/job')
      .then(response => response.json())
      .then(data => {
        setJobs(data);
      })
      .catch(error => {
        console.error('There was an error fetching jobs!', error);
        toast.error('Error fetching jobs. Please try again.');
      });
  };

  return (
    <div className="job-posting-container">
      <Sidebar />
      <div className="job-posting-content">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <h1>Job Posting</h1>
        <div className="job-form">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={jobDetails.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Job Description"
            value={jobDetails.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={jobDetails.location}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={jobDetails.companyName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="salaryRange"
            placeholder="Salary Range"
            value={jobDetails.salaryRange}
            onChange={handleInputChange}
          />
          <textarea
            name="benefits"
            placeholder="Job Benefits"
            value={jobDetails.benefits}
            onChange={handleInputChange}
          />
          <select
            name="jobType"
            value={jobDetails.jobType}
            onChange={handleInputChange}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <select
            name="jobLevel"
            value={jobDetails.jobLevel}
            onChange={handleInputChange}
          >
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
          <div className="date-picker">
            <label>Posting Date: </label>
            <DatePicker
              selected={jobDetails.postingDate}
              onChange={handleDateChange}
            />
          </div>
          <button onClick={addJob}>Add Job</button>
        </div>
        <div className="job-list">
          <h2>Current Job Postings</h2>
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            <ul>
              {jobs.map(job => (
                <li key={job.id}>
                  <strong>{job.title}</strong> - {job.description} ({job.location})<br />
                  <small>{job.companyName}</small> | <small>{job.salaryRange}</small> | <small>{job.jobType}</small> | <small>{job.jobLevel}</small><br />
                  <small>Posted on: {new Date(job.postingDate).toLocaleDateString()}</small><br />
                  <small>Benefits: {job.benefits}</small>
                  <button onClick={() => deleteJob(job.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobPosting;
