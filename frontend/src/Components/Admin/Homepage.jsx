// src/Components/Homepage/Homepage.jsx
import React from 'react';
import { Typography, Grid, Button, Box, Card, CardContent } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import FeaturedJobs from './FeaturedJobs'; // Component for featured jobs
// import TopCompanies from './TopCompanies'; // Component for top companies
// import JobCategories from './JobCategories'; // Component for job categories
// import LatestJobs from './LatestJobs'; // Component for latest job postings
// import UpcomingEvents from './UpcomingEvents'; // Component for upcoming events

const Homepage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <header style={{ marginBottom: '20px' }}>
        <Typography variant="h2" component="h1" gutterBottom>Welcome to ShigoTo</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <input type="text" placeholder="Search for jobs..." style={{ width: '60%', padding: '10px', borderRadius: '4px' }} />
          <Button variant="contained" color="primary" sx={{ marginLeft: '10px' }}>Search</Button>
        </Box>
      </header>

      {/* Featured Jobs */}
      {/* <FeaturedJobs /> */}

      {/* Top Hiring Companies */}
      <Typography variant="h4" gutterBottom>Top Hiring Companies</Typography>
      {/* <TopCompanies /> */}

      {/* Job Categories */}
      <Typography variant="h4" gutterBottom>Job Categories</Typography>
      {/* <JobCategories /> */}

      {/* Latest Job Postings */}
      <Typography variant="h4" gutterBottom>Latest Job Postings</Typography>
      {/* <LatestJobs /> */}

      {/* Upcoming Events */}
      <Typography variant="h4" gutterBottom>Upcoming Events</Typography>
      {/* <UpcomingEvents /> */}

      {/* Testimonials */}
      <Typography variant="h4" gutterBottom>Success Stories</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">"I found my dream job through this portal!"</Typography>
            <Typography>- Jane Doe</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Homepage;
