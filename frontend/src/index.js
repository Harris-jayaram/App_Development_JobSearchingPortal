import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
// import PostJob from './Components/Admin/PostJob';
import RecruiterLogin from './Components/Admin/RecruiterLogin';
import { AuthProvider, AuthContext } from './Components/Authentication/AuthContext';
import JobCard from './Components/Course/JobCard';
import BuyNow from './Components/Course/BuyNow';
import Apply from './Components/DomainJobs/Apply';
import Dashboard from './Components/Admin/DashBoard';
import Homepage from './Components/Admin/Homepage';
import JobPosting from './Components/Admin/JobPosting';
import ReviewApplications from './Components/Admin/ReviewApplications';
import ManageClients from './Components/Admin/ManageClients';
import UpdateNews from './Components/Admin/UpdateNews';
import About from './Components/Welcome_page/About';
import Welcome from './Components/Welcome_page/Welcome';
import CommunityFAQ from './Components/Welcome_page/CustomerFAQ';
import ContactUs from './Components/Contact Us/ContactUs';
import Blog from './Components/Welcome_page/Blog';
import Hackathon from './Components/Hackathon/Hackathon';
import KanbanBoard from './Components/Admin/KanbanBoard';
import Feedback from './Components/Admin/Feedback';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const MainApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/login" element={<RecruiterLogin />} />
          <Route path="/home" element={<Welcome />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job-posting" element={<ProtectedRoute element={<JobPosting />} />} />
          <Route path="/apply" element={<Apply />} /> {/* Add the Apply route */}
          <Route path="/review-applications" element={<ReviewApplications />} />
          <Route path="/manage-clients" element={<ManageClients />} />
          <Route path="/update-news" element={<UpdateNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/communityfaq" element={<CommunityFAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/feedback" element={<Feedback />} />
          
          </Routes>
      </Router>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
