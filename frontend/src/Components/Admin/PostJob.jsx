// src/Components/Admin/PostJob.js
import React, { useState } from 'react';
import PostJobForm from './PostJobForm';
import "../../Assest/css/PostJob.css"; // Create and import the CSS file for form styling
import Sidebar from './Sidebar';
import { AuthContext } from '../../Components/Authentication/AuthContext';

const PostJob = () => {
  const { username } = React.useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const handlePostJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="post-job-container">
      <Sidebar username={username} />
      <PostJobForm onSubmit={handlePostJob} />
      <div className="posted-jobs">
        <h2>Posted Jobs</h2>
        {jobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostJob;
