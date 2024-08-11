// src/Components/Admin/UserApplications.jsx
import React from 'react';
import { Card, Typography, Grid, Box, Button } from '@mui/material';
import Sidebar from './Sidebar';

const UserApplications = () => {
  const applications = [
    { id: 1, name: 'John Doe', jobTitle: 'Software Engineer', status: 'Under Review' },
    { id: 2, name: 'Jane Smith', jobTitle: 'Marketing Manager', status: 'Reviewed' },
    // Add more dummy applications as needed
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar username="Admin" />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h4" gutterBottom>User Applications</Typography>
        <Grid container spacing={2}>
          {applications.map((application) => (
            <Grid item xs={12} md={6} key={application.id}>
              <Card variant="outlined" sx={{ padding: 2 }}>
                <Typography variant="h6">{application.name}</Typography>
                <Typography variant="body1">Job Title: {application.jobTitle}</Typography>
                <Typography variant="body1">Status: {application.status}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                    View Resume
                  </Button>
                  <Button variant="contained" color="success" sx={{ mr: 1 }}>
                    Select for Job
                  </Button>
                  <Button variant="contained" color="error">
                    Reject Application
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserApplications;
