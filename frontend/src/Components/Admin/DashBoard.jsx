import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import '../../Assest/css/DashBoard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, PieChart, Pie } from 'recharts';
import { FaUserAlt, FaDollarSign, FaTasks, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('dashboardData');
    return savedData ? JSON.parse(savedData) : {}; // Initialize with an empty object if no data
  });

  const [news, setNews] = useState(() => {
    const savedNews = localStorage.getItem('news');
    return savedNews ? JSON.parse(savedNews) : []; // Initialize with an empty array if no data
  });

  const [registrationDetails, setRegistrationDetails] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Simulate live data updates every 5 seconds
    const interval = setInterval(() => {
      setData(prevData => {
        const updatedData = {
          ...prevData,
          jobsPosted: prevData.jobsPosted?.map(item => ({
            ...item,
            jobsPosted: item.jobsPosted + Math.floor(Math.random() * 10),
          })) || [],
          applications: prevData.applications?.map(item => ({
            ...item,
            applications: item.applications + Math.floor(Math.random() * 50),
          })) || [],
          activeUsers: prevData.activeUsers + Math.floor(Math.random() * 10), // Update active users
          revenue: prevData.revenue + Math.floor(Math.random() * 5000), // Update revenue
        };
        localStorage.setItem('dashboardData', JSON.stringify(updatedData));
        return updatedData;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch registration details from localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');

    setRegistrationDetails({
      username: username || 'N/A',
      email: email || 'N/A',
      phone: phone || 'N/A',
      address: address || 'N/A',
    });
  }, []);

  useEffect(() => {
    // Retrieve news from localStorage when the component mounts
    const savedNews = localStorage.getItem('news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    }
  }, []);

  const totalJobsPosted = data.jobsPosted?.reduce((sum, item) => sum + item.jobsPosted, 0) || 0;
  const totalApplications = data.applications?.reduce((sum, item) => sum + item.applications, 0) || 0;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header>
        <div className="dashboard-metrics">
          <div className="metric-card">
            <h3>Total Jobs Posted</h3>
            <p>{totalJobsPosted}</p>
          </div>
          <div className="metric-card">
            <h3>Total Applications</h3>
            <p>{totalApplications}</p>
          </div>
          <div className="metric-card">
            <h3>Revenue</h3>
            <p><FaDollarSign /> {data.revenue?.toLocaleString() || '0'}</p>
          </div>
          <div className="metric-card">
            <h3>Active Users</h3>
            <p><FaUserAlt /> {data.activeUsers || '0'}</p>
          </div>
        </div>
        <div className="dashboard-charts">
          <div className="chart-container">
            <h3>Jobs Posted Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data.jobsPosted || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobsPosted" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3>Applications Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data.applications || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3>Job Categories Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={data.jobCategories || []} dataKey="jobs" nameKey="name" fill="#8884d8" />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="dashboard-upcoming-events">
          <h3>Upcoming Events</h3>
          <ul>
            {data.upcomingEvents?.map((event, index) => (
              <li key={index}>
                <FaCalendarAlt /> {event.date} - {event.event}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-news">
          <h3>Recent News</h3>
          <ul>
            {news.length === 0 ? (
              <p>No recent news available.</p>
            ) : (
              news.map((item, index) => (
                <li key={index}>
                  <FaNewspaper /> {item.title} ({item.date})
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="dashboard-scheduled-meetings">
          <h3>Scheduled Meetings</h3>
          <ul>
            {data.scheduledMeetings?.map((meeting, index) => (
              <li key={index}>
                <FaTasks /> {meeting.title} - {meeting.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Display registration details */}
        <div className="registration-details">
          <h3>Registered User Details</h3>
          <p><strong>Username:</strong> {registrationDetails.username}</p>
          <p><strong>Email:</strong> {registrationDetails.email}</p>
          <p><strong>Phone:</strong> {registrationDetails.phone}</p>
          <p><strong>Address:</strong> {registrationDetails.address}</p>
        </div>

        <footer className="dashboard-footer">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
