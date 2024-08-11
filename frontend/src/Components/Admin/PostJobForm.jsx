// src/Components/Admin/PostJobForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const PostJobForm = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add job posting logic here
    console.log('Job posted:', job);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>Post a New Job</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          name="title"
          value={job.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Job Description"
          name="description"
          value={job.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          label="Location"
          name="location"
          value={job.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Salary"
          name="salary"
          value={job.salary}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Post Job
        </Button>
      </form>
    </Box>
  );
};

export default PostJobForm;
