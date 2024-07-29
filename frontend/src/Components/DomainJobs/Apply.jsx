import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assest/css/Apply.css';

const Apply = () => {
  const location = useLocation();
  const { job } = location.state;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null,
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Application submitted successfully!');
    // Here you would typically send the data to your backend server
  };

  return (
    <div className="apply-container">
      <h1>Apply for {job.title} at {job.company}</h1>
      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Profile:</label>
          <input 
            type="url" 
            id="linkedin" 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input 
            type="file" 
            id="resume" 
            name="resume" 
            onChange={handleChange} 
            required 
          />
          {formData.resume && <p className="resume-file-name">{formData.resume.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea 
            id="coverLetter" 
            name="coverLetter" 
            value={formData.coverLetter} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Apply;
