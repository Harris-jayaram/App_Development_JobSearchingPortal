import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import '../../Assest/css/DashBoard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, PieChart, Pie } from 'recharts';
import { FaUserAlt, FaDollarSign, FaTasks, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';

const Dashboard = () => {
  // Initialize state with hardcoded data or fetched data
  const [data, setData] = useState({
    jobsPosted: [
      { name: 'January', jobsPosted: 30 },
      { name: 'February', jobsPosted: 45 },
      { name: 'March', jobsPosted: 20 },
      { name: 'April', jobsPosted: 75 },
    ],
    applications: [
      { name: 'January', applications: 200 },
      { name: 'February', applications: 300 },
      { name: 'March', applications: 150 },
      { name: 'April', applications: 400 },
    ],
    jobCategories: [
      { name: 'Engineering', jobs: 50 },
      { name: 'Marketing', jobs: 30 },
      { name: 'Sales', jobs: 20 },
    ],
    revenue: 120000,
    activeUsers: 1200,
    upcomingEvents: [
      { event: 'Team Meeting', date: '2024-08-20' },
      { event: 'Project Deadline', date: '2024-08-25' },
    ],
    scheduledMeetings: [
      { title: 'Weekly Sync', date: '2024-08-14' },
      { title: 'Client Meeting', date: '2024-08-16' },
    ],
  });

  const [news, setNews] = useState([
    { title: 'New Job Openings Announced', date: '2024-08-10' },
    { title: 'Company Acquires New Client', date: '2024-08-12' },
  ]);

  const [registrationDetails, setRegistrationDetails] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, USA',
  });

  // Simulate live data updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        jobsPosted: prevData.jobsPosted.map(item => ({
          ...item,
          jobsPosted: item.jobsPosted + Math.floor(Math.random() * 10),
        })),
        applications: prevData.applications.map(item => ({
          ...item,
          applications: item.applications + Math.floor(Math.random() * 50),
        })),
        activeUsers: prevData.activeUsers + Math.floor(Math.random() * 10),
        revenue: prevData.revenue + Math.floor(Math.random() * 5000),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalJobsPosted = data.jobsPosted.reduce((sum, item) => sum + item.jobsPosted, 0);
  const totalApplications = data.applications.reduce((sum, item) => sum + item.applications, 0);

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
            <p><FaDollarSign /> {data.revenue.toLocaleString()}</p>
          </div>
          <div className="metric-card">
            <h3>Active Users</h3>
            <p><FaUserAlt /> {data.activeUsers}</p>
          </div>
        </div>
        <div className="dashboard-charts">
          <div className="chart-container">
            <h3>Jobs Posted Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data.jobsPosted}>
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
              <LineChart data={data.applications}>
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
                <Pie data={data.jobCategories} dataKey="jobs" nameKey="name" fill="#8884d8" />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="dashboard-upcoming-events">
          <h3>Upcoming Events</h3>
          <ul>
            {data.upcomingEvents.map((event, index) => (
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
            {data.scheduledMeetings.map((meeting, index) => (
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
