import React, { useState } from 'react';

const PostJobForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [domain, setDomain] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [positions, setPositions] = useState('');
  const [applyLink, setApplyLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, company, domain, location, experience, positions, applyLink, daysAgo: 0 });
    setTitle('');
    setCompany('');
    setDomain('');
    setLocation('');
    setExperience('');
    setPositions('');
    setApplyLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-job-form">
      <h2>Post a Job</h2>
      <div>
        <label>Job Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Company</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
      </div>
      <div>
        <label>Domain</label>
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} required />
      </div>
      <div>
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label>Experience</label>
        <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required />
      </div>
      <div>
        <label>Positions</label>
        <input type="number" value={positions} onChange={(e) => setPositions(e.target.value)} required />
      </div>
      <div>
        <label>Apply Link</label>
        <input type="url" value={applyLink} onChange={(e) => setApplyLink(e.target.value)} required />
      </div>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default PostJobForm;
